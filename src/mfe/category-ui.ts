import type { KnownLocale } from '../types';

export interface CategoryUi {
  useTool: string;
}

export const CATEGORY_UI: Record<KnownLocale, CategoryUi> = {
  es: { useTool: 'Usar herramienta' },
  en: { useTool: 'Use tool' },
  fr: { useTool: "Utiliser l'outil" },
  de: { useTool: 'Werkzeug verwenden' },
  it: { useTool: 'Usa lo strumento' },
  pt: { useTool: 'Usar ferramenta' },
  nl: { useTool: 'Tool gebruiken' },
  sv: { useTool: 'Använd verktyget' },
  pl: { useTool: 'Użyj narzędzia' },
  id: { useTool: 'Gunakan alat' },
  tr: { useTool: 'Aracı kullan' },
  ru: { useTool: 'Использовать инструмент' },
  ja: { useTool: 'ツールを使う' },
  ko: { useTool: '도구 사용' },
  zh: { useTool: '使用工具' },
};

export const getCategoryUi = (locale: KnownLocale): CategoryUi => CATEGORY_UI[locale];
