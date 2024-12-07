export type Methods = DefineMethods<{
  get: {
    query: {
      text: string | null;
      targetLanguage: string;
    };
    resBody: string; // GETリクエストのレスポンスボディは文字列型
  };
}>;
