import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ScoreTrackerUI } from '../entry';

const ui: ScoreTrackerUI = {
  title: 'Seguimiento de Puntuación',
  addPlayer: 'Añadir jugador',
  removePlayer: 'Eliminar',
  renamePlayer: 'Renombrar',
  startRound: 'Iniciar ronda 1',
  nextRound: 'Siguiente ronda',
  resetGame: 'Reiniciar partida',
  undoRound: 'Deshacer última ronda',
  playerLabel: 'Jugador',
  scoreLabel: 'Puntuación',
  roundLabel: 'Ronda',
  totalLabel: 'Total',
  rankLabel: 'Rango',
  leaderboardTitle: 'Tabla de clasificación',
  historyTitle: 'Historial de puntuación',
  noPlayersHint: 'Añade jugadores para empezar a puntuar',
  playerNamePlaceholder: 'Nombre del jugador',
  confirmLabel: 'Confirmar',
  cancelLabel: 'Cancelar',
  deleteRoundConfirm: '¿Eliminar la última ronda?',
  playerAdded: 'Jugador añadido',
  playerRemoved: 'Jugador eliminado',
  roundStarted: 'Ronda iniciada',
  gameReset: 'Partida reiniciada',
  noRoundsYet: 'Aún no se han registrado rondas',
  currentRoundLabel: 'Ronda actual',
  scoringTitle: 'Puntuación de ronda',
  resetAllLabel: 'Restablecer todo',
  confirmResetAll: 'Esto eliminará todos los jugadores y puntuaciones. ¿Estás seguro?',
};

