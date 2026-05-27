import type { CategoryLocaleContent } from '../../types';

const slug = 'horologie';
const title = 'Horologie Gereedschappen & Referentiegidsen';
const description = 'Professionele horologie-hulpmiddelen voor horlogeliefhebbers-lg nauwkeurigheid, demagnetiseer uurwerken, bereken draagtijd en verken kroonpositie-referenties voor populaire kalibers.';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: 'Essentiële Gereedschappen voor Horlogeliefhebbers', level: 2 },
    { type: 'paragraph', html: 'Of u nu een mechanisch uurwerk reguleert, een recent gemagnetiseerd horloge demagnetiseert, bijhoudt hoe vaak u een horloge draagt, of de kroonposities van uw favoriete kaliber leert, deze suite biedt professionele horologie-gereedschappen binnen handbereik-en dure apparatuur nodig.' },
    { type: 'title', text: 'Nauwkeurigheid, Demagnetisatie & Kroonposities', level: 2 },
    { type: 'paragraph', html: 'Van het volgen van de dagelijkse afwijking ten opzichte van atoomtijd tot het veilig demagnetiseren van een uurwerk, van weten wanneer u uw horloge voor het laatst droeg tot het begrijpen van elke kroonpositie op een ETA- of Miyota-kaliber-ze gereedschappen dekken de dagelijkse behoeften van elke verzamelaar of liefhebber.' },
    {
      type: 'stats', items: [
        { label: 'Gereedschappen', value: '4', icon: 'mdi:tools' },
        { label: 'Kalibers', value: '8+', icon: 'mdi:engine' },
        { label: 'Talen', value: '15', icon: 'mdi:translate' },
        { label: 'Gegevensprivacy', value: 'Lokaal', icon: 'mdi:shield-check' },
      ]
    },
  ],
};
