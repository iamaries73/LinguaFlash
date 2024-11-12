import { frenchWords } from './wordSets/french';
import { spanishWords } from './wordSets/spanish';
import { japaneseWords } from './wordSets/japanese';
import { chineseWords } from './wordSets/chinese';
import { arabicWords } from './wordSets/arabic';

// Generate 1000 most common words for each language
const generateWords = () => {
  const words = [];
  let id = 1;

  // Helper function to generate words for a language
  const generateLanguageWords = (language: string, wordsList: Array<[string, string, string]>) => {
    return wordsList.map(([original, translation, example]) => ({
      id: id++,
      original,
      translation,
      example,
      language
    }));
  };

  return [
    ...generateLanguageWords('french', frenchWords),
    ...generateLanguageWords('spanish', spanishWords),
    ...generateLanguageWords('japanese', japaneseWords),
    ...generateLanguageWords('chinese', chineseWords),
    ...generateLanguageWords('arabic', arabicWords)
  ];
};

export const words = generateWords();