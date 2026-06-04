import { bibliography } from '../bibliography';
import type { InvestigationBoardLocaleContent } from '../entry';

export const content: InvestigationBoardLocaleContent = {
  slug: "investigation-board",
  title: "相関図メーカー",
  description: "インタラクティブな相関図や捜査マップを作成。人物、手がかり、場所を繋ぎ、カスタマイズされたリンクで関係性を視覚化します。",
  ui: {
  "title": "相関図メーカー",
  "addCard": "カード追加",
  "searchPlaceholder": "カード名や手がかりで検索",
  "filterAll": "すべてのカテゴリ",
  "filterCharacter": "人物",
  "filterClue": "手がかり",
  "filterLocation": "場所",
  "filterItem": "アイテム",
  "cardName": "カード名",
  "cardCategory": "カテゴリ",
  "cardDescription": "説明",
  "cardNotes": "プライベートメモ",
  "cardTags": "カンマで区切られたタグ",
  "cardColor": "カードの強調色",
  "save": "変更を保存",
  "delete": "削除",
  "cancel": "キャンセル",
  "clearBoard": "ボードをクリア",
  "connectionsTitle": "関係図マップ",
  "addConnection": "接続を追加",
  "connectionLabel": "関係性のラベル",
  "connectionColor": "線の色",
  "sourceCard": "開始カード",
  "targetCard": "対象カード",
  "close": "閉じる",
  "character": "人物",
  "clue": "手がかり",
  "location": "場所",
  "item": "アイテム",
  "custom": "カスタム",
  "immersive": "全画面表示"
},
  seo: [
    { type: 'title', text: "TRPGや探偵ゲーム用の相関図メーカー", level: 2 },
    { type: 'paragraph', html: "テーブルトークRPG用の没入型捜査マップや相関図を作成。手がかり、場所、人物をドラッグ＆ドロップし、カスタマイズされた糸で繋ぎ合わせて複雑な謎を視覚化します。" },
    {
      type: 'stats',
      items: [
        { value: "無制限", label: "ノードボード" },
        { value: "4", label: "カテゴリ数" },
        { value: "ドラッグ＆ドロップ", label: "インターフェース" }
      ],
      columns: 3
    },
    { type: 'title', text: "捜査マップの作り方", level: 2 },
    { type: 'paragraph', html: "手がかり、人物、アイテム、場所を表すカスタムカードを追加し、グリッド上でドラッグして配置します。2枚のカードを選択して、色付きの関係性の糸でリンクさせます。ノードや糸をダブルクリックすると詳細情報を表示できます。" }
  ],
  faq: [
    {
      question: "接続線を追加するにはどうすればよいですか？",
      answer: "コントロールパネルの「接続を追加」をクリックし、開始カードと対象カードを選択し、テキストラベルと色を設定して保存します。"
    },
    {
      question: "モバイルでもカードをドラッグできますか？",
      answer: "はい、スマートフォンやタブレット上でのタッチ操作に対応しており、カードをスムーズにドラッグ移動できます。"
    }
  ],
  bibliography,
  howTo: [
    {
      name: "捜査カードを追加する",
      text: "NPC、手がかり、事件現場、アイテムを表すカードを作成します。"
    },
    {
      name: "関係性をリンクする",
      text: "カード間に接続線を作成し、手がかりの関連性を示します。"
    }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': "相関図メーカー",
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
          'name': "接続線を追加するにはどうすればよいですか？",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "コントロールパネルの「接続を追加」をクリックし、開始カードと対象カードを選択し、テキストラベルと色を設定して保存します。"
          }
        },
        {
          '@type': 'Question',
          'name': "モバイルでもカードをドラッグできますか？",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "はい、スマートフォンやタブレット上でのタッチ操作に対応しており、カードをスムーズにドラッグ移動できます。"
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': "相関図メーカーの使い方",
      'step': [
        {
          '@type': 'HowToStep',
          'name': "捜査カードを追加する",
          'text': "NPC、手がかり、事件現場、アイテムを表すカードを作成します。"
        },
        {
          '@type': 'HowToStep',
          'name': "関係性をリンクする",
          'text': "カード間に接続線を作成し、手がかりの関連性を示します。"
        }
      ]
    }
  ]
};
