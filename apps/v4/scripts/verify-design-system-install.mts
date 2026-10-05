import { existsSync, readFileSync } from "fs"
import path from "path"

import { buildRegistryBase, DEFAULT_CONFIG } from "../registry/config"
import { loadStyleInstallTokensFromFile } from "../registry/extract-style-install-tokens.node"

const systems = [
  {
    id: "default",
    style: "nova" as const,
    registry: "base-nova",
    font: "inter" as const,
    expectPrimary: null as string | null,
    expectMarkers: {
      button: ["hover:bg-primary/80"],
      input: ["border-input"],
      card: ["bg-card"],
      select: ["border-input"],
      dialog: ["bg-popover"],
      tabs: ["data-active"],
      table: ["w-full"],
    },
  },
  {
    id: "comfort",
    style: "vega" as const,
    registry: "base-vega",
    font: "inter" as const,
    expectPrimary: null,
    expectMarkers: {
      button: ["h-10"],
      input: ["h-10"],
      card: ["rounded"],
      select: ["h-10"],
      dialog: ["rounded"],
      tabs: ["h-10"],
      table: ["w-full"],
    },
  },
  {
    id: "glass",
    style: "glass" as const,
    registry: "base-glass",
    font: "geist" as const,
    expectPrimary: "#0d9e96",
    expectMarkers: {
      button: ["shadow-[var(--shadow-control)]", "var(--control)"],
      input: ["var(--field)", "var(--field-border)"],
      card: ["var(--surface)", "var(--shadow-surface)"],
      select: ["var(--field)"],
      dialog: ["var(--overlay)", "var(--shadow-overlay)"],
      tabs: ["var(--"],
      table: ["w-full"],
    },
  },
  {
    id: "rose",
    style: "rose" as const,
    registry: "base-rose",
    font: "geist" as const,
    expectPrimary: "#de3951",
    expectMarkers: {
      button: ["rounded-full"],
      input: ["rounded"],
      card: ["rounded"],
      select: ["rounded"],
      dialog: ["rounded"],
      tabs: ["rounded"],
      table: ["w-full"],
    },
  },
  {
    id: "nili",
    style: "nili" as const,
    registry: "base-nili",
    font: "geist" as const,
    expectPrimary: "#0d9f8a",
    expectMarkers: {
      button: ["h-7.5"],
      input: ["h-7.5"],
      card: ["rounded"],
      select: ["var(--field)"],
      dialog: ["rounded"],
      tabs: ["group-data-horizontal/tabs:h-8"],
      table: ["w-full"],
    },
  },
  {
    id: "khesht",
    style: "khesht" as const,
    registry: "base-khesht",
    font: "geist" as const,
    expectPrimary: "#c45a2c",
    expectMarkers: {
      button: ["font-bold", "var(--shadow-control)", "var(--line)"],
      input: ["var(--field)", "var(--line)"],
      card: ["var(--surface)", "var(--shadow-surface)", "var(--line)"],
      select: ["var(--field)", "var(--line)"],
      dialog: ["var(--overlay)", "var(--line)"],
      tabs: ["data-active:bg-background"],
      table: ["w-full"],
    },
  },
]

const comps = [
  "button",
  "input",
  "card",
  "select",
  "dialog",
  "tabs",
  "table",
] as const

let failed = 0

for (const ds of systems) {
  const init = buildRegistryBase({
    ...DEFAULT_CONFIG,
    base: "base",
    style: ds.style,
    font: ds.font,
  })

  const missing = comps.filter(
    (c) =>
      !existsSync(
        path.join(process.cwd(), "public/r/styles", ds.registry, `${c}.json`)
      )
  )

  const okStyle = init.config.style === ds.registry
  const okPrimary =
    !ds.expectPrimary || init.cssVars?.light?.primary === ds.expectPrimary
  const okDarkPrimary =
    !ds.expectPrimary || Boolean(init.cssVars?.dark?.primary)

  // Sidecar styles must mirror tokens.css extraction.
  if (["glass", "rose", "nili", "khesht"].includes(ds.style)) {
    const fromFile = loadStyleInstallTokensFromFile(ds.style as "khesht")
    if (!fromFile) {
      console.error(`FAIL ${ds.id}: missing tokens file`)
      failed++
      continue
    }
    if (init.cssVars?.light?.primary !== fromFile.light.primary) {
      console.error(
        `FAIL ${ds.id}: init primary !== tokens.css (${init.cssVars?.light?.primary} vs ${fromFile.light.primary})`
      )
      failed++
    }
    if (init.cssVars?.light?.surface !== fromFile.light.surface) {
      console.error(`FAIL ${ds.id}: init surface !== tokens.css`)
      failed++
    }
    if (!init.cssVars?.dark?.surface) {
      console.error(`FAIL ${ds.id}: missing dark surface`)
      failed++
    }
  }

  let okMarkers = true
  const markerNotes: string[] = []

  for (const comp of comps) {
    const file = path.join(
      process.cwd(),
      "public/r/styles",
      ds.registry,
      `${comp}.json`
    )
    if (!existsSync(file)) {
      okMarkers = false
      markerNotes.push(`${comp}: missing json`)
      continue
    }
    const content = JSON.parse(readFileSync(file, "utf8")).files[0]
      .content as string
    const expected = ds.expectMarkers[comp] ?? []
    for (const marker of expected) {
      if (!content.includes(marker)) {
        okMarkers = false
        markerNotes.push(`${comp}: missing "${marker}"`)
      }
    }
  }

  if (missing.length || !okStyle || !okPrimary || !okDarkPrimary || !okMarkers) {
    failed++
    console.error(`FAIL ${ds.id} (${ds.registry})`, {
      missing,
      okStyle,
      okPrimary,
      okDarkPrimary,
      primary: init.cssVars?.light?.primary,
      darkPrimary: init.cssVars?.dark?.primary,
      markerNotes,
    })
  } else {
    console.log(
      `OK   ${ds.id} → ${ds.registry} primary=${init.cssVars?.light?.primary ?? "theme"}`
    )
  }
}

if (failed) {
  console.error(`\n${failed} design system(s) failed install verification`)
  process.exit(1)
}

console.log("\nAll 6 design systems verified against preview bake + tokens.")
