import { baseColors } from "@/registry/_legacy-base-colors"

export const THEMES = baseColors
  .filter((theme) => !["slate", "stone", "gray", "zinc"].includes(theme.name))
  .sort((a, b) => a.name.localeCompare(b.name))

/** Persian labels for primary-color theme names. */
export const THEME_LABELS: Record<string, string> = {
  neutral: "خاکستری",
  blue: "آبی",
  green: "سبز",
  orange: "نارنجی",
  red: "قرمز",
  rose: "رز",
  violet: "بنفش",
  yellow: "زرد",
}
