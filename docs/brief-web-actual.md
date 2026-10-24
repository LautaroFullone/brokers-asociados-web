# Brief — Web actual de Brokers Asociados

> Relevamiento de **https://brokersasociados.com.ar/** hecho con Playwright (desktop 1440px y mobile 390px) el 23/10/2026.
> **Este documento NO propone diseño.** Solo describe qué hay hoy, qué contenido es real y vale conservar, y qué problemas concretos tiene. Las decisiones visuales y de estructura se toman aparte.

---

## 1. Quiénes son (contexto)

- Broker / organización de productores de seguros de **Mar del Plata**.
- Más de **35 años de experiencia**. Clientes: **empresas e individuos**.
- Trabajan con una red de **productores asesores** (unos 19 publicados) y ofrecen la opción "Directo Broker".
- Plataforma actual: WordPress 7.1 + tema Neve + plugins (Slider Images, Chaty, CoBlocks, Contact Form 7, WPForms, Drag&Drop Upload CF7, Logo Slider WP).
- Footer: "creado por JJAUREGUI". Santiago Jáuregui figura como productor, así que la web la hizo alguien de adentro. Hay que tenerlo en cuenta al presentar los problemas.

---

## 2. Contenido real a conservar

### 2.1 Datos de contacto

| Dato | Valor |
|---|---|
| Dirección | 11 de Septiembre 2702, Mar del Plata, Bs. As. (7600) |
| Teléfono | 0223 495-5034 / 35 |
| Horario | Lunes a viernes, 9:00 a 15:00 hs |
| Email general | info@brokersasociados.com.ar |
| Producción | produccion@brokersasociados.com.ar |
| Siniestros | siniestros@brokersasociados.com.ar |
| Cobranzas | cobranzas@brokersasociados.com.ar |
| WhatsApp | +54 9 223 596-3894 (el mismo número que Producción) |
| Instagram | https://www.instagram.com/BROKERS.ASOCIADOS |
| Google Maps | Ficha "Brokers Asociados" (-37.9948, -57.5446) |

**Administración (página Contacto, con foto):**

| Persona | Área | Teléfono | Email |
|---|---|---|---|
| Jorge Couto | Producción | 223 596-3894 | produccion@ |
| Ignacio Victorel | Producción | 223 596-3894 | produccion@ |
| Leticia Lazzati | Siniestros | 223 624-7475 | siniestros@ |
| Pedro Victorel | Cobranzas | "22235181479" (le sobra un dígito, hay que confirmarlo) | cobranzas@ |

**Obligatorio en el footer:** bloque de la **SSN (Superintendencia de Seguros de la Nación)**, con "Atención al asegurado 0800-666-8400" y "Organismo de control www.argentina.gob.ar/SSN". Es un requisito regulatorio y no se puede quitar.

### 2.2 Textos institucionales útiles (literales)

**Quiénes somos**
> Somos una organización con más de 35 años de experiencia, dedicada a asesorar y gestionar coberturas de seguros para empresas e individuos.
> Valoramos la responsabilidad, el compromiso, la ética y la rapidez de gestión y respuesta. Ofrecemos un servicio profesional y personalizado, y productos adecuados a las necesidades de nuestros clientes y productores.

**Qué hacemos**
> Nuestro trabajo es brindar el mejor asesoramiento a la hora de contratar una póliza de seguro, incluyendo la elección de la Cía. Aseguradora, la cobertura, el precio adecuado, y la asistencia al momento del siniestro.
> Contamos con una gran variedad de productos que se adaptan a todas las necesidades de nuestros asegurados.

**Aseguradoras**
> Elegimos aseguradoras con clara vocación de servicio y atención al cliente, con respaldo económico sólido y cumplimiento de sus compromisos.

**Siniestros**
> Seleccioná el siniestro que has tenido y completá los datos que se solicitan.

### 2.3 Servicios / ramas

Hay 4 ramas de cotización, con estas descripciones (literales):

| Rama | Coberturas que mencionan |
|---|---|
| **Automotores** (Autos/Motos) | Responsabilidad Civil, Robo/hurto total y parcial, Incendio total y parcial, Destrucción total y parcial por accidentes, Daños por granizo, Daños a cristales y cerraduras, Asistencia mecánica y acarreo de grúa. |
| **Hogar / Comercio** | Incendio, Rayo, Vendaval e Inundación, Robo, Responsabilidad Civil, Daños a electrodomésticos/electrónica e informática, Cristales. |
| **Accidentes Personales** | Fallecimiento, incapacidad total y/o parcial permanente, gastos médico-farmacéuticos, gastos de sepelio. |
| **Otras ramas** | Embarcaciones de placer, Responsabilidad Civil, Integral Hotelero, ART, Integral de Consorcio, Incendio, Vida, Integral Agropecuario. |

