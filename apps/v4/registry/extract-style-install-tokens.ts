import { existsSync, readFileSync } from "fs"
import path from "path"
import postcss from "postcss"

export type StyleInstallTokens = {
  light: Record<string, string>
  dark: Record<string, string>
}

/** Design systems that ship a `*-tokens.css` sidecar (preview SoT). */
export const TOKEN_SIDECAR_STYLES = [
  "glass",
  "rose",
  "nili",
  "khesht",
] as const

export type TokenSidecarStyle = (typeof TOKEN_SIDECAR_STYLES)[number]

export function isTokenSidecarStyle(
  style?: string
): style is TokenSidecarStyle {
  return (
    !!style &&
    (TOKEN_SIDECAR_STYLES as readonly string[]).includes(style)
  )
}

export function resolveStyleTokensCssPath(style: string): string | null {
  const candidates = [
    path.join(process.cwd(), "registry", "styles", `${style}-tokens.css`),
    path.join(
      process.cwd(),
      "apps",
      "v4",
      "registry",
      "styles",
      `${style}-tokens.css`
    ),
  ]
  return candidates.find((candidate) => existsSync(candidate)) ?? null
}

/**
 * Extract `:root`-bound install cssVars from `.style-{name}` / `.dark .style-{name}`
 * custom properties in `*-tokens.css` (website preview source of truth).
 */
export function extractStyleInstallTokensFromCss(
  css: string,
  styleName: string
): StyleInstallTokens {
  const root = postcss.parse(css)
  const lightRaw: Record<string, string> = {}
  const darkRaw: Record<string, string> = {}

  const styleClass = `style-${styleName}`

  root.walkRules((rule) => {
    for (const selector of rule.selectors ?? []) {
      const mode = matchStyleTokenSelector(selector, styleClass)
      if (!mode) continue

      const target = mode === "dark" ? darkRaw : lightRaw
      for (const node of rule.nodes ?? []) {
        if (node.type !== "decl") continue
        if (!node.prop.startsWith("--")) continue
        const key = node.prop.slice(2)
        target[key] = node.value.trim()
      }
    }
  })

  return {
    light: resolveTokenBucket(lightRaw, lightRaw),
    dark: resolveTokenBucket(darkRaw, lightRaw),
  }
}

function resolveTokenBucket(
  bucket: Record<string, string>,
  lightFallback: Record<string, string>
): Record<string, string> {
  const resolved: Record<string, string> = { ...bucket }
  // Multiple passes so var(--x) chains settle regardless of declaration order.
  for (let pass = 0; pass < 5; pass++) {
    let changed = false
    for (const [key, value] of Object.entries(resolved)) {
      const next = resolveTokenValue(value, resolved, lightFallback)
      if (next !== value) {
        resolved[key] = next
        changed = true
      }
    }
    if (!changed) break
  }
  return resolved
}

function matchStyleTokenSelector(
  selector: string,
  styleClass: string
): "light" | "dark" | null {
  const normalized = selector.replace(/\s+/g, " ").trim()
  // `.dark .style-khesht` or `.dark.style-khesht`
  if (
    normalized === `.dark .${styleClass}` ||
    normalized === `.dark.${styleClass}`
  ) {
    return "dark"
  }
  // Exact `.style-khesht` only — ignore collage / component overrides.
  if (normalized === `.${styleClass}`) {
    return "light"
  }
  return null
}

/**
 * Resolve `var(--x)` references (including inside shadow/border values) when
 * `--x` is already known in the same bucket (or light fallback).
 */
function resolveTokenValue(
  value: string,
  bucket: Record<string, string>,
  lightFallback: Record<string, string>
): string {
  return value.replace(/var\(--([a-zA-Z0-9-_]+)\)/g, (full, ref: string) => {
    const resolved = bucket[ref] ?? lightFallback[ref]
    return resolved ?? full
  })
}

const tokensCache = new Map<string, StyleInstallTokens>()

/** Read + extract install tokens for a sidecar style (cached). */
export function loadStyleInstallTokensFromFile(
  style: TokenSidecarStyle
): StyleInstallTokens | null {
  const cached = tokensCache.get(style)
  if (cached) return cached

  const cssPath = resolveStyleTokensCssPath(style)
  if (!cssPath) return null

  const extracted = extractStyleInstallTokensFromCss(
    readFileSync(cssPath, "utf8"),
    style
  )
  tokensCache.set(style, extracted)
  return extracted
}
