⚠️ DEGRADED: single-context (revisión y detector corridos en el mismo contexto; screenshots con Playwright sobre dist/, sin overlay en vivo)

Design health: 19/28 (68%, Acceptable). n/a: 7, 9, 10.
1 Visibilidad 3 · 2 Lenguaje 3 · 3 Control 3 · 4 Consistencia 2 · 5 Prevención 3 · 6 Reconocimiento 3 · 8 Estética 2

Detector: 0 hallazgos en src/pages/index.astro + src/components.

Prioridades:
[P1] Tres secciones seguidas con la misma forma de tabla (Coberturas, Aseguradoras, Personas): página monótona, sin picos entre hero, campo del logo y siniestros.
[P1] Aseguradoras como celdas de texto: la prueba de confianza más fuerte se lee como planilla. Faltan logos (pedir SVG oficiales al cliente o a cada aseguradora; no reescalar con IA).
[P1] Textos genéricos en "Qué hacemos por vos" ("Compañías sólidas y con vocación de servicio") y "35 años" repetido 4 veces; falta la propuesta broker vs. comprar directo.
[P2] Personas: tabla de 4 columnas repite mails/teléfonos de Contacto y WhatsApp; reorganizar por tarea (cotizar / siniestro / pagos) con foto y una acción.
[P2] Siniestros en móvil: los mosaicos quedan a ~1000px; 11 acciones en la sección; íconos de Cristales y Robo de ruedas poco claros; falta asistencia 24 hs fuera de horario.
[P3] DESIGN.md desalineado (paper #fcfcfa vs #f6f4ef, tint-sky/tint-sea documentados pero no implementados). Foto de Contacto (playa stock) no aporta.
