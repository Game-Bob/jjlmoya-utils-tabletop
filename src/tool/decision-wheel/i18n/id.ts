import { bibliography } from '../bibliography';
import type { DecisionWheelLocaleContent } from '../entry';

export const content: DecisionWheelLocaleContent = {
  slug: 'roda-keputusan',
  title: 'Roda Keputusan: Pemilih Acak dan Generator Pilihan',
  description: 'Putar roda keputusan yang dapat disesuaikan untuk permainan papan. Tambahkan segmen dengan bobot untuk menentukan hasil secara acak.',
  ui: {
    title: 'Roda Keputusan',
    spinButton: 'Putar Roda',
    clearHistory: 'Hapus Riwayat',
    resultHeading: 'Hasil',
    historyTitle: 'Riwayat Putaran',
    noHistory: 'Belum ada putaran. Klik Putar Roda untuk memulai.',
    addSegmentLabel: 'Tambah Segmen',
    removeSegmentLabel: 'Hapus',
    segmentLabelPlaceholder: 'Label',
    presetLabel: 'Prasetel',
    presetYesNo: 'Ya atau Tidak',
    presetNumbers: 'Angka 1-6',
    presetActions: 'Tindakan',
    presetCustom: 'Kustom',
    presetD20: 'D20',
    presetAlignment: 'Penjajaran',
    presetLoot: 'Kelangkaan Loot',
    weightLabel: 'Bobot',
    spinAgain: 'Putar Lagi',
    noSegments: 'Tambahkan segmen ke roda sebelum memutar.',
  },
  seo: [
    { type: 'title', text: 'Roda Keputusan untuk Permainan Papan and Aktivitas Kelompok', level: 2 },
    { type: 'paragraph', html: 'Roda keputusan adalah alat serbaguna untuk permainan papan. Sesuaikan label dan warna segmen, lalu putar untuk memilih hasil secara acak.' },
    {
      type: 'stats',
      items: [
        { value: '16', label: 'Tambah Segmen' },
        { value: '7', label: 'Prasetel' },
        { value: '10', label: 'Riwayat Putaran' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Cara Menggunakan Roda Keputusan', level: 2 },
    { type: 'paragraph', html: 'Pilih prasetel atau buat segmen Anda sendiri dengan bobot untuk menyesuaikan probabilitas setiap pilihan.' },
  ],
  faq: [
    {
      question: 'Bagaimana cara kerja roda keputusan?',
      answer: 'Pilih prasetel atau buat opsi Anda sendiri, tentukan bobot untuk probabilitas pilihan, dan klik Putar Roda.',
    },
    {
      question: 'Apakah saya bisa mengubah warna dan nama?',
      answer: 'Ya, Anda bebas menambah segmen, mengubah teks label, memilih warna, dan mengubah bobot dari 1 hingga 5.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Buat Segmen Pilihan',
      text: 'Pilih prasetel cepat atau buat opsi kustom Anda sendiri dengan label, warna, dan bobot.',
    },
    {
      name: 'Putar Roda Keputusan',
      text: 'Klik tombol putar untuk melihat animasi putaran dengan deselerasi fisik yang realistis.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Roda Keputusan',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 Canvas. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': 'Bagaimana cara kerja roda keputusan?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Pilih prasetel atau buat opsi Anda sendiri, tentukan bobot untuk probabilitas pilihan, dan klik Putar Roda.' } },
        { '@type': 'Question', 'name': 'Apakah saya bisa mengubah warna dan nama?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ya, Anda bebas menambah segmen, mengubah teks label, memilih warna, dan mengubah bobot dari 1 hingga 5.' } },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Decision Wheel Spinner',
      'step': [
        { '@type': 'HowToStep', 'name': 'Buat Segmen Pilihan', 'text': 'Pilih prasetel cepat atau buat opsi kustom Anda sendiri dengan label, warna, dan bobot.' },
        { '@type': 'HowToStep', 'name': 'Putar Roda Keputusan', 'text': 'Klik tombol putar untuk melihat animasi putaran dengan deselerasi fisik yang realistis.' },
      ],
    },
  ],
};
