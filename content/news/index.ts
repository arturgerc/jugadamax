import type { Article } from "@/types/content";

/**
 * News articles (Article with type "news").
 *
 * Authenticity: honest, verifiable, author-attributed editorial notes only.
 * No fabricated events, statistics, quotes, laws, or urgency.
 * Bodies use blank-line-separated paragraphs.
 */
export const news: Article[] = [
  {
    id: "noticia-regulacion-mexico-mundial-2026",
    slug: "regulacion-juegos-mexico-sigue-pendiente-ante-mundial-2026",
    type: "news",
    title:
      "Antes del Mundial 2026, la industria advirtió que la reforma del juego en México seguía pendiente",
    summary:
      "En abril de 2026, iGaming Business informó que representantes de la industria pedían modernizar el marco federal del juego en México y consideraban poco probable una reforma completa antes del inicio del Mundial. Hechos del reporte citados frente a comentario editorial de JugadaMax (23 julio 2026).",
    body: [
      "En abril de 2026, iGaming Business informó que representantes de la industria presionaban para modernizar el marco regulatorio del juego en México antes del Mundial. El reporte —publicado el 20 de abril de 2026— consideraba poco probable que una reforma completa estuviera lista antes del inicio del torneo en junio.",
      "En esa misma cobertura, Miguel Ángel Ochoa Sánchez, presidente de la Asociación Mexicana de Permisionarios, Operadores y Proveedores de la Industria del Entretenimiento y Juego de Apuesta (AIEJA), decía entonces que el mercado estaba «insuficientemente regulado», en especial en el entorno online, y que el sector seguía a la espera de una versión final del proyecto de ley impulsado tras el anuncio público de la presidenta Sheinbaum en diciembre de 2024 sobre la necesidad de una nueva Ley Federal de Juegos y Sorteos.",
      "El juicio sobre plazos y probabilidad de reforma pertenece al reporte de abril de iGaming Business; JugadaMax no inventa fechas de aprobación legislativa ni convierte aquella predicción previa al torneo en un hecho confirmado posterior al Mundial. Esta nota editorial se publica el 23 de julio de 2026, tras el cierre del FIFA World Cup 2026 (11 de junio–19 de julio de 2026), y retoma lo que la fuente advirtió antes del campeonato.",
      "Para lectores en México, el punto práctico sigue siendo no anticipar una ley inexistente, sino entender que disponibilidad, permisos, impuestos y condiciones de operadores pueden cambiar según jurisdicción y política pública. Cualquier registro o depósito debe hacerse solo en sitios cuya legalidad y términos puedas verificar por tu cuenta.",
    ].join("\n\n"),
    authorId: "arturs-stoliks",
    tags: ["regulacion", "mexico", "mundial-2026"],
    publishedAt: "2026-07-23",
    updatedAt: "2026-07-23",
    locale: "es-MX",
    newsKind: "noticia-opinion",
    newsCategory: "regulacion",
    featured: true,
    factLabel: "Hechos reportados",
    opinionLabel: "Comentario editorial",
    keyPoints: [
      "El reporte de iGaming Business del 20 de abril de 2026 advirtió presión de la industria para modernizar la regulación de juegos en México antes del Mundial.",
      "En ese momento, AIEJA describió el mercado online como insuficientemente regulado y a la espera del texto final del proyecto.",
      "La misma fuente consideró poco probable un marco actualizado listo antes del inicio del torneo en junio de 2026.",
      "JugadaMax no afirma el estado legislativo posterior al Mundial ni inventa plazos oficiales de Congreso; esta nota se publica el 23 de julio de 2026.",
    ],
    sources: [
      {
        label:
          "Pressure mounting for Mexico to modernise its gambling regulation",
        url: "https://igamingbusiness.com/legal-compliance/regulation/industry-pressure-mounting-mexico-modernise-gambling-regulation/",
        publisher: "iGaming Business",
        note: "Publicado el 20 de abril de 2026. Cobertura previa al Mundial sobre reforma pendiente y declaraciones atribuidas a AIEJA.",
      },
      {
        label: "FIFA World Cup 2026™ — Canadá, México y Estados Unidos",
        url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026",
        publisher: "FIFA",
        note: "Confirmación del torneo conjunto (11 junio–19 julio 2026); no implica marco regulatorio mexicano nuevo.",
      },
    ],
    relatedLinks: [
      { label: "Casas de apuestas en México", href: "/apuestas" },
      { label: "Cómo evaluamos operadores", href: "/como-evaluamos" },
      { label: "Juego responsable", href: "/juego-responsable" },
    ],
    authorComment: {
      heading: "Comentario de Arturs Stoliks",
      body: "Mi lectura editorial es cautelosa: la cobertura de abril de 2026 documentó una advertencia de la industria antes del Mundial, no un veredicto posterior al torneo. Mientras no exista un marco claro y vigente verificable, el jugador en México debería priorizar términos, pagos y riesgos, no promesas de «mercado moderno». Un Mundial puede aumentar la atención sobre apuestas, pero no convierte automáticamente a un operador en seguro ni en autorizado. En JugadaMax seguiremos etiquetando opinión frente a hechos y actualizando contenido solo cuando haya fuentes comprobables.",
    },
    coverImage: {
      src: "/editorial/news/regulacion-juegos-mexico-mundial-2026.png",
      alt: "Regulación de juegos, apuestas deportivas y Mundial 2026 en México",
      width: 1672,
      height: 941,
    },
  },
  {
    id: "noticia-como-leer-cambios-bonos",
    slug: "como-leer-cambios-de-bonos-y-promociones-sin-caer-en-urgencia",
    type: "news",
    title:
      "Cómo leer cambios de bonos y promociones sin caer en urgencia artificial",
    summary:
      "Análisis editorial para distinguir un cambio real de términos frente a marketing de escasez. Incluye criterios de lectura y enlaces a la metodología y divulgación de afiliados de JugadaMax.",
    body: [
      "En medios de iGaming y en directorios de bonos es frecuente ver lenguaje de «última oportunidad», contadores o cifras llamativas. En JugadaMax tratamos esos mensajes con reserva: un cambio de promoción solo es útil si puedes verificar el texto vigente en el operador y entender wagering, elegibilidad y límites.",
      "Nuestra metodología pública explica que los rankings y reseñas son evaluación editorial y pueden estar influenciados por acuerdos comerciales. Por eso la divulgación de afiliados no es un detalle menor: si hay enlace de registro o código, debe quedar claro que puede existir compensación.",
      "Cuando publicamos una nota sobre bonos o actualizamos el directorio de /bonos, el objetivo no es fabricar urgencia. Si una oferta aparece como activa, variable o pendiente de verificación, esa etiqueta refleja el estado editorial del registro, no una garantía del operador.",
      "Si ves un anuncio de bono —en JugadaMax o en cualquier otro sitio— conviene contrastar: (1) el texto en el operador, (2) requisitos de depósito y juego, (3) restricciones geográficas o de cuenta, y (4) si el mensaje mezcla hecho comprobable con opinión comercial. Ante duda, no deposites.",
    ].join("\n\n"),
    authorId: "redaccion-jugadamax",
    tags: ["bonos", "analisis", "afiliados"],
    publishedAt: "2026-07-23",
    updatedAt: "2026-07-23",
    locale: "es-MX",
    newsKind: "analisis",
    newsCategory: "bonos",
    featured: true,
    keyPoints: [
      "Los cambios de bono deben confirmarse en el operador; el marketing de urgencia no es evidencia.",
      "JugadaMax separa evaluación editorial de mensajes comerciales y divulga afiliación cuando aplica.",
      "Las etiquetas del directorio de bonos son estado editorial, no garantía de pago o disponibilidad.",
      "Antes de depositar, revisa wagering, límites, elegibilidad y restricciones publicadas.",
    ],
    sources: [
      {
        label: "Cómo evaluamos los casinos y casas de apuestas",
        url: "https://jugadamax.com/como-evaluamos",
        publisher: "JugadaMax",
        note: "Metodología editorial pública del sitio.",
      },
      {
        label: "Divulgación de afiliados",
        url: "https://jugadamax.com/divulgacion-afiliados",
        publisher: "JugadaMax",
        note: "Política de transparencia sobre enlaces comerciales.",
      },
      {
        label: "Juego responsable",
        url: "https://jugadamax.com/juego-responsable",
        publisher: "JugadaMax",
        note: "Recursos y límites de edad (+18).",
      },
    ],
    relatedLinks: [
      { label: "Directorio de bonos", href: "/bonos" },
      { label: "Metodología", href: "/como-evaluamos" },
      { label: "Divulgación de afiliados", href: "/divulgacion-afiliados" },
      { label: "Guías", href: "/guias" },
    ],
    authorComment: {
      heading: "Nota de la Redacción",
      body: "Este análisis no describe un bono concreto ni inventa montos, fechas de caducidad o tasas de conversión. Si en el futuro reportamos un cambio de promoción de un operador, citaremos la fuente y evitaremos contadores o escasez fabricada.",
    },
    coverImage: {
      src: "/editorial/news/bonus-promotions-analysis-2026.png",
      alt: "Análisis editorial de bonos, promociones, términos y restricciones",
      width: 1672,
      height: 941,
    },
  },
  {
    id: "noticia-metodologia-publicada",
    slug: "jugadamax-publica-su-metodologia-de-evaluacion",
    type: "news",
    title: "JugadaMax publica su metodología de evaluación",
    summary:
      "Ahora puedes consultar los criterios que usamos para ordenar casinos y casas de apuestas en México.",
    body: [
      "JugadaMax publicó su página de metodología, donde explicamos cómo evaluamos y ordenamos a los operadores que aparecen en el sitio.",
      "Nuestros rankings reflejan una evaluación editorial y pueden estar influenciados comercialmente mediante acuerdos de afiliación; por eso divulgamos esta información de forma abierta.",
      "Puedes consultar los criterios completos en la sección Cómo evaluamos. Seguiremos actualizando nuestra cobertura de casinos cripto, casinos fiat y apuestas deportivas en México.",
    ].join("\n\n"),
    authorId: "redaccion-jugadamax",
    tags: ["anuncio"],
    publishedAt: "2026-07-01",
    updatedAt: "2026-07-01",
    locale: "es-MX",
    newsKind: "anuncio",
    newsCategory: "jugadamax",
    featured: false,
    keyPoints: [
      "La metodología editorial de JugadaMax es pública en /como-evaluamos.",
      "Los rankings son evaluación editorial y pueden tener influencia comercial divulgada.",
      "La cobertura continúa en cripto, fiat y apuestas para México.",
    ],
    relatedLinks: [
      { label: "Cómo evaluamos", href: "/como-evaluamos" },
      { label: "Divulgación de afiliados", href: "/divulgacion-afiliados" },
      { label: "Reseñas", href: "/reviews" },
    ],
    coverImage: {
      src: "/editorial/news/metodologia-evaluacion-jugadamax.png",
      alt: "Metodología editorial de evaluación y comparación de JugadaMax",
      width: 1672,
      height: 941,
    },
  },
];
