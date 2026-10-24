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
  seal-glow: "#76c893"
  rule: "#7f95a6"
  rule-soft: "#d3dee5"
  wash: "#eef3f6"
  paper: "#f6f4ef"
  sheet: "#ffffff"
  seal: "#1f6e55"
  seal-deep: "#175843"
  seal-soft: "#e3f0ec"
  claim: "#b4232a"
  claim-deep: "#8f1a20"
  claim-soft: "#fbeeee"
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
  button-on-dark:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "18px 24px"
  button-on-dark-hover:
    backgroundColor: "{colors.sheet}"
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
    height: "72px"
  nav-cta:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "10px 16px"
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
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "16px"
  claim-tile-hover:
    backgroundColor: "{colors.claim-soft}"
  disclosure-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    size: "32px"
  disclosure-toggle-open:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
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
  stamp-claro:
    textColor: "{colors.seal-glow}"
---

# Design System: Brokers Asociados

## Overview

**Creative North Star: "La póliza bien hecha"**

El sistema trata cada superficie como un documento de seguros redactado con cuidado: papel cálido con grano alternado con hojas blancas, tinta azul marino, campos con reglas finas y números de campo en monoespaciada, cláusulas numeradas ("Art. 1") y un sello de goma verde que certifica la trayectoria. La confianza no se declara con adornos: se construye con orden, jerarquía legible y datos verificables puestos en su campo.

La densidad es de formulario bien diagramado, no de folleto. Los bloques se separan con reglas (filetes de 1px y líneas de 2px en tinta) en vez de tarjetas flotantes; la profundidad es plana y tipográfica. La tipografía es grande y generosa para un público mayor de 45 que lee desde el celular: el cuerpo arranca en 18px. El color tiene funciones fijas: el azul es la tinta, el verde es el sello y WhatsApp, el rojo existe solo para siniestros y el azul teal solo para el foco y el acento.

La portada abre con una fotografía real de Mar del Plata (el Torreón del Monje) a sangre completa, con un velo marino que asienta el texto y un zoom lento que la mantiene viva; el crédito de la foto queda visible en mono. Es el único momento fotográfico grande: el resto de la página vuelve al papel. El guilloché sobrevive en una sola forma, la tira: una banda horizontal de onda fina en teal, de 24px de alto, que marca la cabecera de una carátula como papel de seguridad. El logo del cliente es una insignia circular y se respeta como tal; su línea (azul → teal → verde) es el campo de color que el sistema toma del logo: un degradé seguro para texto (de `ink` a `teal`, 118°) como fondo de sección, rematado por una tira de 8px con el degradé completo. El otro campo de color es el de siniestros: rojo pleno, para que quien tuvo un problema encuentre la sección sin buscarla.

**Key Characteristics:**
- Un solo papel cálido (`paper`) con grano de página completa como fondo común; hojas blancas (`sheet`) para formularios, carátula, mosaicos y marco de foto; tinta marina en todo el texto.
- Esquinas rectas; reglas de 1px, 1.5px y 2px como única estructura.
- Números de campo y metadatos en Chivo Mono con cifras tabulares.
- Archivo variable condensado (ancho 84–92%) para titulares compactos y firmes.
- Rojo reservado para siniestros (incluido su campo de sección completa); verde para el sello y WhatsApp.
- Portada fotográfica real con velo marino; una sola por página.
- Sin sombras, sin tarjetas redondeadas.

## Colors

Una paleta de documento: tinta marina sobre un papel cálido con grano, con tres tintas funcionales que nunca se intercambian y el degradé del logo como único campo de color.

### Primary
- **Tinta de póliza** (`ink`): todo el texto principal, las reglas de 2px, el CTA de cotizar, el botón "Cotizá" del header y los fondos invertidos (footer, botón del menú móvil) y el color base bajo el campo del logo. El velo de la foto de portada usa navys translúcidos propios del build (rgb 12 28 70 y 19 40 94), no tokens. Su hover es la **Tinta profunda** (`ink-deep`).
- **Azul de vínculo** (`link`): el cambio de color al hover de los vínculos de texto (por ejemplo el nombre de cada cobertura). No es un fondo ni un color de reposo.
- **Tinta secundaria** (`ink-2`): leads, etiquetas de campo, números de campo, notas y pies de foto.

