/**
 * Static Reviews Hub V2 labels and copy — Spanish/Mexico public surface.
 * Does not invent ratings, review counts, or operator facts.
 */

/** Default visible remaining reviews (after excluding highlights). */
export const REVIEW_HUB_DEFAULT_VISIBLE = 6;

export const NO_KYC_OPERATOR_IDS = [
  "cryptocasino",
  "ethcasino",
  "ltccasino",
] as const;

/**
 * Editorial highlighted selection for Reviews Hub — not a ranking.
 * Primary (3 larger) then secondary (4 compact), exact order.
 */
export const REVIEW_HUB_HIGHLIGHT_PRIMARY_IDS = [
  "cryptocasino",
  "betsson",
  "bitcasino",
] as const;

export const REVIEW_HUB_HIGHLIGHT_SECONDARY_IDS = [
  "betfury",
  "roobet",
  "mostbet",
  "1xbet",
] as const;

export const REVIEW_HUB_HIGHLIGHT_IDS = [
  ...REVIEW_HUB_HIGHLIGHT_PRIMARY_IDS,
  ...REVIEW_HUB_HIGHLIGHT_SECONDARY_IDS,
] as const;

export type ReviewHubCategory =
  | "todas"
  | "crypto"
  | "fiat"
  | "sin-kyc"
  | "apuestas";

export type ReviewHubSort = "recientes" | "calificacion" | "nombre";

export const REVIEW_HUB_CATEGORIES: readonly {
  id: Exclude<ReviewHubCategory, "todas">;
  label: string;
  description: string;
  href: string;
  accent: string;
  shell: string;
}[] = [
  {
    id: "crypto",
    label: "Casinos crypto",
    description: "Operadores con enfoque en criptomonedas y wallets.",
    href: "/reviews?categoria=crypto#directorio",
    accent: "border-cyan-400/35 bg-cyan-500/10 text-cyan-200",
    shell: "border-cyan-500/20 bg-gradient-to-b from-[#0d1824]/80 to-[#111417]/40",
  },
  {
    id: "fiat",
    label: "Casinos fiat",
    description: "Operadores con pagos fiat / multi-moneda para México.",
    href: "/reviews?categoria=fiat#directorio",
    accent: "border-primary/35 bg-primary/10 text-primary",
    shell: "border-primary/20 bg-gradient-to-b from-[#1a160f]/70 to-[#111417]/40",
  },
  {
    id: "sin-kyc",
    label: "Casinos sin KYC",
    description: "Registro descrito sin verificación documental tradicional.",
    href: "/reviews?categoria=sin-kyc#directorio",
    accent: "border-rose-400/35 bg-rose-500/10 text-rose-200",
    shell: "border-rose-500/20 bg-gradient-to-b from-[#1a0f12]/75 to-[#111417]/40",
  },
  {
    id: "apuestas",
    label: "Casas de apuestas",
    description: "Sportsbooks y operadores mixtos con apuestas deportivas.",
    href: "/reviews?categoria=apuestas#directorio",
    accent: "border-emerald-400/35 bg-emerald-500/10 text-emerald-200",
    shell: "border-emerald-500/20 bg-gradient-to-b from-[#0f1a16]/75 to-[#111417]/40",
  },
] as const;

export const REVIEW_HUB_SORT_OPTIONS: readonly {
  id: ReviewHubSort;
  label: string;
}[] = [
  { id: "recientes", label: "Más recientes" },
  { id: "calificacion", label: "Mayor calificación" },
  { id: "nombre", label: "Nombre A–Z" },
] as const;

export const REVIEW_HUB_FILTER_OPTIONS: readonly {
  id: ReviewHubCategory;
  label: string;
}[] = [
  { id: "todas", label: "Todas" },
  { id: "crypto", label: "Crypto" },
  { id: "fiat", label: "Fiat" },
  { id: "sin-kyc", label: "Sin KYC" },
  { id: "apuestas", label: "Apuestas" },
] as const;

/** Non-numeric editorial methodology criteria — no invented score thresholds. */
export const REVIEW_METHODOLOGY_CRITERIA = [
  {
    heading: "Seguridad y confianza",
    body: "Revisamos licencias informadas, señales de riesgo y políticas públicas del operador sin inventar verificaciones.",
  },
  {
    heading: "Pagos y retiros",
    body: "Comparamos métodos publicados, tiempos informados y fricciones relevantes para jugadores en México.",
  },
  {
    heading: "Bonos y términos",
    body: "Leemos condiciones visibles: requisitos, limitaciones y cambios frecuentes que debe confirmar el jugador.",
  },
  {
    heading: "Experiencia y disponibilidad",
    body: "Valoramos claridad de producto, KYC informado y si el operador encaja en el perfil editorial de México / LATAM.",
  },
] as const;

export const REVIEW_FAQ_ITEMS = [
  {
    q: "¿Las calificaciones son votos de usuarios?",
    a: "No. Cada calificación es una opinión editorial de JugadaMax atribuida al autor o equipo editorial. No es AggregateRating ni un promedio de reseñas de jugadores.",
  },
  {
    q: "¿Por qué algunas reseñas aparecen como referencia oficial, referencia editorial o socio pendiente?",
    a: "Reflejan la política pública del operador en JugadaMax. BC.Game se etiqueta como referencia editorial. No inventamos estados de verificación ni popularidad.",
  },
  {
    q: "¿Las fechas se actualizan para parecer recientes?",
    a: "No. Mostramos publishedAt y updatedAt reales del registro editorial. Si no hay actualización, usamos la fecha de publicación.",
  },
  {
    q: "¿Puedo registrarme desde este directorio?",
    a: "No. El hub de reseñas solo enlaza a páginas internas de reseña. Los CTAs de afiliado o registro viven en la reseña individual o en páginas comerciales, con divulgación.",
  },
  {
    q: "¿Las reseñas destacadas son un ranking?",
    a: "No. Son una selección editorial para distintos perfiles. El orden no implica posiciones 1–7 ni popularidad fabricada.",
  },
] as const;

export const REVIEW_RELATED_ROUTES = [
  { href: "/casinos-crypto", label: "Casinos crypto" },
  { href: "/casinos-fiat", label: "Casinos fiat" },
  { href: "/casinos-sin-kyc", label: "Casinos sin KYC" },
  { href: "/apuestas", label: "Apuestas" },
  { href: "/bonos", label: "Bonos" },
  { href: "/guias", label: "Guías" },
  { href: "/como-evaluamos", label: "Cómo evaluamos" },
  { href: "/juego-responsable", label: "Juego responsable" },
] as const;
