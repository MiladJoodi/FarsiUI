/**
 * Style/Density tokens — absolute values per design system (no runtime multipliers).
 *
 * Naming (compatibility):
 *   default → nova
 *   comfort → comfort
 *   vega    → comfort (bake/init when style.name === "vega")
 *   aether  → aether
 */

export type DensityProfile = {
  "control-h-xs": string
  "control-h-sm": string
  "control-h-md": string
  "control-h-lg": string
  "control-icon": string
  "control-icon-sm": string
  "space-control-x": string
  "space-control-y": string
  "space-stack": string
  "space-inline": string
  "text-control": string
  "text-control-sm": string
  "leading-control": string
  "radius-control": string
}

/** Concrete Tailwind utilities that bake resolves density token classes back to. */
export type DensityUtilityMap = Record<string, string>

export const DENSITIES = {
  /**
   * Default — compact, precise control scale (Nova lineage).
   * Tighter padding, medium radius, crisp type.
   */
  nova: {
    "control-h-xs": "1.5rem",
    "control-h-sm": "1.75rem",
    "control-h-md": "2rem",
    "control-h-lg": "2.25rem",
    "control-icon": "1rem",
    "control-icon-sm": "0.75rem",
    "space-control-x": "0.625rem",
    "space-control-y": "0.25rem",
    "space-stack": "1rem",
    "space-inline": "0.375rem",
    "text-control": "0.875rem",
    "text-control-sm": "0.8rem",
    "leading-control": "1.25",
    "radius-control": "var(--radius-lg)",
  },
  /**
   * Comfort — spacious, soft control scale (independent language).
   * Taller controls, wider padding, softer radius, more open gaps.
   */
  comfort: {
    "control-h-xs": "1.75rem",
    "control-h-sm": "2.25rem",
    "control-h-md": "2.5rem",
    "control-h-lg": "2.75rem",
    "control-icon": "1.125rem",
    "control-icon-sm": "0.875rem",
    "space-control-x": "0.875rem",
    "space-control-y": "0.375rem",
    "space-stack": "1.5rem",
    "space-inline": "0.5rem",
    "text-control": "0.875rem",
    "text-control-sm": "0.8125rem",
    "leading-control": "1.35",
    "radius-control": "var(--radius-xl)",
  },
  /**
   * Aether — precise AI/SaaS workspace scale (between Default and Comfort).
   * Mid-height controls, 10px control radius, technical spacing.
   */
  aether: {
    "control-h-xs": "1.625rem",
    "control-h-sm": "2rem",
    "control-h-md": "2.25rem",
    "control-h-lg": "2.5rem",
    "control-icon": "1rem",
    "control-icon-sm": "0.875rem",
    "space-control-x": "0.75rem",
    "space-control-y": "0.3125rem",
    "space-stack": "1.25rem",
    "space-inline": "0.375rem",
    "text-control": "0.875rem",
    "text-control-sm": "0.8125rem",
    "leading-control": "1.3",
    "radius-control": "var(--radius-lg)",
  },
  /** Glass / فیروزه — same control scale as Aether. */
  glass: {
    "control-h-xs": "1.625rem",
    "control-h-sm": "2rem",
    "control-h-md": "2.25rem",
    "control-h-lg": "2.5rem",
    "control-icon": "1rem",
    "control-icon-sm": "0.875rem",
    "space-control-x": "0.75rem",
    "space-control-y": "0.3125rem",
    "space-stack": "1.25rem",
    "space-inline": "0.375rem",
    "text-control": "0.875rem",
    "text-control-sm": "0.8125rem",
    "leading-control": "1.3",
    "radius-control": "var(--radius-lg)",
  },
  /** Rose / رز — soft clay, pill-friendly controls. */
  rose: {
    "control-h-xs": "1.625rem",
    "control-h-sm": "2rem",
    "control-h-md": "2.375rem",
    "control-h-lg": "2.75rem",
    "control-icon": "1rem",
    "control-icon-sm": "0.875rem",
    "space-control-x": "0.875rem",
    "space-control-y": "0.375rem",
    "space-stack": "1.25rem",
    "space-inline": "0.5rem",
    "text-control": "0.875rem",
    "text-control-sm": "0.8125rem",
    "leading-control": "1.3",
    "radius-control": "999px",
  },
  /** Nili / نیلی — compact signal density. */
  nili: {
    "control-h-xs": "1.375rem",
    "control-h-sm": "1.625rem",
    "control-h-md": "1.875rem",
    "control-h-lg": "2.125rem",
    "control-icon": "0.9375rem",
    "control-icon-sm": "0.75rem",
    "space-control-x": "0.5625rem",
    "space-control-y": "0.1875rem",
    "space-stack": "0.875rem",
    "space-inline": "0.3125rem",
    "text-control": "0.8125rem",
    "text-control-sm": "0.75rem",
    "leading-control": "1.2",
    "radius-control": "0.5rem",
  },
  /** Khesht / خشت — chunky neo-brutal controls. */
  khesht: {
    "control-h-xs": "1.625rem",
    "control-h-sm": "1.875rem",
    "control-h-md": "2.25rem",
    "control-h-lg": "2.625rem",
    "control-icon": "1.0625rem",
    "control-icon-sm": "0.875rem",
    "space-control-x": "0.875rem",
    "space-control-y": "0.3125rem",
    "space-stack": "1.125rem",
    "space-inline": "0.5rem",
    "text-control": "0.9375rem",
    "text-control-sm": "0.8125rem",
    "leading-control": "1.2",
    "radius-control": "0.375rem",
  },
} as const satisfies Record<string, DensityProfile>

