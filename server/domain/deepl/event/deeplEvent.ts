import { DeepL_KEY } from "service/envValues";
import * as deepl from "deepl-node";

const DEEPL_API_URL = "https://api-free.deepl.com/v2/translate";
const translator = new deepl.Translator(DeepL_KEY, {
  serverUrl: DEEPL_API_URL,
});

export const translateText = async (
  text: string,
  targetLang: deepl.TargetLanguageCode,
): Promise<string> => {
  try {
    const result = await translator.translateText(text, null, targetLang);
    return result.text;
  } catch (error) {
    console.error("Translation error:", error);
    throw error;
  }
};
