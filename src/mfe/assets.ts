export const getUtilityOgImage = (englishSlug: string): string =>
    `/images/utilities/${englishSlug}.webp`;

export const getUtilityCssPath = (englishSlug: string): string =>
    `/styles/lib/tabletop/${englishSlug}.css`;

export const CATEGORY_OG_IMAGE = getUtilityOgImage("tabletop");
