import { backOff } from 'exponential-backoff';
import { openai } from 'service/openai';
import type { TranslationPair } from 'service/term';
import { preserveTerms } from 'service/term';

const langMap: Record<keyof TranslationPair, string> = {
  en: 'English',
  ja: 'Japanese',
  zh_cn: 'Simplified Chinese',
  zh_tw: 'Traditional Chinese',
  ko: 'Korean',
} as const;

export async function translateText(
  text: string,
  targetLanguage: keyof TranslationPair = 'en',
): Promise<string> {
  let translatedText = '';

  // 入力テキストの言語を推定
  const sourceLang = await detectSourceLanguage(text);

  const stream = await backOff(() =>
    openai.chat.completions.create({
      model: 'gpt-4o-mini',
      temperature: 0,
      stream: true,
      messages: [
        {
          role: 'system',
          content: `You are a direct ${langMap[sourceLang]}-to-${langMap[targetLanguage]} translator. Follow these rules exactly:
1. Required translations (USE THESE EXACTLY):
${Object.entries(preserveTerms)
  .map(([key, value]) => `${key} = ${value[targetLanguage]}`)
  .join('\n')}

2. Translation rules:
- Translate from ${langMap[sourceLang]} to ${langMap[targetLanguage]} only
- Output ONLY the translated text
- NO quotation marks in output
- NO explanations or notes
- Keep formatting and special characters
- Use exact translations for specified terms
- Translate naturally while preserving specified terms`,
        },
        {
          role: 'user',
          content: text,
        },
      ],
    }),
  );

  for await (const chunk of stream) {
    translatedText += chunk.choices[0]?.delta?.content || '';
  }

  return translatedText
    .trim()
    .replace(/^["']|["']$/g, '')
    .replace(/^(translates to:|translation:)/i, '')
    .trim();
}

async function detectSourceLanguage(text: string): Promise<keyof TranslationPair> {
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    temperature: 0,
    messages: [
      {
        role: 'system',
        content:
          'Detect the language of the text and respond with only the language code: en, ja, zh_cn, zh_tw, or ko',
      },
      {
        role: 'user',
        content: text,
      },
    ],
  });

  const detectedLang = response.choices[0]?.message?.content?.trim();
  return (detectedLang as keyof TranslationPair) || 'en';
}
