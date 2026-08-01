/**
 * Spanish About page copy and static editorial links.
 */

export const ABOUT_FOCUS_PILLS = [
  "Casinos crypto y fiat",
  "Apuestas deportivas",
  "Pagos digitales",
  "Juego responsable",
] as const;

export const ABOUT_HERO_PANEL_ITEMS = [
  "Medio editorial de comparación",
  "No acepta apuestas ni depósitos",
  "Autores identificados",
  "Afiliación divulgada",
] as const;

export const ABOUT_PUBLISHING_AREAS = [
  {
    title: "Reseñas editoriales",
    body: "Reseñas con atribución de autor, calificación editorial, pagos, verificación y pros/contras. No son puntuaciones agregadas de usuarios.",
    href: "/reviews",
    label: "Ver reseñas",
  },
  {
    title: "Rankings y comparativas",
    body: "Directorios y tablas de comparación ordenados por criterio editorial. El orden puede verse influido por acuerdos comerciales divulgados.",
    href: "/casinos-crypto",
    label: "Ver casinos crypto",
  },
  {
    title: "Guías",
    body: "Contenido educativo sobre operadores, pagos, bonos y riesgos. No es asesoría legal ni financiera.",
    href: "/guias",
    label: "Ver guías",
  },
  {
    title: "Noticias, análisis y opinión",
    body: "Actualizaciones editoriales, análisis y comentario. Separamos hechos reportados de opinión cuando aplica.",
    href: "/noticias",
    label: "Ver noticias",
  },
] as const;

export const ABOUT_AUDIENCE_CARDS = [
  {
    title: "Cobertura en español para México",
    body: "El contenido en español prioriza el mercado mexicano: operadores, pagos y condiciones que suelen ser relevantes para lectores en México. La disponibilidad real siempre depende del operador y de la jurisdicción.",
  },
  {
    title: "Cobertura internacional en inglés",
    body: "Las páginas en inglés sirven a lectores internacionales. Cuando un producto o operador tiene orientación a México, lo etiquetamos con claridad en lugar de presentarlo como una oferta global universal.",
  },
] as const;

export const ABOUT_PROCESS_STEPS = [
  {
    heading: "Fuentes e información del operador",
    body: "Revisamos información publicada por el operador y fuentes externas cuando aplican. No inventamos licencias, montos ni plazos de retiro.",
  },
  {
    heading: "Hechos y opinión editorial",
    body: "Separamos datos atribuibles de la valoración de JugadaMax. Cuando hay comentario de autor, lo etiquetamos.",
  },
  {
    heading: "Calificaciones y comparativas",
    body: "Las calificaciones son opiniones editoriales del equipo, no promedios de votos ni AggregateRating. Los rankings no son hechos neutrales.",
  },
  {
    heading: "Fechas, actualizaciones y correcciones",
    body: "Las fechas salen del registro editorial. No las alteramos solo para parecer recientes. Corregimos cuando hay información comprobable.",
  },
] as const;

export const ABOUT_BOUNDARIES = [
  {
    title: "No opera casinos ni casas de apuestas",
    body: "JugadaMax es un medio editorial. No somos un operador de juego ni un intermediario de apuestas.",
  },
  {
    title: "No acepta apuestas, depósitos ni retiros",
    body: "No recibimos fondos de jugadores ni procesamos pagos de juego. Cualquier depósito ocurre solo en sitios de terceros.",
  },
  {
    title: "No garantiza disponibilidad ni condiciones",
    body: "No garantizamos licencias, bonos, aprobación de KYC, tiempos de retiro ni que un operador esté disponible en tu país.",
  },
  {
    title: "No ofrece asesoría legal o financiera",
    body: "Publicamos información editorial. Confirma términos, riesgos y obligaciones con el operador y con asesores cualificados cuando corresponda.",
  },
] as const;

export const ABOUT_FAQ_ITEMS = [
  {
    q: "¿Qué es JugadaMax?",
    a: "JugadaMax es un sitio editorial de comparación y medios sobre casinos crypto, casinos fiat y apuestas deportivas, con cobertura en español centrada en México y páginas en inglés para lectores internacionales.",
  },
  {
    q: "¿JugadaMax es un casino o una casa de apuestas?",
    a: "No. No operamos casinos ni casas de apuestas y no aceptamos apuestas, depósitos ni retiros. Comparamos y comentamos operadores de terceros.",
  },
  {
    q: "¿Cómo gana dinero JugadaMax?",
    a: "Podemos recibir una comisión cuando un lector usa ciertos enlaces comerciales. Eso no añade un costo extra directo al lector. Las relaciones comerciales pueden influir en la visibilidad o el orden de algunos operadores, y lo divulgamos.",
  },
  {
    q: "¿Las calificaciones son votos de usuarios?",
    a: "No. Las calificaciones son opiniones editoriales del equipo de JugadaMax, no puntuaciones agregadas de usuarios ni schema AggregateRating.",
  },
  {
    q: "¿Todos los operadores están disponibles en todos los países?",
    a: "No. La disponibilidad depende de la jurisdicción, de los términos del operador y de restricciones locales. Verifica siempre en el sitio oficial del operador.",
  },
  {
    q: "¿Cómo puedo solicitar una corrección?",
    a: "Usa la página de contacto para reportar información desactualizada, enlaces rotos, datos incorrectos de operadores o errores factuales. Revisamos correcciones cuando hay evidencia comprobable.",
  },
] as const;

export const ABOUT_RELATED_ROUTES = [
  { href: "/reviews", label: "Reseñas" },
  { href: "/guias", label: "Guías" },
  { href: "/noticias", label: "Noticias" },
  { href: "/bonos", label: "Bonos" },
  { href: "/apuestas", label: "Apuestas" },
  { href: "/como-evaluamos", label: "Cómo evaluamos" },
  { href: "/juego-responsable", label: "Juego responsable" },
  { href: "/contacto", label: "Contacto" },
] as const;

/** About-page author order: founder first, then editorial team. */
export const ABOUT_AUTHOR_ORDER = ["arturs-stoliks", "redaccion-jugadamax"] as const;
