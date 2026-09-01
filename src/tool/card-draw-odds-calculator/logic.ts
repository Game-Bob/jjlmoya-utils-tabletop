export type MulliganMode = 'none' | 'fullRedraw';

export interface CardDrawInput {
  deckSize: number;
  targetCopies: number;
  openingHand: number;
  drawsPerTurn: number;
  throughTurn: number;
  mulliganMode: MulliganMode;
}

export interface DrawOddsPoint {
  stage: 'opening' | 'turn';
  turn: number;
  cardsSeen: number;
  probability: number;
  expectedCopies: number;
}

export interface CardDrawResult {
  points: DrawOddsPoint[];
  finalProbability: number;
  openingProbability: number;
  expectedCopiesAtFinal: number;
}

export const DEFAULT_INPUT: CardDrawInput = {
  deckSize: 60,
  targetCopies: 4,
  openingHand: 7,
  drawsPerTurn: 1,
  throughTurn: 6,
  mulliganMode: 'fullRedraw',
};

export const PRESETS: Record<string, Partial<CardDrawInput>> = {
  standard: { deckSize: 60, targetCopies: 4, openingHand: 7, drawsPerTurn: 1, throughTurn: 6 },
  limited: { deckSize: 40, targetCopies: 4, openingHand: 7, drawsPerTurn: 1, throughTurn: 6 },
  singleton: { deckSize: 100, targetCopies: 1, openingHand: 7, drawsPerTurn: 1, throughTurn: 6 },
};

const clampProbability = (value: number): number => Math.min(1, Math.max(0, value));

const logCombination = (n: number, k: number): number => {
  if (k < 0 || k > n) return Number.NEGATIVE_INFINITY;
  const count = Math.min(k, n - k);
  let total = 0;
  for (let index = 1; index <= count; index += 1) {
    total += Math.log(n - count + index) - Math.log(index);
  }
  return total;
};

const noTargetProbability = (input: CardDrawInput, cardsSeen: number): number => {
  if (input.targetCopies === 0) return 1;
  if (cardsSeen > input.deckSize - input.targetCopies) return 0;
  const logNoTarget = logCombination(input.deckSize - input.targetCopies, cardsSeen);
  const logSample = logCombination(input.deckSize, cardsSeen);
  return clampProbability(Math.exp(logNoTarget - logSample));
};

const expectedCopiesAt = (input: CardDrawInput, cardsSeen: number): number => {
  const baseline = input.targetCopies * Math.min(cardsSeen, input.deckSize) / input.deckSize;
  if (input.mulliganMode === 'none' || input.openingHand === input.deckSize) return baseline;
  const drawCards = Math.max(0, cardsSeen - input.openingHand);
  const expectedDrawsAfterMiss = drawCards * input.targetCopies / (input.deckSize - input.openingHand);
  const expectedReplacement = baseline;
  return baseline + noTargetProbability(input, input.openingHand) * (expectedReplacement - expectedDrawsAfterMiss);
};

export const probabilityAtLeastOne = (input: CardDrawInput, cardsSeen: number): number => {
  const noTarget = noTargetProbability(input, cardsSeen);
  if (input.mulliganMode === 'none') return clampProbability(1 - noTarget);
  const noOpeningTarget = noTargetProbability(input, input.openingHand);
  return clampProbability(1 - noOpeningTarget * noTarget);
};

const createPoint = (input: CardDrawInput, stage: 'opening' | 'turn', turn: number, cardsSeen: number): DrawOddsPoint => ({
  stage,
  turn,
  cardsSeen,
  probability: probabilityAtLeastOne(input, cardsSeen),
  expectedCopies: expectedCopiesAt(input, cardsSeen),
});

export const calculateCardDrawOdds = (input: CardDrawInput): CardDrawResult => {
  const points = [createPoint(input, 'opening', 0, input.openingHand)];
  for (let turn = 1; turn <= input.throughTurn; turn += 1) {
    const cardsSeen = Math.min(input.deckSize, input.openingHand + input.drawsPerTurn * turn);
    points.push(createPoint(input, 'turn', turn, cardsSeen));
  }
  const openingPoint = points[0] as DrawOddsPoint;
  const finalPoint = points[points.length - 1] as DrawOddsPoint;
  return {
    points,
    finalProbability: finalPoint.probability,
    openingProbability: openingPoint.probability,
    expectedCopiesAtFinal: finalPoint.expectedCopies,
  };
};
