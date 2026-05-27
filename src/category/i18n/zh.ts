import type { CategoryLocaleContent } from '../../types';

const slug = 'horology';
const title = '钟表学工具与参考指南';
const description = '面向腕表爱好者的专业级钟表学工具-精度、消磁机芯、计算佩戴频率、探索热门机芯的錶冠位置参考。';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: '腕表爱好者必备工具', level: 2 },
    { type: 'paragraph', html: '无论您是在调校机械机芯、为最近受磁的手表消磁、追踪佩戴手表的频率，还是了解您最爱机芯的錶冠位置，这套工具将专业级钟表学功能置于您的指尖-昂贵设备。' },
    { type: 'title', text: '精度、消磁与錶冠位置参考', level: 2 },
    { type: 'paragraph', html: '从追踪与原子时计的日差到精确计时地安全消磁机芯，从了解您上次佩戴手表的时间到理解ETA或Miyota机芯的每个錶冠位置-工具覆盖了每位收藏家和爱好者的日常需求。' },
    {
      type: 'stats', items: [
        { label: '工具', value: '4', icon: 'mdi:tools' },
        { label: '机芯', value: '8+', icon: 'mdi:engine' },
        { label: '语言', value: '15', icon: 'mdi:translate' },
        { label: '数据隐私', value: 'Local', icon: 'mdi:shield-check' },
      ]
    },
  ],
};