Productos que muestra el carrusel de la home (hoy con imágenes PNG enormes):
Automóvil · Hogar · Integral de Comercio · Accidentes Personales · ART (Riesgos del Trabajo) · Responsabilidad Civil · Vida · Incendio · Integral Hotelero · Integral de Consorcios · Integral Agropecuario · Embarcación de placer.

**Coberturas de auto que ofrece el formulario:** A (Resp. Civil) · B1 (RC + Robo, Incendio total) · B (RC + Robo, Incendio y Accidente total) · Terceros Completo · Todo Riesgo.

### 2.4 Datos que piden hoy al cotizar (sirven como requerimiento funcional)

- **Auto:** productor, nombre, email, teléfono, marca, modelo y versión, año, cobertura.
- **Hogar/Comercio:** productor, nombre, email, teléfono, m² construidos aprox., código postal del riesgo, tipo de construcción (casa PB/1º/2º piso o PH · departamento piso 3+ · dúplex · casa en barrio privado), personas que habitan (1/2/3/4+), tipo de cristales (común · DVH · blindex/de seguridad), medidas de seguridad (alarma monitoreada · rejas · perímetro de 1,8 m o más · vidrios de seguridad · cerraduras doble paleta · terrenos baldíos linderos · ninguna) y "qué te interesaría cubrir".
- **Accidentes Personales / Otras ramas / Contacto:** productor, nombre, email, teléfono y mensaje libre. No piden ningún dato propio de la rama.

### 2.5 Tipos de siniestro que contemplan hoy

- **Autos:** Choque · Cristales · Cerraduras · Robo de ruedas · Robo de vehículo.
- **Hogar:** Celulares · Varios.
- **Comercio.**

Todos los formularios de siniestro son el **mismo formulario genérico** (productor, nombre, email, teléfono y mensaje). No piden datos del hecho (fecha, lugar, patente, terceros, fotos) aunque tienen instalado un plugin para subir archivos.

### 2.6 Aseguradoras con las que trabajan (logos en la home)

Allianz · Asociart ART · Mercantil Andina · Provincia ART · Río Uruguay Seguros · Experta (ART y Seguros) · Sancor Seguros · Woranz · Federación Patronal · Cooperación Seguros.
*A confirmar:* hay un logo cargado como `Sin-titulo-1.jpg` y otro como `001.png` (el que enlaza a fedpat.com.ar). Conviene pedirles la lista vigente y los logos oficiales.

### 2.7 Productores publicados (página /productores, con foto 300×300)

| Productor | Teléfono | Email |
|---|---|---|
| Couto, Jorge | 2235357492 | coutojorge@outlook.com |
| Domecq, Carlos | 2235034431 | domecqc@hotmail.com |
| Fuertes, Emanuel | 2235180141 | emanfuertes@hotmail.com |
| Jáuregui, Santiago | 2234463515 | santiagojauregui@gmail.com |
| Lacassagne, Carina | 2235405866 | carinalacassagne@gmail.com |
| Marcos, Sergio | 2236825434 | sergiomarcos.seguros@gmail.com |
| Milano, Pablo | 2235026438 | pablodariomilano@yahoo.com.ar (en los formularios figura @gmail.com) |
| Montenegro, Raúl | 2234236404 | raulmontenegro.seguros@outlook.com |
| Moroni, Carolina | 2235138503 | moronimariacarolina@gmail.com |
| Nagit, Iulian | 2235129162 | iuliannagit@gmail.com |
| Potrino, Darío | 2235768542 | dariopotrino@gmail.com |
| Rabini, Darío | 2235837049 | dariorabini@hotmail.com |
| Rey Paz, Patricia | 2235314893 | patoreypaz@gmail.com |
| Rocco, Félix | 2236809777 | felorocco@hotmail.com |
| Tosini, Matías | 2235509999 | matiastosini@gmail.com |
| Victorel, Eugenio | 2234386455 | titovictorel@hotmail.com |
| Victorel, Hernán | 2236824869 | hernanvictorel@hotmail.com |
| Victorel, Ignacio | 2235791725 | nachovictorel@hotmail.com |
| Victorel, Walter | 2235240369 | waltervictorel@gmail.com |

