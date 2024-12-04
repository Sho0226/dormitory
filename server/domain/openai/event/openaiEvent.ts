import { backOff } from 'exponential-backoff';
import { openai } from 'service/openai';

// 翻訳用関数
export async function translateText(text: string, targetLanguage: string = 'en'): Promise<string> {
  let translatedText = '';

  const stream = await backOff(() =>
    openai.chat.completions.create({
      model: 'gpt-4o-mini',
      stream: true,
      messages: [
        { role: 'system', content: 'You are a helpful assistant and translator.' },
        { role: 'user', content: ` ${targetLanguage}: "${text}"` },
      ],
    }),
  );

  for await (const chunk of stream) {
    translatedText += chunk.choices[0]?.delta?.content || '';
  }

  return translatedText;
}
