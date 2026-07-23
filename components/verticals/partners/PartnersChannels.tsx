import {
  PARTNERS_COPY,
  type ChannelStatus,
  type PartnersLocale,
} from "@/components/verticals/partners/partners-config";
import { cn, focusRing } from "@/lib/utils";

function statusMeta(
  status: ChannelStatus,
  copy: (typeof PARTNERS_COPY)["es"],
): { label: string; className: string } {
  if (status === "active") {
    return {
      label: copy.statusActive,
      className: "border-emerald-400/35 bg-emerald-500/10 text-emerald-200",
    };
  }
  if (status === "launching") {
    return {
      label: copy.statusLaunching,
      className: "border-sky-400/35 bg-sky-500/10 text-sky-200",
    };
  }
  return {
    label: copy.statusBuilding,
    className: "border-amber-400/35 bg-amber-500/10 text-amber-200",
  };
}

export function PartnersChannels({ locale }: { locale: PartnersLocale }) {
  const copy = PARTNERS_COPY[locale];

  return (
    <section
      aria-labelledby="partners-channels-heading"
      className="mb-8 sm:mb-10"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="partners-channels-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          {copy.channelsTitle}
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          {copy.channelsBody}
        </p>
      </div>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {copy.channels.map((channel) => {
          const status = statusMeta(channel.status, copy);
          const inner = (
            <>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-sm font-bold text-foreground sm:text-base">
                  {channel.label}
                </h3>
                <span
                  className={cn(
                    "rounded-full border px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide",
                    status.className,
                  )}
                >
                  {status.label}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{channel.detail}</p>
            </>
          );

          return (
            <li key={channel.label}>
              {channel.href ? (
                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    channel.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={cn(
                    "block h-full rounded-xl border border-white/10 bg-[#111417]/65 p-4 transition-colors hover:border-primary/35",
                    focusRing,
                  )}
                >
                  {inner}
                </a>
              ) : (
                <div className="h-full rounded-xl border border-white/10 bg-[#111417]/65 p-4">
                  {inner}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
