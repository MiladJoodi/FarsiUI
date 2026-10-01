"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"

const DEFAULT_THEME = "neutral"
const STORAGE_KEY = "active-theme"

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
  const [activeTheme, setActiveThemeState] = useState<string>(
    () => initialTheme || DEFAULT_THEME
  )
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME
    setActiveThemeState(stored === "default" ? DEFAULT_THEME : stored)
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    applyThemeClass(activeTheme)
    window.localStorage.setItem(STORAGE_KEY, activeTheme)
  }, [activeTheme, hydrated])

  const setActiveTheme = useCallback((theme: string) => {
    setActiveThemeState(theme === "default" ? DEFAULT_THEME : theme)
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
