import type { Review } from "@/types/content";

/**
 * Review records (User Story 2 / task T022).
 *
 * Authenticity (Constitution Principle IV/V): reviews are honest editorial
 * assessments authored by the JugadaMax editorial desk. The `rating` is an
 * author-attributed editorial opinion вЂ” never an aggregated user score, and it
 * is never encoded as AggregateRating/review-star schema. Pros AND cons are
 * balanced. No fabricated winners, payouts, or user comments.
 */
export const reviews: Review[] = [
  {
    id: "stake-review",
    casinoId: "stake",
    authorId: "redaccion-jugadamax",
    slug: "stake",
    title: "ReseГ±a de Stake: casino crypto para jugadores en MГ©xico",
    verdict:
      "Stake MГ©xico es una opciГіn sГіlida para quienes buscan casino crypto y apuestas deportivas desde el dominio local stake.mx. Recomendamos revisar disponibilidad, pagos y tГ©rminos vigentes antes de registrarte.",
    rating: 4.8,
    pros: [
      "Amplio catГЎlogo de juegos y proveedores.",
      "Soporte para varias criptomonedas (Bitcoin, Ethereum, USDT, Litecoin).",
      "Interfaz clara y experiencia de usuario cuidada.",
    ],
    cons: [
      "La disponibilidad, pagos y lГ­mites pueden variar segГєn el dominio local y las polГ­ticas del operador.",
      "Licencia y condiciones deben verificarse en stake.mx; no recomendamos dominios globales si tu regiГіn aparece restringida.",
      "Los tГ©rminos de bonos cambian con frecuencia y deben verificarse en el sitio oficial.",
    ],
    body:
      "En esta reseГ±a editorial evaluamos Stake para jugadores en MГ©xico segГєn nuestra metodologГ­a pГєblica: seguridad, mГ©todos de pago, licencias y experiencia de usuario. Nos enfocamos en el dominio local stake.mx, no en dominios globales que pueden mostrar restricciones regionales. Stake combina casino crypto y apuestas deportivas con soporte para mГєltiples criptomonedas. Como con cualquier operador, recomendamos verificar la disponibilidad, leer los tГ©rminos y condiciones vigentes y jugar de forma responsable. La informaciГіn de bonos y promociones debe confirmarse siempre en stake.mx.",
    paymentsSummary:
      "DepГіsitos y retiros en criptomonedas (Bitcoin, Ethereum, USDT, Litecoin) segГєn las condiciones publicadas en stake.mx. Verifica lГ­mites y tiempos en el sitio oficial.",
    trustSummary:
      "Licencia y disponibilidad informadas por el operador para el dominio local de MГ©xico (pendiente de verificaciГіn editorial). Revisa las condiciones vigentes en stake.mx antes de registrarte.",
    publishedAt: "2026-07-01",
    updatedAt: "2026-07-01",
    locale: "es-MX",
  },
  {
    id: "bitcasino-review",
    casinoId: "bitcasino",
    authorId: "redaccion-jugadamax",
    slug: "bitcasino",
    title: "ReseГ±a de Bitcasino.io: casino crypto con Bitcoin, USDT y juegos en vivo",
    verdict:
      "Bitcasino.io es una opciГіn crypto relevante para jugadores de MГ©xico y LATAM que buscan pagos con criptomonedas, juegos en vivo, slots y una experiencia internacional. No es un operador con licencia mexicana SEGOB, por lo que JugadaMax recomienda revisar disponibilidad regional, requisitos de verificaciГіn, lГ­mites, comisiones y tГ©rminos antes de registrarse.",
    rating: 4.4,
    pros: [
      "Marca crypto con trayectoria larga dentro del segmento de casinos con Bitcoin.",
      "CatГЎlogo amplio con slots, juegos en vivo, blackjack, ruleta, baccarat, game shows y juegos instantГЎneos.",
      "Enfoque claro en pagos con criptomonedas como Bitcoin, Ethereum, USDT y Litecoin.",
      "Licencia informada por el operador bajo CGA / CuraГ§ao y polГ­ticas publicadas de juego responsable, AML y KYC.",
    ],
    cons: [
      "No es un casino con licencia local SEGOB en MГ©xico; funciona como operador internacional/offshore.",
      "La disponibilidad, verificaciГіn, mГ©todos de pago, lГ­mites y tiempos de retiro pueden variar segГєn regiГіn, cuenta y tГ©rminos vigentes.",
      "Los bonos y promociones pueden cambiar; siempre deben verificarse directamente en el sitio oficial.",
      "No es la mejor opciГіn para usuarios que buscan pagos fiat locales como OXXO o SPEI.",
    ],
    body:
      "Bitcasino.io es uno de los nombres mГЎs reconocidos dentro del segmento de casinos crypto internacionales. Para JugadaMax, su principal valor estГЎ en que no intenta parecer un casino fiat tradicional: su propuesta gira alrededor de Bitcoin, stablecoins y otros mГ©todos crypto, con una experiencia pensada para usuarios que ya entienden wallets, redes, comisiones y volatilidad.\n\nPara jugadores de MГ©xico y LATAM, Bitcasino.io puede encajar como una alternativa crypto frente a operadores locales de peso mexicano. La ventaja está en ofrecer una experiencia orientada a pagos digitales, catГЎlogo internacional y acceso a juegos de casino en vivo, slots, blackjack, ruleta, baccarat, game shows, jackpots y formatos rГЎpidos como crash o instant win. Aun asГ­, cada jugador debe revisar si el sitio estГЎ disponible desde su paГ­s y bajo quГ© condiciones.\n\nEl punto fuerte de Bitcasino.io es su ecosistema de juegos. El sitio organiza la oferta en categorГ­as como Live Games, Slots, Bitcasino Exclusives, Jackpots, Crash & Instant Win, Table Games y Virtual Sports. Eso lo hace mГЎs completo que muchos casinos crypto pequeГ±os que solo ofrecen slots bГЎsicos o una selecciГіn limitada de proveedores. Para usuarios jГіvenes de LATAM que buscan una experiencia mГЎs digital, esta variedad puede ser atractiva.\n\nEn pagos, el enfoque crypto es claro. JugadaMax lo considera especialmente relevante para usuarios que buscan Bitcoin, Ethereum, USDT o Litecoin en lugar de depГіsitos locales con tarjeta, OXXO o SPEI. Sin embargo, los pagos crypto no eliminan la necesidad de leer tГ©rminos: las redes disponibles, comisiones, mГ­nimos, tiempos de retiro y posibles revisiones de cuenta pueden cambiar segГєn el operador, la moneda y el estado de la cuenta.\n\nEn seguridad y confianza, Bitcasino.io informa que opera bajo Moon Technologies B.V. y licencia CGA / CuraГ§ao. Eso no equivale a una licencia mexicana SEGOB. Por eso nuestra lectura editorial es equilibrada: Bitcasino.io puede ser una opciГіn fuerte dentro del segmento crypto internacional, pero no debe presentarse como casino regulado localmente en MГ©xico. Antes de jugar, recomendamos revisar tГ©rminos, polГ­ticas de KYC/AML, juego responsable, lГ­mites de retiro y disponibilidad regional.",
    paymentsSummary:
      "Bitcasino.io estГЎ orientado a pagos con criptomonedas. JugadaMax destaca Bitcoin, Ethereum, USDT y Litecoin como mГ©todos relevantes para usuarios crypto, pero recomienda confirmar redes disponibles, mГ­nimos, comisiones y tiempos de retiro en el sitio oficial antes de depositar.",
    trustSummary:
      "Bitcasino.io informa operaciГіn bajo Moon Technologies B.V. y licencia CGA / CuraГ§ao. No debe presentarse como operador con licencia mexicana SEGOB. La disponibilidad, verificaciГіn, lГ­mites, bonos y condiciones deben revisarse directamente en el sitio oficial.",
    publishedAt: "2026-07-03",
    updatedAt: "2026-07-03",
    locale: "es-MX",
  },
  {
    id: "ltccasino-review",
    casinoId: "ltccasino",
    authorId: "redaccion-jugadamax",
    slug: "ltccasino",
    title: "Reseña de LTC Casino: casino crypto con Litecoin y pagos digitales",
    verdict:
      "LTC Casino es una opción crypto de nicho para jugadores de México y LATAM que priorizan Litecoin y pagos con criptomonedas. JugadaMax lo presenta como candidato internacional/offshore; revisa disponibilidad regional, verificación, límites, comisiones y términos antes de registrarte.",
    rating: 4.1,
    pros: [
      "Enfoque claro en Litecoin junto con Bitcoin, Ethereum y USDT.",
      "Propuesta crypto-first para usuarios que ya usan wallets y redes digitales.",
      "Catálogo orientado a casino crypto con experiencia sencilla para depósitos en monedas digitales.",
    ],
    cons: [
      "No es un operador con licencia local SEGOB en México.",
      "Licencia, disponibilidad, verificación, límites y tiempos de retiro deben revisarse en el sitio oficial.",
      "No es la mejor opción para quienes buscan pagos fiat locales como OXXO o SPEI.",
      "Los bonos y promociones pueden cambiar; verifica siempre la oferta vigente.",
    ],
    body:
      "LTC Casino es un casino online orientado al segmento crypto, con Litecoin como parte central de su identidad de marca. A diferencia de operadores fiat tradicionales, su propuesta gira alrededor de pagos con criptomonedas, una experiencia de registro sencilla y una interfaz pensada para usuarios que ya están familiarizados con wallets, exchanges, redes blockchain y comisiones de red.\n\nPara jugadores de México y LATAM, LTC Casino puede funcionar como una alternativa crypto/offshore frente a casinos locales que operan con pesos mexicanos. JugadaMax no lo presenta como un operador regulado localmente en México, sino como una opción internacional para usuarios que priorizan pagos digitales, velocidad operativa y una biblioteca de juegos enfocada en slots, casino en vivo, juegos de mesa, formatos instantáneos y títulos provably fair. Antes de registrarse, cada usuario debe verificar si el sitio está disponible desde su país y bajo qué condiciones.\n\nUno de los puntos más fuertes de LTC Casino es su cashier crypto-only. El sitio informa soporte para Litecoin, Bitcoin, Ethereum, Dogecoin, XRP, USDT, USDC, TRX, BNB, Solana y otras monedas. Esto puede ser atractivo para usuarios que prefieren mover fondos desde una wallet personal en lugar de usar tarjeta, banco o métodos locales. Aun así, los pagos crypto dependen de la red, la moneda, los mínimos, comisiones, límites y revisiones internas del operador.\n\nEn cuanto a juegos, LTC Casino informa una oferta amplia con slots, blackjack, ruleta, baccarat, casino en vivo, juegos instantáneos y formatos provably fair. Para usuarios crypto de LATAM, esta combinación puede ser interesante porque mezcla la experiencia clásica de casino con pagos digitales y sesiones rápidas desde navegador móvil o desktop. El sitio también menciona promociones como carreras de slots y recompensas para jugadores activos, pero JugadaMax recomienda revisar siempre los términos vigentes antes de participar.\n\nLa experiencia móvil también es importante. LTC Casino funciona desde navegador, por lo que no depende necesariamente de una app pesada para empezar a jugar. Esto encaja con usuarios de LATAM que suelen alternar entre móvil, desktop, wallet y exchange. Aun así, recomendamos comprobar compatibilidad, límites y condiciones desde el sitio oficial antes de depositar.\n\nSobre privacidad y verificación, el operador se posiciona como una opción de registro sencillo y experiencia orientada a usuarios crypto. JugadaMax lo interpreta con cautela: pueden existir controles, límites, revisiones de riesgo o solicitudes de información según actividad de la cuenta, región, retiros o términos internos. Por eso no recomendamos leer la privacidad como una garantía absoluta.\n\nEn seguridad y confianza, LTC Casino informa operar bajo licencia Curaçao eGaming No. 8048/JAZ, además de cifrado SSL, herramientas de seguridad de cuenta y recursos de juego responsable. Esto no equivale a una licencia mexicana SEGOB. Nuestra evaluación editorial lo posiciona como candidato crypto internacional, no como casino regulado localmente en México.",
    paymentsSummary:
      "LTC Casino destaca Litecoin, Bitcoin, Ethereum y USDT. Confirma redes disponibles, mínimos, comisiones y tiempos de retiro en el sitio oficial antes de depositar.",
    trustSummary:
      "Licencia no verificada por JugadaMax. La disponibilidad, verificación, límites, bonos y condiciones deben revisarse en el sitio oficial; no equivale a licencia mexicana SEGOB.",
    publishedAt: "2026-07-03",
    updatedAt: "2026-07-03",
    locale: "es-MX",
    relatedLinks: [
      {
        label: "LTC Casino",
        url: "https://ltccasino.com/",
        kind: "website",
        subtitle: "Sitio relacionado",
      },
      {
        label: "TTR Blog",
        url: "https://ttrblog.io/",
        kind: "blog",
        subtitle: "Blog / noticias",
      },
      {
        label: "Kick: LTCCASINO-COM",
        url: "https://kick.com/ltccasino-com",
        kind: "streaming",
        subtitle: "Canal de streaming",
      },
    ],
  },
];
