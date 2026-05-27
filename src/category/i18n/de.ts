import type { CategoryLocaleContent } from '../../types';

const slug = 'horologie';
const title = 'Uhrmacherwerkzeuge & Referenzführer';
const description = 'Professionelle uhrmacherische Hilfsmittel für Uhrenliebhaber-rfolgen Sie die Ganggenauigkeit, entmagnetisieren Sie Uhrwerke, berechnen Sie die Tragedauer am Handgelenk und erkunden Sie Kronenpositions-Referenzen für gängige Kaliber.';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: 'Wesentliche Werkzeuge für Uhrenliebhaber', level: 2 },
    { type: 'paragraph', html: 'Ob Sie ein mechanisches Uhrwerk regulieren, eine kürzlich magnetisierte Uhr entmagnetisieren, nachverfolgen wie oft Sie eine Uhr tragen oder die Kronenpositionen Ihres Lieblingskalibers lernen-ese Suite legt professionelle uhrmacherische Werkzeuge in Ihre Hände, ganz ohne teure Ausrüstung.' },
    { type: 'title', text: 'Ganggenauigkeit, Entmagnetisierung & Kronenreferenzen', level: 2 },
    { type: 'paragraph', html: 'Von der täglichen Abweichungsmessung gegen Atomzeit über das sichere Entmagnetisieren eines Uhrwerks mit präzisem Timing, vom Wissen wann Sie Ihre Uhr zuletzt getragen haben bis zum Verständnis jeder Kronenposition an einem ETA- oder Miyota-Kaliber-ese Werkzeuge decken die täglichen Bedürfnisse jedes Sammlers und Liebhabers ab.' },
    {
      type: 'stats', items: [
        { label: 'Werkzeuge', value: '4', icon: 'mdi:tools' },
        { label: 'Kaliber', value: '8+', icon: 'mdi:engine' },
        { label: 'Sprachen', value: '15', icon: 'mdi:translate' },
        { label: 'Datenschutz', value: 'Lokal', icon: 'mdi:shield-check' },
      ]
    },
  ],
};
