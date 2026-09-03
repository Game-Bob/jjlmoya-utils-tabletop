import packageMetadata from "../../package.json";

const UTILITY_ASSET_ROOT = "/_utilities/tabletop";

export const TABLETOP_ASSET_VERSION = encodeURIComponent(
    import.meta.env.PUBLIC_APP_VERSION ?? packageMetadata.version,
);

const withAssetVersion = (path: string): string => `${path}?version=${TABLETOP_ASSET_VERSION}`;

export const getUtilityAssetPath = (assetName: string): string =>
    withAssetVersion(`${UTILITY_ASSET_ROOT}/${assetName}`);

export const getUtilityOgImage = (englishSlug: string): string =>
    withAssetVersion(`/_utilities/tabletop/images/${englishSlug}.webp`);

export const getUtilityCssPath = (englishSlug: string): string =>
    withAssetVersion(`/_utilities/tabletop/styles/${englishSlug}.css`);

export const CATEGORY_OG_IMAGE = getUtilityOgImage("tabletop");
