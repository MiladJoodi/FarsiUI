"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react"
import { useTheme } from "next-themes"

import {
  DESIGN_SYSTEM_STORAGE_KEY,
  DESIGN_SYSTEM_STYLE_CLASS,
  isDarkDefaultDesignSystem,
  normalizeDesignSystemId,
  persistDesignSystemId,
  THEME_BEFORE_DARK_DS_KEY,
  type DesignSystemCookieId,
} from "@/lib/design-system"

/**
 * Site Design System picker — maps to real installable registry styles.
 * Picker CSS ships eagerly with the app shell; switching is a sync class swap.
 */
export const DESIGN_SYSTEM_PRESETS = [
  {
    id: "default",
    label: "پیشفرض",
    hint: "استاندارد و شفاف",
    styleName: "base-nova",
    styleRootClass: "style-nova",
    recipe: "nova",
  },
  {
    id: "comfort",
    label: "آرام",
    hint: "آروم و باز",
    styleName: "base-vega",
    styleRootClass: "style-vega",
    recipe: "vega",
  },
  {
    id: "glass",
    label: "فیروزه",
    hint: "شیشه‌ای فیروزه‌ای",
    styleName: "base-glass",
    styleRootClass: "style-glass",
    recipe: "glass",
  },
  {
    id: "rose",
    label: "رز",
    hint: "گرم و نرم",
    styleName: "base-rose",
    styleRootClass: "style-rose",
    recipe: "rose",
  },
  {
    id: "nili",
    label: "نیلی",
    hint: "سرد و تیره",
    styleName: "base-nili",
    styleRootClass: "style-nili",
    recipe: "nili",
  },
  {
    id: "khesht",
    label: "خشت",
    hint: "خاکی و پررنگ",
    styleName: "base-khesht",
    styleRootClass: "style-khesht",
    recipe: "khesht",
  },
] as const

export type DesignSystemId = (typeof DESIGN_SYSTEM_PRESETS)[number]["id"]

/** Design systems whose accent is owned (Primary Color picker hidden). */
export const OWNED_ACCENT_SYSTEMS = new Set<DesignSystemId>([
  "glass",
  "rose",
  "nili",
  "khesht",
])

const DEFAULT_DESIGN_SYSTEM: DesignSystemId = "default"

