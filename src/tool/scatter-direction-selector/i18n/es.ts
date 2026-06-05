import { bibliography } from '../bibliography';
import type { ScatterSelectorLocaleContent } from '../entry';

const ui = {
  title: 'Selector de Dirección de Desviación',
  setupTitle: 'Configuración de Desviación',
  sectorsLabel: 'Sectores de la Brújula',
  sectors8: '8 Direcciones',
  sectors12: '12 Direcciones (Reloj)',
  diceLabel: 'Tirada de Distancia de Desviación',
  diceD6: '1D6 Pulgadas',
  dice2D6: '2D6 Pulgadas',
  diceD10: '1D10 Pulgadas',
  diceCustom: 'Rango Personalizado',
  customMaxLabel: 'Distancia Máxima',
  hitChanceLabel: 'Probabilidad de Impacto Directo (%)',
  rollButton: 'Tirar Desviación',
  hitResult: '¡Impacto Directo!',
  scatterResult: '¡Desviación!',
  distanceLabel: 'Distancia',
  angleLabel: 'Ángulo',
  dragHint: 'Arrastra la brújula para ajustar la dirección del viento manualmente',
  historyTitle: 'Tiradas Recientes',
  clearHistory: 'Limpiar Historial',
  presetTitle: 'Preajustes de Wargaming',
  soundOn: 'Sonido Activado',
  soundOff: 'Sonido Desactivado',
  guideStep1: 'Arrastra la brújula para alinearla con tu mesa de juego',
  guideStep2: 'Elige sectores, dados y probabilidad de impacto directo',
  guideStep3: 'Centro = tu objetivo. El resplandor verde indica que cayó exactamente ahí',
  guideStep3Scatter: 'Flecha = dirección de desviación. Mueve el disparo desde el centro esa cantidad de pulgadas a lo largo de la flecha',
  scatterModeLabel: 'Dirección de Desviación',
  scatterModeRandom: 'Aleatoria',
  scatterModeWind: 'Deriva del Viento',
  scatterModeWindHint: 'La flecha siempre sigue la brújula  -  solo la distancia es aleatoria',
};

const faq = [
  {
    question: '¿Cómo funciona el Selector de Dirección de Desviación?',
    answer: 'Calcula un ángulo aleatorio (0-359 grados) y una distancia basada en la configuración de dados seleccionada. También simula un dado de desviación, comprobando si hay impactos directos.',
  },
  {
    question: '¿Puedo cambiar el formato de sectores?',
    answer: 'Sí, puedes alternar entre sectores cardinales de 8 direcciones y sectores de 12 direcciones con formato de reloj.',
  },
  {
    question: '¿Qué es la probabilidad de impacto directo?',
    answer: 'Representa la posibilidad de que el proyectil caiga exactamente donde se apuntó, sin desviación alguna, simulando un resultado de "Impacto" en un dado de desviación estándar.',
  },
  {
    question: '¿Es compatible con Warhammer o Bolt Action?',
    answer: 'Sí, admite plantillas estándar de 8 direcciones y alineaciones de reloj de 12 direcciones utilizadas en la mayoría de los wargames tácticos y sistemas de miniaturas.',
  },
  {
    question: '¿Cómo se muestra visualmente la distancia de desviación?',
    answer: 'La distancia en pulgadas aparece como una etiqueta flotante en el punto de impacto, posicionada en la dirección de desviación. La flecha roja de la brújula también se bloquea en el ángulo final para alinear la plantilla rápidamente.',
  },
  {
    question: '¿Puedo desactivar la animación para obtener resultados más rápidos?',
    answer: 'La animación dura aproximadamente dos segundos, tras los cuales el resultado final se muestra en el centro y la flecha de la brújula se bloquea. Actualmente no hay opción de salto, pero la demora está diseñada para igualar el ritmo de tirar dados físicos.',
  },
];

