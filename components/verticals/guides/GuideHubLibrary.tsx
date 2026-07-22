import { GuideHubAuthors } from "@/components/verticals/guides/GuideHubAuthors";
import { GuideHubCard } from "@/components/verticals/guides/GuideHubCard";
import { GuideLatestUpdates } from "@/components/verticals/guides/GuideLatestUpdates";
import {
  resolveFeaturedGuide,
  resolveGuidesByCategory,
} from "@/components/verticals/guides/guide-hub-data";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

function SectionIntro({
  id,
  headingId,
  eyebrow,
  title,
  description,
}: {
  id: string;
  headingId: string;
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <div id={id} className="max-w-3xl scroll-mt-24 space-y-1">
      {eyebrow ? (
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-primary/90">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={headingId}
        className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
      >
        {title}
      </h2>
      <p className="text-sm text-muted-foreground sm:text-base">{description}</p>
    </div>
  );
}

function SectionShell({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("rounded-2xl border p-4 sm:p-5", className)}>{children}</div>
  );
}

/**
 * Curated guide library sections for Guide Hub V2.
 */
export function GuideHubLibrary() {
  const featured = resolveFeaturedGuide();
  const crypto = resolveGuidesByCategory("crypto-payments");
  const privacy = resolveGuidesByCategory("privacy-safety");
  const international = resolveGuidesByCategory("international-operators");

  return (
    <div className="space-y-8 sm:space-y-10 lg:space-y-12">
      {featured ? (
        <section aria-labelledby="guia-esencial-heading" className="scroll-mt-24">
          <SectionShell className="border-primary/15 bg-gradient-to-b from-[#16120c]/70 to-[#10151d]/40">
            <SectionIntro
              id="guia-esencial"
              headingId="guia-esencial-heading"
              eyebrow="Punto de partida"
              title="Empieza por lo básico"
              description="Introducción rápida para comparar seguridad, pagos, licencias informadas y condiciones antes de registrarte."
            />
            <div className="mt-4">
              <GuideHubCard
                guide={featured}
                featured
                ctaLabel="Leer guía esencial"
              />
            </div>
          </SectionShell>
        </section>
      ) : null}

      {crypto.length > 0 ? (
        <section
          id="crypto-y-pagos"
          aria-labelledby="crypto-y-pagos-heading"
          className="scroll-mt-24"
        >
          <SectionShell className="border-cyan-500/15 bg-gradient-to-b from-[#0d1824]/55 to-transparent">
            <SectionIntro
              id="crypto-y-pagos-intro"
              headingId="crypto-y-pagos-heading"
              title="Crypto y métodos de pago"
              description="Guías para entender monedas, redes, wallets, confirmaciones, comisiones y diferencias frente a pagos en MXN."
            />
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {crypto.map((guide) => (
                <li key={guide.article.id} className="min-w-0">
                  <GuideHubCard guide={guide} />
                </li>
              ))}
            </ul>
          </SectionShell>
        </section>
      ) : null}

      {privacy.length > 0 ? (
        <section
          id="privacidad-y-seguridad"
          aria-labelledby="privacidad-y-seguridad-heading"
          className="scroll-mt-24"
        >
          <SectionShell className="border-violet-500/15 bg-gradient-to-b from-[#15101c]/55 to-transparent">
            <SectionIntro
              id="privacidad-y-seguridad-intro"
              headingId="privacidad-y-seguridad-heading"
              title="Privacidad, KYC y seguridad"
              description="Qué significa no-KYC, cuándo pueden pedir verificación y qué señales revisar antes de depositar."
            />
            <ul className="mt-4 grid grid-cols-1 gap-3">
              {privacy.map((guide) => (
                <li key={guide.article.id} className="min-w-0">
                  <GuideHubCard guide={guide} wide />
                </li>
              ))}
            </ul>
          </SectionShell>
        </section>
      ) : null}

      {international.length > 0 ? (
        <section
          id="operadores-internacionales"
          aria-labelledby="operadores-internacionales-heading"
          className="scroll-mt-24"
        >
          <SectionShell className="border-sky-500/15 bg-gradient-to-b from-[#101820]/60 to-[#111417]/30">
            <SectionIntro
              id="operadores-internacionales-intro"
              headingId="operadores-internacionales-heading"
              title="Guías de operadores internacionales"
              description="Análisis editoriales para investigar disponibilidad, pagos, promociones, reglas de cuenta y riesgos antes de registrarte."
            />
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {international.map((guide) => (
                <li key={guide.article.id} className="min-w-0">
                  <GuideHubCard guide={guide} />
                </li>
              ))}
            </ul>
          </SectionShell>
        </section>
      ) : null}

      <GuideLatestUpdates />
      <GuideHubAuthors />
    </div>
  );
}
