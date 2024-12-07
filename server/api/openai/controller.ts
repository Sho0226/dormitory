import { translateText } from 'domain/openai/event/openaiEvent';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ query }) => {
    const { text, targetLanguage } = query; // クエリパラメータからテキストとターゲット言語を取得

    if (!text || !targetLanguage) {
      return { status: 400, body: 'Missing text or target language' };
    }

    try {
      const translatedText = await translateText(text, targetLanguage);
      return { status: 200, body: translatedText };
    } catch (error) {
      console.error('Translation error:', error);
      return { status: 500, body: 'Translation failed' };
    }
  },
}));
