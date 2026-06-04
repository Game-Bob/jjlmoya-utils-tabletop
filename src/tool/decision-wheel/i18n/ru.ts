import { bibliography } from '../bibliography';
import type { DecisionWheelLocaleContent } from '../entry';

export const content: DecisionWheelLocaleContent = {
  slug: 'koleso-reshenij',
  title: 'Koleso Reshenij: Generator Vyborov i Sluchajnyj Selektor',
  description: 'Vrashhajte nastraivaemoe koleso reshenij dlya nastolnyh igr.',
  ui: {
    title: 'Koleso Reshenij',
    spinButton: 'Zapustit Vrashenie',
    clearHistory: 'Ochistit Istoriyu',
    resultHeading: 'Rezultat',
    historyTitle: 'Istoriya Vrashenij',
    noHistory: 'Vrashenij eshe ne bylo. Nagmite Zapustit Vrashenie.',
    addSegmentLabel: 'Dobavit Segment',
    removeSegmentLabel: 'Udalit',
    segmentLabelPlaceholder: 'Podpis',
    presetLabel: 'Zagotovki',
    presetYesNo: 'Da / Net',
    presetNumbers: 'Chisla 1-6',
    presetActions: 'Dejstviya',
    presetCustom: 'Svoi',
    presetD20: 'D20',
    presetAlignment: 'Mirovozzrenie',
    presetLoot: 'Redkost Dobychi',
    weightLabel: 'Ves',
    spinAgain: 'Vrashat Eshe',
    noSegments: 'Dobavte segmenty na koleso pered vrasheniem.',
  },
  seo: [
    { type: 'title', text: 'Koleso Reshenij dlya Nastolnyh Igr', level: 2 },
    { type: 'paragraph', html: 'Koleso reshenij - eto universalnyj instrument dlya nastolnyh igr i gruppovyh meropriyatij. Nastrojte segmenty, zapustite vrashenie i poluchite sluchajnyj rezultat s realiznichnoj animaciej.' },
    { type: 'stats', items: [{ value: '16', label: 'Maksimum Segmentov' }, { value: '4', label: 'Rezhima Zagotovok' }, { value: '10', label: 'Zapisej Istorii' }], columns: 3 },
  ],
  faq: [
    { question: 'Kak rabotaet Koleso Reshenij?', answer: 'Vyberite ili sozdajte svoi segmenty, zatem nagmite Zapustit Vrashenie. Koleso ostanavlivaetsya na sluchajnom segmente.' },
    { question: 'Mogu li ya dobavit svoi segmenty?', answer: 'Da, nagmite Dobavit Segment chtoby sozdat novye varianty.' },
    { question: 'Kakie zagotovki dostupny?', answer: 'Dostupny zagotovki Da/Net, Chisla 1-6, Dejstviya i Svoi.' },
  ],
  bibliography,
  howTo: [
    { name: 'Vyberite ili Sozdajte Segmenty', text: 'Vyberite zagotovku ili dobavte svoi segmenty.' },
    { name: 'Zapustite Vrashenie', text: 'Nagmite knopku, chtoby zapustit koleso.' },
    { name: 'Posmotrite Rezultat', text: 'Rezultat podcherkivaetsya vizualnym effektom.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Decision Wheel Spinner',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 Canvas. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': 'Kak rabotaet Koleso Reshenij?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Vyberite ili sozdajte svoi segmenty, zatem nagmite Zapustit Vrashenie.' } },
        { '@type': 'Question', 'name': 'Mogu li ya dobavit svoi segmenty?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Da, nagmite Dobavit Segment chtoby sozdat novye varianty.' } },
        { '@type': 'Question', 'name': 'Kakie zagotovki dostupny?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Dostupny zagotovki Da/Net, Chisla 1-6, Dejstviya i Svoi.' } },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Decision Wheel Spinner',
      'step': [
        { '@type': 'HowToStep', 'name': 'Choose or Create Segments', 'text': 'Select a preset or add custom segments.' },
        { '@type': 'HowToStep', 'name': 'Spin the Wheel', 'text': 'Click the spin button to start the wheel.' },
        { '@type': 'HowToStep', 'name': 'View Result', 'text': 'The result is displayed with emphasis.' },
      ],
    },
  ],
};
