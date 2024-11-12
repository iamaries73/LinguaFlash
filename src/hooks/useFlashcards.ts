import { useState, useCallback, useEffect } from 'react';
import { words } from '../data/words';

interface Word {
  id: number;
  original: string;
  translation: string;
  example: string;
  language: string;
}

interface SetProgress {
  setId: number;
  masteredWords: number[];
  attempted: number;
}

export const useFlashcards = (language: string) => {
  const [currentSetId, setCurrentSetId] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [setsProgress, setSetsProgress] = useState<SetProgress[]>([]);
  
  // Filter words by language and organize into sets of 10
  const languageWords = words.filter(word => word.language === language);
  const sets = Array.from({ length: Math.ceil(languageWords.length / 10) }, (_, setIndex) => 
    languageWords.slice(setIndex * 10, (setIndex + 1) * 10)
  );
  
  // Reset current index when language changes
  useEffect(() => {
    setCurrentIndex(0);
    setCurrentSetId(0);
  }, [language]);
  
  const currentSet = sets[currentSetId] || [];
  const currentWord = currentSet[currentIndex];
  
  // Get or initialize current set progress
  const getCurrentSetProgress = useCallback((): SetProgress => {
    const existing = setsProgress.find(p => p.setId === currentSetId);
    if (existing) return existing;
    
    const newProgress: SetProgress = {
      setId: currentSetId,
      masteredWords: [],
      attempted: 0
    };
    setSetsProgress(prev => [...prev, newProgress]);
    return newProgress;
  }, [currentSetId, setsProgress]);
  
  const currentSetProgress = getCurrentSetProgress();
  
  // Calculate progress percentages
  const setProgress = Math.round((currentSetProgress.masteredWords.length / 10) * 100);
  const totalProgress = Math.round((setsProgress.reduce((acc, set) => 
    acc + set.masteredWords.length, 0) / languageWords.length) * 100);

  const handleCorrect = useCallback(() => {
    if (currentWord) {
      setSetsProgress(prev => prev.map(set => 
        set.setId === currentSetId
          ? {
              ...set,
              masteredWords: [...new Set([...set.masteredWords, currentWord.id])],
              attempted: set.attempted + 1
            }
          : set
      ));
      
      if (currentIndex < currentSet.length - 1) {
        setCurrentIndex(prev => prev + 1);
      }
    }
  }, [currentWord, currentIndex, currentSetId, currentSet.length]);

  const handleIncorrect = useCallback(() => {
    setSetsProgress(prev => prev.map(set => 
      set.setId === currentSetId
        ? { ...set, attempted: set.attempted + 1 }
        : set
    ));
    
    if (currentIndex < currentSet.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, currentSetId]);

  const handleNext = useCallback(() => {
    if (currentIndex < currentSet.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, currentSet.length]);

  const switchSet = useCallback((setId: number) => {
    setCurrentSetId(setId);
    setCurrentIndex(0);
  }, []);

  return {
    currentWord,
    setProgress,
    totalProgress,
    handleCorrect,
    handleIncorrect,
    handleNext,
    switchSet,
    isComplete: currentSetProgress.masteredWords.length === currentSet.length,
    totalSets: sets.length,
    currentSet: currentSetId + 1,
    wordsInSet: currentSet.length,
    masteredWords: currentSetProgress.masteredWords.length,
  };
};