import { bibliography } from '../bibliography';
import type { InvestigationBoardLocaleContent } from '../entry';

export const content: InvestigationBoardLocaleContent = {
  slug: "criador-de-quadro-de-conspiracao",
  title: "Criador de Quadro de Conspiração",
  description: "Crie quadros de conspiração interativos e mapas de investigação. Conecte personagens, pistas, locais e rastreie relacionamentos com links personalizados.",
  ui: {
  "title": "Criador de Quadro de Conspiração",
  "addCard": "Adicionar Carta",
  "searchPlaceholder": "Buscar cartas por nome ou pistas",
  "filterAll": "Todas as Categorias",
  "filterCharacter": "Personagens",
  "filterClue": "Pistas",
  "filterLocation": "Locais",
  "filterItem": "Itens",
  "cardName": "Nome da Carta",
  "cardCategory": "Categoria",
  "cardDescription": "Descrição",
  "cardNotes": "Notas Privadas",
  "cardTags": "Tags separadas por vírgulas",
  "cardColor": "Cor de Destaque da Carta",
  "save": "Salvar Alterações",
  "delete": "Excluir",
  "cancel": "Cancelar",
  "clearBoard": "Limpar Quadro",
  "connectionsTitle": "Mapa de Relações",
  "addConnection": "Adicionar Conexão",
  "connectionLabel": "Rótulo de Relação",
  "connectionColor": "Cor da Linha",
  "sourceCard": "Da Carta",
  "targetCard": "Para Carta",
  "close": "Fechar",
  "character": "Personagem",
  "clue": "Pista",
  "location": "Local",
  "item": "Item",
  "custom": "Personalizado",
  "immersive": "Tela Cheia"
},
  seo: [
    { type: 'title', text: "Criador de Quadro de Conspiração para RPGs de Mesa e Investigação", level: 2 },
    { type: 'paragraph', html: "Crie mapas de investigação imersivos e quadros de conspiração para seus jogos de RPG de mesa. Arraste e solte pistas, locais e personagens, depois conecte-os com fios personalizados para visualizar mistérios complexos." },
    {
      type: 'stats',
      items: [
        { value: "Ilimitado", label: "Quadro de Nós" },
        { value: "4", label: "Categorias" },
        { value: "Arrastar e Soltar", label: "Interface" }
      ],
      columns: 3
    },
    { type: 'title', text: "Como Construir um Mapa de Investigação", level: 2 },
    { type: 'paragraph', html: "Adicione cartas personalizadas representando pistas, personagens, itens e locais. Arraste-as para posições na grade. Selecione duas cartas para conectá-las com um fio de relação colorido. Dê duplo clique em nós ou fios para ver detalhes." }
  ],
  faq: [
    {
      question: "Como adiciono linhas de conexão?",
      answer: "Clique em Adicionar Conexão no painel de controle, escolha as cartas de origem e destino, atribua um rótulo de texto e uma cor, e salve."
    },
    {
      question: "Posso arrastar cartas no celular?",
      answer: "Sim, o quadro suporta eventos de toque para arrastar e mover cartas de forma suave em smartphones e tablets."
    }
  ],
  bibliography,
  howTo: [
    {
      name: "Adicionar Cartas de Investigação",
      text: "Crie cartas que representam NPCs, pistas, cenas de crime ou itens."
    },
    {
      name: "Vincular Relacionamentos",
      text: "Crie linhas de conexão entre as cartas para mostrar a relação entre as pistas."
    }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': "Criador de Quadro de Conspiração",
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
          'name': "Como adiciono linhas de conexão?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Clique em Adicionar Conexão no painel de controle, escolha as cartas de origem e destino, atribua um rótulo de texto e uma cor, e salve."
          }
        },
        {
          '@type': 'Question',
          'name': "Posso arrastar cartas no celular?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Sim, o quadro suporta eventos de toque para arrastar e mover cartas de forma suave em smartphones e tablets."
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': "Como Usar o Criador de Quadro de Conspiração",
      'step': [
        {
          '@type': 'HowToStep',
          'name': "Adicionar Cartas de Investigação",
          'text': "Crie cartas que representam NPCs, pistas, cenas de crime ou itens."
        },
        {
          '@type': 'HowToStep',
          'name': "Vincular Relacionamentos",
          'text': "Crie linhas de conexão entre as cartas para mostrar a relação entre as pistas."
        }
      ]
    }
  ]
};
