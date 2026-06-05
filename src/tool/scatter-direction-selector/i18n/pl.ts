import { bibliography } from '../bibliography';
import type { ScatterSelectorLocaleContent } from '../entry';

const ui = {
  title: 'Selektor Kierunku Rozrzutu',
  setupTitle: 'Ustawienia Rozrzutu',
  sectorsLabel: 'Sektory Kompasu',
  sectors8: '8 Kierunków',
  sectors12: '12 Kierunków (Zegar)',
  diceLabel: 'Rzut Dystansu Odchylenia',
  diceD6: '1D6 Cali',
  dice2D6: '2D6 Cali',
  diceD10: '1D10 Cali',
  diceCustom: 'Zakres Niestandardowy',
  customMaxLabel: 'Maksymalna Odległość',
  hitChanceLabel: 'Szansa Trafienia Bezpośredniego (%)',
  rollButton: 'Rzuć Rozrzut',
  hitResult: 'Trafienie Bezpośrednie!',
  scatterResult: 'Rozrzut!',
  distanceLabel: 'Odległość',
  angleLabel: 'Kąt',
  dragHint: 'Przeciągnij kompas, aby ręcznie ustawić kierunek wiatru',
  historyTitle: 'Ostatnie Rzuty',
  clearHistory: 'Wyczyść Historię',
  presetTitle: 'Ustawienia Wargamingowe',
  soundOn: 'Dźwięk Włączony',
  soundOff: 'Dźwięk Wyłączony',
  guideStep1: 'Przeciągnij kompas, aby dopasować go do orientacji stołu',
  guideStep2: 'Wybierz sektory, kości i szansę trafienia bezpośredniego',
  guideStep3: 'Środek = twój cel. Zielona poświata oznacza, że trafił dokładnie tam',
  guideStep3Scatter: 'Strzałka = kierunek odchylenia. Przesuń strzał od środka o tyle cali wzdłuż strzałki',
  scatterModeLabel: 'Kierunek Rozrzutu',
  scatterModeRandom: 'Losowy',
  scatterModeWind: 'Dryf Wiatru',
  scatterModeWindHint: 'Strzałka zawsze podąża za kompasem - tylko dystans jest losowy',
};

const faq = [
  {
    question: 'Jak działa Selektor Kierunku Rozrzutu?',
    answer: 'Oblicza losowy kąt (0-359 stopni) i dystans na podstawie wybranej konfiguracji kości. Symuluje również kość rozrzutu, sprawdzając trafienia bezpośrednie.',
  },
  {
    question: 'Czy mogę zmienić format sektorów?',
    answer: 'Tak, możesz przełączać się między sektorami kardynalnymi 8-kierunkowymi a sektorami 12-kierunkowymi w formacie zegarowym.',
  },
  {
    question: 'Czym jest szansa trafienia bezpośredniego?',
    answer: 'Reprezentuje prawdopodobieństwo, że pocisk trafi dokładnie w cel bez żadnego odchylenia, symulując wynik „Trafienie" na standardowej kości rozrzutu.',
  },
  {
    question: 'Czy to jest zgodne z Warhammer lub Bolt Action?',
    answer: 'Tak, obsługuje standardowe szablony 8-kierunkowe i ustawienia zegarowe 12-kierunkowe używane w większości taktycznych gier wojennych i systemów figurkowych.',
  },
  {
    question: 'Jak wizualnie wyświetlana jest odległość rozrzutu?',
    answer: 'Odległość w calach pojawia się jako pływająca etykieta w punkcie trafienia, umieszczona wzdłuż kierunku odchylenia. Czerwona strzałka kompasu również blokuje się na końcowym kącie, co ułatwia szybkie ustawienie szablonu.',
  },
  {
    question: 'Czy mogę wyłączyć animację, aby uzyskać szybsze wyniki?',
    answer: 'Animacja trwa około dwóch sekund, po czym wynik końcowy wyświetla się na środku, a strzałka kompasu się blokuje. Obecnie nie ma opcji pominięcia, ale opóźnienie ma odpowiadać tempu rzucania fizycznymi kośćmi.',
  },
];

