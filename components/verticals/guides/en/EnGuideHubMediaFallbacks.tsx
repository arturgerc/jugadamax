import { OperatorLogo } from "@/components/brand/OperatorLogo";
import type { Casino } from "@/types/content";
import { cn } from "@/lib/utils";

const QUICK_START_TOPICS = ["Security", "Payments", "Licensing", "Terms"] as const;

const RESEARCH_CHIPS = ["Availability", "Payments", "Terms"] as const;

const OPERATOR_THEME: Record<
  string,
  { shell: string; chip: string; glow: string }
> = {
  stake: {
    shell:
      "bg-gradient-to-br from-[#14102a] via-[#121820] to-[#0A1931] border-violet-500/25",
    chip: "border-violet-400/30 bg-violet-500/10 text-violet-100",
    glow: "bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.18),transparent_55%)]",
  },
  bcgame: {
    shell:
      "bg-gradient-to-br from-[#0a1a18] via-[#101820] to-[#0A1931] border-emerald-500/25",
    chip: "border-emerald-400/30 bg-emerald-500/10 text-emerald-100",
    glow: "bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.16),transparent_55%)]",
  },
  xonbet: {
    shell:
      "bg-gradient-to-br from-[#071528] via-[#14101f] to-[#0A1931] border-cyan-500/25",
    chip: "border-cyan-400/30 bg-cyan-500/10 text-cyan-100",
    glow: "bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.16),transparent_55%)]",
  },
};

/**
 * Compact CSS visual for the quick-start / essential guide (no cover image).
 */
export function EnGuideQuickStartVisual({ className }: { className?: string }) {
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
          Quick start
        </span>
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
 * Operator-research media — three non-overlapping rows: badges, logo+name, chips.
 */
export function EnGuideOperatorResearchVisual({
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
        "relative grid h-36 w-full grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden border p-3 sm:h-40",
        theme.shell,
        className,
      )}
    >
      <div className={cn("pointer-events-none absolute inset-0", theme.glow)} />

      <div className="relative flex items-center justify-between gap-2">
        <span className="inline-flex rounded-full border border-white/15 bg-black/20 px-2 py-0.5 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          Research review
        </span>
        <span
          className={cn(
            "rounded-full border px-2 py-0.5 text-[0.58rem] font-semibold uppercase tracking-wide",
            theme.chip,
          )}
        >
          Operator
        </span>
      </div>

      <div className="relative flex min-h-0 flex-col items-center justify-center gap-2 py-2">
        <div className="flex h-12 w-full items-center justify-center sm:h-14">
          <OperatorLogo
            name={casino.name}
            logo={casino.logo}
            operatorId={casino.id}
            variant="default"
          />
        </div>
        <p className="text-center text-sm font-semibold leading-none text-foreground">
          {casino.name}
        </p>
      </div>

      <ul className="relative flex flex-wrap justify-center gap-1.5">
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
