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
  ACTIVE_THEME_STORAGE_KEY,
  DEFAULT_ACTIVE_THEME,
  normalizeActiveTheme,
  persistActiveTheme,
} from "@/lib/active-theme"

type ThemeContextType = {
  activeTheme: string
  setActiveTheme: (theme: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function applyThemeToBody(body: HTMLElement, theme: string) {
  Array.from(body.classList)
    .filter((className) => className.startsWith("theme-"))
    .forEach((className) => {
      body.classList.remove(className)
    })
  body.classList.add(`theme-${theme}`)
  if (theme.endsWith("-scaled")) {
    body.classList.add("theme-scaled")
  }
}

function applyThemeClass(theme: string) {
  applyThemeToBody(document.body, theme)

  // Keep same-origin preview iframes in sync (e.g. /blocks/*/view).
  document.querySelectorAll("iframe").forEach((iframe) => {
    try {
      const body = iframe.contentDocument?.body
      if (body) {
        applyThemeToBody(body, theme)
      }
    } catch {
      // Ignore cross-origin frames.
    }
  })
}

export function ActiveThemeProvider({
  children,
  initialTheme,
}: {
  children: ReactNode
  initialTheme?: string
}) {
  const [activeTheme, setActiveThemeState] = useState<string>(() =>
    normalizeActiveTheme(initialTheme)
  )
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const stored =
      window.localStorage.getItem(ACTIVE_THEME_STORAGE_KEY) ||
      DEFAULT_ACTIVE_THEME
    const next = normalizeActiveTheme(stored)
    setActiveThemeState(next)
    persistActiveTheme(next)
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    applyThemeClass(activeTheme)
    persistActiveTheme(activeTheme)
  }, [activeTheme, hydrated])

  // Sync theme onto lazy-loaded same-origin preview iframes.
  useEffect(() => {
    if (!hydrated) return
    const seen = new WeakSet<HTMLIFrameElement>()
    const controller = new AbortController()
    const { signal } = controller

    const track = (iframe: HTMLIFrameElement) => {
      if (seen.has(iframe)) return
      seen.add(iframe)
      const onLoad = () => applyThemeClass(activeTheme)
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
  }, [activeTheme, hydrated])

  const setActiveTheme = useCallback((theme: string) => {
    const next = normalizeActiveTheme(theme)
    persistActiveTheme(next)
    applyThemeClass(next)
    setActiveThemeState(next)
  }, [])

  return (
    <ThemeContext.Provider value={{ activeTheme, setActiveTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeConfig() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useThemeConfig must be used within an ActiveThemeProvider")
  }
  return context
}
