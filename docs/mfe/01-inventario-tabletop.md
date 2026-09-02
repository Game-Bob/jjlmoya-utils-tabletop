# Inventario real de `jjlmoya-utils-tabletop`

Inventario obtenido del commit base `98a77f5` (`1.36.0`). El único cambio posterior al commit base es este conjunto de documentos del PoC.

## 1. Resumen

| Elemento | Estado observado |
|---|---:|
| Tools en `src/tool/` | 17 |
| Entries en `ALL_ENTRIES` | 17 |
| Tools en `ALL_TOOLS` | 17 |
| Tools en `tabletopCategory.tools` | 8 |
| Locales de categoría | 15 |
| Locales por tool | 15 en las 17 tools |
| Páginas Astro actuales | 3 archivos de ruta |
| Assets raster/vectoriales propios localizados | Ninguno en `public/` ni `src/` |
| Configuración de deploy detectada | No hay `wrangler`, Pages ni configuración de hosting en el repo |
| Archivos tracked en el commit base | 629 |

Los 15 locales observados son:

```text
de, en, es, fr, id, it, ja, ko, nl, pl, pt, ru, sv, tr, zh
```

El tipo `KnownLocale` admite más códigos (`ar`, `da`, `fi`, `nb`), pero esos cuatro no aparecen en los loaders de la categoría ni en las tools inventariadas. El codemod no debe generar páginas para un locale que no tenga contenido.

## 2. Catálogo de tools

### 2.1. Tools incluidas en `tabletopCategory.tools`

Estas son las ocho tools que el registro de categoría expone actualmente:

1. `dice-roller-simulator`
2. `card-draw-odds-calculator`
3. `board-game-timer`
4. `dungeon-map-generator`
5. `encounter-difficulty-calculator`
6. `token-stamp-studio`
7. `mus-scoreboard`
8. `rpg-settlement-exploration-map-generator`

### 2.2. Tools incluidas en `ALL_TOOLS`/`ALL_ENTRIES`

El runtime general registra estas 17:

1. `dice-roller-simulator`
2. `board-game-timer`
3. `first-player-selector`
4. `score-tracker`
5. `rpg-initiative-tracker`
6. `fantasy-runes-translator`
7. `decision-wheel`
8. `investigation-board`
9. `lunar-tide-tracker`
10. `hidden-role-dealer`
11. `scatter-direction-selector`
12. `dungeon-map-generator`
13. `encounter-difficulty-calculator`
14. `token-stamp-studio`
15. `mus-scoreboard`
16. `rpg-settlement-exploration-map-generator`
17. `card-draw-odds-calculator`

### 2.3. Discrepancia que bloquea decisiones de rutas

Hay nueve tools presentes en `ALL_TOOLS` pero ausentes de `tabletopCategory.tools`:

- `first-player-selector`
- `score-tracker`
- `rpg-initiative-tracker`
- `fantasy-runes-translator`
- `decision-wheel`
- `investigation-board`
- `lunar-tide-tracker`
- `hidden-role-dealer`
- `scatter-direction-selector`

No se modifica este registro como parte del inventario. Antes de extraer el MFE hay que decidir cuál de estas dos semánticas es la correcta:

- `ALL_TOOLS` representa todo lo desplegable y la categoría representa solo una selección visible/curada.
- La categoría debería contener las 17 tools y está incompleta.

El resultado cambia el listado de la vertical, la navegación lateral, los enlaces relacionados, el sitemap y el número de rutas. El codemod debe convertir esta diferencia en una validación explícita.

## 3. Estructura repetida de cada tool

La estructura común observada es:

```text
src/tool/{english-slug}/
├── index.ts
├── entry.ts
├── component.astro
├── {english-slug}.css                 # salvo excepciones a revisar
├── seo.astro
├── bibliography.astro                 # cuando aplica
├── bibliography.ts                    # cuando aplica
├── i18n/
│   ├── de.ts
│   ├── en.ts
│   ├── es.ts
│   ├── fr.ts
│   ├── id.ts
│   ├── it.ts
│   ├── ja.ts
│   ├── ko.ts
│   ├── nl.ts
│   ├── pl.ts
│   ├── pt.ts
│   ├── ru.ts
│   ├── sv.ts
│   ├── tr.ts
│   └── zh.ts
└── lógica, tipos y componentes auxiliares propios
```

La traducción y el SEO son datos de la tool. El codemod debe mover/conectar estos archivos sin sustituir su contenido.

## 4. Rutas actuales del paquete

Estas son rutas de preview del paquete y no deben confundirse con las URLs públicas de producción. La integración final debe usar el contrato del documento `00-inventario-y-contrato-del-poc.md` y renderizar el layout productivo de `website`/`jjlmoya`.

### `src/pages/index.astro`

La entrada raíz redirige a `/es`. Este comportamiento debe conservarse o convertirse en un redirect equivalente en el host final. La decisión depende de si el MFE se monta en una ruta con namespace o en la raíz de un dominio dedicado.

### `src/pages/[locale].astro`

En el commit base `98a77f5`, la portada generaba únicamente:

```ts
const locales = ['en', 'es', 'fr'];
```

Eso era una limitación heredada del preview y no es aceptable para producción: habría dejado 12 idiomas fuera. El PoC la corrige para derivar los locales directamente de `tabletopCategory.i18n`, que contiene los 15 loaders reales. Así, la portada genera `de`, `en`, `es`, `fr`, `id`, `it`, `ja`, `ko`, `nl`, `pl`, `pt`, `ru`, `sv`, `tr` y `zh`.

