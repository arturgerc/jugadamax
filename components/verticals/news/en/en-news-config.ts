/**
 * English News Hub V2 labels and static editorial copy.
 */

import type { NewsCategory, NewsKind } from "@/types/content";

export const EN_NEWS_KIND_LABELS: Record<NewsKind, string> = {
  noticia: "News",
  analisis: "Analysis",
  opinion: "Opinion",
  "noticia-opinion": "News + Opinion",
  anuncio: "Announcement",
};

export const EN_NEWS_CATEGORY_LABELS: Record<NewsCategory, string> = {
  actualidad: "Current affairs",
  regulacion: "Regulation",
  crypto: "Crypto",
  casinos: "Casinos",
  apuestas: "Sports betting",
  bonos: "Bonuses",
  pagos: "Payments",
  industria: "Industry",
  jugadamax: "JugadaMax",
};

export const EN_NEWS_CATEGORY_ACCENTS: Record<NewsCategory, string> = {
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

export const EN_NEWS_KIND_ACCENTS: Record<NewsKind, string> = {
  noticia: "border-sky-400/35 bg-sky-500/10 text-sky-200",
  analisis: "border-cyan-400/35 bg-cyan-500/10 text-cyan-200",
  opinion: "border-violet-400/35 bg-violet-500/10 text-violet-200",
  "noticia-opinion": "border-primary/35 bg-primary/10 text-primary",
  anuncio: "border-emerald-400/35 bg-emerald-500/10 text-emerald-200",
};

export const EN_NEWS_HUB_CATEGORY_NAV: readonly {
  id: NewsCategory;
  description: string;
}[] = [
  { id: "regulacion", description: "Legal frameworks, reforms and regulatory signals." },
  { id: "apuestas", description: "Sports betting, events and Mexico-facing context." },
  { id: "bonos", description: "Promotion changes and how to read terms." },
  { id: "jugadamax", description: "Announcements and updates from the publication." },
] as const;

export const EN_NEWS_PROCESS_STEPS = [
  {
    heading: "Attributable facts",
    body: "We prioritise verifiable information and cite the source when an article relies on external reporting.",
  },
  {
    heading: "Opinion is labelled",
    body: "Editorial opinion and author commentary are separated from factual reporting.",
  },
  {
    heading: "Real dates",
    body: "Publication and update dates come from the editorial record. We do not change dates to manufacture urgency.",
  },
  {
    heading: "No fabrication",
    body: "We do not invent statistics, quotations, laws, licences, payments or user reactions.",
  },
] as const;

export const EN_NEWS_FAQ_ITEMS = [
  {
    q: "What types of content appear in /en/news?",
    a: "News, analysis, opinion, mixed news+opinion formats and JugadaMax editorial announcements. Everything stays under /en/news.",
  },
  {
    q: "Do operator ratings appear in the news hub?",
    a: "No. Reviews and ratings live on /en/reviews. Here we publish updates, context and editorial commentary.",
  },
  {
    q: "How do you distinguish fact from opinion?",
    a: "When it applies, the article labels the type (for example news+opinion), shows key points and a separate author-commentary block from the factual body.",
  },
  {
    q: "Do cited sources guarantee absolute accuracy?",
    a: "No. Sources document where cited information comes from. Always confirm the live status at the origin and with authorities or operators when relevant.",
  },
  {
    q: "Are there registration buttons in the news hub?",
    a: "No. The hub is editorial. Affiliate CTAs live on commercial pages or individual reviews, with disclosure.",
  },
] as const;

export const EN_NEWS_RELATED_ROUTES = [
  { href: "/en/reviews", label: "Reviews" },
  { href: "/en/guides", label: "Guides" },
  { href: "/en/bonuses", label: "Bonuses" },
  { href: "/en/betting", label: "Sports betting" },
  { href: "/en/casinos-crypto", label: "Crypto casinos" },
  { href: "/en/how-we-review", label: "How we review" },
  { href: "/en/responsible-gambling", label: "Responsible gambling" },
  { href: "/en/affiliate-disclosure", label: "Affiliate disclosure" },
] as const;
