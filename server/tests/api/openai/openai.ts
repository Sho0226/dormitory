import { expect, test } from 'vitest';
import { createSessionClients, noCookieClient } from '../apiClient';
import { POST } from '../utils';

test(POST(noCookieClient.openai), async () => {
  const apiClient = await createSessionClients();
  const res = await apiClient.openai.$post({
    body: {
      question: 'Tell me about the weather.',
    },
  });

  expect(res.response).toEqual('expected response text');

  await expect(
    noCookieClient.openai.post({
      body: {
        question: 'What is the weather today?',
      },
    }),
  ).rejects.toHaveProperty('response.status', 401);
});
