import type { CardDrawInput } from './logic';

export type InputErrorKey = 'invalidDeck' | 'invalidCopies' | 'invalidHand' | 'invalidDraws' | 'invalidTurns';

export interface InputEvaluation {
  valid: boolean;
  errorKey?: InputErrorKey;
}

const invalidDeckSize = (input: CardDrawInput): boolean => !Number.isInteger(input.deckSize) || input.deckSize < 1;

const invalidCopies = (input: CardDrawInput): boolean => !Number.isInteger(input.targetCopies) || input.targetCopies < 0 || input.targetCopies > input.deckSize;

const invalidOpeningHand = (input: CardDrawInput): boolean => !Number.isInteger(input.openingHand) || input.openingHand < 0 || input.openingHand > input.deckSize;

const invalidDrawRate = (input: CardDrawInput): boolean => !Number.isInteger(input.drawsPerTurn) || input.drawsPerTurn < 0;

const invalidTurn = (input: CardDrawInput): boolean => !Number.isInteger(input.throughTurn) || input.throughTurn < 0 || input.throughTurn > 60;

export const evaluateInput = (input: CardDrawInput): InputEvaluation => {
  const checks: [boolean, InputErrorKey][] = [
    [invalidDeckSize(input), 'invalidDeck'],
    [invalidCopies(input), 'invalidCopies'],
    [invalidOpeningHand(input), 'invalidHand'],
    [invalidDrawRate(input), 'invalidDraws'],
    [invalidTurn(input), 'invalidTurns'],
  ];
  const failure = checks.find(([invalid]) => invalid);
  return failure ? { valid: false, errorKey: failure[1] } : { valid: true };
};
