import { bibliography } from '../bibliography';
import type { InvestigationBoardLocaleContent } from '../entry';

export const content: InvestigationBoardLocaleContent = {
  slug: "komplo-tahtasi-yapici",
  title: "Komplo Tahtası Yapıcı",
  description: "Etkileşimli komplo tahtaları ve araştırma haritaları tasarlayın. Karakterleri, ipuçlarını, konumları ilişkilendirin ve özel bağlantılarla ilişkileri izleyin.",
  ui: {
  "title": "Komplo Tahtası Yapıcı",
  "addCard": "Kart Ekle",
  "searchPlaceholder": "Kartları isim veya ipucuna göre ara",
  "filterAll": "Tüm Kategoriler",
  "filterCharacter": "Karakterler",
  "filterClue": "İpuçları",
  "filterLocation": "Konumlar",
  "filterItem": "Eşyalar",
  "cardName": "Kart Adı",
  "cardCategory": "Kategori",
  "cardDescription": "Açıklama",
  "cardNotes": "Özel Notlar",
  "cardTags": "Virgülle ayrılmış etiketler",
  "cardColor": "Kart Vurgu Rengi",
  "save": "Değişiklikleri Kaydet",
  "delete": "Sil",
  "cancel": "İptal",
  "clearBoard": "Tahtayı Temizle",
  "connectionsTitle": "İlişki Haritası",
  "addConnection": "Bağlantı Ekle",
  "connectionLabel": "İlişki Etiketi",
  "connectionColor": "Çizgi Rengi",
  "sourceCard": "Başlangıç Kartı",
  "targetCard": "Hedef Kart",
  "close": "Kapat",
  "character": "Karakter",
  "clue": "İpucu",
  "location": "Konum",
  "item": "Eşya",
  "custom": "Özel",
  "immersive": "Tam Ekran"
},
  seo: [
    { type: 'title', text: "Masaüstü ve Dedektiflik RPG Oyunları için Komplo Tahtası Yapıcı", level: 2 },
    { type: 'paragraph', html: "Masaüstü rol yapma oyunlarınız için sürükleyici araştırma haritaları ve komplo tahtaları oluşturun. İpuçlarını, konumları ve karakterleri sürükleyip bırakın, ardından karmaşık gizemleri görselleştirmek için bunları özel iplerle bağlayın." },
    {
      type: 'stats',
      items: [
        { value: "Sınırsız", label: "Düğüm Tahtası" },
        { value: "4", label: "Kategorier" },
        { value: "Sürükle ve Bırak", label: "Arayüz" }
      ],
      columns: 3
    },
    { type: 'title', text: "Araştırma Haritası Nasıl Oluşturulur", level: 2 },
    { type: 'paragraph', html: "İpuçlarını, karakterleri, eşyaları ve konumları temsil eden özel kartlar ekleyin. Onları ızgara üzerindeki konumlara sürükleyin. İki kart seçerek onları renkli bir ilişki ipi ile bağlayın. Detayları görmek için düğümlere veya iplere çift tıklayın." }
  ],
  faq: [
    {
      question: "Bağlantı çizgilerini nasıl eklerim?",
      answer: "Kontrol panelinde Bağlantı Ekle seçeneğine tıklayın, kaynak ve hedef kartları seçin, bir metin etiketi ve renk atayıp kaydedin."
    },
    {
      question: "Kartları mobilde sürükleyebilir miyim?",
      answer: "Evet, tahta akıllı telefonlarda ve tabletlerde kartları sorunsuz bir şekilde sürükleyip taşımak için dokunmatik hareketleri destekler."
    }
  ],
  bibliography,
  howTo: [
    {
      name: "Araştırma Kartları Ekle",
      text: "NPC\\'leri, ipuçlarını, olay yerlerini veya eşyaları temsil eden kartlar oluşturun."
    },
    {
      name: "İlişkileri Bağla",
      text: "İpuçlarının birbiriyle ilişkisini göstermek için kartlar arasında bağlantı çizgileri oluşturun."
    }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': "Komplo Tahtası Yapıcı",
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
          'name': "Bağlantı çizgilerini nasıl eklerim?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Kontrol panelinde Bağlantı Ekle seçeneğine tıklayın, kaynak ve hedef kartları seçin, bir metin etiketi ve renk atayıp kaydedin."
          }
        },
        {
          '@type': 'Question',
          'name': "Kartları mobilde sürükleyebilir miyim?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Evet, tahta akıllı telefonlarda ve tabletlerde kartları sorunsuz bir şekilde sürükleyip taşımak için dokunmatik hareketleri destekler."
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': "Komplo Tahtası Yapıcı Nasıl Kullanılır",
      'step': [
        {
          '@type': 'HowToStep',
          'name': "Araştırma Kartları Ekle",
          'text': "NPC\\'leri, ipuçlarını, olay yerlerini veya eşyaları temsil eden kartlar oluşturun."
        },
        {
          '@type': 'HowToStep',
          'name': "İlişkileri Bağla",
          'text': "İpuçlarının birbiriyle ilişkisini göstermek için kartlar arasında bağlantı çizgileri oluşturun."
        }
      ]
    }
  ]
};
