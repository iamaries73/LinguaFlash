import { useState, useEffect } from 'react';
import { generateWordSets } from '../utils/wordSetGenerator';
import type { LanguageData, WordSet } from '../types/words';
import {
  frenchWords,
  spanishWords,
  japaneseWords,
  chineseWords,
  arabicWords
} from '../data/wordSets';

const languageConfigs = {
  french: { name: 'French', flag: '🇫🇷', words: frenchWords },
  spanish: { name: 'Spanish', flag: '🇪🇸', words: spanishWords },
  japanese: { name: 'Japanese', flag: '🇯🇵', words: japaneseWords },
  chinese: { name: 'Chinese', flag: '🇨🇳', words: chineseWords },
  arabic: { name: 'Arabic', flag: '🇸🇦', words: arabicWords }
};

export const useLanguageData = (languageCode: string) => {
  const [languageData, setLanguageData] = useState<LanguageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadLanguageData = async () => {
      setLoading(true);
      try {
        const config = languageConfigs[languageCode as keyof typeof languageConfigs];
        if (!config) throw new Error(`Language ${languageCode} not supported`);

        const sets = generateWordSets(languageCode, config.words);
        
        setLanguageData({
          code: languageCode,
          name: config.name,
          flag: config.flag,
          sets
        });
      } catch (error) {
        console.error('Error loading language data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadLanguageData();
  }, [languageCode]);

  return { languageData, loading };
};