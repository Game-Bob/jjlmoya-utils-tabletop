import { bibliography } from '../bibliography';
import type { DecisionWheelLocaleContent } from '../entry';

export const content: DecisionWheelLocaleContent = {
  slug: 'kolo-decyzyjne',
  title: 'Koło Decyzyjne: Losowy Selektor i Generator Wyborów',
  description: 'Zakręć konfigurowalnym kołem decyzyjnym w grach planszowych. Dodawaj i edytuj wycinki z wagami, aby losować wyniki.',
  ui: {
    title: 'Koło Decyzyjne',
    spinButton: 'Zakręć Kołem',
    clearHistory: 'Wyczyść Historię',
    resultHeading: 'Wynik',
    historyTitle: 'Historia Losowań',
    noHistory: 'Brak losowań. Kliknij Zakręć Kołem, aby rozpocząć.',
    addSegmentLabel: 'Dodaj Wycinek',
    removeSegmentLabel: 'Usuń',
    segmentLabelPlaceholder: 'Etykieta',
    presetLabel: 'Szablony',
    presetYesNo: 'Tak lub Nie',
    presetNumbers: 'Liczby 1-6',
    presetActions: 'Akcje',
    presetCustom: 'Własne',
    presetD20: 'D20',
    presetAlignment: 'Charakter',
    presetLoot: 'Rzadkość Łupu',
    weightLabel: 'Waga',
    spinAgain: 'Zakręć Ponownie',
    noSegments: 'Dodaj wycinki do koła przed kręceniem.',
  },
  seo: [
    { type: 'title', text: 'Koło Decyzyjne do Gier Planszowych i Zabaw Grupowych', level: 2 },
    { type: 'paragraph', html: 'Koło decyzyjne to uniwersalne narzędzie do gier planszowych. Dostosuj wycinki za pomocą własnych etykiet i kolorów.' },
    {
      type: 'stats',
      items: [
        { value: '16', label: 'Dodaj Wycinek' },
        { value: '7', label: 'Szablony' },
        { value: '10', label: 'Historia Losowań' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Jak Używać Koła Decyzyjnego', level: 2 },
    { type: 'paragraph', html: 'Wybierz gotowy szablon lub stwórz własne wycinki z wagami określającymi szansę wylosowania każdej opcji.' },
  ],
  faq: [
    {
      question: 'Jak działa koło decyzyjne?',
      answer: 'Stwórz wycinki koła, ustaw ich wagi wpływające na prawdopodobieństwo i kliknij przycisk kręcenia.',
    },
    {
      question: 'Czy mogę dostosować kolory i nazwy?',
      answer: 'Tak, możesz dodawać wycinki, zmieniać ich teksty, dobierać kolory oraz modyfikować wagę od 1 do 5.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Skonfiguruj Wycinki',
      text: 'Użyj szablonu lub dodaj własne opcje, nadając im opisy, kolory oraz wagi.',
    },
    {
      name: 'Zakręć Kołem',
      text: 'Kliknij przycisk zakręcenia, aby uruchomić animację obrotu z fizyką naturalnego hamowania.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Koło Decyzyjne',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 Canvas. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': 'Jak działa koło decyzyjne?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Stwórz wycinki koła, ustaw ich wagi wpływające na prawdopodobieństwo i kliknij przycisk kręcenia.' } },
        { '@type': 'Question', 'name': 'Czy mogę dostosować kolory i nazwy?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Tak, możesz dodawać wycinki, zmieniać ich teksty, dobierać kolory oraz modyfikować wagę od 1 do 5.' } },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Decision Wheel Spinner',
      'step': [
        { '@type': 'HowToStep', 'name': 'Skonfiguruj Wycinki', 'text': 'Użyj szablonu lub dodaj własne opcje, nadając im opisy, kolory oraz wagi.' },
        { '@type': 'HowToStep', 'name': 'Zakręć Kołem', 'text': 'Kliknij przycisk zakręcenia, aby uruchomić animację obrotu z fizyką naturalnego hamowania.' },
      ],
    },
  ],
};
