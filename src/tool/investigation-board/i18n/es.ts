import { bibliography } from '../bibliography';
import type { InvestigationBoardLocaleContent } from '../entry';

export const content: InvestigationBoardLocaleContent = {
  slug: "creador-tablero-conspiracion",
  title: "Creador de Tableros de Conspiración",
  description: "Diseña tableros de conspiración interactivos y mapas de investigación. Conecta personajes, pistas, ubicaciones y rastrea relaciones con enlaces personalizados.",
  ui: {
  "title": "Creador de Tableros de Conspiración",
  "addCard": "Añadir Tarjeta",
  "searchPlaceholder": "Buscar tarjetas por nombre o pistas",
  "filterAll": "Todas las Categorías",
  "filterCharacter": "Personajes",
  "filterClue": "Pistas",
  "filterLocation": "Ubicaciones",
  "filterItem": "Objetos",
  "cardName": "Nombre de la Tarjeta",
  "cardCategory": "Categoría",
  "cardDescription": "Descripción",
  "cardNotes": "Notas Privadas",
  "cardTags": "Etiquetas separadas por comas",
  "cardColor": "Color de Resaltado de Tarjeta",
  "save": "Guardar Cambios",
  "delete": "Eliminar",
  "cancel": "Cancelar",
  "clearBoard": "Limpiar Tablero",
  "connectionsTitle": "Mapa de Relaciones",
  "addConnection": "Añadir Conexión",
  "connectionLabel": "Etiqueta de Relación",
  "connectionColor": "Color de la Línea",
  "sourceCard": "Desde Tarjeta",
  "targetCard": "Hacia Tarjeta",
  "close": "Cerrar",
  "character": "Personaje",
  "clue": "Pista",
  "location": "Ubicación",
  "item": "Objeto",
  "custom": "Personalizado",
  "immersive": "Pantalla Completa"
},
  seo: [
    { type: 'title', text: "Creador de Tableros de Conspiración para Juegos de Rol de Mesa y Detectives", level: 2 },
    { type: 'paragraph', html: "Crea mapas de investigación inmersivos y tableros de conspiración para tus juegos de rol de mesa. Arrastra y suelta pistas, ubicaciones y personajes, luego conéctalos con hilos personalizados para visualizar misterios complejos." },
    {
      type: 'stats',
      items: [
        { value: "Ilimitado", label: "Tablero de Nodos" },
        { value: "4", label: "Categorías" },
        { value: "Arrastrar y Soltar", label: "Interfaz" }
      ],
      columns: 3
    },
    { type: 'title', text: "Cómo Construir un Mapa de Investigación", level: 2 },
    { type: 'paragraph', html: "Añade tarjetas personalizadas que representen pistas, personajes, objetos y ubicaciones. Arrástralas a sus posiciones en la cuadrícula. Selecciona dos tarjetas para enlazarlas con un hilo de relación de color. Haz doble clic en los nodos o hilos para ver información detallada." }
  ],
  faq: [
    {
      question: "¿Cómo añado líneas de conexión?",
      answer: "Haz clic en Añadir Conexión en el panel de control, elige las tarjetas de origen y destino, asigna una etiqueta de texto y un color, y guárdalo."
    },
    {
      question: "¿Puedo arrastrar tarjetas en el móvil?",
      answer: "Sí, el tablero admite eventos táctiles para arrastrar y mover tarjetas sin problemas en smartphones y tablets."
    }
  ],
  bibliography,
  howTo: [
    {
      name: "Añadir Tarjetas de Investigación",
      text: "Crea tarjetas que representen PNJ, pistas, escenas del crimen u objetos."
    },
    {
      name: "Enlazar Relaciones",
      text: "Crea líneas de conexión entre tarjetas para mostrar cómo se relacionan las pistas."
    }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': "Creador de Tableros de Conspiración",
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 SVG support. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': "¿Cómo añado líneas de conexión?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Haz clic en Añadir Conexión en el panel de control, elige las tarjetas de origen y destino, asigna una etiqueta de texto y un color, y guárdalo."
          }
        },
        {
          '@type': 'Question',
          'name': "¿Puedo arrastrar tarjetas en el móvil?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Sí, el tablero admite eventos táctiles para arrastrar y mover tarjetas sin problemas en smartphones y tablets."
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': "Cómo Usar el Creador de Tableros de Conspiración",
      'step': [
        {
          '@type': 'HowToStep',
          'name': "Añadir Tarjetas de Investigación",
          'text': "Crea tarjetas que representen PNJ, pistas, escenas del crimen u objetos."
        },
        {
          '@type': 'HowToStep',
          'name': "Enlazar Relaciones",
          'text': "Crea líneas de conexión entre tarjetas para mostrar cómo se relacionan las pistas."
        }
      ]
    }
  ]
};