### Secondary
- **Verde sello** (`seal`): el sello con leyenda de la carátula (y el "+35 AÑOS" cuando se estampa sobre papel), el teléfono de WhatsApp, los botones de WhatsApp (texto blanco 6.14:1), el punto de "Abierto ahora" y el ícono de confirmación. Hover en **Verde sello profundo** (`seal-deep`). `seal-soft` está definido en el tema para fondos de confirmación.

### Tertiary
- **Rojo siniestro** (`claim`): el enlace "Siniestros" del menú, el punto rojo del acceso "¿Tuviste un siniestro?" de la portada, los íconos y flechas de los mosaicos de siniestro, los mensajes de error de formulario y el punto de "Cerrado". El campo de siniestros es un degradé de `claim-deep` a `claim` (125°) a sección completa; sobre él, `claim-soft` es el texto secundario y `claim-deep` el texto de la barra blanca de denuncia y del hover de los botones outline. `claim-soft` es también el hover de los mosaicos y de la barra de denuncia.
- **Azul de foco y acento** (`teal`): el anillo de foco visible (3px, offset 3px), la tinta de la tira de guilloché y el extremo claro del campo del logo.

### Degradé del logo
- **Campo del logo** (`ink` → `teal`, a 118°): la línea de la insignia del cliente (azul → teal → verde) como fondo de sección ("Qué hacemos por vos"). El campo es seguro para texto: solo va de azul a azul medio.
- **Tira del logo** (`ink` → `teal` 38% → `logo-aqua` 72% → `logo-mint`, a 90°, 8px de alto): el degradé completo, en el borde inferior del campo del logo. `logo-aqua` y `logo-mint` existen solo aquí; no se usan sueltos como texto, borde ni fondo plano.

### Neutral
- **Papel** (`paper`, blanco cálido): el fondo de toda la página (sobre `html`), con el grano encima; las secciones de Coberturas, Aseguradoras, Equipo y Contacto y la página de cotizar no pintan fondo propio y dejan ver este papel. También es el texto sobre tinta, foto y campo rojo, el fondo del botón primario sobre oscuro y de la barra del header.
- **Hoja** (`sheet`, blanco puro): solo las superficies de hoja sobre el papel: formularios, campos, la carátula, los mosaicos de siniestro, el marco de la foto y el hover del botón primario claro de la portada.
- **Grano** (`--grano`, tile PNG de 200px con ruido de tinta cálida rgb(61 51 41), alfa por píxel 0–20, en `public/grano.png`): la textura del papel, no un color. Se pinta una vez en una capa fija detrás de todo el contenido y se repite igual en la barra sólida del header y en el panel del menú móvil, para que todo sea el mismo material. El texto va siempre limpio encima.
- **Lavado** (`wash`): opción elegida en un campo, placeholders de foto, hover de botones secundarios.
- **Regla** (`rule`): filetes de 1px entre filas y bordes de inputs (1.5px).
- **Regla suave** (`rule-soft`): bordes de opciones sin elegir y separadores dentro de bloques.
- **Texto sobre oscuro** (`on-dark`): texto secundario sobre campos oscuros (la foto de portada con velo, el degradé del logo y el footer en `ink`); 4.5:1 o más sobre `teal`.
- **Sello sobre oscuro** (`seal-on-dark`): los rótulos "Art. N" en mono sobre el degradé del logo (4.7:1 sobre `teal`); la versión clara del verde sello para texto sobre fondos oscuros.
- **Brillo del sello** (`seal-glow`): solo gráficos; el sello "+35" estampado sobre la foto con velo. Nunca texto.

### Named Rules
**The Red Means Claim Rule.** El rojo (`claim` y sus variantes) aparece solo en lo relacionado con siniestros, errores de validación y el estado "Cerrado". Nunca como acento decorativo ni en un CTA de cotización.

