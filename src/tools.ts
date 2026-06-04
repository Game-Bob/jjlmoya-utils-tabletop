export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { DICE_ROLLER_SIMULATOR_TOOL } from './tool/dice-roller-simulator';
import { BOARD_GAME_TIMER_TOOL } from './tool/board-game-timer';
import { FIRST_PLAYER_SELECTOR_TOOL } from './tool/first-player-selector';
import { SCORE_TRACKER_TOOL } from './tool/score-tracker';
import { INITIATIVE_TRACKER_TOOL } from './tool/rpg-initiative-tracker';
import { FANTASY_RUNES_TRANSLATOR_TOOL } from './tool/fantasy-runes-translator';
import { DECISION_WHEEL_TOOL } from './tool/decision-wheel';
import { INVESTIGATION_BOARD_TOOL } from './tool/investigation-board';

export const ALL_TOOLS: ToolDefinition[] = [
  DICE_ROLLER_SIMULATOR_TOOL,
  BOARD_GAME_TIMER_TOOL,
  FIRST_PLAYER_SELECTOR_TOOL,
  SCORE_TRACKER_TOOL,
  INITIATIVE_TRACKER_TOOL,
  FANTASY_RUNES_TRANSLATOR_TOOL,
  DECISION_WHEEL_TOOL,
  INVESTIGATION_BOARD_TOOL,
];

