import { cn } from "@/lib/utils";

/**
 * Affiliate disclosure (FR-014). MUST be visible without extra navigation on any
 * page that contains affiliate CTAs. Do not hide or de-emphasize.
 */
export function AffiliateDisclosure({ className }: { className?: string }) {
  return (
    <aside
      role="note"
      className={cn(
        "rounded-md border border-border/60 bg-card/60 px-4 py-3 text-sm text-muted-foreground",
        className,
      )}
    >
      <strong className="font-semibold text-foreground">Divulgación de afiliados:</strong>{" "}
      JugadaMax puede recibir una comisión si te registras con un operador a través de nuestros
      enlaces. Esto no tiene costo adicional para ti y no condiciona nuestra evaluación editorial.{" "}
      <a href="/divulgacion-afiliados" className="font-medium text-primary underline underline-offset-2">
        Más información
      </a>
      .
    </aside>
  );
}
