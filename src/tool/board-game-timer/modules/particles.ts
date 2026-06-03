export function spawnParticle(options: { parent: HTMLElement; text: string; x: number; y: number; variant?: 'accent' | 'warning' | 'danger' | 'success' }) {
  const el = document.createElement('div');
  el.className = `timer-particle timer-particle-${options.variant ?? 'accent'}`;
  el.textContent = options.text;
  el.style.left = `${options.x}px`;
  el.style.top = `${options.y}px`;
  const container = options.parent.closest('.timer-player-card') || options.parent.closest('.timer-single-display') || options.parent.closest('.timer-main-card') || options.parent;
  container.appendChild(el);
  setTimeout(() => el.remove(), 900);
}

export function spawnTimerPop(parent: HTMLElement, text: string, variant: 'accent' | 'warning' | 'danger' | 'success' = 'accent') {
  const el = document.createElement('div');
  el.className = `timer-pop-burst timer-pop-${variant}`;
  el.textContent = text;
  parent.appendChild(el);
  setTimeout(() => el.remove(), 1200);
}

export function spawnExpiredBurst(parent: HTMLElement) {
  const symbols = ['!', '!!', '!!!', '!!'];
  const colors = ['#ef4444', '#dc2626', '#b91c1c', '#ef4444'];
  for (let i = 0; i < 8; i++) {
    const el = document.createElement('div');
    el.className = 'timer-expired-particle';
    el.textContent = symbols[i % symbols.length];
    const angle = (i / 8) * 360;
    const dist = 60 + Math.random() * 60;
    const rad = (angle * Math.PI) / 180;
    el.style.setProperty('--dx', `${Math.cos(rad) * dist}px`);
    el.style.setProperty('--dy', `${Math.sin(rad) * dist}px`);
    el.style.setProperty('--color', colors[i % colors.length]);
    el.style.left = '50%';
    el.style.top = '50%';
    parent.appendChild(el);
    setTimeout(() => el.remove(), 1000);
  }
}

export function spawnTurnBurst(parent: HTMLElement) {
  const symbols = ['>', '>>', '>>>'];
  for (let i = 0; i < 6; i++) {
    const el = document.createElement('div');
    el.className = 'timer-turn-particle';
    el.textContent = symbols[i % symbols.length];
    const angle = (i / 6) * 360 + 15;
    const dist = 40 + Math.random() * 40;
    const rad = (angle * Math.PI) / 180;
    el.style.setProperty('--dx', `${Math.cos(rad) * dist}px`);
    el.style.setProperty('--dy', `${Math.sin(rad) * dist}px`);
    el.style.left = '50%';
    el.style.top = '50%';
    parent.appendChild(el);
    setTimeout(() => el.remove(), 800);
  }
}
