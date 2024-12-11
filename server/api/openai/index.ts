import type { DefineMethods } from "aspida";
import type { TranslationPair } from "service/term";

export type Methods = DefineMethods<{
  get: {
    query: {
      text: string | null;
      targetLanguage: keyof TranslationPair;
    };
    resBody: string; // GETリクエストのレスポンスボディは文字列型
  };
}>;
