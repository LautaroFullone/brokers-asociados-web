# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Usuario principal: el cliente nuevo que quiere cotizar.** Una persona o una empresa de Mar del Plata y la zona que busca seguro (auto/moto, hogar, comercio, accidentes personales u otras ramas). Todavía no tiene productor y quiere saber rápido si Brokers Asociados le sirve y pedir una cotización sin fricción, muchas veces desde el celular.

**Usuarios secundarios (se atienden, pero no mandan en las decisiones):**
- El asegurado actual que denuncia un siniestro o necesita hablar con Siniestros, Cobranzas o con su productor.
- Clientes que ya tienen productor y quieren llegar a esa persona.

## Product Purpose

Brokers Asociados es una organización de productores asesores de seguros de Mar del Plata, con más de 35 años de experiencia, que asesora y gestiona coberturas para empresas e individuos.

Este proyecto es una **propuesta de rediseño completo** de su web actual (WordPress, muy antigua, lenta y con errores; ver `docs/brief-web-actual.md`) para presentarle al cliente. El éxito se mide así: un cliente nuevo entiende en segundos quiénes son y cotiza en pocos pasos, y quien tiene un siniestro encuentra cómo denunciarlo sin perderse.

## Positioning

Un broker local, con trayectoria, que trabaja con muchas aseguradoras y una red de productores asesores. El cliente no compra la póliza de una sola compañía: recibe asesoramiento para elegir la aseguradora, la cobertura y el precio adecuados, y asistencia de una persona cuando tiene un siniestro. Más de 35 años en Mar del Plata, oficina física (11 de Septiembre 2702) y unas diez aseguradoras sostienen ese argumento.

La marca que se vende es **Brokers Asociados**. Los productores son parte de lo que ofrecen, pero no son la puerta de entrada.

## Operating Context

- Mercado local: Mar del Plata, provincia de Buenos Aires. Atención de lunes a viernes de 9 a 15 hs.
- Canales reales: teléfono fijo (0223 495-5034 / 35), WhatsApp (+54 9 223 596-3894, Producción), emails por área (info@, produccion@, siniestros@, cobranzas@) e Instagram.
- Las cotizaciones y denuncias las recibe una persona (de administración o un productor) que responde. No hay cotizador automático ni precios online.
- Público argentino: castellano rioplatense con voseo ("Cotizá", "Seleccioná").
- Regulado por la SSN (Superintendencia de Seguros de la Nación).

## Capabilities and Constraints

**Alcance actual: demo navegable para presentar al cliente.** Contenido real, formularios que se ven y validan pero **no envían nada**. Lo que falta confirmar queda marcado como pendiente, no inventado.

Funciones que la web tiene que resolver:
- **Cotizar** en cuatro ramas: Automotores (autos/motos), Hogar/Comercio, Accidentes Personales y Otras ramas. Los datos que se piden hoy por rama están en el brief (§2.4) y sirven de requerimiento. Coberturas de auto: A, B1, B, Terceros Completo y Todo Riesgo. "Otras ramas" tiene que permitir indicar la rama.
- **Elegir productor es opcional** ("¿Ya tenés productor?"). Si el cliente no tiene productor, la consulta va a Directo Broker / administración. No se arranca nunca con un desplegable obligatorio de productores.
- **Denunciar un siniestro.** Tipos actuales: Autos (choque, cristales, cerraduras, robo de ruedas, robo de vehículo), Hogar (celulares, varios) y Comercio. Se unifica en un solo flujo, no en ocho páginas.
- **Directorio de productores**, separado de los formularios.
- Información institucional (quiénes somos, qué hacemos, aseguradoras) y contacto por área.
- WhatsApp con enlace `wa.me` (que abra la app en el celular).

Restricciones:
- **Footer obligatorio con el bloque de la SSN:** "Atención al asegurado 0800-666-8400" y "Organismo de control www.argentina.gob.ar/SSN". No se puede quitar.
- No exponer los mails personales de los productores dentro de los formularios.
- Stack: Astro (ya instalado en el proyecto) + **Tailwind CSS** (obligatorio).
- Objetivo comercial: captar más leads. Cotización por formulario como acción principal y WhatsApp como canal secundario destacado.

**Pendiente de confirmar con el cliente:**
1. Padrón vigente de productores (19 publicados contra 28 en los formularios) y si se muestran mails personales o del dominio.
2. Lista vigente de aseguradoras y logos oficiales.
3. Teléfono correcto de Cobranzas (el cargado tiene 11 dígitos).
4. Destino real de cotizaciones y denuncias (productor, info@ o ambos).
5. Logo en vector y fotos originales sin filtros.
6. Si la sección Noticias se mantiene.
7. Qué datos necesita Siniestros para cada tipo de denuncia.

## Brand Commitments

- Nombre: **Brokers Asociados** (wordmark actual "brokers ASOCIADOS" con edificios, en versión blanca; falta el vector original).
- Valores que declaran: responsabilidad, compromiso, ética y rapidez de gestión y respuesta; servicio profesional y personalizado.
- Voz: castellano rioplatense con voseo.

## Evidence on Hand

Todo en `docs/brief-web-actual.md`:
- Textos institucionales literales (Quiénes somos, Qué hacemos, Aseguradoras, Siniestros).
- Datos de contacto completos y equipo de administración (Jorge Couto e Ignacio Victorel en Producción, Leticia Lazzati en Siniestros, Pedro Victorel en Cobranzas).
- Ramas y coberturas, en su versión literal.
- Aseguradoras: Allianz, Asociart ART, Mercantil Andina, Provincia ART, Río Uruguay Seguros, Experta, Sancor Seguros, Woranz, Federación Patronal y Cooperación Seguros (lista a confirmar).
- 19 productores publicados, con teléfono y email.
- Fotos existentes (frente del edificio, productores, administración). Todavía no están en el repo y las originales tienen filtros.

**No existen y no se inventan:** testimonios, reseñas de Google, cantidad de clientes, cifras de siniestros resueltos, precios ni premios. Las aseguradoras y el padrón se muestran como "a confirmar" mientras no haya lista vigente.

## Product Principles

1. **Cotizar es el camino principal.** Desde cualquier página, un cliente nuevo llega a pedir cotización en el menor número de pasos posible y sin tener que conocer a nadie de antemano.
2. **El siniestro nunca se esconde.** Aunque no sea la prioridad comercial, quien tiene un siniestro lo encuentra enseguida y la denuncia junta los datos útiles del hecho.
3. **La confianza se gana con hechos verificables.** Los 35 años, la oficina física, las aseguradoras reales, personas con nombre y la SSN. Nada de afirmaciones vacías ni pruebas inventadas.
4. **Cada dato en un solo lugar.** Una sola lista de productores y un solo formulario por tarea; el contacto aparece donde hace falta, sin repetirse en cuatro lugares.
5. **Rápida en un celular común.** Es lo opuesto a la web actual de 44 MB: liviana, accesible y con SEO local básico bien resuelto.
