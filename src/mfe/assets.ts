export const getUtilityOgImage = (englishSlug: string): string =>
    `/_utilities/tabletop/images/${englishSlug}.webp`;

export const getUtilityCssPath = (englishSlug: string): string =>
    `/styles/lib/tabletop/${englishSlug}.css`;

export const CATEGORY_OG_IMAGE = getUtilityOgImage("tabletop");