export type DensityName = keyof typeof DENSITIES

const DEFAULT_DENSITY: DensityName = "nova"

/** Map legacy / product style names → density profile keys. */
const DENSITY_ALIASES: Record<string, DensityName> = {
  default: "nova",
  nova: "nova",
  comfort: "comfort",
  vega: "comfort",
  aether: "aether",
  glass: "glass",
  rose: "rose",
  nili: "nili",
  khesht: "khesht",
}

/** Token utility → concrete class for installable bake. */
export const DENSITY_BAKE_UTILITIES: Record<DensityName, DensityUtilityMap> = {
  nova: {
    "h-(--control-h-xs)": "h-6",
    "h-(--control-h-sm)": "h-7",
    "h-(--control-h-md)": "h-8",
    "h-(--control-h-lg)": "h-9",
    "size-(--control-h-xs)": "size-6",
    "size-(--control-h-sm)": "size-7",
    "size-(--control-h-md)": "size-8",
    "size-(--control-h-lg)": "size-9",
    "size-(--control-icon)": "size-4",
    "size-(--control-icon-sm)": "size-3",
    "px-(--space-control-x)": "px-2.5",
    "gap-(--space-inline)": "gap-1.5",
    "text-(length:--text-control)": "text-sm",
    "text-(length:--text-control-sm)": "text-[0.8rem]",
    "rounded-(--radius-control)": "rounded-lg",
  },
  comfort: {
    "h-(--control-h-xs)": "h-7",
    "h-(--control-h-sm)": "h-9",
    "h-(--control-h-md)": "h-10",
    "h-(--control-h-lg)": "h-11",
    "size-(--control-h-xs)": "size-7",
    "size-(--control-h-sm)": "size-9",
    "size-(--control-h-md)": "size-10",
    "size-(--control-h-lg)": "size-11",
    "size-(--control-icon)": "size-4.5",
    "size-(--control-icon-sm)": "size-3.5",
    "px-(--space-control-x)": "px-3.5",
    "gap-(--space-inline)": "gap-2",
    "text-(length:--text-control)": "text-sm",
    "text-(length:--text-control-sm)": "text-[0.8125rem]",
    "rounded-(--radius-control)": "rounded-xl",
  },
  aether: {
    "h-(--control-h-xs)": "h-6.5",
    "h-(--control-h-sm)": "h-8",
    "h-(--control-h-md)": "h-9",
    "h-(--control-h-lg)": "h-10",
    "size-(--control-h-xs)": "size-6.5",
    "size-(--control-h-sm)": "size-8",
    "size-(--control-h-md)": "size-9",
    "size-(--control-h-lg)": "size-10",
    "size-(--control-icon)": "size-4",
    "size-(--control-icon-sm)": "size-3.5",
    "px-(--space-control-x)": "px-3",
    "gap-(--space-inline)": "gap-1.5",
    "text-(length:--text-control)": "text-sm",
    "text-(length:--text-control-sm)": "text-[0.8125rem]",
    "rounded-(--radius-control)": "rounded-lg",
  },
  glass: {
    "h-(--control-h-xs)": "h-6.5",
    "h-(--control-h-sm)": "h-8",
    "h-(--control-h-md)": "h-9",
    "h-(--control-h-lg)": "h-10",
    "size-(--control-h-xs)": "size-6.5",
    "size-(--control-h-sm)": "size-8",
    "size-(--control-h-md)": "size-9",
    "size-(--control-h-lg)": "size-10",
    "size-(--control-icon)": "size-4",
    "size-(--control-icon-sm)": "size-3.5",
    "px-(--space-control-x)": "px-3",
    "gap-(--space-inline)": "gap-1.5",
    "text-(length:--text-control)": "text-sm",
    "text-(length:--text-control-sm)": "text-[0.8125rem]",
    "rounded-(--radius-control)": "rounded-lg",
  },
  rose: {
    "h-(--control-h-xs)": "h-6.5",
    "h-(--control-h-sm)": "h-8",
    "h-(--control-h-md)": "h-9.5",
    "h-(--control-h-lg)": "h-11",
    "size-(--control-h-xs)": "size-6.5",
    "size-(--control-h-sm)": "size-8",
    "size-(--control-h-md)": "size-9.5",
    "size-(--control-h-lg)": "size-11",
    "size-(--control-icon)": "size-4",
    "size-(--control-icon-sm)": "size-3.5",
    "px-(--space-control-x)": "px-3.5",
    "gap-(--space-inline)": "gap-2",
    "text-(length:--text-control)": "text-sm",
    "text-(length:--text-control-sm)": "text-[0.8125rem]",
    "rounded-(--radius-control)": "rounded-full",
  },
  nili: {
    "h-(--control-h-xs)": "h-5.5",
    "h-(--control-h-sm)": "h-6.5",
    "h-(--control-h-md)": "h-7.5",
    "h-(--control-h-lg)": "h-8.5",
    "size-(--control-h-xs)": "size-5.5",
    "size-(--control-h-sm)": "size-6.5",
    "size-(--control-h-md)": "size-7.5",
    "size-(--control-h-lg)": "size-8.5",
    "size-(--control-icon)": "size-3.75",
    "size-(--control-icon-sm)": "size-3",
    "px-(--space-control-x)": "px-2.25",
    "gap-(--space-inline)": "gap-1.25",
    "text-(length:--text-control)": "text-[0.8125rem]",
    "text-(length:--text-control-sm)": "text-xs",
    "rounded-(--radius-control)": "rounded-md",
  },
  khesht: {
    "h-(--control-h-xs)": "h-6.5",
    "h-(--control-h-sm)": "h-7.5",
    "h-(--control-h-md)": "h-9",
    "h-(--control-h-lg)": "h-10.5",
    "size-(--control-h-xs)": "size-6.5",
    "size-(--control-h-sm)": "size-7.5",
    "size-(--control-h-md)": "size-9",
    "size-(--control-h-lg)": "size-10.5",
    "size-(--control-icon)": "size-4.25",
    "size-(--control-icon-sm)": "size-3.5",
    "px-(--space-control-x)": "px-3.5",
    "gap-(--space-inline)": "gap-2",
    "text-(length:--text-control)": "text-[0.9375rem]",
    "text-(length:--text-control-sm)": "text-[0.8125rem]",
    "rounded-(--radius-control)": "rounded-[0.375rem]",
  },
}

function resolveDensityName(style?: string): DensityName {
  if (style && style in DENSITY_ALIASES) {
    return DENSITY_ALIASES[style]
  }
  if (style && style in DENSITIES) {
    return style as DensityName
  }
  return DEFAULT_DENSITY
}

export function getDensity(style?: string): DensityProfile {
  return DENSITIES[resolveDensityName(style)]
}

export function getDensityCssVars(style?: string): Record<string, string> {
  return { ...getDensity(style) }
}

export function getDensityBakeUtilities(style?: string): DensityUtilityMap {
  return DENSITY_BAKE_UTILITIES[resolveDensityName(style)]
}
