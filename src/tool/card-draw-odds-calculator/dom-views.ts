import type { CardDrawOddsUI } from './ui';
import type { CardDrawInput, CardDrawResult, DrawOddsPoint } from './logic';

const getLocale = (): string => document.documentElement.lang || 'en';

const formatPercent = (value: number): string => new Intl.NumberFormat(getLocale(), {
  style: 'percent',
  maximumFractionDigits: 1,
}).format(value);

const formatCopies = (value: number): string => new Intl.NumberFormat(getLocale(), {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}).format(value);

const createElement = <T extends keyof HTMLElementTagNameMap>(tag: T, className?: string): HTMLElementTagNameMap[T] => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  return element;
};

const renderCardFan = (container: HTMLElement, result: CardDrawResult): void => {
  container.replaceChildren();
  const fan = createElement('div', 'card-fan');
  const visibleCards = 11;
  for (let index = 0; index < visibleCards; index += 1) {
    const card = createElement('span', index === 5 ? 'fan-card fan-card-target' : 'fan-card');
    card.style.setProperty('--fan-index', String(index));
    fan.append(card);
  }
  const marker = createElement('div', 'fan-marker');
  marker.textContent = formatPercent(result.finalProbability);
  fan.append(marker);
  container.append(fan);
};

const renderTimelinePoint = (point: DrawOddsPoint, input: CardDrawInput, ui: CardDrawOddsUI): HTMLElement => {
  const row = createElement('div', 'timeline-row');
  const heading = createElement('div', 'timeline-heading');
  const title = createElement('span', 'timeline-title');
  title.textContent = point.stage === 'opening' ? ui.openingHandStage : `${ui.turnLabel} ${point.turn}`;
  const cards = createElement('span', 'timeline-cards');
  cards.textContent = `${ui.cardsSeenLabel}: ${point.cardsSeen} ${ui.cardsLabel}`;
  heading.append(title, cards);
  const track = createElement('div', 'timeline-track');
  const fill = createElement('span', 'timeline-fill');
  fill.style.width = `${point.probability * 100}%`;
  track.append(fill);
  const result = createElement('strong', 'timeline-result');
  result.textContent = formatPercent(point.probability);
  row.append(heading, track, result);
  if (point.stage === 'opening' && input.mulliganMode === 'fullRedraw') row.dataset.mulligan = 'true';
  return row;
};

const renderTimeline = (container: HTMLElement, result: CardDrawResult, input: CardDrawInput, ui: CardDrawOddsUI): void => {
  container.replaceChildren();
  result.points.forEach((point) => container.append(renderTimelinePoint(point, input, ui)));
};

export const renderResult = (root: HTMLElement, result: CardDrawResult, input: CardDrawInput, ui: CardDrawOddsUI): void => {
  const finalProbability = root.querySelector<HTMLElement>('[data-final-probability]');
  const expectedCopies = root.querySelector<HTMLElement>('[data-expected-copies]');
  const note = root.querySelector<HTMLElement>('[data-mulligan-note]');
  const fan = root.querySelector<HTMLElement>('[data-card-fan]');
  const timeline = root.querySelector<HTMLElement>('[data-timeline]');
  if (!finalProbability || !expectedCopies || !note || !fan || !timeline) return;
  finalProbability.textContent = formatPercent(result.finalProbability);
  expectedCopies.textContent = `${formatCopies(result.expectedCopiesAtFinal)} ${ui.copyLabel}`;
  note.textContent = input.mulliganMode === 'fullRedraw' ? ui.fullRedrawNote : ui.noMulliganNote;
  renderCardFan(fan, result);
  renderTimeline(timeline, result, input, ui);
};

export const renderError = (root: HTMLElement, message: string): void => {
  const error = root.querySelector<HTMLElement>('[data-validation-error]');
  const result = root.querySelector<HTMLElement>('[data-result-content]');
  if (!error || !result) return;
  error.textContent = message;
  error.hidden = false;
  result.hidden = true;
};

export const clearError = (root: HTMLElement): void => {
  const error = root.querySelector<HTMLElement>('[data-validation-error]');
  const result = root.querySelector<HTMLElement>('[data-result-content]');
  if (!error || !result) return;
  error.hidden = true;
  result.hidden = false;
};
