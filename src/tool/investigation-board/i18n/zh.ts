import { bibliography } from '../bibliography';
import type { InvestigationBoardLocaleContent } from '../entry';

export const content: InvestigationBoardLocaleContent = {
  slug: "investigation-board",
  title: "线索墙制作器",
  description: "设计互动式线索墙 and 调查地图。连接角色、线索、地点，并用自定义线段追踪关系。",
  ui: {
  "title": "线索墙制作器",
  "addCard": "添加卡片",
  "searchPlaceholder": "按名称或线索搜索卡片",
  "filterAll": "所有类别",
  "filterCharacter": "角色",
  "filterClue": "线索",
  "filterLocation": "地点",
  "filterItem": "物品",
  "cardName": "卡片名称",
  "cardCategory": "类别",
  "cardDescription": "描述",
  "cardNotes": "私人备注",
  "cardTags": "用逗号分隔的标签",
  "cardColor": "卡片高亮颜色",
  "save": "保存修改",
  "delete": "删除",
  "cancel": "取消",
  "clearBoard": "清空画板",
  "connectionsTitle": "关系网地图",
  "addConnection": "添加连接",
  "connectionLabel": "关系标签",
  "connectionColor": "线段颜色",
  "sourceCard": "起始卡片",
  "targetCard": "目标卡片",
  "close": "关闭",
  "character": "角色",
  "clue": "线索",
  "location": "地点",
  "item": "物品",
  "custom": "自定义",
  "immersive": "全屏模式"
},
  seo: [
    { type: 'title', text: "跑团与侦探角色扮演游戏的线索墙制作器", level: 2 },
    { type: 'paragraph', html: "为您的桌面角色扮演游戏创建沉浸式调查地图和线索墙。拖放线索、地点和角色，然后用自定义的线段将它们连接起来，使复杂的谜题可视化。" },
    {
      type: 'stats',
      items: [
        { value: "无限制", label: "节点画板" },
        { value: "4", label: "类别数量" },
        { value: "拖放操作", label: "交互界面" }
      ],
      columns: 3
    },
    { type: 'title', text: "如何构建调查地图", level: 2 },
    { type: 'paragraph', html: "添加代表线索、角色、物品和地点的自定义卡片。将它们拖动到网格中的对应位置。选择两张卡片，用彩色关系线将它们链接起来。双击节点或连接线以查看详细信息。" }
  ],
  faq: [
    {
      question: "如何添加连接线？",
      answer: "点击控制面板中的添加连接，选择起始和目标卡片，指定文本标签和颜色，然后保存。"
    },
    {
      question: "我可以在手机上拖动卡片吗？",
      answer: "可以，画板支持触摸事件，可以在智能手机和平板电脑上流畅地拖动和移动卡片。"
    }
  ],
  bibliography,
  howTo: [
    {
      name: "添加调查卡片",
      text: "创建代表NPC、线索、案发现场或物品的卡片。"
    },
    {
      name: "链接关系",
      text: "在卡片之间创建连接线，以显示线索之间的关联。"
    }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': "线索墙制作器",
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
          'name': "如何添加连接线？",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "点击控制面板中的添加连接，选择起始和目标卡片，指定文本标签和颜色，然后保存。"
          }
        },
        {
          '@type': 'Question',
          'name': "我可以在手机上拖动卡片吗？",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "可以，画板支持触摸事件，可以在智能手机和平板电脑上流畅地拖动和移动卡片。"
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': "线索墙制作器使用方法",
      'step': [
        {
          '@type': 'HowToStep',
          'name': "添加调查卡片",
          'text': "创建代表NPC、线索、案发现场或物品的卡片。"
        },
        {
          '@type': 'HowToStep',
          'name': "链接关系",
          'text': "在卡片之间创建连接线，以显示线索之间的关联。"
        }
      ]
    }
  ]
};
