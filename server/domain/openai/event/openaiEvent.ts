import { openai } from 'service/openai';

export async function streamChatCompletion(): Promise<string> {
  let responseText = '';

  const stream = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    stream: true,
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: 'Tell me about the weather.' },
    ],
  });

  for await (const chunk of stream) {
    responseText += chunk.choices[0]?.delta?.content || '';
  }

  return responseText;
}
