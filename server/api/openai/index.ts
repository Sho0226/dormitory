// import type { DefineMethods } from 'aspida';

// export type Methods = DefineMethods<{
//   post: {
//     reqBody: { question: string };
//     resBody: { response: string };
//   };
// }>;

import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    query: {
      text: string;
      targetLanguage: string;
    };
    resBody: string; // GETリクエストのレスポンスボディは文字列型
  };
}>;
