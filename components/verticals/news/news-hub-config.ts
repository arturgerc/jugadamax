/**
 * News Hub V2 labels and static editorial copy — Spanish/Mexico.
 */

import type { NewsCategory, NewsKind } from "@/types/content";

export const NEWS_KIND_LABELS: Record<NewsKind, string> = {
  noticia: "Noticia",
  analisis: "Análisis",
  opinion: "Opinión",
  "noticia-opinion": "Noticia + opinión",
  anuncio: "Anuncio",
};

export const NEWS_CATEGORY_LABELS: Record<NewsCategory, string> = {
  actualidad: "Actualidad",
  regulacion: "Regulación",
  crypto: "Crypto",
  casinos: "Casinos",
  apuestas: "Apuestas",
  bonos: "Bonos",
  pagos: "Pagos",
  industria: "Industria",
  jugadamax: "JugadaMax",
};

export const NEWS_CATEGORY_ACCENTS: Record<NewsCategory, string> = {
  actualidad: "border-sky-400/30 bg-sky-500/10 text-sky-200",
  regulacion: "border-amber-400/30 bg-amber-500/10 text-amber-200",
  crypto: "border-cyan-400/30 bg-cyan-500/10 text-cyan-200",
  casinos: "border-primary/30 bg-primary/10 text-primary",
  apuestas: "border-emerald-400/30 bg-emerald-500/10 text-emerald-200",
  bonos: "border-fuchsia-400/30 bg-fuchsia-500/10 text-fuchsia-200",
  pagos: "border-violet-400/30 bg-violet-500/10 text-violet-200",
  industria: "border-orange-400/30 bg-orange-500/10 text-orange-200",
  jugadamax: "border-accent/35 bg-accent/10 text-accent",
};

export const NEWS_KIND_ACCENTS: Record<NewsKind, string> = {
  noticia: "border-sky-400/35 bg-sky-500/10 text-sky-200",
  analisis: "border-cyan-400/35 bg-cyan-500/10 text-cyan-200",
  opinion: "border-violet-400/35 bg-violet-500/10 text-violet-200",
  "noticia-opinion": "border-primary/35 bg-primary/10 text-primary",
  anuncio: "border-emerald-400/35 bg-emerald-500/10 text-emerald-200",
};

export const NEWS_HUB_CATEGORY_NAV: readonly {
  id: NewsCategory;
  description: string;
}[] = [
  { id: "regulacion", description: "Marcos legales, reformas y señales regulatorias." },
  { id: "apuestas", description: "Apuestas deportivas, eventos y contexto para México." },
  { id: "bonos", description: "Cambios de promociones y cómo leer términos." },
  { id: "jugadamax", description: "Anuncios y actualizaciones del propio medio." },
] as const;

export const NEWS_PROCESS_STEPS = [
  {
    heading: "Hechos atribuibles",
    body: "Priorizamos información verificable y citamos la fuente cuando el artículo se apoya en reportes externos.",
  },
  {
    heading: "Opinión etiquetada",
    body: "La opinión editorial o el comentario de autor se separa del relato factual para no mezclar ambos.",
  },
  {
    heading: "Fechas reales",
    body: "Usamos fechas de publicación y actualización del registro editorial; no inventamos urgencia.",
  },
  {
    heading: "Sin fabricaciones",
    body: "No inventamos estadísticas, citas, leyes, licencias, pagos ni reacciones de usuarios.",
  },
] as const;

export const NEWS_FAQ_ITEMS = [
  {
    q: "¿Qué tipos de contenido hay en /noticias?",
    a: "Noticias, análisis, opinión, formatos mixtos noticia+opinión y anuncios editoriales de JugadaMax. Todo permanece bajo /noticias.",
  },
  {
    q: "¿Las calificaciones de operadores aparecen aquí?",
    a: "No. Las reseñas y calificaciones viven en /reviews. Aquí publicamos actualidad, contexto y comentario editorial.",
  },
  {
    q: "¿Cómo sé qué es hecho y qué es opinión?",
    a: "Cuando aplica, el artículo etiqueta el tipo (por ejemplo noticia+opinión), muestra puntos clave y un bloque de comentario del autor separado del cuerpo factual.",
  },
  {
    q: "¿Las fuentes garantizan exactitud absoluta?",
    a: "No. Las fuentes documentan de dónde proviene la información citada. Confirma siempre el estado vigente en el origen y en autoridades u operadores cuando corresponda.",
  },
  {
    q: "¿Hay botones de registro en el hub de noticias?",
    a: "No. El hub es editorial. Los CTAs de afiliado viven en páginas comerciales o reseñas individuales, con divulgación.",
  },
] as const;

export const NEWS_RELATED_ROUTES = [
  { href: "/reviews", label: "Reseñas" },
  { href: "/guias", label: "Guías" },
  { href: "/bonos", label: "Bonos" },
  { href: "/apuestas", label: "Apuestas" },
  { href: "/casinos-crypto", label: "Casinos crypto" },
  { href: "/como-evaluamos", label: "Cómo evaluamos" },
  { href: "/juego-responsable", label: "Juego responsable" },
  { href: "/divulgacion-afiliados", label: "Divulgación" },
] as const;
