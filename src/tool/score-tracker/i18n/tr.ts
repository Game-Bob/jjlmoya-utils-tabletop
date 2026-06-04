import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ScoreTrackerUI } from '../entry';

const ui: ScoreTrackerUI = {
  title: 'Puan Takipcisi',
  addPlayer: 'Oyuncu Ekle',
  removePlayer: 'Kaldir',
  renamePlayer: 'Yeniden Adlandir',
  startRound: 'Tur 1 i Baslat',
  nextRound: 'Sonraki Tur',
  resetGame: 'Oyunu Sifirla',
  undoRound: 'Son Turu Geri Al',
  playerLabel: 'Oyuncu',
  scoreLabel: 'Puan',
  roundLabel: 'Tur',
  totalLabel: 'Toplam',
  rankLabel: 'Sira',
  leaderboardTitle: 'Siralam',
  historyTitle: 'Puan Gecmisi',
  noPlayersHint: 'Puani baslatmak icin oyuncu ekleyin',
  playerNamePlaceholder: 'Oyuncu adi',
  confirmLabel: 'Onayla',
  cancelLabel: 'Iptal',
  deleteRoundConfirm: 'Son tur silinsin mi?',
  playerAdded: 'Oyuncu eklendi',
  playerRemoved: 'Oyuncu kaldirildi',
  roundStarted: 'Tur basladi',
  gameReset: 'Oyun sifirlandi',
  noRoundsYet: 'Henuz kaydedilmis tur yok',
  currentRoundLabel: 'Mevcut Tur',
  scoringTitle: 'Tur Puani',
  resetAllLabel: 'Hepsini Sifirla',
  confirmResetAll: 'Bu tum oyunculari ve puanlari silecek. Emin misiniz?',
};

