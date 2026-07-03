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
  {
    id: "arturs-stoliks",
    slug: "arturs-stoliks",
    name: "Arturs Stoliks",
    role: "Fundador y editor de JugadaMax",
    credentials:
      "Fundador de JugadaMax. Supervisa contenidos editoriales sobre casinos online, apuestas, métodos de pago, juego responsable y tendencias crypto para México y LATAM.",
    bio: "Arturs Stoliks coordina JugadaMax como proyecto editorial independiente sobre casinos online, apuestas deportivas y pagos digitales. Su enfoque es publicar guías claras, reseñas cautelosas y contenido responsable para jugadores mayores de 18 años.",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/arturs-stoliks-953555280",
      },
    ],
  },
];
