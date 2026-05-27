import type { CategoryLocaleContent } from '../../types';

const slug = 'horology';
const title = '時計学ツール＆リファレンスガイド';
const description = '時計愛好家のためのプロ仕様の時計学ユーティリティ-の追跡、ムーブメントの消磁、装着時間の計算、人気キャリバーの竜頭位置リファレンスを提供します。';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: '時計愛好家のための必須ツール', level: 2 },
    { type: 'paragraph', html: '機械式ムーブメントの調整、磁化された時計の消磁、時計の装着頻度の記録、お気に入りキャリバーの竜頭位置の学習など、このスイートはプロ仕様の時計学ツールをあなたの指先に届けます-な機器は必要ありません。' },
    { type: 'title', text: '精度、消磁、竜頭位置リファレンス', level: 2 },
    { type: 'paragraph', html: '原子時計に対する日差の追跡から、正確なタイミングでのムーブメントの安全な消磁、時計を最後に着用した日時の確認、ETAやMiyotaキャリバーのすべての竜頭位置の理解まで-らのツールはあらゆるコレクターや愛好家の日々のニーズをカバーします。' },
    {
      type: 'stats', items: [
        { label: 'ツール数', value: '4', icon: 'mdi:tools' },
        { label: 'キャリバー数', value: '8+', icon: 'mdi:engine' },
        { label: '言語数', value: '15', icon: 'mdi:translate' },
        { label: 'データプライバシー', value: 'Local', icon: 'mdi:shield-check' },
      ]
    },
  ],
};
