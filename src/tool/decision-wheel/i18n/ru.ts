import { bibliography } from '../bibliography';
import type { DecisionWheelLocaleContent } from '../entry';

export const content: DecisionWheelLocaleContent = {
  slug: 'колесо-решений',
  title: 'Колесо Решений: Генератор Выборов и Случайный Селектор',
  description: 'Врашхайте настраиваемое колесо решений для настолных игр.',
  ui: {
    title: 'Колесо Решений',
    spinButton: 'Запустит Врашение',
    clearHistory: 'Очистит Историю',
    resultHeading: 'Резултат',
    historyTitle: 'История Врашений',
    noHistory: 'Врашений еше не было. Нагмите Запустит Врашение.',
    addSegmentLabel: 'Добавит Сегмент',
    removeSegmentLabel: 'Удалит',
    segmentLabelPlaceholder: 'Подпис',
    presetLabel: 'Заготовки',
    presetYesNo: 'Да / Нет',
    presetNumbers: 'Числа 1-6',
    presetActions: 'Действия',
    presetCustom: 'Свои',
    presetD20: 'D20',
    presetAlignment: 'Мировоззрение',
    presetLoot: 'Редкост Добычи',
    weightLabel: 'Вес',
    spinAgain: 'Врашат Еше',
    noSegments: 'Добавте сегменты на колесо перед врашением.',
  },
  seo: [
    { type: 'title', text: 'Колесо Решений для Настолных Игр', level: 2 },
    { type: 'параграпх', html: 'Колесо решений - ето универсалный инструмент для настолных игр и групповых мероприятий. Настройте сегменты, запустите врашение и получите случайный резултат с реализничной анимацией.' },
    { type: 'стац', items: [{ value: '16', label: 'Максимум Сегментов' }, { value: '4', label: 'Режима Заготовок' }, { value: '10', label: 'Записей Истории' }], columns: 3 },
  ],
  faq: [
    { question: 'Как работает Колесо Решений?', answer: 'Выберите или создайте свои сегменты, затем нагмите Запустит Врашение. Колесо останавливаеця на случайном сегменте.' },
    { question: 'Могу ли я добавит свои сегменты?', answer: 'Да, нагмите Добавит Сегмент чтобы создат нове варианты.' },
    { question: 'Какие заготовки доступны?', answer: 'Доступны заготовки Да/Нет, Числа 1-6, Действия и Свои.' },
  ],
  bibliography,
  howTo: [
    { name: 'Выберите или Создайте Сегменты', text: 'Выберите заготовку или добавте свои сегменты.' },
    { name: 'Запустите Врашение', text: 'Нагмите кнопку, чтобы запустит колесо.' },
    { name: 'Посмотрите Резултат', text: 'Резултат подчеркиваеця визуалным еффектом.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Децисион Вхеел Спиннер',
      'operatingSystem': 'Алл',
      'applicationCategory': 'УтилитиесАпплицатион',
      'browserRequirements': 'Requires HTML5 Canvas. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': 'Как работает Колесо Решений?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Выберите или создайте свои сегменты, затем нагмите Запустит Врашение.' } },
        { '@type': 'Question', 'name': 'Могу ли я добавит свои сегменты?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Да, нагмите Добавит Сегмент чтобы создат нове варианты.' } },
        { '@type': 'Question', 'name': 'Какие заготовки доступны?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Доступны заготовки Да/Нет, Числа 1-6, Действия и Свои.' } },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Хов то Усе тхе Децисион Вхеел Спиннер',
      'step': [
        { '@type': 'HowToStep', 'name': 'Чоосе ор Цреате Сегменц', 'text': 'Селецт а пресет ор адд цустом сегменц.' },
        { '@type': 'HowToStep', 'name': 'Спин тхе Вхеел', 'text': 'Цлицк тхе спин буттон то старт тхе вхеел.' },
        { '@type': 'HowToStep', 'name': 'Виев Ресулт', 'text': 'Тхе ресулт ис дисплаед витх емпхасис.' },
      ],
    },
  ],
};
