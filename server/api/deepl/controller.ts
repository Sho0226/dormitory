import { translateText } from "domain/deepl/event/deeplEvent";
import { defineController } from "./$relay";

export default defineController(() => ({
  get: async ({ query }) => {
    const { text, targetLanguage } = query;
    try {
      const translatedText = await translateText(text, targetLanguage);
      return { status: 200, body: translatedText };
    } catch (error) {
      return { status: 500, body: "Translation error" };
    }
  },
}));