**The Teal Is Focus Rule.** El token `teal` marca el anillo de foco y la tira de guilloché, y es el extremo del campo del logo; no se usa en botones ni fondos planos, para que el foco sea inconfundible. Los vínculos de texto cambian con `link`, no con `teal`.

**The Seal Is Green Rule.** El verde del logo se usa como tinta de sello y como color de WhatsApp; sobre oscuro, `seal-on-dark` marca los rótulos de artículo. Sobre la foto con velo el sello se estampa sin multiplicar en `seal-glow`, un verde claro que es gráfico y no texto. No colorea titulares ni bloques de texto.

**The Light Greens Never Carry Text Rule.** Los verdes y azules claros del degradé (`logo-aqua`, `logo-mint`) y `seal-glow` viven solo en la tira de 8px y en gráficos; nunca en texto ni debajo de texto (blanco sobre `logo-mint` da 2.47:1). Todo texto sobre el campo del logo va sobre `ink` a `teal`.

**The One Paper Rule.** El fondo común es un único papel (`paper` con grano); las secciones no lo tiñen. El color de fondo llega solo como el campo del logo o el campo rojo de siniestros, siempre a sección completa. Nunca como tarjeta, franja suelta o bloque de color dentro de una sección.

**The One Grain Rule.** Hay un solo grano, el mismo tile, y solo sobre superficies de papel (fondo de página, barra del header, panel del menú). No se pone sobre hojas blancas, campos de color, foto ni texto.

## Typography

**Display Font:** Archivo Variable (con Archivo, system-ui)
**Body Font:** Archivo Variable (con Archivo, system-ui)
**Label/Mono Font:** Chivo Mono 400/500 (con ui-monospace)

**Character:** Una grotesca de ancho variable, condensada en titulares (84–92%) y a ancho normal en el texto, con una mono de máquina de escribir para los campos y metadatos del documento. La mezcla se lee como formulario oficial impreso, no como marca de tecnología.

### Hierarchy
- **Display** (700, clamp(3.25rem → 6rem), 1.04, ancho 84%): solo el H1 de portada, en `paper` sobre la foto. Las páginas interiores (cotizar) usan un escalón menor para su H1: clamp(2.5rem → 4rem), mismo ancho 84%.
- **Headline** (700, clamp(2.25rem → 3.75rem), 1.04, ancho 88%): el H2 de cada sección. Aseguradoras usa un escalón menor (clamp(2rem → 3rem)); Siniestros sube a clamp(2.5rem → 4.5rem) a ancho 84%, en `paper` sobre el campo rojo.
- **Title** (700, 1.5–2rem, 1.04): encabezados de columna, cláusulas, título del formulario (1.625–1.875rem), título de la carátula (1.5rem, ancho 88%) y bloques laterales (1.375rem).
- **Lead** (400, 1.1875rem, 1.55, `ink-2`): bajada de sección, 42–46ch. La bajada de portada sube a 1.25–1.375rem con interlineado 1.5, 46ch, en `on-dark`.
- **Body** (400, 1.125rem, 1.55): texto corriente y valores de campo; nombres de ítems en 1.25–1.375rem semibold.
- **Label** (Chivo Mono 500, 0.875rem, +0.02em, cifras tabulares): números de campo (01, 02, 03), encabezados de tabla, contadores ("6 coberturas"), los rótulos y la fecha de la carátula, el estado de atención de Contacto, los números de paso de siniestros, el crédito de la foto de portada y la nota de versión demo del footer.

### Named Rules
**The Typed Field Rule.** Todo lo que en un documento real estaría tipeado a máquina (número de campo, artículo, notas de pie, rótulos de tabla) va en Chivo Mono con cifras tabulares. La prosa y los valores que el usuario lee van en Archivo.

**The Eighteen Floor Rule.** El cuerpo no baja de 1.125rem y ningún texto legible baja de 0.875rem.

## Layout

