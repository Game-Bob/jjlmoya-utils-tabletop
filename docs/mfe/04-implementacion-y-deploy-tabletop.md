# Implementación MFE de Tabletop

Este es el estado ejecutable del primer MFE de utilidades. Tabletop es la punta
de lanza para el codemod de las demás verticales.

## 1. Qué se ha convertido

La vertical ya no publica las rutas de preview `/{locale}/{slug}`. El build
estático genera el shell de producción con:

```text
ProductionPage
├── Identity Header
├── LanguageSheet con alternates
├── cuerpo de categoría o herramienta
├── Identity Footer
└── metadata SEO, canonical, hreflang, Open Graph y JSON-LD
```

Las rutas de herramienta conservan el orden productivo: breadcrumb, cabecera,
runtime, zoom, FAQ, SEO, bibliografía y relacionadas. Las rutas de categoría
renderizan la cabecera, la cuadrícula completa de tools y el SEO de categoría.

## 2. Matriz que debe permanecer completa

El build actual produce 271 páginas:

- 1 categoría española + 17 tools españolas;
- 14 categorías GameBob + 17 tools por idioma;
- 1 entrada raíz.

Son 15 locales reales: `de`, `en`, `es`, `fr`, `id`, `it`, `ja`, `ko`, `nl`,
`pl`, `pt`, `ru`, `sv`, `tr` y `zh`. No se recorta la matriz a `en`, `es` y
`fr`.

El español se sirve en `www.jjlmoya.es`; los otros catorce idiomas se sirven en
`www.gamebob.dev`. La categoría y la tool usan el slug traducido del loader de
cada locale. Los namespaces de catálogo y categorías proceden del paquete
shared 1.5.0.

## 3. Infraestructura de despliegue

`wrangler.jsonc` despliega el Worker `gamebob-utilities-tabletop` como static
assets con un passthrough mínimo en `src/worker.ts`. Las rutas son explícitas:

- categoría y tools GameBob bajo cada namespace localizado;
- categoría y los 17 slugs españoles en JJLmoya;
- assets técnicos bajo `/_utilities/*` en ambos hosts.

Las rutas no usan `/utilidades/*` genérico, porque ese prefijo también contiene
otras verticales. De este modo el MFE no captura tráfico ajeno.

`wrangler.staging.jsonc` permite probar el mismo artefacto en un Worker de
staging. El workflow de tags verifica que el tag pertenece a `master`, ejecuta
los gates, construye el output, despliega ambos dominios y notifica IndexNow.

## 4. Comandos de validación

Desde la raíz de Tabletop:

```bash
npm ci
npm run lint
npm run test
npm run build
npm run cf:dry-run
```

`cf:dry-run` debe mostrar las 616 assets y todas las rutas del `wrangler.jsonc`
sin pedir credenciales de Cloudflare. El despliegue real se hace únicamente
desde el tag de publicación con los secretos del entorno `production`.

El repositorio conserva errores históricos de `astro check` en el código de las
tools. Por eso `qa` del MFE usa los gates reproducibles que están verdes:
lint, suite de tests y build. No se introduce una supresión de TypeScript ni se
mezclan arreglos de esas tools con la extracción MFE.

## 5. Checklist antes de integrar en los hosts

1. Publicar la vertical con el tag que pase el workflow.
2. Comprobar en staging una categoría y una tool española.
3. Comprobar una tool en `en`, `fr` y al menos un idioma con namespace propio.
4. Verificar HTTP 200 para HTML, CSS, JS e imágenes Open Graph.
5. Verificar que canonical, `og:url`, alternates, breadcrumb y relacionados
   usan la misma URL pública.
6. Verificar que no aparecen `PreviewLayout`, localhost ni `/[locale]/[slug]`.
7. Añadir en el host principal las rutas/redirects antiguas solo cuando se haya
   comprobado la convivencia con las demás verticales.
8. Repetir el proceso para la siguiente vertical y comparar el diff del
   codemod con este repositorio de referencia.
