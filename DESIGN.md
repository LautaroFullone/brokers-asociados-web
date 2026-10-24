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
  logo-aqua: "#34a0a4"  # sin uso desde que el campo del logo es plano
  logo-mint: "#52b69a"
typography:
  display:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 1.9rem + 5.2vw, 6.25rem)"
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
  # H2 del Cierre: escala display, apenas por encima del H1 de portada en escritorio (106px vs 100px a 1440).
  display-cierre:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(3.05rem, 1.6rem + 5.6vw, 6.75rem)"
    fontWeight: 700
    lineHeight: 0.95
    fontVariation: "'wdth' 84"
  # Bajadas de sección: 20px (1.25rem); la de portada sube a 22px (1.375rem).
  lead:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "1.25rem"
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
  # Solo queda en la página de cotizar (opciones de campo); la home ya no lo usa.
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
  # Botones de la portada (HeroCtas.astro) y del Cierre (CierreCtas.astro tono "oscuro"), sobre fondo oscuro. 56px de alto.
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
  # WhatsApp redondo de cada persona (PersonaCard.astro, ix-ink) sobre la etiqueta de papel.
  button-icon-round-sm:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.full}"
    size: "44px"
  button-icon-round-sm-hover:
    backgroundColor: "{colors.ink-deep}"
  # CierreCtas.astro, tono "claro" (sobre papel; HeroCtas conserva la prop, hoy sin uso). 56px de alto.
  button-on-light:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "56px"
    typography: "{typography.cta}"
  button-on-light-hover:
    backgroundColor: "{colors.ink-deep}"
  button-icon-round-on-light:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.full}"
    size: "56px"
  button-icon-round-on-light-hover:
    backgroundColor: "{colors.ink-deep}"
  section-cierre:
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.paper}"
  # Ancho fluido: (ancho de fila + 8px) / 2.5, 3.5 desde 640px, 4.5 desde 1024px.
  persona-card:
    backgroundColor: "{colors.portrait-bottom}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  # Etiqueta de datos: papel con grano y regla superior de 2px en tinta, superpuesta 2.75rem a la foto.
  persona-panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px"
  persona-rol:
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
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
    textColor: "{colors.ink-2}"
    typography: "{typography.item-bold}"
    rounded: "{rounded.none}"
    height: "52px"
  tab-selected:
    textColor: "{colors.ink}"
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

La portada es una sola sección centrada sobre una fotografía real de la costa de Mar del Plata, a sangre bajo un velo marino y con su crédito visible en mono. Es el único momento fotográfico grande: el resto de la página vuelve al papel. El guilloché sobrevive en una sola forma, la tira: una banda horizontal de onda fina en teal, de 24px de alto, que marca la cabecera de una carátula como papel de seguridad. El logo del cliente es una insignia circular y se respeta como tal; su línea (azul → teal → verde) es el campo de color que el sistema toma del logo: un degradé seguro para texto (de `ink` a `teal`, 118°) como fondo de sección, rematado por una tira de 8px con el degradé completo. El otro campo de color es el de siniestros: un bordó frío pleno, para que quien tuvo un problema encuentre la sección sin buscarla. El cierre de la página es un tercer campo oscuro, de tinta profunda con grano y solo tipografía: una frase enorme y dos botones, sin foto ni sello.

**Key Characteristics:**
- Un solo papel cálido (`paper`) con grano de página completa como fondo común; hojas blancas (`sheet`) para formularios, carátula, mosaicos; tinta marina en todo el texto.
- Esquinas rectas; reglas de 1px, 1.5px y 2px como única estructura.
- Números de campo y metadatos en Chivo Mono con cifras tabulares.
- Archivo variable condensado (ancho 84–92%) para titulares compactos y firmes.
- Bordó reservado para siniestros (incluido su campo de sección completa); verde para el sello y WhatsApp.
- Portada centrada sobre una fotografía real de la costa de Mar del Plata, a sangre bajo un velo marino y con crédito visible; una sola foto por página.
- Sin sombras, sin tarjetas redondeadas; única excepción circular: el botón de solo ícono de WhatsApp (portada, Cierre y etiqueta de cada persona).

## Colors

Una paleta de documento: tinta marina sobre un papel cálido con grano, con tres tintas funcionales que nunca se intercambian y el degradé del logo como único campo de color.

### Primary
- **Tinta de póliza** (`ink`): todo el texto principal, las reglas de 2px, el CTA de cotizar, el botón "Cotizá" del header y los fondos invertidos (footer, botón del menú móvil) y el color base bajo el campo del logo. El velo de la foto de la portada usa un azul translúcido propio del build (rgb 15 58 92, es decir `ink-deep` con alfa en degradé vertical), no un token. Su hover es la **Tinta profunda** (`ink-deep`).
- **Azul de vínculo** (`link`): el cambio de color al hover de los vínculos de texto (por ejemplo los vínculos de texto dentro de un párrafo). No es un fondo ni un color de reposo.
- **Tinta secundaria** (`ink-2`): leads, etiquetas de campo, números de campo, notas y pies de foto.

### Secondary
- **Verde sello** (`seal`): el sello con leyenda de la carátula, el teléfono de WhatsApp, los botones de WhatsApp (texto blanco 6.14:1), el punto de "Abierto ahora" y el ícono de confirmación. Hover en **Verde sello profundo** (`seal-deep`). `seal-soft` está definido en el tema para fondos de confirmación.

### Tertiary
- **Bordó siniestro** (`claim`, un bordó frío): el enlace "Siniestros" del menú, el punto del acceso "¿Tuviste un siniestro?" de la portada, los íconos y flechas de los mosaicos de siniestro, los mensajes de error de formulario y el punto de "Cerrado". El campo de siniestros es un degradé de `claim-deep` a `claim` (125°) a sección completa, con el grano del papel encima; sobre él, `claim-soft` es el texto secundario y `claim-deep` el texto de la barra blanca de denuncia. `claim-soft` es también el relleno de hover de los mosaicos y de la barra de denuncia.
- **Azul de foco y acento** (`teal`): el anillo de foco visible (3px, offset 3px), la tinta de la tira de guilloché y el extremo claro del campo del logo.

