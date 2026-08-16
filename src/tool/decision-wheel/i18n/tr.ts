import { bibliography } from '../bibliography';
import type { DecisionWheelLocaleContent } from '../entry';

export const content: DecisionWheelLocaleContent = {
  slug: 'karar-carki',
  title: 'Karar Çarkı: Rastgele Seçici ve Seçenek Çarkı',
  description: 'Masa oyunları için özelleştirilebilir bir karar çarkı çevirin. Sonuçları rastgele belirlemek için ağırlıklı dilimler ekleyin.',
  ui: {
    title: 'Karar Çarkı',
    spinButton: 'Çarkı Çevir',
    clearHistory: 'Geçmişi Temizle',
    resultHeading: 'Sonuç',
    historyTitle: 'Çevirme Geçmişi',
    noHistory: 'Henüz çevrilmedi. Başlamak için Çarkı Çevir butonuna tıklayın.',
    addSegmentLabel: 'Dilim Ekle',
    removeSegmentLabel: 'Kaldır',
    segmentLabelPlaceholder: 'Etiket',
    presetLabel: 'Hazır Ayarlar',
    presetYesNo: 'Evet veya Hayır',
    presetNumbers: 'Sayılar 1-6',
    presetActions: 'Eylemler',
    presetCustom: 'Özel',
    presetD20: 'D20',
    presetAlignment: 'Hizalanma',
    presetLoot: 'Ganimet Nadirliği',
    weightLabel: 'Ağırlık',
    spinAgain: 'Tekrar Çevir',
    noSegments: 'Çevirmeden önce çarka dilimler ekleyin.',
  },
  seo: [
    { type: 'title', text: 'Masa Oyunları ve Grup Etkinlikleri İçin Karar Çarkı', level: 2 },
    { type: 'paragraph', html: 'Karar çarkı, masa oyunları için çok yönlü bir rastgele seçim aracıdır. Dilimleri kendi etiketlerinizle özelleştirin.' },
    {
      type: 'stats',
      items: [
        { value: '16', label: 'Dilim Ekle' },
        { value: '7', label: 'Hazır Ayarlar' },
        { value: '10', label: 'Çevirme Geçmişi' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Karar Çarkı Nasıl Kullanılır', level: 2 },
    { type: 'paragraph', html: 'Hazır bir şablon seçin veya olasılıkları ayarlamak için farklı ağırlıklara sahip kendi dilimlerinizi oluşturun.' },
    { type: 'title', text: "Ek karar senaryolari", level: 3 },
    { type: 'paragraph', html: "Carki oylama, rastgele karsilasma ve oyun eylemleri icin kullanin." },
    { type: 'title', text: "Masaustu oyun sablonlari", level: 3 },
    { type: 'paragraph', html: "Sablonlar masaustu oyunlarindaki yaygin secimleri hizla yukler." },
    { type: 'title', text: "Sonuc agirliklarini ayarlama", level: 3 },
    { type: 'paragraph', html: "Agirliklar bazi sonuclari daha sik veya seyrek yapar." },
    { type: 'title', text: "Gecmisi inceleme", level: 3 },
    { type: 'paragraph', html: "Gecmis son cevirmeleri grup icin saklar." },
  ],
  faq: [
    {
      question: 'Karar çarkı nasıl çalışır?',
      answer: 'Seçeneklerinizi oluşturun, ağırlıklarını belirleyin ve rastgele bir sonuç elde etmek için Çarkı Çevir düğmesine basın.',
    },
    {
      question: 'Renkleri ve adları özelleştirebilir miyim?',
      answer: 'Evet, yeni dilim ekleyebilir, etiketleri düzenleyebilir, renk atayabilir ve ağırlıklarını 1 ila 5 arasında ayarlayabilirsiniz.',
    },
    {
      question: "Olasilik degistirilebilir mi?",
      answer: "Evet, bir segmentin agirligini degistirin.",
    },
    {
      question: "Kac segment kullanilabilir?",
      answer: "En fazla 16; en az iki secenek gerekir.",
    },
    {
      question: "Hangi sablonlar var?",
      answer: "Evet veya Hayir, Sayilar, Eylemler, ozel secenekler, D20, Hizalanma ve Ganimet.",
    },
    {
      question: "Onceki cevirmeler gorunur mu?",
      answer: "Evet, tarayici son on sonucu gosterir.",
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Dilimleri Oluşturun',
      text: 'Hazır şablonlardan yükleyin veya etiket, renk ve ağırlık belirterek kendi dilimlerinizi ekleyin.',
    },
    {
      name: 'Çarkı Çevirin',
      text: 'Düğmeye tıklayarak gerçekçi yavaşlama efektine sahip çark dönme animasyonunu başlatın.',
    },
    {
      name: "Sonucu kontrol et",
      text: "Cark durdugunda kazanan segmenti ve son cevirme gecmisini inceleyin.",
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Karar Çarkı',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 Canvas. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': 'Karar çarkı nasıl çalışır?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Seçeneklerinizi oluşturun, ağırlıklarını belirleyin ve rastgele bir sonuç elde etmek için Çarkı Çevir düğmesine basın.' } },
        { '@type': 'Question', 'name': 'Renkleri ve adları özelleştirebilir miyim?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Evet, yeni dilim ekleyebilir, etiketleri düzenleyebilir, renk atayabilir ve ağırlıklarını 1 ila 5 arasında ayarlayabilirsiniz.' } },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Decision Wheel Spinner',
      'step': [
        { '@type': 'HowToStep', 'name': 'Dilimleri Oluşturun', 'text': 'Hazır şablonlardan yükleyin veya etiket, renk ve ağırlık belirterek kendi dilimlerinizi ekleyin.' },
        { '@type': 'HowToStep', 'name': 'Çarkı Çevirin', 'text': 'Düğmeye tıklayarak gerçekçi yavaşlama efektine sahip çark dönme animasyonunu başlatın.' },
      ],
    },
  ],
};
