import { describe, expect, it } from 'vitest';
import {
  UTILITY_LOCALES,
  getCategoryNamespace,
  getCategoryPath,
  getUtilitiesPath,
  getUtilityPath,
  getUtilityNamespace,
} from '@jjlmoya/utils-shared/routing';

describe('Public utility routing contract', () => {
  it('keeps the complete fifteen-locale utility set', () => {
    expect(UTILITY_LOCALES).toHaveLength(15);
    expect(new Set(UTILITY_LOCALES).size).toBe(15);
  });

  it('keeps Spanish on the external jjlmoya host', () => {
    expect(getUtilitiesPath('es')).toBe('https://www.jjlmoya.es/utilidades/');
    expect(getCategoryPath('es', 'juegos-de-mesa')).toBe(
      'https://www.jjlmoya.es/utilidades/categorias/juegos-de-mesa/',
    );
    expect(getUtilityPath('es', 'juegos-de-mesa', 'tirador-de-dados')).toBe(
      'https://www.jjlmoya.es/utilidades/tirador-de-dados/',
    );
  });

  it('serializes every internal locale with both translated namespaces', () => {
    for (const locale of UTILITY_LOCALES.filter((candidate) => candidate !== 'es')) {
      expect(getUtilitiesPath(locale)).toBe(`/${locale}/${getUtilityNamespace(locale)}/`);
      const category = getCategoryPath(locale, 'tabletop');
      const utility = getUtilityPath(locale, 'tabletop', 'dice-roller-simulator');

      expect(category).toBe(
        `/${locale}/${getUtilityNamespace(locale)}/${getCategoryNamespace(locale)}/tabletop/`,
      );
      expect(utility).toBe(
        `/${locale}/${getUtilityNamespace(locale)}/${getCategoryNamespace(locale)}/tabletop/dice-roller-simulator/`,
      );
    }
  });
});
