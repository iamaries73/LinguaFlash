import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SetSelectorProps {
  currentSet: number;
  totalSets: number;
  onSetChange: (setId: number) => void;
}

const SetSelector: React.FC<SetSelectorProps> = ({ currentSet, totalSets, onSetChange }) => {
  const handlePrevSet = () => {
    if (currentSet > 1) {
      onSetChange(currentSet - 2); // -2 because currentSet is 1-based
    }
  };

  const handleNextSet = () => {
    if (currentSet < totalSets) {
      onSetChange(currentSet); // currentSet is already the next set's index
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center justify-between bg-white rounded-lg shadow-md p-4">
        <button
          onClick={handlePrevSet}
          disabled={currentSet === 1}
          className={`p-2 rounded-lg transition-colors ${
            currentSet === 1
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <div className="flex-1 text-center">
          <select
            value={currentSet - 1}
            onChange={(e) => onSetChange(parseInt(e.target.value))}
            className="block w-full max-w-xs mx-auto rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white py-2 px-3 text-gray-900"
          >
            {Array.from({ length: totalSets }, (_, i) => (
              <option key={i} value={i}>
                Set {i + 1} (Words {i * 10 + 1}-{(i + 1) * 10})
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleNextSet}
          disabled={currentSet === totalSets}
          className={`p-2 rounded-lg transition-colors ${
            currentSet === totalSets
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
      
      <div className="text-sm text-gray-600 text-center">
        {currentSet} of {totalSets} sets
      </div>
    </div>
  );
};

export default SetSelector;