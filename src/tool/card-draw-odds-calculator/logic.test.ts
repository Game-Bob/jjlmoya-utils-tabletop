import { describe, expect, it } from 'vitest';
import { evaluateInput } from './evaluator';
import { calculateCardDrawOdds, DEFAULT_INPUT, probabilityAtLeastOne } from './logic';

describe('card draw odds calculator', () => {
  it('matches the exact no-target complement for a 60 card deck', () => {
    const result = probabilityAtLeastOne({ ...DEFAULT_INPUT, mulliganMode: 'none' }, 7);
    expect(result).toBeCloseTo(1 - (56 * 55 * 54 * 53 * 52 * 51 * 50) / (60 * 59 * 58 * 57 * 56 * 55 * 54), 10);
  });

  it('increases the opening chance when a full redraw is taken after a miss', () => {
    const input = { ...DEFAULT_INPUT, mulliganMode: 'fullRedraw' as const };
    const noMulligan = probabilityAtLeastOne({ ...input, mulliganMode: 'none' }, 7);
    const withMulligan = probabilityAtLeastOne(input, 7);
    expect(withMulligan).toBeGreaterThan(noMulligan);
    expect(withMulligan).toBeCloseTo(1 - (1 - noMulligan) ** 2, 10);
  });

  it('returns a monotonic timeline and a finite expected count', () => {
    const result = calculateCardDrawOdds(DEFAULT_INPUT);
    expect(result.points).toHaveLength(7);
    expect(result.points[0]?.cardsSeen).toBe(7);
    expect(result.points.at(-1)?.cardsSeen).toBe(13);
    expect(result.points.every((point, index, points) => index === 0 || point.probability >= (points[index - 1]?.probability ?? 0))).toBe(true);
    expect(result.expectedCopiesAtFinal).toBeGreaterThan(4 * 13 / 60);
  });

  it('handles a deck with no copies as zero probability', () => {
    const result = calculateCardDrawOdds({ ...DEFAULT_INPUT, targetCopies: 0 });
    expect(result.finalProbability).toBe(0);
  });

  it('rejects each invalid input family with a localized error key', () => {
    expect(evaluateInput({ ...DEFAULT_INPUT, deckSize: 0 }).errorKey).toBe('invalidDeck');
    expect(evaluateInput({ ...DEFAULT_INPUT, targetCopies: 61 }).errorKey).toBe('invalidCopies');
    expect(evaluateInput({ ...DEFAULT_INPUT, openingHand: 61 }).errorKey).toBe('invalidHand');
    expect(evaluateInput({ ...DEFAULT_INPUT, drawsPerTurn: -1 }).errorKey).toBe('invalidDraws');
    expect(evaluateInput({ ...DEFAULT_INPUT, throughTurn: 61 }).errorKey).toBe('invalidTurns');
    expect(evaluateInput(DEFAULT_INPUT)).toEqual({ valid: true });
  });

  it('handles boundary samples without producing invalid probabilities', () => {
    expect(probabilityAtLeastOne({ ...DEFAULT_INPUT, targetCopies: DEFAULT_INPUT.deckSize }, 0)).toBe(1);
    expect(probabilityAtLeastOne({ ...DEFAULT_INPUT, targetCopies: 0 }, 13)).toBe(0);
    const result = calculateCardDrawOdds({ ...DEFAULT_INPUT, throughTurn: 0 });
    expect(result.points).toHaveLength(1);
    expect(result.points[0]?.stage).toBe('opening');
    expect(result.points.every((point) => point.probability >= 0 && point.probability <= 1)).toBe(true);
  });
});
