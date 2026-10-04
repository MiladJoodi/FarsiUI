import { describe, expect, it } from "vitest"

import { getDensity, getDensityBakeUtilities } from "./densities"
import { resolveDensityInStyleMap } from "./resolve-density-style-map"

describe("resolveDensityInStyleMap", () => {
  it("resolves Nova / Default density token utilities back to concrete classes", () => {
    const resolved = resolveDensityInStyleMap(
      {
        "cn-button":
          "rounded-(--radius-control) text-(length:--text-control) [&_svg:not([class*='size-'])]:size-(--control-icon)",
        "cn-button-size-default":
          "h-(--control-h-md) gap-(--space-inline) px-(--space-control-x)",
        "cn-button-size-xs":
          "h-(--control-h-xs) [&_svg:not([class*='size-'])]:size-(--control-icon-sm)",
      },
      "nova"
    )

    expect(resolved["cn-button"]).toContain("rounded-lg")
    expect(resolved["cn-button"]).toContain("text-sm")
    expect(resolved["cn-button"]).toContain("size-4")
    expect(resolved["cn-button"]).not.toContain("--control-")
    expect(resolved["cn-button-size-default"]).toBe("h-8 gap-1.5 px-2.5")
    expect(resolved["cn-button-size-xs"]).toContain("h-6")
    expect(resolved["cn-button-size-xs"]).toContain("size-3")
  })

  it("resolves Comfort density (and vega alias) to spacious concrete classes", () => {
    const tokenMap = {
      "cn-button":
        "rounded-(--radius-control) text-(length:--text-control) [&_svg:not([class*='size-'])]:size-(--control-icon)",
      "cn-button-size-default":
        "h-(--control-h-md) gap-(--space-inline) px-(--space-control-x)",
      "cn-button-size-sm": "h-(--control-h-sm) px-(--space-control-x)",
      "cn-button-size-lg": "h-(--control-h-lg)",
      "cn-button-size-xs":
        "h-(--control-h-xs) text-(length:--text-control-sm) [&_svg:not([class*='size-'])]:size-(--control-icon-sm)",
    }

    for (const styleName of ["comfort", "vega"] as const) {
      const resolved = resolveDensityInStyleMap(tokenMap, styleName)

      expect(resolved["cn-button"]).toContain("rounded-xl")
      expect(resolved["cn-button"]).toContain("text-sm")
      expect(resolved["cn-button"]).toContain("size-4.5")
      expect(resolved["cn-button"]).not.toContain("--control-")
      expect(resolved["cn-button-size-default"]).toBe("h-10 gap-2 px-3.5")
      expect(resolved["cn-button-size-sm"]).toBe("h-9 px-3.5")
      expect(resolved["cn-button-size-lg"]).toBe("h-11")
      expect(resolved["cn-button-size-xs"]).toContain("h-7")
      expect(resolved["cn-button-size-xs"]).toContain("text-[0.8125rem]")
      expect(resolved["cn-button-size-xs"]).toContain("size-3.5")
    }
  })

  it("aliases default→nova and keeps Comfort taller/wider than Default", () => {
    expect(getDensity("default")).toEqual(getDensity("nova"))
    expect(getDensity("vega")).toEqual(getDensity("comfort"))
    expect(getDensity("nova")["control-h-md"]).toBe("2rem")
    expect(getDensity("comfort")["control-h-md"]).toBe("2.5rem")
    expect(getDensity("nova")["space-control-x"]).toBe("0.625rem")
    expect(getDensity("comfort")["space-control-x"]).toBe("0.875rem")
    expect(getDensity("nova")["radius-control"]).toBe("var(--radius-lg)")
    expect(getDensity("comfort")["radius-control"]).toBe("var(--radius-xl)")
    expect(getDensityBakeUtilities("default")["h-(--control-h-md)"]).toBe("h-8")
    expect(getDensityBakeUtilities("comfort")["h-(--control-h-md)"]).toBe(
      "h-10"
    )
  })

  it("resolves Aether density between Default and Comfort", () => {
    const resolved = resolveDensityInStyleMap(
      {
        "cn-button":
          "rounded-(--radius-control) text-(length:--text-control) [&_svg:not([class*='size-'])]:size-(--control-icon)",
        "cn-button-size-default":
          "h-(--control-h-md) gap-(--space-inline) px-(--space-control-x)",
        "cn-button-size-xs":
          "h-(--control-h-xs) text-(length:--text-control-sm) [&_svg:not([class*='size-'])]:size-(--control-icon-sm)",
      },
      "aether"
    )

    expect(getDensity("aether")["control-h-md"]).toBe("2.25rem")
    expect(getDensity("aether")["space-control-x"]).toBe("0.75rem")
    expect(getDensity("aether")["radius-control"]).toBe("var(--radius-lg)")
    expect(resolved["cn-button"]).toContain("rounded-lg")
    expect(resolved["cn-button"]).toContain("size-4")
    expect(resolved["cn-button"]).not.toContain("--control-")
    expect(resolved["cn-button-size-default"]).toBe("h-9 gap-1.5 px-3")
    expect(resolved["cn-button-size-xs"]).toContain("h-6.5")
    expect(resolved["cn-button-size-xs"]).toContain("size-3.5")
    expect(getDensityBakeUtilities("aether")["h-(--control-h-md)"]).toBe("h-9")
  })

  it.each([
    {
      style: "glass",
      rounded: "rounded-lg",
      height: "h-9",
      padding: "px-3",
    },
    {
      style: "rose",
      rounded: "rounded-full",
      height: "h-9.5",
      padding: "px-3.5",
    },
    {
      style: "nili",
      rounded: "rounded-md",
      height: "h-7.5",
      padding: "px-2.25",
    },
    {
      style: "khesht",
      rounded: "rounded-[0.375rem]",
      height: "h-9",
      padding: "px-3.5",
    },
  ] as const)(
    "resolves $style design-system density into concrete bake classes",
    ({ style, rounded, height, padding }) => {
      const resolved = resolveDensityInStyleMap(
        {
          "cn-button": "rounded-(--radius-control)",
          "cn-button-size-default":
            "h-(--control-h-md) px-(--space-control-x)",
        },
        style
      )

      expect(resolved["cn-button"]).toContain(rounded)
      expect(resolved["cn-button-size-default"]).toBe(`${height} ${padding}`)
      expect(getDensityBakeUtilities(style)["h-(--control-h-md)"]).toBe(height)
    }
  )
})
