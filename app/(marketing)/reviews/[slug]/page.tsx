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
import { MobileStickyOfferCta } from "@/components/affiliate/MobileStickyOfferCta";
import { ReviewHeader } from "@/components/review/ReviewHeader";
import { VerdictBox } from "@/components/review/VerdictBox";
import { ProsCons } from "@/components/review/ProsCons";
import { StakeHighRollerSection } from "@/components/review/StakeHighRollerSection";
import type { ReviewRelatedLink } from "@/types/content";
import { cn, focusRing } from "@/lib/utils";

const AFFILIATE_REL = "sponsored nofollow noopener noreferrer";

const BETSSON_BONUS_CONDITIONS = [
  { label: "Bono", value: "Hasta $15,000 MXN + 200 giros gratis" },
  {
    label: "Extra app",
    value: "+25 giros gratis extra si usas la app, según términos oficiales",
  },
  { label: "Depósito", value: "Desde $200 según promoción publicada" },
  { label: "SPEI", value: "Mínimo $100 por SPEI según términos oficiales" },
  { label: "Juegos elegibles", value: "Revisar juegos participantes y restricciones" },
  { label: "Requisitos", value: "Revisar requisitos de apuesta, límites y vencimiento" },
  {
    label: "Retiro",
    value: "Sujeto a verificación, método de pago y términos del operador",
  },
] as const;

const BETSSON_PAYMENTS_CARDS = [
  {
    title: "Métodos visibles",
    text: "Visa, Mastercard, OXXO y SPEI según disponibilidad.",
  },
  {
    title: "Depósitos",
    text: "Los mínimos pueden depender de la promoción y del método elegido.",
  },
  {
    title: "Retiros",
    text: "Los tiempos de retiro dependen del método, verificación de cuenta, límites y términos oficiales.",
  },
  {
    title: "Verificación",
    text: "El operador puede solicitar validación de identidad antes de permitir retiros o ciertas promociones.",
  },
] as const;

const BETSSON_PRODUCT_CARDS = [
  {
    title: "Casino online",
    text: "Slots, casino en vivo y juegos de mesa pueden estar disponibles según catálogo vigente.",
  },
  {
    title: "Apuestas deportivas",
    text: "Betsson también combina sportsbook para fútbol, Liga MX y otros deportes, sujeto a mercados disponibles.",
  },
  {
    title: "App Betsson",
    text: "La promoción puede incluir giros extra en app. Revisa requisitos del dispositivo y términos oficiales.",
  },
] as const;

