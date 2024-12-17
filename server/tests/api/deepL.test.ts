import { expect, test } from "vitest";
import { createSessionClients, noCookieClient } from "./apiClient";
import { GET } from "./utils";

// DeepL API: 正常系テスト
test(GET(noCookieClient.deepl), async () => {
  const apiClient = await createSessionClients();
  const res = await apiClient.deepl.get({
    query: { text: "Hello!", targetLanguage: "ja" },
  });

  // レスポンスが期待通りか確認
  expect(res.body).toEqual("こんにちは！");
});

// DeepL API: `private` エンドポイントテスト（参考にした別テストのスタイル）
test(GET(noCookieClient.private), async () => {
  const apiClient = await createSessionClients();
  const res = await apiClient.private.$get();

  expect(res).toEqual("");

  await expect(noCookieClient.private.get()).rejects.toHaveProperty(
    "response.status",
    401,
  );
});
