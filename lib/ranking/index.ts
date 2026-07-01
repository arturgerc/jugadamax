/**
 * Ranking / sort helpers.
 *
 * Ordering is deterministic and driven entirely by each casino's stored
 * `rankByVertical` value (research.md §3, FR-009/FR-011). Casinos without a rank
 * for the given vertical are placed last, then ordered by name for stability.
 */

import type { Casino, Vertical } from "@/types/content";

const UNRANKED = Number.MAX_SAFE_INTEGER;

/** Returns casinos that belong to `vertical`, ordered by their rank for it. */
export function sortByVerticalRank(casinos: Casino[], vertical: Vertical): Casino[] {
  return casinos
    .filter((c) => c.verticals.includes(vertical))
    .slice()
    .sort((a, b) => {
      const ra = a.rankByVertical[vertical] ?? UNRANKED;
      const rb = b.rankByVertical[vertical] ?? UNRANKED;
      if (ra !== rb) return ra - rb;
      return a.name.localeCompare(b.name, "es-MX");
    });
}
