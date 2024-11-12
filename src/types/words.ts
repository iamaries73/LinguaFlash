export interface Word {
  id: number;
  original: string;
  translation: string;
  example: string;
}

export interface WordSet {
  id: number;
  category: string;
  description: string;
  words: Word[];
}

export interface LanguageData {
  code: string;
  name: string;
  flag: string;
  sets: WordSet[];
}