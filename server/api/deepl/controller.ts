import { translateText } from "domain/deepl/event/deeplEvent";
import { defineController } from "./$relay";

export default defineController(() => ({
  get: async ({ query }) => {
    const { text, target_lang } = query;

    try {
      const texts = Array.isArray(text) ? text : [text];
      const translatedTexts = await translateText(texts, target_lang);

      // フロントエンドが期待する形式に整形
      return {
        status: 200,
        body: { translations: translatedTexts.map((t) => ({ text: t })) },
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      console.error("Translation error:", errorMessage);
      return { status: 500, body: `Translation error: ${errorMessage}` };
    }
  },
}));
