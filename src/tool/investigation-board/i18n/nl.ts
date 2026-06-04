import { bibliography } from '../bibliography';
import type { InvestigationBoardLocaleContent } from '../entry';

export const content: InvestigationBoardLocaleContent = {
  slug: "samenzweringsbord-maker",
  title: "Samenzweringsbord Maker",
  description: "Ontwerp interactieve complotborden en onderzoekskaarten. Verbind personages, aanwijzingen, locaties en breng relaties in kaart met aangepaste verbindingen.",
  ui: {
  "title": "Samenzweringsbord Maker",
  "addCard": "Kaart toevoegen",
  "searchPlaceholder": "Zoek kaarten op naam of aanwijzingen",
  "filterAll": "Alle categorieën",
  "filterCharacter": "Personages",
  "filterClue": "Aanwijzingen",
  "filterLocation": "Locaties",
  "filterItem": "Voorwerpen",
  "cardName": "Kaartnaam",
  "cardCategory": "Categorie",
  "cardDescription": "Beschrijving",
  "cardNotes": "Privénotities",
  "cardTags": "Tags gescheiden door komma\\'s",
  "cardColor": "Kaartmarkeringskleur",
  "save": "Wijzigingen opslaan",
  "delete": "Verwijderen",
  "cancel": "Annuleren",
  "clearBoard": "Bord leegmaken",
  "connectionsTitle": "Relatiekaart",
  "addConnection": "Verbinding toevoegen",
  "connectionLabel": "Relatielabel",
  "connectionColor": "Lijnkleur",
  "sourceCard": "Van kaart",
  "targetCard": "Naar kaart",
  "close": "Sluiten",
  "character": "Personage",
  "clue": "Aanwijzing",
  "location": "Locatie",
  "item": "Voorwerp",
  "custom": "Aangepast",
  "immersive": "Volledig scherm"
},
  seo: [
    { type: 'title', text: "Samenzweringsbord Maker voor Tabletop en Detective RPG Spellen", level: 2 },
    { type: 'paragraph', html: "Maak meeslepende onderzoekskaarten en complotborden voor je tabletop rollenspellen. Sleep en plaats aanwijzingen, locaties en personages, en verbind ze met aangepaste draden om complexe mysteries te visualiseren." },
    {
      type: 'stats',
      items: [
        { value: "Onbeperkt", label: "Knooppuntenbord" },
        { value: "4", label: "Categorieën" },
        { value: "Slepen en Neerzetten", label: "Interface" }
      ],
      columns: 3
    },
    { type: 'title', text: "Hoe bouw je een onderzoekskaart op", level: 2 },
    { type: 'paragraph', html: "Voeg aangepaste kaarten toe die aanwijzingen, personages, voorwerpen en locaties vertegenwoordigen. Sleep ze naar posities op het raster. Selecteer twee kaarten om ze te koppelen met een gekleurde relatiedraad. Dubbelklik op knooppunten of draden voor details." }
  ],
  faq: [
    {
      question: "Hoe voeg ik verbindingslijnen toe?",
      answer: "Klik op Verbinding toevoegen in het controlepaneel, kies de start- en doelkaarten, wijs een tekstlabel en kleur toe, en sla het op."
    },
    {
      question: "Kan ik kaarten verslepen op mobiel?",
      answer: "Ja, het bord ondersteunt aanraakbewegingen om kaarten soepel te verslepen en te verplaatsen op smartphones en tablets."
    }
  ],
  bibliography,
  howTo: [
    {
      name: "Onderzoekskaarten toevoegen",
      text: "Maak kaarten die NPC\\'s, aanwijzingen, PD\\'s of voorwerpen vertegenwoordigen."
    },
    {
      name: "Relaties koppelen",
      text: "Maak verbindingslijnen tussen kaarten om te laten zien hoe aanwijzingen zich verhouden."
    }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': "Samenzweringsbord Maker",
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
          'name': "Hoe voeg ik verbindingslijnen toe?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Klik op Verbinding toevoegen in het controlepaneel, kies de start- en doelkaarten, wijs een tekstlabel en kleur toe, en sla het op."
          }
        },
        {
          '@type': 'Question',
          'name': "Kan ik kaarten verslepen op mobiel?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Ja, het bord ondersteunt aanraakbewegingen om kaarten soepel te verslepen en te verplaatsen op smartphones en tablets."
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': "Hoe de Samenzweringsbord Maker te gebruiken",
      'step': [
        {
          '@type': 'HowToStep',
          'name': "Onderzoekskaarten toevoegen",
          'text': "Maak kaarten die NPC\\'s, aanwijzingen, PD\\'s of voorwerpen vertegenwoordigen."
        },
        {
          '@type': 'HowToStep',
          'name': "Relaties koppelen",
          'text': "Maak verbindingslijnen tussen kaarten om te laten zien hoe aanwijzingen zich verhouden."
        }
      ]
    }
  ]
};
