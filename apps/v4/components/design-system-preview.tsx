"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"

/**
 * Docs/Preview-only Design System selection (Default / Comfort / Aether).
 * Does not affect CLI, bake, or installable component source.
 */
export const DESIGN_SYSTEM_PRESETS = [
  {
    id: "default",
    label: "Default",
    styleName: "base-nova",
    styleRootClass: "style-nova",
  },
  {
    id: "comfort",
    label: "Comfort",
    styleName: "base-vega",
    styleRootClass: "style-vega",
  },
  {
    id: "aether",
    label: "Aether",
    styleName: "base-aether",
    styleRootClass: "style-aether",
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

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored && DESIGN_SYSTEM_PRESETS.some((preset) => preset.id === stored)) {
      setDesignSystemIdState(stored as DesignSystemId)
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    window.localStorage.setItem(STORAGE_KEY, designSystemId)
  }, [designSystemId, hydrated])

  const setDesignSystemId = useCallback((id: DesignSystemId) => {
    if (DESIGN_SYSTEM_PRESETS.some((preset) => preset.id === id)) {
      setDesignSystemIdState(id)
    }
  }, [])

  const preset = resolvePreset(designSystemId)

  // Portaled overlays (dropdown, select, popover, …) mount on document.body.
  // cn-* style recipes are scoped under .style-*, so the root must live on body.
  useEffect(() => {
    const { body } = document
    const previous = Array.from(body.classList).filter((className) =>
      className.startsWith("style-")
    )
    previous.forEach((className) => body.classList.remove(className))
    body.classList.add(preset.styleRootClass)

    return () => {
      body.classList.remove(preset.styleRootClass)
      previous.forEach((className) => body.classList.add(className))
    }
  }, [preset.styleRootClass])

  return (
    <DesignSystemPreviewContext.Provider
      value={{
        designSystemId: preset.id,
        setDesignSystemId,
        styleName: preset.styleName,
        styleRootClass: preset.styleRootClass,
        presets: DESIGN_SYSTEM_PRESETS,
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
