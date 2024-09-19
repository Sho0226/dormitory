import { openai } from 'service/openai';

export async function streamChatCompletion(question: string): Promise<string> {
  let responseText = '';

  const stream = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    stream: true,
  });

  for await (const chunk of stream) {
    responseText += chunk.choices[0]?.delta?.content || '';
  }

  return responseText;
}
