import {
    getCategoryNamespace,
    getCategoryPath,
    getUtilitiesPath,
    getUtilityNamespace,
    getUtilityPath,
    type UtilityLocale,
} from "@jjlmoya/utils-shared/routing";

export type { UtilityLocale };

export const INTERNAL_LOCALES = [
    "en", "fr", "de", "it", "pt", "nl", "sv", "pl", "id", "tr", "ru", "ja", "ko", "zh",
] as const satisfies readonly UtilityLocale[];

export const getCategoryRoute = (locale: UtilityLocale, categorySlug: string): string =>
    getCategoryPath(locale, categorySlug);

export const getUtilityRoute = (locale: UtilityLocale, categorySlug: string, toolSlug: string): string =>
    getUtilityPath(locale, categorySlug, toolSlug);

export const getUtilityIndexRoute = (locale: UtilityLocale): string => getUtilitiesPath(locale);

export const getInternalCategoryRoute = (locale: Exclude<UtilityLocale, "es">, categorySlug: string): string =>
    `/${locale}/${getUtilityNamespace(locale)}/${getCategoryNamespace(locale)}/${categorySlug}/`;

export const getInternalUtilityRoute = (locale: Exclude<UtilityLocale, "es">, categorySlug: string, toolSlug: string): string =>
    `${getInternalCategoryRoute(locale, categorySlug)}${toolSlug}/`;
