import { bibliography } from '../bibliography';
import type { DecisionWheelLocaleContent } from '../entry';

export const content: DecisionWheelLocaleContent = {
  slug: 'entscheidungsrad',
  title: 'Entscheidungsrad: Zufallsgenerator und Auswahldrehrad',
  description: 'Drehen Sie ein anpassbares Entscheidungsrad für Brettspiele. Fügen Sie Segmente mit Gewichtungen hinzu, um Ergebnisse zufällig zu bestimmen.',
  ui: {
    title: 'Entscheidungsrad',
    spinButton: 'Rad Drehen',
    clearHistory: 'Verlauf Löschen',
    resultHeading: 'Ergebnis',
    historyTitle: 'Drehverlauf',
    noHistory: 'Noch keine Drehs. Klicken Sie auf Rad Drehen, um zu starten.',
    addSegmentLabel: 'Segment Hinzufügen',
    removeSegmentLabel: 'Entfernen',
    segmentLabelPlaceholder: 'Name',
    presetLabel: 'Vorlagen',
    presetYesNo: 'Ja oder Nein',
    presetNumbers: 'Zahlen 1-6',
    presetActions: 'Aktionen',
    presetCustom: 'Benutzerdefiniert',
    presetD20: 'D20',
    presetAlignment: 'Gesinnung',
    presetLoot: 'Beuteseltenheit',
    weightLabel: 'Gewicht',
    spinAgain: 'Nochmals Drehen',
    noSegments: 'Fügen Sie Segmente hinzu, bevor Sie drehen.',
  },
  seo: [
    { type: 'title', text: 'Entscheidungsrad für Brettspiele und Gruppenaktivitäten', level: 2 },
    { type: 'paragraph', html: 'Das Entscheidungsrad ist ein vielseitiges Werkzeug für Brettspiele und Gruppenaktivitäten. Passen Sie die Segmente mit eigenen Namen und Farben an.' },
    {
      type: 'stats',
      items: [
        { value: '16', label: 'Segment Hinzufügen' },
        { value: '7', label: 'Vorlagen' },
        { value: '10', label: 'Drehverlauf' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'So Verwenden Sie das Entscheidungsrad', level: 2 },
    { type: 'paragraph', html: 'Wählen Sie eine Vorlage oder erstellen Sie eigene Segmente mit Gewichtungen, um die Gewinnwahrscheinlichkeiten anzupassen.' },
  ],
  faq: [
    {
      question: 'Wie funktioniert das Entscheidungsrad?',
      answer: 'Wählen Sie eine Vorlage oder erstellen Sie eigene Optionen, legen Sie Gewichtungen fest und klicken Sie auf Drehen.',
    },
    {
      question: 'Kann ich Farben und Namen anpassen?',
      answer: 'Ja, Sie können beliebig Segmente hinzufügen, Namen ändern, Farben wählen und die Gewichtung von 1 bis 5 anpassen.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Segmente Erstellen',
      text: 'Wählen Sie eine Vorlage oder fügen Sie benutzerdefinierte Segmente mit Namen und Farben hinzu.',
    },
    {
      name: 'Das Rad Drehen',
      text: 'Klicken Sie auf Drehen und warten Sie, bis das Rad mit realistischer Verzögerung stoppt.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Entscheidungsrad',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 Canvas. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Wie funktioniert das Entscheidungsrad?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Wählen Sie eine Vorlage oder erstellen Sie eigene Optionen, legen Sie Gewichtungen fest und klicken Sie auf Drehen.' },
        },
        { '@type': 'Question', 'name': 'Kann ich Farben und Namen anpassen?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja, Sie können beliebig Segmente hinzufügen, Namen ändern, Farben wählen und die Gewichtung von 1 bis 5 anpassen.' } },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Decision Wheel Spinner',
      'step': [
        { '@type': 'HowToStep', 'name': 'Segmente Erstellen', 'text': 'Wählen Sie eine Vorlage oder fügen Sie benutzerdefinierte Segmente mit Namen und Farben hinzu.' },
        { '@type': 'HowToStep', 'name': 'Das Rad Drehen', 'text': 'Klicken Sie auf Drehen und warten Sie, bis das Rad mit realistischer Verzögerung stoppt.' },
      ],
    },
  ],
};