Para el listado sigue usando `ALL_TOOLS`, no `tabletopCategory.tools`. La diferencia entre el catálogo completo y el catálogo curado permanece como decisión pendiente independiente.

### `src/pages/[locale]/[slug].astro`

La página individual recorre `ALL_TOOLS` y genera una ruta por cada loader disponible. En consecuencia, la matriz esperada actualmente es:

```text
17 tools × 15 locales = 255 rutas de herramienta
```

La cifra debe confirmarse con el build real, porque los loaders pueden tener excepciones. La página también:

- resuelve el slug de cada locale;
- calcula el slug inglés para localizar el CSS;
- crea navegación entre todas las tools;
- carga `UtilityHeader`, `FAQSection`, `Bibliography` y `SEORenderer` desde `@jjlmoya/utils-shared`;
- inyecta los schemas de la traducción;
- sigue usando `PreviewLayout`; esto debe desaparecer del flujo productivo del PoC.

El equivalente productivo observado es `RuntimeCategoryRoute` + `Layout` para la categoría y `RuntimeUtilityRoute` + `LibraryUtilityLayout` + `LayoutUtility` para la tool. En `jjlmoya`, la tool resuelve el loader español y publica `/utilidades/{slug-español}/`.

## 5. Registries y exports

| Archivo | Responsabilidad |
|---|---|
| `src/data.ts` | Reexporta categoría y tipos públicos |
| `src/index.ts` | Reexporta `ALL_ENTRIES` |
| `src/entries.ts` | Construye `ALL_ENTRIES` con las 17 entries |
| `src/tools.ts` | Construye `ALL_TOOLS` con runtime y componentes |
| `src/category/index.ts` | Construye `tabletopCategory` con 8 tools y 15 locales |
| `src/types.ts` | Define locales, contenido, entries y definición de tool |

El PoC debe decidir si el MFE consume `tabletopCategory`, `ALL_TOOLS` o una nueva API de catálogo que distinga claramente:

- tools desplegables;
- tools indexables;
- tools visibles en el listado;
- tools relacionadas.

Mezclar estos cuatro conceptos es una fuente probable de rutas o enlaces incorrectos.

## 6. Localización

Cada tool tiene 15 archivos de i18n y la categoría tiene 15 loaders. El inventario no ha detectado `ar`, `da`, `fi` ni `nb` como contenido real, aunque el tipo común los permita.

Para cada tool habrá que extraer una matriz con:

```text
tool id
locale
slug
title
description
SEO sections
FAQ count
bibliography count
schema types
```

La matriz será la fuente para generar rutas, alternates y pruebas. No se deben derivar los `hreflang` desde el union type de TypeScript.

## 7. SEO, links y assets a inspeccionar en el siguiente paso

El paquete tiene `seo.astro`, schemas, FAQ y bibliografía dentro de cada tool, pero no tiene todavía un layout de producción autónomo. En el siguiente documento habrá que cruzar cada campo con:

- `website/src/components/common/SEO.astro`;
- `website/src/components/common/OpenGraph.astro`;
- `website/src/layouts/LayoutUtility.astro`;
- `website/src/components/utilities/LibraryUtilityLayout.astro`;
- el equivalente que se confirme en `jjlmoya`.

No hay assets de imagen localizados en el repo de Tabletop. Las imágenes Open Graph compartidas deben seguir referenciándose desde el repo principal del host, con una configuración de base URL y una prueba HTTP. No se debe inventar un nombre de imagen por slug hasta comprobar el mapa real de producción.

## 8. Build y despliegue observados

`package.json` contiene `astro build`, `preview`, `check`, `lint` y `test`. `astro.config.mjs` solo configura `astro-icon`, servidor de desarrollo y polling de Vite. No hay configuración de Pages/Wrangler ni de un MFE productivo.

Por ello, el primer PoC debe añadir la infraestructura mínima de build aislada y medir:

1. número de archivos generados;
2. tamaño total del output;
3. rutas generadas;
4. assets duplicados;
5. dependencias que siguen apuntando al catálogo monolítico;
6. posibilidad de consumir el output desde ambos hosts.

## 9. Decisiones que no se pueden automatizar todavía

Antes del codemod hay que resolver explícitamente:

1. Si se publican las 17 tools o solo las 8 de la categoría.
2. Si la portada final tendrá 15 locales o solo los locales indexables por host.
3. El namespace exacto de las URLs finales.
4. Qué URLs de producción deben conservarse mediante redirects.
5. Si el MFE se integra como runtime/paquete Astro o como artefacto desplegado.
6. Qué componentes del layout se extraen al MFE y cuáles siguen en el host.
7. Qué Open Graph es compartido y cuál es específico de la vertical.
8. Cómo se genera sitemap por MFE y cómo se compone el sitemap global.

Estas decisiones deben aparecer en el contrato antes de escribir transformaciones automáticas.

## 10. Siguiente salida obligatoria

El siguiente documento debe ser `docs/mfe/02-contrato-mfe.md` y debe contener:

- contrato de entrada/salida del MFE;
- configuración de los dos hosts;
- función única para resolver URLs;
- política de canonical y alternates;
- política de Open Graph/assets;
- frontera exacta entre host y vertical;
- forma de integrar header/footer desde Identity;
- estrategia de redirects, sitemap y robots;
- tests que deben ejecutarse antes de montar Tabletop en cualquiera de los dos hosts.
