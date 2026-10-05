import { writeFileSync } from "fs"
import path from "path"
import { fileURLToPath } from "url"

import {
  TOKEN_SIDECAR_STYLES,
  type StyleInstallTokens,
  type TokenSidecarStyle,
} from "../registry/extract-style-install-tokens"
import { loadStyleInstallTokensFromFile } from "../registry/extract-style-install-tokens.node"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outPath = path.join(__dirname, "../registry/style-install-tokens.data.ts")

const entries: Partial<Record<TokenSidecarStyle, StyleInstallTokens>> = {}

for (const style of TOKEN_SIDECAR_STYLES) {
  const tokens = loadStyleInstallTokensFromFile(style)
  if (!tokens) {
    throw new Error(`Missing install tokens for style "${style}"`)
  }
  entries[style] = tokens
}

const source = `/* eslint-disable */
/**
 * Auto-generated from registry/styles/*-tokens.css
 * Run: pnpm exec tsx ./scripts/generate-style-install-tokens.mts
 */
import type { StyleInstallTokens } from "@/registry/extract-style-install-tokens"
import type { TokenSidecarStyle } from "@/registry/extract-style-install-tokens"

export const STYLE_INSTALL_TOKENS = ${JSON.stringify(entries, null, 2)} as const satisfies Record<
  TokenSidecarStyle,
  StyleInstallTokens
>
`

writeFileSync(outPath, source)
console.log(`Wrote ${outPath}`)
