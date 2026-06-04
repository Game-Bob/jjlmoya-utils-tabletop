import { bibliography } from '../bibliography';
import type { InvestigationBoardLocaleContent } from '../entry';

export const content: InvestigationBoardLocaleContent = {
  slug: "createur-de-tableau-de-conspiration",
  title: "Créateur de Tableau de Conspiration",
  description: "Concevez des tableaux de conspiration interactifs et des cartes d'enquête. Connectez des personnages, des indices, des lieux et tracez des relations avec des liens personnalisés.",
  ui: {
  "title": "Créateur de Tableau de Conspiration",
  "addCard": "Ajouter une Carte",
  "searchPlaceholder": "Rechercher des cartes par nom ou indices",
  "filterAll": "Toutes les Catégories",
  "filterCharacter": "Personnages",
  "filterClue": "Indices",
  "filterLocation": "Lieux",
  "filterItem": "Objets",
  "cardName": "Nom de la Carte",
  "cardCategory": "Catégorie",
  "cardDescription": "Description",
  "cardNotes": "Notes Privées",
  "cardTags": "Tags séparés par des virgules",
  "cardColor": "Couleur de mise en valeur de la carte",
  "save": "Enregistrer les modifications",
  "delete": "Supprimer",
  "cancel": "Annuler",
  "clearBoard": "Effacer le tableau",
  "connectionsTitle": "Carte des relations",
  "addConnection": "Ajouter une connexion",
  "connectionLabel": "Étiquette de relation",
  "connectionColor": "Couleur de ligne",
  "sourceCard": "De la carte",
  "targetCard": "Vers la carte",
  "close": "Fermer",
  "character": "Personnage",
  "clue": "Indice",
  "location": "Lieu",
  "item": "Objet",
  "custom": "Personnalisé",
  "immersive": "Plein écran"
},
  seo: [
    { type: 'title', text: "Créateur de Tableau de Conspiration pour Jeux de Rôle sur Table et Enquêtes", level: 2 },
    { type: 'paragraph', html: "Créez des cartes d'enquête et des tableaux de conspiration immersifs pour vos jeux de rôle sur table. Glissez-déposez des indices, des lieux et des personnages, puis connectez-les avec des fils personnalisés pour visualiser des mystères complexes." },
    {
      type: 'stats',
      items: [
        { value: "Illimité", label: "Tableau de nœuds" },
        { value: "4", label: "Catégories" },
        { value: "Glisser-Déposer", label: "Interface" }
      ],
      columns: 3
    },
    { type: 'title', text: "Comment construire une carte d'enquête", level: 2 },
    { type: 'paragraph', html: "Ajoutez des cartes personnalisées représentant des indices, des personnages, des objets et des lieux. Glissez-les sur la grille. Sélectionnez deux cartes pour les relier avec un fil de relation coloré. Double-cliquez sur les nœuds ou les fils pour voir les détails." }
  ],
  faq: [
    {
      question: "Comment ajouter des lignes de connexion ?",
      answer: "Cliquez sur Ajouter une connexion dans le panneau de configuration, choisissez les cartes source et cible, attribuez une étiquette de texte et une couleur, puis enregistrez."
    },
    {
      question: "Puis-je glisser des cartes sur mobile ?",
      answer: "Oui, le tableau prend en charge les événements tactiles pour glisser et déplacer les cartes facilement sur smartphones et tablettes."
    }
  ],
  bibliography,
  howTo: [
    {
      name: "Ajouter des cartes d'enquête",
      text: "Créez des cartes représentant des PNJ, des indices, des scènes de crime ou des objets."
    },
    {
      name: "Lier les relations",
      text: "Créez des lignes de connexion entre les cartes pour montrer le lien entre les indices."
    }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': "Créateur de Tableau de Conspiration",
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
          'name': "Comment ajouter des lignes de connexion ?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Cliquez sur Ajouter une connexion dans le panneau de configuration, choisissez les cartes source et cible, attribuez une étiquette de texte et une couleur, puis enregistrez."
          }
        },
        {
          '@type': 'Question',
          'name': "Puis-je glisser des cartes sur mobile ?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Oui, le tableau prend en charge les événements tactiles pour glisser et déplacer les cartes facilement sur smartphones et tablettes."
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': "Comment utiliser le créateur de tableau de conspiration",
      'step': [
        {
          '@type': 'HowToStep',
          'name': "Ajouter des cartes d'enquête",
          'text': "Créez des cartes représentant des PNJ, des indices, des scènes de crime ou des objets."
        },
        {
          '@type': 'HowToStep',
          'name': "Lier les relations",
          'text': "Créez des lignes de connexion entre les cartes pour montrer le lien entre les indices."
        }
      ]
    }
  ]
};
