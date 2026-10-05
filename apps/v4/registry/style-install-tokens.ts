/**
 * Installable semantic tokens for Design Systems that ship as real registry
 * styles (glass / rose / nili / khesht).
 *
 * Values come from `style-install-tokens.data.ts`, generated from
 * `registry/styles/*-tokens.css` so CLI init stays in lockstep with Design
 * System previews without pulling Node `fs` / PostCSS into the Next client bundle.
 *
 * Regenerate: `pnpm exec tsx ./scripts/generate-style-install-tokens.mts`
 */

import type { StyleInstallTokens } from "@/registry/extract-style-install-tokens"
import { STYLE_INSTALL_TOKENS } from "@/registry/style-install-tokens.data"

export type { StyleInstallTokens }

export function getStyleInstallTokens(
  style?: string
): StyleInstallTokens | null {
  if (!style || !(style in STYLE_INSTALL_TOKENS)) return null
  return STYLE_INSTALL_TOKENS[style as keyof typeof STYLE_INSTALL_TOKENS]
}
