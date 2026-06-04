import { bibliography } from '../bibliography';
import type { InvestigationBoardLocaleContent } from '../entry';

export const content: InvestigationBoardLocaleContent = {
  slug: "verschwoerungsbrett-ersteller",
  title: "Verschwörungsbrett Ersteller",
  description: "Entwerfen Sie interaktive Verschwörungsbretter und Ermittlungskarten. Verbinden Sie Charaktere, Hinweise, Orte und verfolgen Sie Beziehungen mit benutzerdefinierten Links.",
  ui: {
  "title": "Verschwörungsbrett Ersteller",
  "addCard": "Karte hinzufügen",
  "searchPlaceholder": "Karten nach Name oder Hinweisen durchsuchen",
  "filterAll": "Alle Kategorien",
  "filterCharacter": "Charaktere",
  "filterClue": "Hinweise",
  "filterLocation": "Orte",
  "filterItem": "Gegenstände",
  "cardName": "Kartenname",
  "cardCategory": "Kategorie",
  "cardDescription": "Beschreibung",
  "cardNotes": "Private Notizen",
  "cardTags": "Tags durch Kommas getrennt",
  "cardColor": "Kartenhervorhebungsfarbe",
  "save": "Änderungen speichern",
  "delete": "Löschen",
  "cancel": "Abbrechen",
  "clearBoard": "Brett leeren",
  "connectionsTitle": "Beziehungsnetzwerk",
  "addConnection": "Verbindung hinzufügen",
  "connectionLabel": "Beziehungsbezeichnung",
  "connectionColor": "Linienfarbe",
  "sourceCard": "Ausgangskarte",
  "targetCard": "Zielkarte",
  "close": "Schließen",
  "character": "Charakter",
  "clue": "Hinweis",
  "location": "Ort",
  "item": "Gegenstand",
  "custom": "Benutzerdefiniert",
  "immersive": "Vollbild"
},
  seo: [
    { type: 'title', text: "Verschwörungsbrett Ersteller für Tabletop und Detektiv RPG Spiele", level: 2 },
    { type: 'paragraph', html: "Erstellen Sie immersive Ermittlungskarten und Verschwörungsbretter für Ihre Tabletop-Rollenspiele. Ziehen Sie Hinweise, Orte und Charaktere per Drag-and-Drop und verbinden Sie diese mit benutzerdefinierten Fäden, um komplexe Geheimnisse zu visualisieren." },
    {
      type: 'stats',
      items: [
        { value: "Unbegrenzt", label: "Knotenbrett" },
        { value: "4", label: "Kategorien" },
        { value: "Drag-and-Drop", label: "Schnittstelle" }
      ],
      columns: 3
    },
    { type: 'title', text: "Wie man eine Ermittlungskarte aufbaut", level: 2 },
    { type: 'paragraph', html: "Fügen Sie benutzerdefinierte Karten hinzu, die Hinweise, Charaktere, Gegenstände und Orte darstellen. Ziehen Sie sie auf dem Raster in Position. Wählen Sie zwei Karten aus, um sie mit einem farbigen Beziehungsfaden zu verbinden. Doppelklicken Sie auf Knoten oder Fäden, um detaillierte Informationen anzuzeigen." }
  ],
  faq: [
    {
      question: "Wie füge ich Verbindungslinien hinzu?",
      answer: "Klicken Sie im Bedienfeld auf Verbindung hinzufügen, wählen Sie die Ausgangs- und Zielkarten aus, weisen Sie eine Textbeschriftung und eine Farbe zu und speichern Sie sie."
    },
    {
      question: "Kann ich Karten auf dem Handy ziehen?",
      answer: "Ja, das Board unterstützt Touch-Events, um Karten auf Smartphones und Tablets reibungslos zu ziehen und zu bewegen."
    }
  ],
  bibliography,
  howTo: [
    {
      name: "Ermittlungskarten hinzufügen",
      text: "Erstellen Sie Karten, die NPCs, Hinweise, Tatorte oder Gegenstände darstellen."
    },
    {
      name: "Beziehungen verknüpfen",
      text: "Erstellen Sie Verbindungslinien zwischen Karten, um zu zeigen, wie Hinweise zusammenhängen."
    }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': "Verschwörungsbrett Ersteller",
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
          'name': "Wie füge ich Verbindungslinien hinzu?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Klicken Sie im Bedienfeld auf Verbindung hinzufügen, wählen Sie die Ausgangs- und Zielkarten aus, weisen Sie eine Textbeschriftung und eine Farbe zu und speichern Sie sie."
          }
        },
        {
          '@type': 'Question',
          'name': "Kann ich Karten auf dem Handy ziehen?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Ja, das Board unterstützt Touch-Events, um Karten auf Smartphones und Tablets reibungslos zu ziehen und zu bewegen."
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': "Wie man den Verschwörungsbrett Ersteller benutzt",
      'step': [
        {
          '@type': 'HowToStep',
          'name': "Ermittlungskarten hinzufügen",
          'text': "Erstellen Sie Karten, die NPCs, Hinweise, Tatorte oder Gegenstände darstellen."
        },
        {
          '@type': 'HowToStep',
          'name': "Beziehungen verknüpfen",
          'text': "Erstellen Sie Verbindungslinien zwischen Karten, um zu zeigen, wie Hinweise zusammenhängen."
        }
      ]
    }
  ]
};
