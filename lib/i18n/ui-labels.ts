/** UI copy locale for shared ranking/review components. */
export type UiLocale = "es" | "en";

export function featuredBonusLabel(locale: UiLocale): string {
  return locale === "en" ? "Featured bonus" : "Bono destacado";
}

export function licenseReportedPrefix(locale: UiLocale): string {
  return locale === "en"
    ? "License reported by operator:"
    : "Licencia informada por el operador:";
}

export function licenseBadgeLabel(locale: UiLocale, name: string): string {
  return locale === "en" ? `License: ${name}` : `Licencia: ${name}`;
}

export function comparisonTableLabels(locale: UiLocale) {
  if (locale === "en") {
    return {
      ariaLabel: "Comparison table — scroll horizontally to see all columns",
      operator: "Operator",
      rating: "Rating",
      bonus: "Bonus",
      payments: "Payments",
      action: "Action",
      orderPrefix: "Order is based on our",
    };
  }
  return {
    ariaLabel: "Tabla comparativa — desliza horizontalmente para ver todas las columnas",
    operator: "Operador",
    rating: "Calificación",
    bonus: "Bono",
    payments: "Pagos",
    action: "Acción",
    orderPrefix: "El orden se basa en nuestra",
  };
}
