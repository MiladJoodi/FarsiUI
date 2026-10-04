import { existsSync, readFileSync } from "fs"
import path from "path"

import { buildRegistryBase, DEFAULT_CONFIG } from "../registry/config"

const systems = [
  {
    id: "default",
    style: "nova" as const,
    registry: "base-nova",
    expectPrimary: null as string | null,
    expectMarker: "hover:bg-primary/80",
  },
  {
    id: "comfort",
    style: "vega" as const,
    registry: "base-vega",
    expectPrimary: null,
    expectMarker: "h-10",
  },
  {
    id: "glass",
    style: "glass" as const,
    registry: "base-glass",
    expectPrimary: "#0d9e96",
    expectMarker: "shadow-[var(--shadow-control)]",
  },
  {
    id: "rose",
    style: "rose" as const,
    registry: "base-rose",
    expectPrimary: "#de3951",
    expectMarker: "rounded-full",
  },
  {
    id: "nili",
    style: "nili" as const,
    registry: "base-nili",
    expectPrimary: "#0d9f8a",
    expectMarker: "h-7.5",
  },
  {
    id: "khesht",
    style: "khesht" as const,
    registry: "base-khesht",
    expectPrimary: "#c45a2c",
    expectMarker: "font-bold",
  },
]

const comps = ["button", "input", "card", "select"] as const
let failed = 0

for (const ds of systems) {
  const init = buildRegistryBase({
    ...DEFAULT_CONFIG,
    base: "base",
    style: ds.style,
    font:
      ds.style === "nova" || ds.style === "vega" ? "inter" : "geist",
  })

  const missing = comps.filter(
    (c) =>
      !existsSync(
        path.join(process.cwd(), "public/r/styles", ds.registry, `${c}.json`)
      )
  )

  const button = JSON.parse(
    readFileSync(
      path.join(process.cwd(), "public/r/styles", ds.registry, "button.json"),
      "utf8"
    )
  ).files[0].content as string

  const okPrimary =
    !ds.expectPrimary || init.cssVars?.light?.primary === ds.expectPrimary
  const okMarker = button.includes(ds.expectMarker)
  const okStyle = init.config.style === ds.registry
  const okSurface = ["glass", "rose", "nili", "khesht"].includes(ds.style)
    ? Boolean(
        init.cssVars?.light?.surface &&
          init.cssVars?.light?.["shadow-control"]
      )
    : true

  const pass =
    missing.length === 0 && okPrimary && okMarker && okStyle && okSurface
  if (!pass) failed++

  console.log(
    pass ? "PASS" : "FAIL",
    ds.id,
    "->",
    init.config.style,
    `primary=${init.cssVars?.light?.primary ?? "?"}`,
    `marker=${okMarker}`,
    `surface=${okSurface}`,
    missing.length ? `missing:${missing.join(",")}` : "comps=ok"
  )
}

if (failed) {
  console.error(`\n${failed} design system(s) failed install-chain checks`)
  process.exit(1)
}

console.log("\nAll design systems pass init → style → component registry chain")
