import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ScoreTrackerUI } from '../entry';

const ui: ScoreTrackerUI = {
  title: 'Schyotchik Ochkov',
  addPlayer: 'Dobavit igroka',
  removePlayer: 'Udalit',
  renamePlayer: 'Pereimenovat',
  startRound: 'Nachat raund 1',
  nextRound: 'Sleduyushchij raund',
  resetGame: 'Sbrosit igru',
  undoRound: 'Otmenit poslednij raund',
  playerLabel: 'Igrok',
  scoreLabel: 'Ochki',
  roundLabel: 'Raund',
  totalLabel: 'Itogo',
  rankLabel: 'Mesto',
  leaderboardTitle: 'TABLICA Liderov',
  historyTitle: 'Istoriya ochkov',
  noPlayersHint: 'Dobavte igrokov dlya nachala podschyota ochkov',
  playerNamePlaceholder: 'Imya igroka',
  confirmLabel: 'Podtverdit',
  cancelLabel: 'Otmena',
  deleteRoundConfirm: 'Udalit poslednij raund?',
  playerAdded: 'Igrok dobavlen',
  playerRemoved: 'Igrok udalen',
  roundStarted: 'Raund nachat',
  gameReset: 'Igra byla sbroshena',
  noRoundsYet: 'Eshchyo ne zapisano ni odnogo raunda',
  currentRoundLabel: 'Tekushchij raund',
  scoringTitle: 'Ochenka raunda',
  resetAllLabel: 'Sbrosit vse',
  confirmResetAll: 'Eto udalit vsekh igrokov i ochki. Vy uvereny?',
};

