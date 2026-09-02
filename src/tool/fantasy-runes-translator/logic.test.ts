import { describe, expect, it } from 'vitest';
import { ALPHABETS, getAlphabet, getShuffledMapping, translateText } from './logic';

describe('fantasy runes translator logic', () => {
  it('translates a documented Elder Futhark sample', () => {
    expect(translateText('abc', 'elder-futhark').raw).toBe('ᚨᛒᚲ');
  });

  it('falls back to the first alphabet for an unknown key', () => {
    expect(getAlphabet('not-a-real-alphabet' as never)).toBe(ALPHABETS[0]);
  });

  it('preserves spaces and leaves unsupported characters unchanged', () => {
    const result = translateText('a 1', 'elder-futhark');
    expect(result.raw).toBe('ᚨ 1');
    expect(result.characters).toHaveLength(3);
    expect(result.characters[1]?.char.name).toBe('Space');
    expect(result.characters[2]?.char).toBeNull();
  });

  it('keeps seeded mappings deterministic and changes the assignment', () => {
    const first = getShuffledMapping('elder-futhark', 42);
    const second = getShuffledMapping('elder-futhark', 42);
    expect(second).toEqual(first);
    expect(first).not.toEqual(getShuffledMapping('elder-futhark', null));
  });

  it('handles an empty input without creating characters', () => {
    expect(translateText('', 'fantasy').characters).toEqual([]);
    expect(translateText('', 'fantasy').raw).toBe('');
  });
});
