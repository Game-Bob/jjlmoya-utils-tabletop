import { bibliography } from '../bibliography';
import type { DecisionWheelLocaleContent } from '../entry';

export const content: DecisionWheelLocaleContent = {
  slug: 'decision-wheel',
  title: '결정 휠: 랜덤 선택기 및 옵션 회전판',
  description: '보드게임용 맞춤형 결정 휠. 가중치가 부여된 세그먼트를 추가하고 편집하여 결과를 무작위로 선택하세요.',
  ui: {
    title: '결정 휠',
    spinButton: '휠 돌리기',
    clearHistory: '기록 지우기',
    resultHeading: '결과',
    historyTitle: '스핀 기록',
    noHistory: '기록 없음. 휠 돌리기를 클릭하여 시작하세요.',
    addSegmentLabel: '세그먼트 추가',
    removeSegmentLabel: '삭제',
    segmentLabelPlaceholder: '라벨',
    presetLabel: '프리셋',
    presetYesNo: '예 또는 아니오',
    presetNumbers: '숫자 1-6',
    presetActions: '행동',
    presetCustom: '사용자 정의',
    presetD20: 'D20',
    presetAlignment: '성향',
    presetLoot: '전리품 등급',
    weightLabel: '가중치',
    spinAgain: '다시 돌리기',
    noSegments: '돌리기 전에 휠에 세그먼트를 추가하세요.',
  },
  seo: [
    { type: 'title', text: '보드게임 및 그룹 모임을 위한 결정 휠 선택기', level: 2 },
    { type: 'paragraph', html: '결정 휠은 보드게임에 유용한 다목적 랜덤 선택 툴입니다. 자신만의 라벨과 색상으로 휠을 자유롭게 디자인해보세요.' },
    {
      type: 'stats',
      items: [
        { value: '16', label: '세그먼트 추가' },
        { value: '7', label: '프리셋' },
        { value: '10', label: '스핀 기록' },
      ],
      columns: 3,
    },
    { type: 'title', text: '결정 휠 사용법', level: 2 },
    { type: 'paragraph', html: '준비된 프리셋을 불러오거나 직접 항목을 만들고 가중치를 조절해 당첨 확률을 다르게 구성할 수 있습니다.' },
  ],
  faq: [
    {
      question: '결정 휠은 어떻게 작동하나요?',
      answer: '원하는 항목을 만들고 각 세그먼트의 가중치를 설정한 후 휠 돌리기를 클릭해 결과를 얻습니다.',
    },
    {
      question: '색상과 이름을 바꿀 수 있나요?',
      answer: '네, 라벨 이름과 색상뿐만 아니라 각 세그먼트의 가중치 값을 1부터 5까지 조절할 수 있습니다.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '세그먼트 구성',
      text: '프리셋을 사용하거나 나만의 라벨, 색상 및 가중치를 설정한 항목들을 생성합니다.',
    },
    {
      name: '휠 돌리기',
      text: '휠 돌리기를 실행하면 감속 물리가 적용된 부드러운 회전 애니메이션이 실행됩니다.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '결정 휠',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 Canvas. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': '결정 휠은 어떻게 작동하나요?', 'acceptedAnswer': { '@type': 'Answer', 'text': '원하는 항목을 만들고 각 세그먼트의 가중치를 설정한 후 휠 돌리기를 클릭해 결과를 얻습니다.' } },
        { '@type': 'Question', 'name': '색상과 이름을 바꿀 수 있나요?', 'acceptedAnswer': { '@type': 'Answer', 'text': '네, 라벨 이름과 색상뿐만 아니라 각 세그먼트의 가중치 값을 1부터 5까지 조절할 수 있습니다.' } },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Decision Wheel Spinner',
      'step': [
        { '@type': 'HowToStep', 'name': '세그먼트 구성', 'text': '프리셋을 사용하거나 나만의 라벨, 색상 및 가중치를 설정한 항목들을 생성합니다.' },
        { '@type': 'HowToStep', 'name': '휠 돌리기', 'text': '휠 돌리기를 실행하면 감속 물리가 적용된 부드러운 회전 애니메이션이 실행됩니다.' },
      ],
    },
  ],
};
