/**
 * Spanish methodology page copy and static editorial links.
 */

export const METHOD_FOCUS_PILLS = [
  "Casinos crypto",
  "Casinos fiat",
  "Apuestas",
  "Seguridad y pagos",
] as const;

export const METHOD_HERO_PANEL_ITEMS = [
  "Seguridad y licencia",
  "Pagos y retiros",
  "Bonos y condiciones",
  "Experiencia y KYC",
] as const;

export const METHOD_PRINCIPLES = [
  {
    title: "Opinión editorial, no voto de usuarios",
    body: "Las calificaciones son opiniones atribuidas del equipo de JugadaMax. No son promedios de votos, AggregateRating ni reseñas de usuarios fabricadas.",
  },
  {
    title: "Producto y GEO claramente definidos",
    body: "El mismo operador puede evaluarse en contextos distintos (crypto, fiat, apuestas o mercado). Definimos el producto y el alcance geográfico cuando aplica.",
  },
  {
    title: "Fuentes identificables",
    body: "Priorizamos páginas oficiales, términos publicados y fuentes externas reconocibles. Si no hay respaldo verificable, usamos lenguaje cauteloso u omitimos la afirmación.",
  },
  {
    title: "Límites y dudas explicados",
    body: "No garantizamos pagos, retiros, licencias ni disponibilidad. Explicamos límites, riesgos y lo que no verificamos de forma continua.",
  },
] as const;

export const METHOD_CRITERIA = [
  {
    title: "Seguridad, propiedad y licencia informada",
    body: "Revisamos la información de licencia, propiedad y transparencia que publica el operador. Cuando no podemos contrastarla de forma independiente, lo indicamos con cautela.",
  },
  {
    title: "Pagos, retiros y comisiones",
    body: "Observamos métodos, límites, comisiones y plazos descritos en fuentes oficiales. No inventamos tiempos de retiro ni prometemos liquidez.",
  },
  {
    title: "Producto, catálogo y experiencia de uso",
    body: "Valoramos usabilidad, cobertura de juegos o mercados, acceso móvil y canales de soporte según observación editorial del producto publicado.",
  },
  {
    title: "Bonos, requisitos de apuesta y condiciones",
    body: "Evaluamos claridad de términos, requisitos de apuesta y restricciones. No fabricamos montos, urgencia ni valor garantizado de promociones.",
  },
  {
    title: "KYC, cuenta, jurisdicción y disponibilidad",
    body: "Consideramos verificación de cuenta, restricciones geográficas y disponibilidad informada. Ningún operador está disponible en todos los países.",
  },
  {
    title: "Juego responsable y transparencia",
    body: "Revisamos si el operador publica límites de edad, herramientas de control y mensajes de juego responsable, y si comunica términos con claridad.",
  },
] as const;

export const METHOD_PROCESS_STEPS = [
  {
    heading: "Definimos el producto y el mercado",
    body: "Identificamos si la reseña cubre casino crypto, fiat, apuestas u otro producto, y el contexto de mercado relevante (por ejemplo, México).",
  },
  {
    heading: "Revisamos páginas oficiales y términos",
    body: "Consultamos el sitio del operador, reglas de bonos, pagos y páginas de juego responsable cuando están disponibles.",
  },
  {
    heading: "Contrastamos contexto externo cuando aplica",
    body: "Usamos publicaciones o evaluaciones externas reconocibles solo cuando aportan contexto útil, sin adoptar sus puntuaciones como propias.",
  },
  {
    heading: "Evaluamos ventajas, límites y riesgos",
    body: "Separamos fortalezas observables de riesgos, lagunas de información y condiciones que el jugador debe confirmar por su cuenta.",
  },
  {
    heading: "Publicamos con autor, fecha y fuentes",
    body: "La reseña lleva atribución (autor o redacción), fechas del registro editorial y referencias cuando aplican.",
  },
  {
    heading: "Actualizamos cuando existe información verificable",
    body: "Corregimos o etiquetamos cambios cuando hay evidencia fiable. No pretendemos verificación diaria continua de todos los operadores.",
  },
] as const;

