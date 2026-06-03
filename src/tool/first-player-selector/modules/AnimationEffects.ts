import type { ContactPoint, Particle, SelectionState } from '../types';

export class AnimationEffects {
  private particles: Particle[] = [];
  private pulsePhase = 0;

  public spawnCelebration(x: number, y: number, color: string): void {
    this.particles = [];
    for (let i = 0; i < 80; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 8;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: 2 + Math.random() * 4,
        color,
        alpha: 1
      });
    }
  }

  public updateAndDraw(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    contacts: ContactPoint[],
    state: SelectionState,
    progress: number,
    wheelAngle: number,
    centroid: { x: number; y: number },
    isLightMode = false
  ): void {
    ctx.clearRect(0, 0, width, height);

    this.pulsePhase = (this.pulsePhase + 0.05) % (Math.PI * 2);

    if (contacts.length >= 2 && state !== 'celebration' && state !== 'selecting') {
      ctx.beginPath();
      ctx.strokeStyle = isLightMode ? 'rgba(15, 23, 42, 0.08)' : 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 2;
      for (let i = 0; i < contacts.length; i++) {
        for (let j = i + 1; j < contacts.length; j++) {
          ctx.moveTo(contacts[i].x, contacts[i].y);
          ctx.lineTo(contacts[j].x, contacts[j].y);
        }
      }
      ctx.stroke();
    }

    if (state === 'selecting' || (state === 'celebration' && centroid.x !== 0)) {
      this.drawRoulette(ctx, contacts, wheelAngle, centroid, state, isLightMode);
    }

    contacts.forEach((c) => {
      this.drawContact(ctx, c, state, progress, isLightMode);
    });

    this.drawParticles(ctx);
  }

  private drawContact(
    ctx: CanvasRenderingContext2D,
    c: ContactPoint,
    state: SelectionState,
    progress: number,
    isLightMode: boolean
  ): void {
    const isWinner = c.isWinner;
    const isCelebration = state === 'celebration';

    if (isCelebration && !isWinner) {
      ctx.save();
      ctx.globalAlpha = 0.15;
    }

    const baseRadius = 45;
    const pulseOffset = Math.sin(this.pulsePhase) * 4;
    const currentRadius = baseRadius + (isWinner ? pulseOffset * 2 : pulseOffset);

    ctx.beginPath();
    ctx.arc(c.x, c.y, currentRadius, 0, Math.PI * 2);
    ctx.fillStyle = c.color;
    ctx.shadowBlur = isWinner ? 30 : 15;
    ctx.shadowColor = c.color;
    ctx.fill();
    ctx.shadowBlur = 0;

    ctx.beginPath();
    ctx.arc(c.x, c.y, currentRadius - 8, 0, Math.PI * 2);
    ctx.fillStyle = isLightMode ? 'rgba(248, 250, 252, 0.95)' : 'rgba(15, 23, 42, 0.85)';
    ctx.fill();

    if (state === 'countdown' && !isCelebration) {
      const countdownRadius = currentRadius + 8;
      ctx.beginPath();
      ctx.arc(c.x, c.y, countdownRadius, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * progress);
      ctx.strokeStyle = isLightMode ? '#0f172a' : '#FFFFFF';
      ctx.lineWidth = 4;
      ctx.stroke();
    }

    if (isWinner && isCelebration) {
      ctx.beginPath();
      ctx.arc(c.x, c.y, currentRadius + 12, 0, Math.PI * 2);
      ctx.strokeStyle = c.color;
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    if (isCelebration && !isWinner) {
      ctx.restore();
    }
  }

  private drawRoulette(
    ctx: CanvasRenderingContext2D,
    contacts: ContactPoint[],
    wheelAngle: number,
    centroid: { x: number; y: number },
    state: SelectionState,
    isLightMode: boolean
  ): void {
    if (contacts.length === 0) return;

    const outerRadius = 160;
    const innerRadius = 30;

    ctx.save();
    ctx.translate(centroid.x, centroid.y);
    ctx.rotate(wheelAngle);

    const numSectors = contacts.length;
    const sectorAngle = (Math.PI * 2) / numSectors;

    for (let i = 0; i < numSectors; i++) {
      const startA = i * sectorAngle;
      const endA = startA + sectorAngle;
      const contact = contacts[i];

      if (state === 'celebration' && !contact.isWinner) {
        ctx.globalAlpha = 0.15;
      } else {
        ctx.globalAlpha = 0.7;
      }

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, outerRadius, startA, endA);
      ctx.closePath();
      ctx.fillStyle = contact.color;
      ctx.fill();

      ctx.globalAlpha = 1.0;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(Math.cos(startA) * outerRadius, Math.sin(startA) * outerRadius);
      ctx.strokeStyle = isLightMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(15, 23, 42, 0.5)';
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    ctx.beginPath();
    ctx.arc(0, 0, innerRadius, 0, Math.PI * 2);
    ctx.fillStyle = isLightMode ? '#F8FAFC' : '#0F172A';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(0, 0, innerRadius, 0, Math.PI * 2);
    ctx.strokeStyle = isLightMode ? 'rgba(15, 23, 42, 0.1)' : 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.restore();

    ctx.beginPath();
    ctx.moveTo(centroid.x, centroid.y - outerRadius - 15);
    ctx.lineTo(centroid.x - 10, centroid.y - outerRadius);
    ctx.lineTo(centroid.x + 10, centroid.y - outerRadius);
    ctx.closePath();
    ctx.fillStyle = isLightMode ? '#0f172a' : '#FFFFFF';
    ctx.shadowBlur = 10;
    ctx.shadowColor = isLightMode ? '#0f172a' : '#FFFFFF';
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  private drawParticles(ctx: CanvasRenderingContext2D): void {
    this.particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color;
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;

      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.96;
      p.vy *= 0.96;
      p.alpha -= 0.015;
    });

    this.particles = this.particles.filter((p) => p.alpha > 0);
  }
}