const howTo = [
  {
    name: 'Configurar Reglas',
    text: 'Selecciona los sectores de la brújula, elige un dado de distancia y ajusta la probabilidad de impacto directo.',
  },
  {
    name: 'Tirar o Arrastrar',
    text: 'Haz clic en Tirar Desviación para simular la desviación, o arrastra la rueda de la brújula para ajustar la dirección manualmente.',
  },
  {
    name: 'Leer el Resultado',
    text: 'Revisa la pantalla central y la flecha vectorial para conocer la distancia, el ángulo y la dirección exactos de la desviación.',
  },
  {
    name: 'Observar la Trayectoria',
    text: 'Después de tirar, observa el proyectil animado viajar a través de la brújula. La estela discontinua muestra el camino de desviación y el punto de impacto muestra la distancia en pulgadas.',
  },
  {
    name: 'Interpretar el Resultado',
    text: 'Un pulso verde con "DIRECT HIT" significa desviación cero. Una explosión roja con una etiqueta de distancia significa que el disparo se desvió  -  coloca tu plantilla esa cantidad de pulgadas desde el objetivo en la dirección de la flecha.',
  },
];

export const content: ScatterSelectorLocaleContent = {
  slug: 'selector-de-direccion-de-desviacion',
  title: 'Selector de Dirección de Desviación: Brújula Táctil para Wargames de Miniaturas',
  description: 'Determina desviaciones aleatorias, deriva del viento y direcciones de dispersión para wargames de miniaturas con una brújula táctil 3D.',
  ui,
  seo: [
    { type: 'title', text: 'Brújula Interactiva de Desviación con Animación de Proyectil en Tiempo Real', level: 2 },
    { type: 'paragraph', html: 'El Selector de Dirección de Desviación va más allá de la simple generación de números al renderizar una trayectoria animada del proyectil directamente sobre la brújula. Al hacer clic en Tirar Desviación, un proyectil brillante viaja desde el centro a lo largo del ángulo de desviación, dejando una estela discontinua y estallando en partículas en el punto de impacto.' },
    { type: 'stats', items: [
      { value: '2', label: 'Sistemas de Sectores', icon: 'mdi:compass-rose' },
      { value: '4', label: 'Preajustes de Dados', icon: 'mdi:dice-d6' },
      { value: '0-100%', label: 'Rango de Probabilidad de Impacto', icon: 'mdi:target' },
      { value: '10', label: 'Historial de Tiradas Recientes', icon: 'mdi:history' },
    ], columns: 4 },
    { type: 'title', text: 'Cómo la Animación de Trayectoria Mejora la Toma de Decisiones en Wargames', level: 3 },
    { type: 'paragraph', html: 'Las herramientas tradicionales muestran un ángulo y una distancia numéricos, obligando a los jugadores a visualizar mentalmente el desplazamiento en la mesa. La trayectoria animada cierra esta brecha dibujando la ruta de vuelo exacta desde el punto de mira hasta la zona de impacto de la desviación.' },
    { type: 'diagnostic', variant: 'success', title: 'Impacto Directo', html: 'Cuando la tirada supera la probabilidad de impacto, el centro de la brújula estalla con anillos verdes pulsantes y una animación de texto "DIRECT HIT". El proyectil regresa al centro, confirmando un impacto perfecto sin desviación.' },
    { type: 'diagnostic', variant: 'error', title: 'Desviación', html: 'En un resultado de desviación, el proyectil sigue una trayectoria discontinua hasta su punto de aterrizaje. Una explosión de partículas, un marcador brillante y la distancia en pulgadas (ej. <strong>5"</strong>) aparecen en el lugar del impacto.' },
    { type: 'tip', title: 'Consejo: Usar el Modo de Deriva del Viento', html: 'Activa la Deriva del Viento para bloquear la dirección de desviación al ángulo de la brújula que ajustes manualmente. Simula viento predominante o un vector de desplazamiento fijo  -  ideal para cohetes no guiados, nubes de gas o teletransportaciones fallidas.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faq.map((f) => ({
        '@type': 'Question',
        'name': f.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': f.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Selector de Dirección de Desviación',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cómo usar el Selector de Dirección de Desviación',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
