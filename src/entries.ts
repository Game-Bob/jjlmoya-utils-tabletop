export { diceRollerSimulator } from './tool/dice-roller-simulator/entry';
export type { DiceRollerUI, DiceRollerLocaleContent } from './tool/dice-roller-simulator/entry';
export { boardGameTimer } from './tool/board-game-timer/entry';
export type { BoardGameTimerUI, BoardGameTimerLocaleContent } from './tool/board-game-timer/entry';
export { firstPlayerSelector } from './tool/first-player-selector/entry';
export type { FirstPlayerSelectorUI, FirstPlayerSelectorLocaleContent } from './tool/first-player-selector/entry';
export { scoreTracker } from './tool/score-tracker/entry';
export type { ScoreTrackerUI, ScoreTrackerLocaleContent } from './tool/score-tracker/entry';
export { initiativeTracker } from './tool/rpg-initiative-tracker/entry';
export type { InitiativeTrackerUI, InitiativeTrackerLocaleContent } from './tool/rpg-initiative-tracker/entry';
export { fantasyRunesTranslator } from './tool/fantasy-runes-translator/entry';
export type { FantasyRunesTranslatorUI, FantasyRunesTranslatorLocaleContent } from './tool/fantasy-runes-translator/entry';
export { tabletopCategory } from './category';

import { diceRollerSimulator } from './tool/dice-roller-simulator/entry';
import { boardGameTimer } from './tool/board-game-timer/entry';
import { firstPlayerSelector } from './tool/first-player-selector/entry';
import { scoreTracker } from './tool/score-tracker/entry';
import { initiativeTracker } from './tool/rpg-initiative-tracker/entry';
import { fantasyRunesTranslator } from './tool/fantasy-runes-translator/entry';
import { decisionWheel } from './tool/decision-wheel/entry';

export const ALL_ENTRIES = [diceRollerSimulator, boardGameTimer, firstPlayerSelector, scoreTracker, initiativeTracker, fantasyRunesTranslator, decisionWheel];
