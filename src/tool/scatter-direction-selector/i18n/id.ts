import { bibliography } from '../bibliography';
import type { ScatterSelectorLocaleContent } from '../entry';

const ui = {
  title: 'Pemilih Arah Hamburan',
  setupTitle: 'Pengaturan Hamburan',
  sectorsLabel: 'Sektor Kompas',
  sectors8: '8 Arah',
  sectors12: '12 Arah (Jam)',
  diceLabel: 'Lemparan Jarak Deviasi',
  diceD6: '1D6 Inci',
  dice2D6: '2D6 Inci',
  diceD10: '1D10 Inci',
  diceCustom: 'Jarak Kustom',
  customMaxLabel: 'Jarak Maksimum',
  hitChanceLabel: 'Probabilitas Pukulan Langsung (%)',
  rollButton: 'Lempar Hamburan',
  hitResult: 'Pukulan Langsung!',
  scatterResult: 'Hamburan!',
  distanceLabel: 'Jarak',
  angleLabel: 'Sudut',
  dragHint: 'Seret kompas untuk mengatur arah angin secara manual',
  historyTitle: 'Lemparan Terbaru',
  clearHistory: 'Hapus Riwayat',
  presetTitle: 'Prasetel Wargaming',
  soundOn: 'Suara Nyala',
  soundOff: 'Suara Mati',
  guideStep1: 'Seret kompas agar sesuai dengan orientasi meja Anda',
  guideStep2: 'Pilih sektor, dadu, dan probabilitas pukulan langsung',
  guideStep3: 'Pusat = target Anda. Cahaya hijau berarti jatuh tepat di sana',
  guideStep3Scatter: 'Panah = arah deviasi. Geser tembakan dari pusat sejauh itu inci sepanjang panah',
  scatterModeLabel: 'Arah Hamburan',
  scatterModeRandom: 'Acak',
  scatterModeWind: 'Hanyutan Angin',
  scatterModeWindHint: 'Panah selalu mengikuti kompas - hanya jarak yang acak',
};

const faq = [
  {
    question: 'Bagaimana cara kerja Pemilih Arah Hamburan?',
    answer: 'Alat ini menghitung sudut acak (0-359 derajat) dan jarak berdasarkan konfigurasi dadu yang dipilih. Juga mensimulasikan dadu hamburan dengan memeriksa pukulan langsung.',
  },
  {
    question: 'Bisakah saya mengubah format sektor?',
    answer: 'Ya, Anda bisa beralih antara sektor kardinal 8 arah dan sektor muka jam 12 arah.',
  },
  {
    question: 'Apa itu probabilitas pukulan langsung?',
    answer: 'Ini mewakili peluang proyektil mendarat tepat di sasaran tanpa deviasi, mensimulasikan hasil "Pukulan" pada dadu hamburan standar.',
  },
  {
    question: 'Apakah ini kompatibel dengan Warhammer atau Bolt Action?',
    answer: 'Ya, alat ini mendukung templat 8 arah standar dan penyelarasan jam 12 arah yang digunakan di sebagian besar wargame taktis dan aturan miniatur.',
  },
  {
    question: 'Bagaimana jarak hamburan ditampilkan secara visual?',
    answer: 'Jarak dalam inci muncul sebagai label terapung di titik tumbukan, diposisikan sesuai arah deviasi. Panah merah kompas juga terkunci ke sudut akhir untuk penyelarasan templat yang cepat.',
  },
  {
    question: 'Bisakah saya menonaktifkan animasi untuk mendapatkan hasil lebih cepat?',
    answer: 'Animasi berlangsung sekitar dua detik, setelah itu hasil akhir ditampilkan di tengah dan panah kompas terkunci. Saat ini tidak ada opsi lewati, tetapi penundaan ini dirancang agar sesuai dengan kecepatan melempar dadu fisik.',
  },
];

