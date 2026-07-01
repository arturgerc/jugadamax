import { cn } from "@/lib/utils";

const sizes = {
  sm: { height: 22, mark: 18, fontSize: 15, gap: 6 },
  default: { height: 28, mark: 22, fontSize: 18, gap: 8 },
  lg: { height: 36, mark: 28, fontSize: 24, gap: 10 },
} as const;

export type LogoSize = keyof typeof sizes;

/**
 * JugadaMax wordmark — inline SVG, no external assets.
 * "Jugada" in warm off-white; "Max" in gold; subtle J mark.
 */
export function Logo({
  className,
  size = "default",
  decorative = false,
}: {
  className?: string;
  size?: LogoSize;
  decorative?: boolean;
}) {
  const s = sizes[size];
  const width = 148 + (size === "lg" ? 24 : size === "sm" ? -12 : 0);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${s.height}`}
      height={s.height}
      width={width}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : "JugadaMax"}
      className={cn("shrink-0", className)}
    >
      {/* Mark: dark tile + gold J */}
      <rect
        x="0"
        y={(s.height - s.mark) / 2}
        width={s.mark}
        height={s.mark}
        rx={s.mark * 0.22}
        fill="#16233f"
        stroke="#ffb800"
        strokeWidth="1.25"
      />
      <text
        x={s.mark / 2}
        y={s.height / 2 + s.fontSize * 0.12}
        textAnchor="middle"
        fill="#ffb800"
        fontSize={s.fontSize * 0.72}
        fontWeight="700"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        J
      </text>
      {/* Wordmark */}
      <text
        x={s.mark + s.gap}
        y={s.height / 2 + s.fontSize * 0.12}
        fontSize={s.fontSize}
        fontWeight="700"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="-0.02em"
      >
        <tspan fill="#f5f5f0">Jugada</tspan>
        <tspan fill="#ffb800">Max</tspan>
      </text>
    </svg>
  );
}

/** Wordmark paths/colors for static SVG exports (favicon, OG). */
export const logoBrand = {
  navy: "#0a1931",
  graphite: "#111417",
  gold: "#ffb800",
  text: "#f5f5f0",
  muted: "#b8b8b0",
  elevated: "#16233f",
} as const;
