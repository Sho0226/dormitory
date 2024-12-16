import { DeepL_KEY } from "service/envValues";
import * as deepl from "deepl-node";

const translator = new deepl.Translator(DeepL_KEY);

const translateText = async (
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
