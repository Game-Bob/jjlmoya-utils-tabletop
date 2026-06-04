import { bibliography } from '../bibliography';
import type { DecisionWheelLocaleContent } from '../entry';

export const content: DecisionWheelLocaleContent = {
  slug: 'decision-wheel',
  title: '决策轮盘: 在线随机选择器与抽签转盘',
  description: '为桌游设计的高级自定义决策轮盘。添加带有不同权重的分块，以随机确定游戏结果。',
  ui: {
    title: '决策轮盘',
    spinButton: '转动轮盘',
    clearHistory: '清除历史',
    resultHeading: '结果',
    historyTitle: '转动历史',
    noHistory: '暂无历史记录。点击转动轮盘开始。',
    addSegmentLabel: '添加选项',
    removeSegmentLabel: '删除',
    segmentLabelPlaceholder: '标签',
    presetLabel: '预设',
    presetYesNo: '是或否',
    presetNumbers: '数字 1-6',
    presetActions: '行动',
    presetCustom: '自定义',
    presetD20: 'D20',
    presetAlignment: '阵营',
    presetLoot: '战利品稀有度',
    weightLabel: '权重',
    spinAgain: '再次转动',
    noSegments: '请在转动前为轮盘添加选项。',
  },
  seo: [
    { type: 'title', text: '适用于桌游及团队聚会的随机决策轮盘', level: 2 },
    { type: 'paragraph', html: '决策轮盘是一个用于桌游多用途的随机选择工具。可自由定制各分块的内容和颜色。' },
    {
      type: 'stats',
      items: [
        { value: '16', label: '添加选项' },
        { value: '7', label: '预设' },
        { value: '10', label: '转动历史' },
      ],
      columns: 3,
    },
    { type: 'title', text: '如何使用决策轮盘', level: 2 },
    { type: 'paragraph', html: '选择预设方案，或创建自定义分块并设置权重，以按需调整各选项的被选中概率。' },
  ],
  faq: [
    {
      question: '决策轮盘是如何工作的？',
      answer: '配置选项并设置用于调节概率的权重，点击转动轮盘按钮即可随机获得其中一个选项。',
    },
    {
      question: '可以自定义颜色和文字吗？',
      answer: '可以。您可以自由添加选项、更改文本标签、选择背景颜色并将权重在 1 至 5 之间进行调整。',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '配置轮盘分块',
      text: '选择一个快速预设方案，或者添加自定义的标签、颜色和权重。',
    },
    {
      name: '转动决策轮盘',
      text: '点击转动按钮，轮盘将伴随逼真的物理摩擦阻尼减速动画进行旋转。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '决策轮盘',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 Canvas. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': '决策轮盘是如何工作的？', 'acceptedAnswer': { '@type': 'Answer', 'text': '配置选项并设置用于调节概率的权重，点击转动轮盘按钮即可随机获得其中一个选项。' } },
        { '@type': 'Question', 'name': '可以自定义颜色和文字吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '可以。您可以自由添加选项、更改文本标签、选择背景颜色并将权重在 1 至 5 之间进行调整。' } },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Decision Wheel Spinner',
      'step': [
        { '@type': 'HowToStep', 'name': '配置轮盘分块', 'text': '选择一个快速预设方案，或者添加自定义的标签、颜色和权重。' },
        { '@type': 'HowToStep', 'name': '转动决策轮盘', 'text': '点击转动按钮，轮盘将伴随逼真的物理摩擦阻尼减速动画进行旋转。' },
      ],
    },
  ],
};
