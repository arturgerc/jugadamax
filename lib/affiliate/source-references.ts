import type { SourceReference } from "@/components/trust/SourceReferenceBlock";
import type { Market } from "@/types/operator-links";
import type { UiLocale } from "@/lib/i18n/ui-labels";
import { resolveOperatorHomepageLink } from "@/lib/affiliate/operator-links";

/**
 * Build the operator-homepage row for Sources / Fuentes blocks.
 * Uses the central affiliate resolver when an approved destination exists.
 * Never invents tracking URLs — falls back to a provided official href only.
 */
export function buildOperatorHomepageSourceReference(options: {
  operatorId: string;
  operatorName: string;
  market: Market;
  locale: UiLocale;
  /** Direct official homepage when no affiliate/CTA destination exists. */
  fallbackOfficialHref?: string;
}): SourceReference {
  const { operatorId, operatorName, market, locale, fallbackOfficialHref } = options;
  const link = resolveOperatorHomepageLink(operatorId, market);

  if (link?.isAffiliate) {
    return {
      label:
        locale === "en"
          ? `${operatorName} — official operator site via JugadaMax affiliate link`
          : `${operatorName} — sitio oficial del operador mediante enlace afiliado de JugadaMax`,
      href: link.url,
      note:
        locale === "en"
          ? "Opens the operator through the approved JugadaMax partner campaign. JugadaMax may receive a commission."
          : "Abre el operador mediante la campaña aprobada de JugadaMax. JugadaMax puede recibir una comisión.",
      kind: "affiliate",
      operatorId,
      external: true,
    };
  }

  const href = link?.url ?? fallbackOfficialHref;
  if (!href) {
    return {
      label:
        locale === "en"
          ? `${operatorName} — official site`
          : `${operatorName} — sitio oficial`,
      note:
        locale === "en"
          ? "No approved outbound destination is published for this operator on JugadaMax."
          : "JugadaMax no publica un destino de salida aprobado para este operador.",
    };
  }

  return {
    label:
      locale === "en"
        ? `${operatorName} — official site`
        : `${operatorName} — sitio oficial`,
    href,
    kind: "official-doc",
    external: true,
    note: link && !link.isAffiliate
      ? locale === "en"
        ? "Official non-affiliate destination for this market."
        : "Destino oficial no afiliado para este mercado."
      : undefined,
  };
}
