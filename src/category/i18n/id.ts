import type { CategoryLocaleContent } from '../../types';

const slug = 'horologi';
const title = 'Alat Horologi & Panduan Referensi';
const description = 'Utilitas horologi kelas profesional untuk penggemar jam tangan-cak akurasi, demagnetisasi gerakan, hitung kehadiran di pergelangan tangan, dan jelajahi referensi posisi mahkota untuk kaliber populer.';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: 'Peralatan Penting untuk Penggemar Jam Tangan', level: 2 },
    { type: 'paragraph', html: 'Baik Anda sedang menyetel gerakan mekanis, mendemagnetisasi jam tangan yang baru termagnetisasi, melacak seberapa sering Anda memakai arloji, atau mempelajari posisi mahkota kaliber favorit Anda, rangkaian ini menghadirkan alat horologi kelas profesional di ujung jari Anda-npa perlu peralatan mahal.' },
    { type: 'title', text: 'Akurasi, Demagnetisasi & Referensi Posisi Mahkota', level: 2 },
    { type: 'paragraph', html: 'Mulai dari melacak deviasi laju harian terhadap waktu atom hingga mendemagnetisasi gerakan dengan aman, dari mengetahui kapan terakhir kali Anda memakai jam tangan hingga memahami setiap posisi mahkota pada kaliber ETA atau Miyota-at-alat ini mencakup kebutuhan sehari-hari setiap kolektor atau penggemar.' },
    {
      type: 'stats', items: [
        { label: 'Alat', value: '4', icon: 'mdi:tools' },
        { label: 'Caliber', value: '8+', icon: 'mdi:engine' },
        { label: 'Bahasa', value: '15', icon: 'mdi:translate' },
        { label: 'Privasi Data', value: 'Lokal', icon: 'mdi:shield-check' },
      ]
    },
  ],
};