type DesignSystemPreviewContextType = {
  designSystemId: DesignSystemId
  setDesignSystemId: (id: DesignSystemId) => void
  styleName: string
  styleRootClass: string
  presets: typeof DESIGN_SYSTEM_PRESETS
  /** Always true — picker CSS is in the shell. */
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
  const bootId = initialDesignSystem ?? DEFAULT_DESIGN_SYSTEM
  const [designSystemId, setDesignSystemIdState] =
    useState<DesignSystemId>(bootId)
  const [hydrated, setHydrated] = useState(false)
  const designSystemIdRef = useRef(designSystemId)
  const { setTheme, theme } = useTheme()
  const themeRef = useRef(theme)

  designSystemIdRef.current = designSystemId
  themeRef.current = theme

  const stashThemeBeforeDarkDs = useCallback(() => {
    try {
      if (sessionStorage.getItem(THEME_BEFORE_DARK_DS_KEY)) return
      const current =
        themeRef.current || window.localStorage.getItem("theme") || "system"
      sessionStorage.setItem(THEME_BEFORE_DARK_DS_KEY, current)
    } catch {
      // Ignore private mode.
    }
  }, [])

  const restoreThemeAfterDarkDs = useCallback(() => {
    try {
      const saved = sessionStorage.getItem(THEME_BEFORE_DARK_DS_KEY)
      if (!saved) return
      sessionStorage.removeItem(THEME_BEFORE_DARK_DS_KEY)
      setTheme(saved)
    } catch {
      // Ignore private mode.
    }
  }, [setTheme])

  const syncColorModeForDesignSystem = useCallback(
    (nextId: DesignSystemId, prevId: DesignSystemId) => {
      const nextDark = isDarkDefaultDesignSystem(nextId)
      const prevDark = isDarkDefaultDesignSystem(prevId)

      if (nextDark && !prevDark) {
        stashThemeBeforeDarkDs()
        setTheme("dark")
        return
      }

      if (!nextDark && prevDark) {
        restoreThemeAfterDarkDs()
      }
    },
    [restoreThemeAfterDarkDs, setTheme, stashThemeBeforeDarkDs]
  )

  // Before paint: reconcile localStorage vs cookie boot, apply class sync.
  useLayoutEffect(() => {
    const raw = window.localStorage.getItem(DESIGN_SYSTEM_STORAGE_KEY)
    if (raw === "aether") {
      window.localStorage.setItem(DESIGN_SYSTEM_STORAGE_KEY, "glass")
    }
    const next = normalizeDesignSystemId(raw) as DesignSystemId
    const preset = resolvePreset(next)

    setDesignSystemIdState(next)
    persistDesignSystemId(next as DesignSystemCookieId)
    applyStyleRootClass(preset.styleRootClass)

    // Boot path: فیروزه / نیلی already active → dark, keep prior choice stashed.
    if (isDarkDefaultDesignSystem(next)) {
      stashThemeBeforeDarkDs()
      setTheme("dark")
    }

    setHydrated(true)
  }, [setTheme, stashThemeBeforeDarkDs])

  useEffect(() => {
    if (!hydrated) return
    persistDesignSystemId(designSystemId as DesignSystemCookieId)
    applyStyleRootClass(resolvePreset(designSystemId).styleRootClass)
  }, [designSystemId, hydrated])

  // Sync style root onto lazy-loaded same-origin preview iframes.
  // Avoid observing every body mutation on pages with no iframes (homepage).
  useEffect(() => {
    if (!hydrated) return

    const styleRootClass =
      DESIGN_SYSTEM_STYLE_CLASS[designSystemId as DesignSystemCookieId] ??
      resolvePreset(designSystemId).styleRootClass
    const seen = new WeakSet<HTMLIFrameElement>()
    const controller = new AbortController()
    const { signal } = controller
    let observer: MutationObserver | null = null
    let pollId: number | null = null

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

    const startObserver = () => {
      if (observer || signal.aborted) return
      scan(document)
      observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          mutation.addedNodes.forEach(scan)
        }
      })
      observer.observe(document.body, { childList: true, subtree: true })
    }

    if (document.querySelector("iframe")) {
      startObserver()
    } else {
      let tries = 0
      pollId = window.setInterval(() => {
        tries += 1
        if (document.querySelector("iframe")) {
          if (pollId !== null) window.clearInterval(pollId)
          pollId = null
          startObserver()
        } else if (tries >= 40) {
          if (pollId !== null) window.clearInterval(pollId)
          pollId = null
        }
      }, 500)
    }

    return () => {
      controller.abort()
      if (pollId !== null) window.clearInterval(pollId)
      observer?.disconnect()
    }
  }, [designSystemId, hydrated])

  const setDesignSystemId = useCallback(
    (id: DesignSystemId) => {
      if (!DESIGN_SYSTEM_PRESETS.some((preset) => preset.id === id)) return
      const prevId = designSystemIdRef.current
      persistDesignSystemId(id as DesignSystemCookieId)
      applyStyleRootClass(resolvePreset(id).styleRootClass)
      setDesignSystemIdState(id)
      syncColorModeForDesignSystem(id, prevId)
    },
    [syncColorModeForDesignSystem]
  )

  const preset = resolvePreset(designSystemId)

  return (
    <DesignSystemPreviewContext.Provider
      value={{
        designSystemId: preset.id,
        setDesignSystemId,
        styleName: preset.styleName,
        styleRootClass: preset.styleRootClass,
        presets: DESIGN_SYSTEM_PRESETS,
        styleReady: true,
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
