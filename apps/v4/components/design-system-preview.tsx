"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"

import {
  loadDesignSystemStyle,
  markDefaultDesignSystemStyleLoaded,
  type LoadableDesignSystemId,
} from "@/lib/design-system-style-loader"

/**
 * Docs/Preview-only Design System selection.
 * Does not affect CLI, bake, or installable component source.
 *
 * CSS: only the active style chunk is loaded. Default (nova) ships with the
 * app shell; comfort / glass / rose load on first selection (or restore).
 */
export const DESIGN_SYSTEM_PRESETS = [
  {
    id: "default",
    label: "پیشفرض",
    styleName: "base-nova",
    styleRootClass: "style-nova",
  },
  {
    id: "comfort",
    label: "آرام",
    styleName: "base-vega",
    styleRootClass: "style-vega",
  },
  {
    id: "glass",
    label: "فیروزه",
    styleName: "base-nova",
    styleRootClass: "style-glass",
  },
  {
    id: "rose",
    label: "رز",
    styleName: "base-nova",
    styleRootClass: "style-rose",
  },
] as const

export type DesignSystemId = (typeof DESIGN_SYSTEM_PRESETS)[number]["id"]

const DEFAULT_DESIGN_SYSTEM: DesignSystemId = "default"
const STORAGE_KEY = "design-system-preview"

type DesignSystemPreviewContextType = {
  designSystemId: DesignSystemId
  setDesignSystemId: (id: DesignSystemId) => void
  styleName: string
  styleRootClass: string
  presets: typeof DESIGN_SYSTEM_PRESETS
  /** False while a non-default style chunk is still fetching. */
  styleReady: boolean
}

const DesignSystemPreviewContext = createContext<
  DesignSystemPreviewContextType | undefined
>(undefined)

function resolvePreset(id: string) {
  return (
    DESIGN_SYSTEM_PRESETS.find((preset) => preset.id === id) ??
    DESIGN_SYSTEM_PRESETS[0]
  )
}

function normalizeStoredId(stored: string | null): DesignSystemId | null {
  if (!stored) return null
  // Aether was replaced by Glass (فیروزه).
  const id = stored === "aether" ? "glass" : stored
  if (DESIGN_SYSTEM_PRESETS.some((preset) => preset.id === id)) {
    return id as DesignSystemId
  }
  return null
}

export function DesignSystemPreviewProvider({
  children,
  initialDesignSystem,
}: {
  children: ReactNode
  initialDesignSystem?: DesignSystemId
}) {
  const [designSystemId, setDesignSystemIdState] = useState<DesignSystemId>(
    () => initialDesignSystem ?? DEFAULT_DESIGN_SYSTEM
  )
  const [hydrated, setHydrated] = useState(false)
  const [styleReady, setStyleReady] = useState(
    () => (initialDesignSystem ?? DEFAULT_DESIGN_SYSTEM) === "default"
  )

  useEffect(() => {
    markDefaultDesignSystemStyleLoaded()
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (raw === "aether") {
      window.localStorage.setItem(STORAGE_KEY, "glass")
    }
    const stored = normalizeStoredId(raw)
    if (stored) {
      if (stored !== "default") setStyleReady(false)
      setDesignSystemIdState(stored)
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    window.localStorage.setItem(STORAGE_KEY, designSystemId)
  }, [designSystemId, hydrated])

  // Load CSS chunk for the active design system, then apply body class.
  useEffect(() => {
    if (!hydrated) return

    let cancelled = false
    const id = designSystemId as LoadableDesignSystemId
    const preset = resolvePreset(designSystemId)

    setStyleReady(id === "default")

    void loadDesignSystemStyle(id)
      .then(() => {
        if (cancelled) return
        const { body } = document
        Array.from(body.classList)
          .filter((className) => className.startsWith("style-"))
          .forEach((className) => body.classList.remove(className))
        body.classList.add(preset.styleRootClass)
        setStyleReady(true)
      })
      .catch(() => {
        if (!cancelled) setStyleReady(true)
      })

    return () => {
      cancelled = true
    }
  }, [hydrated, designSystemId])

  const setDesignSystemId = useCallback((id: DesignSystemId) => {
    if (DESIGN_SYSTEM_PRESETS.some((preset) => preset.id === id)) {
      setDesignSystemIdState(id)
    }
  }, [])

  const preset = resolvePreset(designSystemId)

  return (
    <DesignSystemPreviewContext.Provider
      value={{
        designSystemId: preset.id,
        setDesignSystemId,
        styleName: preset.styleName,
        styleRootClass: preset.styleRootClass,
        presets: DESIGN_SYSTEM_PRESETS,
        styleReady,
      }}
    >
      {children}
    </DesignSystemPreviewContext.Provider>
  )
}

export function useDesignSystemPreview() {
  const context = useContext(DesignSystemPreviewContext)
  if (context === undefined) {
    throw new Error(
      "useDesignSystemPreview must be used within a DesignSystemPreviewProvider"
    )
  }
  return context
}
