import { BASES } from "@/registry/bases"
import { STYLES } from "@/registry/styles"

/** Legacy source registries still used by some /view and chart paths. */
const LEGACY_SOURCE_STYLES = [
  {
    name: "new-york-v4",
    title: "New York",
  },
] as const

/** Installable base × style combinations (includes glass/rose/nili/khesht). */
const COMBINATION_STYLES = BASES.flatMap((base) =>
  STYLES.map((style) => ({
    name: `${base.name}-${style.name}`,
    title: `${base.title} ${style.title}`,
  }))
)

export const legacyStyles = [
  ...LEGACY_SOURCE_STYLES,
  ...COMBINATION_STYLES,
] as const

export type Style = (typeof legacyStyles)[number]

export async function getActiveStyle() {
  // Default to FarsiUI base design system (not legacy new-york).
  return (
    legacyStyles.find((style) => style.name === "base-nova") ?? legacyStyles[0]
  )
}

export function getStyle(name: string) {
  return legacyStyles.find((style) => style.name === name)
}
