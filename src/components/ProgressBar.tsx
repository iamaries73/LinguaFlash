import React from 'react';

interface ProgressBarProps {
  setProgress: number;
  totalProgress: number;
  currentSet: number;
  totalSets: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ 
  setProgress, 
  totalProgress, 
  currentSet, 
  totalSets 
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <div>
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            Current Set Progress (Set {currentSet}/{totalSets})
          </span>
          <span className="text-sm font-medium text-gray-700">{setProgress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${setProgress}%` }}
          ></div>
        </div>
      </div>
      
      <div>
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Total Progress</span>
          <span className="text-sm font-medium text-gray-700">{totalProgress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-green-600 h-2.5 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${totalProgress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;