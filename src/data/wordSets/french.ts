import { generateLanguageWords } from '../../utils/wordGenerator';

const baseFrenchWords: [string, string, string][] = [
  // Set 1: Basic Greetings
  ['bonjour', 'hello', 'Bonjour, comment allez-vous?'],
  ['au revoir', 'goodbye', 'Au revoir, à bientôt!'],
  ['s\'il vous plaît', 'please', 'S\'il vous plaît, aidez-moi.'],
  ['merci', 'thank you', 'Merci beaucoup!'],
  ['de rien', 'you\'re welcome', 'De rien, c\'est un plaisir.'],
  ['oui', 'yes', 'Oui, je comprends.'],
  ['non', 'no', 'Non, je ne sais pas.'],
  ['excusez-moi', 'excuse me', 'Excusez-moi, je suis désolé.'],
  ['enchanté', 'nice to meet you', 'Enchanté de vous rencontrer.'],
  ['à bientôt', 'see you soon', 'À bientôt, mon ami!'],

  // Set 2: Numbers
  ['un', 'one', 'J\'ai un chat.'],
  ['deux', 'two', 'J\'ai deux frères.'],
  ['trois', 'three', 'Il y a trois livres.'],
  ['quatre', 'four', 'Quatre saisons dans l\'année.'],
  ['cinq', 'five', 'J\'ai cinq doigts.'],
  ['six', 'six', 'Six heures du matin.'],
  ['sept', 'seven', 'Sept jours dans la semaine.'],
  ['huit', 'eight', 'Huit heures du soir.'],
  ['neuf', 'nine', 'Neuf mois dans l\'année.'],
  ['dix', 'ten', 'Dix euros, s\'il vous plaît.']
];

export const frenchWords = generateLanguageWords('french', baseFrenchWords);