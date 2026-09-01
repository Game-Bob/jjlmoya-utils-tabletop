import type { CardDrawInput } from './logic';

const STORAGE_KEY = 'card-draw-odds-calculator-input';

export const loadCardDrawInput = (): Partial<CardDrawInput> => {
  if (typeof localStorage === 'undefined') return {};
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) as Partial<CardDrawInput> : {};
  } catch {
    return {};
  }
};

export const saveCardDrawInput = (input: CardDrawInput): void => {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  } catch {
    return;
  }
};
