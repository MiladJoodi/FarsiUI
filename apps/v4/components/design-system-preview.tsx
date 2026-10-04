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
 * Site Design System picker — maps to real installable registry styles
 * (`base-nova`, `base-glass`, …). CSS chunks still load on demand for preview.
 */
export const DESIGN_SYSTEM_PRESETS = [
  {
    id: "default",
    label: "پیشفرض",
    styleName: "base-nova",
    styleRootClass: "style-nova",
    recipe: "nova",
  },
  {
    id: "comfort",
    label: "آرام",
    styleName: "base-vega",
    styleRootClass: "style-vega",
    recipe: "vega",
  },
  {
    id: "glass",
    label: "فیروزه",
    styleName: "base-glass",
    styleRootClass: "style-glass",
    recipe: "glass",
  },
  {
    id: "rose",
    label: "رز",
    styleName: "base-rose",
    styleRootClass: "style-rose",
    recipe: "rose",
  },
  {
    id: "nili",
    label: "نیلی",
    styleName: "base-nili",
    styleRootClass: "style-nili",
    recipe: "nili",
  },
  {
    id: "khesht",
    label: "خشت",
    styleName: "base-khesht",
    styleRootClass: "style-khesht",
    recipe: "khesht",
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

function applyStyleRootToBody(body: HTMLElement, styleRootClass: string) {
  Array.from(body.classList)
    .filter((className) => className.startsWith("style-"))
    .forEach((className) => {
      body.classList.remove(className)
    })
  body.classList.add(styleRootClass)
}

/** Apply style root on the parent document and every same-origin iframe. */
function applyStyleRootClass(styleRootClass: string) {
  applyStyleRootToBody(document.body, styleRootClass)

  document.querySelectorAll("iframe").forEach((iframe) => {
    try {
      const body = iframe.contentDocument?.body
      if (body) {
        applyStyleRootToBody(body, styleRootClass)
      }
    } catch {
      // Ignore cross-origin frames.
    }
  })
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

  // Load CSS chunk for the active design system, then apply body + iframe classes.
  useEffect(() => {
    if (!hydrated) return

    let cancelled = false
    const id = designSystemId as LoadableDesignSystemId
    const preset = resolvePreset(designSystemId)

    setStyleReady(id === "default")

    void loadDesignSystemStyle(id)
      .then(() => {
        if (cancelled) return
        applyStyleRootClass(preset.styleRootClass)
        setStyleReady(true)
      })
      .catch(() => {
        if (!cancelled) setStyleReady(true)
      })

    return () => {
      cancelled = true
    }
  }, [hydrated, designSystemId])

  // Sync style root onto lazy-loaded same-origin preview iframes.
  useEffect(() => {
    if (!hydrated || !styleReady) return

    const styleRootClass = resolvePreset(designSystemId).styleRootClass
    const seen = new WeakSet<HTMLIFrameElement>()
    const controller = new AbortController()
    const { signal } = controller

    const track = (iframe: HTMLIFrameElement) => {
      if (seen.has(iframe)) return
      seen.add(iframe)
      const onLoad = () => applyStyleRootClass(styleRootClass)
      iframe.addEventListener("load", onLoad, { signal })
      try {
        if (iframe.contentDocument?.readyState === "complete") onLoad()
      } catch {
        // Ignore cross-origin frames.
      }
    }

    const scan = (root: ParentNode | Node) => {
      if (root instanceof HTMLIFrameElement) {
        track(root)
        return
      }
      if (root instanceof Element || root instanceof Document) {
        root.querySelectorAll("iframe").forEach(track)
      }
    }

    scan(document)
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach(scan)
      }
    })
    observer.observe(document.body, { childList: true, subtree: true })
    return () => {
      controller.abort()
      observer.disconnect()
    }
  }, [designSystemId, hydrated, styleReady])

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
