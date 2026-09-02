import { existsSync, readdirSync } from 'fs';
import { join } from 'path';
import { describe, expect, it } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { CATEGORY_OG_IMAGE, getUtilityOgImage } from '../mfe/assets';

const assetRoot = join(process.cwd(), 'public', 'images', 'utilities');

describe('MFE asset contract', () => {
  it('keeps one English OG asset per category and tool', async () => {
    const expectedSlugs = new Set(['tabletop']);

    for (const { entry } of ALL_TOOLS) {
      const loader = entry.i18n.en;
      if (!loader) throw new Error(`Missing English locale for ${entry.id}`);
      expectedSlugs.add((await loader()).slug);
    }

    const actualSlugs = new Set(
      readdirSync(assetRoot)
        .filter((filename) => filename.endsWith('.webp'))
        .map((filename) => filename.slice(0, -'.webp'.length)),
    );

    expect(actualSlugs).toEqual(expectedSlugs);
    for (const slug of expectedSlugs) {
      expect(existsSync(join(assetRoot, `${slug}.webp`))).toBe(true);
      expect(getUtilityOgImage(slug)).toBe(`/images/utilities/${slug}.webp`);
    }
    expect(CATEGORY_OG_IMAGE).toBe('/images/utilities/tabletop.webp');
  });
});