export const content: ToolLocaleContent<ScoreTrackerUI> = {
  slug: 'contador-de-puntuacion',
  title: 'Contador de Puntuacion: Anotador Multijugador y Gestor de Clasificacion',
  description: 'Calcula las puntuaciones de cualquier juego de mesa. Anade jugadores, registra puntos ronda a ronda y mira la clasificacion actualizarse en tiempo real.',
  ui,
  seo: [
    { type: 'title', text: 'Como Llevar la Puntuacion en Juegos de Mesa Sin Errores', level: 2 },
    { type: 'paragraph', html: 'Llevar la puntuacion en juegos de mesa parece facil hasta que llevas cinco rondas y alguien se da cuenta de que ha sumado mal. Ya sea que juegues al Catan, al Dixit o a cualquier juego de puntos de victoria, un calculador de puntuaciones elimina los errores aritmeticos, muestra la clasificacion en vivo y mantiene un historial completo de cada ronda para que puedas verificar el total final.' },
    {
      type: 'stats',
      items: [
        { value: 'Ilimitados', label: 'Jugadores Soportados' },
        { value: 'Tiempo Real', label: 'Actualizacion de Clasificacion' },
        { value: 'Ilimitadas', label: 'Rondas Registradas' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Errores Comunes al Puntuar y Como Evitarlos', level: 2 },
    { type: 'paragraph', html: 'El error mas frecuente es olvidar sumar bonificaciones de final de ronda o equivocarse al acumular numeros. Cuando usas un marcador digital, el total se actualiza automaticamente tras cada entrada. Esto permite detectar un fallo en el momento en que la cifra parece extrana, en lugar de descubrirlo al final de la partida cuando nadie recuerda el valor correcto. El historial de rondas te permite revisar cualquier ronda anterior y corregir errores sin reiniciar toda la partida.' },
    {
      type: 'tip',
      title: 'Consejos para una Buena Llevanza de Puntuaciones',
      html: 'Introduce las puntuaciones justo despues de cada ronda, mientras todos recuerdan los resultados. Usa nombres descriptivos como colores o nombres de faccion en lugar de nombres reales para juegos con roles ocultos. Cuando juegues con ninos, deja que ellos pulsen los botones para que se sientan parte del proceso.',
    },
    {
      type: 'title',
      text: 'Puntuacion por Rondas vs Solo Total Final',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Puntuacion por Rondas vs Solo Total Final',
      items: [
        {
          pro: 'Puedes ver quien iba liderando en cada fase y como cambio la dinamica de la partida.',
          con: 'Requiere introducir datos tras cada ronda en lugar de una sola vez al final.',
        },
        {
          pro: 'Los errores son faciles de localizar porque puedes cotejar cada ronda con lo que recuerdas.',
          con: 'Requiere un poco mas de tiempo durante la sesion de juego.',
        },
        {
          pro: 'Los jugadores pueden verificar sus propias puntuaciones, reduciendo disputas y generando confianza.',
          con: 'Funciona mejor si una persona gestiona el dispositivo o si los jugadores se turnan.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Juegos con Sistemas de Puntuacion Inusuales',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Juegos de Puntos de Victoria',
          description: 'La mayoria de los eurogames usan puntos que se otorgan durante toda la partida. El reto es hacer un seguimiento de multiples fuentes de PV: recursos, logros, bonificaciones finales. Un anotador digital te permite introducir los puntos conforme llegan y ver el total acumulado.',
          icon: 'mdi:chess-queen',
          highlight: true,
          points: [
            'Seguimiento de multiples categorias',
            'Calculo de bonificaciones finales',
            'Resolucion instantanea de desempates',
          ],
        },
        {
          title: 'Juegos con Puntuacion Negativa',
          description: 'Algunos juegos penalizan a los jugadores con puntos negativos. Un anotador digital maneja los valores negativos de forma natural, coloreandolos en rojo para que la penalizacion sea visible al instante. Muy util en juegos de bazas o de deduccion con mecanicas de castigo.',
          icon: 'mdi:minus-circle-outline',
          highlight: false,
          points: [
            'Gestion automatica de negativos',
            'Indicadores visuales de penalizacion',
            'Totales acumulados precisos',
          ],
        },
        {
          title: 'Juegos de Campana',
          description: 'Los juegos legacy y de campana arrastran puntuaciones entre sesiones. Sin un anotador digital, necesitas guardar notas en papel entre noches de juego. Una herramienta digital mantiene las puntuaciones organizadas y te permite repasar como afectaron tus decisiones a la clasificacion general.',
          icon: 'mdi:book-open-variant',
          highlight: false,
          points: [
            'Seguimiento persistente de campana',
            'Comparacion entre sesiones',
            'Desglose sesion a sesion',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Glosario de Puntuacion',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Puntos de Victoria (PV)',
          definition: 'La unidad de puntuacion estandar en la mayoria de juegos de mesa modernos. Los jugadores consiguen PV mediante acciones, y quien tenga mas PV al final gana.',
        },
        {
          term: 'Puntuacion por Rondas',
          definition: 'Registrar las puntuaciones al final de cada ronda en lugar de solo al final de la partida. Crea un historial detallado y facilita la deteccion de errores.',
        },
        {
          term: 'Clasificacion',
          definition: 'Un ranking en vivo que muestra la posicion de cada jugador segun su puntuacion total. La clasificacion se reordena automaticamente al introducir nuevas puntuaciones.',
        },
        {
          term: 'Puntuacion Negativa',
          definition: 'Un sistema donde los jugadores pueden perder puntos mediante penalizaciones, resultando en totales negativos. Un anotador digital gestiona esto sin errores de resta manual.',
        },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Como Resolver Disputas de Puntuacion',
      icon: 'mdi:information-outline',
      badge: 'TRUCO DE JUEGO',
      html: 'Cuando un jugador cuestione una puntuacion, no la cambies inmediatamente. Revisa primero el historial de rondas para confirmar lo que se introdujo. Si la entrada es erronea, usa los botones +/- para corregirla y el total se actualiza solo. Si la entrada es correcta pero el jugador discrepa, el historial proporciona un registro objetivo que todos pueden revisar juntos.',
    },
  ],
  faq: [
    {
      question: 'A cuantos jugadores puedo hacer seguimiento?',
      answer: 'No hay limite. Anade tantos jugadores como soporte tu juego y renombralos cuando quieras durante la sesion.',
    },
    {
      question: 'Puedo deshacer un error?',
      answer: 'Si. Usa el boton Deshacer Ultima Ronda para eliminar la ronda mas reciente y los totales y clasificaciones se recalcularan automaticamente.',
    },
    {
      question: 'El anotador guarda mis datos?',
      answer: 'El anotador funciona completamente en tu navegador. Los datos persisten durante la sesion actual. Si recargas la pagina, todas las puntuaciones se reiniciaran.',
    },
    {
      question: 'Como funciona la clasificacion?',
      answer: 'La clasificacion ordena a los jugadores por puntuacion total descendente. Los puestos se actualizan automaticamente segun introduces o modificas puntuaciones.',
    },
    {
      question: 'Puedo anotar puntuaciones negativas?',
      answer: 'Si. Los botones +/- permiten ajustes tanto positivos como negativos, haciendolo apto para juegos con puntos de penalizacion o mecanicas de deduccion.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Anadir Jugadores',
      text: 'Introduce los nombres de los jugadores usando el campo Anyadir Jugador. Puedes anadir o eliminar jugadores en cualquier momento.',
    },
    {
      name: 'Empezar a Puntuar',
      text: 'Pulsa Empezar Ronda para iniciar una nueva ronda de puntuacion. Usa los botones +/- para ajustar la puntuacion de cada jugador.',
    },
    {
      name: 'Ver Clasificaciones',
      text: 'La clasificacion se actualiza automaticamente. Navega a la pestana Historial para revisar rondas anteriores.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Contador de Puntuacion',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'A cuantos jugadores puedo hacer seguimiento?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'No hay limite. Anade tantos jugadores como soporte tu juego.' },
        },
        {
          '@type': 'Question',
          'name': 'Puedo deshacer un error?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Si. Usa el boton Deshacer Ultima Ronda para eliminar la ronda mas reciente.' },
        },
        {
          '@type': 'Question',
          'name': 'El anotador guarda mis datos?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'El anotador funciona en tu navegador. Los datos persisten durante la sesion.' },
        },
        {
          '@type': 'Question',
          'name': 'Como funciona la clasificacion?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Ordena por puntuacion total descendente y se actualiza automaticamente.' },
        },
        {
          '@type': 'Question',
          'name': 'Puedo anotar puntuaciones negativas?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Si. Los botones +/- permiten ajustes positivos y negativos.' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Como Usar el Contador de Puntuacion',
      'step': [
        { '@type': 'HowToStep', 'name': 'Anadir Jugadores', 'text': 'Introduce nombres usando el campo Anyadir Jugador.' },
        { '@type': 'HowToStep', 'name': 'Empezar a Puntuar', 'text': 'Pulsa Empezar Ronda y usa los botones +/-.' },
        { '@type': 'HowToStep', 'name': 'Ver Clasificaciones', 'text': 'La clasificacion se actualiza automaticamente.' },
      ],
    },
  ],
};
