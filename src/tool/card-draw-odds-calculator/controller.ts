import { calculateCardDrawOdds, DEFAULT_INPUT, PRESETS, type CardDrawInput, type MulliganMode } from './logic';
import { clearError, renderError, renderResult } from './dom-views';
import { evaluateInput, type InputErrorKey } from './evaluator';
import { loadCardDrawInput, saveCardDrawInput } from './storage';
import type { CardDrawOddsUI } from './ui';

type InputKey = 'deckSize' | 'targetCopies' | 'openingHand' | 'drawsPerTurn' | 'throughTurn';

const readUi = (root: HTMLElement): CardDrawOddsUI => JSON.parse(root.dataset.ui ?? '{}') as CardDrawOddsUI;

const errorUiKey: Record<InputErrorKey, keyof CardDrawOddsUI> = {
  invalidDeck: 'invalidDeck',
  invalidCopies: 'invalidCopies',
  invalidHand: 'invalidHand',
  invalidDraws: 'invalidDraws',
  invalidTurns: 'invalidTurns',
};

const getInputs = (root: HTMLElement): NodeListOf<HTMLInputElement> => root.querySelectorAll<HTMLInputElement>('input[data-input-key]');

const readInput = (root: HTMLElement): CardDrawInput => {
  const values = {} as Record<InputKey, number>;
  getInputs(root).forEach((element) => {
    values[element.dataset.inputKey as InputKey] = Number(element.value);
  });
  const mulligan = root.querySelector<HTMLElement>('[data-select-key="mulliganMode"]');
  return { ...values, mulliganMode: (mulligan?.dataset.value ?? 'fullRedraw') as MulliganMode };
};

const writeInput = (root: HTMLElement, input: CardDrawInput): void => {
  getInputs(root).forEach((element) => {
    const key = element.dataset.inputKey as InputKey;
    element.value = String(input[key]);
  });
  setSelectValue(root, 'mulliganMode', input.mulliganMode);
};

const setSelectValue = (root: HTMLElement, key: string, value: string): void => {
  const select = root.querySelector<HTMLElement>(`[data-select-key="${key}"]`);
  if (!select) return;
  select.dataset.value = value;
  const option = select.querySelector<HTMLElement>(`[data-option-value="${value}"]`);
  const trigger = select.querySelector<HTMLButtonElement>('[data-select-trigger]');
  if (option && trigger) trigger.textContent = option.textContent;
  select.querySelectorAll<HTMLElement>('[data-option-value]').forEach((item) => {
    item.setAttribute('aria-selected', String(item === option));
  });
  select.querySelector<HTMLElement>('[data-select-menu]')?.setAttribute('hidden', '');
  trigger?.setAttribute('aria-expanded', 'false');
};

const applyPreset = (root: HTMLElement, preset: string): void => {
  if (!PRESETS[preset]) return;
  writeInput(root, { ...readInput(root), ...PRESETS[preset] });
  setSelectValue(root, 'preset', preset);
};

const update = (root: HTMLElement): void => {
  const input = readInput(root);
  const evaluation = evaluateInput(input);
  if (!evaluation.valid) {
    const ui = readUi(root);
    renderError(root, evaluation.errorKey ? (ui[errorUiKey[evaluation.errorKey]] ?? ui.invalidInput) : ui.invalidInput);
    return;
  }
  clearError(root);
  saveCardDrawInput(input);
  renderResult(root, calculateCardDrawOdds(input), input, readUi(root));
};

const bindSelect = (root: HTMLElement, select: HTMLElement): void => {
  const trigger = select.querySelector<HTMLButtonElement>('[data-select-trigger]');
  const menu = select.querySelector<HTMLElement>('[data-select-menu]');
  if (!trigger || !menu) return;
  trigger.addEventListener('click', () => {
    const isOpen = !menu.hasAttribute('hidden');
    menu.toggleAttribute('hidden', isOpen);
    trigger.setAttribute('aria-expanded', String(!isOpen));
  });
  menu.querySelectorAll<HTMLElement>('[data-option-value]').forEach((option) => {
    option.addEventListener('click', () => {
      setSelectValue(root, select.dataset.selectKey ?? '', option.dataset.optionValue ?? '');
      update(root);
    });
  });
};

const bindEvents = (root: HTMLElement): void => {
  root.querySelectorAll<HTMLElement>('[data-select-key]').forEach((select) => bindSelect(root, select));
  root.querySelectorAll<HTMLInputElement>('input[data-input-key]').forEach((input) => input.addEventListener('input', () => {
    setSelectValue(root, 'preset', 'custom');
    update(root);
  }));
  root.querySelectorAll<HTMLElement>('[data-option-value]').forEach((option) => {
    if (option.closest('[data-select-key="mulliganMode"]')) return;
    option.addEventListener('click', () => applyPreset(root, option.dataset.optionValue ?? ''));
  });
  root.querySelector('form')?.addEventListener('submit', (event) => event.preventDefault());
  document.addEventListener('click', (event) => {
    if (event.target instanceof Node && root.contains(event.target)) return;
    root.querySelectorAll<HTMLElement>('[data-select-menu]').forEach((menu) => menu.setAttribute('hidden', ''));
    root.querySelectorAll<HTMLButtonElement>('[data-select-trigger]').forEach((trigger) => trigger.setAttribute('aria-expanded', 'false'));
  });
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    root.querySelectorAll<HTMLElement>('[data-select-menu]').forEach((menu) => menu.setAttribute('hidden', ''));
    root.querySelectorAll<HTMLButtonElement>('[data-select-trigger]').forEach((trigger) => trigger.setAttribute('aria-expanded', 'false'));
  });
};

const start = (root: HTMLElement): void => {
  writeInput(root, { ...DEFAULT_INPUT, ...loadCardDrawInput() });
  setSelectValue(root, 'preset', 'custom');
  bindEvents(root);
  update(root);
};

document.querySelectorAll<HTMLElement>('[data-card-draw-tool]').forEach(start);
