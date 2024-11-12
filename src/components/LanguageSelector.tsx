import React from 'react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

interface LanguageSelectorProps {
  languages: Language[];
  selectedLanguage: string;
  onSelect: (code: string) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  languages,
  selectedLanguage,
  onSelect,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {languages.map((language) => (
        <button
          key={language.code}
          onClick={() => onSelect(language.code)}
          className={`p-6 rounded-xl shadow-md transition-all transform hover:scale-105 ${
            selectedLanguage === language.code
              ? 'bg-indigo-100 border-2 border-indigo-500'
              : 'bg-white hover:shadow-lg'
          }`}
        >
          <div className="flex items-center space-x-4">
            <span className="text-4xl">{language.flag}</span>
            <div className="flex flex-col items-start">
              <span className="text-xl font-semibold text-gray-900">
                {language.name}
              </span>
              <span className="text-sm text-gray-500">
                1000 most common words
              </span>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;