import { streamChatCompletion } from '../../../server/domain/openai/event/openaiEvent';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async () => {
    try {
      const responseText = await streamChatCompletion();

      return {
        status: 200,
        body: { response: responseText },
      };
    } catch (error) {
      // `error` が `unknown` 型のため、 `Error` 型にキャスト
      const err = error as Error;

      // 認証エラーの場合に401を返す
      if (err.message === 'Unauthorized') {
        return {
          status: 401,
          body: { error: 'Unauthorized' },
        };
      }

      console.error('Error in streamChatCompletion:', err.message);
      return {
        status: 500,
        body: { error: 'Internal Server Error' },
      };
    }
  },
}));
