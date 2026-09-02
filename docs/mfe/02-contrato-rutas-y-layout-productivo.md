# Contrato de rutas y layout productivo

Este documento corrige una confusión importante del PoC: las páginas actuales de Tabletop son un preview de paquete y no son la página que queremos publicar.

## 1. Regla principal

`PreviewLayout.astro`, `PreviewToolbar.astro` y `PreviewNavSidebar.astro` no forman parte de la experiencia pública. Se conservan solo como herramienta de desarrollo hasta que exista el montaje productivo; ningún MFE debe enviar esos componentes al usuario final.

La composición productiva que hay que trasladar es:

```text
Categoría:
  host/Layout
    Breadcrumb
    category header
    grid de CardUtility
    CategorySEO

Tool:
  host/LayoutUtility
    Layout
      Breadcrumb
      UtilityHeader
      tool runtime
      ZoomControl
      WidgetCreator
      FAQSection
      SEO de la tool
      Bibliography
      RelatedUtilities
      UtilityStructuredData
```

El Header y el Footer globales siguen siendo responsabilidad de Identity/host, como se decidió. Eso no autoriza a reemplazar el resto de `LayoutUtility` por el layout oscuro del preview.

## 2. URLs públicas definitivas

### Español: JJLmoya

Para una tool cuyo loader `es` devuelve `slug = "tirador-dados-simulador-probabilidad"`:

```text
https://www.jjlmoya.es/utilidades/tirador-dados-simulador-probabilidad/
```

Para una categoría Tabletop cuyo loader `es` devuelve `slug = "juegos-de-mesa"`:

```text
https://www.jjlmoya.es/utilidades/categorias/juegos-de-mesa/
```

La raíz del catálogo es `https://www.jjlmoya.es/utilidades/`.

### Otros 14 idiomas: GameBob

En `website`, el namespace localizado y la categoría forman parte de la ruta. Para `en` sería:

```text
https://www.gamebob.dev/en/utilities/categories/tabletop/dice-roller-simulator/
```

Para `es` no se genera una copia paralela en GameBob: el alternate apunta a JJLmoya. Para otro idioma se conserva el mismo patrón con sus slugs localizados:

```text
https://www.gamebob.dev/fr/utilitaires/categories/tabletop/{slug-fr}/
```

El valor de `{slug-fr}` procede del loader francés de la tool. No se construye concatenando el slug inglés ni añadiendo el código de idioma al final.

## 3. Resolución de URLs

La integración debe tener una única función equivalente a esta:

```ts
type PublicUtilityUrlInput = {
  locale: string;
  categorySlug: string;
  toolSlug: string;
};

function getPublicUtilityUrl(input: PublicUtilityUrlInput): string {
  if (input.locale === "es") {
    return `https://www.jjlmoya.es/utilidades/${input.toolSlug}/`;
  }

  return `https://www.gamebob.dev/${input.locale}`
    + `/${utilitiesSlug[input.locale]}`
    + `/${categoriesSlug[input.locale]}`
    + `/${input.categorySlug}`
    + `/${input.toolSlug}/`;
}
```

La función real debe recibir `siteUrl` y el mapa de idioma como configuración, pero las pruebas de integración deben comprobar los dominios productivos anteriores.

## 4. Alternates y canonical

Para cada tool de Tabletop:

1. El canonical de `es` es JJLmoya.
2. El canonical de cada uno de los otros 14 idiomas es GameBob.
3. Todas las páginas del grupo comparten una única entrada de alternates.
4. `hreflang="es"` apunta al slug español de JJLmoya.
5. Cada idioma interno apunta a su ruta GameBob completa.
6. `x-default` es una decisión explícita y estable, nunca un fallback al preview.
7. `og:url`, JSON-LD `url`, breadcrumb y enlaces relacionados usan la URL pública final.

La página no puede generar canonical a partir de `Astro.url` del MFE si esa URL representa `/[locale]/[slug]` y no la ruta final del host.

## 5. Categoría: paridad con producción

La página de categoría debe contener:

- título y descripción del loader del locale;
- breadcrumb a catálogo y categoría;
- listado de las tools que la categoría expone, con la misma fuente de catálogo que producción;
- CardUtility con icono, color, título y descripción;
- enlaces a las URLs públicas finales;
- imagen de categoría si existe en el repo principal del host;
- CategorySEO y schema coherentes con el contenido visible;
- metadata canonical y alternates de categoría.

No debe mostrar badge `preview`, sidebar de desarrollo ni enlaces locales `/locale/slug` que no sean públicos.

## 6. Tool: paridad con producción

La página de tool debe contener exactamente estos bloques y en este orden:

1. breadcrumb;
2. `UtilityHeader`;
3. runtime de la tool;
4. control de zoom;
5. widget cuando la tool lo permita;
6. FAQ visible cuando tenga contenido;
7. artículo SEO;
8. bibliografía;
9. tools relacionadas.

La tool recibe el locale público que se está sirviendo. El español usa `content` español y `locale="es"`; los otros idiomas usan el loader correspondiente y `locale` interno de GameBob.

El CSS de la tool se resuelve desde el slug inglés para reutilizar el fichero técnico común, pero la URL pública, metadata y contenido usan el slug del locale.

## 7. Adaptación a MFE

La vertical exporta catálogo, runtime y contenido. El host aporta:

- Layout/HTML global;
- Identity Header/Footer;
- dominio y marca;
- mapa de namespaces localizados;
- URL española externa;
- assets Open Graph del repositorio principal;
- sitemap y redirects.

El MFE no debe copiar una página completa de `website` con `gamebob` hardcodeado. Debe extraer el cuerpo productivo y recibir el contexto del host. La misma vertical debe poder montarse con configuración GameBob y con configuración JJLmoya.

## 8. Tests obligatorios antes de integrar

- La categoría genera los 15 locales de contenido.
- Cada tool genera 15 loaders y un slug por locale.
- Cada ruta GameBob tiene utilities, categories, categoría y tool.
- La ruta española no se duplica en GameBob.
- Canonical y alternates son recíprocos.
- Ningún enlace público usa la ruta de preview.
- La categoría usa el listado productivo decidido, no una mezcla accidental de `ALL_TOOLS` y `category.tools`.
- La página pública no incluye `PreviewLayout`, `PreviewToolbar` ni `PreviewNavSidebar`.
- Open Graph, JSON-LD, breadcrumb y related usan la misma URL pública.
- El build del MFE solo contiene Tabletop y no supera el límite de archivos de Pages.
