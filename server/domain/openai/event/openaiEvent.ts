import { backOff } from 'exponential-backoff';
import { openai } from 'service/openai';
import { preserveTerms } from 'service/term';

export async function translateText(text: string, targetLanguage: string = 'en'): Promise<string> {
  let translatedText = '';

  const stream = await backOff(() =>
    openai.chat.completions.create({
      model: 'gpt-4o-mini',
      temperature: 0, // 出力の安定性を高める
      stream: true,
      messages: [
        {
          role: 'system',
          content: `You are a direct translator. Follow these rules exactly:
1. Required translations (USE THESE EXACTLY):
${Object.entries(preserveTerms)
  .map(([key, value]) => `${key} = ${value[targetLanguage]}`)
  .join('\n')}

2. Translation rules:
- Output ONLY the translated text
- NO quotation marks in output
- NO explanations or notes
- NO phrases like "translates to" or "translation:"
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

  // 不要な文字の除去
  return translatedText
    .trim()
    .replace(/^["']|["']$/g, '') // 先頭と末尾のクォーテーションを削除
    .replace(/^(translates to:|translation:)/i, '') // 「translates to:」などの余計な文言を削除
    .trim();
}
