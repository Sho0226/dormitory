import { expect, test } from "vitest";
import { GET } from "./utils";
import { createSessionClients, noCookieClient } from "./apiClient";

test(GET(noCookieClient.deepl), async () => {
  const apiClient = await createSessionClients();
  const res = await apiClient.deepl.get({
    query: { text: "Hello!", targetLanguage: "ja" },
  });

  expect(res.body).toEqual("こんにちは！");
});