const howTo = [
  {
    name: 'Skonfiguruj Zasady',
    text: 'Wybierz sektory kompasu, ustaw kość dystansu i dostosuj szansę trafienia bezpośredniego.',
  },
  {
    name: 'Rzuć lub Przeciągnij',
    text: 'Kliknij Rzuć Rozrzut, aby symulować odchylenie, lub przeciągnij koło kompasu, aby ręcznie dostosować kierunek.',
  },
  {
    name: 'Odczytaj Wynik',
    text: 'Sprawdź centralny wyświetlacz i strzałkę wektorową, aby poznać dokładną odległość, kąt i kierunek rozrzutu.',
  },
  {
    name: 'Obserwuj Trajektorię',
    text: 'Po rzucie obserwuj animowany pocisk przemieszczający się po kompasie. Przerywana linia pokazuje ścieżkę odchylenia, a punkt trafienia wyświetla odległość w calach.',
  },
  {
    name: 'Zinterpretuj Wynik',
    text: 'Zielony impuls z napisem „DIRECT HIT" oznacza zerowe odchylenie. Czerwony wybuch z etykietą odległości oznacza, że strzał się rozrzucił - umieść szablon w tej odległości od celu w kierunku wskazanym przez strzałkę.',
  },
];

export const content: ScatterSelectorLocaleContent = {
  slug: 'wybor-kierunku-rozrzutu',
  title: 'Selektor Kierunku Rozrzutu: Kompas Taktyczny do Gier Figurkowych',
  description: 'Określaj losowe odchylenia, dryf wiatru i kierunki rozrzutu dla gier figurkowych za pomocą trójwymiarowego kompasu dotykowego.',
  ui,
  seo: [
    { type: 'title', text: 'Interaktywny Kompas Rozrzutu z Animacją Pocisku w Czasie Rzeczywistym', level: 2 },
    { type: 'paragraph', html: 'Selektor Kierunku Rozrzutu wykracza poza statyczne generowanie liczb, wyświetlając animowaną trajektorię pocisku bezpośrednio na nakładce kompasu. Po kliknięciu Rzuć Rozrzut świecący pocisk przemieszcza się od środka wzdłuż kąta odchylenia, pozostawiając przerywaną linię i wybuchając w cząsteczki w punkcie trafienia.' },
    { type: 'stats', items: [
      { value: '2', label: 'Systemy Sektorów', icon: 'mdi:compass-rose' },
      { value: '4', label: 'Ustawienia Kości', icon: 'mdi:dice-d6' },
      { value: '0-100%', label: 'Zakres Szansy Trafienia', icon: 'mdi:target' },
      { value: '10', label: 'Historia Ostatnich Rzutów', icon: 'mdi:history' },
    ], columns: 4 },
    { type: 'title', text: 'Jak Animacja Trajektorii Poprawia Decyzje Taktyczne', level: 3 },
    { type: 'paragraph', html: 'Tradycyjne narzędzia wyświetlają numeryczny kąt i dystans, zmuszając graczy do mentalnej wizualizacji przesunięcia na stole. Animowana trajektoria wypełnia tę lukę, rysując dokładną ścieżkę lotu od punktu celowania do strefy lądowania rozrzutu.' },
    { type: 'diagnostic', variant: 'success', title: 'Trafienie Bezpośrednie', html: 'Gdy rzut przekroczy szansę trafienia, środek kompasu rozbłyska pulsującymi zielonymi pierścieniami i animacją tekstu „DIRECT HIT". Pocisk wraca do środka, potwierdzając idealne trafienie bez odchylenia.' },
    { type: 'diagnostic', variant: 'error', title: 'Rozrzut', html: 'Przy wyniku rozrzutu pocisk podąża przerywaną trajektorią do punktu lądowania. Wybuch cząstek, świecący znacznik i odległość w calach (np. <strong>5"</strong>) pojawiają się w miejscu trafienia.' },
    { type: 'tip', title: 'Porada: Używanie Trybu Dryfu Wiatru', html: 'Włącz Dryf Wiatru, aby zablokować kierunek rozrzutu na ręcznie ustawiony kąt kompasu. Symuluje to dominujący wiatr lub stały wektor przesunięcia - idealne dla niekierowanych rakiet, chmur gazowych czy nieudanych teleportacji.' },
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
      'name': 'Selektor Kierunku Rozrzutu',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Jak używać Selektor Kierunku Rozrzutu',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
