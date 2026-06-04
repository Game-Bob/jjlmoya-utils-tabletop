import { bibliography } from '../bibliography';
import type { DecisionWheelLocaleContent } from '../entry';

export const content: DecisionWheelLocaleContent = {
  slug: 'decision-wheel',
  title: '意思決定ホイール: ランダムセレクターとカスタム抽選ルーレット',
  description: 'ボードゲーム用のカスタマイズ可能な意思決定ホイール。重み付きのセグメントを追加・編集して、結果をランダムに決定します。',
  ui: {
    title: '意思決定ホイール',
    spinButton: 'ホイールを回す',
    clearHistory: '履歴をクリア',
    resultHeading: '結果',
    historyTitle: 'スピン履歴',
    noHistory: '履歴はありません。ホイールを回すをクリックして開始します。',
    addSegmentLabel: 'セグメントを追加',
    removeSegmentLabel: '削除',
    segmentLabelPlaceholder: 'ラベル',
    presetLabel: 'プリセット',
    presetYesNo: 'はい または いいえ',
    presetNumbers: '数字 1-6',
    presetActions: 'アクション',
    presetCustom: 'カスタム',
    presetD20: 'D20',
    presetAlignment: 'アライメント',
    presetLoot: '戦利品のレア度',
    weightLabel: '重み',
    spinAgain: 'もう一度回す',
    noSegments: '回す前にホイールにセグメントを追加してください。',
  },
  seo: [
    { type: 'title', text: 'ボードゲームやグループ活動で使える意思決定ホイール', level: 2 },
    { type: 'paragraph', html: '意思決定ホイールは、ボードゲームやグループのアクティビティで役立つ多目的ツールです。項目と色を自由に設定できます。' },
    {
      type: 'stats',
      items: [
        { value: '16', label: 'セグメントを追加' },
        { value: '7', label: 'プリセット' },
        { value: '10', label: 'スピン履歴' },
      ],
      columns: 3,
    },
    { type: 'title', text: '意思決定ホイールの使い方', level: 2 },
    { type: 'paragraph', html: 'プリセットを選ぶか、独自の項目を作成して重みを設定し、当選確率を自由にコントロールできます。' },
  ],
  faq: [
    {
      question: '意思決定ホイールはどのように機能しますか？',
      answer: 'セグメントを作成し、必要に応じて重みを設定したら、ホイールを回すボタンをクリックするだけでランダムに結果が選ばれます。',
    },
    {
      question: '色や名前は変更できますか？',
      answer: 'はい。セグメントを追加し、名前や色、1から5までの重要度の重みを自由に変更可能です。',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '項目を選択または作成',
      text: 'プリセットを選ぶか、独自のラベル、カラー、ウェイトを設定したセグメントを追加します。',
    },
    {
      name: 'ホイールをスピン',
      text: 'スタートボタンをクリックすると、リアルな摩擦減速アニメーションを伴ってホイールが回転します。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '意思決定ホイール',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 Canvas. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': '意思決定ホイールはどのように機能しますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'セグメントを作成し、必要に応じて重みを設定したら、ホイールを回すボタンをクリックするだけでランダムに結果が選ばれます。' } },
        { '@type': 'Question', 'name': '色や名前は変更できますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'はい。セグメントを追加し、名前や色、1から5までの重要度の重みを自由に変更可能です。' } },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Decision Wheel Spinner',
      'step': [
        { '@type': 'HowToStep', 'name': '項目を選択または作成', 'text': 'プリセットを選ぶか、独自のラベル、カラー、ウェイトを設定したセグメントを追加します。' },
        { '@type': 'HowToStep', 'name': 'ホイールをスピン', 'text': 'スタートボタンをクリックすると、リアルな摩擦減速アニメーションを伴ってホイールが回転します。' },
      ],
    },
  ],
};
