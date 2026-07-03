import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAuthorById,
  getBonusesForCasino,
  getCasinoById,
  getReviewBySlug,
  getReviews,
} from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import { PaymentBadges } from "@/components/ranking/PaymentBadges";
import { AffiliateCta } from "@/components/trust/AffiliateCta";
import { LicenseInfo } from "@/components/trust/LicenseInfo";
import { AffiliateDisclosure } from "@/components/trust/AffiliateDisclosure";
import { ResponsibleGamblingNotice } from "@/components/trust/ResponsibleGamblingNotice";
import { ReviewHeader } from "@/components/review/ReviewHeader";
import { VerdictBox } from "@/components/review/VerdictBox";
import { ProsCons } from "@/components/review/ProsCons";
import { StakeHighRollerSection } from "@/components/review/StakeHighRollerSection";
import type { ReviewRelatedLink } from "@/types/content";

function RelatedLinkBadge({ kind }: { kind?: ReviewRelatedLink["kind"] }) {
  if (kind === "blog") {
    return (
      <span
        aria-hidden="true"
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#16233f]"
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="8" width="20" height="24" rx="2" stroke="#B8B8B0" strokeWidth="1.5" />
          <path d="M14 14h12M14 18h12M14 22h8" stroke="#FFB800" strokeWidth="1.5" strokeLinecap="round" />
          <text x="20" y="34" textAnchor="middle" fill="#F5F5F0" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif">
            TTR
          </text>
        </svg>
      </span>
    );
  }

  if (kind === "streaming") {
    return (
      <span
        aria-hidden="true"
        className="inline-flex h-10 shrink-0 items-center gap-1 rounded-lg bg-[#53FC18] px-2.5"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="7" y="11" textAnchor="middle" fill="#000" fontSize="11" fontWeight="900" fontFamily="system-ui, sans-serif">
            K
          </text>
        </svg>
        <span className="text-[0.65rem] font-bold tracking-tight text-black">Kick</span>
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className="inline-flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-lg border border-primary/20 bg-[#16233f] ring-1 ring-primary/15"
    >
      <span className="text-[0.55rem] font-bold leading-none text-primary">LTC</span>
      <span className="mt-0.5 text-[0.45rem] font-semibold leading-none text-muted-foreground">Casino</span>
    </span>
  );
}

export function generateStaticParams() {
  return getReviews().map((review) => ({ slug: review.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const review = getReviewBySlug(slug);
  if (!review) return {};
  const casino = getCasinoById(review.casinoId);
  const name = casino?.name ?? review.title;

  return buildMetadata({
    title: review.title,
    description: `Reseña editorial de ${name}: veredicto, pros y contras, pagos y licencia. Con divulgación de afiliados y juego responsable +18.`,
    path: `/reviews/${review.slug}`,
    type: "article",
  });
}

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const review = getReviewBySlug(slug);
  if (!review) notFound();

  const casino = getCasinoById(review.casinoId);
  const author = getAuthorById(review.authorId);
  if (!casino || !author) notFound();

  const headlineBonus = getBonusesForCasino(casino.id).find((b) => b.active)?.title;
  const trustNote = review.trustSummary ?? casino.licensing?.notes;

  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Reseñas", path: "/reviews" },
    { name: casino.name, path: `/reviews/${review.slug}` },
  ]);

  const article = articleJsonLd({
    headline: review.title,
    path: `/reviews/${review.slug}`,
    authorName: author.name,
    datePublished: review.publishedAt,
    dateModified: review.updatedAt,
    type: "Article",
  });

  return (
    <Container className="py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />

      <article className="mx-auto max-w-3xl space-y-8">
        <ReviewHeader review={review} casino={casino} author={author} />

        <div className="space-y-3">
          <AffiliateDisclosure />
          <ResponsibleGamblingNotice />
        </div>

        <VerdictBox verdict={review.verdict} rating={review.rating} />

        <section aria-label="Puntos a favor y en contra">
          <h2 className="mb-3 text-xl font-semibold text-foreground">Pros y contras</h2>
          <ProsCons pros={review.pros} cons={review.cons} />
        </section>

        <section aria-label="Análisis" className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Análisis</h2>
          <div className="space-y-4">
            {review.body
              .split(/\n\s*\n/)
              .filter((paragraph) => paragraph.trim().length > 0)
              .map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm leading-relaxed text-muted-foreground sm:text-base"
                >
                  {paragraph.trim()}
                </p>
              ))}
          </div>
        </section>

        {review.relatedLinks && review.relatedLinks.length > 0 ? (
          <section
            aria-label="Enlaces relacionados"
            className="rounded-lg border border-border/60 bg-card p-4 sm:p-5"
          >
            <h2 className="text-lg font-semibold text-foreground">Enlaces relacionados</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Recursos externos relacionados con LTC Casino y su ecosistema. JugadaMax recomienda
              revisar siempre términos, disponibilidad regional y políticas del operador antes de
              registrarte.
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {review.relatedLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex min-h-11 items-start gap-3 rounded-xl border border-white/10 bg-[#111417] p-3 transition-colors hover:border-primary/30"
                >
                  <RelatedLinkBadge kind={link.kind} />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold leading-snug text-foreground">{link.label}</p>
                    {link.subtitle ? (
                      <p className="mt-0.5 text-xs text-muted-foreground">{link.subtitle}</p>
                    ) : null}
                  </div>
                </a>
              ))}
            </div>
          </section>
        ) : null}

        {review.slug === "stake" ? <StakeHighRollerSection /> : null}

        {headlineBonus ? (
          <section aria-label="Bono" className="rounded-lg border border-border/60 bg-card p-4">
            <h2 className="mb-1 text-lg font-semibold text-foreground">Bono</h2>
            <p className="text-sm text-muted-foreground">{headlineBonus}</p>
          </section>
        ) : null}

        <section
          aria-label="Pagos y licencia"
          className="grid gap-4 sm:grid-cols-2"
        >
          <div className="rounded-lg border border-border/60 bg-card p-4">
            <h2 className="mb-2 text-lg font-semibold text-foreground">Pagos</h2>
            <PaymentBadges payments={casino.payments} />
            {review.paymentsSummary ? (
              <p className="mt-2 text-sm text-muted-foreground">{review.paymentsSummary}</p>
            ) : null}
          </div>
          <div className="rounded-lg border border-border/60 bg-card p-4">
            <h2 className="mb-2 text-lg font-semibold text-foreground">Licencia y confianza</h2>
            <LicenseInfo licensing={casino.licensing} />
            {trustNote ? (
              <p className="mt-2 text-sm text-muted-foreground">{trustNote}</p>
            ) : null}
          </div>
        </section>

        <div className="flex flex-wrap gap-3 border-t border-border/60 pt-6">
          <AffiliateCta
            href={casino.affiliateUrl}
            label={casino.id === "stake" ? "Visitar Stake México" : `Visitar ${casino.name}`}
          />
        </div>
      </article>
    </Container>
  );
}
