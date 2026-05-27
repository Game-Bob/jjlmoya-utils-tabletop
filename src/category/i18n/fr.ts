import type { CategoryLocaleContent } from '../../types';

const slug = 'horlogerie';
const title = "Outils d'Horlogerie et Guides de Référence";
const description = "Des utilitaires d'horlogerie de qualité professionnelle pour les passionnés de montres-ivez la précision, démagnétisez les mouvements, calculez le temps de port au poignet et explorez les références de positions de couronne pour les calibres populaires.";

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: "Outils Essentiels pour les Passionnés de Montres", level: 2 },
    { type: 'paragraph', html: "Que vous régliez un mouvement mécanique, que vous démagnétisiez une montre récemment aimantée, que vous suiviez la fréquence à laquelle vous portez une montre ou que vous appreniez les positions de couronne de votre calibre préféré, cette suite met à votre disposition des outils d'horlogerie professionnels-ns équipement coûteux." },
    { type: 'title', text: "Précision, Démagnétisation et Références de Couronne", level: 2 },
    { type: 'paragraph', html: "Du suivi de l'écart quotidien par rapport au temps atomique à la démagnétisation sécurisée d'un mouvement avec un timing précis, en passant par la connaissance du dernier porté de votre montre et la compréhension de chaque position de couronne sur un calibre ETA ou Miyota-s outils couvrent les besoins quotidiens de tout collectionneur ou passionné." },
    {
      type: 'stats', items: [
        { label: 'Outils', value: '4', icon: 'mdi:tools' },
        { label: 'Calibres', value: '8+', icon: 'mdi:engine' },
        { label: 'Langues', value: '15', icon: 'mdi:translate' },
        { label: 'Confidentialité', value: 'Locale', icon: 'mdi:shield-check' },
      ]
    },
  ],
};
