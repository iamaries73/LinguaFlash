import { categories } from './categories';
import type { WordSet } from '../types/words';

function generateWordSets(language: string, baseWords: [string, string, string][]): WordSet[] {
  const sets: WordSet[] = [];
  const wordsPerSet = 10;
  
  // Generate 100 sets of 10 words each
  for (let setIndex = 0; setIndex < 100; setIndex++) {
    const category = categories[setIndex % categories.length];
    const startIndex = setIndex * wordsPerSet;
    const setWords = baseWords.slice(startIndex, startIndex + wordsPerSet);
    
    // If we don't have enough base words, generate procedural words
    while (setWords.length < wordsPerSet) {
      const wordIndex = startIndex + setWords.length;
      setWords.push([
        `${language}_word_${wordIndex}`,
        `Translation ${wordIndex}`,
        `Example sentence for word ${wordIndex} in ${language}`
      ]);
    }
    
    sets.push({
      id: setIndex + 1,
      category: category.name,
      description: category.description,
      words: setWords.map((word, index) => ({
        id: startIndex + index + 1,
        original: word[0],
        translation: word[1],
        example: word[2]
      }))
    });
  }
  
  return sets;
}

export { generateWordSets };