export const METHOD_SOURCES = [
  {
    title: "Páginas oficiales de producto",
    body: "Sitio del operador, descripción del producto y comunicaciones oficiales públicas.",
  },
  {
    title: "Términos, bonos y juego responsable",
    body: "Condiciones publicadas, reglas de promoción y páginas de juego responsable del operador.",
  },
  {
    title: "Propiedad y licencia informada",
    body: "Datos de propiedad y licencia que el operador declara. No equivalen a una auditoría independiente de JugadaMax.",
  },
  {
    title: "Materiales de campaña de socios",
    body: "Creatividades o datos de campaña suministrados por partners, etiquetados como tales cuando se usan.",
  },
  {
    title: "Publicaciones externas reconocibles",
    body: "Medios o sitios de evaluación externos cuando aportan contexto. Sus calificaciones no son las de JugadaMax.",
  },
  {
    title: "Observación editorial de JugadaMax",
    body: "Juicio del equipo sobre claridad, usabilidad, riesgos y coherencia de la información publicada.",
  },
] as const;

export const METHOD_FAQ_ITEMS = [
  {
    q: "¿Las calificaciones son votos de usuarios?",
    a: "No. Son opiniones editoriales del equipo de JugadaMax, atribuidas a un autor o a la redacción. No publicamos AggregateRating ni reseñas de usuarios fabricadas.",
  },
  {
    q: "¿Existe una fórmula matemática pública?",
    a: "No. No convertimos criterios en una fórmula ponderada publicada. Las puntuaciones son juicios cualitativos editoriales según producto, GEO y audiencia prevista.",
  },
  {
    q: "¿Un operador afiliado recibe mejor puntuación?",
    a: "No de forma automática. La afiliación puede influir en qué campañas comerciales están disponibles o en la visibilidad, pero no garantiza una calificación positiva. Colocación destacada y puntuación son decisiones distintas.",
  },
  {
    q: "¿JugadaMax verifica personalmente cada licencia?",
    a: "No afirmamos una verificación independiente de cada licencia. Revisamos la información que publica el operador y, cuando no hay respaldo suficiente, usamos lenguaje cauteloso o omitimos la afirmación.",
  },
  {
    q: "¿Por qué una puntuación puede variar según el mercado?",
    a: "Porque el producto, los métodos de pago, la jurisdicción y la audiencia prevista pueden cambiar el contexto. Una evaluación para México no es automáticamente válida para todos los mercados.",
  },
  {
    q: "¿Con qué frecuencia se actualizan las reseñas?",
    a: "Actualizamos cuando hay información verificable o correcciones necesarias. No prometemos revisión diaria de todos los operadores. Las fechas publicadas salen del registro editorial.",
  },
  {
    q: "¿Cómo puedo solicitar una corrección?",
    a: "Usa la página de contacto para reportar datos desactualizados, enlaces rotos o errores factuales. Revisamos correcciones cuando hay evidencia comprobable.",
  },
] as const;

export const METHOD_RELATED_ROUTES = [
  { href: "/reviews", label: "Reseñas" },
  { href: "/casinos-crypto", label: "Casinos crypto" },
  { href: "/casinos-fiat", label: "Casinos fiat" },
  { href: "/apuestas", label: "Apuestas" },
  { href: "/bonos", label: "Bonos" },
  { href: "/guias", label: "Guías" },
  { href: "/divulgacion-afiliados", label: "Divulgación de afiliados" },
  { href: "/juego-responsable", label: "Juego responsable" },
  { href: "/acerca-de", label: "Acerca de" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const METHOD_AUTHOR_ORDER = ["arturs-stoliks", "redaccion-jugadamax"] as const;
