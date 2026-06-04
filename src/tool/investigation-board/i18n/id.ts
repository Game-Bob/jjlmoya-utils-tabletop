import { bibliography } from '../bibliography';
import type { InvestigationBoardLocaleContent } from '../entry';

export const content: InvestigationBoardLocaleContent = {
  slug: "pembuat-papan-konspirasi",
  title: "Pembuat Papan Konspirasi",
  description: "Rancang papan konspirasi interaktif dan peta penyelidikan. Hubungkan karakter, petunjuk, lokasi, dan lacak hubungan dengan tautan khusus.",
  ui: {
  "title": "Pembuat Papan Konspirasi",
  "addCard": "Tambah Kartu",
  "searchPlaceholder": "Cari kartu berdasarkan nama atau petunjuk",
  "filterAll": "Semua Kategori",
  "filterCharacter": "Karakter",
  "filterClue": "Petunjuk",
  "filterLocation": "Lokasi",
  "filterItem": "Item",
  "cardName": "Nama Kartu",
  "cardCategory": "Kategori",
  "cardDescription": "Deskripsi",
  "cardNotes": "Catatan Pribadi",
  "cardTags": "Tag dipisahkan dengan koma",
  "cardColor": "Warna Sorotan Kartu",
  "save": "Simpan Perubahan",
  "delete": "Hapus",
  "cancel": "Batal",
  "clearBoard": "Bersihkan Papan",
  "connectionsTitle": "Peta Hubungan",
  "addConnection": "Tambah Koneksi",
  "connectionLabel": "Label Hubungan",
  "connectionColor": "Warna Garis",
  "sourceCard": "Dari Kartu",
  "targetCard": "Ke Kartu",
  "close": "Tutup",
  "character": "Karakter",
  "clue": "Petunjuk",
  "location": "Lokasi",
  "item": "Item",
  "custom": "Kustom",
  "immersive": "Layar Penuh"
},
  seo: [
    { type: 'title', text: "Pembuat Papan Konspirasi untuk RPG Meja dan Detektif", level: 2 },
    { type: 'paragraph', html: "Buat peta penyelidikan imersif dan papan konspirasi untuk game RPG meja Anda. Seret dan lepas petunjuk, lokasi, dan karakter, lalu hubungkan dengan benang kustom untuk memvisualisasikan misteri yang kompleks." },
    {
      type: 'stats',
      items: [
        { value: "Tanpa Batas", label: "Papan Node" },
        { value: "4", label: "Kategori" },
        { value: "Seret dan Lepas", label: "Antarmuka" }
      ],
      columns: 3
    },
    { type: 'title', text: "Cara Membangun Peta Penyelidikan", level: 2 },
    { type: 'paragraph', html: "Tambahkan kartu kustom yang mewakili petunjuk, karakter, item, dan lokasi. Seret kartu tersebut ke posisi di kisi. Pilih dua kartu untuk menautkannya dengan benang hubungan berwarna. Klik dua kali node atau benang untuk melihat detail." }
  ],
  faq: [
    {
      question: "Bagaimana cara menambahkan garis koneksi?",
      answer: "Klik Tambah Koneksi di panel kontrol, pilih kartu sumber dan target, berikan label teks dan warna, lalu simpan."
    },
    {
      question: "Bisakah saya menyeret kartu di seluler?",
      answer: "Ya, papan ini mendukung interaksi sentuh untuk menyeret dan memindahkan kartu dengan lancar di smartphone dan tablet."
    }
  ],
  bibliography,
  howTo: [
    {
      name: "Tambah Kartu Penyelidikan",
      text: "Buat kartu yang mewakili NPC, petunjuk, TKP, atau item."
    },
    {
      name: "Tautkan Hubungan",
      text: "Buat garis koneksi antarkartu untuk menunjukkan hubungan petunjuk."
    }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': "Pembuat Papan Konspirasi",
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
          'name': "Bagaimana cara menambahkan garis koneksi?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Klik Tambah Koneksi di panel kontrol, pilih kartu sumber dan target, berikan label teks dan warna, lalu simpan."
          }
        },
        {
          '@type': 'Question',
          'name': "Bisakah saya menyeret kartu di seluler?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Ya, papan ini mendukung interaksi sentuh untuk menyeret dan memindahkan kartu dengan lancar di smartphone dan tablet."
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': "Cara Menggunakan Pembuat Papan Konspirasi",
      'step': [
        {
          '@type': 'HowToStep',
          'name': "Tambah Kartu Penyelidikan",
          'text': "Buat kartu yang mewakili NPC, petunjuk, TKP, atau item."
        },
        {
          '@type': 'HowToStep',
          'name': "Tautkan Hubungan",
          'text': "Buat garis koneksi antarkartu untuk menunjukkan hubungan petunjuk."
        }
      ]
    }
  ]
};
