import type { DefineMethods } from "aspida";
import type * as deepl from "deepl-node";

export type Methods = DefineMethods<{
  get: {
    query: { text: string; targetLanguage: deepl.TargetLanguageCode };
    resBody: string;
  };
}>;
