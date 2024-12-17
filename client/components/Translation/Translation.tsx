import { useState } from "react";
import { apiClient } from "utils/apiClient";
import type * as deepl from "deepl-node";

interface LanguageOption {
  code: deepl.TargetLanguageCode;
  label: string;
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

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const newLanguage = event.target.value as deepl.TargetLanguageCode;
    setSelectedLanguage(newLanguage);
    translatePage(newLanguage);
  };

  const getTextNodes = (): Node[] => {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
    );
    const textNodes: Node[] = [];
    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeValue?.trim()) {
        textNodes.push(node);
      }
    }
    return textNodes;
  };

  const translatePage = async (targetLanguage: deepl.TargetLanguageCode) => {
    const textNodes = getTextNodes();

    for (const node of textNodes) {
      try {
        const response = await apiClient.deepl.get({
          query: {
            text: node.nodeValue || "",
            targetLanguage,
          },
        });
        //eslint-disable-next-line
        if (response.body) {
          node.nodeValue = response.body; // 翻訳されたテキストで置き換え
        } else {
          console.warn("No translation received for:", node.nodeValue);
        }
      } catch (error) {
        console.error("Translation error:", error);
      }
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
