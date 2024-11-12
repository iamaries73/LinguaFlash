import { categories } from './categories';

interface LanguagePattern {
  nouns: string[];
  verbs: string[];
  adjectives: string[];
  examples: string[];
}

const languagePatterns: Record<string, LanguagePattern> = {
  french: {
    nouns: [
      'maison', 'livre', 'table', 'chaise', 'porte', 'fenêtre', 'voiture', 'arbre', 'fleur', 'rue',
      'ordinateur', 'téléphone', 'école', 'hôpital', 'restaurant', 'magasin', 'parc', 'plage', 'montagne', 'rivière',
      'ville', 'pays', 'langue', 'musique', 'film', 'sport', 'jeu', 'travail', 'famille', 'ami'
    ],
    verbs: [
      'parler', 'manger', 'dormir', 'lire', 'écrire', 'voir', 'entendre', 'aller', 'venir', 'faire',
      'travailler', 'étudier', 'voyager', 'jouer', 'danser', 'chanter', 'courir', 'nager', 'penser', 'aimer',
      'comprendre', 'apprendre', 'enseigner', 'acheter', 'vendre', 'donner', 'prendre', 'chercher', 'trouver', 'perdre'
    ],
    adjectives: [
      'grand', 'petit', 'beau', 'nouveau', 'bon', 'mauvais', 'chaud', 'froid', 'jeune', 'vieux',
      'facile', 'difficile', 'important', 'intéressant', 'différent', 'même', 'premier', 'dernier', 'prochain', 'seul',
      'heureux', 'triste', 'fatigué', 'occupé', 'libre', 'prêt', 'content', 'fâché', 'surpris', 'calme'
    ],
    examples: [
      'Je vais à la {noun}.',
      'Il faut {verb} maintenant.',
      'C\'est très {adjective}.',
      'J\'aime {verb} à la {noun}.',
      'La {noun} est {adjective}.',
      'Nous allons {verb} ensemble.',
      'Le {noun} {verb} bien.',
      'C\'est un {noun} {adjective}.',
      'Je dois {verb} le {noun}.',
      'Il est {adjective} de {verb}.'
    ]
  },
  spanish: {
    nouns: [
      'casa', 'libro', 'mesa', 'silla', 'puerta', 'ventana', 'coche', 'árbol', 'flor', 'calle',
      'computadora', 'teléfono', 'escuela', 'hospital', 'restaurante', 'tienda', 'parque', 'playa', 'montaña', 'río',
      'ciudad', 'país', 'idioma', 'música', 'película', 'deporte', 'juego', 'trabajo', 'familia', 'amigo'
    ],
    verbs: [
      'hablar', 'comer', 'dormir', 'leer', 'escribir', 'ver', 'oír', 'ir', 'venir', 'hacer',
      'trabajar', 'estudiar', 'viajar', 'jugar', 'bailar', 'cantar', 'correr', 'nadar', 'pensar', 'amar',
      'comprender', 'aprender', 'enseñar', 'comprar', 'vender', 'dar', 'tomar', 'buscar', 'encontrar', 'perder'
    ],
    adjectives: [
      'grande', 'pequeño', 'hermoso', 'nuevo', 'bueno', 'malo', 'caliente', 'frío', 'joven', 'viejo',
      'fácil', 'difícil', 'importante', 'interesante', 'diferente', 'mismo', 'primero', 'último', 'próximo', 'solo',
      'feliz', 'triste', 'cansado', 'ocupado', 'libre', 'listo', 'contento', 'enojado', 'sorprendido', 'tranquilo'
    ],
    examples: [
      'Voy a la {noun}.',
      'Necesito {verb} ahora.',
      'Es muy {adjective}.',
      'Me gusta {verb} en la {noun}.',
      'La {noun} está {adjective}.',
      'Vamos a {verb} juntos.',
      'El {noun} {verb} bien.',
      'Es un {noun} {adjective}.',
      'Tengo que {verb} el {noun}.',
      'Es {adjective} {verb}.'
    ]
  },
  japanese: {
    nouns: [
      '家', '本', '机', '椅子', 'ドア', '窓', '車', '木', '花', '道',
      'コンピュータ', '電話', '学校', '病院', 'レストラン', '店', '公園', '海', '山', '川',
      '街', '国', '言語', '音楽', '映画', 'スポーツ', 'ゲーム', '仕事', '家族', '友達'
    ],
    verbs: [
      '話す', '食べる', '寝る', '読む', '書く', '見る', '聞く', '行く', '来る', 'する',
      '働く', '勉強する', '旅行する', '遊ぶ', '踊る', '歌う', '走る', '泳ぐ', '考える', '愛する',
      '理解する', '学ぶ', '教える', '買う', '売る', '与える', '取る', '探す', '見つける', '失う'
    ],
    adjectives: [
      '大きい', '小さい', '美しい', '新しい', '良い', '悪い', '暑い', '寒い', '若い', '古い',
      '簡単', '難しい', '重要', '面白い', '違う', '同じ', '最初', '最後', '次', '一人',
      '幸せ', '悲しい', '疲れた', '忙しい', '自由', '準備', '嬉しい', '怒った', '驚いた', '静か'
    ],
    examples: [
      '{noun}に行きます。',
      '今{verb}必要があります。',
      'とても{adjective}です。',
      '{noun}で{verb}のが好きです。',
      '{noun}は{adjective}です。',
      '一緒に{verb}ましょう。',
      '{noun}が{verb}。',
      '{adjective}{noun}です。',
      '{noun}を{verb}必要があります。',
      '{verb}のは{adjective}です。'
    ]
  },
  chinese: {
    nouns: [
      '房子', '书', '桌子', '椅子', '门', '窗户', '汽车', '树', '花', '街道',
      '电脑', '电话', '学校', '医院', '餐厅', '商店', '公园', '海滩', '山', '河',
      '城市', '国家', '语言', '音乐', '电影', '运动', '游戏', '工作', '家庭', '朋友'
    ],
    verbs: [
      '说', '吃', '睡', '读', '写', '看', '听', '去', '来', '做',
      '工作', '学习', '旅行', '玩', '跳舞', '唱歌', '跑步', '游泳', '思考', '爱',
      '理解', '学', '教', '买', '卖', '给', '拿', '找', '发现', '失去'
    ],
    adjectives: [
      '大', '小', '美丽', '新', '好', '坏', '热', '冷', '年轻', '老',
      '容易', '困难', '重要', '有趣', '不同', '相同', '第一', '最后', '下一个', '独自',
      '快乐', '悲伤', '疲倦', '忙', '自由', '准备', '高兴', '生气', '惊讶', '安静'
    ],
    examples: [
      '我去{noun}。',
      '现在需要{verb}。',
      '很{adjective}。',
      '我喜欢在{noun}{verb}。',
      '{noun}很{adjective}。',
      '我们一起{verb}。',
      '{noun}{verb}得很好。',
      '这是个{adjective}的{noun}。',
      '我需要{verb}{noun}。',
      '{verb}很{adjective}。'
    ]
  },
  arabic: {
    nouns: [
      'منزل', 'كتاب', 'طاولة', 'كرسي', 'باب', 'نافذة', 'سيارة', 'شجرة', 'زهرة', 'شارع',
      'حاسوب', 'هاتف', 'مدرسة', 'مستشفى', 'مطعم', 'متجر', 'حديقة', 'شاطئ', 'جبل', 'نهر',
      'مدينة', 'بلد', 'لغة', 'موسيقى', 'فيلم', 'رياضة', 'لعبة', 'عمل', 'عائلة', 'صديق'
    ],
    verbs: [
      'يتحدث', 'يأكل', 'ينام', 'يقرأ', 'يكتب', 'يرى', 'يسمع', 'يذهب', 'يأتي', 'يفعل',
      'يعمل', 'يدرس', 'يسافر', 'يلعب', 'يرقص', 'يغني', 'يجري', 'يسبح', 'يفكر', 'يحب',
      'يفهم', 'يتعلم', 'يعلم', 'يشتري', 'يبيع', 'يعطي', 'يأخذ', 'يبحث', 'يجد', 'يفقد'
    ],
    adjectives: [
      'كبير', 'صغير', 'جميل', 'جديد', 'جيد', 'سيء', 'حار', 'بارد', 'شاب', 'قديم',
      'سهل', 'صعب', 'مهم', 'مثير', 'مختلف', 'نفس', 'أول', 'آخر', 'تالي', 'وحيد',
      'سعيد', 'حزين', 'متعب', 'مشغول', 'حر', 'جاهز', 'مسرور', 'غاضب', 'متفاجئ', 'هادئ'
    ],
    examples: [
      'أذهب إلى {noun}.',
      'يجب أن {verb} الآن.',
      'إنه {adjective} جداً.',
      'أحب أن {verb} في {noun}.',
      '{noun} {adjective}.',
      'دعنا {verb} معاً.',
      '{noun} {verb} جيداً.',
      'هذا {noun} {adjective}.',
      'يجب أن {verb} {noun}.',
      'من {adjective} أن {verb}.'
    ]
  }
};

