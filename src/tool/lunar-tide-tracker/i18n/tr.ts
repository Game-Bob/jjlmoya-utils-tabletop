import { bibliography } from '../bibliography';
import type { LunarTideLocaleContent } from '../entry';

export const content: LunarTideLocaleContent = {
  slug: 'ay-fazi-gelgit-hesaplayici',
  title: 'Masaustu RPGler icin Ay Fazi Hesaplayici: Ozel Fantezi Aylarini ve Gelgit Dongulerini Takip Edin',
  description: 'Herhangi bir fantezi dunyasi icin ozel yorunge periyotlariyla ay fazlarini hesaplayin. Ayni anda birden fazla ayi takip edin, 10 gunluk tahminleri gorun ve D&D, Pathfinder veya herhangi bir RPG\'deki buyu ve hava sistemleri icin birlestirilmis gelgit seviyesini alin.',
  ui: {
    title: 'Ay Fazi ve Mistik Gelgit Takipcisi',
    moonsTitle: 'Ay Yapilandirmasi',
    addMoon: 'Ozel Ay Ekle',
    removeMoon: 'Ayi Kaldir',
    moonName: 'Ay Adi',
    orbitalPeriod: 'Yorunge Periyodu (Gun)',
    startingOffset: 'Baslangic Ofseti (Gun)',
    timelineTitle: 'Zaman Kontrolleri',
    currentDay: 'Mevcut Kampanya Gunu',
    tideTitle: 'Mistik Gelgit Durumu',
    tideLevel: 'Gelgit Enerji Seviyesi',
    magicModifier: 'Buyu Gelgit Etkisi',
    forecastTitle: 'Ay Fazi ve Gelgit Tahmini',
    dayLabel: 'Gun',
    resetButton: '0. Gune Sifirla',
    presetTitle: 'Kampanya Hazir Ayarlari',
    presetSingle: 'Klasik Ay',
    presetDouble: 'Buyunun Ikiz Aylari',
    presetTriple: 'Uclu Tutulma Diyari',
    newMoon: 'Yeni Ay',
    waxingCrescent: 'Hilal (Buyuyen)',
    firstQuarter: 'Ilk Dordun',
    waxingGibbous: 'Siskin Ay (Buyuyen)',
    fullMoon: 'Dolunay',
    waningGibbous: 'Siskin Ay (Kuculen)',
    lastQuarter: 'Son Dordun',
    waningCrescent: 'Hilal (Kuculen)',
  },
  seo: [
    { type: 'title', text: 'Bir Fantezi RPG Kampanyasinda Ay Fazlari Nasil Takip Edilir', level: 2 },
    { type: 'paragraph', html: 'Cogu fantezi evreninde aylarin yorunge periyotlari, gercek dunyadaki 29,5 gunluk ay dongusunden farklidir. <strong>Yorunge Periyodu</strong> alani, bir ayin tam bir donguyu tamamlamasi icin kac oyun ici gun gerektigini belirler. Dunya\'nin ayi 29 gun surer; Eberron evreni 28 gun kullanir; Tolkien\'in Orta Dunya\'sinda ay dongusu 30\'a yakindir. Bunu dunyanizin anlatisina gore ayarlayin veya istediginiz tutulma sikligini uretecek 5 ila 60 gun arasinda herhangi bir sayi secin.' },
    {
      type: 'stats',
      items: [
        { value: '3', label: 'Ayni anda takip edilen ay' },
        { value: '10', label: 'Gunluk tahmin araligi' },
        { value: '5', label: 'Gelgit durumu (Durgun\'dan Kabarma\'ya)' }
      ],
      columns: 3
    },
    { type: 'title', text: 'Baslangic Ofseti Alanini Anlamak', level: 2 },
    { type: 'paragraph', html: '<strong>Baslangic Ofseti</strong>, bir ayin 0. kampanya gununde dongusunun neresinde oldugunu kaydirir. 0 ofseti, ayin Yeni Ay\'da basladigi anlamina gelir. Yorunge periyodunun yarisina esit bir ofset, onu Dolunay\'da baslatir. Bunu kampanyanizin acilis sahnesinde tanimlanan faza uyacak sekilde veya iki ayin her zaman ayni hizada olmamasi icin farkli konumlarda baslamasini saglamak amaciyla kullanin.' },
    { type: 'title', text: 'Gelgit Seviyesinin Oyununuz Icin Anlami', level: 2 },
    { type: 'paragraph', html: 'Gelgit seviyesi, tum aktif aylarin mevcut fazlarina gore kutle cekim kuvvetini birlestirir. <strong>Kabarma Gelgiti</strong> (%75\'in uzerinde), aylar dolunay veya yeni ay evresinde neredeyse ayni hizaya geldiginde ve ayni yonde cekim yaptiginda olusur. <strong>Durgun Gelgit</strong> (%30\'un altinda), aylar zit evrelerde oldugunda ve birbirlerini kismen iptal ettiginde meydana gelir. Bunu dogrudan herhangi bir mekanik sisteme baglayabilirsiniz: buyu kurtarma sirasi bonuslari, druid sekil degistirme suresi, kurt adam donusum esikleri veya kiyi haritalarinda firtina siddeti.' },
    {
      type: 'comparative',
      items: [
        {
          title: 'Tek Ay',
          description: 'Gercek dunyaya cok benzeyen veya tek bir baskin ayi olan evrenler icin en iyisidir. 8 asamali basit dongu, referans olmadan takip etmesi kolay.',
          icon: 'mdi:moon-full',
          highlight: false,
          points: [
            'D&D Forgotten Realms (Selune, 30 gun) icin uygun',
            'Kurt adam ve likantrop kampanyalari',
            'Dolunay\'a bagli korku oturumlari'
          ]
        },
        {
          title: 'Ikiz Aylar',
          description: 'Yuksek fantezi evrenlerinde yaygindir. Sik sik kismi hizalanmalar ve ilginc orta dongu gelgitleri yaratir. Hizalanmalar kabaca her LCM(period1, period2) gunde bir gerceklesir.',
          icon: 'mdi:moon-waxing-crescent',
          highlight: true,
          points: [
            'Eberron (Rhaan 28g + Aryth 12g)',
            'Onceden tahmin edilebilir tutulma mevsimleri yaratir',
            'Druidik veya element buyu sistemleri icin uygun'
          ]
        },
        {
          title: 'Uclu Aylar',
          description: 'Nadir uclu hizalanmalar onceden tahmin edilemez dalgalanmalar yaratir. Birlestirilmis gelgit, bu arac olmadan kaotik ve tahmin etmesi zor hale gelir; bu da onu dramatik acidan kullanisli kilar.',
          icon: 'mdi:moon-waning-crescent',
          highlight: false,
          points: [
            'Hizalama sirasinda vahsi buyu dalgalanma tablolari',
            'Pathfinder Golarion tarzi karmasiklik',
            'Destansi kampanyalar icin uzun donemli donguler'
          ]
        }
      ],
      columns: 3
    },
    { type: 'title', text: 'Fantezi Dunyalari Icin Yaygin Yorunge Periyotlari', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'Selune (Forgotten Realms)', definition: '30 gunluk yorunge periyodu, tek ay. 1. oturumda dolunayda baslamak icin 15 ofsetini kullanin.' },
        { term: 'Eberron Aylari', definition: 'Eberron\'un 9 ila 28 gun arasinda degisen periyotlarla 12 ayi vardir. Her birini ayri bir ay ornegi olarak calistirin veya hikayeyle en ilgili ikisini secin.' },
        { term: 'Golarion (Pathfinder)', definition: 'Golarion\'un Somal adinda 29 gunluk donguye sahip tek bir ayi vardir. Karanlik doku olaylari, ofset girimli ikinci bir dusuk periyotlu ay eklenerek modellenebilir.' },
        { term: 'Ozel Dunya', definition: '15 gunluk bir ay, yilda 24 dolunay uretir. 45 gunluk bir ay kabaca 8 dolunay uretir. Daha kisa periyotlar daha sik tutulma olayi anlamina gelir ancak anlati agirligini azaltir.' }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Ipucu: 1. Oturum Icin Belirli Bir Faz Ayarlama',
      icon: 'mdi:information-outline',
      badge: 'KURULUM IPUCU',
      html: 'Kampanyaniz hilal ayinda basliyorsa, ofseti yorunge periyodunun yaklasik %20\'sine ayarlayin. Dolunay baslangici icin periyodun %50\'sini ofset olarak kullanin. Ornegin, 28 gunluk bir ay dolunayda baslayacaksa 14 ofsetini kullanin. Gun sayacini mevcut kampanya gununuze ilerletin; tahmin, sonraki 10 gunu otomatik olarak gosterecektir.'
    }
  ],
  faq: [
    { question: 'Fantezi dunyam icin hangi yorunge periyodunu kullanmaliyim?', answer: 'Eger evreniniz belirtmiyorsa, tek bir ay icin 28 ila 30 gun idealdir. Birden fazla ay icin, birbirlerinin basit katlari olmayan periyotlar secin (orn. 20 ve 27) ki hizalanmalar cok sik tekrarlanmasin. Daha kisa periyotlar (10 ila 15 gun), sik sik kucuk gelgitler olusturan ikincil aylar icin iyi calisir.' },
    { question: 'Iki ayi belirli bir kampanya aninda nasil hizalarim?', answer: 'Her iki ayi da ayni ofset degerine ayarlayin. 0. Gunde ayni fazda baslarlar ve iki periyotlarinin her ortak katinda tekrar hizalanirlar. Onlari sasirtmak icin, ikinci aya yorunge periyodunun yarisina esit bir ofset verin, boylece zit konumlarda baslarlar.' },
    { question: 'Kabarma Gelgiti oyun terimleriyle ne anlama gelir?', answer: 'Kabarma Gelgiti, tum aktif aylarin ayni hizada cekim yaptigi ve maksimum gelgit enerjisi urettigi anlamina gelir. Bunu vahsi buyu dalgalanmalarini tetiklemek, iyilestirme buyusu menzillerini artirmak, firtina siddetini kotulestirmek veya dunyanizdaki dini gruplar icin kutsal bir gece olarak isaretlemek icin kullanabilirsiniz.' },
    { question: 'Durgun Gelgit oyun terimleriyle ne anlama gelir?', answer: 'Durgun Gelgit, aylarin birbirini kismen iptal ettigi durumdur. Anti-buyu etkileri, denizde olu sakinlik veya onceden tahmin edilebilir buyu baskilamasi gerektiren kotu karakterlerin planlarini uygulamasi icin iyi bir andir.' },
    { question: 'Bunu Call of Cthulhu veya korku kampanyalari icin kullanabilir miyim?', answer: 'Evet. 29 gunluk tek bir ay kullanin ve dolunayin oturumun zirvesine denk gelmesi icin ofseti ayarlayin. Gelgit takipcisi, faz yuzdesiyle olceklendirilen Mitos etkisini veya psifik hassasiyet zirvelerini temsil edebilir.' },
    { question: '10 gunluk tahmin nasil calisir?', answer: 'Tahmin, mevcut gunden baslayarak sonraki 10 kampanya gununun her biri icin her aktif ayin ay fazini renkli bir nokta olarak gosterir. Her gun sutununun altindaki yuzde, birlestirilmis gelgit seviyesidir. Yuksek yuzdeye sahip gunler, buyu veya havayla baglantili dramatik karsilasmali gunler icin iyi adaylardir.' },
    { question: 'Cok kisa donguye sahip bir ayi takip edebilir miyim, ornegin 7 gun?', answer: 'Evet. Yorunge periyodunu 7 olarak ayarlayin. Ay, oyun ici zamanin her haftasinda tam bir donguyu tamamlayarak 8 fazin tamamindan gececektir. Bu, ay buyusunun haftalik olarak sifirlandigi kampanya dunyalari veya duzenli olarak gecen kucuk kuyruklu yildiz benzeri bir cismi takip etmek icin kullanislidir.' },
    { question: 'Yayinlanmis bir macera modulundeki ay fazini nasil eslestirebilirim?', answer: 'Maceradaki kampanya gunune bakin ve belirtilen fazi not edin. Bunun dongudeki kacinci gune denk geldigini hesaplayin, yorunge periyoduna bolun ve bunu ofset olarak kullanin. Ornegin, 28 gunluk bir dongunun 0. Gununde ilk dordun ayi, ofsetin 7 oldugu anlamina gelir (28\'in dorte biri).' }
  ],
  bibliography,
  howTo: [
    { name: 'Yorunge Periyodunu Ayarlayin', text: 'Ayinizin tam bir donguyu tamamlamasi icin gereken oyun ici gun sayisini girin. Dunyanizin anlatisini kullanin veya 5 ile 60 arasinda bir deger secin.' },
    { name: 'Baslangic Ofsetini Ayarlayin', text: 'Bir gun ofseti girerek baslangic fazini kaydirin. 0 ofseti Yeni Ay\'da baslatir. Yorunge periyodunun yarisi Dolunay\'da baslatir.' },
    { name: 'Gun Sayacini Ilerletin', text: 'Adim dugmelerini veya kaydiriciyi kullanarak mevcut kampanya gununuze gidin ve faz ile gelgit seviyesini gercek zamanli olarak okuyun.' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Masaustu RPG\'ler icin Ay Fazi Hesaplayici: Ozel Fantezi Aylarini ve Gelgit Dongulerini Takip Edin',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Fantezi dunyam icin hangi yorunge periyodunu kullanmaliyim?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Eger evreniniz belirtmiyorsa, tek bir ay icin 28 ila 30 gun idealdir. Birden fazla ay icin, birbirlerinin basit katlari olmayan periyotlar secin ki hizalanmalar cok sik tekrarlanmasin.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Kabarma Gelgiti oyun terimleriyle ne anlama gelir?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Kabarma Gelgiti, tum aktif aylarin ayni hizada cekim yaptigi anlamina gelir. Bunu vahsi buyu dalgalanmalarini tetiklemek, iyilestirme buyusu menzillerini artirmak, firtina siddetini kotulestirmek veya dini gruplar icin kutsal bir gece olarak isaretlemek icin kullanin.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Iki ayi belirli bir kampanya aninda nasil hizalarim?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Her iki ayi da ayni ofset degerine ayarlayin. Iki yorunge periyotlarinin her ortak katinda tekrar hizalanirlar. Onlari sasirtmak icin, ikinci aya yorunge periyodunun yarisina esit bir ofset verin.'
          }
        },
        {
          '@type': 'Question',
          'name': '10 gunluk tahmin nasil calisir?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tahmin, sonraki 10 kampanya gununun her biri icin her aktif ayin ay fazini renkli bir nokta olarak gosterir. Gosterilen yuzde, birlestirilmis gelgit seviyesidir. Yuksek yuzdeye sahip gunler, dramatik buyu veya hava karsilasmalari icin adaylardir.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Bunu Call of Cthulhu veya korku kampanyalari icin kullanabilir miyim?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Evet. 29 gunluk tek bir ay kullanin ve dolunayin oturumun zirvesine denk gelmesi icin ofseti ayarlayin. Gelgit takipcisi, faz yuzdesiyle olceklendirilen Mitos etkisini veya psifik hassasiyet zirvelerini temsil edebilir.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Yayinlanmis bir macera modulundeki ay fazini nasil eslestirebilirim?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Belirtilen fazi not edin ve bunun dongudeki kacinci gune denk geldigini hesaplayin. Yorunge periyoduna bolun ve bu orani ofset olarak kullanin. Ornegin, 28 gunluk bir dongude ilk dordun ayi, 7 ofseti anlamina gelir.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Bir Masaustu RPG Kampanyasinda Ay Fazlari Nasil Takip Edilir',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Yorunge Periyodunu Ayarlayin',
          'text': 'Ayinizin tam bir donguyu tamamlamasi icin gereken oyun ici gun sayisini girin.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Baslangic Ofsetini Ayarlayin',
          'text': 'Bir gun ofseti girerek baslangic fazini kaydirin. Yorunge periyodunun yarisi Dolunay\'da baslatir.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Gun Sayacini Ilerletin',
          'text': 'Adim dugmelerini veya kaydiriciyi kullanarak mevcut kampanya gununuze gidin ve faz ile gelgit seviyesini gorun.'
        }
      ]
    }
  ]
};
export default content;
