import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { CardDrawOddsUI } from '../ui';

export const content: ToolLocaleContent<CardDrawOddsUI> = {
  slug: 'calculadora-probabilidad-robar-cartas',
  title: 'Calculadora de probabilidad de robar cartas',
  description: 'Calcula con la distribución hipergeométrica la probabilidad de robar al menos una copia de una carta hasta un turno concreto.',
  ui: {
    configureLabel: 'Configura las reglas de tu mazo', configureHint: 'Cambia el mazo, la mano, los robos y el mulligan. Los resultados se actualizan al instante.',
    presetLabel: 'Punto de partida', presetCustom: 'Reglas personalizadas', presetStandard: 'Mazo de 60 · 4 copias', presetLimited: 'Mazo de 40 · 4 copias', presetSingleton: 'Mazo de 100 · 1 copia',
    deckSizeLabel: 'Tamaño del mazo', targetCopiesLabel: 'Copias de la carta', openingHandLabel: 'Mano inicial', drawsPerTurnLabel: 'Robos por turno', throughTurnLabel: 'Mostrar hasta el turno',
    mulliganLabel: 'Modelo de mulligan', mulliganNone: 'Sin mulligan', mulliganFullRedraw: 'Reponer tras fallar', visualLabel: 'Tu ruta de robo', visualHint: 'El abanico se abre a medida que entran más cartas en la muestra.',
    openingHandStage: 'Mano inicial', turnLabel: 'Turno', cardsSeenLabel: 'Cartas vistas', finalChanceLabel: 'Probabilidad hasta el turno final', expectedCopiesLabel: 'Copias esperadas hasta entonces', probabilityByTurnLabel: 'Probabilidad por turno', explanationLabel: 'Al menos una copia',
    noMulliganNote: 'Sin mulligan: el modelo cuenta una única muestra del mazo barajado.', fullRedrawNote: 'Reponer tras fallar: si la mano inicial no contiene copias, se reemplaza una vez y se continúa con esa nueva mano.', invalidInput: 'Revisa las reglas del mazo para continuar.', invalidDeck: 'Elige un tamaño de mazo válido.', invalidCopies: 'Las copias deben estar entre cero y el tamaño del mazo.', invalidHand: 'La mano inicial no puede superar el tamaño del mazo.', invalidDraws: 'Los robos por turno deben ser cero o más.', invalidTurns: 'Elige un turno entre cero y 60.', cardsLabel: 'cartas', copyLabel: 'copias',
  },
  seo: [
    { type: 'title', level: 2, text: 'Calcula las probabilidades de robo de tu mazo' },
    { type: 'paragraph', html: 'Esta calculadora responde a una pregunta práctica al construir mazos: ¿qué probabilidad tengo de ver al menos una copia de una carta antes de un turno? Introduce el tamaño del mazo, copias, mano inicial, robos y mulligan para ver el porcentaje por turno.' },
    { type: 'paragraph', html: 'Usamos la distribución hipergeométrica porque las cartas se roban sin reemplazo. El modelo sirve para juegos de cartas coleccionables, juegos de mesa, mazos de limitado y cualquier conjunto finito de cartas.' },
    { type: 'title', level: 2, text: 'Cómo leer la línea temporal' },
    { type: 'list', items: ['La mano inicial representa la primera muestra del mazo barajado.', 'Cada turno añade el número de cartas que robas por turno.', 'El porcentaje indica la probabilidad de ver al menos una copia, no exactamente una.', 'Las copias esperadas son otro promedio y pueden ser menores que una aunque la probabilidad de acierto sea alta.'] },
    { type: 'title', level: 2, text: 'Las reglas del mulligan son configurables' },
    { type: 'paragraph', html: 'La opción de reposición representa una estrategia sencilla: conservas la mano si contiene el objetivo; si no, reemplazas toda la mano una vez y sigues desde esa nueva ruta. No incluye mulligans parciales, adivinar, tutores ni decisiones basadas en otras cartas.' },
    { type: 'tip', title: 'Usa las reglas reales de tu juego', html: 'Si tu juego tiene otra mano inicial, un robo adicional o un procedimiento de mulligan distinto, cambia esos campos. La respuesta depende de las reglas y del número de copias.' },
    { type: 'title', level: 2, text: 'La idea hipergeométrica en una línea' },
    { type: 'paragraph', html: 'Para n cartas de un mazo de N que contiene K copias objetivo, la probabilidad de no acertar es C(N − K, n) / C(N, n). La calculadora usa el complemento 1 − no acertar para obtener la probabilidad de al menos una carta objetivo.' },
    { type: 'diagnostic', variant: 'info', title: 'Qué no simula esta calculadora', badge: 'LÍMITES', html: 'No sigue cartas concretas, selección, efectos de reemplazo, adivinación, tutores, varios objetivos ni el estado completo de una partida. Usa el resultado como referencia y modela las reglas adicionales por separado.' },
  ],
  faq: [
    { question: '¿Cuál es la fórmula de la probabilidad de robo?', answer: 'Para al menos una copia en n cartas se usa 1 − C(N − K, n) / C(N, n), donde N es el tamaño del mazo y K el número de copias.' },
    { question: '¿Funciona para una mano de 5 cartas?', answer: 'Sí. Pon Mano inicial en 5 y elige los robos y turnos que correspondan a tu juego.' },
    { question: '¿Cómo funciona la opción de mulligan?', answer: 'Reponer tras fallar simula un reemplazo completo de una mano inicial que no contiene la carta objetivo. Es más simple que las reglas parciales de cada juego.' },
    { question: '¿Por qué las copias esperadas no coinciden con la probabilidad de acierto?', answer: 'La probabilidad de acierto pregunta si hay una o más copias. Las copias esperadas son el promedio de copias presentes y miden otra cosa.' },
  ],
  bibliography,
  howTo: [
    { name: 'Introduce el tamaño y las copias', text: 'Indica cuántas cartas tiene el mazo y cuántas copias de la carta buscas.' },
    { name: 'Ajusta la mano y los robos', text: 'Escribe el tamaño de la mano inicial, los robos por turno y el turno final.' },
    { name: 'Elige un modelo de mulligan', text: 'Usa Sin mulligan para una muestra continua o Reponer tras fallar para un reemplazo completo.' },
    { name: 'Lee la línea temporal', text: 'Compara el porcentaje de al menos una copia en la mano y en cada turno.' },
  ],
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'Calculadora de probabilidad de robar cartas', applicationCategory: 'GameApplication', operatingSystem: 'Web', description: 'Probabilidades de robo exactas para mazos de cartas finitos.' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: '¿Cuál es la fórmula de la probabilidad de robo?', acceptedAnswer: { '@type': 'Answer', text: 'La calculadora usa el complemento de la probabilidad hipergeométrica de no acertar.' } }] },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: 'Calcular probabilidades de robo', step: [{ '@type': 'HowToStep', name: 'Configura el mazo', text: 'Introduce tamaño, copias, mano, robos y turnos.' }, { '@type': 'HowToStep', name: 'Lee el resultado', text: 'Compara la probabilidad de ver al menos una copia en cada turno.' }] },
  ],
};
