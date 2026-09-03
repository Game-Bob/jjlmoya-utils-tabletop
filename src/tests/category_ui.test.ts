import { UTILITY_LOCALES } from '@jjlmoya/utils-shared/routing';
import { describe, expect, it } from 'vitest';
import { CATEGORY_UI, getCategoryUi } from '../mfe/category-ui';

describe('category UI translations', () => {
  it('provides a translated use-tool CTA for every supported locale', () => {
    for (const locale of UTILITY_LOCALES) {
      expect(getCategoryUi(locale).useTool.trim()).not.toBe('');
      expect(getCategoryUi(locale).openTool.trim()).not.toBe('');
    }

    expect(Object.keys(CATEGORY_UI).sort()).toEqual([...UTILITY_LOCALES].sort());
    expect(UTILITY_LOCALES.filter((locale) => locale !== 'en').every((locale) => getCategoryUi(locale).useTool !== 'Use tool')).toBe(true);
    expect(UTILITY_LOCALES.filter((locale) => locale !== 'en').every((locale) => getCategoryUi(locale).openTool !== 'Open tool')).toBe(true);
  });
});
