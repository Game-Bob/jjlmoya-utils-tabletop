import { bibliography } from '../bibliography';
import type { ScatterSelectorLocaleContent } from '../entry';

const ui = {
  title: '散布方向选择器',
  setupTitle: '散布设置',
  sectorsLabel: '罗盘扇区',
  sectors8: '8方向',
  sectors12: '12方向（时钟）',
  diceLabel: '偏差距离掷骰',
  diceD6: '1D6 英寸',
  dice2D6: '2D6 英寸',
  diceD10: '1D10 英寸',
  diceCustom: '自定义范围',
  customMaxLabel: '最大距离',
  hitChanceLabel: '直接命中概率（%）',
  rollButton: '掷骰散布',
  hitResult: '直接命中！',
  scatterResult: '散布！',
  distanceLabel: '距离',
  angleLabel: '角度',
  dragHint: '拖动罗盘手动设置风向',
  historyTitle: '最近掷骰',
  clearHistory: '清除历史',
  presetTitle: '战棋预设',
  soundOn: '音效开',
  soundOff: '音效关',
  guideStep1: '拖动罗盘以匹配您的桌面方向',
  guideStep2: '选择扇区、骰子和直接命中概率',
  guideStep3: '中心 = 您的目标。绿色光晕表示它准确落在了那里',
  guideStep3Scatter: '箭头 = 偏差方向。从中心沿箭头方向移动相应的英寸数',
  scatterModeLabel: '散布方向',
  scatterModeRandom: '随机',
  scatterModeWind: '风偏',
  scatterModeWindHint: '箭头始终跟随罗盘 - 仅距离为随机',
};

const faq = [
  {
    question: '散布方向选择器如何工作？',
    answer: '它根据选定的骰子配置计算随机角度（0-359度）和距离。同时模拟散布骰子，检查是否直接命中。',
  },
  {
    question: '我可以更改扇区格式吗？',
    answer: '可以，您可以在8方向基本扇区和12方向钟面扇区之间切换。',
  },
  {
    question: '什么是直接命中概率？',
    answer: '它代表抛射物精确命中目标而无任何偏差的概率，模拟标准散布骰子上的"命中"结果。',
  },
  {
    question: '这与Warhammer或Bolt Action兼容吗？',
    answer: '是的，它支持大多数战术战棋和微缩模型规则集中使用的标准8方向模板和12方向时钟对齐方式。',
  },
  {
    question: '散布距离在视觉上如何显示？',
    answer: '距离（英寸）作为浮动标签出现在撞击点，沿偏差方向定位。红色罗盘箭头也会锁定到最终角度，便于快速对齐模板。',
  },
  {
    question: '我可以禁用动画以更快获得结果吗？',
    answer: '动画持续约两秒，之后最终结果显示在中央，罗盘箭头锁定。目前没有跳过选项，但该延迟设计为与掷物理骰子的节奏相匹配。',
  },
];

const howTo = [
  {
    name: '配置规则',
    text: '选择罗盘扇区，选择距离骰子预设，调整直接命中概率。',
  },
  {
    name: '掷骰或拖动',
    text: '单击"掷骰散布"模拟偏差，或拖动罗盘滚轮手动调整方向。',
  },
  {
    name: '读取结果',
    text: '查看中央显示和矢量箭头，了解散布的确切距离、角度和方向。',
  },
  {
    name: '观察轨迹',
    text: '掷骰后，观察动画抛射物穿越罗盘。虚线轨迹显示偏差路径，撞击点显示距离（英寸）。',
  },
  {
    name: '解读结果',
    text: '绿色脉冲和"DIRECT HIT"表示零偏差。带有距离标签的红色爆炸表示散布 - 将模板从目标沿箭头方向放置相应的英寸数。',
  },
];

export const content: ScatterSelectorLocaleContent = {
  slug: 'scatter-direction-selector',
  title: '散布方向选择器: 桌面战棋罗盘',
  description: '使用3D触觉罗盘，为微缩模型战棋确定随机偏差、风偏和散布方向。',
  ui,
  seo: [
    { type: 'title', text: '带有实时抛射物动画的交互式散布罗盘', level: 2 },
    { type: 'paragraph', html: '散布方向选择器超越了静态数字生成，直接在罗盘覆盖层上渲染动画抛射物轨迹。当您单击"掷骰散布"时，发光的抛射物从中心沿偏差角度移动，留下虚线轨迹并在撞击点爆裂成粒子。' },
    { type: 'stats', items: [
      { value: '2', label: '扇区系统', icon: 'mdi:compass-rose' },
      { value: '4', label: '骰子预设', icon: 'mdi:dice-d6' },
      { value: '0-100%', label: '命中概率范围', icon: 'mdi:target' },
      { value: '10', label: '最近掷骰历史', icon: 'mdi:history' },
    ], columns: 4 },
    { type: 'title', text: '轨迹动画如何提升战棋决策能力', level: 3 },
    { type: 'paragraph', html: '传统的散布工具显示数字角度和距离，迫使玩家在脑海中想象桌面上的偏移量。动画轨迹通过绘制从瞄准点到散布着陆区的精确飞行路径，弥合了这一差距。' },
    { type: 'diagnostic', variant: 'success', title: '直接命中', html: '当掷骰超过命中概率时，罗盘中心会爆发脉动的绿色光环和"DIRECT HIT"文字动画。抛射物返回中心，确认完美命中且零偏差。' },
    { type: 'diagnostic', variant: 'error', title: '散布', html: '在散布结果中，抛射物沿虚线轨迹移动到着陆点。粒子爆炸、发光标记和距离（英寸）（例如 <strong>5"</strong>）出现在撞击位置。' },
    { type: 'tip', title: '专业提示: 使用风偏模式', html: '启用风偏可将散布方向锁定到您手动旋转的罗盘角度。这模拟了盛行风或固定位移矢量 - 非常适合无制导火箭、毒气云或传送事故。' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faq.map((f) => ({
        '@type': 'Question',
        'name': f.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': f.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '散布方向选择器',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '如何使用散布方向选择器',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