Contenedor central de 84rem con márgenes laterales de 16px (móvil), 32px (≥640px) y 48px (≥1024px). Las secciones respiran con 64 / 80 / 96px verticales según el ancho y se separan entre sí con una regla de 2px en tinta en el borde superior; la portada fotográfica, el campo del logo y el campo de siniestros no llevan regla. El ritmo alterna papel con grano y campos de color, con este orden: portada foto con velo marino (oscura) → Coberturas (papel con grano) → "Qué hacemos por vos" en el degradé del logo → Aseguradoras (papel con grano) → Siniestros en el campo rojo → Equipo (papel con grano) → Contacto (papel con grano) → footer `ink`. Los anclajes dejan 5.5rem de margen superior para no quedar bajo el header fijo.

Las cabeceras de sección son una grilla de dos columnas iguales en escritorio: titular a la izquierda, bajada alineada abajo a la derecha. Los contenidos usan grillas asimétricas (5/7, 7/5, 6/6) y listas con reglas en lugar de tarjetas. La portada no lleva formulario: ocupa clamp(36rem → 50rem) de alto (82svh) con la foto a sangre, y el texto (H1, bajada, CTA claro de cotizar, WhatsApp y acceso a siniestros) en una columna de hasta 44rem a la izquierda, centrada en vertical desde 1024px y arriba en móvil, donde deja ~15–18rem libres abajo para que se vea la torre. El velo va de izquierda a derecha en escritorio y de arriba hacia abajo en móvil (denso detrás del texto, liviano sobre la torre). El sello "+35" se estampa sobre el H1, posicionado en em desde un contenedor que lleva el tamaño del H1, para que acompañe la escala del titular. Siniestros es una grilla 5/7: a la izquierda titular, tres pasos numerados y acciones; a la derecha los mosaicos por tipo.

Los campos de documento usan un margen numerado fijo: una columna de 2.75rem (3.25rem desde 640px) con el número, separada por una regla vertical de 1px, y el contenido a la derecha. En móvil todo pasa a una columna y aparece una barra fija inferior (Cotizá → /cotizar / WhatsApp, 72px de alto) que se oculta desde 768px; en una página con portada fotográfica la barra queda escondida (desliza hacia abajo, 300ms `ease-out-expo`) mientras la portada está a la vista, porque la portada ya lleva las mismas acciones. En una página que ya es un formulario, la barra lleva solo WhatsApp a ancho completo: no compite con el envío. La navegación completa aparece desde 1280px.

Página de formulario con carátula (cotizar): sobre el papel con grano de página (el `main` no pinta fondo y arranca 4.5rem más abajo, bajo el header fijo), el formulario numerado ocupa la columna ancha y la carátula una columna de 29.5rem a la derecha desde 1024px, separadas por 56px, alineada con la parte superior del formulario y fija (`sticky`, 6rem del borde superior, por debajo del header) mientras se completa. Por debajo de 1024px la carátula va después del formulario y la barra de envío se mueve debajo de la carátula, para que el sello se vea antes de enviar.

## Elevation & Depth

El sistema es plano. No hay sombras en ninguna superficie: la jerarquía y la profundidad se expresan con reglas de distinto grosor (1px, 1.5px y 2px), con el contraste entre `paper` (con grano), `sheet` y `wash`, y con campos plenos (tinta, degradé del logo, campo rojo de siniestros, foto con velo marino). La única superposición es el sello: sobre papel se imprime con `mix-blend-mode: multiply` como tinta; sobre la foto se estampa en `seal-glow` sin mezcla.

### Named Rules
**The Ruled Not Raised Rule.** Un bloque se separa con una regla o un cambio de papel, nunca con una sombra. Si algo necesita destacarse, gana una regla de 2px o un campo oscuro.

## Shapes

