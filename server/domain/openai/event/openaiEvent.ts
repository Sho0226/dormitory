import { fetchHotPepperShops } from "domain/shop/event/shopEvent";
import { openai } from "service/openai";

//eslint-disable-next-line
export async function streamChatCompletion(): Promise<string> {
  let responseText = "";

  try {
    // ホットペッパーAPIから店舗情報取得
    const hotpepperShops = await fetchHotPepperShops(35.776, 139.72, 5);

    if (!hotpepperShops || hotpepperShops.length === 0) {
      throw new Error("店舗情報が見つかりませんでした。");
    }

    // 店舗情報を整形
    const shopDescriptions = hotpepperShops
      .slice(0, 3)
      .map((shop) => {
        const shortCatch =
          shop.catch.length > 50 ? `${shop.catch.slice(0, 50)}...` : shop.catch;
        return `店舗名: ${shop.name}\n住所: ${shop.address}\nジャンル: ${shop.genre.name}\nおすすめポイント: ${shortCatch}`;
      })
      .join("\n\n");

    // OpenAI APIでチャット補完
    const stream = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      stream: true,
      messages: [
        {
          role: "system",
          content: `あなたは東京都北区赤羽駅3km以内の実際にある美味しいお店を教えてくれる親切なアシスタントです。以下はホットペッパーグルメAPIから取得した情報です。\n\n${shopDescriptions}\n\nこの情報を基に、赤羽で評判の良いお店や地元の人気店を3軒紹介してください。それぞれのお店の特徴やおすすめメニューも簡単に説明してください。回答にマークダウン表記はしないでください。`,
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
  } catch (error) {
    console.error("Error:", error);
    responseText = "店舗情報を取得できませんでした。もう一度お試しください。";
  }

  return responseText;
}
