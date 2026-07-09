import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAuthorById,
  getBonusesForCasino,
  getCasinoById,
  getReviewBySlug,
  getReviews,
} from "@/lib/content";
import { filterReviewsForSurface, isOperatorAllowedOnSurface, isOperatorCtaAllowed } from "@/content/operators/status";
import { buildMetadata } from "@/lib/seo/metadata";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import { PaymentBadges } from "@/components/ranking/PaymentBadges";
import { AffiliateDisclosure } from "@/components/trust/AffiliateDisclosure";
import { ResponsibleGamblingNotice } from "@/components/trust/ResponsibleGamblingNotice";
import { OperatorCta } from "@/components/trust/OperatorCta";
import { LicenseInfo } from "@/components/trust/LicenseInfo";
import { getCasinoOutboundLink } from "@/lib/affiliate/operator-links";
import {
  BETSSON_MX_CASINO_WELCOME_URL,
  BETSSON_MX_HOME_URL,
} from "@/lib/affiliate/constants";
import { OfferCard } from "@/components/affiliate/OfferCard";
import { ReviewHeader } from "@/components/review/ReviewHeader";
import { VerdictBox } from "@/components/review/VerdictBox";
import { ProsCons } from "@/components/review/ProsCons";
import { StakeHighRollerSection } from "@/components/review/StakeHighRollerSection";
import type { ReviewRelatedLink } from "@/types/content";

function RelatedLinkBadge({
  kind,
  label,
}: {
  kind?: ReviewRelatedLink["kind"];
  label?: string;
}) {
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

  const labelUpper = label?.toUpperCase() ?? "";

  if (labelUpper.includes("AYUDA")) {
    return (
      <span
        aria-hidden="true"
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#16233f]"
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="10" stroke="#FFB800" strokeWidth="1.5" />
          <path d="M16 16.5a4 4 0 0 1 7.2 2c0 2.5-3.2 2.8-3.2 5" stroke="#F5F5F0" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="20" cy="27" r="1" fill="#F5F5F0" />
        </svg>
      </span>
    );
  }

  if (labelUpper.includes("PAGO") || labelUpper.includes("DEPÓSITO") || labelUpper.includes("DEPOSITO")) {
    return (
      <span
        aria-hidden="true"
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#16233f]"
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="14" width="20" height="14" rx="2" stroke="#B8B8B0" strokeWidth="1.5" />
          <path d="M10 18h20" stroke="#FFB800" strokeWidth="1.5" />
          <rect x="14" y="22" width="6" height="2" rx="0.5" fill="#F5F5F0" />
        </svg>
      </span>
    );
  }

  if (labelUpper.includes("CALIENTE")) {
    return (
      <span
        aria-hidden="true"
        className="inline-flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-lg border border-primary/20 bg-[#f5f5f0] ring-1 ring-primary/15"
      >
        <span className="text-[0.55rem] font-bold leading-none text-[#c41e3a]">CA</span>
        <span className="mt-0.5 text-[0.4rem] font-semibold leading-none text-[#111417]">Caliente</span>
      </span>
    );
  }

  if (labelUpper.includes("BETSSON")) {
    return (
      <span
        aria-hidden="true"
        className="inline-flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-lg border border-primary/20 bg-[#16233f] ring-1 ring-primary/15"
      >
        <span className="text-[0.55rem] font-bold leading-none text-primary">BE</span>
        <span className="mt-0.5 text-[0.4rem] font-semibold leading-none text-muted-foreground">Betsson</span>
      </span>
    );
  }

  let websiteToken = "LTC";
  let websiteSubtitle = "Casino";
  if (labelUpper.includes("CRYPTOCASINO") || labelUpper.includes(".CC")) {
    websiteToken = "CC";
    websiteSubtitle = "Crypto";
  } else if (labelUpper.includes("ETH")) {
    websiteToken = "ETH";
    websiteSubtitle = "Casino";
  }

  return (
    <span
      aria-hidden="true"
      className="inline-flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-lg border border-primary/20 bg-[#16233f] ring-1 ring-primary/15"
    >
      <span className="text-[0.55rem] font-bold leading-none text-primary">{websiteToken}</span>
      <span className="mt-0.5 text-[0.45rem] font-semibold leading-none text-muted-foreground">
        {websiteSubtitle}
      </span>
    </span>
  );
}

export function generateStaticParams() {
  return filterReviewsForSurface(getReviews(), "reviews").map((review) => ({
    slug: review.slug,
  }));
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
    ...(review.slug === "stake"
      ? {
          languageAlternates: {
            "es-MX": `/reviews/${review.slug}`,
            en: `/en/reviews/${review.slug}`,
          },
        }
      : {}),
  });
}

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const review = getReviewBySlug(slug);
  if (!review || !isOperatorAllowedOnSurface(review.casinoId, "reviews")) notFound();

  const casino = getCasinoById(review.casinoId);
  const author = getAuthorById(review.authorId);
  if (!casino || !author) notFound();

  const headlineBonus = getBonusesForCasino(casino.id).find((b) => b.active)?.title;
  const trustNote = review.trustSummary ?? casino.licensing?.notes;
  const outboundLink = isOperatorCtaAllowed(casino.id)
    ? getCasinoOutboundLink(casino, "mx")
    : undefined;

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

        {review.slug === "betsson" ? (
          <OfferCard
            operatorName="Betsson"
            operatorId="betsson"
            badge="Partner aprobado"
            headline="Betsson MX: casino online y apuestas con pagos locales"
            subheadline="Partner fiat aprobado para México"
            offerText="Promoción de bienvenida sujeta a términos oficiales"
            paymentBadges={["Visa", "Mastercard", "OXXO", "SPEI"]}
            featureBullets={[
              "Casino online y apuestas deportivas",
              "Métodos de pago populares en México",
              "Marca internacional con enfoque LATAM",
              "Revisa bonos, límites y verificación antes de registrarte",
            ]}
            primaryCtaLabel="Entrar a Betsson MX"
            primaryCtaHref={BETSSON_MX_HOME_URL}
            secondaryCtaLabel="Ver promoción de casino"
            secondaryCtaHref={BETSSON_MX_CASINO_WELCOME_URL}
            termsNote="Bonos, métodos de pago, verificación y retiros dependen de los términos oficiales de Betsson MX y de tu jurisdicción."
            responsibleNote="18+ | Juega con responsabilidad"
            visualVariant="fiat"
            logo={casino.logo}
          />
        ) : null}

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

        {review.relatedLinks &&
        isOperatorCtaAllowed(casino.id) &&
        review.relatedLinks.length > 0 ? (
          <section
            aria-label="Enlaces relacionados"
            className="rounded-lg border border-border/60 bg-card p-4 sm:p-5"
          >
            <h2 className="text-lg font-semibold text-foreground">Enlaces relacionados</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Recursos externos relacionados con {casino.name} y su ecosistema. JugadaMax recomienda
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
                  <RelatedLinkBadge kind={link.kind} label={link.label} />
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
          <OperatorCta link={outboundLink} />
        </div>
      </article>
    </Container>
  );
}
