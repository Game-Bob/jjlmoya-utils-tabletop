import { bibliography } from '../bibliography';
import type { DecisionWheelLocaleContent } from '../entry';

export const content: DecisionWheelLocaleContent = {
  slug: 'ruota-delle-decisioni',
  title: 'Ruota delle Decisioni: Selettore Casuale e Generatore di Scelte',
  description: 'Gira una ruota delle decisioni personalizzabile per i tuoi giochi da tavolo. Aggiungi ed edita spicchi con pesi per determinare risultati casuali.',
  ui: {
    title: 'Ruota delle Decisioni',
    spinButton: 'Gira la Ruota',
    clearHistory: 'Cancella Cronologia',
    resultHeading: 'Risultato',
    historyTitle: 'Cronologia Giri',
    noHistory: 'Nessun giro registrato. Clicca su Gira la Ruota per iniziare.',
    addSegmentLabel: 'Aggiungi Spicchio',
    removeSegmentLabel: 'Rimuovi',
    segmentLabelPlaceholder: 'Etichetta',
    presetLabel: 'Preimpostazioni',
    presetYesNo: 'Sì o No',
    presetNumbers: 'Numeri 1-6',
    presetActions: 'Azioni',
    presetCustom: 'Personalizzato',
    presetD20: 'D20',
    presetAlignment: 'Allineamento',
    presetLoot: 'Rarità del Bottino',
    weightLabel: 'Peso',
    spinAgain: 'Gira di Nuovo',
    noSegments: 'Aggiungi spicchi alla ruota prima di girare.',
  },
  seo: [
    { type: 'title', text: 'Ruota delle Decisioni per Giochi da Tavolo e Attività di Gruppo', level: 2 },
    { type: 'paragraph', html: 'La ruota delle decisioni è uno strumento versatile per giochi di ruolo e da tavolo. Personalizza gli spicchi con testi e colori.' },
    {
      type: 'stats',
      items: [
        { value: '16', label: 'Aggiungi Spicchio' },
        { value: '7', label: 'Preimpostazioni' },
        { value: '10', label: 'Cronologia Giri' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Come Usare la Ruota delle Decisioni', level: 2 },
    { type: 'paragraph', html: 'Scegli un set preimpostato o crea i tuoi spicchi personali impostando pesi diversi per calibrare le probabilità.' },
  ],
  faq: [
    {
      question: 'Come funziona la ruota delle decisioni?',
      answer: 'Configura le tue opzioni, assegna un peso per variare le probabilità e premi Gira la Ruota per visualizzare il risultato.',
    },
    {
      question: 'Posso personalizzare colori e testi?',
      answer: 'Sì, puoi aggiungere nuovi spicchi, rinominarli, scegliere un colore e impostare un peso tra 1 e 5.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Configurare gli Spicchi',
      text: 'Seleziona un set preimpostato o crea opzioni personalizzate assegnando colori e pesi.',
    },
    {
      name: 'Girare la Ruota',
      text: 'Fai clic sul pulsante di avvio e guarda la ruota rallentare con fisica realistica fino a fermarsi.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Ruota delle Decisioni',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 Canvas. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': 'Come funziona la ruota delle decisioni?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Configura le tue opzioni, assegna un peso per variare le probabilità e premi Gira la Ruota per visualizzare il risultato.' } },
        { '@type': 'Question', 'name': 'Posso personalizzare colori e testi?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sì, puoi aggiungere nuovi spicchi, rinominarli, scegliere un colore e impostare un peso tra 1 e 5.' } },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Decision Wheel Spinner',
      'step': [
        { '@type': 'HowToStep', 'name': 'Configurare gli Spicchi', 'text': 'Seleziona un set preimpostato o crea opzioni personalizzate assegnando colori e pesi.' },
        { '@type': 'HowToStep', 'name': 'Girare la Ruota', 'text': 'Fai clic sul pulsante di avvio e guarda la ruota rallentare con fisica realistica fino a fermarsi.' },
      ],
    },
  ],
};
