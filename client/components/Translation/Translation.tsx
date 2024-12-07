import { useState } from 'react';
import { apiClient } from 'utils/apiClient';

interface LanguageOption {
  code: string;
  label: string;
}

const languageOptions: LanguageOption[] = [
  { code: 'ja', label: '日本語' },
  { code: 'en', label: 'English' },
  { code: 'zh_cn', label: '中文（简体字）' },
  { code: 'zh_tw', label: '中文（繁體字）' },
  { code: 'ko', label: '한국어' },
];

export const LanguageSwitcher = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('ja');

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    translatePage(newLanguage);
  };

  const getTextNodes = (): Node[] => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    const textNodes: Node[] = [];
    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeValue?.trim()) {
        textNodes.push(node);
      }
    }
    return textNodes;
  };

  const translatePage = async (targetLanguage: string) => {
    const textNodes = getTextNodes();

    for (const node of textNodes) {
      try {
        const response = await apiClient.openai.get({
          query: {
            text: node.nodeValue || '',
            targetLanguage,
          },
        });
        //eslint-disable-next-line
        if (response.body) {
          node.nodeValue = response.body; // 翻訳されたテキストで置き換え
        }
      } catch (error) {
        console.error('Translation error:', error);
      }
    }
  };

  return (
    <div className="languageSwitcher">
      <select value={selectedLanguage} onChange={handleLanguageChange} className="switchButton">
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
