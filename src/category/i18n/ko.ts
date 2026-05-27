import type { CategoryLocaleContent } from '../../types';

const slug = 'horology';
const title = '시계학 도구 & 참고 가이드';
const description = '시계 애호가를 위한 프로페셔널급 시계학 유틸리티-도 추적, 무브먼트 자기 제거, 착용 시간 계산, 인기 칼리버의 용두 위치 참고 자료를 제공합니다.';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: '시계 애호가를 위한 필수 도구', level: 2 },
    { type: 'paragraph', html: '기계식 무브먼트를 조정하거나, 최근에 자화된 시계의 자기를 제거하거나, 시계 착용 빈도를 추적하거나, 좋아하는 칼리버의 용두 위치를 학습하는 등, 이 스위트는 프로페셔널급 시계학 도구를 여러분의 손끝에 제공합니다-의 장비는 필요 없습니다.' },
    { type: 'title', text: '정밀도, 자기 제거 & 용두 위치 참고 자료', level: 2 },
    { type: 'paragraph', html: '원자시계 대비 일일 오차 추적부터 정확한 타이밍으로 무브먼트를 안전하게 자기 제거하는 방법, 시계를 마지막으로 착용한 시점 확인, ETA 또는 Miyota 칼리버의 모든 용두 위치 이해까지-도구들은 모든 수집가와 애호가의 일상적인 필요를 충족합니다.' },
    {
      type: 'stats', items: [
        { label: '도구', value: '4', icon: 'mdi:tools' },
        { label: '칼리버', value: '8+', icon: 'mdi:engine' },
        { label: '언어', value: '15', icon: 'mdi:translate' },
        { label: '데이터 개인정보 보호', value: 'Local', icon: 'mdi:shield-check' },
      ]
    },
  ],
};
