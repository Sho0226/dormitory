import { backOff } from "exponential-backoff";
import { openai } from "service/openai";
import { langMap, preserveTerms, type TranslationPair } from "service/term";

// キャッシュ用マップ
const translationCache = new Map<string, string>();

// 言語マッピング

// Preserve Terms の適用関数
export function applyPreserveTerms(
  text: string,
  targetLanguage: keyof TranslationPair,
): string {
  const terms = Object.entries(preserveTerms);
  const regex = new RegExp(terms.map(([key]) => `\\b${key}\\b`).join("|"), "g");

  return text.replace(regex, (matched) => {
    return preserveTerms[matched]?.[targetLanguage] || matched;
  });
}

// タイムアウトを追加するヘルパー関数
function withTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
  const timeout = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error("Request timed out")), timeoutMs),
  );
  return Promise.race([promise, timeout]);
}

// ソース言語検出関数
async function detectSourceLanguage(
  text: string,
): Promise<keyof TranslationPair> {
  try {
    const response = await withTimeout(
      openai.chat.completions.create({
        model: "gpt-4o-mini",
        temperature: 0,
        messages: [
          {
            role: "system",
            content:
              "Detect the language of the text and respond with only the language code: en, ja, zh_cn, zh_tw, or ko",
          },
          { role: "user", content: text },
        ],
      }),
      30000, // タイムアウト30秒
    );

    const detectedLang = response.choices[0]?.message?.content?.trim();
    if (!detectedLang) throw new Error("Language detection failed.");
    return detectedLang as keyof TranslationPair;
  } catch (error) {
    console.error("Error detecting source language:", error);
    return "en"; // デフォルト値として英語を返す
  }
}

// バッチ翻訳関数
export async function translateBatch(
  texts: string[],
  targetLanguage: keyof TranslationPair = "en",
): Promise<string[]> {
  const results: string[] = [];

  for (let i = 0; i < texts.length; i += 10) {
    const batch = texts.slice(i, i + 10);

    const translatedBatch = await backOff(
      () =>
        Promise.all(
          batch.map(async (text) => {
            const cacheKey = `${text}-${targetLanguage}`;
            const cachedValue = translationCache.get(cacheKey);
            if (cachedValue) return cachedValue;

            try {
              // Preserve Terms の適用
              const preProcessedText = applyPreserveTerms(text, targetLanguage);

              // ソース言語検出
              const sourceLang = await detectSourceLanguage(preProcessedText);

              // 翻訳リクエスト
              const response = await withTimeout(
                openai.chat.completions.create({
                  model: "gpt-4o-mini",
                  temperature: 0,
                  messages: [
                    {
                      role: "system",
                      content: `You are a direct ${langMap[sourceLang]}-to-${langMap[targetLanguage]} translator. Translate the following text.`,
                    },
                    { role: "user", content: preProcessedText },
                  ],
                }),
                30000, // タイムアウト30秒
              );

              const translatedText =
                response.choices[0]?.message?.content?.trim() || "";
              if (!translatedText) throw new Error("Translation failed.");

              translationCache.set(cacheKey, translatedText); // キャッシュ保存
              return translatedText;
            } catch (error) {
              console.error("Translation error:", error);
              return text; // 翻訳失敗時は元のテキストを返す
            }
          }),
        ),
      { numOfAttempts: 5, startingDelay: 1000, timeMultiple: 2 }, // 最大5回再試行、初期遅延1秒、遅延倍増
    );

    results.push(...translatedBatch);

    // スロットリング（1分間50回制限対応）
    await new Promise((resolve) =>
      setTimeout(resolve, Math.ceil(60000 / texts.length)),
    );
  }

  return results;
}
