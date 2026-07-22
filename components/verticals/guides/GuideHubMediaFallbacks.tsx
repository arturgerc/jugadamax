import { OperatorLogo } from "@/components/brand/OperatorLogo";
import type { Casino } from "@/types/content";
import { cn } from "@/lib/utils";

const QUICK_START_TOPICS = ["Seguridad", "Pagos", "Licencias", "Términos"] as const;

const RESEARCH_CHIPS = ["Disponibilidad", "Pagos", "Términos"] as const;

const OPERATOR_THEME: Record<
  string,
  { shell: string; chip: string; glow: string }
> = {
  roobet: {
    shell:
      "bg-gradient-to-br from-[#14102a] via-[#121820] to-[#0A1931] border-violet-500/25",
    chip: "border-violet-400/30 bg-violet-500/10 text-violet-100",
    glow: "bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.18),transparent_55%)]",
  },
  gamdom: {
    shell:
      "bg-gradient-to-br from-[#0a1a18] via-[#101820] to-[#0A1931] border-emerald-500/25",
    chip: "border-emerald-400/30 bg-emerald-500/10 text-emerald-100",
    glow: "bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.16),transparent_55%)]",
  },
  "500-casino": {
    shell:
      "bg-gradient-to-br from-[#1a1018] via-[#15121a] to-[#0A1931] border-pink-500/25",
    chip: "border-pink-400/30 bg-pink-500/10 text-pink-100",
    glow: "bg-[radial-gradient(ellipse_at_top_right,rgba(236,72,153,0.16),transparent_55%)]",
  },
};

/**
 * Compact CSS visual for the quick-start / essential guide (no cover image).
 */
export function GuideQuickStartVisual({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative flex h-28 w-full flex-col justify-between overflow-hidden border border-primary/25 bg-gradient-to-br from-[#1a160f] via-[#121820] to-[#0A1931] p-3 sm:h-36 sm:p-3.5",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,184,0,0.14),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.1),transparent_55%)]" />

      <div className="relative flex items-start justify-between gap-2">
        <span className="rounded-full border border-primary/35 bg-primary/10 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-primary">
          Introducción rápida
        </span>
        {/* CSS shield mark */}
        <span className="relative mt-0.5 inline-flex size-8 shrink-0 items-center justify-center">
          <span className="absolute inset-0 rounded-md border border-primary/40 bg-primary/10 [clip-path:polygon(50%_0%,100%_22%,100%_68%,50%_100%,0%_68%,0%_22%)]" />
          <span className="relative text-[0.55rem] font-bold text-primary">JM</span>
        </span>
      </div>

      <ul className="relative grid grid-cols-2 gap-1.5">
        {QUICK_START_TOPICS.map((topic) => (
          <li
            key={topic}
            className="flex items-center gap-1.5 rounded-md border border-white/10 bg-[#0A1931]/55 px-2 py-1 text-[0.7rem] font-medium text-muted-foreground"
          >
            <span className="inline-block size-1.5 shrink-0 rounded-full bg-cyan-300/80 ring-2 ring-cyan-400/25" />
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Compact operator-research visual — logo/monogram + research topic chips.
 */
export function GuideOperatorResearchVisual({
  casino,
  className,
}: {
  casino: Casino;
  className?: string;
}) {
  const theme = OPERATOR_THEME[casino.id] ?? {
    shell:
      "bg-gradient-to-br from-[#121820] via-[#111417] to-[#0A1931] border-sky-500/20",
    chip: "border-sky-400/30 bg-sky-500/10 text-sky-100",
    glow: "bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.12),transparent_55%)]",
  };

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative flex h-28 w-full flex-col justify-between overflow-hidden border p-3 sm:h-36 sm:p-3.5",
        theme.shell,
        className,
      )}
    >
      <div className={cn("pointer-events-none absolute inset-0", theme.glow)} />

      <div className="relative flex items-start justify-between gap-2">
        <div className="min-w-0 space-y-1">
          <span className="inline-flex rounded-full border border-white/15 bg-black/20 px-2 py-0.5 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Guía de investigación
          </span>
          <p className="truncate text-sm font-bold text-foreground">{casino.name}</p>
        </div>
        <OperatorLogo
          name={casino.name}
          logo={casino.logo}
          operatorId={casino.id}
          variant="compact-row"
        />
      </div>

      <ul className="relative flex flex-wrap gap-1">
        {RESEARCH_CHIPS.map((chip) => (
          <li
            key={chip}
            className={cn(
              "rounded-full border px-2 py-0.5 text-[0.65rem] font-medium",
              theme.chip,
            )}
          >
            {chip}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Generic compact category fallback when no cover and no operator mapping. */
export function GuideGenericFallbackVisual({
  label,
  accentClass,
  fallbackClass,
  className,
}: {
  label: string;
  accentClass: string;
  fallbackClass: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative flex h-28 w-full flex-col justify-between overflow-hidden border p-3 sm:h-36",
        fallbackClass,
        className,
      )}
    >
      <span
        className={cn(
          "inline-flex w-fit rounded-full border px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide",
          accentClass,
        )}
      >
        {label}
      </span>
      <div className="space-y-1.5">
        <div className="h-px w-2/3 bg-gradient-to-r from-white/30 to-transparent" />
        <div className="h-px w-1/2 bg-gradient-to-r from-white/15 to-transparent" />
        <div className="h-px w-1/3 bg-gradient-to-r from-white/10 to-transparent" />
      </div>
    </div>
  );
}