### Acción sobre oscuro
- **Celeste de acción** (`cta-fill-light`; al hover y foco `celeste-hover` #9ecdcf, el valor que antes daba `brightness(.94)`): relleno de los CTAs de la portada sobre la foto con velo (`HeroCtas.astro` con `tono="oscuro"`): el botón "Cotizá tu seguro" y el WhatsApp redondo; de los mismos dos botones en el Cierre sobre `ink` (`CierreCtas.astro` con `tono="oscuro"`). El botón redondo de WhatsApp de 44px de cada persona ya no usa el celeste: va en `ink` con ícono `paper` sobre la etiqueta de papel (`PersonaCard.astro`, ver Buttons).
- **Tinta marina** (`cta-ink-deep`): texto e ícono sobre `cta-fill-light`; 8.28:1.
Estos dos colores se usan solo en los CTAs de la portada y del Cierre sobre fondo oscuro. No se usan en otros botones, texto ni fondos. En el CSS de `CierreCtas.astro` van como literales (#a8dadc, #0f3554), igual que en la portada.

### Degradé del logo
- **Campo del logo** (`teal` plano + grano): el azul medio de la insignia del cliente como fondo liso de "Qué hacemos por vos". Sin degradé: el único degradé de la web es el del footer. Contraste del texto sobre `teal`: `paper` 4.67:1, `on-dark` 4.5:1, `seal-on-dark` 4.67:1.

### Neutral
- **Tinta en el Cierre** (`ink` + grano, `.con-grano`; el mismo `ink` con el que arranca el footer): el único campo oscuro liso de sección completa: el Cierre, entre Equipo y Contacto, sin bordes ni reglas, con texto `paper` y `on-dark`. Ver The One Paper Rule.
- **Papel** (`paper`, blanco cálido): el fondo de toda la página (sobre `html`), con el grano encima; las secciones de Coberturas, Aseguradoras, Equipo y Contacto y la página de cotizar no pintan fondo propio y dejan ver este papel. También es el texto sobre tinta, foto y campo bordó, el fondo del botón primario sobre oscuro y de la barra del header.
- **Hoja** (`sheet`, blanco puro): solo las superficies de hoja sobre el papel: formularios, campos, la carátula, los mosaicos de siniestro.
- **Grano** (`--grano` y `--grano-tam`; `--grano` es `url('/grano-fino.png')`, `--grano-tam` es 128px; tile PNG de ruido de tinta cálida, el grano "Fino" elegido por el cliente): la textura del papel, no un color. Una sola variable y una sola intensidad en todo el sitio. Lleva grano: el fondo de papel (capa fija detrás de todo el contenido), la barra sólida del header y el panel del menú móvil (`.superficie-papel`), la etiqueta de datos de cada persona de Equipo, el campo bordó de siniestros (`.bg-claim-field`), el campo del logo (`.bg-logo`) y el footer (`.con-grano`). No lleva grano: fotos (salvo el filtro arenoso de la portada, ver The One Grain Rule), hojas y mosaicos blancos (`sheet`) ni texto. Tile y tamaño salen de las variables, nunca de valores sueltos.
- **Lavado** (`wash`): opción elegida en un campo, placeholders de foto, hover de botones secundarios.
- **Regla** (`rule`): filetes de 1px entre filas y bordes de inputs (1.5px).
- **Regla suave** (`rule-soft`): bordes de opciones sin elegir, separadores dentro de bloques y el fondo del mapa mientras carga.
- **Fondo de retrato** (`portrait-top` #ececec arriba, `portrait-bottom` #dedede abajo, en degradé vertical): el gris neutro, sin matiz azul, detrás de los retratos de Personas y de la silueta provisoria. Elegido por el cliente porque el azul pálido de `rule-soft` desentonaba junto a las fotos en gris. Solo se usa en ese fondo.
- **Texto sobre oscuro** (`on-dark`): texto secundario sobre campos oscuros (la foto de portada con velo, el degradé del logo, el Cierre en `ink` y el footer en `ink`); 4.5:1 o más sobre `teal`.
- **Sello sobre oscuro** (`seal-on-dark`): los rótulos mono "Art. N" sobre el degradé del logo (4.7:1 sobre `teal`), la nota de planes en mono de los mosaicos grandes de Coberturas sobre `ink` ("Planes A, B1, B, Terceros completo y Todo riesgo."); la versión clara del verde sello para texto sobre fondos oscuros.

### Named Rules
**The Red Means Claim Rule.** El bordó (`claim` y sus variantes, hoy #8a1f45) aparece solo en lo relacionado con siniestros, errores de validación y el estado "Cerrado". Nunca como acento decorativo ni en un CTA de cotización.

**The Teal Is Focus Rule.** El token `teal` marca el anillo de foco y la tira de guilloché, y es el extremo del campo del logo; no se usa en botones ni fondos planos, para que el foco sea inconfundible. Los vínculos de texto cambian con `link`, no con `teal`.

**The Seal Is Green Rule.** El verde del logo se usa como tinta de sello y como color de WhatsApp; sobre oscuro, `seal-on-dark` marca los rótulos mono (artículos del campo del logo, nota de planes de los mosaicos grandes). No colorea titulares ni bloques de texto.

**The Light Greens Never Carry Text Rule.** Los verdes y azules claros del degradé (`logo-aqua`, `logo-mint`) viven solo en la tira de 8px; nunca en texto ni debajo de texto (blanco sobre `logo-mint` da 2.47:1). Todo texto sobre el campo del logo va sobre `ink` a `teal`.

**The Hero Action Rule.** El celeste de acción y la tinta marina (`cta-fill-light`, `cta-ink-deep`) existen solo para los CTAs de la portada y del campo oscuro de cierre (el mismo par "Cotizá tu seguro" + WhatsApp redondo). No se promueven a botones con rótulo de otras secciones. Sobre fondos claros el mismo par de acciones va en `ink` con texto `paper` (`tono="claro"` de `CierreCtas.astro`; `HeroCtas.astro` conserva la prop, hoy sin uso; ver Buttons).

**The One Paper Rule.** El fondo común es un único papel (`paper` con grano); las secciones no lo tiñen, con una excepción: el Cierre, que es un tercer campo oscuro (`ink-deep` con grano, sin bordes) y marca el corte entre Equipo y Contacto. Esa excepción es solo para la sección de cierre: no suma un segundo degradé del logo ni el bordó, y no se repite en otras secciones. El color de fondo llega solo como el campo del logo, el campo bordó de siniestros o ese cierre, siempre a sección completa. Nunca como tarjeta, franja suelta o bloque de color dentro de una sección.

**The One Grain Rule.** Hay un solo grano, un mismo tile (`grano-fino.png`, 128px) parametrizado por `--grano` y `--grano-tam`, a una sola intensidad. Cubre el papel (fondo de página, barra del header, panel del menú), el campo bordó de siniestros, el campo del logo, el Cierre en `ink` y el footer, siempre por encima del color como un papel tintado. Nunca cubre fotos (salvo la excepción de la portada, abajo), hojas blancas ni mosaicos blancos, ni texto. Excepción por decisión del cliente: la foto de la portada lleva un filtro arenoso permanente de dos capas del mismo tile mixto de la marca (`--grano`, 128px y 211px con desfase 37px 61px), por encima del velo y debajo del texto; es el único lugar donde el grano toca una foto y no tiene variante de tono.

## Typography

**Display Font:** Archivo Variable (con Archivo, system-ui)
**Body Font:** Archivo Variable (con Archivo, system-ui)
**Label/Mono Font:** Chivo Mono 400/500 (con ui-monospace)

**Character:** Una grotesca de ancho variable, condensada en titulares (84–92%) y a ancho normal en el texto, con una mono de máquina de escribir para los campos y metadatos del documento. La mezcla se lee como formulario oficial impreso, no como marca de tecnología.

### Hierarchy
- **Display** (700, clamp(3.25rem, 1.9rem + 5.2vw, 6.25rem), 1.04, ancho 84%, `text-balance`): solo el H1 de portada, «Elegimos tu seguro / con vos.» (salto de línea explícito), centrado, `text-balance`, `paper` sobre la foto. Las páginas interiores (cotizar) usan un escalón menor para su H1: clamp(2.5rem → 4rem), mismo ancho 84%.
- **Display de cierre** (700, clamp(3.05rem, 1.6rem + 5.6vw, 6.75rem), 0.95, ancho 84%, `text-balance`, máx. 14ch): el H2 del Cierre, una frase en escala display apenas por encima de la portada en escritorio (106px a 1440 contra 100px del H1; 48.8px a 375 contra 52px), para igualar su peso sin superarlo. Bajada del Cierre: 1.375rem (1.5rem desde 640px), 1.45, `on-dark`, máx. 34ch.
- **Headline** (700, clamp(2.25rem → 3.75rem), 1.04, ancho 88%): el H2 de cada sección. Aseguradoras usa un escalón menor (clamp(2rem → 3rem)), con el titular "Aseguradoras que confían en nosotros"; Siniestros sube a clamp(2.5rem → 4.5rem) a ancho 84%, en `paper` sobre el campo bordó.
- **Title** (700, 1.5–2rem, 1.04): encabezados de columna, cláusulas, título del formulario (1.625–1.875rem), título de la carátula (1.5rem, ancho 88%) y bloques laterales (1.375rem).
- **Lead** (400, 1.25rem, 1.55, `ink-2`): bajada de sección, 30–44ch. La bajada de portada sube a 1.25–1.375rem (20–22px) con interlineado 1.5, 40ch, centrada, en `on-dark` sobre la foto.
- **Body** (400, 1.125rem, 1.55): texto corriente y valores de campo; nombres de ítems en 1.25–1.375rem semibold.
- **Secundario** (400, 1rem): resúmenes de mosaicos chicos, etiquetas de campo y todo el texto secundario del footer.
- **Escala normalizada:** en la home solo quedan bajadas de 20–22px, cuerpo de 18px, secundario de 16px y mono de 14px; no hay textos de 17, 19, 15, 13 ni 12px. La página de cotizar todavía conserva 1.0625rem (17px) en opciones y 1.1875rem (19px) en su bajada.
- **Label** (Chivo Mono 500, 0.875rem, +0.02em, cifras tabulares): números de campo (01, 02, 03), encabezados de tabla, los rótulos y la fecha de la carátula, el estado de atención de Contacto, los números de paso de siniestros, el crédito de la foto de portada, la nota de versión demo del footer, los "Art. N" del campo del logo, la nota de planes de Coberturas y el rol de cada persona.

### Named Rules
**The Typed Field Rule.** Todo lo que en un documento real estaría tipeado a máquina (número de campo, artículo, notas de pie, rótulos de tabla) va en Chivo Mono con cifras tabulares. La prosa y los valores que el usuario lee van en Archivo.

**The Eighteen Floor Rule.** El cuerpo no baja de 1.125rem y ningún texto legible baja de 0.875rem.

## Layout

Contenedor central de 84rem con márgenes laterales de 16px (móvil), 32px (≥640px) y 48px (≥1024px). Las secciones respiran con 64 / 80 / 96px verticales según el ancho y se separan entre sí con una regla de 2px en tinta en el borde superior; la portada, el campo del logo, el campo de siniestros y el Cierre no llevan regla. El ritmo alterna papel con grano y campos de color, con este orden: portada (centrada sobre la foto con velo marino) → Coberturas (papel con grano) → "Qué hacemos por vos" en el degradé del logo → Aseguradoras (papel con grano) → Siniestros en el campo bordó → Equipo, «Nuestro equipo» (papel con grano) → Cierre (solo tipografía, `ink-deep` con grano, sin bordes) → Contacto (papel con grano, con el mapa) → footer `ink`. Los anclajes dejan 5.5rem de margen superior para no quedar bajo el header fijo.

Las cabeceras de sección son una grilla de dos columnas iguales en escritorio: titular a la izquierda, bajada alineada abajo a la derecha. Los contenidos usan grillas asimétricas (5/7, 7/5, 6/6) y listas con reglas en lugar de tarjetas. Coberturas es la excepción: una grilla de mosaicos de 4 columnas desde 1024px, 2 desde 640px y 1 en celulares, con 12px de separación; los mosaicos grandes ocupan 2×2 (2 columnas en 640px) y el último de Empresas ocupa todo el ancho como barra. La portada no lleva formulario, tira de datos ni sello. Su contenido es siempre el mismo (H1, bajada de 40ch, par de CTAs con el acceso a siniestros debajo), en una columna centrada de 84rem sobre la foto; lo único que sigue abierto es la foto (ver Portada). Siniestros es una grilla 5/7: a la izquierda titular, bajada y una sola acción; a la derecha los mosaicos por tipo, en una subgrilla de 6 columnas (Auto completo, Hogar y Comercio y consorcio a medias).

Equipo («Nuestro equipo») no usa la grilla de dos columnas ni subtítulos de grupo: bajo el titular (`mt-10`, `sm:mt-12`) van dos filas de retratos en bucle automático, separadas por 8px (`space-y-2`), cada una una lista nombrada «Equipo, fila N de 2». Cada fila recorta su pista (`overflow: clip`), se desvanece en los bordes con una máscara (transparente → opaco al 3%, opaco hasta el 97%) y muestra 2,5 retratos en celulares, 3,5 desde 640px y 4,5 desde 1024px; el ancho de cada tarjeta sale del ancho de la fila (container query), con 8px de separación como relleno de la propia tarjeta. Las cuatro personas de la oficina se reparten entre las dos filas, mezcladas con los productores; quien figura en la oficina y como productor aparece una sola vez. Sin biblioteca. Aseguradoras y Equipo cierran con 64 / 80 / 96px abajo (`mb-16`, `sm:mb-20`, `lg:mb-24`); Aseguradoras abre con `lg:pt-24`.

Los campos de documento usan un margen numerado fijo: una columna de 2.75rem (3.25rem desde 640px) con el número, separada por una regla vertical de 1px, y el contenido a la derecha. En móvil todo pasa a una columna y aparece una barra fija inferior (Cotizá → /cotizar / WhatsApp, 72px de alto) que se oculta desde 768px; en una página con portada fotográfica la barra queda escondida (desliza hacia abajo, 300ms `ease-out-expo`) mientras la portada está a la vista, porque la portada ya lleva las mismas acciones. En una página que ya es un formulario, la barra lleva solo WhatsApp a ancho completo: no compite con el envío. La navegación completa aparece desde 1024px (`lg`); por debajo queda el botón Menú. La barra inferior móvil se oculta desde 768px.

Página de formulario con carátula (cotizar): sobre el papel con grano de página (el `main` no pinta fondo y arranca 4.5rem más abajo, bajo el header fijo), el formulario numerado ocupa la columna ancha y la carátula una columna de 29.5rem a la derecha desde 1024px, separadas por 56px, alineada con la parte superior del formulario y fija (`sticky`, 6rem del borde superior, por debajo del header) mientras se completa. Por debajo de 1024px la carátula va después del formulario y la barra de envío se mueve debajo de la carátula, para que el sello se vea antes de enviar.

## Elevation & Depth

El sistema es plano. No hay sombras en ninguna superficie: la jerarquía y la profundidad se expresan con reglas de distinto grosor (1px, 1.5px y 2px), con el contraste entre `paper` (con grano), `sheet` y `wash`, y con campos plenos (tinta, degradé del logo, campo bordó de siniestros, foto con velo marino). Las superposiciones son dos y ambas se imprimen con `mix-blend-mode: multiply` como tinta: el sello de cotizar y el velo `ink` al 10% sobre el mapa de Contacto.

### Named Rules
**The Ruled Not Raised Rule.** Un bloque se separa con una regla o un cambio de papel, nunca con una sombra. Si algo necesita destacarse, gana una regla de 2px o un campo oscuro.

## Shapes

Esquinas rectas (0px) en todo lo construido: formularios, campos, opciones, botones, bloques, el carril de aseguradoras, el mapa y la hoja de Contacto. Las casillas de elección son cuadrados de 24px con borde de 2px que se rellenan de tinta al elegir; los mosaicos de cobertura son rectángulos rectos de borde de 1.5px (`rule-soft`, o `ink` en los grandes rellenos) y el selector de coberturas son dos pestañas de texto planas con subrayado recto sobre la grilla (ver Selector de coberturas). Los únicos círculos son nativos del mundo, más una excepción de botón: la insignia circular del logo del cliente, los botones de solo ícono de WhatsApp (56px en la portada y en el Cierre, 44px en la etiqueta de cada persona), los puntos indicadores de 10px (8px en el menú; estado de atención; aviso bordó del acceso a siniestros, con anillo `paper`) y el sello de goma. Un dato que todavía falta se dibuja como una línea discontinua de 1.5px en `rule`, el renglón vacío de un formulario impreso. La foto de portada va siempre a sangre y sin marco; el texto va directo sobre ella, sin hoja ni filetes. El mapa de Contacto va a sangre, con la hoja de datos de borde recto de 2px en tinta encima (ver Mapa de Contacto). El marcador del mapa es la única forma de gota del sistema, dibujada a medida.

### Named Rules
**The Square Corner Rule.** Lo que el sistema dibuja tiene esquinas rectas. Lo circular se limita a lo que es circular por naturaleza: el logo, el sello y los indicadores de estado. Excepción (decisión del cliente): un botón de solo ícono puede ser circular; los ejemplos son el botón redondo de 56px de WhatsApp de la portada (`aria-label` "Escribinos por WhatsApp") y el de 44px, en `ink`, de la etiqueta de cada persona (`aria-label` "Escribirle a <nombre> por WhatsApp"). Toda otra esquina, incluidos los botones con rótulo, sigue recta.

## Components

### Buttons
Barras de ancho completo o bloques sólidos, firmes y legibles, con una flecha que avanza 4px al hover.
- **Shape:** esquinas rectas (0px).
- **Primary (Cotizá):** fondo `ink`, texto `paper`, 1.25–1.375rem semibold, padding 14px × 20–24px, texto a la izquierda y flecha a la derecha. El rótulo nombra la rama elegida ("Cotizá tu seguro de Auto").
- **Primario sobre oscuro (portada, `HeroCtas.astro` con `tono="oscuro"`; la prop `centrado` centra el grupo):** "Cotizá tu seguro →", 56px de alto (`h-14`), 1.25rem bold, `nowrap`, padding horizontal 20px en celulares (`px-5`) y 24px desde 640px, texto a la izquierda y flecha de 24px a la derecha (avanza 4px al hover); `flex-1` en celulares y mínimo 19rem desde 640px. Relleno `cta-fill-light`, tinta `cta-ink-deep` (8.28:1). Se usa sobre la foto. Hover y foco: relleno `celeste-hover` (#9ecdcf); ver Interacción.
- **Claim (sobre el campo bordó):** barra `paper` con texto `claim-deep` 1.375rem bold, padding 20px × 24px y flecha de 28px; hover `claim-soft`. Es la única acción del campo ("Denunciar un siniestro →"): ya no hay botones outline de teléfono ni de WhatsApp.
- **WhatsApp:** sólido en `seal` con el ícono de WhatsApp, hover `seal-deep` (menú móvil y barra inferior).
- **WhatsApp sobre la portada (ícono redondo):** botón de solo ícono, círculo de 56px (`size-14`, `rounded-full`) con el ícono de WhatsApp de 24px, pegado a la derecha del primario con 12px de separación. Mismo relleno, tinta y hover que el primario (`cta-fill-light` / `cta-ink-deep`). Sin rótulo visible; `aria-label` "Escribinos por WhatsApp". Es la única excepción circular de un botón (ver Square Corner Rule).
- **CTAs del Cierre (`CierreCtas.astro`, prop `tono`):** el mismo par con dos tonos. `oscuro` (el que usa el Cierre) lleva el relleno y la tinta de la portada (`cta-fill-light` / `cta-ink-deep`, hover `brightness(.94)`). `claro` (sin uso hoy en la home) es la versión descrita a continuación.
- **Primario sobre claro (`CierreCtas.astro` con `tono="claro"`):** misma geometría que el de la portada (56px de alto, 1.25rem bold, padding horizontal 24px, flecha de 24px que avanza 4px, `flex-1` en celulares y mínimo 19rem desde 640px) en relleno `ink` y texto `paper`: "Cotizá tu seguro →" hacia /cotizar. WhatsApp redondo de 56px a su lado (12px de separación), también `ink` con ícono `paper` y `aria-label` "Escribinos por WhatsApp". Hover y foco: `ink-deep`; ver Interacción. El celeste es el tono `oscuro`.
- **Outline:** borde de 2px en tinta, sin fondo; al hover se invierte a `ink` con texto `paper` (o pasa a `wash` en acciones menores).
- **WhatsApp de persona (ícono redondo, 44px):** `size-11` con el ícono de 20px, relleno `ink` e ícono `paper` (`ix-accion ix-ink`, hover `ink-deep`), a la derecha de la etiqueta de papel de cada persona (ver Equipo); en las copias del bucle sale del orden de tabulación (`tabindex="-1"`); `aria-label` "Escribirle a <nombre> por WhatsApp". Hoy todos usan el número general con un mensaje dirigido a la persona ("Hola <nombre>, quiero hacer una consulta."); el número individual está pendiente de confirmar con el cliente.
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
- **Contenido:** logo circular de 44px en celulares y 56px desde 640px, con "Brokers Asociados" en Archivo bold condensado (1.25rem en celulares, 1.5rem desde 640px); enlaces Seguros · Aseguradoras · Siniestros · Equipo · Contacto en 1.125rem (18px) medium con 28px entre ellos; botón "Cotizá →" en `ink` con texto `paper`, 1.125rem bold, padding 12px × 20px y flecha (hover `ink-deep`, la flecha avanza 2px), del mismo peso que el primario de la portada. "Siniestros" lleva un punto de 8px en `claim` delante del texto, no el texto en rojo.
- **Sección activa:** el enlace de la sección que cruza el 35% superior de la ventana recibe `aria-current="location"` y un subrayado de 2px persistente (el mismo que se dibuja al hover).
- **Estados de la barra:** sobre la portada fotográfica arranca transparente, con tinta `paper` y el botón invertido (`paper` con texto `ink`), apoyada en un velo superior de la portada; pasada una distancia de 24px se vuelve papel con grano y un filete de 1px `rule-soft` abajo. En páginas sin portada es sólida desde el inicio. El estado se lee del atributo `data-sobre-hero`, que fija la prop `sobreHero` de `Header.astro` (la portada la activa siempre: la barra queda transparente sobre la foto).
- **Movimiento:** entra deslizándose desde arriba al cargar (0.7s `ease-out-expo`); se esconde al bajar pasados 160px y vuelve al subir o cuando algo dentro recibe foco; los enlaces dibujan un subrayado de 2px de izquierda a derecha al hover y al foco (0.35s). Todo se desactiva con `prefers-reduced-motion`.
- **Móvil y tableta (bajo 1024px):** botón de texto "Menú" / "Cerrar" junto a un ícono de dos líneas que se cruzan en una X; el panel, con el mismo papel con grano, se despliega animando la altura (`grid-template-rows` 0fr → 1fr, 0.45s), queda inerte mientras está cerrado y se cierra con Escape. Adentro: los cinco enlaces como filas de 1.5rem semibold con filete `rule-soft` y flecha, una barra "Cotizá tu seguro" en `ink` y una barra de WhatsApp en `seal`, ambas en 1.125rem semibold. Además, la barra fija inferior lleva las dos acciones principales (oculta mientras se ve la portada y desde 768px); en páginas de formulario, solo WhatsApp.
- **Salto al contenido:** el enlace de salto aparece por encima del header (capa 60).

### Field-Numbered Form Block (signature)
El formulario de cotización (página cotizar) es una hoja `sheet` con borde de 2px en tinta: campos numerados en un margen rayado (columna mono `ink-2` separada por un filete de 1px `rule`), filetes de 1px entre campos y la barra de envío en tinta pegada al borde inferior. La confirmación reemplaza el formulario en el mismo bloque y ofrece volver al inicio con un botón outline.


### Hoja de denuncia (siniestros/denuncia)
Variante del bloque numerado para denunciar un siniestro (`/siniestros/denuncia`, demo: valida y no envía nada). Columna de 56rem con el vínculo «Volver a Siniestros» (`ix-sub`, flecha izquierda de 16px) arriba, H1 «Denunciar un siniestro» (clamp 2.5rem → 4rem, ancho 84%) y bajada de 1.25rem `ink-2`. La hoja es `sheet` con borde de 2px en `claim-deep` (no en tinta) y los mismos filetes de 1px `rule` entre campos; los números 01–03 van en Chivo Mono `claim` en el margen de 2.75rem (3.25rem desde 640px).
- **Campos:** 01 «¿Qué te pasó?» (select de tipos de siniestro, grupo · tipo; llega preseleccionado por `?tipo=` desde los mosaicos de Siniestros); 02 «El hecho» (fecha con máximo hoy, lugar, relato opcional); 03 «Cómo te encontramos» (nombre y teléfono de al menos 10 dígitos). Misma piel de campo que cotizar.
- **Envío (`ix-claim`):** botón de ancho completo en celulares (mínimo 22rem desde 640px), relleno `claim-deep`, texto `paper` 1.25rem semibold, flecha de 24px; hover y foco `claim`. Sobre el rojo, el texto `paper` supera 7:1.
- **Validación:** los errores se muestran en `claim` bajo cada campo y el foco va al primero inválido. Al enviar, la hoja pasa a un panel de éxito (foco programático, `role=status`) con «Seguir por WhatsApp» (`ix-seal`), «Volver al inicio» (outline) y la nota mono «Versión demo: este formulario todavía no envía datos.». Debajo de la hoja, una línea con el teléfono de Siniestros (223 624-7475) y el WhatsApp. La barra móvil lleva solo WhatsApp.

### Ruled List / Table
Las cláusulas son una lista con regla de 2px arriba y filetes de 1px entre filas, sin tarjetas. Llevan "Art. N" en mono 0.875rem medium sin corte de línea (`whitespace-nowrap`), en `seal-on-dark` sobre el degradé del logo, en una columna de 3.75rem (4.5rem desde 640px) con 16px hasta el texto; el texto va en `on-dark` y la regla superior en `paper`. Los datos de contacto ya no son una lista: viven en la hoja de Contacto (ver Mapa de Contacto) y, con íconos de 20px, en el footer.

### Mapa de Contacto
Contacto es una sola sección, «Encontranos», con un mapa a sangre que se lee como parte del papel y no como un widget de Google. Es el embed de Google Maps (sin clave de API) en un `iframe` estático y de carga diferida (`loading="lazy"`, `inert`, `tabindex="-1"`, `pointer-events: none`) con `title` accesible que nombra la dirección (11 de Septiembre 2702, Mar del Plata). Va centrado por coordenadas (`ll=-37.9948,-57.5446`, `z=16`) y no por búsqueda de dirección, para que Google no dibuje su marcador ni su tarjeta de información: el único pin es el propio.
- **Composición en escritorio (`lg`, 1024px):** el mapa ocupa toda la sección (mínimo 44rem de alto) y la hoja de datos, una `sheet` de 32rem de ancho (`lg:w-[32rem]`) con borde de 2px en tinta, queda a la DERECHA, centrada en vertical, sobre el mar. Para que el pin no quede tapado, el `iframe` se corre (ancho 136%, `left` −36%) y el marcador se ubica al 32% desde la izquierda, en el área libre de la hoja. Padding de la hoja: `p-6` (24px) y `sm:p-8` (32px).
- **Composición en celulares:** el mapa va arriba (20rem de alto, `h-80`) con el pin centrado, y la hoja de datos debajo, a ancho completo, sin borde, con padding 24px (32px desde 640px).
- **Hoja de datos (elegida por el cliente: variante K2, «Dirección»):** `sheet` con texto `ink`; la capa que la contiene no captura punteros salvo en la hoja. De arriba abajo: (1) rótulo mono «Encontranos» (`field-no`, es el H2 de la sección) bajo una regla de 2px en `currentColor` y opacidad .75; (2) la calle como título (clamp(1.75rem, 1.2rem + 2vw, 2.25rem), bold, ancho 88%, interlineado 1.05, tracking −0.02em); (3) la ciudad en `ink-2` (1.125rem); (4) el horario en medium 1.125rem y debajo la línea de estado en vivo en mono 0.875rem `ink-2` con un punto de 10px (`seal` abierto, `claim` cerrado, `rule` antes de que corra el script); (5) tres mosaicos rectos en grilla de 3 columnas con 8px de separación y 96px de alto mínimo, ícono lucide de 24px sobre rótulo 1.125rem semibold: **Llamar** relleno `ink` y texto `paper` (hover `ink-deep`), **WhatsApp** relleno `seal` (`ix-seal`) y **Cómo llegar** sin relleno con borde de 2px `ink` y texto `ink` (hover `wash`), todos con `ix-accion`; (6) bajo una regla de 1px `rule`, el email y el Instagram en 1rem (`ix-sub`), cada uno con un ícono de línea de 20px a la izquierda (`mail`, `instagram`). Sin colores nuevos: el único relleno de color de la hoja son los mosaicos.
- **Integración a la paleta:** el `iframe` lleva `filter: grayscale(1) contrast(.95) brightness(1.04)` y encima un velo `ink` al 10% con `mix-blend-mode: multiply`, de modo que ningún color de Google entra al sistema; el fondo bajo el mapa mientras carga es `rule-soft`. Esquinas rectas, sin sombra.
- **Marcador propio:** un pin SVG a medida de 44×56px, relleno `ink` con trazo `paper` de 3px y un punto `paper` al centro, con la punta en el centro vertical del mapa (horizontal: 50% en celulares, 32% en escritorio), sin eventos de puntero y oculto a lectores de pantalla. No usa el pin de Google ni un ícono lucide. Los colores van como valores del SVG (#184e77, #f6f4ef), no como variables. El mapa no se desplaza ni se acerca, así que el pin marca siempre la dirección.
- **Exploración:** el mapa no se mueve; para recorrer la zona está el vínculo "Cómo llegar" del renglón de dirección, que abre Google Maps en otra pestaña.

**The Map Wears the Paper Rule.** Un mapa incrustado se desatura y se tiñe de tinta antes de entrar a la página, y lleva el marcador propio como único pin. Nunca se muestra con los colores de Google ni con su pin o su tarjeta de información.

**The Still Map Rule.** El mapa nunca se desplaza ni se acerca, para que el único pin de tinta marque siempre la dirección. Quien quiere explorar lo hace con "Cómo llegar".

### TEMPORAL · Pruebas de la hoja de Contacto (borrar al decidir)
Panel fijo abajo a la izquierda (sobre la barra móvil en celulares; grupo «Probar variantes de la hoja de Contacto (demo)», borde de 1.5px `ink`, fondo `sheet`) con tres interruptores que escriben atributos `data-*` en la sección. No es parte del sistema: se borran el panel, el script y las reglas de `[data-fondo]`, `[data-grano]` y `[data-iconos]` cuando el cliente decida. Sin colores nuevos. El build base (hoy activo) es: íconos con, fondo blanco, sin grano.
- **Iconos** (`data-iconos`, con / sin): sin íconos, los de mail e Instagram se ocultan y aparece un separador «·» entre los dos vínculos.
- **Fondo** (`data-fondo`): **blanco** (`sheet`, el actual); **papel** (`paper` con una capa de `--grano`, sin las dos capas del filtro arenoso); **tinta** (relleno `ink`, texto `paper`, secundario `on-dark`, reglas `paper` al 40%, Llamar en `cta-fill-light` con texto `cta-ink-deep`, Cómo llegar contorno `paper`, borde `ink-deep` y el punto de estado con un aro de 2px `paper` para leerse sobre tinta).
- **Grano** (`data-grano`): **no**; **hoja** (dos capas de `--grano` a 128px y 211px con desfase 37px 61px sobre la hoja); **mapa** (las mismas dos capas como `::after` sobre el mapa, bajo el pin); **ambos**.
- **Pendiente de decisión del cliente:** el grano sobre la hoja o sobre el mapa contradice The One Grain Rule (excluye fotos y hojas blancas; la única excepción es la portada). La regla no se enmienda hasta que el cliente elija; si gana «no», no hay cambio. Lo mismo para «tinta» y «papel»: hoy no hay una hoja de Contacto en `ink` o `paper` en el sistema, y el uso de `cta-fill-light` en ella contradice The Hero Action Rule.

### Equipo (Personas)
Titular «Nuestro equipo» (escala headline). Todas las personas, sin distinguir a nadie, en dos filas de retratos en bucle automático (21 personas: 10 y 11; ver Layout). Sin tabla ni subtítulos de grupo: la diferencia entre oficina y productores se marca con el rol de cada persona (Producción, Siniestros, Cobranzas, «Productor asesor»). Los emails no se muestran (viven en Contacto).
- **Retrato:** pieza recta 4:5; foto gris de `src/assets/equipo/<slug>.webp` y, apilada encima, su versión en color de `src/assets/equipo/color/<slug>.webp` (`alt` vacío, `aria-hidden`). Sobre el degradé neutro `portrait-top` → `portrait-bottom`; sin foto, silueta `rule` pegada abajo. Con mouse (`hover: hover`) el color aparece al hover y al foco (opacidad 0.4s `ease-out-expo`, zoom 1.03 en 0.7s); en táctil (`hover: none`) la capa color no se pinta ni se descarga hasta el primer toque, que la funde en 0.4s y frena la fila; tocar otra foto la cambia y volver a tocar la misma la devuelve al gris (una a la vez; tocar el WhatsApp no cuenta).
- **Filas:** 60s por vuelta, fila 1 hacia la izquierda y fila 2 hacia la derecha; 4,5 retratos visibles desde 1024px, 3,5 desde 640px y 2,5 en celulares. Pista duplicada con `translateX(-50%)`; la copia va `aria-hidden` y con `tabindex="-1"` en sus enlaces (no `inert`: una copia inerte no recibe hover y la foto no se coloreaba). La separación entre retratos es relleno de la tarjeta, no margen, para que no haya zonas muertas. Se frenan solo mientras dura una interacción: al hover (solo con `hover: hover`), al foco de teclado dentro de la fila (`focus-within`; si la persona enfocada quedó fuera de vista, el script mueve la animación para traerla a la ventana) y mientras haya una foto tocada (`:has(.tocada)`). Al salir, retoman solas. Hay un botón de pausa: cuadrado de 44px (`size-11`), borde de 1.5px `rule`, solo ícono en `ink-2` (hover `ink`), a la derecha del titular; alterna el `aria-label` «Pausar el carrusel del equipo» / «Reanudar el carrusel del equipo» y marca `data-pausado` en la sección, lo que frena las dos filas. Con `prefers-reduced-motion` el botón se oculta junto con el movimiento y la copia: cada fila se recorre a mano con scroll-snap.
- **Etiqueta sobre la foto:** la tarjeta es el retrato y los datos van en una etiqueta `paper` (con grano) con regla de 2px `ink` arriba, superpuesta 2.75rem al borde inferior de la foto y con 0.5rem de aire a cada lado; padding 12px (10px en celulares); arriba el rol en Chivo Mono 0.875rem `ink-2` y debajo el nombre bold (1.25rem desde 640px, 1rem en celulares, interlineado 1.15), con el WhatsApp redondo de 44px en `ink` con ícono `paper` a la derecha, alineado abajo. En celulares el rol pierde el tracking y reserva siempre dos renglones (`min-height: 2lh`), porque «Productor asesor» ocupa dos y así todos los nombres quedan alineados; además (tarjetas de ~126px) el botón se apoya sobre la regla de la etiqueta, dentro de la foto (`bottom: calc(100% + 0.5rem)`), para que ningún nombre largo pase por debajo.

**The Strip Not Table Rule.** Las personas se muestran como filas de retratos en bucle (o con scroll horizontal con `prefers-reduced-motion`), accesibles por teclado, no como tabla ni como grilla de tarjetas.

**The Allowed Motion Rule.** El movimiento continuo (en bucle) solo existe en el carril de Aseguradoras y en las filas de Equipo. Ambos se frenan al hover, ocultan la copia a lectores de pantalla y quedan estáticos con `prefers-reduced-motion`; las filas de Equipo además se frenan al foco de teclado, al tocar una foto y con su botón de pausa (igual que el del carril de Aseguradoras, como exige la Pausable Motion Rule). Excepción finita: el alejamiento de la foto de portada dura ~14s una sola vez y termina quieto; no se repite, así que no lleva control de pausa (WCAG 2.2.2 se cumple porque el movimiento termina; es fondo decorativo y finito).

### Selector de coberturas (pestañas)
Dos pestañas de texto planas, "Para vos" y "Para tu empresa", en una fila (`tabs-fila`) pegada encima de la grilla de mosaicos, con `mt-6` (`lg:mt-8`) bajo la bajada de la cabecera y 1.25rem de aire hasta la grilla. La fila lleva una regla inferior de 1px en `rule` y se alinea a la derecha en escritorio (`justify-content: flex-end`); en celulares las pestañas ocupan el ancho completo, repartidas en partes iguales. Cada pestaña mide al menos 52px de alto, texto 1.125rem semibold en todos los anchos, 2rem entre pestañas. Inactiva en `ink-2` (hover `ink`); la activa pasa a `ink` con un subrayado de 4px en `ink` que se apoya sobre la regla de 1px (color y borde en 250ms `ease-out-expo`). El estado activo nunca usa el relleno de `ink` de los mosaicos grandes. Las pestañas no llevan cantidad: no hay números en el selector ni en las notas que señalan a la otra pestaña. Semántica de pestañas: `role=tablist`/`tab`/`tabpanel`, `aria-selected`, flechas izquierda/derecha con vuelta, Home y End, y solo la pestaña activa en el orden de tabulación; los paneles llevan `tabindex="-1"` para poder recibir el foco por script. Lo muestra el script: sin JS no hay selector y los dos grupos se ven apilados, cada uno bajo su subtítulo de 1.75rem con regla de 2px en tinta. Con `prefers-reduced-motion` las pestañas no animan color.

**Aviso hacia la otra pestaña** (la guía elegida por el cliente). Hasta el primer cambio de pestaña (`data-cambiado`, por clic o teclado), la pestaña inactiva lleva un subrayado fijo de 2px en `rule` y una flecha de 16px (`arrowRight`, trazo 2.25) después del rótulo, a 0.5rem; al hover el subrayado se engrosa a 4px y la flecha avanza 3px. Cada vez que la sección entra en pantalla (IntersectionObserver al 35% sobre la fila de pestañas, que alterna `data-visto`), el subrayado de la inactiva se dibuja de izquierda a derecha en 4px tres veces (1.6s `ease-out-expo` cada una, tras 0.3s; unos 4.8s de movimiento, bajo el límite de 5 segundos de WCAG 2.2.2, por eso no lleva control de pausa) y la flecha avanza 4px con cada pasada; después queda en la línea fija de 2px. Es un movimiento finito, no continuo. Tras el primer cambio desaparecen la línea y la flecha, y al hover la pestaña inactiva dibuja el subrayado completo de 4px en `rule`. No suma colores ni texto: no hay notas, barras ni enlaces que señalen a la otra pestaña. Con `prefers-reduced-motion` no hay animación ni transición: solo la línea fija y la flecha.

### Mosaico de cobertura
Cada producto es un vínculo entero a `/cotizar?rama=…&producto=…`: ícono lucide, nombre, resumen de una línea y "Cotizar →" abajo; esquinas rectas, borde de 1.5px.
- **Chico:** fondo `sheet`, borde `rule-soft` (hover: `ink`), padding 20px, alto mínimo 11rem (12rem desde 1024px), ícono de 36px (trazo 1.6), nombre 1.25–1.375rem bold condensado, resumen 1rem `ink-2`.
- **Grande (Automotores, Hogar, Integral de comercio):** relleno `ink` con texto `paper`, padding 24–32px, ocupa 2×2 en escritorio; ícono de 56–64px (trazo 1.4), nombre 1.875–2.25rem, resumen 1.125rem `on-dark` en 34ch y, si hay, la nota en mono `seal-on-dark`. Hover: fondo `ink-deep`.
- **Barra (último de Empresas):** mosaico chico a ancho completo, en fila desde 1024px (ícono, texto que se estira, "Cotizar →").
- **Movimiento:** hover y foco: tarjeta navegable (relleno que sube desde abajo, ver Interacción); al cambiar de pestaña los mosaicos entran en escalón (0.55s `ease-out-expo`, 55ms de demora por posición, desde 0.75rem abajo y opacidad 0). Con `prefers-reduced-motion` no hay entrada ni elevación.

### Portada
Una sola sección por página (`data-hero`), centrada sobre una única fotografía real de la bahía de Mar del Plata con la ciudad, a sangre, en un `<picture>` con dirección de arte cortada en 768px. Desde 768px: `hero-bahia-ciudad1-desktop.webp` 2632×1480 (16:9), calidad por candidato: 1280w y 1920w a q90 (302 KB y 610 KB), 2632w a q85 (976 KB; era 1186 KB a q90), `srcset` 1280 / 1920 / 2632; servida a 1440 px con DPR 2 pesa ≈976 KB. Por debajo: `hero-bahia-mobile.webp` vertical 1170×2340, calidad 80 (se mantiene), `srcset` 640 / 900 / 1170. Todo webp, sin escalar nunca por encima del ancho real del archivo. Es el LCP: `loading="eager"` y `fetchpriority="high"`. Archivos en `src/assets/img/hero/` (ver `LEEME.md`; licencia Unsplash, que no exige atribución pero se acredita igual). `object-fit: cover` con `object-position` 60% 50% en escritorio y 30% 50% en móvil. Alto mínimo clamp(40rem → 56rem) (94svh). El contenido es fijo y centrado: H1 display «Elegimos tu seguro / con vos.» (salto de línea explícito, `text-balance`), bajada de 40ch en `on-dark` (20px, 22px desde 640px, interlineado 1.5), par de CTAs de `HeroCtas.astro` en celeste, centrados (ver Buttons), con el enlace a siniestros con punto bordó debajo. Sin tira de rubros, sello, hoja ni filetes. El header queda transparente sobre la foto (`data-sobre-hero`).

Crédito: «Foto: Maximiliano Deliso / Unsplash», enlazado a la página de la foto en Unsplash; Chivo Mono 0.875rem (14px) `on-dark`, abajo a la derecha, sin salto de línea desde 640px.

Un solo alejamiento lento de la foto (`costa`): escala 1.05 → 1 con desplazamiento vertical de 0.5% → 0, 14s, `cubic-bezier(0.22, 1, 0.36, 1)`, 0.2s de demora, 1 iteración, `fill-mode: both`; al terminar la foto queda quieta. Sin bucle, sin alternado y sin `will-change`; sin animación ni transformación con `prefers-reduced-motion`.

**Velo.** Fijo: degradé vertical de `rgb(15 58 92)` con opacidades .74 / .60 / .60 / .74 en las paradas 0% / 22% / 62% / 100%: denso arriba para la barra de navegación, calmo en el centro donde va el texto y denso abajo para el crédito. Contraste medido de `paper` contra el píxel más claro (percentil 95) tras el H1 y la bajada a 1440: 5.5:1; los peores píxeles llegan a 3.6:1.

**Filtro arenoso (permanente).** Un `div.hero-arena` entre el velo y el texto (capa -10, `pointer-events-none`) apila exactamente dos pasadas de `--grano`, el mismo tile mixto de la marca que usa el resto del sitio, a 128px y 211px, con desfases 0 0 y 37px 61px, opacidad 1, sin mezcla. Es un componente fijo, sin selector de tono ni interruptor. Contradice la letra original de The One Grain Rule, que se enmendó para permitirlo solo sobre la foto de la portada.

### Campo de siniestros
Sección completa en degradé `claim-deep` → `claim` (125°) con el grano por encima (`--grano` a `--grano-tam` sobre el degradé), sin regla superior, texto en `paper` y secundario en `claim-soft`. Una por página. Columna izquierda: titular "¿Tuviste un siniestro?" (clamp 2.5rem → 4.5rem, ancho 84%), bajada "Respirá. Elegí qué te pasó y te guiamos con la denuncia." (1.25rem, 32ch, `claim-soft`) y una sola acción, la barra de denuncia "Denunciar un siniestro →" (`paper`, texto `claim-deep` 1.375rem bold, hover `claim-soft`, mínimo 22rem desde 1024px). Columna derecha: tres grupos bajo subtítulos de 1.125rem semibold con regla superior de 2px `paper`, sobre una grilla de 6 columnas desde 1024px (2 en celulares): Auto a ancho completo (3 mosaicos por fila, el último de la lista se extiende dos columnas), Hogar y Comercio y consorcio a la mitad cada uno. Ya no hay pasos numerados, teléfono, WhatsApp ni persona de guardia dentro del campo.
- **Mosaico de siniestro:** hoja `sheet` de esquinas rectas, padding 16px, alto mínimo 8rem (7.5rem desde 1024px); ícono de 36px en `claim` (trazo 1.6) arriba, rótulo 1.125rem (1.25rem desde 640px) semibold `ink` y flecha de 20px `claim` abajo a la derecha. Los íconos son lucide salvo dos dibujados a medida en el mismo trazo (`parabrisas` para Cristales, `llanta` para Robo de ruedas). Hover y foco de teclado: un relleno `claim-soft` barre desde abajo (0.5s `ease-out-expo`), el ícono sube 4px, la flecha avanza 5px (0.45s) y el clic presiona el mosaico a escala .98 (0.12s). Todo se anula con `prefers-reduced-motion`: el relleno aparece sin barrido y no hay desplazamientos.

### Carril de aseguradoras
Un carril continuo de nombres entre dos reglas, sin tarjetas: la lista de aseguradoras corre en bucle lineal de 48s hacia la izquierda, como una cinta de registro. Cabecera de sección con el titular "Aseguradoras que confían en nosotros" (clamp(2rem → 3rem) bold), y la bajada en `ink-2`.
- **Carril:** banda de ancho completo con filetes de 1px `rule` arriba y abajo, desvanecida en los bordes por una máscara (transparente → opaco al 6%, opaco hasta el 94%). Dos copias de la lista en una pista de ancho máximo que se traslada -50%; la segunda lleva `aria-hidden` y alt vacío. Cada ítem mide 6rem de alto (7rem desde 640px), con filete vertical de 1px `rule` a la derecha y padding lateral de 2rem (3rem desde 640px).
- **Contenido del ítem:** hoy, el nombre en texto (1.375rem, 1.625rem desde 640px, semibold, ancho 92%, sin cortes de línea) como marcador de lugar. Los logos llegarán como SVG en `src/assets/aseguradoras/<slug>.svg` y se muestran como máscara teñida de `ink` (alto 2.5rem, 3rem desde 640px); al hover del ítem la tinta se cruza (300ms `ease-out`) con el color original del logo.
- **Pausa:** el movimiento se detiene al hover del carril y con un botón de pausa discreto a la derecha del titular de la sección, alineado abajo: cuadrado de 44px, borde de 1.5px `rule`, ícono de 16px (pausa / reproducir) en `ink-2`; al hover borde y ícono pasan a `ink` (200ms). Sin texto visible; el nombre accesible alterna "Pausar el carrusel de aseguradoras" / "Reanudar el carrusel de aseguradoras". Con `prefers-reduced-motion` el botón se oculta junto con el movimiento. No hay pausa por foco: los ítems no son interactivos.
- **Sin movimiento (`prefers-reduced-motion`):** el carril deja de correr, pierde la máscara, y la copia, y los ítems pasan a una grilla estática con bordes de reglas de 1px: 2 columnas en celulares, 3 desde 640px y 5 desde 1024px; el nombre puede cortar línea.

**The Pausable Motion Rule.** El movimiento continuo (en bucle) se frena al hover y tiene un control de pausa (lo cumplen el carril de Aseguradoras y las filas de Equipo) discreto y accesible por teclado (ícono solo, 44px, nombre que alterna Pausar/Reanudar); con `prefers-reduced-motion` desaparece junto con el control, y queda una grilla estática. Lo repetido para el movimiento (la copia) queda fuera del árbol de accesibilidad. No aplica al alejamiento único de la portada: no hace bucle y termina quieto en ~14s, así que no lleva pausa (WCAG 2.2.2 se cumple porque el movimiento termina).

### Campo del logo
Sección completa en `teal` plano con grano, texto principal en `paper`, secundario en `on-dark` y rótulos mono en `seal-on-dark`. Sin degradé, sin tira ni brillo. Una sola por página: es el momento de color de marca, no un fondo repetible.

### Sello de goma
Sello SVG circular en `seal` (`Stamp.astro`), rotado −11°, con texto en arco en Chivo Mono, leyenda central en Archivo 800 condensado y una textura de tinta irregular (filtro de ruido). Vive solo en la página de cotizar; la portada y el Cierre no llevan sello. Es un único sello por página.
- **Sello con leyenda:** la misma tinta, anillos, textura y rotación, con el arco fijo ("BROKERS ASOCIADOS · MAR DEL PLATA") y una leyenda central variable de una o más líneas en Archivo 800 condensado ("LISTO PARA / ENVIAR", "RECIBIDO"). Certifica un estado y tiene tres tiempos: **fantasma** (22% de opacidad desde la carga, anticipa lo que se va a ganar), **entintado** (opacidad plena y estampado de 0.8s `ease-out-expo`, desde escala 1.4 y 6° de giro) cuando están los datos requeridos, y **re-sellado** con una leyenda nueva al enviar. Es decorativo para lectores de pantalla; el estado se anuncia una sola vez en una región `aria-live` oculta. Cuenta como el sello único de su página.

### Cierre
Sección de cierre solo tipográfica, entre Equipo y Contacto: sin foto, sin sello, sin rótulo ni cifra. Fondo `ink` con grano (`.con-grano`), sin bordes ni reglas de sección, texto `paper`. Contenedor de 84rem, padding vertical 80 / 112 / 128px (`py-20`, `sm:py-28`, `lg:py-32`).
- **Titular:** H2 display de cierre (clamp(3.05rem, 1.6rem + 5.6vw, 6.75rem), interlineado .95, ancho 84%, `text-balance`, máx. 14ch).
- **Fila de la bajada:** debajo, una regla de 1px `paper` al 40% como filete superior. A la izquierda la bajada (1.375–1.5rem, `on-dark`, máx. 34ch); desde `lg` los CTAs van a la derecha, alineados abajo (grilla `minmax(0,1fr) auto`, 64px de separación); en `md` quedan apilados bajo la bajada.
- **Celulares (bajo `md`):** los CTAs se omiten a propósito, porque la barra fija inferior ya ofrece Cotizá y WhatsApp.
- **Acciones:** `CierreCtas` con `tono="oscuro"` (ver Buttons).
- **Texto elegido por el cliente:** titular «Contanos qué querés cuidar.» y bajada «Del resto nos ocupamos nosotros.».

### Carátula
La portada de la póliza: resume en vivo lo que el usuario va completando en un formulario. Hoja `sheet` con marco de 2px en tinta y esquinas rectas; cabecera con título (1.5rem, ancho 88%) y la fecha en mono `ink-2`, cerrada por una regla de 2px; debajo, la tira de guilloché (24px, 70% de opacidad, filete de 1px `rule` abajo); luego filas de datos con rótulo mono `ink-2` en una columna de 6.5rem y valor en 1.125rem semibold tinta, separadas por filetes de 1px `rule-soft`. El valor que falta se dibuja como renglón discontinuo, nunca como texto de relleno. El sello con leyenda se imprime a caballo de la esquina inferior derecha. Al enviar, el título cambia ("Pedido recibido") y el sello se re-sella.

## Do's and Don'ts

### Interacción (hover, foco, active)
Un solo sistema para toda la web, implementado en `global.css` (`.ix-*` y los tokens `--ix-*`). Cuatro tipos, según qué es el elemento; mismas reglas para todos.

**Reglas comunes**
- **Curva:** `--ease-out-expo` en todo. Una sola.
- **Tiempos:** `--ix-rapido` 120ms (pulsar), `--ix-color` 200ms (color, borde), `--ix-mov` 300ms (flechas, íconos), `--ix-subrayado` 350ms (subrayados), `--ix-barrido` 500ms (relleno de tarjeta).
- **Distancia:** `--ix-dist` 4px. Flechas y íconos nunca se mueven más.
- **Active:** `scale(.98)` en 120ms en todo lo que se pulsa (acciones, tarjetas, controles); no en enlaces de texto. En táctil es la única respuesta al toque.
- **Foco:** cada hover tiene su gemelo en `:focus-visible` (mismo cambio) además del anillo teal de 3px. El hover solo corre con `@media (hover: hover)`.
- **Sin movimiento:** `prefers-reduced-motion` elimina transiciones, desplazamientos, escala y barrido; el estado se comunica con el color (el relleno de tarjeta aparece de golpe).
- **Contraste:** nada de `filter: brightness`; cada hover es un color explícito y medible (todos ≥ 5.6:1 en reposo y ≥ 7.2:1 al hover).

**1 · Acción** (`ix-accion` + `ix-ink` / `ix-seal` / `ix-celeste` / `ix-paper` / `ix-claim` / `ix-wash`): botones llenos (CTAs del hero, cierre, header, menú, barra móvil, Siniestros, los mosaicos de acción de la hoja de Contacto (WhatsApp y Llamar `ink`→`ink-deep`), enviar de cotizar, enviar de denunciar, WhatsApp de cada persona). El relleno pasa a su tono: `ink`→`ink-deep`, `claim-deep`→`claim` (`ix-claim`), `seal`→`seal-deep`, `celeste`(#a8dadc)→`celeste-hover`(#9ecdcf), `paper`→`claim-soft`. La flecha (`ix-flecha`) avanza 4px en 300ms.

**2 · Tarjeta navegable** (`ix-tarjeta`, color del relleno en `--barrido`): mosaicos de Siniestros (`claim-soft`) y de Coberturas (`wash` en los chicos, `ink-deep` en los grandes). Un relleno sube desde abajo (500ms), el ícono (`ix-icono`) sube 4px y la flecha avanza 4px. Es el hover de Siniestros, extendido a Coberturas porque son la misma pieza (rectángulo recto que lleva a otra página) y el color del barrido conserva la identidad de cada sección; Coberturas pierde el «sube 2px», que contradecía la regla de que nada se eleva.

**3 · Enlace de texto** (`ix-link` / `ix-sub`): el subrayado se dibuja o se borra de izquierda a derecha en 350ms; nunca engrosa. `ix-link`: sin subrayado en reposo, aparece (teléfono 0800, enlaces del header con `nav-link`). `ix-sub`: subrayado en reposo, desaparece (email e Instagram de la hoja de Contacto, «Cómo llegar» a 2px, SSN del footer, «¿Tuviste un siniestro?» del hero, enlaces de cotizar). El grosor sale de `--ix-grosor` (1px; 2px en «Cómo llegar»).

**4 · Control** (`ix-control`): pestañas de Coberturas (sin cambio de relleno a `ink`), botones de pausa del carril y de Equipo. Piezas chicas y repetidas: cambian de color en 200ms y se presionan; no se mueven.

**Fuera del sistema (a propósito):** el color y el zoom de las fotos del equipo, el color de los logos de Aseguradoras, y los campos de formulario (borde en hover y foco, 200ms).

### Footer
Un solo campo con grano, sin franjas apiladas: un bloque de contenido, el bloque de la SSN y una única barra inferior. Es el único degradé de la web: vertical, de `ink` (igual al Cierre que lo precede) a `ink-deep` hacia la barra inferior (`ink` hasta el 30%), de modo que `ink-deep` solo aparece aquí. El aire superior sigue el ritmo de las secciones: 64 / 80 / 96px.
- **Tres columnas (5fr · 3fr · 4fr desde 1024px):** (1) marca (logo de 80px con anillo `paper`, «Brokers Asociados», «Productores asesores de seguros», «Más de 35 años en Mar del Plata») y las acciones: «Cotizá tu seguro →» y el WhatsApp redondo de 56px, ambos acción `celeste`, y «Denunciar un siniestro» como enlace con el punto bordó (`ix-sub`); (2) «Este sitio» con los cinco anclas del menú; (3) «Contacto» con dirección y «Cómo llegar ↗», teléfono, mail general, horario e Instagram, cada uno con su ícono de 20px. Los rótulos de columna son Chivo Mono (`field-no`) bajo una regla de 2px `paper`/80. Sin links a páginas legales ni a rutas inexistentes (excepto `/siniestros/denuncia`, pendiente de construir).
- **Celulares:** una columna en el orden marca y acciones → contacto → este sitio → SSN → barra. Todo enlace mide 48px de alto como mínimo.
- **Bloque de la SSN (obligatorio):** la hoja `paper` de siempre, ahora horizontal bajo las columnas y alineada a ellas (subgrid): título mono en la primera, «Atención al asegurado 0800-666-8400» en la segunda y «Organismo de control www.argentina.gob.ar/SSN» en la tercera. En celulares se apila.
- **Barra única** (regla de 1px `paper`/25): «© {año} Brokers Asociados» a la izquierda y, a la derecha, el crédito del desarrollador como un solo bloque de dos líneas pegadas (centrado y al final en celulares). Línea 1, 0.9375rem `on-dark`: «¿Te gustaría una página como esta? *Hagamos la tuya.*», con la frase en itálica como único texto enlazado, en `paper`, más un ícono chico de WhatsApp en el color del texto (nunca el verde, para no confundirlo con el WhatsApp del broker) hacia `wa.me` con mensaje prellenado; su subrayado se dibuja de izquierda a derecha y el ícono avanza 2px. Línea 2, 0.875rem `on-dark`/70: «Creado por Lautaro Fullone ↗» hacia lautarofullone.dev; al hover el nombre sube a `paper`. Sin botón, borde ni cápsula; áreas táctiles de 48px con un pseudo-elemento para no separar las líneas. El número sale de `PUBLIC_CONTACTO_DEV` (ver `.env.example`; con valor de respaldo) y nunca se muestra como texto.

### Do:
- **Do** separar bloques con reglas: 2px en tinta para encabezados y secciones, 1px `rule` entre filas, 1.5px en bordes de campos.
- **Do** numerar los campos de un formulario (01, 02, 03) en un margen de 2.75–3.25rem con Chivo Mono `ink-2`.
- **Do** mantener el cuerpo en 1.125rem o más y los objetivos táctiles en 48px o más.
- **Do** reservar `claim` (bordó) para siniestros, errores y "Cerrado", y `teal` para el foco y el acento.
- **Do** marcar lo que falta confirmar con una única nota mono de versión demo en el footer y placeholders con borde punteado, en vez de inventar contenido o repetir avisos por sección.
- **Do** frenar al hover todo movimiento continuo, darle un botón de pausa discreto de 44px con nombre accesible y dejarlo estático con `prefers-reduced-motion`, como el carril de aseguradoras y las filas de Equipo.
- **Do** respetar `prefers-reduced-motion` en el sello, el alejamiento de la foto de portada, el scroll suave y el movimiento del header.
- **Do** dejar las secciones de papel sin fondo propio y poner el grano una sola vez en la página, más la barra y el panel del header, el campo bordó, el campo del logo y el footer.
- **Do** usar fotografía real de Mar del Plata con su procedencia registrada y el crédito visible cuando la licencia lo pide.
- **Do** mostrar personas como retratos 4:5 en gris sobre el degradé `portrait-top` → `portrait-bottom`, con color al hover o foco, en filas en bucle que se frenan al hover y al foco, con rol, nombre y WhatsApp siempre visibles.
- **Do** usar el par de CTAs en `ink` con texto `paper` (56px, WhatsApp redondo) sobre fondos claros, y el celeste solo sobre fondos oscuros (portada y Cierre).
- **Do** dibujar los datos pendientes de una carátula como renglón discontinuo de 1.5px `rule` y escribir los placeholders como "Ej.: …".

### Don't:
- **Don't** usar sombras ni tarjetas con esquinas redondeadas.
- **Don't** usar el bordó como acento decorativo ni en acciones de cotización.
- **Don't** redondear botones, campos u opciones; lo circular se limita al logo, el sello y los indicadores de estado. Única excepción: un botón de solo ícono puede ser circular (el WhatsApp de la portada y del Cierre, y el de la etiqueta de cada persona); un botón con rótulo nunca.
- **Don't** usar el guilloché como marca de agua de fondo; su única forma es la tira, y va solo en la cabecera de una carátula.
- **Don't** teñir las secciones (salvo el Cierre en `ink` con grano y "Qué hacemos por vos" en `teal`) ni usar el degradé del logo como tarjeta o bloque dentro de una sección, ni repetir el campo del logo, el campo de siniestros o la portada fotográfica más de una vez por página.
- **Don't** poner el grano sobre hojas blancas, mosaicos blancos, fotos ni texto: es una textura del papel, no un motivo.
- **Don't** usar `cta-fill-light` ni `cta-ink-deep` fuera de los CTAs de la portada y del Cierre sobre fondo oscuro .
- **Don't** repetir el sello de goma más de una vez por página (hoy solo vive en cotizar).
