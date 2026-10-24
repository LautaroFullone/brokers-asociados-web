---
name: Brokers Asociados
description: Productores asesores de seguros en Mar del Plata; la web se lee como una póliza bien redactada.
colors:
  ink: "#184e77"
  ink-2: "#3f5870"
  ink-deep: "#0f3a5c"
  link: "#1e6091"
  on-dark: "#e6f2f7"
  seal-on-dark: "#e8f8ef"
  cta-fill-light: "#a8dadc"
  cta-ink-deep: "#0f3554"
  rule: "#7f95a6"
  rule-soft: "#d3dee5"
  # Fondo de los retratos de Personas: degradé gris neutro (arriba #ececec, abajo #dedede), sin matiz azul.
  portrait-top: "#ececec"
  portrait-bottom: "#dedede"
  wash: "#eef3f6"
  paper: "#f6f4ef"
  sheet: "#ffffff"
  seal: "#1f6e55"
  seal-deep: "#175843"
  seal-soft: "#e3f0ec"
  claim: "#8a1f45"
  claim-deep: "#66142f"
  claim-soft: "#f7e8ee"
  teal: "#1a759f"
  # Paradas claras del degradé del logo: solo en la tira de 8px del campo del logo, nunca en texto ni bajo texto.
  logo-aqua: "#34a0a4"
  logo-mint: "#52b69a"
typography:
  display:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 1.9rem + 5.2vw, 6rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 84"
  headline:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.6rem + 2.6vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 88"
  title:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 88"
  lead:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
  # Pasos intermedios que usa el build (nombres de ítem, controles, textos secundarios).
  title-lg:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1.04
  form-title-lg:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.04
  form-title:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "1.625rem"
    fontWeight: 700
    lineHeight: 1.04
  title-sm:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.04
  cta:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
  item-lg-bold:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.3
  item-bold:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.3
  item-lg:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.3
  item:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
  ui:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 500
    lineHeight: 1.5
  small:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  caption:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.4
  label:
    fontFamily: "Chivo Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 500
    letterSpacing: "0.02em"
    fontFeature: "'tnum'"
rounded:
  none: "0px"
  full: "9999px"
spacing:
  gutter-sm: "16px"
  gutter-md: "32px"
  gutter-lg: "48px"
  section-sm: "64px"
  section-md: "80px"
  section-lg: "96px"
  container: "84rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.ink-deep}"
  button-claim:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.claim-deep}"
    rounded: "{rounded.none}"
    padding: "20px 24px"
  button-claim-hover:
    backgroundColor: "{colors.claim-soft}"
  # Botones de la portada (HeroCtas.astro), sobre la foto. 56px de alto.
  button-on-dark:
    backgroundColor: "{colors.cta-fill-light}"
    textColor: "{colors.cta-ink-deep}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "56px"
    typography: "{typography.cta}"
  button-icon-round:
    backgroundColor: "{colors.cta-fill-light}"
    textColor: "{colors.cta-ink-deep}"
    rounded: "{rounded.full}"
    size: "56px"
  button-icon-round-sm:
    backgroundColor: "{colors.cta-fill-light}"
    textColor: "{colors.cta-ink-deep}"
    rounded: "{rounded.full}"
    size: "44px"
  persona-card:
    backgroundColor: "{colors.portrait-bottom}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    width: "256px"
  persona-panel:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "16px"
  button-whatsapp:
    backgroundColor: "{colors.seal}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "18px 24px"
  button-whatsapp-hover:
    backgroundColor: "{colors.seal-deep}"
  nav-bar:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    height: "80px"
  nav-cta:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
    typography: "{typography.item-bold}"
  nav-cta-sobre-hero:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "16px 24px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  input:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "10px 14px"
  choice-tile-checked:
    backgroundColor: "{colors.wash}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "8px 12px"
    height: "48px"
  field-number:
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
    width: "52px"
  section-logo:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  section-claim:
    backgroundColor: "{colors.claim-deep}"
    textColor: "{colors.paper}"
  claim-tile:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "16px"
  claim-tile-hover:
    backgroundColor: "{colors.claim-soft}"
  tab:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.item}"
    rounded: "{rounded.none}"
    height: "56px"
  tab-hover:
    backgroundColor: "{colors.wash}"
  tab-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  cobertura-tile:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "20px"
    height: "192px"
  cobertura-tile-grande:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "32px"
  cobertura-tile-grande-hover:
    backgroundColor: "{colors.ink-deep}"
  caratula:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  caratula-label:
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
    width: "104px"
  caratula-value:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  stamp:
    textColor: "{colors.seal}"
    size: "160px"
  mapa-marcador:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    width: "44px"
    height: "56px"
---

# Design System: Brokers Asociados

## Overview

**Creative North Star: "La póliza bien hecha"**

El sistema trata cada superficie como un documento de seguros redactado con cuidado: papel cálido con grano alternado con hojas blancas, tinta azul marino, campos con reglas finas y números de campo en monoespaciada, cláusulas numeradas ("Art. 1") y, en el pedido de cotización, un sello de goma verde que certifica el estado del trámite. La confianza no se declara con adornos: se construye con orden, jerarquía legible y datos verificables puestos en su campo.

La densidad es de formulario bien diagramado, no de folleto. Los bloques se separan con reglas (filetes de 1px y líneas de 2px en tinta) en vez de tarjetas flotantes; la única grilla de mosaicos es la de Coberturas, de piezas rectas sin sombra. La profundidad es plana y tipográfica. La tipografía es grande y generosa para un público mayor de 45 que lee desde el celular: el cuerpo arranca en 18px. El color tiene funciones fijas: el azul es la tinta, el verde es el sello (solo en cotizar) y WhatsApp, el bordó existe solo para siniestros y el azul teal solo para el foco y el acento.

La portada abre con una fotografía real de Mar del Plata (la rambla y el skyline de la costa) a sangre completa, con un velo marino que asienta el texto y un zoom lento que la mantiene viva; el crédito de la foto queda visible en mono. Es el único momento fotográfico grande: el resto de la página vuelve al papel. El guilloché sobrevive en una sola forma, la tira: una banda horizontal de onda fina en teal, de 24px de alto, que marca la cabecera de una carátula como papel de seguridad. El logo del cliente es una insignia circular y se respeta como tal; su línea (azul → teal → verde) es el campo de color que el sistema toma del logo: un degradé seguro para texto (de `ink` a `teal`, 118°) como fondo de sección, rematado por una tira de 8px con el degradé completo. El otro campo de color es el de siniestros: un bordó frío pleno, para que quien tuvo un problema encuentre la sección sin buscarla.

