// import { streamChatCompletion } from '../../../server/domain/openai/event/openaiEvent';
// import { defineController } from './$relay';

// export default defineController(() => ({
//   post: async () => {
//     try {
//       const responseText = await streamChatCompletion();

//       return {
//         status: 200,
//         body: { response: responseText },
//       };
//     } catch (error) {
//       return {
//         status: 500,
//         body: { error: 'Internal Server Error' },
//       };
//     }
//   },
// }));
