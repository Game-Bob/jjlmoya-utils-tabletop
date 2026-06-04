import { bibliography } from '../bibliography';
import type { InvestigationBoardLocaleContent } from '../entry';

export const content: InvestigationBoardLocaleContent = {
  slug: "konspirationsboard-skapare",
  title: "Konspirationsboard Skapare",
  description: "Skapa interaktiva konspirationsboards och utredningskartor. Koppla ihop karaktärer, ledtrådar, platser och spåra relationer med anpassade länkar.",
  ui: {
  "title": "Konspirationsboard Skapare",
  "addCard": "Lägg till Kort",
  "searchPlaceholder": "Sök kort efter namn eller ledtrådar",
  "filterAll": "Alla Kategorier",
  "filterCharacter": "Karaktärer",
  "filterClue": "Ledtrådar",
  "filterLocation": "Platser",
  "filterItem": "Föremål",
  "cardName": "Kortnamn",
  "cardCategory": "Kategori",
  "cardDescription": "Beskrivning",
  "cardNotes": "Privata Anteckningar",
  "cardTags": "Taggar separerade med komma",
  "cardColor": "Markeringsfärg för Kort",
  "save": "Spara Ändringar",
  "delete": "Ta bort",
  "cancel": "Avbryt",
  "clearBoard": "Rensa Board",
  "connectionsTitle": "Relationskarta",
  "addConnection": "Lägg till Koppling",
  "connectionLabel": "Relationsetikett",
  "connectionColor": "Linjefärg",
  "sourceCard": "Från Kort",
  "targetCard": "Till Kort",
  "close": "Stäng",
  "character": "Karaktär",
  "clue": "Ledtråd",
  "location": "Plats",
  "item": "Föremål",
  "custom": "Anpassad",
  "immersive": "Helskärm"
},
  seo: [
    { type: 'title', text: "Konspirationsboard Skapare för Tabletop och Detektiv RPG Spel", level: 2 },
    { type: 'paragraph', html: "Skapa inlevelserika utredningskartor och konspirationsboards för dina rollspel. Dra och släpp ledtrådar, platser och karaktärer, och koppla ihop dem med anpassade trådar för att visualisera komplexa mysterier." },
    {
      type: 'stats',
      items: [
        { value: "Obegränsat", label: "Nodboard" },
        { value: "4", label: "Kategorier" },
        { value: "Dra och Släpp", label: "Gränssnitt" }
      ],
      columns: 3
    },
    { type: 'title', text: "Hur man bygger en utredningskarta", level: 2 },
    { type: 'paragraph', html: "Lägg till anpassade kort för ledtrådar, karaktärer, föremål och platser. Dra dem på plats i rutnätet. Välj två kort för att länka dem med en färgad relationstråd. Dubbelklicka på noder eller trådar för detaljer." }
  ],
  faq: [
    {
      question: "Hur lägger jag till kopplingslinjer?",
      answer: "Klicka på Lägg till Koppling i kontrollpanelen, välj start- och målkort, ange en textetikett samt färg, och spara."
    },
    {
      question: "Kan jag dra kort på mobilen?",
      answer: "Ja, tavlan stöder touch-händelser för att smidigt dra och flytta kort på smartphones och surfplattor."
    }
  ],
  bibliography,
  howTo: [
    {
      name: "Lägg till Utredningskort",
      text: "Skapa kort som representerar NPC:er, ledtrådar, brottsplatser eller föremål."
    },
    {
      name: "Koppla Relationer",
      text: "Skapa kopplingslinjer mellan kort för att visa hur ledtrådar hänger ihop."
    }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': "Konspirationsboard Skapare",
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
          'name': "Hur lägger jag till kopplingslinjer?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Klicka på Lägg till Koppling i kontrollpanelen, välj start- och målkort, ange en textetikett samt färg, och spara."
          }
        },
        {
          '@type': 'Question',
          'name': "Kan jag dra kort på mobilen?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Ja, tavlan stöder touch-händelser för att smidigt dra och flytta kort på smartphones och surfplattor."
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': "Hur man använder Konspirationsboard Skaparen",
      'step': [
        {
          '@type': 'HowToStep',
          'name': "Lägg till Utredningskort",
          'text': "Skapa kort som representerar NPC:er, ledtrådar, brottsplatser eller föremål."
        },
        {
          '@type': 'HowToStep',
          'name': "Koppla Relationer",
          'text': "Skapa kopplingslinjer mellan kort för att visa hur ledtrådar hänger ihop."
        }
      ]
    }
  ]
};
