export interface CardStatus {
  icon: string;
  statusText: string;
  bg: string;
}

export const tempGeneralStatus: CardStatus[] = [
  {
    icon: "⚠",
    statusText: "El equipo de ventas presenta un 60% de riesgo de Burnout",
    bg: "#fdecec",
  },
  {
    icon: "🔔",
    statusText: "Revisar carga laboral en el equipo de operaciones",
    bg: "#a0cadd",
  },
  {
    icon: "🔔",
    statusText: "Implementar pausas activas a mediodia",
    bg: "#a0cadd",
  },
  {
    icon: "🔔",
    statusText: "Implementar pausas activas a mediodia",
    bg: "#a0cadd",
  },
];
