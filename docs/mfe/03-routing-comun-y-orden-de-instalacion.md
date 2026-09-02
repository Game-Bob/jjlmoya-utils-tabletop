# Routing común e instalación del MFE

## Fuente única

Los segmentos traducidos de las URLs públicas no pertenecen a `website`,
`jjlmoya` ni a una vertical concreta. La fuente común es la exportación
`@jjlmoya/utils-shared/routing`.

El paquete publicado en `1.5.0` contiene:

- los 15 locales de utilidades;
- los segmentos traducidos de catálogo y categorías;
- la URL externa española de `jjlmoya.es`;
- `getUtilitiesPath`, `getCategoryPath` y `getUtilityPath`.

Cada vertical aporta únicamente:

- el slug de la categoría en cada locale;
- el slug de la tool en cada locale;
- el contenido, runtime, SEO, bibliografía y assets propios.

No se copia `slugMapping` desde `website` y no se crea un tercer paquete. La
identidad sigue limitada a sesión y header/footer global.

## Orden de instalación

1. Publicar `@jjlmoya/utils-shared` con `npm run minor` y su tag.
2. Esperar a que la versión esté disponible en npm.
3. En la vertical, ejecutar `npm install @jjlmoya/utils-shared@<version> --save-exact`.
4. Comprobar que `node_modules/@jjlmoya/utils-shared` no es un enlace local.
5. Ejecutar el test `src/tests/routing_contract.test.ts`.
6. Ejecutar la suite completa y `npm run build`.
7. Verificar el artefacto: 15 locales, rutas públicas, canonical y enlaces sin
   referencias a preview, localhost ni otra vertical.
8. Solo después integrar el artefacto en el host que lo vaya a montar.

Durante el desarrollo se puede usar `npm link @jjlmoya/utils-shared` para
validar una versión aún no publicada, pero el enlace se debe retirar antes de
la instalación final y nunca se debe convertir en una dependencia `file:`.

## Rutas que debe producir Tabletop

Para `es`, la tool usa el host español:

```text
https://www.jjlmoya.es/utilidades/{tool-slug-es}/
```

Para los otros 14 locales conserva el patrón productivo de GameBob:

```text
https://www.gamebob.dev/{locale}/{utilities-slug}/{categories-slug}/{category-slug}/{tool-slug}/
```

La página de categoría usa la misma fuente de segmentos y el slug de categoría
del loader. Ninguna página pública debe enlazar la ruta interna de preview
`/{locale}/{slug}` como si fuera la URL canónica.

## Estado del PoC

La dependencia declarada de Tabletop apunta a `@jjlmoya/utils-shared@1.5.0` y el
lockfile resuelve el tarball público de npm. No se usa `file:`, `link:` ni un
symlink local.

El contrato común se consume desde `@jjlmoya/utils-shared/routing`; la vertical
no mantiene una copia de `slugMapping`. La versión se publica y actualiza con
`npm run minor` en shared antes de instalarla en la vertical.
