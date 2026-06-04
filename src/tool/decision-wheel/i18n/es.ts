import { bibliography } from '../bibliography';
import type { DecisionWheelLocaleContent } from '../entry';

export const content: DecisionWheelLocaleContent = {
  slug: 'ruleta-de-decisiones',
  title: 'Ruleta de Decisiones: Selector Aleatorio y Generador de Opciones',
  description: 'Gira una ruleta de decisiones personalizable para tus juegos de mesa. Añade, elimina y edita secciones con pesos para decidir resultados al azar.',
  ui: {
    title: 'Ruleta de Decisiones',
    spinButton: 'Girar la Ruleta',
    clearHistory: 'Limpiar Historial',
    resultHeading: 'Resultado',
    historyTitle: 'Historial de Giros',
    noHistory: 'Sin giros registrados. Haz clic en Girar la Ruleta para comenzar.',
    addSegmentLabel: 'Añadir Sección',
    removeSegmentLabel: 'Eliminar',
    segmentLabelPlaceholder: 'Etiqueta',
    presetLabel: 'Preajustes',
    presetYesNo: 'Sí o No',
    presetNumbers: 'Números 1-6',
    presetActions: 'Acciones',
    presetCustom: 'Personalizado',
    presetD20: 'D20',
    presetAlignment: 'Alineación',
    presetLoot: 'Rareza de Botín',
    weightLabel: 'Peso',
    spinAgain: 'Girar de Nuevo',
    noSegments: 'Añade secciones a la ruleta antes de girar.',
  },
  seo: [
    { type: 'title', text: 'Ruleta de Decisiones para Juegos de Mesa y Actividades', level: 2 },
    { type: 'paragraph', html: 'La ruleta de decisiones es una herramienta versátil para juegos de mesa y actividades grupales. Personaliza las secciones con tus propios textos y colores, luego gira para seleccionar un resultado aleatorio.' },
    {
      type: 'stats',
      items: [
        { value: '16', label: 'Añadir Sección' },
        { value: '7', label: 'Preajustes' },
        { value: '10', label: 'Historial de Giros' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Cómo Usar la Ruleta de Decisiones', level: 2 },
    { type: 'paragraph', html: 'La ruleta facilita elegir al azar entre un conjunto de opciones. Elige un preajuste o crea tus propias secciones con diferentes pesos para ajustar las probabilidades.' },
  ],
  faq: [
    {
      question: '¿Cómo funciona la ruleta de decisiones?',
      answer: 'Selecciona o crea tus secciones, asigna pesos si quieres variar la probabilidad de cada opción y pulsa Girar para obtener un resultado al azar.',
    },
    {
      question: '¿Puedo personalizar los colores y nombres?',
      answer: 'Sí, puedes añadir secciones, cambiar las etiquetas de texto, asignar colores personalizados y ajustar su peso del 1 al 5.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Elegir o Crear Opciones',
      text: 'Selecciona un preajuste rápido o crea tus propias secciones editando los nombres y colores.',
    },
    {
      name: 'Girar la Ruleta',
      text: 'Haz clic en el botón de girar y observa la animación con físicas de deceleración realista.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Ruleta de Decisiones',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 Canvas. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': '¿Cómo funciona la ruleta de decisiones?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Selecciona o crea tus secciones, asigna pesos si quieres variar la probabilidad de cada opción y pulsa Girar para obtener un resultado al azar.' } },
        { '@type': 'Question', 'name': '¿Puedo personalizar los colores y nombres?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sí, puedes añadir secciones, cambiar las etiquetas de texto, asignar colores personalizados y ajustar su peso del 1 al 5.' } },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Decision Wheel Spinner',
      'step': [
        { '@type': 'HowToStep', 'name': 'Elegir o Crear Opciones', 'text': 'Selecciona un preajuste rápido o crea tus propias secciones editando los nombres y colores.' },
        { '@type': 'HowToStep', 'name': 'Girar la Ruleta', 'text': 'Haz clic en el botón de girar y observa la animación con físicas de deceleración realista.' },
      ],
    },
  ],
};
