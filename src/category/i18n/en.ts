import type { CategoryLocaleContent } from '../../types';

const slug = 'horology';
const title = 'Horology Tools & Reference Guides';
const description = 'Professional-grade horology utilities for watch enthusiasts-ack accuracy, demagnetize movements, calculate wrist presence, and explore crown position references for popular calibers.';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: 'Essential Tools for Watch Enthusiasts', level: 2 },
    { type: 'paragraph', html: 'Whether you are regulating a mechanical movement, demagnetizing a recently magnetized watch, tracking how often you wear a timepiece, or learning the crown positions of your favorite caliber, this suite puts professional-grade horology tools at your fingertips- expensive equipment required.' },
    { type: 'title', text: 'Accuracy, Demagnetization & Crown References', level: 2 },
    { type: 'paragraph', html: 'From tracking daily rate deviation against atomic time to safely demagnetizing a movement with precise timing, from knowing exactly when you last wore a watch to understanding every crown position on an ETA or Miyota caliber-ese tools cover the day-to-day needs of any collector or enthusiast.' },
    {
      type: 'stats', items: [
        { label: 'Tools', value: '4', icon: 'mdi:tools' },
        { label: 'Calibers', value: '8+', icon: 'mdi:engine' },
        { label: 'Languages', value: '15', icon: 'mdi:translate' },
        { label: 'Data Privacy', value: 'Local', icon: 'mdi:shield-check' },
      ]
    },
  ],
};
