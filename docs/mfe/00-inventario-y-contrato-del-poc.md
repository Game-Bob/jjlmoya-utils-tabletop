# PoC MFE de utilidades: `jjlmoya-utils-tabletop`

Este documento inicia el procedimiento que después se convertirá en un codemod para todos los repositorios `jjlmoya-utils-*`.

El repositorio de referencia es `jjlmoya-utils-tabletop`. Se considera la punta de lanza porque parte de un estado limpio. `jjlmoya-utils-template` queda fuera del alcance del trabajo.

## 1. Objetivo

Convertir una vertical de utilidades en un MFE desplegable e independiente que pueda consumirse desde:

- `https://www.gamebob.dev`
- `https://www.jjlmoya.es`

El MFE debe conservar las URLs públicas, los enlaces internos, el SEO y la identidad visual que ya tiene producción. La extracción no debe crear dos implementaciones de la misma utilidad: el MFE será la fuente común y cada host aportará únicamente su configuración de marca, dominio, catálogo y enlaces de navegación.

Games y concepts sirven como referencia de infraestructura MFE y despliegue. No se deben copiar sus layouts: una utilidad tiene requisitos propios de SEO, lectura, interacción, bibliografía, FAQ y navegación entre herramientas.

## 2. Problemas que resuelve

El despliegue monolítico actual intenta publicar todas las combinaciones de idiomas y herramientas de todas las verticales en un único output. Cloudflare Pages/Wrangler falla al validar el directorio cuando supera el límite de 20.000 archivos por despliegue.

La solución objetivo es que cada vertical genere y despliegue solamente sus propios recursos. Esto reduce el tamaño del artefacto, aísla los fallos de una vertical y permite publicar cambios sin reconstruir todo el catálogo.

El límite de archivos no es un motivo para sacrificar el SEO: el MFE debe generar las rutas indexables, sus metadatos, sus alternates y sus enlaces canónicos de forma explícita.

## 3. Estado actual que hay que respetar

### 3.1. En `jjlmoya-utils-tabletop`

La vertical contiene el scaffold común de las utilidades:

- `src/pages/index.astro` redirige a `/es`.
- `src/pages/[locale].astro` muestra la portada/listado de la vertical.
- `src/pages/[locale]/[slug].astro` muestra una herramienta individual.
- `src/layouts/PreviewLayout.astro` y los componentes `Preview*` forman el shell de preview actual.
- `src/index.ts`, `src/entries.ts` y `src/tools.ts` exponen el catálogo y los runtimes.
- `src/tests/` ya contiene comprobaciones de i18n, SEO, slugs, schema y completitud.

Ese shell de preview no se debe considerar automáticamente el layout final de producción. Primero hay que contrastarlo con la cadena productiva de `website`.

### 3.2. En `website`

`website` es la referencia del resultado que existe en producción en `gamebob.dev`. La cadena relevante es:

1. `src/integrations/isolatedContentRoutes.mjs` descubre las verticales y genera las rutas.
2. `src/integrations/isolated-content/utilityRoutes.mjs` crea las rutas localizadas por categoría y herramienta.
3. `src/integrations/isolated-content/routeAdapters.mjs` conecta cada ruta generada con el runtime, la entrada y los datos de la tool.
4. `src/routes/utilities/RuntimeUtilityRoute.astro` resuelve locale, categoría y herramientas relacionadas.
5. `src/components/utilities/LibraryUtilityLayout.astro` carga el componente, el contenido SEO, la bibliografía y los estilos de la tool.
6. `src/layouts/LayoutUtility.astro` compone el layout de utilidad: breadcrumb, encabezado, herramienta, zoom, widget, FAQ, SEO, bibliografía, relacionados y banner de app.
7. `src/layouts/Layout.astro` aporta el documento HTML, fuentes, tracking, footer, navegación general e integración con Identity.
8. `src/components/common/SEO.astro` y `src/components/common/OpenGraph.astro` generan canonical, alternates, `hreflang`, Open Graph y Twitter Cards.

`jjlmoya` es la referencia equivalente para el host español. Los dos repositorios se fusionarán después de extraer las utilidades; por eso el diseño del MFE no debe acoplarse a una copia concreta del layout de ninguno de ellos.

## 4. Contrato de responsabilidades

