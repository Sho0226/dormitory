import { backOff } from 'exponential-backoff';
import { openai } from 'service/openai';
import { preserveTerms } from 'service/term';

export async function translateText(text: string, targetLanguage: string = 'en'): Promise<string> {
  let translatedText = '';
  const sourceLang = targetLanguage === 'en' ? 'ja' : 'en';

  const stream = await backOff(() =>
    openai.chat.completions.create({
      model: 'gpt-4o-mini',
      temperature: 0,
      stream: true,
      messages: [
        {
          role: 'system',
          content: `You are a direct ${sourceLang}-to-${targetLanguage} translator. Follow these rules exactly:
1. Required translations (USE THESE EXACTLY):
${Object.entries(preserveTerms)
  .map(([key, value]) => `${key} = ${value[targetLanguage]}`)
  .join('\n')}

2. Translation rules:
- Translate from ${sourceLang} to ${targetLanguage} only
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
