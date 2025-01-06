import { useState } from "react";
import { apiClient } from "utils/apiClient";
import type * as deepl from "deepl-node";

interface LanguageOption {
  code: deepl.TargetLanguageCode;
  label: string;
}

interface TextNode {
  node: Node;
  originalText: string;
}

const languageOptions: LanguageOption[] = [
  { code: "ja", label: "日本語" },
  { code: "en-US", label: "English" },
  { code: "zh", label: "中文（简体字）" },
  { code: "ko", label: "한국어" },
];

export const LanguageSwitcher = () => {
  const [selectedLanguage, setSelectedLanguage] =
    useState<deepl.TargetLanguageCode>("ja");
  const [textNodeMap] = useState<Map<Node, string>>(new Map());

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const newLanguage = event.target.value as deepl.TargetLanguageCode;
    setSelectedLanguage(newLanguage);
    translatePage(newLanguage);
  };
  //eslint-disable-next-line
  const getTextNodes = (): TextNode[] => {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
    );
    const textNodes: TextNode[] = [];
    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeValue?.trim()) {
        // 初回の場合、オリジナルテキストを保存
        //eslint-disable-next-line
        if (!textNodeMap.has(node)) {
          textNodeMap.set(node, node.nodeValue || "");
        }
        textNodes.push({
          node,
          originalText: textNodeMap.get(node) || "",
        });
      }
    }
    return textNodes;
  };

  const translatePage = async (targetLanguage: deepl.TargetLanguageCode) => {
    if (targetLanguage === "ja") {
      const textNodes = getTextNodes();
      textNodes.forEach(({ node, originalText }) => {
        node.nodeValue = originalText;
      });
      return;
    }
    const textNodes = getTextNodes();
    // 常に原文から翻訳
    const textsToTranslate = textNodes.map(({ originalText }) => originalText);

    try {
      const response = await apiClient.deepl.$get({
        query: {
          text: textsToTranslate,
          target_lang: targetLanguage,
        },
      });

      response.translations.forEach((translation, index) => {
        textNodes[index].node.nodeValue = translation.text;
      });
    } catch (error) {
      console.error("Translation error:", error);
    }
  };

  return (
    <div className="languageSwitcher">
      <select
        value={selectedLanguage}
        onChange={handleLanguageChange}
        className="switchButton"
      >
        {languageOptions.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
