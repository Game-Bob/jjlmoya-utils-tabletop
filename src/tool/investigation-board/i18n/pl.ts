import { bibliography } from '../bibliography';
import type { InvestigationBoardLocaleContent } from '../entry';

export const content: InvestigationBoardLocaleContent = {
  slug: "kreator-tablicy-spiskowej",
  title: "Kreator Tablicy Spiskowej",
  description: "Projektuj interaktywne tablice spiskowe i mapy śledztw. Łącz postacie, wskazówki, miejsca i śledź relacje za pomocą niestandardowych połączeń.",
  ui: {
  "title": "Kreator Tablicy Spiskowej",
  "addCard": "Dodaj Kartę",
  "searchPlaceholder": "Szukaj kart po nazwie lub wskazówkach",
  "filterAll": "Wszystkie Kategorie",
  "filterCharacter": "Postacie",
  "filterClue": "Wskazówki",
  "filterLocation": "Lokalizacje",
  "filterItem": "Przedmioty",
  "cardName": "Nazwa Karty",
  "cardCategory": "Kategoria",
  "cardDescription": "Opis",
  "cardNotes": "Prywatne Notatki",
  "cardTags": "Tagi oddzielone przecinkami",
  "cardColor": "Kolor Wyróżnienia Karty",
  "save": "Zapisz Zmiany",
  "delete": "Usuń",
  "cancel": "Anuluj",
  "clearBoard": "Wyczyść Tablicę",
  "connectionsTitle": "Mapa Relacji",
  "addConnection": "Dodaj Połączenie",
  "connectionLabel": "Etykieta Relacji",
  "connectionColor": "Kolor Linii",
  "sourceCard": "Z Karty",
  "targetCard": "Do Karty",
  "close": "Zamknij",
  "character": "Postać",
  "clue": "Wskazówka",
  "location": "Lokalizacja",
  "item": "Przedmiot",
  "custom": "Niestandardowy",
  "immersive": "Pełny Ekran"
},
  seo: [
    { type: 'title', text: "Kreator Tablicy Spiskowej do Gier RPG i Detektywistycznych", level: 2 },
    { type: 'paragraph', html: "Twórz wciągające mapy śledztw i tablice spiskowe do swoich gier fabularnych. Przeciągaj i upuszczaj wskazówki, lokalizacje i postacie, a następnie łącz je niestandardowymi nićmi, aby zwizualizować złożone zagadki." },
    {
      type: 'stats',
      items: [
        { value: "Nielimitowane", label: "Tablica węzłów" },
        { value: "4", label: "Kategorie" },
        { value: "Przeciągnij i Upuść", label: "Interfejs" }
      ],
      columns: 3
    },
    { type: 'title', text: "Jak zbudować mapę śledztwa", level: 2 },
    { type: 'paragraph', html: "Dodaj niestandardowe karty reprezentujące wskazówki, postacie, przedmioty i lokalizacje. Przeciągnij je na odpowiednie pozycje. Wybierz dwie karty, aby połączyć je kolorową nicią relacji. Kliknij dwukrotnie węzły lub nici, aby wyświetlić szczegóły." }
  ],
  faq: [
    {
      question: "Jak dodać linie połączeń?",
      answer: "Kliknij Dodaj Połączenie w panelu sterowania, wybierz kartę źródłową i docelową, przypisz etykietę tekstową oraz kolor i zapisz."
    },
    {
      question: "Czy mogę przeciągać karty na telefonie?",
      answer: "Tak, tablica obsługuje zdarzenia dotykowe, co pozwala na płynne przeciąganie i przesuwanie kart na smartfonach i tabletach."
    }
  ],
  bibliography,
  howTo: [
    {
      name: "Dodaj Karty Śledztwa",
      text: "Twórz karty reprezentujące NPC, wskazówki, miejsca zbrodni lub przedmioty."
    },
    {
      name: "Połącz Relacje",
      text: "Twórz linie połączeń między kartami, aby pokazać, jak wskazówki się ze sobą łączą."
    }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': "Kreator Tablicy Spiskowej",
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
          'name': "Jak dodać linie połączeń?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Kliknij Dodaj Połączenie w panelu sterowania, wybierz kartę źródłową i docelową, przypisz etykietę tekstową oraz kolor i zapisz."
          }
        },
        {
          '@type': 'Question',
          'name': "Czy mogę przeciągać karty na telefonie?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Tak, tablica obsługuje zdarzenia dotykowe, co pozwala na płynne przeciąganie i przesuwanie kart na smartfonach i tabletach."
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': "Jak korzystać z Kreatora Tablicy Spiskowej",
      'step': [
        {
          '@type': 'HowToStep',
          'name': "Dodaj Karty Śledztwa",
          'text': "Twórz karty reprezentujące NPC, wskazówki, miejsca zbrodni lub przedmioty."
        },
        {
          '@type': 'HowToStep',
          'name': "Połącz Relacje",
          'text': "Twórz linie połączeń między kartami, aby pokazać, jak wskazówki się ze sobą łączą."
        }
      ]
    }
  ]
};
