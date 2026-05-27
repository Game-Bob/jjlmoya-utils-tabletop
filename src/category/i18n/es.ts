import type { CategoryLocaleContent } from '../../types';

const slug = 'horologia';
const title = 'Herramientas de Relojería y Guías de Referencia';
const description = 'Utilidades de relojería de grado profesional para entusiastas del reloj: mide la precisión, desmagnetiza movimientos, calcula el uso en muñeca y explora referencias de posiciones de corona para calibres populares.';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: 'Herramientas Esenciales para Entusiastas del Reloj', level: 2 },
    { type: 'paragraph', html: 'Ya sea que estés regulando un movimiento mecánico, desmagnetizando un reloj recién magnetizado, registrando con qué frecuencia usas un reloj o aprendiendo las posiciones de la corona de tu calibre favorito, esta suite pone herramientas profesionales de relojería al alcance de tu mano, sin necesidad de equipos costosos.' },
    { type: 'title', text: 'Precisión, Desmagnetización y Referencias de Corona', level: 2 },
    { type: 'paragraph', html: 'Desde medir la desviación diaria contra el tiempo atómico hasta desmagnetizar un movimiento con una temporización precisa, desde saber exactamente cuándo usaste un reloj por última vez hasta entender cada posición de la corona en un calibre ETA o Miyota: estas herramientas cubren las necesidades diarias de cualquier coleccionista o entusiasta.' },
    { type: 'stats', items: [
      { label: 'Herramientas', value: '4', icon: 'mdi:tools' },
      { label: 'Calibres', value: '8+', icon: 'mdi:engine' },
      { label: 'Idiomas', value: '15', icon: 'mdi:translate' },
      { label: 'Privacidad', value: 'Local', icon: 'mdi:shield-check' },
    ] },
  ],
};
