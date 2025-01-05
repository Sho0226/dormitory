import type { DefineMethods } from "aspida";
import type * as deepl from "deepl-node";

export type Methods = DefineMethods<{
  get: {
    query: {
      text: string[]; // 翻訳対象の文字列配列
      target_lang: deepl.TargetLanguageCode; // 翻訳先言語
    };
    resBody: {
      translations: { text: string }[]; // 翻訳結果の配列
    };
  };
}>;
