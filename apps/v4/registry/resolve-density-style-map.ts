import {
  getDensityBakeUtilities,
  type DensityUtilityMap,
} from "@/registry/densities"

/**
 * Replace density token utilities in a styleMap with concrete Tailwind classes
 * so installable components keep the pre-token class strings (e.g. h-8).
 */
export function resolveDensityInStyleMap(
  styleMap: Record<string, string>,
  styleName?: string
): Record<string, string> {
  const utilities = getDensityBakeUtilities(styleName)
  const resolved: Record<string, string> = {}

  for (const [key, value] of Object.entries(styleMap)) {
    resolved[key] = replaceDensityUtilities(value, utilities)
  }

  return resolved
}

function replaceDensityUtilities(
  classList: string,
  utilities: DensityUtilityMap
) {
  let next = classList

  // Longer token keys first so e.g. control-h-md wins over partial matches.
  const keys = Object.keys(utilities).sort((a, b) => b.length - a.length)

  for (const tokenClass of keys) {
    const concrete = utilities[tokenClass]
    if (!concrete || !next.includes(tokenClass)) continue
    next = next.split(tokenClass).join(concrete)
  }

  return next
}
