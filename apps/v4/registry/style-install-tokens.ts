/**
 * Installable semantic tokens for Design Systems that ship as real registry
 * styles (glass / rose / nili / khesht).
 *
 * Values are extracted from `registry/styles/*-tokens.css` (website preview SoT)
 * so CLI init stays in lockstep with Design System previews.
 */

import {
  isTokenSidecarStyle,
  loadStyleInstallTokensFromFile,
  type StyleInstallTokens,
  type TokenSidecarStyle,
} from "@/registry/extract-style-install-tokens"

export type { StyleInstallTokens }

export function getStyleInstallTokens(
  style?: string
): StyleInstallTokens | null {
  if (!isTokenSidecarStyle(style)) return null
  return loadStyleInstallTokensFromFile(style as TokenSidecarStyle)
}