export const content: ToolLocaleContent<ScoreTrackerUI> = {
  slug: 'schetchik-ochkov',
  title: 'Schyotchik Ochkov: Mnogopolzovatelskij Schedrik i Menedzher Tablicy Liderov',
  description: 'Otslezhivajte ochki dlya lyuboj nastolnoj igry. Dobavlyajte igrokov, zapisyvajte ochki raund za raundom i nablyudajte za obnovleniem tablicy liderov v realnom vremeni s avtomaticheskim rangirovaniem.',
  ui,
  seo: [
    { type: 'title', text: 'Podschyot Ochkov v Nastolnykh Igrakh: Kak Otslezhivat Ochki Bez Oshibok', level: 2 },
    { type: 'paragraph', html: 'Podschyot ochkov v nastolnykh igrakh kazhetsya prostym, poka vy ne zashli na pyatyj raund i kto-to ne obnaruzhil, chto poschital nepravilno. Nezavisimo ot togo, igraete li vy v Wingspan, Terraforming Mars, Catan ili lyubuyu igru na ochki pobedy, tochnyj podschyot ochkov eto raznica mezhdu chestnoj igroj i sporom. Cifrovoj schyotchik ochkov ustranyaet arifmeticheskie oshibki, pokazyvaet tablicu liderov v rezhime realnogo vremeni i hranit polnuyu istoriyu kazhdogo raunda, chtoby vy mogli proverit itogovyj rezultat.' },
    {
      type: 'stats',
      items: [
        { value: 'Bez ogranichenij', label: 'Podderzhivaemykh igrokov' },
        { value: 'Real Vremya', label: 'Obnovlenie tablicy liderov' },
        { value: 'Bez ogranichenij', label: 'Zapisannykh raundov' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Chastye Oshibki pri Podschyote i Kak Ikh Izbezhat', level: 2 },
    { type: 'paragraph', html: 'Samaya chastaya oshibka zabyvanie dobavit bonusy v konce raunda ili nepravilnoe summirovanie stolbca cifr. Kogda vy otslezhivaete ochki cifrovo sposobom, tekushchij itog obnovlyaetsya avtomaticheski posle kazhdoj zapisi. Eto znachit, chto vy mozhete zametit oshibku v tot moment, kogda cifra kazhetsya strannoj, vmesto togo chtoby obnaruzhit eye v konce igry, kogda nikto ne pomnit pravilnoe znachenie. Funkciya istorii raundov pozvolyaet proverit lyuboj predydushchij raund i ispravit oshibki bez perezapuska vsej igry.' },
    {
      type: 'tip',
      title: 'Bystrye Sovety po Podschyotu Ochkov',
      html: 'Vvodite ochki srazu posle okonchaniya kazhdogo raunda, poka vse eshchyo pomnyat rezultaty. Ispolzujte opisatelnye metki igrokov, takie kak cveta ili nazvaniya frakcij, vmesto nastoyashchikh imen dlya igr so skrytymi rolyami. Kogda igraete s detmi, pozvolte im samim nazhimat knopki, chtoby oni ostavalis vovlechennymi v process podschyota ochkov.',
    },
    {
      type: 'title',
      text: 'Ochenka za Raund vs Tolko Obshchaya Summa',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Ochki za Raund vs Tolko Konechnyj Rezultat',
      items: [
        {
          pro: 'Vy mozhete videt, kto lidiroval na kazhdom etape igry i kak menyalsya temp.',
          con: 'Trebuet vvoda dannyh posle kazhdogo raunda vmesto odnogo raza v konce.',
        },
        {
          pro: 'Oshibki legko obnaruzhit, potomu chto vy mozhete sverit zapisi otdelnyh raundov s pamyatyu.',
          con: 'Zanimaet nemnogo bolshe vremeni vo vremya igrovoj sessii.',
        },
        {
          pro: 'Igroki mogut proveryat svoi sobstvennye ochki za raund, chto umenshaet spory i sozdaet doverie.',
          con: 'Luchshe vsego rabotaet, kogda odin chelovek upravlyaet ustrojstvom ili igroki delayut eto po ocheredi.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Igry s Neobychnymi Sistemami Ochenki',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Igry na Ochki Pobedy',
          description: 'Bolshinstvo evroigr ispolzuyut ochki pobedy, prisuzhdaemye na protyazhenii vsej igry. Slozhnost zaklyuchaetsya v otslezhivanii mnozhestvennykh istochnikov OP: resursy, dostizheniya, bonusy v konce igry. Cifrovoj treker pozvolyaet vvodit ochki po mere ikh polucheniya i videt tekushchij itog.',
          icon: 'mdi:chess-queen',
          highlight: true,
          points: [
            'Otslezhivanie neskolkikh kategorij ochkov',
            'Raschjoty bonusov v konce igry',
            'Mgnovennoe razreshenie nitchih',
          ],
        },
        {
          title: 'Igry s Otricatelnoj Ochenkoj',
          description: 'Nekotorye igry nakazyvayut igrokov otricatelnymi ochkami za opredelyonnye dejstviya. Cifrovoj schyotchik estestvenno obrabatyvaet otricatelnye znacheniya, okrashivaya ikh v krasnyj cvet, chtoby nakazanie bylo nemedlenno vidno. Eto osobenno polezno v igrakh na vzyatki ili deduktivnykh igrakh s mekhanikami nakazaniya.',
          icon: 'mdi:minus-circle-outline',
          highlight: false,
          points: [
            'Avtomaticheskaya obrabotka otricatelnyh znachenij',
            'Vizualnye indikatory nakazanij',
            'Tochnye kumulyativnye itogi',
          ],
        },
        {
          title: 'Kampanijnye Igry',
          description: 'Legacy i kampanijnye igry perenosyat ochki cherez neskolko sessij. Bez tre-kera vam prikhoditsya vesti bumazhnye zametki mezhdu igrovymi vecherami. Cifrovoj instrument derzhit ochki kampanii organizovannymi i pozvolyaet prosmotret, kak vashi resheniya povliyali na obshchuyu klassifikaciyu.',
          icon: 'mdi:book-open-variant',
          highlight: false,
          points: [
            'Postoyannoe otslezhivanie kampanii',
            'Sravnenie mezhdu sessiyami',
            'Detalizaciya sessiya za sessiej',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Glossarij po Ochenke',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Ochki Pobedy (OP)',
          definition: 'Standartnaya edinica izmereniya v bolshinstve sovremennykh nastolnykh igr. Igroki zarabatyvayut OP cherez dejstviya, i tot, u kogo bolshe vsego OP v konce igry, pobezhdaet.',
        },
        {
          term: 'Ochenka za Raund',
          definition: 'Zapis ochkov v konce kazhdogo raunda, a ne tolko v konce igry. Sozdaet podrobnuyu istoriyu i delaet proverku oshibok prostoj.',
        },
        {
          term: 'TABLICA Liderov',
          definition: 'Reklama v realnom vremeni, pokazyvayushchaya polozhenie kazhdogo igroka na osnove obshchego rezultata. Tablica liderov avtomaticheski perestraivaetsya po mere vvoda novyh ochkov.',
        },
        {
          term: 'Otricatelnaya Ochenka',
          definition: 'Sistema ochenki, gde igroki mogut teryat ochki cherez nakazaniya ili neudachnye dejstviya, chto privodit k otricatelnym itogam. Cifrovoj treker obrabatyvaet eto bez oshibok ruchnogo vychitaniya.',
        },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Kak Obrashchatsya so Spornymi Ochkami',
      icon: 'mdi:information-outline',
      badge: 'IGROVOJ SOVET',
      html: 'Kogda igrok osparivaet ochki, ne menyajte ikh nemedlenno. Snachala proverte istoriyu raundov, chtoby podtverdit chto bylo vvedeno. Esli zapis neverna, ispolzujte knopki +/-, chtoby ispravit eye, i itog obnovitsya avtomaticheski. Esli zapis raunda verny, no igrok ne soglasen, istoriya predostavlyaet obektivnuyu zapis, kotoruyu vse mogut prosmotret vmeste.',
    },
  ],
  faq: [
    {
      question: 'Za skolkimi igrokami ya mogu sledit?',
      answer: 'Net ogranichenij. Dobavlyajte stolko igrokov, skolko podderzhivaet vasha igra, i pereimenovyvajte ikh v lyuboe vremya v techenie sessii.',
    },
    {
      question: 'Mogu li ya otmenit oshibku?',
      answer: 'Da. Ispolzujte knopku Otmenit Poslednij Raund, chtoby udalit samyj poslednij raund ochkov, chto avtomaticheski pereschitaet vse itogi i rangirovanie.',
    },
    {
      question: 'Sokhranyaet li schyotchik ochkov moi dannye?',
      answer: 'Schetchik ochkov rabotaet polnostyu v vashem brauzere. Dannye sokhranyayutsya v techenie tekushchej sessii. Obnovlenie stranicy sbrosit vse ochki.',
    },
    {
      question: 'Kak rabotaet tablica liderov?',
      answer: 'TABLICA Liderov sortiruet igrokov po obshchemu rezultatu v poryadke ubvavaniya. Rang obnovlyaetsya avtomaticheski po mere vvoda ili izmeneniya ochkov v kazhdom raunde.',
    },
    {
      question: 'Mogu li ya otslezhivat otricatelnye ochki?',
      answer: 'Da. Knopki +/- pozvolyayut kak polozhitelnye, tak i otricatelnye korrektirovki, chto delaet ego podhodyashchim dlya igr so shtrafnymi ochkami ili mekhanikami vychitaniya.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Dobavlenie igrokov',
      text: 'Vvedite imena igrokov s pomoshchyu polya Dobavit Igroka. Vy mozhete dobavlyat ili udalyat igrokov v lyuboe vremya v techenie igry.',
    },
    {
      name: 'Nachalo podschyota',
      text: 'Nazhmite Nachat Raund, chtoby nachat novyj raund ochenki. Ispolzujte knopki +/-, chtoby izmenit ochki kazhdogo igroka v etom raunde.',
    },
    {
      name: 'Prosmotr rangov',
      text: 'TABLICA Liderov obnovlyaetsya avtomaticheski. Prosmotrite vkladku Istoriya Ochkov, chtoby proverit zapisi predydushchikh raundov.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Schyotchik Ochkov & Schedrik',
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
          'name': 'Za skolkimi igrokami ya mogu sledit?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Net ogranichenij. Dobavlyajte stolko igrokov, skolko podderzhivaet vasha igra.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Mogu li ya otmenit oshibku?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Da. Ispolzujte knopku Otmenit Poslednij Raund, chtoby udalit samyj poslednij raund ochkov.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Sokhranyaet li schyotchik ochkov moi dannye?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Schyotchik ochkov rabotaet v vashem brauzere. Dannye sokhranyayutsya v techenie sessii.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kak rabotaet tablica liderov?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'TABLICA Liderov sortiruet igrokov po obshchemu rezultatu.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Mogu li ya otslezhivat otricatelnye ochki?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Da. Knopki +/- pozvolyayut kak polozhitelnye, tak i otricatelnye korrektirovki.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Kak Ispolzovat Schyotchik Ochkov',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Dobavlenie igrokov',
          'text': 'Vvedite imena igrokov s pomoshchyu polya Dobavit Igroka.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Nachalo podschyota',
          'text': 'Nazhmite Nachat Raund i ispolzujte knopki +/-, chtoby izmenit ochki igrokov.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Prosmotr izmeneny',
          'text': 'TABLICA Liderov obnovlyaetsya avtomaticheski.',
        },
      ],
    },
  ],
};
