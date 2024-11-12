import { generateLanguageWords } from '../../utils/wordGenerator';

const baseSpanishWords: [string, string, string][] = [
  // Set 1: Basic Greetings
  ['hola', 'hello', '¡Hola, ¿cómo estás?'],
  ['adiós', 'goodbye', '¡Adiós, hasta luego!'],
  ['por favor', 'please', 'Por favor, ayúdame.'],
  ['gracias', 'thank you', '¡Muchas gracias!'],
  ['de nada', 'you\'re welcome', 'De nada, es un placer.'],
  ['sí', 'yes', 'Sí, entiendo.'],
  ['no', 'no', 'No, no sé.'],
  ['perdón', 'excuse me', 'Perdón, lo siento.'],
  ['mucho gusto', 'nice to meet you', '¡Mucho gusto en conocerte!'],
  ['hasta luego', 'see you later', '¡Hasta luego, amigo!'],

  // Set 2: Numbers
  ['uno', 'one', 'Tengo un gato.'],
  ['dos', 'two', 'Tengo dos hermanos.'],
  ['tres', 'three', 'Hay tres libros.'],
  ['cuatro', 'four', 'Cuatro estaciones en el año.'],
  ['cinco', 'five', 'Tengo cinco dedos.'],
  ['seis', 'six', 'Son las seis de la mañana.'],
  ['siete', 'seven', 'Siete días en la semana.'],
  ['ocho', 'eight', 'Son las ocho de la noche.'],
  ['nueve', 'nine', 'Nueve meses en el año.'],
  ['diez', 'ten', 'Diez euros, por favor.']
];

export const spanishWords = generateLanguageWords('spanish', baseSpanishWords);