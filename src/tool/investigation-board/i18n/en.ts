import { bibliography } from '../bibliography';
import type { InvestigationBoardLocaleContent } from '../entry';

export const content: InvestigationBoardLocaleContent = {
  slug: 'investigation-board',
  title: 'Conspiracy Board Maker',
  description: 'Design interactive conspiracy boards and investigation maps. Connect characters, clues, locations, and trace relationships with customized links.',
  ui: {
    title: 'Conspiracy Board Maker',
    addCard: 'Add Card',
    searchPlaceholder: 'Search cards by name or clues',
    filterAll: 'All Categories',
    filterCharacter: 'Characters',
    filterClue: 'Clues',
    filterLocation: 'Locations',
    filterItem: 'Items',
    cardName: 'Card Name',
    cardCategory: 'Category',
    cardDescription: 'Description',
    cardNotes: 'Private Notes',
    cardTags: 'Tags separated by commas',
    cardColor: 'Card Highlight Color',
    save: 'Save Changes',
    delete: 'Delete',
    cancel: 'Cancel',
    clearBoard: 'Clear Board',
    connectionsTitle: 'Relationships Map',
    addConnection: 'Add Connection',
    connectionLabel: 'Relationship Label',
    connectionColor: 'Line Color',
    sourceCard: 'From Card',
    targetCard: 'To Card',
    close: 'Close',
    character: 'Character',
    clue: 'Clue',
    location: 'Location',
    item: 'Item',
    custom: 'Custom',
    immersive: 'Fullscreen',
  },
  seo: [
    { type: 'title', text: 'Conspiracy Board Maker for Tabletop and Detective RPG Games', level: 2 },
    { type: 'paragraph', html: 'Create immersive investigation maps and conspiracy boards for your tabletop roleplaying games. Drag and drop clues, locations, and characters, then connect them with customized threads to visualize complex mysteries.' },
    {
      type: 'stats',
      items: [
        { value: 'Unlimited', label: 'Nodes Board' },
        { value: '4', label: 'Categories' },
        { value: 'Drag and Drop', label: 'Interface' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'How to Build an Investigation Map', level: 2 },
    { type: 'paragraph', html: 'Add custom cards representing clues, characters, items, and locations. Drag them into positions on the grid. Select two cards to link them with a colored relationship thread. Double click nodes or threads to view detailed information.' },
  ],
  faq: [
    {
      question: 'How do I add connection lines?',
      answer: 'Click Add Connection in the control panel, choose the source and target cards, assign a text label and color, and save it.',
    },
    {
      question: 'Can I drag cards on mobile?',
      answer: 'Yes, the board supports touch events to drag and move cards around smoothly on smartphones and tablets.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Add Investigation Cards',
      text: 'Create cards representing NPCs, clues, crime scenes, or items.',
    },
    {
      name: 'Link Relationships',
      text: 'Create connection lines between cards to show how clues relate.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Conspiracy Board Maker',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 SVG support. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'How do I add connection lines?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Click Add Connection in the control panel, choose the source and target cards, assign a text label and color, and save it.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Can I drag cards on mobile?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes, the board supports touch events to drag and move cards around smoothly on smartphones and tablets.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Conspiracy Board Maker',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Add Investigation Cards',
          'text': 'Create cards representing NPCs, clues, crime scenes, or items.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Link Relationships',
          'text': 'Create connection lines between cards to show how clues relate.',
        },
      ],
    },
  ],

};
