import { expect, test } from 'vitest';
import { createSessionClients, noCookieClient } from '../apiClient';
import { POST } from '../utils';

test(POST(noCookieClient.openai), async () => {
  const apiClient = await createSessionClients();

  // APIリクエストを送信
  const res = await apiClient.openai.$post({
    body: {
      question: 'Tell me about the weather.',
    },
  });

  // ステータスコードがなく、レスポンスが `{ response: string }` の形で返される場合
  expect(res.response).toContain('weather'); // `res.response` を直接使用してテスト
});

test(POST(noCookieClient.openai), async () => {
  await expect(
    noCookieClient.openai.post({
      body: {
        question: 'Tell me about the weather.',
      },
    }),
  ).rejects.toHaveProperty('response.status', 401); // ここはエラーハンドリングの部分なのでそのまま
});
