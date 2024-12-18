import { openai } from "service/openai";

export async function streamChatCompletion(): Promise<string> {
  let responseText = "";

  const stream = await openai.chat.completions.create({
    model: "gpt-4o-mini", // 使用するモデル
    stream: true, // ストリーミングモードを有効化
    messages: [
      {
        role: "system",
        content:
          "あなたは東京都北区赤羽駅3km以内の実際にある美味しいお店を教えてくれる親切なアシスタントです。赤羽で評判の良いお店や地元の人気店を3軒紹介してください。それぞれのお店の特徴やおすすめメニューも簡単に説明してください。",
      },
      {
        role: "user",
        content: "赤羽でおすすめの美味しいお店を教えてください。",
      },
    ],
  });

  for await (const chunk of stream) {
    responseText += chunk.choices[0]?.delta?.content || "";
  }

  return responseText;
}
