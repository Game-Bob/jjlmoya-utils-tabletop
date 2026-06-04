import { bibliography } from '../bibliography';
import type { DecisionWheelLocaleContent } from '../entry';

export const content: DecisionWheelLocaleContent = {
  slug: 'beslissingsrad',
  title: 'Beslissingsrad: Willekeurige Kiezer en Keuze Generator',
  description: 'Draai aan een aanpasbaar beslissingsrad voor bordspellen. Voeg segmenten met gewichten toe om willekeurig uitkomsten te bepalen.',
  ui: {
    title: 'Beslissingsrad',
    spinButton: 'Draai aan het Rad',
    clearHistory: 'Geschiedenis Wissen',
    resultHeading: 'Resultaat',
    historyTitle: 'Draai Geschiedenis',
    noHistory: 'Nog niet gedraaid. Klik op Draai aan het Rad om te beginnen.',
    addSegmentLabel: 'Segment Toevoegen',
    removeSegmentLabel: 'Verwijderen',
    segmentLabelPlaceholder: 'Label',
    presetLabel: 'Voorinstellingen',
    presetYesNo: 'Ja of Nee',
    presetNumbers: 'Nummers 1-6',
    presetActions: 'Acties',
    presetCustom: 'Aangepast',
    presetD20: 'D20',
    presetAlignment: 'Karakter',
    presetLoot: 'Buit Zeldzaamheid',
    weightLabel: 'Gewicht',
    spinAgain: 'Nogmaals Draaien',
    noSegments: 'Voeg segmenten toe aan het rad voordat u draait.',
  },
  seo: [
    { type: 'title', text: 'Beslissingsrad voor Bordspellen en Groepsactiviteiten', level: 2 },
    { type: 'paragraph', html: 'Het beslissingsrad is een veelzijdige tool voor bordspellen en groepen. Pas segmenten aan met uw eigen labels en kleuren.' },
    {
      type: 'stats',
      items: [
        { value: '16', label: 'Segment Toevoegen' },
        { value: '7', label: 'Voorinstellingen' },
        { value: '10', label: 'Draai Geschiedenis' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Hoe het Beslissingsrad te Gebruiken', level: 2 },
    { type: 'paragraph', html: 'Kies een voorinstelling of maak uw eigen segmenten met gewichten om de kansen per keuze te bepalen.' },
  ],
  faq: [
    {
      question: 'Hoe werkt het beslissingsrad?',
      answer: 'Configureer uw keuzes, pas eventueel de gewichten aan voor de kansverdeling en druk op de draaiknop.',
    },
    {
      question: 'Kan ik kleuren en namen aanpassen?',
      answer: 'Ja, u kunt segmenten toevoegen, labels bewerken, kleuren kiezen en het gewicht van 1 tot 5 instellen.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Segmenten Aanmaken',
      text: 'Selecteer een voorinstelling of maak handmatig segmenten aan met labels en kleuren.',
    },
    {
      name: 'Draai aan het Rad',
      text: 'Klik op de knop om de rotatie-animatie met realistische vertraging te starten.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Beslissingsrad',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 Canvas. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': 'Hoe werkt het beslissingsrad?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Configureer uw keuzes, pas eventueel de gewichten aan voor de kansverdeling en druk op de draaiknop.' } },
        { '@type': 'Question', 'name': 'Kan ik kleuren en namen aanpassen?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja, u kunt segmenten toevoegen, labels bewerken, kleuren kiezen en het gewicht van 1 tot 5 instellen.' } },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Decision Wheel Spinner',
      'step': [
        { '@type': 'HowToStep', 'name': 'Segmenten Aanmaken', 'text': 'Selecteer een voorinstelling of maak handmatig segmenten aan met labels en kleuren.' },
        { '@type': 'HowToStep', 'name': 'Draai aan het Rad', 'text': 'Klik op de knop om de rotatie-animatie met realistische vertraging te starten.' },
      ],
    },
  ],
};