Los formularios de cotización (WPForms) suman otros 9 nombres que no están en /productores: Barayazarra Mariela, Delgado Valeria, Fontana Guillermo, González Alejandro, Longhi Carlos, Porretti Silvia, Trujillo Carolina, Volpogni Sebastián y Von Wernich Marcelo. **Hay que pedirles el padrón vigente.**

### 2.8 Otro contenido

- **Noticias:** una sola nota ("El 40% de los autos y las motos circula sin seguro", fuente CIDES, con link a nbs.ar). El blog está prácticamente abandonado.
- **Fotos propias que conviene conservar:** el frente del edificio con el logo, las fotos de los productores y de administración.
- **Logo:** el wordmark "brokers ASOCIADOS" con edificios, en versión blanca. Hay que pedir el original en vector.

---

## 3. Mapa de páginas actual

```
/                                   Home
├── /solicita-tu-cotizacion/        "COTIZÁ" – índice de 4 ramas
│   ├── /cotizacion-autos/          Form WPForms (auto)
│   ├── /cotizacion-comercio-hogar/ Form WPForms (hogar/comercio)
│   ├── /accidentes-personales/     Form CF7 genérico
│   └── /otras-ramas/               Form CF7 genérico
├── /siniestros/                    Carrusel de íconos → 8 páginas
│   ├── /7515-2/                    Choque            (CF7 genérico)
│   ├── /cristales/                 Cristales         (CF7 genérico)
│   ├── /cerraduras/                Cerraduras        (CF7 genérico)
│   ├── /robo-de-ruedas/            Robo de ruedas    (CF7 genérico)
│   ├── /carga-los-datos-de-tu-robo/ Robo vehículo    (CF7 genérico)
│   ├── /celulares/                 Hogar – Celulares (WPForms)
│   ├── /varios/                    Hogar – Varios    (CF7 genérico)
│   └── /hogar-comercio/            Comercio          (CF7 genérico)
├── /productores/                   Carrusel de fotos + listado + form
├── /contacto/                      Administración + form
└── /noticias/                      1 nota
```

Rotas o huérfanas:
- `/nosotros-2/` → **404** (lo enlaza el botón "CONOCENOS MÁS" de la home, y encima por http).
- `/productos/` → **404** (lo enlaza el botón "CONOCÉ TODOS NUESTROS PRODUCTOS").
- El menú tiene ítems "Autos" y "Hogar" que apuntan a `#`.
- El menú dice "NOVEDADES" y el footer dice "NOTICIAS" para la misma página.

### Qué sobra o está duplicado

- **8 páginas de siniestro casi idénticas.** El formulario es el mismo y solo cambia el título.
- **4 páginas de cotización + un índice**, con dos plugins de formularios distintos (WPForms y Contact Form 7) que se ven y se comportan diferente.
- **3 listas de productores distintas** (la página /productores, los formularios WPForms y los formularios CF7), que no coinciden entre sí.
- El formulario de contacto aparece repetido en Contacto, Productores y en todas las ramas y siniestros.
- Los carruseles (productos, aseguradoras, siniestros, productores) duplican el contenido en el DOM: cada imagen se carga 2 o 3 veces.
- Hay botones flotantes de WhatsApp, Instagram, mail y mapa **y además** la barra superior con teléfono y mail, el footer con contacto y la página de contacto: el mismo dato en cuatro lugares.
- Las páginas `/nosotros-2/` y `/productos/` están enlazadas pero no existen.

---

## 4. Problemas concretos encontrados

### 4.1 Velocidad / peso

| Métrica (home) | Desktop | Mobile |
|---|---|---|
| Peso total transferido | **44,2 MB** | **42,9 MB** |
| De eso, imágenes | 43,9 MB | 42,6 MB |
| Requests | 73 | 73 |
| TTFB | 1,8 s | 1,4 s |
| First Contentful Paint | 3,7 s | 3,3 s |
| Evento load | ~7 s (10 s en la primera medición) | ~7 s |

- Las imágenes de productos son **PNG de 3334×4156 px, de unos 7 MB cada una**, que se muestran en tarjetas de unos 300 px. Además se repiten por el carrusel.
- Los logos de aseguradoras van hasta 3898 px de ancho.
- Carga Google Fonts con **4 familias en 18 pesos cada una** (Faustina, PT Serif, Playfair Display y Lato) a través de CoBlocks, cuando solo se usa Lato.
- Carga jQuery + jQuery Migrate + jQuery UI + 3 librerías de slider + Owl Carousel + Colorbox, y además el script de emojis de WordPress.
- Las páginas internas tardan entre 2 y 6 s (Productores 6,3 s; Hogar 6,4 s; Contacto 5,4 s).
- **Mixed content:** las imágenes de productos se piden por `http://` dentro de la página https.

