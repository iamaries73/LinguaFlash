import React from 'react';
import type { WordSet } from '../types/words';

interface SetListProps {
  sets: WordSet[];
  currentSetId: number;
  onSetSelect: (setId: number) => void;
}

const SetList: React.FC<SetListProps> = ({ sets, currentSetId, onSetSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {sets.map((set) => (
        <button
          key={set.id}
          onClick={() => onSetSelect(set.id - 1)}
          className={`p-4 rounded-lg transition-all ${
            currentSetId === set.id - 1
              ? 'bg-indigo-100 border-2 border-indigo-500'
              : 'bg-white hover:bg-gray-50 border border-gray-200'
          }`}
        >
          <div className="text-left">
            <h3 className="font-semibold text-gray-900">
              Set {set.id}: {set.category}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {set.description}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Words {(set.id - 1) * 10 + 1}-{set.id * 10}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default SetList;