export function generateLanguageWords(language: string, baseWords: [string, string, string][]): [string, string, string][] {
  const allWords: [string, string, string][] = [...baseWords];
  const wordsNeeded = 1000 - baseWords.length;
  const pattern = languagePatterns[language];

  if (!pattern) {
    throw new Error(`Language pattern not found for ${language}`);
  }

  for (let i = 0; i < wordsNeeded; i++) {
    const categoryIndex = Math.floor(i / 10);
    const category = categories[categoryIndex % categories.length];
    
    const wordType = i % 3;
    let word: string;
    let translation: string;
    let example: string;

    const getRandomItem = (array: string[]) => array[Math.floor(Math.random() * array.length)];
    
    switch (wordType) {
      case 0:
        word = getRandomItem(pattern.nouns);
        translation = `${category.name} - ${word}`;
        example = getRandomItem(pattern.examples)
          .replace('{noun}', word)
          .replace('{verb}', getRandomItem(pattern.verbs))
          .replace('{adjective}', getRandomItem(pattern.adjectives));
        break;
      case 1:
        word = getRandomItem(pattern.verbs);
        translation = `${category.name} - ${word}`;
        example = getRandomItem(pattern.examples)
          .replace('{verb}', word)
          .replace('{noun}', getRandomItem(pattern.nouns))
          .replace('{adjective}', getRandomItem(pattern.adjectives));
        break;
      default:
        word = getRandomItem(pattern.adjectives);
        translation = `${category.name} - ${word}`;
        example = getRandomItem(pattern.examples)
          .replace('{adjective}', word)
          .replace('{noun}', getRandomItem(pattern.nouns))
          .replace('{verb}', getRandomItem(pattern.verbs));
    }
    
    allWords.push([word, translation, example]);
  }

  return allWords;
}