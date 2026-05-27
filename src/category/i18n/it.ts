import type { CategoryLocaleContent } from '../../types';

const slug = 'orologeria';
const title = 'Strumenti di Orologeria e Guide di Riferimento';
const description = 'Utilità di orologeria di livello professionale per appassionati di orologi-nitora la precisione, smagnetizza i movimenti, calcola il tempo al polso ed esplora le posizioni della corona per calibri popolari.';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: 'Strumenti Essenziali per Appassionati di Orologi', level: 2 },
    { type: 'paragraph', html: 'Che tu stia regolando un movimento meccanico, smagnetizzando un orologio recentemente magnetizzato, monitorando la frequenza con cui indossi un segnatempo o imparando le posizioni della corona del tuo calibro preferito, questa suite mette strumenti di orologeria professionali a portata di mano-nza costose attrezzature.' },
    { type: 'title', text: 'Precisione, Smagnetizzazione e Riferimenti della Corona', level: 2 },
    { type: 'paragraph', html: 'Dal monitoraggio dello scostamento giornaliero rispetto al tempo atomico alla smagnetizzazione sicura di un movimento con tempistiche precise, dal sapere esattamente quando hai indossato un orologio l\'ultima volta alla comprensione di ogni posizione della corona su un calibro ETA o Miyota-esti strumenti coprono le esigenze quotidiane di qualsiasi collezionista o appassionato.' },
    {
      type: 'stats', items: [
        { label: 'Strumenti', value: '4', icon: 'mdi:tools' },
        { label: 'Calibri', value: '8+', icon: 'mdi:engine' },
        { label: 'Lingue', value: '15', icon: 'mdi:translate' },
        { label: 'Privacy', value: 'Locale', icon: 'mdi:shield-check' },
      ]
    },
  ],
};
