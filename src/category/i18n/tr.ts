import type { CategoryLocaleContent } from '../../types';

const slug = 'horoloji';
const title = 'Horoloji Araçları & Referans Kılavuzları';
const description = 'Saat tutkunları için profesyonel düzeyde horoloji araçları-ssasiyet takibi, mekanizma demanyetizasyonu, bilekte geçen süre hesaplama ve popüler kalibreler için kurma kolu pozisyon referansları.';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: 'Saat Tutkunları İçin Temel Araçlar', level: 2 },
    { type: 'paragraph', html: 'İster mekanik bir mekanizmayı regüle ediyor, ister yakın zamanda manyetize olmuş bir saati demanyetize ediyor, bir zaman ölçeri ne sıklıkta taktığınızı takip ediyor ya da favori kalibrenizin kurma kolu pozisyonlarını öğreniyor olun, bu paket profesyonel düzeyde horoloji araçlarını parmaklarınızın ucuna getiriyor-halı ekipman gerektirmez.' },
    { type: 'title', text: 'Hassasiyet, Demanyetizasyon & Kurma Kolu Referansları', level: 2 },
    { type: 'paragraph', html: 'Atom saatine karşı günlük sapma takibinden hassas zamanlamayla bir mekanizmayı güvenle demanyetize etmeye, bir saati en son ne zaman taktığınızı bilmekten bir ETA veya Miyota kalibresindeki her kurma kolu pozisyonunu anlamaya kadar- araçlar her koleksiyoncu ve meraklının günlük ihtiyaçlarını karşılar.' },
    {
      type: 'stats', items: [
        { label: 'Araçlar', value: '4', icon: 'mdi:tools' },
        { label: 'Kalibreler', value: '8+', icon: 'mdi:engine' },
        { label: 'Diller', value: '15', icon: 'mdi:translate' },
        { label: 'Veri Gizliliği', value: 'Local', icon: 'mdi:shield-check' },
      ]
    },
  ],
};
