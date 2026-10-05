import { readFileSync } from "fs"
import path from "path"
import { describe, expect, it } from "vitest"

import {
  extractStyleInstallTokensFromCss,
  TOKEN_SIDECAR_STYLES,
} from "./extract-style-install-tokens"

describe("extractStyleInstallTokensFromCss", () => {
  it.each(TOKEN_SIDECAR_STYLES)(
    "extracts light+dark tokens for %s from sidecar CSS",
    (style) => {
      const css = readFileSync(
        path.join(process.cwd(), "registry/styles", `${style}-tokens.css`),
        "utf8"
      )
      const tokens = extractStyleInstallTokensFromCss(css, style)

      expect(tokens.light.primary).toBeTruthy()
      expect(tokens.light.background).toBeTruthy()
      expect(tokens.light.surface).toBeTruthy()
      expect(tokens.dark.primary).toBeTruthy()
      expect(tokens.dark.background).toBeTruthy()
      // Resolved concrete colors (not leftover var() for brand roles).
      expect(tokens.light.primary).not.toMatch(/^var\(/)
      expect(tokens.dark.primary).not.toMatch(/^var\(/)
    }
  )

  it("resolves khesht ink aliases to concrete values", () => {
    const css = readFileSync(
      path.join(process.cwd(), "registry/styles/khesht-tokens.css"),
      "utf8"
    )
    const tokens = extractStyleInstallTokensFromCss(css, "khesht")

    expect(tokens.light.primary).toBe("#c45a2c")
    expect(tokens.light.foreground).toBe("#2a2118")
    expect(tokens.light.line).toBe("2px")
    expect(tokens.light["shadow-control"]).toContain("#8f3f1f")
    expect(tokens.dark.primary).toBe("#e08a55")
  })
})
