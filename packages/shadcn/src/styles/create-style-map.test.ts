import { describe, expect, it } from "vitest"

import { createStyleMap, mergeStyleMaps } from "./create-style-map"

describe("parseStyle", () => {
  it("extracts tailwind classes from @apply directives", () => {
    const css = `
      .style-nova {
        .cn-alert-dialog-content {
          @apply bg-background gap-4 rounded-xl border;
        }
      }
    `

    const result = createStyleMap(css)

    expect(result).toMatchInlineSnapshot(`
      {
        "cn-alert-dialog-content": "bg-background gap-4 rounded-xl border",
      }
    `)
  })

  it("handles multiple @apply directives", () => {
    const css = `
      .cn-button {
        @apply rounded-lg border;
        @apply text-sm;
      }
    `

    const result = createStyleMap(css)

    expect(result).toMatchInlineSnapshot(`
      {
        "cn-button": "rounded-lg border text-sm",
      }
    `)
  })

  it("handles variant classes", () => {
    const css = `
      .cn-button-variant-default {
        @apply text-primary-foreground bg-primary;
      }
    `

    const result = createStyleMap(css)

    expect(result).toMatchInlineSnapshot(`
      {
        "cn-button-variant-default": "text-primary-foreground bg-primary",
      }
    `)
  })

  it("handles nested selectors", () => {
    const css = `
      .cn-card {
        @apply rounded-xl border;

        .cn-card-header {
          @apply gap-2 px-6;
        }
      }
    `

    const result = createStyleMap(css)

    expect(result).toMatchInlineSnapshot(`
      {
        "cn-card": "rounded-xl border",
        "cn-card-header": "gap-2 px-6",
      }
    `)
  })

  it("converts raw CSS declarations to Tailwind arbitrary utilities", () => {
    const css = `
      .cn-button {
        color: red;
        box-shadow: var(--shadow-control);
        background-color: var(--control);
        border-color: var(--control-border);
        border-radius: var(--radius-control);
      }
    `

    const result = createStyleMap(css)

    expect(result).toMatchInlineSnapshot(`
      {
        "cn-button": "text-[red] shadow-[var(--shadow-control)] bg-[var(--control)] border-[var(--control-border)] rounded-[var(--radius-control)]",
      }
    `)
  })

  it("merges raw declarations with @apply utilities", () => {
    const css = `
      .cn-button-variant-default {
        box-shadow: var(--shadow-control);
        @apply border-primary/20 bg-primary text-primary-foreground;
      }
    `

    const result = createStyleMap(css)

    expect(result["cn-button-variant-default"]).toContain(
      "shadow-[var(--shadow-control)]"
    )
    expect(result["cn-button-variant-default"]).toContain("bg-primary")
  })

  it("handles size variants", () => {
    const css = `
      .cn-button-size-sm {
        @apply h-7 gap-1 px-2.5;
      }
    `

    const result = createStyleMap(css)

    expect(result).toMatchInlineSnapshot(`
      {
        "cn-button-size-sm": "h-7 gap-1 px-2.5",
      }
    `)
  })

  it("handles nested variant selectors with &", () => {
    const css = `
      .cn-button {
        @apply rounded-lg;

        &.cn-button-variant-default {
          @apply bg-primary text-white;
        }
      }
    `

    const result = createStyleMap(css)

    expect(result).toMatchInlineSnapshot(`
      {
        "cn-button": "rounded-lg",
        "cn-button-variant-default": "bg-primary text-white",
      }
    `)
  })

  it("merges duplicate class names", () => {
    const css = `
      .cn-button {
        @apply rounded-lg;
      }
      .cn-button {
        @apply border;
      }
    `

    const result = createStyleMap(css)

    expect(result).toMatchInlineSnapshot(`
      {
        "cn-button": "border rounded-lg",
      }
    `)
  })

  it("ignores non-cn- classes", () => {
    const css = `
      .button {
        @apply rounded-lg border;
      }
      .some-other-class {
        @apply text-sm;
      }
      .cn-button {
        @apply px-4;
      }
    `

    const result = createStyleMap(css)

    expect(result).toMatchInlineSnapshot(`
      {
        "cn-button": "px-4",
      }
    `)
  })

  it("preserves !important as Tailwind important utilities", () => {
    const css = `
      .cn-card {
        background-color: var(--surface) !important;
        border: 2px solid var(--line) !important;
      }
    `

    const result = createStyleMap(css)

    expect(result["cn-card"]).toContain("!bg-[var(--surface)]")
    expect(result["cn-card"]).toContain("![border:2px_solid_var(--line)]")
  })

  it("bakes :active / :hover as Tailwind variants (not resting classes)", () => {
    const css = `
      .cn-button-variant-default {
        box-shadow: var(--shadow-control) !important;
      }
      .cn-button-variant-default:active {
        transform: var(--press);
        box-shadow: var(--shadow-press) !important;
      }
      .cn-button-variant-ghost:hover {
        box-shadow: var(--shadow-control) !important;
      }
    `

    const result = createStyleMap(css)

    expect(result["cn-button-variant-default"]).toContain(
      "!shadow-[var(--shadow-control)]"
    )
    expect(result["cn-button-variant-default"]).toContain(
      "active:[transform:var(--press)]"
    )
    expect(result["cn-button-variant-default"]).toContain(
      "active:!shadow-[var(--shadow-press)]"
    )
    expect(result["cn-button-variant-default"]).not.toMatch(
      /(?<!active:)\[transform:var\(--press\)\]/
    )
    expect(result["cn-button-variant-ghost"]).toContain(
      "hover:!shadow-[var(--shadow-control)]"
    )
  })
})

describe("mergeStyleMaps", () => {
  it("appends overlay classes so token recipes win", () => {
    const base = createStyleMap(`
      .cn-button {
        @apply bg-primary rounded-lg;
      }
    `)
    const overlay = createStyleMap(`
      .cn-button {
        background-color: var(--control) !important;
        box-shadow: var(--shadow-control) !important;
      }
    `)

    const merged = mergeStyleMaps(base, overlay)

    expect(merged["cn-button"]).toBe(
      "bg-primary rounded-lg !bg-[var(--control)] !shadow-[var(--shadow-control)]"
    )
  })
})
