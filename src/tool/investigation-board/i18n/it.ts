import { bibliography } from '../bibliography';
import type { InvestigationBoardLocaleContent } from '../entry';

export const content: InvestigationBoardLocaleContent = {
  slug: "creatore-lavagna-cospirazione",
  title: "Creatore Lavagna Cospirazione",
  description: "Progetta lavagne interattive di cospirazione e mappe investigative. Collega personaggi, indizi, luoghi e traccia relazioni con collegamenti personalizzati.",
  ui: {
  "title": "Creatore Lavagna Cospirazione",
  "addCard": "Aggiungi Carta",
  "searchPlaceholder": "Cerca carte per nome o indizi",
  "filterAll": "Tutte le Categorie",
  "filterCharacter": "Personaggi",
  "filterClue": "Indizi",
  "filterLocation": "Luoghi",
  "filterItem": "Oggetti",
  "cardName": "Nome Carta",
  "cardCategory": "Categoria",
  "cardDescription": "Descrizione",
  "cardNotes": "Note Private",
  "cardTags": "Tag separati da virgole",
  "cardColor": "Colore Evidenziatore Carta",
  "save": "Salva Modifiche",
  "delete": "Elimina",
  "cancel": "Annulla",
  "clearBoard": "Pulisci Lavagna",
  "connectionsTitle": "Mappa delle Relazioni",
  "addConnection": "Aggiungi Connessione",
  "connectionLabel": "Etichetta Relazione",
  "connectionColor": "Colore Linea",
  "sourceCard": "Da Carta",
  "targetCard": "A Carta",
  "close": "Chiudi",
  "character": "Personaggio",
  "clue": "Indizio",
  "location": "Luogo",
  "item": "Oggetto",
  "custom": "Personalizzato",
  "immersive": "Schermo Intero"
},
  seo: [
    { type: 'title', text: "Creatore Lavagna Cospirazione per Giochi di Ruolo da Tavolo e Investigativi", level: 2 },
    { type: 'paragraph', html: "Crea mappe investigative coinvolgenti e lavagne di cospirazione per i tuoi giochi di ruolo da tavolo. Trascina indizi, luoghi e personaggi, quindi collegali con fili personalizzati per visualizzare misteri complessi." },
    {
      type: 'stats',
      items: [
        { value: "Illimitato", label: "Lavagna Nodi" },
        { value: "4", label: "Categorie" },
        { value: "Trascina e Rilascia", label: "Interfaccia" }
      ],
      columns: 3
    },
    { type: 'title', text: "Come Costruire una Mappa Investigativa", level: 2 },
    { type: 'paragraph', html: "Aggiungi carte personalizzate che rappresentano indizi, personaggi, oggetti e luoghi. Trascinale sulla griglia. Seleziona due carte per collegarle con un filo di relazione colorato. Fai doppio clic su nodi o fili per i dettagli." }
  ],
  faq: [
    {
      question: "Come faccio ad aggiungere linee di connessione?",
      answer: "Fai clic su Aggiungi connessione nel pannello di controllo, scegli le carte di origine e destinazione, assegna un etichetta di testo e un colore, quindi salva."
    },
    {
      question: "Posso trascinare le carte su mobile?",
      answer: "Sì, la lavagna supporta il touch per trascinare e spostare facilmente le carte su smartphone e tablet."
    }
  ],
  bibliography,
  howTo: [
    {
      name: "Aggiungi Carte Investigazione",
      text: "Crea carte che rappresentano NPC, indizi, scene del crimine o oggetti."
    },
    {
      name: "Collega Relazioni",
      text: "Crea linee di connessione tra le carte per mostrare come sono correlati gli indizi."
    }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': "Creatore Lavagna Cospirazione",
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
          'name': "Come faccio ad aggiungere linee di connessione?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Fai clic su Aggiungi connessione nel pannello di controllo, scegli le carte di origine e destinazione, assegna un etichetta di testo e un colore, quindi salva."
          }
        },
        {
          '@type': 'Question',
          'name': "Posso trascinare le carte su mobile?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Sì, la lavagna supporta il touch per trascinare e spostare facilmente le carte su smartphone e tablet."
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': "Come Usare il Creatore di Lavagne di Cospirazione",
      'step': [
        {
          '@type': 'HowToStep',
          'name': "Aggiungi Carte Investigazione",
          'text': "Crea carte che rappresentano NPC, indizi, scene del crimine o oggetti."
        },
        {
          '@type': 'HowToStep',
          'name': "Collega Relazioni",
          'text': "Crea linee di connessione tra le carte per mostrare come sono correlati gli indizi."
        }
      ]
    }
  ]
};
