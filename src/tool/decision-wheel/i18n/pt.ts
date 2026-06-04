import { bibliography } from '../bibliography';
import type { DecisionWheelLocaleContent } from '../entry';

export const content: DecisionWheelLocaleContent = {
  slug: 'roleta-de-decisoes',
  title: 'Roleta de Decisões: Seletor Aleatório e Gerador de Opções',
  description: 'Gire uma roleta de decisões personalizável para jogos de tabuleiro. Adicione e edite fatias com pesos para definir resultados.',
  ui: {
    title: 'Roleta de Decisões',
    spinButton: 'Girar a Roleta',
    clearHistory: 'Limpar Histórico',
    resultHeading: 'Resultado',
    historyTitle: 'Histórico de Giros',
    noHistory: 'Nenhum giro. Clique em Girar a Roleta para começar.',
    addSegmentLabel: 'Adicionar Fatia',
    removeSegmentLabel: 'Remover',
    segmentLabelPlaceholder: 'Rótulo',
    presetLabel: 'Predefinições',
    presetYesNo: 'Sim ou Não',
    presetNumbers: 'Números 1-6',
    presetActions: 'Ações',
    presetCustom: 'Personalizado',
    presetD20: 'D20',
    presetAlignment: 'Alinhamento',
    presetLoot: 'Raridade do Saque',
    weightLabel: 'Peso',
    spinAgain: 'Girar Novamente',
    noSegments: 'Adicione fatias à roleta antes de girar.',
  },
  seo: [
    { type: 'title', text: 'Roleta de Decisões para Jogos de Tabuleiro e Atividades', level: 2 },
    { type: 'paragraph', html: 'A roleta de decisões é uma ferramenta versátil para jogos de mesa. Personalize as fatias com seus textos e cores e gire.' },
    {
      type: 'stats',
      items: [
        { value: '16', label: 'Adicionar Fatia' },
        { value: '7', label: 'Predefinições' },
        { value: '10', label: 'Histórico de Giros' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Como Usar a Roleta de Decisões', level: 2 },
    { type: 'paragraph', html: 'Selecione uma configuração padrão ou crie fatias com pesos diferentes para alterar as chances de vitória.' },
  ],
  faq: [
    {
      question: 'Como funciona a roleta de decisões?',
      answer: 'Insira suas opções, ajuste os pesos caso queira variar a probabilidade de sorteio e clique no botão Girar.',
    },
    {
      question: 'Posso personalizar cores e nomes?',
      answer: 'Sim, você pode adicionar fatias, mudar os nomes de exibição, escolher cores e definir pesos de 1 a 5.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Montar as Fatias',
      text: 'Carregue uma predefinição rápida ou crie suas próprias fatias especificando rótulos, cores e pesos.',
    },
    {
      name: 'Girar a Roleta',
      text: 'Clique para acionar a rotação e aguarde a roleta parar por completo com física realista.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Roleta de Decisões',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 Canvas. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': 'Como funciona a roleta de decisões?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Insira suas opções, ajuste os pesos caso queira variar a probabilidade de sorteio e clique no botão Girar.' } },
        { '@type': 'Question', 'name': 'Posso personalizar cores e nomes?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sim, você pode adicionar fatias, mudar os nomes de exibição, escolher cores e definir pesos de 1 a 5.' } },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Decision Wheel Spinner',
      'step': [
        { '@type': 'HowToStep', 'name': 'Montar as Fatias', 'text': 'Carregue uma predefinição rápida ou crie suas próprias fatias especificando rótulos, cores e pesos.' },
        { '@type': 'HowToStep', 'name': 'Girar a Roleta', 'text': 'Clique para acionar a rotação e aguarde a roleta parar por completo com física realista.' },
      ],
    },
  ],
};
