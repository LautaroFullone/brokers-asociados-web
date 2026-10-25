# CLAUDE.md

Guía para Claude Code al trabajar en este repositorio. Mantenelo corto: todo lo que está acá se carga en cada sesión.

## Documentos de referencia (leer solo cuando la tarea lo pida)

No los cargues enteros por costumbre; `DESIGN.md` es muy largo.

- `PRODUCT.md`: usuarios, posicionamiento, alcance y restricciones. Leelo antes de decidir qué mostrar o qué texto escribir.
- `DESIGN.md`: sistema de diseño (tokens, tipografía, componentes, reglas). Leelo antes de tocar estilos, colores o componentes visuales. Para consultas puntuales, buscá la sección con Grep en vez de leerlo completo.
- `docs/brief-web-actual.md`: contenido relevado de la web WordPress actual.
- `.impeccable/design.json`: versión estructurada del diseño, generada por Impeccable. No editar a mano.

## Proyecto

Propuesta de rediseño (demo navegable, no producción) del sitio de **Brokers Asociados**, productores asesores de seguros de Mar del Plata, Argentina. Sitio estático con Astro 7 y Tailwind CSS v4 (vía `@tailwindcss/vite`).

- Todo el texto va en castellano rioplatense con voseo ("Cotizá", "Seleccioná", "Elegí").
- Los formularios validan en pantalla pero **no envían nada** (no hay backend). La confirmación no muestra ningún aviso de demo al usuario.
- Lo que el cliente no confirmó queda marcado como pendiente en el código o en los datos. No inventes datos (teléfonos, nombres, cargos, plazos): dejá el espacio preparado y marcalo.

## Comandos

- `npm run dev` / `npm run build` / `npm run preview`. No hay scripts de test ni lint. Para tipos: `npm run astro check`.
- Servidor de desarrollo en segundo plano: `astro dev --background`. Se maneja con `astro dev stop`, `astro dev status` y `astro dev logs`.
- Astro 7 requiere Node ≥22.23.4. El Node por defecto de nvm (22.22.2) falla: anteponé `export PATH="$HOME/.nvm/versions/node/v24.14.1/bin:$PATH"`.
- Deploy: el `Dockerfile` compila con Node 24 y sirve `dist/` con nginx (`nginx.conf`). Argumento de build opcional `PUBLIC_CONTACTO_DEV` (WhatsApp del desarrollador para el crédito del footer; ver `.env.example`).
- Documentación de Astro: https://docs.astro.build (consultala solo para la tarea en curso).

## Arquitectura

- `src/pages/`: `index.astro` (landing de una página armada con componentes de sección), `cotizar.astro` y `siniestros/denuncia.astro`. Todas usan `src/layouts/Layout.astro` (head y SEO, canonical desde `site` en `astro.config.mjs`, JSON-LD `InsuranceAgency` armado con `contacto`).
- `src/components/`: un componente por sección de la home (Hero, Coberturas, ComoTrabajamos, Aseguradoras, Siniestros, Personas, Contacto, Cierre, Footer…), con piezas auxiliares (`*Ctas`, `*Mapa`, `*Datos`), más `Icon.astro` (búsqueda por clave) y `Stamp.astro`.
- `src/data/brokers.ts`: única fuente de datos del negocio (contacto, ramas, productos, aseguradoras, equipo, productores, helper `whatsappLink()`). Cambiá el contenido acá, no en los componentes.
- `src/styles/global.css`: tokens `@theme` de Tailwind v4 (colores, tipografías). Los colores y la escala tipográfica se reflejan en el encabezado de `DESIGN.md`: mantené ambos sincronizados.
- `src/assets/`: imágenes procesadas por Astro (aseguradoras en SVG normalizados, equipo, hero en `img/hero/`, iconos). `public/` para archivos estáticos.
- `.impeccable/` y `.claude/{agents,skills}`: herramientas del flujo de diseño con Impeccable (genera y actualiza `DESIGN.md`, `design.json` y capturas de revisión). No forman parte del sitio.

## Reglas de diseño que no se rompen (el detalle está en `DESIGN.md`)

- Concepto: la web se lee como una póliza bien redactada. Papel, tinta y filas con reglas finas.
- Esquinas rectas, sin sombras. Excepción aprobada: botones circulares solo con ícono (WhatsApp).
- Chivo Mono para campos "tipeados" y numeración; Archivo Variable condensado para títulos.
- Un solo sello por página. El rojo bordó (`claim`) se reserva para siniestros; el verde (`seal`) es el sello del logo.
- Contraste mínimo AA sobre `paper` (#f6f4ef). Respetar `prefers-reduced-motion` en toda animación.
- Las animaciones más elaboradas (estilo Emil Kowalski) y el lazy loading de todo el sitio están diferidos a una etapa posterior: no los agregues sin que se pida.

## Convenciones de trabajo

- El diseño se aplica con Impeccable desde VS Code. Si te piden variantes, dejá un selector temporal y marcalo claramente para borrarlo después; no lo dejes en la versión final.
- Antes de cerrar un cambio visual, corré `npm run build` y revisá en escritorio (1440) y celular (390).
- No dejes archivos temporales en el repo (en especial `.impeccable/tmp-critique/`, que debe borrarse).
- Si el repositorio pasa a ser público, el teléfono del desarrollador va solo por `PUBLIC_CONTACTO_DEV`, nunca escrito en el código.
