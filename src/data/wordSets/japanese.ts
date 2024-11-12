import { generateLanguageWords } from '../../utils/wordGenerator';

const baseJapaneseWords: [string, string, string][] = [
  // Set 1: Basic Greetings
  ['こんにちは', 'hello', 'こんにちは、お元気ですか？'],
  ['さようなら', 'goodbye', 'さようなら、また会いましょう！'],
  ['お願いします', 'please', 'お願いします、助けてください。'],
  ['ありがとう', 'thank you', 'どうもありがとうございます！'],
  ['どういたしまして', 'you\'re welcome', 'どういたしまして、どうぞ。'],
  ['はい', 'yes', 'はい、わかります。'],
  ['いいえ', 'no', 'いいえ、わかりません。'],
  ['すみません', 'excuse me', 'すみません、申し訳ありません。'],
  ['はじめまして', 'nice to meet you', 'はじめまして、よろしくお願いします。'],
  ['また会いましょう', 'see you again', 'また会いましょう、さようなら！'],

  // Set 2: Numbers
  ['一', 'one', '猫が一匹います。'],
  ['二', 'two', '兄弟が二人います。'],
  ['三', 'three', '本が三冊あります。'],
  ['四', 'four', '一年に四季があります。'],
  ['五', 'five', '指が五本あります。'],
  ['六', 'six', '朝の六時です。'],
  ['七', 'seven', '一週間は七日です。'],
  ['八', 'eight', '夜の八時です。'],
  ['九', 'nine', '一年は九ヶ月です。'],
  ['十', 'ten', '十ユーロをください。']
];

export const japaneseWords = generateLanguageWords('japanese', baseJapaneseWords);