import type { Author } from "@/types/content";

/**
 * Author records for E-E-A-T attribution (FR-016).
 *
 * V1 seeds the JugadaMax editorial team as an organizational author. This is a
 * real, honest attribution (the site's editorial desk) — not a fabricated
 * individual with invented credentials (Constitution Principle IV/V).
 */
export const authors: Author[] = [
  {
    id: "redaccion-jugadamax",
    slug: "redaccion",
    name: "Redacción JugadaMax",
    role: "Equipo Editorial",
    credentials:
      "Equipo editorial de JugadaMax especializado en casinos crypto, casinos fiat y apuestas deportivas en México.",
    bio: "La Redacción de JugadaMax evalúa operadores con una metodología pública, priorizando seguridad, pagos, licencias y experiencia de usuario.",
  },
];