const howTo = [
  {
    name: 'Konfigurasi Aturan',
    text: 'Pilih sektor kompas, pilih dadu jarak, dan sesuaikan probabilitas pukulan langsung.',
  },
  {
    name: 'Lempar atau Seret',
    text: 'Klik Lempar Hamburan untuk mensimulasikan deviasi, atau seret roda kompas untuk menyesuaikan arah secara manual.',
  },
  {
    name: 'Baca Hasil',
    text: 'Periksa tampilan pusat dan panah vektor untuk mengetahui jarak, sudut, dan arah hamburan yang tepat.',
  },
  {
    name: 'Amati Lintasan',
    text: 'Setelah melempar, amati proyektil animasi melintasi kompas. Jejak putus-putus menunjukkan jalur deviasi, dan titik tumbukan menampilkan jarak dalam inci.',
  },
  {
    name: 'Interpretasi Hasil',
    text: 'Denyut hijau dengan "DIRECT HIT" berarti deviasi nol. Ledakan merah dengan label jarak berarti tembakan menyebar - tempatkan templat Anda sejauh itu inci dari target sesuai arah panah.',
  },
];

export const content: ScatterSelectorLocaleContent = {
  slug: 'pemilih-arah-hamburan',
  title: 'Pemilih Arah Hamburan: Kompas Taktis untuk Wargame Miniatur',
  description: 'Tentukan deviasi acak, hanyutan angin, dan arah hamburan untuk wargame miniatur dengan kompas taktil 3D.',
  ui,
  seo: [
    { type: 'title', text: 'Kompas Hamburan Interaktif dengan Animasi Proyektil Waktu Nyata', level: 2 },
    { type: 'paragraph', html: 'Pemilih Arah Hamburan melampaui pembuatan angka statis dengan menampilkan lintasan proyektil animasi langsung di atas kompas. Saat Anda mengklik Lempar Hamburan, proyektil bercahaya bergerak dari pusat sepanjang sudut deviasi, meninggalkan jejak putus-putus dan meledak menjadi partikel di titik tumbukan.' },
    { type: 'stats', items: [
      { value: '2', label: 'Sistem Sektor', icon: 'mdi:compass-rose' },
      { value: '4', label: 'Prasetel Dadu', icon: 'mdi:dice-d6' },
      { value: '0-100%', label: 'Rentang Probabilitas Pukulan', icon: 'mdi:target' },
      { value: '10', label: 'Riwayat Lemparan Terbaru', icon: 'mdi:history' },
    ], columns: 4 },
    { type: 'title', text: 'Bagaimana Animasi Lintasan Meningkatkan Pengambilan Keputusan dalam Wargame', level: 3 },
    { type: 'paragraph', html: 'Alat hamburan tradisional menampilkan sudut dan jarak numerik, memaksa pemain untuk memvisualisasikan offset di atas meja secara mental. Lintasan animasi menjembatani kesenjangan ini dengan menggambar jalur penerbangan yang tepat dari titik bidik ke zona pendaratan hamburan.' },
    { type: 'diagnostic', variant: 'success', title: 'Pukulan Langsung', html: 'Saat lemparan melebihi probabilitas pukulan, pusat kompas meletup dengan cincin hijau berdenyut dan animasi teks "DIRECT HIT". Proyektil kembali ke pusat, mengonfirmasi tumbukan sempurna tanpa deviasi.' },
    { type: 'diagnostic', variant: 'error', title: 'Hamburan', html: 'Pada hasil hamburan, proyektil mengikuti lintasan putus-putus ke titik pendaratannya. Ledakan partikel, penanda bercahaya, dan jarak dalam inci (mis. <strong>5"</strong>) muncul di lokasi tumbukan.' },
    { type: 'tip', title: 'Tips: Menggunakan Mode Hanyutan Angin', html: 'Aktifkan Hanyutan Angin untuk mengunci arah hamburan ke sudut kompas yang Anda atur secara manual. Ini mensimulasikan angin kencang atau vektor perpindahan tetap - ideal untuk roket tanpa kendali, awan gas, atau kecelakaan teleportasi.' },
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
      'name': 'Pemilih Arah Hamburan',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cara menggunakan Pemilih Arah Hamburan',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