**Key Characteristics:**
- Un solo papel cálido (`paper`) con grano de página completa como fondo común; hojas blancas (`sheet`) para formularios, carátula, mosaicos; tinta marina en todo el texto.
- Esquinas rectas; reglas de 1px, 1.5px y 2px como única estructura.
- Números de campo y metadatos en Chivo Mono con cifras tabulares.
- Archivo variable condensado (ancho 84–92%) para titulares compactos y firmes.
- Bordó reservado para siniestros (incluido su campo de sección completa); verde para el sello y WhatsApp.
- Portada fotográfica real con velo marino; una sola por página.
- Sin sombras, sin tarjetas redondeadas; única excepción circular: el botón de solo ícono de WhatsApp (portada y panel de cada persona).

## Colors

Una paleta de documento: tinta marina sobre un papel cálido con grano, con tres tintas funcionales que nunca se intercambian y el degradé del logo como único campo de color.

### Primary
- **Tinta de póliza** (`ink`): todo el texto principal, las reglas de 2px, el CTA de cotizar, el botón "Cotizá" del header y los fondos invertidos (footer, botón del menú móvil) y el color base bajo el campo del logo. El velo de la foto de portada usa azules translúcidos propios del build (rgb 15 58 92 y 24 78 119, es decir `ink-deep` e `ink` con alfa), no tokens. Su hover es la **Tinta profunda** (`ink-deep`).
- **Azul de vínculo** (`link`): el cambio de color al hover de los vínculos de texto (por ejemplo los vínculos de texto dentro de un párrafo). No es un fondo ni un color de reposo.
- **Tinta secundaria** (`ink-2`): leads, etiquetas de campo, números de campo, notas y pies de foto.

### Secondary
- **Verde sello** (`seal`): el sello con leyenda de la carátula, el teléfono de WhatsApp, los botones de WhatsApp (texto blanco 6.14:1), el punto de "Abierto ahora" y el ícono de confirmación. Hover en **Verde sello profundo** (`seal-deep`). `seal-soft` está definido en el tema para fondos de confirmación.

### Tertiary
- **Bordó siniestro** (`claim`, un bordó frío): el enlace "Siniestros" del menú, el punto del acceso "¿Tuviste un siniestro?" de la portada, los íconos y flechas de los mosaicos de siniestro, los mensajes de error de formulario y el punto de "Cerrado". El campo de siniestros es un degradé de `claim-deep` a `claim` (125°) a sección completa, con el grano del papel encima; sobre él, `claim-soft` es el texto secundario y `claim-deep` el texto de la barra blanca de denuncia. `claim-soft` es también el relleno de hover de los mosaicos y de la barra de denuncia.
- **Azul de foco y acento** (`teal`): el anillo de foco visible (3px, offset 3px), la tinta de la tira de guilloché y el extremo claro del campo del logo.

### Acción sobre oscuro
- **Celeste de acción** (`cta-fill-light`): relleno de los CTAs de la portada sobre la foto con velo (`HeroCtas.astro`, que ya no tiene variantes de tono: es solo la versión sobre oscuro): el botón "Cotizá tu seguro" y el WhatsApp redondo; y del botón redondo de WhatsApp de 44px sobre el panel de tinta de cada persona (`Personas.astro`).
- **Tinta marina** (`cta-ink-deep`): texto e ícono sobre `cta-fill-light`; 8.28:1.
Estos dos colores se usan solo en los CTAs de la portada sobre fondo oscuro y en el botón de solo ícono de WhatsApp de las personas. No se usan en otros botones, texto ni fondos.

### Degradé del logo
- **Campo del logo** (`ink` → `teal`, a 118°): la línea de la insignia del cliente (azul → teal → verde) como fondo de sección ("Qué hacemos por vos"). El campo es seguro para texto: solo va de azul a azul medio.
- **Tira del logo** (`ink` → `teal` 38% → `logo-aqua` 72% → `logo-mint`, a 90°, 8px de alto): el degradé completo, en el borde inferior del campo del logo. `logo-aqua` y `logo-mint` existen solo aquí; no se usan sueltos como texto, borde ni fondo plano.