export const content: ToolLocaleContent<ScoreTrackerUI> = {
  slug: 'puan-takipcisi',
  title: 'Puan Takipcisi: Cok Oyunculu Skor Tutucu ve Siralama Yoneticisi',
  description: 'Herhangi bir masa oyunu icin puanlari takip edin. Oyuncu ekleyin, tur tur puanlari kaydedin ve otomatik siralama ile siralamanin gercek zamanli olarak guncellenmesini izleyin.',
  ui,
  seo: [
    { type: 'title', text: 'Masa Oyunu Puani Tutma: Puanlarin Hatasiz Nasil Takip Edilir', level: 2 },
    { type: 'paragraph', html: 'Masa oyunlarinda puani tutmak basit gorunur, taa ki oyunun besinci turunda birinin yanlis saydigini fark edene kadar. Ister Wingspan, Terraforming Mars, Catan, ister zafer puani oyunu oynayin, dogru puantaj adil bir oyun ile tartisma arasindaki farki olusturur. Dijital bir puan takipcisi aritmetik hatalari ortadan kaldirir, canli siralamalari gosterir ve her turun tam bir kaydini tutar, boylece nihai toplami dogrulayabilirsiniz.' },
    {
      type: 'stats',
      items: [
        { value: 'Sinirsiz', label: 'Desteklenen Oyuncu' },
        { value: 'Gercek Zamanli', label: 'Siralama Guncellemeleri' },
        { value: 'Sinirsiz', label: 'Kaydedilen Tur' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Yaygin Puantaj Hatalari ve Bunlardan Kacinma Yollari', level: 2 },
    { type: 'paragraph', html: 'En sik yapilan hata, tur sonu bonuslarini eklemeyi unutmak veya bir sayi sutununu yanlis toplamaktir. Puanlari dijital olarak takip ettiginizde, guncel toplam her giristen sonra otomatik olarak guncellenir. Yani bir sayi yanlis gorundugu anda hatayi yakalayabilir, kimsenin dogru degeri hatirlamadigi oyun sonunda kesfetmek zorunda kalmazsiniz. Tur gecmisi ozelligi, onceki herhangi bir turu denetlemenize ve tum oyunu yeniden baslatmadan hatalari duzeltmenize olanak tanir.' },
    {
      type: 'tip',
      title: 'Hizli Puantaj Ipuclari',
      html: 'Her tur biter bitmez, herkes sonuclari henuz hatirlarken puanlari girin. Gizli rolleri olan oyunlarda gercek isimler yerine renkler veya hizip adlari gibi tanimlayici oyuncu etiketleri kullanin. Cocuklarla oynarken, puantaj surecine dahil olmalari icin dugmelere kendilerinin basmasina izin verin.',
    },
    {
      type: 'title',
      text: 'Tur Bazli Puanlama vs Sadece Toplam',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Tur Basina Puan vs Sadece Son Puan',
      items: [
        {
          pro: 'Oyunun her asamasinda kimin onde oldugunu ve momentumin nasil degistigini gorebilirsiniz.',
          con: 'Sonda bir kez yerine her turdan sonra veri girisi gerektirir.',
        },
        {
          pro: 'Hatalari bulmak kolaydir cunku bireysel tur girilerini hafizanizla karsilastirabilirsiniz.',
          con: 'Oyun sirasinda biraz daha fazla zaman alir.',
        },
        {
          pro: 'Oyuncular kendi tur puanlarini dogrulayabilir, anlasmazliklari azaltir ve guven olusturur.',
          con: 'Bir kisinin cihazi yonettigi veya oyuncularin sirayla yaptigi durumlarda en iyi sekilde calisir.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Alisilmadik Puanlama Sistemlerine Sahip Oyunlar',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Zafer Puani Oyunlari',
          description: 'Cogu euro-oyunu, oyun boyunca verilen zafer puanlarini kullanir. Zorluk, birden fazla ZP kaynagini takip etmektir: kaynaklar, basarilar, oyun sonu bonuslari. Dijital bir takipci, puanlari geldikce girmenizi ve guncel toplami gormenizi saglar.',
          icon: 'mdi:chess-queen',
          highlight: true,
          points: [
            'Birden cok puan kategorisini takip etme',
            'Oyun sonu bonus hesaplamalari',
            'Aninda esitlik cozumu',
          ],
        },
        {
          title: 'Eksi Puanli Oyunlar',
          description: 'Bazi oyunlar belirli eylemler icin oyunculari eksi puanla cezalandirir. Dijital bir puantaj, eksi degerleri dogal bir sekilde ele alir ve cezayi hemen gorunur kilmak icin onlari kirmizi renklendirir. Bu, ozellikle el alma oyunlarinda veya ceza mekanigi olan cikarim oyunlarinda kullanislidir.',
          icon: 'mdi:minus-circle-outline',
          highlight: false,
          points: [
            'Otomatik eksi deger yonetimi',
            'Gorsel ceza gostergeleri',
            'Dogru birikimli toplamlar',
          ],
        },
        {
          title: 'Kampanya Oyunlari',
          description: 'Legacy ve kampanya oyunlari, puanlari birden cok oturuma tasir. Bir takipci olmadan, oyun geceleri arasinda kagit notlar tutmaniz gerekir. Dijital bir arac, kampanya puanlarinizi duzenli tutar ve kararlarinizin genel siralamayi nasil etkiledigini gozden gecirmenize olanak tanir.',
          icon: 'mdi:book-open-variant',
          highlight: false,
          points: [
            'Kampanya takibinin kaliciligi',
            'Oturumlar arasi karsilastirma',
            'Oturum bazli detaylandirma',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Puantaj Sozlugu',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Zafer Puani (ZP)',
          definition: 'Modern masa oyunlarinin cogunda standart puanlama birimi. Oyuncular eylemlerle ZP kazanir ve oyun sonunda en cok ZP ye sahip olan kazanir.',
        },
        {
          term: 'Tur Bazli Puanlama',
          definition: 'Puanlari sadece oyun sonunda degil, her turun sonunda kaydetme. Bu, ayrintili bir gecmis olusturur ve hata kontrolunu kolaylastirir.',
        },
        {
          term: 'Siralama',
          definition: 'Toplam puana gore her oyuncunun konumunu gosteren canli bir siralama. Yeni puanlar girildikce siralama otomatik olarak yeniden duzenlenir.',
        },
        {
          term: 'Eksi Puanlama',
          definition: 'Oyuncularin cezalar veya basarisiz eylemler nedeniyle puan kaybederek eksi toplamlara ulastigi bir puanlama sistemi. Dijital bir takipci, manuel cikarma hatalari olmadan bunu halleder.',
        },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Tartismali Puanlarla Nasil Basa Cikilir',
      icon: 'mdi:information-outline',
      badge: 'OYUN IPUCU',
      html: 'Bir oyuncu puani sorguladiginda, hemen degistirmeyin. Once ne girildigini onaylamak icin tur gecmisini kontrol edin. Giris yanlissa, duzeltmek icin +/- dugmelerini kullanin ve toplam otomatik olarak guncellenir. Tur girisi dogru ancak oyuncu ayni fikirde degilse, gecmis herkesin birlikte inceleyebilecegi objektif bir kayit saglar.',
    },
  ],
  faq: [
    {
      question: 'Kac oyuncuyu takip edebilirim?',
      answer: 'Herhangi bir sinir yok. Oyununuzun destekledigi kadar oyuncu ekleyin ve oturum sirasinda dilediginiz zaman yeniden adlandirin.',
    },
    {
      question: 'Bir hatayi geri alabilir miyim?',
      answer: 'Evet. Son Turu Geri Al dugmesini kullanarak en son puan turunu kaldirin, bu tum toplamlari ve siralamalari otomatik olarak yeniden hesaplayacaktir.',
    },
    {
      question: 'Puan takipcisi verilerimi kaydediyor mu?',
      answer: 'Puan takipcisi tamamen tarayicinizda calisir. Veriler mevcut oturum boyunca kalicidir. Sayfayi yenilemek tum puanlari sifirlayacaktir.',
    },
    {
      question: 'Siralama nasil calisir?',
      answer: 'Siralama, oyunculari toplam puana gore azalan sirada siralar. Her turda puan girdikce veya degistirdikce siralamalar otomatik olarak guncellenir.',
    },
    {
      question: 'Eksi puanlari takip edebilir miyim?',
      answer: 'Evet. +/- dugmeleri hem pozitif hem de negatif ayarlamalara izin verir, bu da onu ceza puani veya indirim mekanigine sahip oyunlar icin uygun hale getirir.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Oyuncu Ekleme',
      text: 'Oyuncu Ekle girisine oyuncu adlarini girin. Oyun sirasinda dilediginiz zaman oyuncu ekleyebilir veya kaldirabilirsiniz.',
    },
    {
      name: 'Puanlamaya Baslama',
      text: 'Yeni bir puan turu baslatmak icin Turu Baslat a tiklayin. Bu turdaki her oyuncunun puanini ayarlamak icin +/- dugmelerini kullanin.',
    },
    {
      name: 'Siralamalari Gorme',
      text: 'Siralama otomatik olarak guncellenir. Onceki tur girilerini incelemek icin Puan Gecmisi sekmesine goz atin.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Puan Takipcisi & Skor Tutucu',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Kac oyuncuyu takip edebilirim?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Herhangi bir sinir yok. Oyununuzun destekledigi kadar oyuncu ekleyin.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Bir hatayi geri alabilir miyim?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Evet. Son Turu Geri Al dugmesini kullanarak en son puan turunu kaldirin.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Puan takipcisi verilerimi kaydediyor mu?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Puan takipcisi tarayicinizda calisir. Veriler mevcut oturum boyunca kalicidir.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Siralama nasil calisir?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Siralama, oyunculari toplam puana gore azalan sirada siralar.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Eksi puanlari takip edebilir miyim?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Evet. +/- dugmeleri hem pozitif hem de negatif ayarlamalara izin verir.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Puan Takipcisi Nasil Kullanilir',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Oyuncu Ekleme',
          'text': 'Oyuncu Ekle girisine oyuncu adlarini girin.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Puanlamaya Baslama',
          'text': 'Turu Baslat a tiklayin ve +/- dugmelerini kullanin.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Siralamalari Gorme',
          'text': 'Siralama otomatik olarak guncellenir.',
        },
      ],
    },
  ],
};