### 4.2 Mobile

- El hero (foto de la costa) ocupa casi toda la primera pantalla y no tiene texto ni acción.
- **Los botones flotantes de Chaty tapan el botón "SINIESTROS"** en la fila de accesos (PRODUCTORES / COTIZÁ / SINIESTROS), que además queda cortada a la derecha.
- La navegación principal queda escondida en el menú hamburguesa, también en desktop.
- Los formularios son largos y de una sola columna, y empiezan con un desplegable de 28 o 29 nombres.
- El teléfono viene con prefijo **🇺🇸 United States +1** y placeholder `(201) 555-0123`.

### 4.3 Llamados a la acción

- No hay ninguna acción principal visible en la primera pantalla (ni cotizar, ni WhatsApp, ni teléfono). "COTIZÁ" es un botón gris chico debajo del hero.
- **El carrusel "Nuestros productos" se ve vacío:** tarjetas en blanco con 15 puntos de paginación.
- Los botones "CONOCENOS MÁS" y "CONOCÉ TODOS NUESTROS PRODUCTOS" llevan a un **404**.
- Para cotizar hay que hacer: Cotizá → elegir rama → formulario. Para denunciar un siniestro: Siniestros → carrusel de íconos → página → formulario genérico sin datos del hecho.
- Todos los formularios obligan a **elegir un productor primero**. Si es un cliente nuevo, no sabe a quién elegir.
- "Otras ramas" no permite indicar qué rama le interesa.
- El link de WhatsApp usa `web.whatsapp.com/send`, que en el celular no abre la app (no es `wa.me`).

### 4.4 Confianza y credibilidad

- **Los mails personales de los productores aparecen dentro de los desplegables** de los formularios CF7 (por ejemplo "Domecq, Carlos - domecqc@hotmail.com"). Eso los expone a spam y se ve poco profesional.
- **Hay mailto que mandan al productor equivocado** en /productores: los mails de Walter Victorel, Jorge Couto, Ignacio Victorel, Sergio Marcos y Raúl Montenegro apuntan en realidad a `domecqc@hotmail.com`.
- Los productores tienen mails de hotmail, gmail o yahoo en lugar del dominio de la empresa.
- Hay un error de tipeo visible en el título de las páginas: **"SOLCITÁ TU COTIZACIÓN"**.
- Hay etiquetas de formulario rotas o desordenadas: "* UBICACION Email", "FORD) Y VERSIÓN", "con Nombre (EJ.", "DE productor *", "DE CONSTRUIDOS Mts". En el formulario de Hogar aparece un editor de texto con botones "Visual / Código / Párrafo".
- El teléfono de Cobranzas está mal cargado (tiene 11 dígitos).
- Las listas de productores no coinciden entre páginas (19 vs 28 vs 18).
- La sección Noticias tiene una sola nota.
- Las fotos están procesadas con filtros (hero en sepia, edificio con efecto pintura) y se ven de baja calidad.
- Las aseguradoras se ven en un carrusel con flechas que muestra 3 o 4 a la vez, así que no se aprecia de un vistazo con cuántas compañías trabajan.
- No hay testimonios, ni cantidad de clientes, ni reseñas de Google, aunque tienen ficha en Maps.

### 4.5 SEO / técnico

- **La home no tiene `<title>`.** Las internas usan títulos genéricos en mayúsculas ("CHOQUE", "VARIOS").
- **No hay ningún `<h1>`** en la home.
- No tiene meta description ni Open Graph, así que el link compartido por WhatsApp no muestra vista previa.
- Hay URLs sin significado: `/7515-2/`, `/nosotros-2/`, `/carga-los-datos-de-tu-robo/`.
- Casi todas las imágenes tienen `alt` vacío.
- No hay datos estructurados de negocio local (`InsuranceAgency` / `LocalBusiness`).
- Conviven dos plugins de formularios con validaciones y estilos distintos.

---

## 5. A confirmar con el cliente antes de la demo

1. Padrón vigente de productores (¿19 o 28?), con teléfonos y si quieren mostrar mail personal o uno del dominio.
2. Lista actual de aseguradoras y logos oficiales.
3. Teléfono correcto de Cobranzas y si el WhatsApp de la web es el de Producción.
4. A dónde llegan hoy las cotizaciones y denuncias (¿mail al productor elegido, a info@, a los dos?).
5. Logo en vector y fotos originales sin filtro (frente, equipo).
6. Si la sección Noticias se mantiene.
7. Qué datos necesita el área de Siniestros para cada tipo de denuncia.
