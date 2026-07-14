import {
  SPORTSBETIO_BETTING_AFFILIATE_URL,
  SPORTSBETIO_WORLD_CUP_TOURNAMENT_URL,
} from "@/lib/affiliate/constants";
import { isSportsbetWorldCupCampaignActive } from "@/lib/affiliate/sportsbetio-campaign";
import { cn, focusRing } from "@/lib/utils";

const AFFILIATE_REL = "sponsored nofollow noopener noreferrer";

/** Compact temporary World Cup campaign strip for /apuestas — server-rendered expiry. */
export function SportsbetWorldCupStrip() {
  const isActive = isSportsbetWorldCupCampaignActive();

  return (
    <aside
      aria-labelledby="sportsbetio-wc-strip-heading"
      className="rounded-xl border border-[#36B958]/25 bg-gradient-to-r from-[#11161C] via-[#171E25] to-[#202932] px-4 py-3 sm:px-5 sm:py-4"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 space-y-1">
          <h3
            id="sportsbetio-wc-strip-heading"
            className="text-sm font-semibold text-foreground sm:text-base"
          >
            {isActive
              ? "$777,777 World Cup Tournament"
              : "$777,777 World Cup Tournament — finalizado"}
          </h3>
          <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
            {isActive ? (
              <>
                Leaderboard temporal con puntos por apuestas elegibles. La campaña suministrada
                finaliza el 19 de julio de 2026 a las 23:00 UTC.{" "}
                <span className="font-medium text-[#65E782]">Activa hasta el 19 de julio de 2026</span>
              </>
            ) : (
              <>
                Campaña histórica suministrada por el partner. Consulta las promociones vigentes en
                Sportsbet.io.{" "}
                <span className="font-medium text-muted-foreground">Campaña finalizada</span>
              </>
            )}
          </p>
        </div>
        <div className="shrink-0">
          {isActive ? (
            <a
              href={SPORTSBETIO_WORLD_CUP_TOURNAMENT_URL}
              target="_blank"
              rel={AFFILIATE_REL}
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md bg-[#45D067] px-4 py-2.5 text-sm font-semibold text-[#11161C] transition-colors hover:bg-[#65E782]",
                focusRing,
              )}
            >
              Ver torneo World Cup
            </a>
          ) : (
            <a
              href={SPORTSBETIO_BETTING_AFFILIATE_URL}
              target="_blank"
              rel={AFFILIATE_REL}
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md border border-[#36B958]/40 bg-[#171E25] px-4 py-2.5 text-sm font-semibold text-[#65E782] transition-colors hover:bg-[#36B958]/10",
                focusRing,
              )}
            >
              Ver apuestas Sportsbet.io
            </a>
          )}
        </div>
      </div>
    </aside>
  );
}
