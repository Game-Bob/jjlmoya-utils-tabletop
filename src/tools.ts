export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { DICE_ROLLER_SIMULATOR_TOOL } from './tool/dice-roller-simulator';

export const ALL_TOOLS: ToolDefinition[] = [
  DICE_ROLLER_SIMULATOR_TOOL,
];
