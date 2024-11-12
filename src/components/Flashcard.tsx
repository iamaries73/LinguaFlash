import React, { useState } from 'react';
import { Volume2, Check, X, ArrowRight } from 'lucide-react';
import { useFlashcards } from '../hooks/useFlashcards';
import { useAudio } from '../hooks/useAudio';
import { ProgressBar } from './ProgressBar';
import SetSelector from './SetSelector';

interface FlashcardProps {
  language: string;
}

export const Flashcard: React.FC<FlashcardProps> = ({ language }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFemaleVoice, setIsFemaleVoice] = useState(true);
  const { 
    currentWord, 
    handleCorrect, 
    handleIncorrect, 
    handleNext,
    isComplete,
    setProgress,
    totalProgress,
    currentSet,
    totalSets,
    wordsInSet,
    masteredWords,
    switchSet
  } = useFlashcards(language);
  const { speak } = useAudio();

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleCardResponse = (correct: boolean) => {
    if (correct) {
      handleCorrect();
    } else {
      handleIncorrect();
    }
    setIsFlipped(false);
  };

  if (isComplete) {
    return (
      <div className="text-center p-8 card-glass rounded-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Set {currentSet} Complete! 🎉
        </h2>
        <p className="text-gray-600 mb-4">
          You've mastered all words in this set. Ready for the next one?
        </p>
        <button
          onClick={() => switchSet(currentSet)}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Next Set
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <div className="w-full max-w-2xl">
        <SetSelector 
          currentSet={currentSet}
          totalSets={totalSets}
          onSetChange={switchSet}
        />
      </div>

      <div className="w-full max-w-2xl card-glass rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-gray-600">
            Set {currentSet}/{totalSets} • Words Mastered: {masteredWords}/{wordsInSet}
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsFemaleVoice(!isFemaleVoice)}
              className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
              title={`Switch to ${isFemaleVoice ? 'male' : 'female'} voice`}
            >
              {isFemaleVoice ? '👩' : '👨'}
            </button>
            <button
              onClick={() => speak(currentWord?.original || '', language, isFemaleVoice)}
              className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Volume2 className="h-6 w-6" />
            </button>
          </div>
        </div>

        <ProgressBar 
          setProgress={setProgress}
          totalProgress={totalProgress}
          currentSet={currentSet}
          totalSets={totalSets}
        />

        <div className="flex flex-col items-center justify-center min-h-[300px] p-6 bg-white/50 rounded-lg my-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {currentWord?.original}
          </h2>
          {isFlipped && (
            <div className="text-center animate-fadeIn">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                {currentWord?.translation}
              </h3>
              <p className="text-gray-600">
                {currentWord?.example}
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={handleFlip}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
          >
            {isFlipped ? 'Hide' : 'Show'} Meaning
          </button>
          <button
            onClick={handleNext}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-md hover:shadow-lg"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={() => handleCardResponse(false)}
          className="flex items-center px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-md hover:shadow-lg"
        >
          <X className="h-5 w-5 mr-2" />
          Incorrect
        </button>
        <button
          onClick={() => handleCardResponse(true)}
          className="flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-md hover:shadow-lg"
        >
          <Check className="h-5 w-5 mr-2" />
          Correct
        </button>
      </div>
    </div>
  );
};

export default Flashcard;