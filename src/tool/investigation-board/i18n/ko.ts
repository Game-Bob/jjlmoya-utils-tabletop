import { bibliography } from '../bibliography';
import type { InvestigationBoardLocaleContent } from '../entry';

export const content: InvestigationBoardLocaleContent = {
  slug: "investigation-board",
  title: "관계도 제작기",
  description: "대화형 음모 보드 및 수사 지도를 제작하세요. 캐릭터, 단서, 장소를 연결하고 맞춤형 선으로 관계를 추적하세요.",
  ui: {
  "title": "관계도 제작기",
  "addCard": "카드 추가",
  "searchPlaceholder": "이름이나 단서로 카드 검색",
  "filterAll": "모든 카테고리",
  "filterCharacter": "인물",
  "filterClue": "단서",
  "filterLocation": "장소",
  "filterItem": "아이템",
  "cardName": "카드 이름",
  "cardCategory": "카테고리",
  "cardDescription": "설명",
  "cardNotes": "개인 메모",
  "cardTags": "쉼표로 구분된 태그",
  "cardColor": "카드 강조 색상",
  "save": "변경사항 저장",
  "delete": "삭제",
  "cancel": "취소",
  "clearBoard": "보드 지우기",
  "connectionsTitle": "관계도 맵",
  "addConnection": "연결 추가",
  "connectionLabel": "관계 설명",
  "connectionColor": "선 색상",
  "sourceCard": "시작 카드",
  "targetCard": "대상 카드",
  "close": "닫기",
  "character": "인물",
  "clue": "단서",
  "location": "장소",
  "item": "아이템",
  "custom": "사용자 정의",
  "immersive": "전체 화면"
},
  seo: [
    { type: 'title', text: "TRPG 및 추리 RPG 게임을 위한 관계도 제작기", level: 2 },
    { type: 'paragraph', html: "TRPG 게임을 위한 몰입형 수사 지도와 음모 보드를 만들어보세요. 단서, 장소, 캐릭터를 드래그 앤 드롭한 뒤 맞춤형 실로 연결해 복잡한 미스터리를 시각화하세요." },
    {
      type: 'stats',
      items: [
        { value: "무제한", label: "노드 보드" },
        { value: "4", label: "카테고리" },
        { value: "드래그 앤 드롭", label: "인터페이스" }
      ],
      columns: 3
    },
    { type: 'title', text: "수사 지도 만드는 법", level: 2 },
    { type: 'paragraph', html: "단서, 캐릭터, 아이템, 장소를 나타내는 커스텀 카드를 추가하세요. 그리드 위에 드래그해 배치하고 두 카드를 선택해 유색 관계선으로 연결하세요. 노드나 선을 더블 클릭해 상세 정보를 확인하세요." }
  ],
  faq: [
    {
      question: "연결선은 어떻게 추가하나요?",
      answer: "제어판에서 연결 추가를 클릭하고 시작 카드와 대상 카드를 선택한 뒤 텍스트 라벨과 색상을 설정하고 저장합니다."
    },
    {
      question: "모바일에서도 카드를 드래그할 수 있나요?",
      answer: "네, 터치 이벤트를 지원하여 스마트폰과 태블릿에서도 카드를 부드럽게 드래그하고 이동할 수 있습니다."
    }
  ],
  bibliography,
  howTo: [
    {
      name: "수사 카드 추가",
      text: "NPC, 단서, 범죄 현장 또는 아이템을 나타내는 카드를 생성합니다."
    },
    {
      name: "관계 연결",
      text: "카드 사이에 연결선을 만들어 단서들의 연관 관계를 보여줍니다."
    }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': "관계도 제작기",
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
          'name': "연결선은 어떻게 추가하나요?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "제어판에서 연결 추가를 클릭하고 시작 카드와 대상 카드를 선택한 뒤 텍스트 라벨과 색상을 설정하고 저장합니다."
          }
        },
        {
          '@type': 'Question',
          'name': "모바일에서도 카드를 드래그할 수 있나요?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "네, 터치 이벤트를 지원하여 스마트폰과 태블릿에서도 카드를 부드럽게 드래그하고 이동할 수 있습니다."
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': "관계도 제작기 사용법",
      'step': [
        {
          '@type': 'HowToStep',
          'name': "수사 카드 추가",
          'text': "NPC, 단서, 범죄 현장 또는 아이템을 나타내는 카드를 생성합니다."
        },
        {
          '@type': 'HowToStep',
          'name': "관계 연결",
          'text': "카드 사이에 연결선을 만들어 단서들의 연관 관계를 보여줍니다."
        }
      ]
    }
  ]
};
