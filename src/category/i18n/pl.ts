import type { CategoryLocaleContent } from '../../types';

const slug = 'horologia';
const title = 'Narzędzia Horologiczne & Przewodniki Referencyjne';
const description = 'Profesjonalne narzędzia horologiczne dla entuzjastów zegarków-edź dokładność, rozmagnesowuj mechanizmy, obliczaj obecność na nadgarstku i poznawaj pozycje koronki popularnych kalibrów.';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: 'Niezbędne Narzędzia dla Miłośników Zegarków', level: 2 },
    { type: 'paragraph', html: 'Niezależnie od tego, czy regulujesz mechaniczny mechanizm, rozmagnesowujesz niedawno namagnesowany zegarek, śledzisz jak często nosisz dany czasomierz, czy uczysz się pozycji koronki swojego ulubionego kalibru, ten zestaw zapewnia profesjonalne narzędzia horologiczne na wyciągnięcie ręki-z potrzeby drogiego sprzętu.' },
    { type: 'title', text: 'Dokładność, Rozmagnesowywanie & Pozycje Koronki', level: 2 },
    { type: 'paragraph', html: 'Od śledzenia dziennego odchylenia względem czasu atomowego po bezpieczne rozmagnesowywanie mechanizmu, od wiedzy kiedy ostatnio nosiłeś zegarek po zrozumienie każdej pozycji koronki w kalibrze ETA lub Miyota- narzędzia pokrywają codzienne potrzeby każdego kolekcjonera i entuzjasty.' },
    {
      type: 'stats', items: [
        { label: 'Narzędzia', value: '4', icon: 'mdi:tools' },
        { label: 'Kalibry', value: '8+', icon: 'mdi:engine' },
        { label: 'Języki', value: '15', icon: 'mdi:translate' },
        { label: 'Prywatność Danych', value: 'Lokalnie', icon: 'mdi:shield-check' },
      ]
    },
  ],
};
