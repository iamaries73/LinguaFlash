import { generateLanguageWords } from '../../utils/wordGenerator';

const baseChineseWords: [string, string, string][] = [
  // Set 1: Basic Greetings
  ['你好', 'hello', '你好，最近好吗？'],
  ['再见', 'goodbye', '再见，回头见！'],
  ['请', 'please', '请帮助我。'],
  ['谢谢', 'thank you', '非常感谢！'],
  ['不客气', 'you\'re welcome', '不客气，很高兴帮助你。'],
  ['是', 'yes', '是的，我明白。'],
  ['不是', 'no', '不是，我不知道。'],
  ['对不起', 'excuse me', '对不起，很抱歉。'],
  ['很高兴认识你', 'nice to meet you', '很高兴认识你！'],
  ['回头见', 'see you later', '回头见，朋友！'],

  // Set 2: Numbers
  ['一', 'one', '我有一只猫。'],
  ['二', 'two', '我有两个兄弟。'],
  ['三', 'three', '这里有三本书。'],
  ['四', 'four', '一年有四个季节。'],
  ['五', 'five', '我有五个手指。'],
  ['六', 'six', '早上六点。'],
  ['七', 'seven', '一周有七天。'],
  ['八', 'eight', '晚上八点。'],
  ['九', 'nine', '一年有九个月。'],
  ['十', 'ten', '十欧元，请。']
];

export const chineseWords = generateLanguageWords('chinese', baseChineseWords);