// import type { DefineMethods } from 'aspida';

// export type Methods = DefineMethods<{
//   post: {
//     reqBody: { question: string };
//     resBody: { response: string };
//   };
// }>;

import type { DefineMethods } from "aspida";

export type Methods = DefineMethods<{
  get: {
    resBody: string;
  };
}>;
