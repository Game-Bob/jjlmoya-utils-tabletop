export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { DICE_ROLLER_SIMULATOR_TOOL } from './tool/dice-roller-simulator';
import { BOARD_GAME_TIMER_TOOL } from './tool/board-game-timer';
import { FIRST_PLAYER_SELECTOR_TOOL } from './tool/first-player-selector';

export const ALL_TOOLS: ToolDefinition[] = [
  DICE_ROLLER_SIMULATOR_TOOL,
  BOARD_GAME_TIMER_TOOL,
  FIRST_PLAYER_SELECTOR_TOOL,
];
