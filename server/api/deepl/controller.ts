import { translateText } from "domain/deepl/event/deeplEvent";
import { defineController } from "./$relay";

export default defineController(() => ({
  get: async ({ query }) => {
    const { text, targetLanguage } = query;
    try {
      const translatedText = await translateText(text, targetLanguage);
      return { status: 200, body: translatedText };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      console.error("Translation error:", errorMessage);
      return { status: 500, body: `Translation error: ${errorMessage}` };
    }
  },
}));