### El MFE de la vertical es responsable de

- Sus rutas de portada y de herramienta.
- Sus tools, runtimes, estilos y recursos propios.
- Sus textos traducidos, slugs localizados y metadatos SEO.
- El JSON-LD específico de cada herramienta.
- FAQ y bibliografía cuando existan.
- La navegación interna entre herramientas de la misma vertical.
- Los enlaces de vuelta al catálogo global y los enlaces externos que correspondan.
- El manifest o endpoint de metadatos de cada herramienta si el host actual lo necesita.

### El host es responsable de

- Dominio y configuración de marca (`gamebob.dev` o `jjlmoya.es`).
- Header, footer y navegación global a través de Identity.
- Fuentes, tracking, consentimiento y políticas globales.
- Enlaces del catálogo global.
- Base URL de assets compartidos y recursos Open Graph del repositorio principal.
- Reglas de despliegue, redirects y headers HTTP.

### La capa de integración es responsable de

- Montar el MFE en cada host.
- Resolver el host actual y pasar su configuración.
- Evitar colisiones de rutas entre verticales.
- Mantener compatibilidad con enlaces antiguos.
- Verificar que una build no publica accidentalmente el catálogo completo.

## 5. Configuración mínima del host

El MFE debe recibir una configuración equivalente a esta, sin codificar dominios en los componentes:

```ts
type UtilityMfeHostConfig = {
  brand: "gamebob" | "jjlmoya";
  siteUrl: string;
  catalogUrl: string;
  localeSet: string[];
  defaultLocale: string;
  externalLocaleUrls?: Record<string, string>;
  sharedAssetBaseUrl?: string;
};
```

Valores que hay que confirmar durante el PoC:

| Concepto | `gamebob.dev` | `jjlmoya.es` |
|---|---|---|
| Dominio canónico | `https://www.gamebob.dev` | `https://www.jjlmoya.es` |
| Marca | `gamebob` | `jjlmoya` |
| Header/footer | Identity + configuración GameBob | Identity + configuración JJLmoya |
| Idioma principal | inglés | español |
| Open Graph compartido | repo principal del host | repo principal del host |
| Catálogo global | el del host | el del host |

La lista exacta de idiomas, los idiomas externos y el prefijo de locale deben ser datos de configuración. No se debe asumir que los catorce idiomas de `website` son idénticos a los idiomas indexables de cada vertical.

## 6. Contrato de rutas

Las rutas públicas no son las del preview del paquete. La categoría y la tool deben conservar las convenciones productivas de cada host.

En español:

```text
https://www.jjlmoya.es/utilidades/
https://www.jjlmoya.es/utilidades/{tool-slug-español}/
https://www.jjlmoya.es/utilidades/categorias/{category-slug-español}/
```

En los otros 14 idiomas, `website` usa el namespace localizado completo:

```text
https://www.gamebob.dev/{locale}/{utilities-slug}/{categories-slug}/{category-slug}/{tool-slug}/
```

La forma abreviada `{locale}/{utilityTranslated}/{slugTool}` solo es válida si `{utilityTranslated}` representa el namespace localizado completo `{utilities-slug}/{categories-slug}/{category-slug}`. No se debe implementar una ruta de solo tres segmentos si eso elimina la categoría que ya forma parte de producción.

La forma final debe adaptarse únicamente a las URLs que ya estén publicadas. No se debe cambiar el slug inglés por el traducido ni viceversa sin una tabla de redirects y una decisión SEO explícita.

Para cada tool y locale hay que registrar:

| Campo | Requisito |
|---|---|
| Ruta pública | Única y estable |
| Slug | El mismo que usa el ecosistema para ese locale |
| Canonical | Absoluto y dentro del host que sirve la página |
| `hreflang` | Solo idiomas realmente disponibles |
| `x-default` | Ruta de fallback definida |
| Breadcrumb | Enlaces válidos al catálogo, vertical y tool |
| Relacionadas | Solo URLs generadas por el MFE o URLs globales válidas |
| Redirects | Toda URL anterior debe conservar destino o redirigir |
| Open Graph | Imagen y URL accesibles desde el host final |

## 7. Contrato SEO y de enlaces

Cada página de herramienta debe verificarse en los dos hosts y no solo en local.