const BETSSON_FAQ = [
  {
    question: "¿Betsson MX tiene bono de bienvenida?",
    answer:
      "Sí, la promoción visible para casino muestra hasta $15,000 MXN + 200 giros gratis, con condiciones oficiales que deben revisarse antes de depositar.",
  },
  {
    question: "¿Qué métodos de pago aparecen en Betsson MX?",
    answer:
      "En nuestra revisión aparecen Visa, Mastercard, OXXO y SPEI, pero la disponibilidad puede cambiar según cuenta, método y términos del operador.",
  },
  {
    question: "¿Cuánto tarda un retiro en Betsson?",
    answer:
      "Los tiempos de retiro dependen del método de pago, verificación de cuenta, límites y políticas internas del operador. JugadaMax no garantiza tiempos de retiro.",
  },
  {
    question: "¿Betsson MX es más casino o apuestas?",
    answer:
      "Betsson combina casino online y apuestas deportivas. Para JugadaMax encaja como operador fiat/mixed para usuarios que buscan pagos locales en México.",
  },
] as const;

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
    <>
    <Container className={cn("py-8", review.slug === "betsson" ? "pb-24 md:pb-8" : undefined)}>
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
            headline="Promoción de casino Betsson MX"
            subheadline="Oferta destacada para usuarios de México"
            offerText="Hasta $15,000 MXN + 200 giros gratis"
            paymentBadges={["Visa", "Mastercard", "OXXO", "SPEI"]}
            featureBullets={[
              "Promoción de bienvenida publicada por Betsson MX",
              "Casino online y apuestas deportivas",
              "Pagos locales como OXXO y SPEI según términos",
              "Revisa requisitos de apuesta, límites y verificación",
            ]}
            primaryCtaLabel="Ver bono Betsson"
            primaryCtaHref={BETSSON_MX_CASINO_WELCOME_URL}
            secondaryCtaLabel="Entrar a Betsson MX"
            secondaryCtaHref={BETSSON_MX_HOME_URL}
            termsNote="Promoción publicada por Betsson MX. Bonos, giros, métodos de pago, verificación y retiros dependen de los términos oficiales del operador y de tu jurisdicción."
            responsibleNote="18+ | Juega con responsabilidad"
            visual={{
              eyebrow: "Oferta publicada por Betsson MX",
              title: "Hasta $15,000 MXN + 200 giros gratis",
              subtitle: "+25 giros extra en la app, según términos",
              chips: ["OXXO", "SPEI", "Visa", "Mastercard"],
              variant: "betsson",
            }}
            visualVariant="fiat"
            mobileMaxBullets={3}
            logo={casino.logo}
          />
        ) : null}

        {review.slug === "betsson" ? (
          <section
            aria-labelledby="betsson-resumen-rapido-heading"
            className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
          >
            <h2
              id="betsson-resumen-rapido-heading"
              className="text-lg font-semibold text-foreground"
            >
              Resumen rápido de Betsson MX
            </h2>
            <dl className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">Bono</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Hasta $15,000 MXN + 200 giros gratis, según términos oficiales
                </dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">Pagos</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Visa, Mastercard, OXXO y SPEI según disponibilidad
                </dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Ideal para
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Usuarios que buscan casino fiat, apuestas y pagos locales
                </dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Revisar
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Requisitos de apuesta, límites, verificación y juegos elegibles
                </dd>
              </div>
            </dl>
          </section>
        ) : null}

        {review.slug === "betsson" ? (
          <section
            aria-labelledby="betsson-bonus-condiciones-heading"
            className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
          >
            <h2
              id="betsson-bonus-condiciones-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Bono y condiciones principales
            </h2>
            <dl className="mt-4 grid gap-2 sm:grid-cols-2">
              {BETSSON_BONUS_CONDITIONS.map((row) => (
                <div
                  key={row.label}
                  className="rounded-lg border border-white/10 bg-[#111417] px-3 py-2.5"
                >
                  <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {row.label}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{row.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Los datos reflejan una promoción publicada por Betsson MX y pueden cambiar. Confirma
              siempre la oferta vigente en el sitio del operador antes de depositar.
            </p>
          </section>
        ) : null}

        {review.slug === "betsson" ? (
          <section aria-labelledby="betsson-pagos-retiros-heading">
            <h2
              id="betsson-pagos-retiros-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Pagos y retiros en Betsson MX
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {BETSSON_PAYMENTS_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-border/60 bg-card p-4"
                >
                  <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {review.slug === "betsson" ? (
          <section aria-labelledby="betsson-casino-app-heading">
            <h2
              id="betsson-casino-app-heading"
              className="text-lg font-semibold text-foreground sm:text-xl"
            >
              Casino, apuestas y app
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {BETSSON_PRODUCT_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-border/60 bg-card p-4"
                >
                  <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </div>
              ))}
            </div>
          </section>
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

        {review.slug === "betsson" ? (
          <section
            aria-labelledby="betsson-post-analisis-cta-heading"
            className="rounded-xl border border-primary/25 bg-gradient-to-br from-primary/8 via-card to-[#0A1931] p-4 sm:p-5"
          >
            <h2
              id="betsson-post-analisis-cta-heading"
              className="text-lg font-semibold text-foreground"
            >
              Revisar promoción actual de Betsson MX
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Antes de registrarte, confirma el bono vigente, requisitos de apuesta, métodos de
              pago y verificación directamente en Betsson MX.
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <a
                href={BETSSON_MX_CASINO_WELCOME_URL}
                target="_blank"
                rel={AFFILIATE_REL}
                className={cn(
                  "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold",
                  "bg-primary text-primary-foreground transition-colors hover:bg-[var(--jm-gold-strong)]",
                  focusRing,
                )}
              >
                Ver bono Betsson
              </a>
              <a
                href={BETSSON_MX_HOME_URL}
                target="_blank"
                rel={AFFILIATE_REL}
                className={cn(
                  "inline-flex min-h-11 items-center justify-center rounded-md border border-primary/40 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10",
                  focusRing,
                )}
              >
                Entrar a Betsson MX
              </a>
            </div>
          </section>
        ) : null}

        {review.slug === "betsson" ? (
          <section aria-labelledby="betsson-faq-heading">
            <h2 id="betsson-faq-heading" className="text-lg font-semibold text-foreground sm:text-xl">
              Preguntas frecuentes sobre Betsson MX
            </h2>
            <div className="mt-4 divide-y divide-white/10 rounded-xl border border-border/60 bg-card">
              {BETSSON_FAQ.map((item) => (
                <details key={item.question} className="group px-4 py-1 sm:px-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-4 text-sm font-semibold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                    >
                      ▾
                    </span>
                  </summary>
                  <p className="pb-4 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        ) : null}

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

        {headlineBonus && review.slug !== "betsson" ? (
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

        {outboundLink && review.slug !== "betsson" ? (
          <div className="flex flex-wrap gap-3 border-t border-border/60 pt-6">
            <OperatorCta link={outboundLink} />
          </div>
        ) : null}
      </article>
    </Container>
    {review.slug === "betsson" ? (
      <MobileStickyOfferCta
        primaryLabel="Ver bono Betsson"
        primaryHref={BETSSON_MX_CASINO_WELCOME_URL}
        secondaryLabel="Entrar a Betsson MX"
        secondaryHref={BETSSON_MX_HOME_URL}
      />
    ) : null}
    </>
  );
}
