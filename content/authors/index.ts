import type { Author } from "@/types/content";

/**
 * Author records for E-E-A-T attribution (FR-016).
 *
 * LinkedIn URLs are identity/distribution channels only — never factual sources
 * for casino, payment, bonus, licence, or regulatory claims.
 *
 * Display order: human author first, then organizational editorial entity.
 */
export const authors: Author[] = [
  {
    id: "arturs-stoliks",
    slug: "arturs-stoliks",
    name: "Arturs Stoliks",
    kind: "person",
    role: "Fundador y editor de JugadaMax",
    credentials:
      "Fundador de JugadaMax. Supervisa contenidos editoriales sobre casinos online, apuestas, métodos de pago, juego responsable y tendencias crypto para México y LATAM.",
    bio: "Arturs Stoliks coordina JugadaMax como proyecto editorial independiente sobre casinos online, apuestas deportivas y pagos digitales. Su enfoque es publicar guías claras, reseñas cautelosas y contenido responsable para jugadores mayores de 18 años.",
    specialties: [
      "Casinos online",
      "Pagos crypto",
      "Apuestas",
      "Juego responsable",
      "México y LATAM",
    ],
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/arturs-stoliks-953555280/",
      },
    ],
  },
  {
    id: "redaccion-jugadamax",
    slug: "redaccion",
    name: "Redacción JugadaMax",
    kind: "organization",
    role: "Equipo Editorial",
    credentials:
      "Equipo editorial de JugadaMax especializado en casinos crypto, casinos fiat y apuestas deportivas en México.",
    bio: "La Redacción de JugadaMax evalúa operadores con una metodología pública, priorizando seguridad, pagos, licencias y experiencia de usuario.",
    specialties: [
      "Casinos crypto",
      "Casinos fiat",
      "Bonos y términos",
      "Juego responsable",
    ],
  },
];
