import type { ToolDefinition } from '../../types';
import { cardDrawOddsCalculator } from './entry';

export * from './entry';

export const CARD_DRAW_ODDS_CALCULATOR_TOOL: ToolDefinition = {
  entry: cardDrawOddsCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
