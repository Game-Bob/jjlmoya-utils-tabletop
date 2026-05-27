# Creating Tabletop Tools: Developer Skill & Workflow Guide

Follow this guide to build new tools in the tabletop utility library. This document outlines the technical standards, user experience (UX) requirements, SEO standards, and step-by-step translation workflow.

## Philosophy & Rigid Rules

### 1. Code Quality & Formatting
- **SOLID Principles**: Keep components small, focused, and reusable. Business logic and UI components must be separated.
- **NO Comments in Code**: Do not write any comments (`//` or `/* */`) in TypeScript, Astro, CSS, or JSON files.
- **NO Emojis**: Do not use emojis in code, UI text, logs, titles, metadata, or translations.
- **Perfect Centering (OCD)**: Keep inputs and results centered. For number inputs, hide browser-default spin buttons (`-webkit-inner-spin-button`) in CSS to prevent layout offset.

### 2. High-Dopamine User Experience
- **Interactive Outcomes**: Visual result banners must include breakdowns displaying custom geometric badges matching the exact shape and color gradient of each polyhedral die.
- **Epic Criticals & Fumbles**: 
  - Max rolls must trigger a scale-up rotation, bright border, and render a rotating gold star SVG symbol.
  - Min rolls (1s) must trigger a shiver-drop sag, desaturated danger glow, and render a shivering hazard exclamation SVG symbol.
- **Click Particles**: Spawning floating click particles (e.g. `+1` / `-1` selectors) at the click coordinates with text shadow glows and translate animations.
- **Micro-Animations**: All button presses, selectors, and adjustments must trigger springy hover and active scale animations.

### 3. Premium User-Facing SEO
- **No Programming Content**: Do not write code examples, programming explanations, or developer jargon in SEO text. Focus on gaming utility, odds, and probability calculations.
- **Rich Elements**: Build information architectures using structured components (`stats`, `table`, `tip`, `proscons`, `comparative`, `glossary`, `diagnostic`).
- **No Hyphens or Pipes in Titles**: Titles in SEO sections and metadata must never contain `-` or `|` separators.

---

## Workflow Steps

### Step 1: English-Only Implementation
1. Analyze existing tools to understand registered paths, file structures, and imports.
2. Build the tool files in English:
   - `src/tool/$TOOL_ID/index.ts`
   - `src/tool/$TOOL_ID/entry.ts`
   - `src/tool/$TOOL_ID/component.astro`
   - `src/tool/$TOOL_ID/seo.astro`
   - `src/tool/$TOOL_ID/bibliography.ts`
   - `src/tool/$TOOL_ID/bibliography.astro`
   - `src/tool/$TOOL_ID/i18n/en.ts`
   - `src/tool/$TOOL_ID/$TOOL_ID.css`
3. Map all i18n properties in `entry.ts` to `en.ts` temporarily.
4. Add the new tool entry to the registration files (`src/index.ts`, `src/entries.ts`, `src/tools.ts`, `src/category/index.ts`).

### Step 2: Component Refactoring & Clean Up
1. Enforce Stylelint compliance: Do not use literal colors (hex, rgb) inside CSS properties; declare them as CSS variables in `:root` and read them via `var()`.
2. Keep functions under 30 lines and source code files under 250 lines.

### Step 3: Verification & QA
1. Run linting to check for formatting and comment violations:
   `npm run lint`
2. Run unit tests to check math logic:
   `npm run test -- --testPathIgnorePatterns=i18n_coverage`
3. Verify that the dev server runs cleanly.

### Step 4: Multi-Language Translation
Once the English tool is validated, translate the content to the 14 supported locales:
- Locales: `de`, `es`, `fr`, `id`, `it`, `ja`, `ko`, `nl`, `pl`, `pt`, `ru`, `sv`, `tr`, `zh`.
- **Slug Localization Rules**:
  - For East Asian locales (`ja`, `ko`, `zh`), the slug must be identical to the English slug.
  - For all other locales, translate and localize the slug to its language.
- **Separators Validation**: Double check that no titles in the translated files contain `-` or `|`.
- Register the loaders for the new locales in `entry.ts`.

### Step 5: Final Verification
Run the complete lint and test commands to verify all locales are fully compliant:
- `npm run lint`
- `npm run test`