Esquinas rectas (0px) en todo lo construido: formularios, campos, opciones, botones, bloques, la grilla de aseguradoras y el marco de la foto. Las casillas de elección son cuadrados de 24px con borde de 2px que se rellenan de tinta al elegir; el conmutador de las coberturas es un cuadrado de 32px con borde de 1.5px que hace lo mismo al abrirse. Los únicos círculos son nativos del mundo: la insignia circular del logo del cliente, los puntos indicadores de 10px (8px en el menú; estado de atención; aviso rojo del acceso a siniestros, con anillo `paper`) y el sello de goma. Un dato que todavía falta se dibuja como una línea discontinua de 1.5px en `rule`, el renglón vacío de un formulario impreso. La foto de contenido (Contacto) vive dentro de un marco de 2px en tinta con 10–12px de passe-partout `paper`, como una imagen pegada en un expediente; la foto de portada es la excepción a sangre, sin marco.

### Named Rules
**The Square Corner Rule.** Lo que el sistema dibuja tiene esquinas rectas. Lo circular se limita a lo que es circular por naturaleza: el logo, el sello y los indicadores de estado.

## Components

### Buttons
Barras de ancho completo o bloques sólidos, firmes y legibles, con una flecha que avanza 4px al hover.
- **Shape:** esquinas rectas (0px).
- **Primary (Cotizá):** fondo `ink`, texto `paper`, 1.25–1.375rem semibold, padding 14px × 20–24px, texto a la izquierda y flecha a la derecha. El rótulo nombra la rama elegida ("Cotizá tu seguro de Auto").
- **Primario sobre oscuro (portada):** fondo `paper`, texto `ink`, 1.25rem semibold, padding 18px × 24px, mínimo 17rem, flecha a la derecha; hover `sheet`. Lo acompaña el WhatsApp sólido.
- **Claim (sobre el campo rojo):** barra `paper` con texto `claim-deep` 1.375rem bold, padding 20px × 24px y flecha de 28px; hover `claim-soft`. Las acciones secundarias del campo (teléfono, WhatsApp) son outline de 2px en `paper` que se invierten a fondo `paper` con texto `claim-deep`.
- **WhatsApp:** sólido en `seal` con el ícono de WhatsApp, hover `seal-deep`.
- **Outline:** borde de 2px en tinta, sin fondo; al hover se invierte a `ink` con texto `paper` (o pasa a `wash` en acciones menores).
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
Una sola fila fija de 4.5rem, sin segunda franja: el estado de atención vive solo en Contacto.
- **Contenido:** logo circular de 44px con "Brokers Asociados" en Archivo bold condensado (1.25rem); enlaces Seguros / Siniestros / Contacto en 1.0625rem medium; botón "Cotizá →" en `ink` con texto `paper` y flecha (hover `ink-deep`, la flecha avanza 2px). "Siniestros" lleva un punto de 8px en `claim` delante del texto, no el texto en rojo.
- **Estados de la barra:** sobre la portada fotográfica arranca transparente, con tinta `paper` y el botón invertido (`paper` con texto `ink`), apoyada en un velo superior de la portada; pasada una distancia de 24px se vuelve papel con grano y un filete de 1px `rule-soft` abajo. En páginas sin portada es sólida desde el inicio.
- **Movimiento:** entra deslizándose desde arriba al cargar (0.7s `ease-out-expo`); se esconde al bajar pasados 160px y vuelve al subir o cuando algo dentro recibe foco; los enlaces dibujan un subrayado de 2px de izquierda a derecha al hover y al foco (0.35s). Todo se desactiva con `prefers-reduced-motion`.
- **Móvil:** botón de texto "Menú" / "Cerrar" junto a un ícono de dos líneas que se cruzan en una X; el panel, con el mismo papel con grano, se despliega animando la altura (`grid-template-rows` 0fr → 1fr, 0.45s), queda inerte mientras está cerrado y se cierra con Escape. Adentro: los tres enlaces como filas de 1.5rem semibold con filete `rule-soft` y flecha, una barra "Cotizá tu seguro" en `ink` y una barra de WhatsApp en `seal`. Además, la barra fija inferior lleva las dos acciones principales (oculta mientras se ve la portada); en páginas de formulario, solo WhatsApp.
- **Salto al contenido:** el enlace de salto aparece por encima del header (capa 60).

