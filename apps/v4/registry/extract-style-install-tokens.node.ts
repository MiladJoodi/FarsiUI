import { existsSync, readFileSync } from "fs"
import path from "path"

import {
  extractStyleInstallTokensFromCss,
  type StyleInstallTokens,
  type TokenSidecarStyle,
} from "@/registry/extract-style-install-tokens"

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

const tokensCache = new Map<string, StyleInstallTokens>()

/** Read + extract install tokens for a sidecar style (cached). Node-only. */
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
