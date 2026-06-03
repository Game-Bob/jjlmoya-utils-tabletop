export { diceRollerSimulator } from './tool/dice-roller-simulator/entry';
export type { DiceRollerUI, DiceRollerLocaleContent } from './tool/dice-roller-simulator/entry';
export { boardGameTimer } from './tool/board-game-timer/entry';
export type { BoardGameTimerUI, BoardGameTimerLocaleContent } from './tool/board-game-timer/entry';
export { firstPlayerSelector } from './tool/first-player-selector/entry';
export type { FirstPlayerSelectorUI, FirstPlayerSelectorLocaleContent } from './tool/first-player-selector/entry';
export { tabletopCategory } from './category';

import { diceRollerSimulator } from './tool/dice-roller-simulator/entry';
import { boardGameTimer } from './tool/board-game-timer/entry';
import { firstPlayerSelector } from './tool/first-player-selector/entry';

export const ALL_ENTRIES = [diceRollerSimulator, boardGameTimer, firstPlayerSelector];