### Metadatos

- `title` y `description` deben proceder de la traducción de la tool.
- El canonical debe apuntar a la URL pública final, no a una URL interna del MFE.
- Las alternates deben ser absolutas y no listar idiomas no generados.
- `og:url` debe coincidir con el canonical.
- `og:image` debe resolver con HTTP 200 y tener dimensiones válidas.
- El `og:site_name`, logo, Twitter card y locale deben corresponder al host.
- El JSON-LD no puede conservar dominios, nombres de marca o breadcrumbs del host equivocado.
- La imagen Open Graph vive en el repositorio principal del host cuando sea un recurso compartido; el MFE solo debe referenciarla mediante configuración.

### Enlaces

- Los enlaces de breadcrumb no pueden apuntar al preview ni a localhost.
- El MFE no puede conservar `/[locale]/[slug]` como URL pública si la integración productiva usa los namespaces anteriores.
- Los enlaces de “volver al catálogo” deben funcionar en ambos dominios.
- Los enlaces entre tools deben conservar locale y host.
- Los enlaces a otros idiomas deben llevar a una página que exista o a la URL externa declarada.
- Los enlaces de navegación global los aporta Identity/host.
- Las rutas antiguas deben tener redirect comprobado antes de retirar el código monolítico.
- No se deben crear enlaces relativos que dependan de una profundidad distinta de la ruta final.

## 8. Plan paso a paso del PoC

### Paso 0 — Congelar el inventario

1. Confirmar que Tabletop está limpio.
2. Guardar commit base y versión del paquete.
3. Enumerar tools, entradas, locales, slugs, assets y rutas actuales.
4. Generar una tabla de paridad entre Tabletop, `website` y, cuando proceda, `jjlmoya`.
5. Marcar cualquier diferencia como decisión, no como “detalle a resolver después”.

Salida: `docs/mfe/01-inventario-tabletop.md` y un snapshot reproducible del catálogo.

### Paso 1 — Separar el contrato de la implementación

1. Definir tipos para host, locale, tool, SEO, enlaces y assets.
2. Definir qué recibe el MFE y qué recibe del host.
3. Definir la API de montaje para Astro.
4. Definir qué partes serán componentes compartidos y cuáles permanecerán en cada host.

Salida: `docs/mfe/02-contrato-mfe.md` y tests de tipos/contrato.

### Paso 2 — Extraer el layout productivo

1. Comparar `PreviewLayout` con `LayoutUtility` en producción.
2. Reutilizar la estructura productiva de utilidad, no el aspecto de Games/Concepts.
3. Mantener la integración del Header/Footer a través de Identity.
4. Extraer el resto en componentes portables: breadcrumb, tool header, contenido, FAQ, bibliografía, relacionados, widget y datos estructurados.
5. Revisar CSS, stacking contexts, ancho de lectura, sticky elements, zoom y responsive.
6. Verificar que el layout no genere enlaces o metadata usando el dominio de desarrollo.

Salida: primera página Tabletop con paridad visual y funcional contra producción.

### Paso 3 — Convertir Tabletop en build desplegable

1. Cambiar el entrypoint de preview por el entrypoint MFE/producción.
2. Generar únicamente las rutas y assets de Tabletop.
3. Hacer que el output sea autocontenido salvo recursos compartidos declarados.
4. Añadir configuración de base URL y host.
5. Comprobar número de archivos y tamaño del artefacto antes del despliegue.
6. Añadir una comprobación que falle si aparecen rutas de otra vertical.

Salida: artefacto de Tabletop desplegable de forma aislada.

### Paso 4 — Integrar en `website`

1. Montar el MFE bajo el namespace real de utilidades.
2. Conservar las URLs de producción o crear redirects explícitos.
3. Mantener el header/footer del host.
4. Pasar la configuración GameBob.
5. Verificar canonical, alternates, Open Graph, JSON-LD, sitemap y robots.
6. Verificar navegación completa: catálogo → vertical → tool → relacionadas → catálogo.

Salida: Tabletop funcionando en `gamebob.dev` sin duplicar el catálogo completo.

### Paso 5 — Integrar en `jjlmoya`

