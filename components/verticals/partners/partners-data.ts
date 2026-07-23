import type { PartnersLocale } from "@/components/verticals/partners/partners-config";
import { filterReviewsForSurface } from "@/content/operators/status";
import { getArticles, getAuthors, getReviews } from "@/lib/content";
import type { Author } from "@/types/content";

export type PartnersSnapshot = {
  reviews: number;
  guides: number;
  news: number;
  locales: number;
};

export type PartnersCoverageExample = {
  href: string;
  title: string;
  kindLabel: string;
};

export function resolvePartnersSnapshot(): PartnersSnapshot {
  const reviews = filterReviewsForSurface(getReviews(), "reviews").length;
  const guides = getArticles("guide").length;
  const news = getArticles("news").length;
  return {
    reviews,
    guides,
    news,
    locales: 2,
  };
}

function orderAuthors(authors: Author[]): Author[] {
  const preferred = ["arturs-stoliks", "redaccion-jugadamax"];
  return [...authors].sort((a, b) => {
    const ai = preferred.indexOf(a.id);
    const bi = preferred.indexOf(b.id);
    const aRank = ai === -1 ? preferred.length : ai;
    const bRank = bi === -1 ? preferred.length : bi;
    return aRank - bRank;
  });
}

export function resolvePartnersAuthors(): Author[] {
  return orderAuthors(getAuthors());
}

export function resolvePartnersCoverage(
  locale: PartnersLocale,
): PartnersCoverageExample[] {
  if (locale === "en") {
    return [
      {
        href: "/en/casinos-crypto",
        title: "Crypto casinos — English/global coverage",
        kindLabel: "Vertical",
      },
      {
        href: "/en/guides/best-crypto-casinos",
        title: "Best crypto casinos guide",
        kindLabel: "Guide",
      },
      {
        href: "/en/how-we-review",
        title: "How we review operators",
        kindLabel: "Methodology",
      },
      {
        href: "/en/responsible-gambling",
        title: "Responsible gambling",
        kindLabel: "Trust",
      },
      {
        href: "/bonos",
        title: "Bonuses and promotions",
        kindLabel: "Directory",
      },
      {
        href: "/apuestas",
        title: "Sports betting in Mexico",
        kindLabel: "Vertical",
      },
    ];
  }

  const reviews = filterReviewsForSurface(getReviews(), "reviews");
  const featuredReview =
    reviews.find((r) => r.slug === "cryptocasino") ??
    reviews.find((r) => r.slug === "betsson") ??
    reviews[0];
  const guides = getArticles("guide");
  const news = getArticles("news");
  const featuredGuide =
    guides.find((g) => g.slug === "como-elegir-casino-crypto-mexico") ??
    guides[0];
  const featuredNews =
    news.find(
      (n) =>
        n.slug ===
        "regulacion-juegos-mexico-sigue-pendiente-ante-mundial-2026",
    ) ?? news[0];

  const examples: PartnersCoverageExample[] = [];

  if (featuredReview) {
    examples.push({
      href: `/reviews/${featuredReview.slug}`,
      title: featuredReview.title,
      kindLabel: "Reseña",
    });
  }
  if (featuredGuide) {
    examples.push({
      href: `/guias/${featuredGuide.slug}`,
      title: featuredGuide.title,
      kindLabel: "Guía",
    });
  }
  if (featuredNews) {
    examples.push({
      href: `/noticias/${featuredNews.slug}`,
      title: featuredNews.title,
      kindLabel: "Noticia",
    });
  }
  examples.push({
    href: "/casinos-crypto",
    title: "Casinos crypto en México",
    kindLabel: "Vertical",
  });
  examples.push({
    href: "/bonos",
    title: "Bonos y promociones",
    kindLabel: "Directorio",
  });
  examples.push({
    href: "/apuestas",
    title: "Casas de apuestas en México",
    kindLabel: "Vertical",
  });

  return examples.slice(0, 6);
}

export function authorProfileHref(
  author: Author,
  locale: PartnersLocale,
): string {
  void locale;
  return `/autores/${author.slug}`;
}

export function authorLinkedInHref(author: Author): string | undefined {
  return author.links?.find((link) => /linkedin/i.test(link.url))?.url;
}
