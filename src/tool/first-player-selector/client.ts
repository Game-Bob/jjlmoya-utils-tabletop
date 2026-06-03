import { TouchTracker } from './modules/TouchTracker';
import { SelectionEngine } from './modules/SelectionEngine';
import { AnimationEffects } from './modules/AnimationEffects';
import { SoundEffects } from './modules/SoundEffects';
import type { ContactPoint, SelectionState, SelectorMode } from './types';

const SOUND_ON_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg>`;

const SOUND_OFF_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`;

function init() {
  const container = document.querySelector('.selector-container[data-tool="first-player-selector"]') as HTMLElement;
  if (!container) return;

  const ui = JSON.parse(container.getAttribute('data-ui') || '{}');
  const canvas = document.getElementById('selector-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const btnModeFinger = document.getElementById('btn-mode-finger') as HTMLButtonElement;
  const btnModeWheel = document.getElementById('btn-mode-wheel') as HTMLButtonElement;
  const btnSound = document.getElementById('btn-sound') as HTMLButtonElement;
  const btnReset = document.getElementById('btn-reset') as HTMLButtonElement;
  const btnSpin = document.getElementById('btn-spin') as HTMLButtonElement;
  const btnClear = document.getElementById('btn-clear') as HTMLButtonElement;
  const wheelActions = document.getElementById('wheel-actions') as HTMLElement;

  const instructionsText = document.getElementById('instructions-text') as HTMLElement;
  const instructionsStatus = document.getElementById('instructions-status') as HTMLElement;

  let isSoundEnabled = true;

  const sound = new SoundEffects();
  const effects = new AnimationEffects();

  const engine = new SelectionEngine(
    (state) => handleStateChange(state),
    () => sound.playTick(),
    (winner) => handleWinner(winner),
    () => sound.playCountdown()
  );

  const tracker = new TouchTracker(canvas, (contacts) => {
    engine.setContacts(contacts);
  });

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx?.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  function handleStateChange(state: SelectionState) {
    if (state === 'idle') {
      instructionsText.style.display = 'block';
      instructionsText.textContent = ui.instructions;
      instructionsStatus.textContent = '';
      instructionsStatus.className = 'instructions-status';
    } else if (state === 'countdown') {
      instructionsText.style.display = 'none';
      instructionsStatus.textContent = '';
      instructionsStatus.className = 'instructions-status countdown';
    } else if (state === 'selecting') {
      instructionsText.style.display = 'none';
      instructionsStatus.textContent = '';
      instructionsStatus.className = 'instructions-status';
    } else if (state === 'celebration') {
      instructionsText.style.display = 'none';
      instructionsStatus.textContent = ui.winner;
      instructionsStatus.className = 'instructions-status celebration';
    }
  }

  function handleWinner(winner: ContactPoint) {
    sound.playWinner();
    effects.spawnCelebration(winner.x, winner.y, winner.color);
  }

  function updateMode(mode: SelectorMode) {
    tracker.setMode(mode);
    engine.setMode(mode);

    if (mode === 'finger') {
      btnModeFinger.classList.add('active');
      btnModeWheel.classList.remove('active');
      wheelActions.style.display = 'none';
    } else {
      btnModeFinger.classList.remove('active');
      btnModeWheel.classList.add('active');
      wheelActions.style.display = 'flex';
    }
  }

  btnModeFinger.addEventListener('click', () => updateMode('finger'));
  btnModeWheel.addEventListener('click', () => updateMode('wheel'));

  btnSound.addEventListener('click', () => {
    isSoundEnabled = !isSoundEnabled;
    sound.setMute(!isSoundEnabled);
    if (isSoundEnabled) {
      btnSound.classList.add('active');
      btnSound.classList.remove('muted');
      btnSound.innerHTML = SOUND_ON_SVG;
      btnSound.title = ui.soundOn;
    } else {
      btnSound.classList.remove('active');
      btnSound.classList.add('muted');
      btnSound.innerHTML = SOUND_OFF_SVG;
      btnSound.title = ui.soundOff;
    }
  });

  btnReset.addEventListener('click', () => {
    tracker.clear();
    engine.reset();
  });

  btnClear.addEventListener('click', () => {
    tracker.clear();
    engine.reset();
  });

  btnSpin.addEventListener('click', () => {
    engine.startWheelSelection();
  });

  let lastTime = performance.now();
  function loop(now: number) {
    const dt = now - lastTime;
    lastTime = now;

    engine.update(dt);

    const width = canvas.width / window.devicePixelRatio;
    const height = canvas.height / window.devicePixelRatio;

    const isLightMode = document.documentElement.classList.contains('theme-light');

    effects.updateAndDraw(
      ctx!,
      width,
      height,
      tracker.getContacts(),
      engine.getState(),
      engine.getCountdownProgress(),
      engine.getWheelAngle(),
      engine.getCentroid(),
      isLightMode
    );

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
