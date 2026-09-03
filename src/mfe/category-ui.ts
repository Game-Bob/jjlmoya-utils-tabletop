import type { KnownLocale } from '../types';

export interface CategoryUi {
  useTool: string;
  openTool: string;
}

export const CATEGORY_UI: Record<KnownLocale, CategoryUi> = {
  es: { useTool: 'Usar herramienta', openTool: 'Abrir herramienta' },
  en: { useTool: 'Use tool', openTool: 'Open tool' },
  fr: { useTool: "Utiliser l'outil", openTool: "Ouvrir l'outil" },
  de: { useTool: 'Werkzeug verwenden', openTool: 'Werkzeug öffnen' },
  it: { useTool: 'Usa lo strumento', openTool: 'Apri lo strumento' },
  pt: { useTool: 'Usar ferramenta', openTool: 'Abrir ferramenta' },
  nl: { useTool: 'Tool gebruiken', openTool: 'Tool openen' },
  sv: { useTool: 'Använd verktyget', openTool: 'Öppna verktyget' },
  pl: { useTool: 'Użyj narzędzia', openTool: 'Otwórz narzędzie' },
  id: { useTool: 'Gunakan alat', openTool: 'Buka alat' },
  tr: { useTool: 'Aracı kullan', openTool: 'Aracı aç' },
  ru: { useTool: 'Использовать инструмент', openTool: 'Открыть инструмент' },
  ja: { useTool: 'ツールを使う', openTool: 'ツールを開く' },
  ko: { useTool: '도구 사용', openTool: '도구 열기' },
  zh: { useTool: '使用工具', openTool: '打开工具' },
};

export const getCategoryUi = (locale: KnownLocale): CategoryUi => CATEGORY_UI[locale];