### Neutral
- **Papel** (`paper`, blanco cálido): el fondo de toda la página (sobre `html`), con el grano encima; las secciones de Coberturas, Aseguradoras, Equipo y Contacto y la página de cotizar no pintan fondo propio y dejan ver este papel. También es el texto sobre tinta, foto y campo bordó, el fondo del botón primario sobre oscuro y de la barra del header.
- **Hoja** (`sheet`, blanco puro): solo las superficies de hoja sobre el papel: formularios, campos, la carátula, los mosaicos de siniestro.
- **Grano** (`--grano` y `--grano-tam`; `--grano` es `url('/grano-fino.png')`, `--grano-tam` es 128px; tile PNG de ruido de tinta cálida, el grano "Fino" elegido por el cliente): la textura del papel, no un color. Una sola variable y una sola intensidad en todo el sitio. Lleva grano: el fondo de papel (capa fija detrás de todo el contenido), la barra sólida del header y el panel del menú móvil (`.superficie-papel`), el campo bordó de siniestros (`.bg-claim-field`), el campo del logo (`.bg-logo`) y el footer (`.con-grano`). No lleva grano: fotos, hojas y mosaicos blancos (`sheet`) ni texto. Tile y tamaño salen de las variables, nunca de valores sueltos.
- **Lavado** (`wash`): opción elegida en un campo, placeholders de foto, hover de botones secundarios.
- **Regla** (`rule`): filetes de 1px entre filas y bordes de inputs (1.5px).
- **Regla suave** (`rule-soft`): bordes de opciones sin elegir, separadores dentro de bloques y el fondo del mapa mientras carga.
- **Fondo de retrato** (`portrait-top` #ececec arriba, `portrait-bottom` #dedede abajo, en degradé vertical): el gris neutro, sin matiz azul, detrás de los retratos de Personas y de la silueta provisoria. Elegido por el cliente porque el azul pálido de `rule-soft` desentonaba junto a las fotos en gris. Solo se usa en ese fondo.
- **Texto sobre oscuro** (`on-dark`): texto secundario sobre campos oscuros (la foto de portada con velo, el degradé del logo y el footer en `ink`); 4.5:1 o más sobre `teal`.
- **Sello sobre oscuro** (`seal-on-dark`): los rótulos "Art. N" y los números 01-03 en mono sobre el degradé del logo (4.7:1 sobre `teal`); la versión clara del verde sello para texto sobre fondos oscuros.

### Named Rules
**The Red Means Claim Rule.** El bordó (`claim` y sus variantes, hoy #8a1f45) aparece solo en lo relacionado con siniestros, errores de validación y el estado "Cerrado". Nunca como acento decorativo ni en un CTA de cotización.

**The Teal Is Focus Rule.** El token `teal` marca el anillo de foco y la tira de guilloché, y es el extremo del campo del logo; no se usa en botones ni fondos planos, para que el foco sea inconfundible. Los vínculos de texto cambian con `link`, no con `teal`.

**The Seal Is Green Rule.** El verde del logo se usa como tinta de sello y como color de WhatsApp; sobre oscuro, `seal-on-dark` marca los rótulos de artículo. No colorea titulares ni bloques de texto.

**The Light Greens Never Carry Text Rule.** Los verdes y azules claros del degradé (`logo-aqua`, `logo-mint`) viven solo en la tira de 8px; nunca en texto ni debajo de texto (blanco sobre `logo-mint` da 2.47:1). Todo texto sobre el campo del logo va sobre `ink` a `teal`.

**The Hero Action Rule.** El celeste de acción y la tinta marina (`cta-fill-light`, `cta-ink-deep`) existen solo para los CTAs de la portada sobre fondo oscuro y para el botón de solo ícono de WhatsApp del panel de persona. No se promueven a botones con rótulo de otras secciones.

**The One Paper Rule.** El fondo común es un único papel (`paper` con grano); las secciones no lo tiñen. El color de fondo llega solo como el campo del logo o el campo bordó de siniestros, siempre a sección completa. Nunca como tarjeta, franja suelta o bloque de color dentro de una sección.

**The One Grain Rule.** Hay un solo grano, un mismo tile (`grano-fino.png`, 128px) parametrizado por `--grano` y `--grano-tam`, a una sola intensidad. Cubre el papel (fondo de página, barra del header, panel del menú), el campo bordó de siniestros, el campo del logo y el footer, siempre por encima del color como un papel tintado. Nunca cubre fotos, hojas blancas ni mosaicos blancos, ni texto.

## Typography

**Display Font:** Archivo Variable (con Archivo, system-ui)
**Body Font:** Archivo Variable (con Archivo, system-ui)
**Label/Mono Font:** Chivo Mono 400/500 (con ui-monospace)

**Character:** Una grotesca de ancho variable, condensada en titulares (84–92%) y a ancho normal en el texto, con una mono de máquina de escribir para los campos y metadatos del documento. La mezcla se lee como formulario oficial impreso, no como marca de tecnología.

### Hierarchy
- **Display** (700, clamp(3.25rem → 6rem), 1.04, ancho 84%): solo el H1 de portada, en `paper` sobre la foto. Las páginas interiores (cotizar) usan un escalón menor para su H1: clamp(2.5rem → 4rem), mismo ancho 84%.
- **Headline** (700, clamp(2.25rem → 3.75rem), 1.04, ancho 88%): el H2 de cada sección. Aseguradoras usa un escalón menor (clamp(2rem → 3rem)), con el titular "Aseguradoras que confían en nosotros"; Siniestros sube a clamp(2.5rem → 4.5rem) a ancho 84%, en `paper` sobre el campo bordó.
- **Title** (700, 1.5–2rem, 1.04): encabezados de columna, cláusulas, título del formulario (1.625–1.875rem), título de la carátula (1.5rem, ancho 88%) y bloques laterales (1.375rem).
- **Lead** (400, 1.1875rem, 1.55, `ink-2`): bajada de sección, 42–46ch. La bajada de portada sube a 1.25–1.375rem con interlineado 1.5, 46ch, en `on-dark`.
- **Body** (400, 1.125rem, 1.55): texto corriente y valores de campo; nombres de ítems en 1.25–1.375rem semibold.
- **Label** (Chivo Mono 500, 0.875rem, +0.02em, cifras tabulares): números de campo (01, 02, 03), encabezados de tabla, contadores ("6 coberturas"), los rótulos y la fecha de la carátula, el estado de atención de Contacto, los números de paso de siniestros, el crédito de la foto de portada y la nota de versión demo del footer.

### Named Rules
**The Typed Field Rule.** Todo lo que en un documento real estaría tipeado a máquina (número de campo, artículo, notas de pie, rótulos de tabla) va en Chivo Mono con cifras tabulares. La prosa y los valores que el usuario lee van en Archivo.

**The Eighteen Floor Rule.** El cuerpo no baja de 1.125rem y ningún texto legible baja de 0.875rem.

## Layout

Contenedor central de 84rem con márgenes laterales de 16px (móvil), 32px (≥640px) y 48px (≥1024px). Las secciones respiran con 64 / 80 / 96px verticales según el ancho y se separan entre sí con una regla de 2px en tinta en el borde superior; la portada fotográfica, el campo del logo y el campo de siniestros no llevan regla. El ritmo alterna papel con grano y campos de color, con este orden: portada foto con velo marino (oscura) → Coberturas (papel con grano) → "Qué hacemos por vos" en el degradé del logo → Aseguradoras (papel con grano) → Siniestros en el campo bordó → Equipo, «Te atiende una persona» (papel con grano) → Contacto (papel con grano) → footer `ink`. Los anclajes dejan 5.5rem de margen superior para no quedar bajo el header fijo.

Las cabeceras de sección son una grilla de dos columnas iguales en escritorio: titular a la izquierda, bajada alineada abajo a la derecha. Los contenidos usan grillas asimétricas (5/7, 7/5, 6/6) y listas con reglas en lugar de tarjetas. Coberturas es la excepción: una grilla de mosaicos de 4 columnas desde 1024px, 2 desde 640px y 1 en celulares, con 12px de separación; los mosaicos grandes ocupan 2×2 (2 columnas en 640px) y el último de Empresas ocupa todo el ancho como barra. La portada no lleva formulario: ocupa clamp(36rem → 50rem) de alto (82svh) con la foto a sangre, y el texto (H1, bajada, CTA de cotizar con el WhatsApp redondo a su lado, y acceso a siniestros; sin tira de datos) en una columna de hasta 44rem a la izquierda, centrada en vertical desde 1024px, con alto mínimo clamp(40rem → 56rem) (94svh) y arriba en móvil, donde deja ~15–18rem libres abajo para que se vea la costa. El velo va de izquierda a derecha en escritorio y de arriba hacia abajo en móvil (denso detrás del texto, liviano sobre la costa). Siniestros es una grilla 5/7: a la izquierda titular, bajada y una sola acción; a la derecha los mosaicos por tipo, en una subgrilla de 6 columnas (Auto completo, Hogar y Comercio y consorcio a medias).

Equipo («Te atiende una persona») no usa la grilla de dos columnas: bajo el titular van dos tiras de retratos, «En la oficina» y «Productores asesores», cada una con un subtítulo mono `ink-2` bajo regla de 2px en tinta. La tira es una fila de scroll horizontal (`overflow-x`, `scroll-snap` x proximity, alineado al inicio), con tarjetas de 14.5rem (16rem desde 640px) separadas por 4px, sin biblioteca. La tira es una región enfocable por teclado (`tabindex="0"`, nombrada por su subtítulo) con barra de desplazamiento fina en `ink`. Un productor que ya figura en la oficina no se repite en la segunda tira.

Los campos de documento usan un margen numerado fijo: una columna de 2.75rem (3.25rem desde 640px) con el número, separada por una regla vertical de 1px, y el contenido a la derecha. En móvil todo pasa a una columna y aparece una barra fija inferior (Cotizá → /cotizar / WhatsApp, 72px de alto) que se oculta desde 768px; en una página con portada fotográfica la barra queda escondida (desliza hacia abajo, 300ms `ease-out-expo`) mientras la portada está a la vista, porque la portada ya lleva las mismas acciones. En una página que ya es un formulario, la barra lleva solo WhatsApp a ancho completo: no compite con el envío. La navegación completa aparece desde 1024px (`lg`); por debajo queda el botón Menú. La barra inferior móvil se oculta desde 768px.

Página de formulario con carátula (cotizar): sobre el papel con grano de página (el `main` no pinta fondo y arranca 4.5rem más abajo, bajo el header fijo), el formulario numerado ocupa la columna ancha y la carátula una columna de 29.5rem a la derecha desde 1024px, separadas por 56px, alineada con la parte superior del formulario y fija (`sticky`, 6rem del borde superior, por debajo del header) mientras se completa. Por debajo de 1024px la carátula va después del formulario y la barra de envío se mueve debajo de la carátula, para que el sello se vea antes de enviar.

## Elevation & Depth

El sistema es plano. No hay sombras en ninguna superficie: la jerarquía y la profundidad se expresan con reglas de distinto grosor (1px, 1.5px y 2px), con el contraste entre `paper` (con grano), `sheet` y `wash`, y con campos plenos (tinta, degradé del logo, campo bordó de siniestros, foto con velo marino). Las superposiciones son dos y ambas se imprimen con `mix-blend-mode: multiply` como tinta: el sello de cotizar y el velo `ink` al 10% sobre el mapa de Contacto.

### Named Rules
**The Ruled Not Raised Rule.** Un bloque se separa con una regla o un cambio de papel, nunca con una sombra. Si algo necesita destacarse, gana una regla de 2px o un campo oscuro.

## Shapes

Esquinas rectas (0px) en todo lo construido: formularios, campos, opciones, botones, bloques, el carril de aseguradoras, el mapa y la hoja de Contacto. Las casillas de elección son cuadrados de 24px con borde de 2px que se rellenan de tinta al elegir; los mosaicos de cobertura son rectángulos rectos de borde de 1.5px (`rule-soft`, o `ink` en los grandes rellenos) y el selector de coberturas es una barra de borde de 2px en tinta con dos pestañas rectas. Los únicos círculos son nativos del mundo, más una excepción de botón: la insignia circular del logo del cliente, los botones de solo ícono de WhatsApp (56px en la portada, 44px en el panel de cada persona), los puntos indicadores de 10px (8px en el menú; estado de atención; aviso bordó del acceso a siniestros, con anillo `paper`) y el sello de goma. Un dato que todavía falta se dibuja como una línea discontinua de 1.5px en `rule`, el renglón vacío de un formulario impreso. La foto de portada va a sangre, sin marco; el mapa de Contacto va a sangre, con la hoja de datos de borde recto de 2px en tinta encima (ver Mapa de Contacto). El marcador del mapa es la única forma de gota del sistema, dibujada a medida.

### Named Rules
**The Square Corner Rule.** Lo que el sistema dibuja tiene esquinas rectas. Lo circular se limita a lo que es circular por naturaleza: el logo, el sello y los indicadores de estado. Excepción (decisión del cliente): un botón de solo ícono puede ser circular; los ejemplos son el botón redondo de 56px de WhatsApp de la portada (`aria-label` "Escribinos por WhatsApp") y el de 44px del panel de cada persona (`aria-label` "Escribirle a <nombre> por WhatsApp"). Toda otra esquina, incluidos los botones con rótulo, sigue recta.

## Components

### Buttons
Barras de ancho completo o bloques sólidos, firmes y legibles, con una flecha que avanza 4px al hover.
- **Shape:** esquinas rectas (0px).
- **Primary (Cotizá):** fondo `ink`, texto `paper`, 1.25–1.375rem semibold, padding 14px × 20–24px, texto a la izquierda y flecha a la derecha. El rótulo nombra la rama elegida ("Cotizá tu seguro de Auto").
- **Primario sobre oscuro (portada, la única versión de `HeroCtas.astro`):** "Cotizá tu seguro →", 56px de alto (`h-14`), 1.25rem bold, padding horizontal 24px, texto a la izquierda y flecha de 24px a la derecha (avanza 4px al hover); `flex-1` en celulares y mínimo 19rem desde 640px. Relleno `cta-fill-light`, tinta `cta-ink-deep` (8.28:1). Se usa sobre la foto. Hover: `brightness(0.94)` en 200ms; clic a escala .98; sin movimiento con `prefers-reduced-motion`.
- **Claim (sobre el campo bordó):** barra `paper` con texto `claim-deep` 1.375rem bold, padding 20px × 24px y flecha de 28px; hover `claim-soft`. Las acciones secundarias del campo (teléfono, WhatsApp) son outline de 2px en `paper` que se invierten a fondo `paper` con texto `claim-deep`.
- **WhatsApp:** sólido en `seal` con el ícono de WhatsApp, hover `seal-deep` (menú móvil y barra inferior).
- **WhatsApp sobre la portada (ícono redondo):** botón de solo ícono, círculo de 56px (`size-14`, `rounded-full`) con el ícono de WhatsApp de 24px, pegado a la derecha del primario con 12px de separación. Mismo relleno, tinta y hover que el primario (`cta-fill-light` / `cta-ink-deep`). Sin rótulo visible; `aria-label` "Escribinos por WhatsApp". Es la única excepción circular de un botón (ver Square Corner Rule).
- **Outline:** borde de 2px en tinta, sin fondo; al hover se invierte a `ink` con texto `paper` (o pasa a `wash` en acciones menores).
- **WhatsApp de persona (ícono redondo, 44px):** `size-11` con el ícono de 20px, mismo relleno y tinta que el redondo de la portada, dentro del panel de cada persona (ver Tiras de retratos); `aria-label` "Escribirle a <nombre> por WhatsApp". Hoy todos usan el número general con un mensaje dirigido a la persona ("Hola <nombre>, quiero hacer una consulta."); el número individual está pendiente de confirmar con el cliente.
- **Hover / Focus:** transición de color de 200ms; flecha con `translate-x` 4px en 300ms `ease-out-expo`; foco con anillo teal de 3px.

### Inputs / Fields
- **Style:** fondo `sheet`, borde de 1.5px en `rule`, esquinas rectas, padding 10px × 14px, texto 1.125rem. Etiqueta arriba en 1rem `ink-2`.
- **Focus:** el borde pasa a `ink` y aparece el anillo teal de 3px con offset 2px.
- **Error:** borde `claim` y mensaje debajo en 1rem medium `claim`, enlazado al campo con `aria-describedby`; el foco va al primer campo con error.
- **Select:** misma piel, sin apariencia nativa, con chevron SVG de 20px a la derecha. En "¿Ya tenés productor?" la opción por defecto es "No tengo productor" y los nombres van en un grupo "Sí, mi productor es:".
- **Placeholder:** color `#5f7385` (4.91:1 sobre `sheet`); solo como ejemplo de formato, siempre con el prefijo "Ej.: " ("Ej.: 223 555-1234", "Ej.: 7600"); nunca reemplaza la etiqueta.

### Choice Tiles (opciones de campo)
- **Style:** fila de al menos 48px con borde de 1.5px `rule-soft`, casilla cuadrada de 24px con borde de 2px en tinta y texto 1.0625rem medium.
- **State:** hover con borde `ink`; elegida con borde `ink`, fondo `wash` y la casilla rellena de tinta con un check que escala de 50% a 100% en 200ms. 
- **Error de grupo:** cuando falta elegir, todas las opciones del grupo pasan a borde `claim`, el mensaje queda debajo del grupo y enlazado con `aria-describedby`, y la opción que recibe el foco muestra el anillo teal de 3px (offset 2px) sobre el borde rojo.

### Navigation
Una sola fila fija de 5rem (h-20), sin segunda franja: el estado de atención vive solo en Contacto.
- **Contenido:** logo circular de 44px en celulares y 56px desde 640px, con "Brokers Asociados" en Archivo bold condensado (1.1875rem en celulares, 1.5rem desde 640px); enlaces Seguros · Aseguradoras · Siniestros · Equipo · Contacto en 1.0625rem medium con 28px entre ellos; botón "Cotizá →" en `ink` con texto `paper`, 1.125rem bold, padding 12px × 20px y flecha (hover `ink-deep`, la flecha avanza 2px), del mismo peso que el primario de la portada. "Siniestros" lleva un punto de 8px en `claim` delante del texto, no el texto en rojo.
- **Sección activa:** el enlace de la sección que cruza el 35% superior de la ventana recibe `aria-current="location"` y un subrayado de 2px persistente (el mismo que se dibuja al hover).
- **Estados de la barra:** sobre la portada fotográfica arranca transparente, con tinta `paper` y el botón invertido (`paper` con texto `ink`), apoyada en un velo superior de la portada; pasada una distancia de 24px se vuelve papel con grano y un filete de 1px `rule-soft` abajo. En páginas sin portada es sólida desde el inicio. El estado se lee del atributo `data-sobre-hero`, que fija la prop `sobreHero` de `Header.astro` (la portada la activa).
- **Movimiento:** entra deslizándose desde arriba al cargar (0.7s `ease-out-expo`); se esconde al bajar pasados 160px y vuelve al subir o cuando algo dentro recibe foco; los enlaces dibujan un subrayado de 2px de izquierda a derecha al hover y al foco (0.35s). Todo se desactiva con `prefers-reduced-motion`.
- **Móvil y tableta (bajo 1024px):** botón de texto "Menú" / "Cerrar" junto a un ícono de dos líneas que se cruzan en una X; el panel, con el mismo papel con grano, se despliega animando la altura (`grid-template-rows` 0fr → 1fr, 0.45s), queda inerte mientras está cerrado y se cierra con Escape. Adentro: los cinco enlaces como filas de 1.5rem semibold con filete `rule-soft` y flecha, una barra "Cotizá tu seguro" en `ink` y una barra de WhatsApp en `seal`. Además, la barra fija inferior lleva las dos acciones principales (oculta mientras se ve la portada y desde 768px); en páginas de formulario, solo WhatsApp.
- **Salto al contenido:** el enlace de salto aparece por encima del header (capa 60).

### Field-Numbered Form Block (signature)
El formulario de cotización (página cotizar) es una hoja `sheet` con borde de 2px en tinta: campos numerados en un margen rayado (columna mono `ink-2` separada por un filete de 1px `rule`), filetes de 1px entre campos y la barra de envío en tinta pegada al borde inferior. La confirmación reemplaza el formulario en el mismo bloque y ofrece volver al inicio con un botón outline.

### Ruled List / Table
Cláusulas y contacto son listas con regla de 2px arriba y filetes de 1px entre filas, sin tarjetas. El contacto lleva cinco renglones (dirección en dos líneas, calle en semibold y ciudad en `ink-2`, y debajo el vínculo "Cómo llegar": solo el rótulo semibold subrayado con borde inferior de 2px en `ink`, seguido de una flecha derecha de 20px que avanza 4px al hover (300ms `ease-out-expo`), sin caja ni ícono a la izquierda, abre Google Maps en otra pestaña; horario con estado de atención, teléfono, un único email `info@`, Instagram), cada uno con un ícono lucide de 20px en una columna de 2rem; no hay datos escondidos detrás de un desplegable. Las cláusulas llevan "Art. N" en mono (en `seal-on-dark` sobre el degradé del logo, con el texto en `on-dark` y la regla superior en `paper`).

### Mapa de Contacto
Contacto es una sola sección, «Encontranos», con un mapa a sangre que se lee como parte del papel y no como un widget de Google. Es el embed de Google Maps (sin clave de API) en un `iframe` estático y de carga diferida (`loading="lazy"`, `inert`, `tabindex="-1"`, `pointer-events: none`) con `title` accesible que nombra la dirección (11 de Septiembre 2702, Mar del Plata). Va centrado por coordenadas (`ll=-37.9948,-57.5446`, `z=16`) y no por búsqueda de dirección, para que Google no dibuje su marcador ni su tarjeta de información: el único pin es el propio.
- **Composición en escritorio (`lg`, 1024px):** el mapa ocupa toda la sección (mínimo 44rem de alto) y la hoja de datos, una `sheet` de 30rem de ancho con borde de 2px en tinta y padding 32px, queda a la DERECHA, centrada en vertical, sobre el mar. Para que el pin no quede tapado, el `iframe` se corre (ancho 136%, `left` −36%) y el marcador se ubica al 32% desde la izquierda, en el área libre de la hoja.
- **Composición en celulares:** el mapa va arriba (20rem de alto, `h-80`) con el pin centrado, y la hoja de datos debajo, a ancho completo, sin borde, con padding 24px (32px desde 640px).
- **Hoja de datos:** el titular «Encontranos» (clamp 2rem → 3rem, bold) y la lista con regla (ver Ruled List / Table) con el botón de WhatsApp en `seal`. La capa que contiene la hoja no captura punteros salvo en la hoja.
- **Integración a la paleta:** el `iframe` lleva `filter: grayscale(1) contrast(.95) brightness(1.04)` y encima un velo `ink` al 10% con `mix-blend-mode: multiply`, de modo que ningún color de Google entra al sistema; el fondo bajo el mapa mientras carga es `rule-soft`. Esquinas rectas, sin sombra.
- **Marcador propio:** un pin SVG a medida de 44×56px, relleno `ink` con trazo `paper` de 3px y un punto `paper` al centro, con la punta en el centro vertical del mapa (horizontal: 50% en celulares, 32% en escritorio), sin eventos de puntero y oculto a lectores de pantalla. No usa el pin de Google ni un ícono lucide. Los colores van como valores del SVG (#184e77, #f6f4ef), no como variables. El mapa no se desplaza ni se acerca, así que el pin marca siempre la dirección.
- **Exploración:** el mapa no se mueve; para recorrer la zona está el vínculo "Cómo llegar" del renglón de dirección, que abre Google Maps en otra pestaña.

**The Map Wears the Paper Rule.** Un mapa incrustado se desatura y se tiñe de tinta antes de entrar a la página, y lleva el marcador propio como único pin. Nunca se muestra con los colores de Google ni con su pin o su tarjeta de información.

**The Still Map Rule.** El mapa nunca se desplaza ni se acerca, para que el único pin de tinta marque siempre la dirección. Quien quiere explorar lo hace con "Cómo llegar".

### Tiras de retratos (Personas)
Dos tiras horizontales de retratos, sin tabla ni tarjetas con borde: cada persona es una pieza recta de proporción 3:4. Los emails no se muestran (viven en Contacto) y la sección ya no enlaza a /productores.
- **Retrato:** foto de `src/assets/equipo/<slug>.(jpg|png|webp)` a `object-cover`, siempre en escala de grises, sobre el degradé gris neutro `portrait-top` → `portrait-bottom`. Mientras no hay foto, la pieza lleva ese mismo degradé con una silueta de tinta (`ink`, cabeza y hombros) pegada abajo. Carga diferida; `alt` vacío porque el nombre está en el panel.
- **Panel de datos:** hoja de `ink` con texto `paper` y padding 16px, con el rol en mono (`field-no`, `on-dark`), el nombre en 1.25rem bold y el botón redondo de WhatsApp de 44px debajo. Con mouse desde 768px (`hover: hover`) el panel queda oculto bajo la foto y sube desde abajo (0.5s `ease-out-expo`) al hover o al foco dentro de la pieza (`focus-within`), mientras la foto hace un zoom de 1.03 (0.7s). En pantallas táctiles o estrechas el mismo contenido queda siempre visible debajo de la foto, sin fondo, con texto `ink` y rol en `ink-2`.
- **Movimiento:** con `prefers-reduced-motion` el panel aparece sin transición y no hay zoom.

**The Strip Not Table Rule.** Las personas se muestran como tiras de scroll horizontal con snap proximity, accesibles por teclado, no como tabla ni como grilla de tarjetas; los datos de contacto van en un panel, no sobre la foto.

### Selector de coberturas (pestañas)
Dos pestañas, "Para vos" y "Para tu empresa", en una barra con borde de 2px en tinta a la derecha del titular (debajo en celulares). Cada pestaña mide al menos 56px de alto, texto 1.1875rem semibold, sin fondo; hover `wash`; la elegida se rellena de `ink` con texto `paper` (200ms). Semántica de pestañas: `role=tablist`, `aria-selected`, flechas izquierda/derecha con vuelta, Home y End, y solo la pestaña activa en el orden de tabulación. Lo muestra el script: sin JS no hay selector y los dos grupos se ven apilados, cada uno bajo su subtítulo de 1.75rem con regla de 2px en tinta.

### Mosaico de cobertura
Cada producto es un vínculo entero a `/cotizar?rama=…&producto=…`: ícono lucide, nombre, resumen de una línea y "Cotizar →" abajo; esquinas rectas, borde de 1.5px.
- **Chico:** fondo `sheet`, borde `rule-soft` (hover: `ink`), padding 20px, alto mínimo 11rem (12rem desde 1024px), ícono de 36px (trazo 1.6), nombre 1.25–1.375rem bold condensado, resumen 1rem `ink-2`.
- **Grande (Automotores, Hogar, Integral de comercio):** relleno `ink` con texto `paper`, padding 24–32px, ocupa 2×2 en escritorio; ícono de 56–64px (trazo 1.4), nombre 1.875–2.25rem, resumen 1.125rem `on-dark` en 34ch y, si hay, la nota en mono `seal-on-dark`. Hover: fondo `ink-deep`.
- **Barra (último de Empresas):** mosaico chico a ancho completo, en fila desde 1024px (ícono, texto que se estira, "Cotizar →").
- **Movimiento:** hover sube 2px sin sombra (200ms `ease-out-expo`) y la flecha avanza 4px; al cambiar de pestaña los mosaicos entran en escalón (0.55s `ease-out-expo`, 55ms de demora por posición, desde 0.75rem abajo y opacidad 0). Con `prefers-reduced-motion` no hay entrada ni elevación.

### Portada fotográfica
Una sola sección (`data-hero`), oscura y a sangre, con una fotografía real de la ciudad (`object-cover`, encuadre 30% 55% (22% 50% bajo 1024px) para que la costa quede a la derecha en escritorio y abajo en móvil), un velo marino en degradé por encima (en escritorio, además, un velo superior de 8rem que asienta la barra transparente del header) y un zoom lento tipo Ken Burns (32s, alternado, de escala 1.14 a 1, origen 30% 60%) que se detiene con `prefers-reduced-motion`. Texto en `paper` y `on-dark`; CTAs de 56px (ver Buttons) + botón redondo de WhatsApp; enlace subrayado a siniestros con punto bordó. El crédito de la foto ("Rambla de Mar del Plata · Foto: Ezarate, CC BY-SA 4.0"; en celulares queda la forma corta "Foto: Ezarate, CC BY-SA 4.0", con ancho máximo del 60%) va abajo a la derecha en Chivo Mono 0.875rem `on-dark`. Una por página.

### Campo de siniestros
Sección completa en degradé `claim-deep` → `claim` (125°) con el grano por encima (`--grano` a `--grano-tam` sobre el degradé), sin regla superior, texto en `paper` y secundario en `claim-soft`. Una por página. Columna izquierda: titular "¿Tuviste un siniestro?" (clamp 2.5rem → 4.5rem, ancho 84%), bajada "Respirá. Elegí qué te pasó y te guiamos con la denuncia." (1.25rem, 32ch, `claim-soft`) y una sola acción, la barra de denuncia "Denunciar un siniestro →" (`paper`, texto `claim-deep` 1.375rem bold, hover `claim-soft`, mínimo 22rem desde 1024px). Columna derecha: tres grupos bajo subtítulos de 1.125rem semibold con regla superior de 2px `paper`, sobre una grilla de 6 columnas desde 1024px (2 en celulares): Auto a ancho completo (3 mosaicos por fila, el último de la lista se extiende dos columnas), Hogar y Comercio y consorcio a la mitad cada uno. Ya no hay pasos numerados, teléfono, WhatsApp ni persona de guardia dentro del campo.
- **Mosaico de siniestro:** hoja `sheet` de esquinas rectas, padding 16px, alto mínimo 8rem (7.5rem desde 1024px); ícono de 36px en `claim` (trazo 1.6) arriba, rótulo 1.125–1.1875rem semibold `ink` y flecha de 20px `claim` abajo a la derecha. Los íconos son lucide salvo dos dibujados a medida en el mismo trazo (`parabrisas` para Cristales, `llanta` para Robo de ruedas). Hover y foco de teclado: un relleno `claim-soft` barre desde abajo (0.5s `ease-out-expo`), el ícono sube 4px, la flecha avanza 5px (0.45s) y el clic presiona el mosaico a escala .98 (0.12s). Todo se anula con `prefers-reduced-motion`: el relleno aparece sin barrido y no hay desplazamientos.

### Carril de aseguradoras
Un carril continuo de nombres entre dos reglas, sin tarjetas: la lista de aseguradoras corre en bucle lineal de 48s hacia la izquierda, como una cinta de registro. Cabecera de sección con el titular "Aseguradoras que confían en nosotros" (clamp(2rem → 3rem) bold), y la bajada en `ink-2`.
- **Carril:** banda de ancho completo con filetes de 1px `rule` arriba y abajo, desvanecida en los bordes por una máscara (transparente → opaco al 6%, opaco hasta el 94%). Dos copias de la lista en una pista de ancho máximo que se traslada -50%; la segunda lleva `aria-hidden` y alt vacío. Cada ítem mide 6rem de alto (7rem desde 640px), con filete vertical de 1px `rule` a la derecha y padding lateral de 2rem (3rem desde 640px).
- **Contenido del ítem:** hoy, el nombre en texto (1.375rem, 1.625rem desde 640px, semibold, ancho 92%, sin cortes de línea) como marcador de lugar. Los logos llegarán como SVG en `src/assets/aseguradoras/<slug>.svg` y se muestran como máscara teñida de `ink` (alto 2.5rem, 3rem desde 640px); al hover del ítem la tinta se cruza (300ms `ease-out`) con el color original del logo.
- **Pausa:** el movimiento se detiene al hover del carril y con un botón de pausa discreto a la derecha del titular de la sección, alineado abajo: cuadrado de 44px, borde de 1.5px `rule`, ícono de 16px (pausa / reproducir) en `ink-2`; al hover borde y ícono pasan a `ink` (200ms). Sin texto visible; el nombre accesible alterna "Pausar el carrusel de aseguradoras" / "Reanudar el carrusel de aseguradoras". Con `prefers-reduced-motion` el botón se oculta junto con el movimiento. No hay pausa por foco: los ítems no son interactivos.
- **Sin movimiento (`prefers-reduced-motion`):** el carril deja de correr, pierde la máscara, y la copia, y los ítems pasan a una grilla estática con bordes de reglas de 1px: 2 columnas en celulares, 3 desde 640px y 5 desde 1024px; el nombre puede cortar línea.

**The Pausable Motion Rule.** El movimiento continuo se frena al hover y tiene un control de pausa discreto y accesible por teclado (ícono solo, 44px, nombre que alterna Pausar/Reanudar); con `prefers-reduced-motion` desaparece junto con el control, y queda una grilla estática. Lo repetido para el movimiento (la copia) queda fuera del árbol de accesibilidad.

### Campo del logo
Sección completa con el campo de la insignia (base `ink`, degradé `ink` → `teal` a 118°), texto principal en `paper`, secundario en `on-dark` y rótulos mono en `seal-on-dark`, rematada por la tira de 8px con el degradé completo (`ink`, `teal`, `logo-aqua`, `logo-mint`). Una sola por página: es el momento de color de marca, no un fondo repetible.

### Sello de goma
Sello SVG circular en `seal` (`Stamp.astro`), rotado −11°, con texto en arco en Chivo Mono, leyenda central en Archivo 800 condensado y una textura de tinta irregular (filtro de ruido). Vive solo en la página de cotizar; la portada ya no lleva sello. Es un único sello por página.
- **Sello con leyenda:** la misma tinta, anillos, textura y rotación, con el arco fijo ("BROKERS ASOCIADOS · MAR DEL PLATA") y una leyenda central variable de una o más líneas en Archivo 800 condensado ("LISTO PARA / ENVIAR", "RECIBIDO"). Certifica un estado y tiene tres tiempos: **fantasma** (22% de opacidad desde la carga, anticipa lo que se va a ganar), **entintado** (opacidad plena y estampado de 0.8s `ease-out-expo`, desde escala 1.4 y 6° de giro) cuando están los datos requeridos, y **re-sellado** con una leyenda nueva al enviar. Es decorativo para lectores de pantalla; el estado se anuncia una sola vez en una región `aria-live` oculta. Cuenta como el sello único de su página.

### Carátula
La portada de la póliza: resume en vivo lo que el usuario va completando en un formulario. Hoja `sheet` con marco de 2px en tinta y esquinas rectas; cabecera con título (1.5rem, ancho 88%) y la fecha en mono `ink-2`, cerrada por una regla de 2px; debajo, la tira de guilloché (24px, 70% de opacidad, filete de 1px `rule` abajo); luego filas de datos con rótulo mono `ink-2` en una columna de 6.5rem y valor en 1.125rem semibold tinta, separadas por filetes de 1px `rule-soft`. El valor que falta se dibuja como renglón discontinuo, nunca como texto de relleno. El sello con leyenda se imprime a caballo de la esquina inferior derecha. Al enviar, el título cambia ("Pedido recibido") y el sello se re-sella.

## Do's and Don'ts

### Do:
- **Do** separar bloques con reglas: 2px en tinta para encabezados y secciones, 1px `rule` entre filas, 1.5px en bordes de campos.
- **Do** numerar los campos de un formulario (01, 02, 03) en un margen de 2.75–3.25rem con Chivo Mono `ink-2`.
- **Do** mantener el cuerpo en 1.125rem o más y los objetivos táctiles en 48px o más.
- **Do** reservar `claim` (bordó) para siniestros, errores y "Cerrado", y `teal` para el foco y el acento.
- **Do** marcar lo que falta confirmar con una única nota mono de versión demo en el footer y placeholders con borde punteado, en vez de inventar contenido o repetir avisos por sección.
- **Do** frenar al hover todo movimiento continuo, darle un botón de pausa discreto de 44px con nombre accesible y dejarlo estático con `prefers-reduced-motion`, como el carril de aseguradoras.
- **Do** respetar `prefers-reduced-motion` en el sello, el zoom de la foto de portada, el scroll suave y el movimiento del header.
- **Do** dejar las secciones de papel sin fondo propio y poner el grano una sola vez en la página, más la barra y el panel del header, el campo bordó, el campo del logo y el footer.
- **Do** usar fotografía real de Mar del Plata con su procedencia registrada y el crédito visible cuando la licencia lo pide.
- **Do** mostrar personas como retratos 3:4 en escala de grises sobre el degradé gris `portrait-top` → `portrait-bottom`, en tiras de scroll horizontal enfocables por teclado, con el contacto en un panel de `ink` que sube al hover o foco con mouse y queda visible debajo de la foto en táctil.
- **Do** dibujar los datos pendientes de una carátula como renglón discontinuo de 1.5px `rule` y escribir los placeholders como "Ej.: …".

### Don't:
- **Don't** usar sombras ni tarjetas con esquinas redondeadas.
- **Don't** usar el bordó como acento decorativo ni en acciones de cotización.
- **Don't** redondear botones, campos u opciones; lo circular se limita al logo, el sello y los indicadores de estado. Única excepción: un botón de solo ícono puede ser circular (el WhatsApp de la portada y el del panel de persona); un botón con rótulo nunca.
- **Don't** usar el guilloché como marca de agua de fondo; su única forma es la tira, y va solo en la cabecera de una carátula.
- **Don't** teñir las secciones ni usar el degradé del logo como tarjeta o bloque dentro de una sección, ni repetir el campo del logo, el campo de siniestros o la portada fotográfica más de una vez por página.
- **Don't** poner el grano sobre hojas blancas, mosaicos blancos, fotos ni texto: es una textura del papel, no un motivo.
- **Don't** usar `cta-fill-light` ni `cta-ink-deep` fuera de los CTAs de la portada sobre fondo oscuro y del botón de solo ícono de WhatsApp de las personas.
- **Don't** repetir el sello de goma más de una vez por página (el sello con leyenda de cotizar).
