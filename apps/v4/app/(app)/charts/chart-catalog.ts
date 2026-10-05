/** Lightweight chart catalog for RSC pages — ids only (demos render in iframes). */

export type ChartCatalogItem = {
  id: string
  fullWidth?: boolean
}

export type ChartType =
  | "area"
  | "bar"
  | "line"
  | "pie"
  | "radar"
  | "radial"
  | "tooltip"

export const chartCatalog: Record<ChartType, ChartCatalogItem[]> = {
  area: [
    { id: "chart-area-interactive", fullWidth: true },
    { id: "chart-area-default" },
    { id: "chart-area-linear" },
    { id: "chart-area-step" },
    { id: "chart-area-legend" },
    { id: "chart-area-stacked" },
    { id: "chart-area-stacked-expand" },
    { id: "chart-area-icons" },
    { id: "chart-area-gradient" },
    { id: "chart-area-axes" },
  ],
  bar: [
    { id: "chart-bar-interactive", fullWidth: true },
    { id: "chart-bar-default" },
    { id: "chart-bar-horizontal" },
    { id: "chart-bar-multiple" },
    { id: "chart-bar-stacked" },
    { id: "chart-bar-label" },
    { id: "chart-bar-label-custom" },
    { id: "chart-bar-mixed" },
    { id: "chart-bar-active" },
    { id: "chart-bar-negative" },
  ],
  line: [
    { id: "chart-line-interactive", fullWidth: true },
    { id: "chart-line-default" },
    { id: "chart-line-linear" },
    { id: "chart-line-step" },
    { id: "chart-line-multiple" },
    { id: "chart-line-dots" },
    { id: "chart-line-dots-custom" },
    { id: "chart-line-dots-colors" },
    { id: "chart-line-label" },
    { id: "chart-line-label-custom" },
  ],
  pie: [
    { id: "chart-pie-simple" },
    { id: "chart-pie-separator-none" },
    { id: "chart-pie-label" },
    { id: "chart-pie-label-custom" },
    { id: "chart-pie-label-list" },
    { id: "chart-pie-legend" },
    { id: "chart-pie-donut" },
    { id: "chart-pie-donut-active" },
    { id: "chart-pie-donut-text" },
    { id: "chart-pie-stacked" },
    { id: "chart-pie-interactive" },
  ],
  radar: [
    { id: "chart-radar-default" },
    { id: "chart-radar-dots" },
    { id: "chart-radar-lines-only" },
    { id: "chart-radar-label-custom" },
    { id: "chart-radar-grid-custom" },
    { id: "chart-radar-grid-none" },
    { id: "chart-radar-grid-circle" },
    { id: "chart-radar-grid-circle-no-lines" },
    { id: "chart-radar-grid-circle-fill" },
    { id: "chart-radar-grid-fill" },
    { id: "chart-radar-multiple" },
    { id: "chart-radar-legend" },
    { id: "chart-radar-icons" },
    { id: "chart-radar-radius" },
  ],
  radial: [
    { id: "chart-radial-simple" },
    { id: "chart-radial-label" },
    { id: "chart-radial-grid" },
    { id: "chart-radial-text" },
    { id: "chart-radial-shape" },
    { id: "chart-radial-stacked" },
  ],
  tooltip: [
    { id: "chart-tooltip-default" },
    { id: "chart-tooltip-indicator-line" },
    { id: "chart-tooltip-indicator-none" },
    { id: "chart-tooltip-label-custom" },
    { id: "chart-tooltip-label-formatter" },
    { id: "chart-tooltip-label-none" },
    { id: "chart-tooltip-formatter" },
    { id: "chart-tooltip-icons" },
    { id: "chart-tooltip-advanced" },
  ],
}