### Field-Numbered Form Block (signature)
El formulario de cotización (página cotizar) es una hoja `sheet` con borde de 2px en tinta: campos numerados en un margen rayado (columna mono `ink-2` separada por un filete de 1px `rule`), filetes de 1px entre campos y la barra de envío en tinta pegada al borde inferior. La confirmación reemplaza el formulario en el mismo bloque y ofrece volver al inicio con un botón outline.

### Ruled List / Table
Coberturas, cláusulas, equipo y contacto son listas con regla de 2px arriba y filetes de 1px entre filas, sin tarjetas. Las cláusulas llevan "Art. N" en mono (en `seal-on-dark` sobre el degradé del logo, con el texto en `on-dark` y la regla superior en `paper`); el equipo usa cabecera de tabla en mono desde 768px.
- **Fila desplegable (coberturas):** cada fila es un desplegable nativo. Cerrada muestra solo el nombre (1.25–1.375rem semibold, al menos 60px de alto) y, a la derecha, un cuadrado de 32px con borde de 1.5px en tinta y un signo más. Al abrirse, el cuadrado se rellena de `ink` con el signo en `paper` (200ms) y el más gira 45° hasta formar una × (300ms `ease-out-expo`). Adentro van la descripción (1–1.0625rem, `ink-2`, 52ch) y el enlace "Cotizar" con flecha.
- **Desplegable de texto (contacto):** la información secundaria queda detrás de un enlace subrayado en `ink-2` medium ("Ver mails por área" / "Ocultar mails por área"); el primer dato queda siempre visible.

**The Disclose Not Delete Rule.** Lo secundario (descripciones de cobertura, mails por área) se pliega detrás de un desplegable nativo en vez de recortarse; el nombre o el dato principal siempre queda a la vista.

### Portada fotográfica
Sección oscura a sangre con una fotografía real de la ciudad (`object-cover`, encuadre desplazado para que la torre quede a la derecha en escritorio y abajo en móvil), un velo marino en degradé por encima (en escritorio, además, un velo superior de 8rem que asienta la barra transparente del header) y un zoom lento tipo Ken Burns (32s, alternado, de escala 1.14 a 1) que se detiene con `prefers-reduced-motion`. Texto en `paper` y `on-dark`; CTA primario claro + WhatsApp; enlace subrayado a siniestros con punto rojo. El crédito de la foto (lugar, autor, licencia) va abajo a la derecha en Chivo Mono 0.875rem `paper` al 85%, enlazado a la fuente. Una por página.

### Campo de siniestros
Sección completa en degradé `claim-deep` → `claim` (125°), sin regla superior, texto en `paper` y secundario en `claim-soft`. A la izquierda: titular, tres pasos numerados en mono `claim-soft` sobre una regla de 2px `paper` y filetes de 1px `paper` al 30%, y las acciones (barra de denuncia + teléfono y WhatsApp en outline). A la derecha, "¿Qué te pasó?" y los tipos de siniestro agrupados bajo subtítulos Auto / Hogar / Comercio con regla superior de 2px `paper`. Cierra con la persona que atiende y el horario, tras un filete `paper` al 30%. Una por página.
- **Mosaico de siniestro:** bloque `paper` de esquinas rectas, padding 16px, alto mínimo 120–128px; ícono lucide de 36px en `claim` (trazo 1.6) arriba, rótulo 1.125–1.1875rem semibold `ink` y flecha `claim` abajo. Hover: fondo `claim-soft`, sube 2px y la flecha avanza 4px. La grilla cierra sin huecos: el último mosaico de Auto se extiende dos columnas.

### Campo del logo
Sección completa con el campo de la insignia (base `ink`, degradé `ink` → `teal` a 118°), texto principal en `paper`, secundario en `on-dark` y rótulos mono en `seal-on-dark`, rematada por la tira de 8px con el degradé completo (`ink`, `teal`, `logo-aqua`, `logo-mint`). Una sola por página: es el momento de color de marca, no un fondo repetible.

