import { translateBatch } from "domain/openai/event/openaiEvent";
import { defineController } from "./$relay";
import { langMap, type TranslationPair } from "service/term";

export default defineController(() => ({
  //eslint-disable-next-line
  get: async ({ query }) => {
    const { text, targetLanguage } = query;

    // クエリパラメータの検証
    if (!text || !targetLanguage) {
      return { status: 400, body: "Missing text or target language" };
    }

    try {
      // 型ガードを使用して targetLanguage を keyof TranslationPair に絞り込む
      if (typeof targetLanguage !== "string" || !(targetLanguage in langMap)) {
        return { status: 400, body: "Invalid target language" };
      }

      // 翻訳処理
      const translatedTexts = await translateBatch(
        [text],
        targetLanguage as keyof TranslationPair,
      );
      return { status: 200, body: translatedTexts[0] }; // 翻訳結果を返す
    } catch (error) {
      console.error("Translation error:", error);
      return { status: 500, body: "Translation failed" };
    }
  },
}));
