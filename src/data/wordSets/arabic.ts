import { generateLanguageWords } from '../../utils/wordGenerator';

const baseArabicWords: [string, string, string][] = [
  // Set 1: Basic Greetings
  ['مرحبا', 'hello', 'مرحبا، كيف حالك؟'],
  ['مع السلامة', 'goodbye', 'مع السلامة، إلى اللقاء!'],
  ['من فضلك', 'please', 'من فضلك، ساعدني.'],
  ['شكرا', 'thank you', 'شكرا جزيلا!'],
  ['عفوا', 'you\'re welcome', 'عفوا، بكل سرور.'],
  ['نعم', 'yes', 'نعم، أفهم.'],
  ['لا', 'no', 'لا، لا أعرف.'],
  ['عذرا', 'excuse me', 'عذرا، أنا آسف.'],
  ['تشرفت بمعرفتك', 'nice to meet you', 'تشرفت بمعرفتك!'],
  ['إلى اللقاء', 'see you later', 'إلى اللقاء، يا صديقي!'],

  // Set 2: Numbers
  ['واحد', 'one', 'لدي قط واحد.'],
  ['اثنان', 'two', 'لدي أخوان اثنان.'],
  ['ثلاثة', 'three', 'هناك ثلاثة كتب.'],
  ['أربعة', 'four', 'في السنة أربعة فصول.'],
  ['خمسة', 'five', 'لدي خمسة أصابع.'],
  ['ستة', 'six', 'الساعة السادسة صباحا.'],
  ['سبعة', 'seven', 'في الأسبوع سبعة أيام.'],
  ['ثمانية', 'eight', 'الساعة الثامنة مساء.'],
  ['تسعة', 'nine', 'في السنة تسعة أشهر.'],
  ['عشرة', 'ten', 'عشرة يورو، من فضلك.']
];

export const arabicWords = generateLanguageWords('arabic', baseArabicWords);