### Sello de goma
Sello SVG circular en `seal`, rotado −11°, con texto en arco en Chivo Mono, "+35" en Archivo 800 condensado y una textura de tinta irregular (filtro de ruido). Entra con una animación de estampado de 0.9s (`ease-out-expo`, 0.35s de demora) que se anula con `prefers-reduced-motion`. Es un único sello por página.
- **Sello claro:** la misma pieza en `seal-glow` y sin multiplicar, para estamparse sobre la foto de portada con velo.
- **Sello con leyenda:** la misma tinta, anillos, textura y rotación, con el arco fijo ("BROKERS ASOCIADOS · MAR DEL PLATA") y una leyenda central variable de una o más líneas en Archivo 800 condensado ("LISTO PARA / ENVIAR", "RECIBIDO"). Certifica un estado y tiene tres tiempos: **fantasma** (22% de opacidad desde la carga, anticipa lo que se va a ganar), **entintado** (opacidad plena y estampado de 0.8s `ease-out-expo`, desde escala 1.4 y 6° de giro) cuando están los datos requeridos, y **re-sellado** con una leyenda nueva al enviar. Es decorativo para lectores de pantalla; el estado se anuncia una sola vez en una región `aria-live` oculta. Cuenta como el sello único de su página.

### Carátula
La portada de la póliza: resume en vivo lo que el usuario va completando en un formulario. Hoja `sheet` con marco de 2px en tinta y esquinas rectas; cabecera con título (1.5rem, ancho 88%) y la fecha en mono `ink-2`, cerrada por una regla de 2px; debajo, la tira de guilloché (24px, 70% de opacidad, filete de 1px `rule` abajo); luego filas de datos con rótulo mono `ink-2` en una columna de 6.5rem y valor en 1.125rem semibold tinta, separadas por filetes de 1px `rule-soft`. El valor que falta se dibuja como renglón discontinuo, nunca como texto de relleno. El sello con leyenda se imprime a caballo de la esquina inferior derecha. Al enviar, el título cambia ("Pedido recibido") y el sello se re-sella.

## Do's and Don'ts

### Do:
- **Do** separar bloques con reglas: 2px en tinta para encabezados y secciones, 1px `rule` entre filas, 1.5px en bordes de campos.
- **Do** numerar los campos de un formulario (01, 02, 03) en un margen de 2.75–3.25rem con Chivo Mono `ink-2`.
- **Do** mantener el cuerpo en 1.125rem o más y los objetivos táctiles en 48px o más.
- **Do** reservar `claim` para siniestros, errores y "Cerrado", y `teal` para el foco y el acento.
- **Do** marcar lo que falta confirmar con una única nota mono de versión demo en el footer y placeholders con borde punteado, en vez de inventar contenido o repetir avisos por sección.
- **Do** respetar `prefers-reduced-motion` en el sello, el zoom de la foto de portada, el scroll suave y el movimiento del header.
- **Do** dejar las secciones de papel sin fondo propio y poner el grano una sola vez en la página, más la barra y el panel del header.
- **Do** usar fotografía real de Mar del Plata con su procedencia registrada y el crédito visible cuando la licencia lo pide.
- **Do** dibujar los datos pendientes de una carátula como renglón discontinuo de 1.5px `rule` y escribir los placeholders como "Ej.: …".

### Don't:
- **Don't** usar sombras ni tarjetas con esquinas redondeadas.
- **Don't** usar el rojo como acento decorativo ni en acciones de cotización.
- **Don't** redondear botones, campos u opciones; lo circular se limita al logo, el sello y los indicadores de estado.
- **Don't** usar el guilloché como marca de agua de fondo; su única forma es la tira, y va solo en la cabecera de una carátula.
- **Don't** teñir las secciones ni usar el degradé del logo como tarjeta o bloque dentro de una sección, ni repetir el campo del logo, el campo de siniestros o la portada fotográfica más de una vez por página.
- **Don't** poner el grano sobre hojas blancas, campos de color, foto o detrás de texto largo como patrón visible: es una textura del papel, no un motivo.
- **Don't** repetir el sello de goma más de una vez por página (el de "+35 años" o el sello con leyenda, nunca ambos).
