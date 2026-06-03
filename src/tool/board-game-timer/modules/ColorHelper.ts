import type { PlayerColor } from '../types';

export function getLuminance(hex: string): number {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16) / 255;
  const g = parseInt(cleanHex.substring(2, 4), 16) / 255;
  const b = parseInt(cleanHex.substring(4, 6), 16) / 255;
  const a = [r, g, b].map(v => v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

export function getContrastColorForBackground(colorName: PlayerColor): string {
  const colorHexMap: Record<PlayerColor, string> = {
    blue: '#3b82f6',
    red: '#ef4444',
    green: '#22c55e',
    yellow: '#eab308',
    purple: '#a855f7',
    orange: '#f97316',
    teal: '#14b8a6',
    pink: '#ec4899'
  };
  const hex = colorHexMap[colorName] || '#3b82f6';
  const lum = getLuminance(hex);
  return lum > 0.3 ? '#0f172a' : '#ffffff';
}
