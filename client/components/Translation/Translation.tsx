import { useEffect, useRef, useState } from 'react';
import { apiClient } from 'utils/apiClient';

interface LanguageOption {
  code: string;
  label: string;
}

const languageOptions: LanguageOption[] = [
  { code: 'ja', label: '日本語' },
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
  { code: 'ko', label: '번역' },
];

export const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('ja');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (langCode: string) => {
    setSelectedLanguage(langCode);
    setIsOpen(false);
    translatePage(langCode); // 言語選択時にページを翻訳
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
    <div ref={dropdownRef} className="languageSwitcher">
      <button onClick={toggleDropdown}>{selectedLanguage === 'ja' ? 'Translation' : '翻訳'}</button>
      {isOpen && (
        <ul className="languageDropdown">
          {languageOptions.map((lang) => (
            <li key={lang.code} onClick={() => handleLanguageSelect(lang.code)}>
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
