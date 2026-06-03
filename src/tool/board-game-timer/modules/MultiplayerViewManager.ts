import type { GameState } from './GameState';
import type { PlayerConfig, TimerState } from '../types';
import { getContrastColorForBackground } from './ColorHelper';
import { formatTime } from './FormatHelper';

export class MultiplayerViewManager {
  private state: GameState;
  private multiPanel: HTMLElement;

  constructor(state: GameState) {
    this.state = state;
    this.multiPanel = document.getElementById('multiplayer-timer-panel') as HTMLElement;
    this.initEvents();
  }

  private initEvents() {
    document.getElementById('giant-next-turn-btn')?.addEventListener('click', () => this.handleGiantButtonClick());
  }

  private handleGiantButtonClick() {
    if (this.state.isPaused) return;
    this.state.sound.playTurn();
    const currPlayer = this.state.players[this.state.activePlayerIndex];
    this.state.stats.endTurn(currPlayer.id, this.state.roundNumber);
    this.state.activePlayerIndex = (this.state.activePlayerIndex + 1) % this.state.players.length;
    if (this.state.activePlayerIndex === 0) {
      this.state.roundNumber++;
      document.getElementById('multi-round-number')!.textContent = this.state.roundNumber.toString();
    }
    const nextPlayer = this.state.players[this.state.activePlayerIndex];
    this.state.engine.switchTurn(nextPlayer.id);
    this.state.stats.startTurn();
    this.update();
  }

  public initView() {
    this.multiPanel.style.display = 'flex';
    document.getElementById('multi-round-number')!.textContent = '1';
    const modeIndicator = document.getElementById('setting-mode') as HTMLSelectElement;
    document.getElementById('multi-mode-indicator')!.textContent = modeIndicator.value.toUpperCase();
    document.getElementById('multi-paused-overlay')!.style.display = 'none';
    this.renderGrid();
  }

  private renderGrid() {
    const grid = document.getElementById('multiplayer-players-grid') as HTMLElement;
    grid.innerHTML = '';
    this.state.players.forEach((p) => {
      const t = this.state.engine.getTimer(p.id);
      if (!t) return;
      grid.appendChild(this.createCard(p, t));
    });
    this.update();
  }

  private createCard(p: PlayerConfig, t: TimerState): HTMLElement {
    const card = document.createElement('div');
    card.className = `multi-player-card ${t.status}`;
    card.id = `multi-card-${p.id}`;
    card.style.setProperty('--color-timer-accent', `var(--color-${p.color})`);
    const pct = p.time > 0 ? (t.remaining / p.time) * 100 : 0;
    card.innerHTML = `
      <div class="multi-card-header">
        <span class="multi-card-name" style="color: var(--color-text-${p.color})">${p.name}</span>
        <span class="multi-card-rounds" id="rounds-val-${p.id}">Turns: ${t.roundsPlayed}</span>
      </div>
      <div class="multi-card-timer" id="timer-val-${p.id}">${formatTime(t.remaining)}</div>
      <div class="multi-card-progress">
        <div class="multi-card-fill" id="timer-fill-${p.id}" style="width: ${pct}%; background-color: var(--color-${p.color})"></div>
      </div>
      <div class="multi-card-actions">
        <button type="button" class="card-btn add-btn" data-id="${p.id}">+30s</button>
        <button type="button" class="card-btn sub-btn" data-id="${p.id}">-30s</button>
      </div>
    `;
    this.bindCardActions(card, p.id);
    return card;
  }

  private bindCardActions(card: HTMLElement, id: string) {
    card.querySelector('.add-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.state.engine.addTime(id, 30);
      this.update();
    });
    card.querySelector('.sub-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.state.engine.removeTime(id, 30);
      this.update();
    });
  }

  public update() {
    this.state.players.forEach((p, idx) => {
      const t = this.state.engine.getTimer(p.id);
      if (t) this.syncCard(p, t, idx);
    });
    const activePlayer = this.state.players[this.state.activePlayerIndex];
    if (activePlayer) {
      const nameEl = document.getElementById('giant-active-player-name');
      if (nameEl) nameEl.textContent = activePlayer.name;
      const giantBtn = document.getElementById('giant-next-turn-btn');
      if (giantBtn) {
        giantBtn.style.backgroundColor = `var(--color-${activePlayer.color})`;
        giantBtn.style.color = getContrastColorForBackground(activePlayer.color);
      }
    }
  }

  private syncCard(p: PlayerConfig, t: TimerState, idx: number) {
    const card = document.getElementById(`multi-card-${p.id}`);
    if (card) {
      card.className = `multi-player-card ${t.status}`;
      if (this.state.engine.activeTimerId === p.id) {
        card.classList.add('active');
        this.state.activePlayerIndex = idx;
      }
    }
    const timerVal = document.getElementById(`timer-val-${p.id}`);
    if (timerVal) timerVal.textContent = formatTime(t.remaining);
    const timerFill = document.getElementById(`timer-fill-${p.id}`) as HTMLElement;
    if (timerFill) {
      const pct = p.time > 0 ? (t.remaining / p.time) * 100 : 0;
      timerFill.style.width = `${pct}%`;
    }
    const roundsVal = document.getElementById(`rounds-val-${p.id}`);
    if (roundsVal) roundsVal.textContent = `Turns: ${t.roundsPlayed}`;
  }
}
