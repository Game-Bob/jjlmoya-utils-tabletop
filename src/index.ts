export { tabletopCategory } from './category';
export const tabletopCategorySEO = () => import('./category/TabletopCategorySEO.astro').then((m) => m.default);

export { diceRollerSimulator, DICE_ROLLER_SIMULATOR_TOOL } from './tool/dice-roller-simulator';
export { boardGameTimer, BOARD_GAME_TIMER_TOOL } from './tool/board-game-timer';
export { fantasyRunesTranslator, FANTASY_RUNES_TRANSLATOR_TOOL } from './tool/fantasy-runes-translator';

export type {
  KnownLocale,
  FAQItem,
  BibliographyEntry,
  HowToStep,
  ToolLocaleContent,
  CategoryLocaleContent,
  LocaleLoader,
  LocaleMap,
  TabletopToolEntry,
  TabletopCategoryEntry,
  ToolDefinition,
} from './types';

export { ALL_ENTRIES, ALL_TOOLS } from './tools';
