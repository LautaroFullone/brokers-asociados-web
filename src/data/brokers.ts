// Contenido real relevado de la web actual (docs/brief-web-actual.md).
// Lo marcado como pendiente se confirma con el cliente antes de producción.

export const contacto = {
	direccion: '11 de Septiembre 2702',
	ciudad: 'Mar del Plata, Bs. As. (7600)',
	telefono: '0223 495-5034 / 35',
	telefonoHref: 'tel:+542234955034',
	horario: 'Lunes a viernes, de 9 a 15 hs',
	whatsapp: '223 596-3894',
	whatsappNumero: '5492235963894',
	instagram: 'https://www.instagram.com/BROKERS.ASOCIADOS',
	instagramUsuario: '@brokers.asociados',
	mapa: 'https://www.google.com/maps/search/?api=1&query=Brokers+Asociados+11+de+Septiembre+2702+Mar+del+Plata',
	geo: { lat: -37.9948, lng: -57.5446 },
	emails: [
		{ area: 'Consultas generales', email: 'info@brokersasociados.com.ar' },
		{ area: 'Producción', email: 'produccion@brokersasociados.com.ar' },
		{ area: 'Siniestros', email: 'siniestros@brokersasociados.com.ar' },
		{ area: 'Cobranzas', email: 'cobranzas@brokersasociados.com.ar' },
	],
};

export function whatsappLink(texto?: string) {
	const base = `https://wa.me/${contacto.whatsappNumero}`;
	return texto ? `${base}?text=${encodeURIComponent(texto)}` : base;
}

export const ramas = [
	{ id: 'auto', label: 'Auto o moto', corto: 'Auto o moto' },
	{ id: 'hogar', label: 'Hogar o comercio', corto: 'Hogar o comercio' },
	{ id: 'accidentes', label: 'Accidentes personales', corto: 'Accidentes personales' },
	{ id: 'otro', label: 'Otro seguro', corto: 'otro seguro' },
] as const;

// Las descripciones de Vida, Embarcaciones y las ramas de empresa son genéricas: confirmar alcance con el cliente.
type Producto = { nombre: string; rama: string; coberturas?: string; nota?: string };

export const productosPersonas: Producto[] = [
	{
		nombre: 'Auto y moto',
		rama: 'auto',
		coberturas:
			'Responsabilidad civil, robo o hurto total y parcial, incendio total y parcial, destrucción por accidente, granizo, cristales y cerraduras, asistencia mecánica y grúa.',
		nota: 'Planes A, B1, B, Terceros completo y Todo riesgo.',
	},
	{
		nombre: 'Hogar',
		rama: 'hogar',
		coberturas:
			'Incendio, rayo, vendaval e inundación, robo, responsabilidad civil, daños a electrodomésticos, electrónica e informática, cristales.',
	},
	{
		nombre: 'Accidentes personales',
		rama: 'accidentes',
		coberturas:
			'Fallecimiento, incapacidad total o parcial permanente, gastos médico-farmacéuticos y de sepelio.',
	},
	{ nombre: 'Vida', rama: 'otro', coberturas: 'Un capital para tu familia o tus beneficiarios en caso de fallecimiento.' },
	{ nombre: 'Embarcaciones de placer', rama: 'otro', coberturas: 'Tu lancha o velero, con responsabilidad civil hacia terceros.' },
];

export const productosEmpresas: Producto[] = [
	{
		nombre: 'Integral de comercio',
		rama: 'hogar',
		coberturas:
			'Incendio, rayo, vendaval e inundación, robo, responsabilidad civil, daños a equipos electrónicos e informáticos, cristales.',
	},
	{ nombre: 'ART · Riesgos del trabajo', rama: 'otro', coberturas: 'La cobertura obligatoria por accidentes y enfermedades laborales de tu personal.' },
	{ nombre: 'Responsabilidad civil', rama: 'otro', coberturas: 'Los daños que tu actividad pueda causarle a terceros.' },
	{ nombre: 'Incendio', rama: 'otro', coberturas: 'El edificio y el contenido de tu empresa ante un incendio.' },
	{ nombre: 'Integral de consorcio', rama: 'otro', coberturas: 'El edificio, los espacios comunes y la responsabilidad civil del consorcio.' },
	{ nombre: 'Integral hotelero', rama: 'otro', coberturas: 'El edificio, el contenido y la responsabilidad frente a los huéspedes de tu hotel.' },
	{ nombre: 'Integral agropecuario', rama: 'otro', coberturas: 'Bienes, maquinaria y responsabilidad civil de la actividad rural.' },
];

// Pendiente: lista vigente y logos oficiales.
export const aseguradoras = [
	'Allianz',
	'Asociart ART',
	'Cooperación Seguros',
	'Experta Seguros',
	'Federación Patronal',
	'Mercantil Andina',
	'Provincia ART',
	'Río Uruguay Seguros',
	'Sancor Seguros',
	'Woranz',
];

export const siniestros = [
	{ grupo: 'Auto', tipos: ['Choque', 'Cristales', 'Cerraduras', 'Robo de ruedas', 'Robo del vehículo'] },
	{ grupo: 'Hogar', tipos: ['Celular', 'Otros daños en el hogar'] },
	{ grupo: 'Comercio', tipos: ['Daños en el comercio'] },
];

export const equipo = [
	{ nombre: 'Jorge Couto', area: 'Producción', telefono: '223 596-3894', email: 'produccion@brokersasociados.com.ar' },
	{ nombre: 'Ignacio Victorel', area: 'Producción', telefono: '223 596-3894', email: 'produccion@brokersasociados.com.ar' },
	{ nombre: 'Leticia Lazzati', area: 'Siniestros', telefono: '223 624-7475', email: 'siniestros@brokersasociados.com.ar' },
	// Pendiente: el teléfono publicado tiene un dígito de más.
	{ nombre: 'Pedro Victorel', area: 'Cobranzas', telefono: null, email: 'cobranzas@brokersasociados.com.ar' },
];

// Pendiente: padrón vigente (19 publicados en /productores, 28 en los formularios).
export const productores = [
	'Carlos Domecq',
	'Carina Lacassagne',
	'Carolina Moroni',
	'Darío Potrino',
	'Darío Rabini',
	'Emanuel Fuertes',
	'Eugenio Victorel',
	'Félix Rocco',
	'Hernán Victorel',
	'Ignacio Victorel',
	'Iulian Nagit',
	'Jorge Couto',
	'Matías Tosini',
	'Pablo Milano',
	'Patricia Rey Paz',
	'Raúl Montenegro',
	'Santiago Jáuregui',
	'Sergio Marcos',
	'Walter Victorel',
];

// Cotizar: datos mínimos por rama para que el asesor llame preparado.
export const marcasVehiculo = [
	'Chevrolet', 'Citroën', 'Fiat', 'Ford', 'Honda', 'Hyundai', 'Jeep', 'Nissan', 'Peugeot', 'Renault', 'Toyota', 'Volkswagen',
	'Corven', 'Gilera', 'Motomel', 'Yamaha', 'Zanella',
];
export const tiposInmueble = ['Casa', 'Departamento', 'PH', 'Comercio'];
export const destinatariosAP = ['Para mí', 'Para mi familia', 'Para mi personal'];
export const otrosSeguros = [...productosPersonas, ...productosEmpresas]
	.filter((p) => p.rama === 'otro')
	.map((p) => p.nombre);