1. Reutilizar el mismo artefacto/código del MFE.
2. Pasar configuración JJLmoya.
3. Resolver correctamente español, idioma principal, alternates y URLs externas.
4. Comprobar que el canonical no sigue apuntando a GameBob.
5. Verificar Open Graph y textos de marca en el dominio español.
6. Repetir la navegación y los checks SEO del paso anterior.

Salida: la misma vertical funcionando en `jjlmoya.es`.

### Paso 6 — Documentar la receta del codemod

1. Identificar cada cambio mecánico respecto al scaffold común.
2. Identificar cada cambio que depende de tools/SEO y debe conservarse.
3. Separar transformaciones seguras de transformaciones que requieren revisión.
4. Crear fixtures representativos: tool con FAQ, tool con bibliografía, tool sin imagen, tool con locale externo y tool con slug distinto.
5. Ejecutar el codemod en una copia de Tabletop y comparar el árbol de archivos.
6. Ejecutarlo después sobre otra vertical espejo para detectar supuestos ocultos.

Salida: plan de codemod con precondiciones, transformaciones, validaciones y rollback.

## 9. Gates de aceptación

El PoC no se considera válido si solo “compila”. Debe cumplir todos estos gates:

- Build limpia del MFE.
- El output solo contiene Tabletop.
- El número de archivos está muy por debajo del límite de Pages.
- Todas las rutas esperadas responden 200 o tienen el redirect documentado.
- No hay enlaces a preview, localhost ni dominios cruzados accidentales.
- Canonical, `hreflang`, `x-default`, Open Graph y JSON-LD son correctos en ambos hosts.
- Las imágenes Open Graph responden desde el repositorio/host principal correcto.
- El layout coincide con la utilidad productiva actual en desktop y móvil.
- La navegación por breadcrumbs y relacionadas no rompe locale ni dominio.
- Las tools siguen funcionando con zoom, widget, FAQ y bibliografía.
- Los tests existentes de Tabletop siguen pasando.
- Hay una prueba de que otra vertical no se ha colado en el artefacto.
- El procedimiento queda documentado de manera que otro repositorio pueda seguirlo sin conocer este contexto.

## 10. Riesgos y decisiones abiertas

### Riesgo: cambiar URLs sin querer

Mitigación: inventario de rutas antes de tocar el router, tabla de redirects y smoke tests contra URLs reales.

### Riesgo: duplicar layout entre hosts

Mitigación: el MFE contiene el layout de utilidad; el host solo configura marca, navegación global y dominio.

### Riesgo: SEO cross-domain incorrecto

Mitigación: construir metadata desde `siteUrl`, `localeSet` y configuración de idioma externa; probar el HTML final servido por cada dominio.

### Riesgo: assets Open Graph inaccesibles

Mitigación: contrato explícito de `sharedAssetBaseUrl`, comprobación HTTP de cada imagen y fallback controlado.

### Riesgo: dependencia accidental del catálogo monolítico

Mitigación: catálogo local de Tabletop, build aislada y test que inspeccione el output buscando rutas de otras verticales.

### Decisión pendiente: modelo de integración

Hay que decidir durante el Paso 2 si el host importa el MFE como paquete/runtime de Astro o si consume un artefacto desplegado. El PoC debe medir ambos costes si la decisión afecta al codemod, al SEO o al despliegue.

### Decisión pendiente: estrategia de assets

Hay que decidir qué recursos se empaquetan dentro del MFE y cuáles permanecen en el repo principal. Las imágenes Open Graph compartidas parten del repo principal; no se deben copiar sin una razón concreta.

## 11. Regla para futuras verticales

Cuando el PoC esté aprobado, cada repo `jjlmoya-utils-*` se tratará como una instancia del mismo scaffold. El codemod podrá modificar la estructura común, pero deberá leer y preservar como datos de cada repositorio:

- tools y entradas;
- locales y traducciones;
- slugs;
- SEO y JSON-LD;
- FAQ y bibliografía;
- imágenes y referencias de assets;
- tests específicos.

La documentación del PoC debe distinguir siempre entre:

1. cambios mecánicos que el codemod puede aplicar;
2. datos que el codemod debe descubrir;
3. decisiones editoriales/SEO que requieren validación humana.

Ese es el criterio que permitirá escalar la migración sin convertir las excepciones de una vertical en reglas erróneas para todas las demás.
