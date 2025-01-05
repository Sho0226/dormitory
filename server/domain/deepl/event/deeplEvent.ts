import { DeepL_KEY } from "service/envValues";
import * as deepl from "deepl-node";

const translator = new deepl.Translator(DeepL_KEY);

export const translateText = async (
  text: string[],
  targetLang: deepl.TargetLanguageCode,
): Promise<string[]> => {
  try {
    const result = await translator.translateText(text, null, targetLang);
    console.log("API response:", result);
    return result.map((r) => r.text);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error("Translation error:", errorMessage);
    throw new Error(`DeepL API error: ${errorMessage}`);
  }
};
