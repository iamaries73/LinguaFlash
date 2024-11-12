import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import LanguageSelector from './components/LanguageSelector';
import Flashcard from './components/Flashcard';
import { languages } from './data/languages';

const App: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('french');
  const [showLanguageSelector, setShowLanguageSelector] = useState(true);
  
  return (
    <div className="min-h-screen bg-pattern">
      <nav className="nav-glass sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Globe className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">LinguaFlash</span>
            </div>
            <button
              onClick={() => setShowLanguageSelector(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Change Language
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative">
          {showLanguageSelector ? (
            <div className="animate-fadeIn">
              <LanguageSelector
                languages={languages}
                selectedLanguage={selectedLanguage}
                onSelect={(lang) => {
                  setSelectedLanguage(lang);
                  setShowLanguageSelector(false);
                }}
              />
            </div>
          ) : (
            <div className="animate-slideUp">
              <Flashcard language={selectedLanguage} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;