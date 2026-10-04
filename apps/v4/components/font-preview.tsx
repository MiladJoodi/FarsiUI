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
  DEFAULT_UI_FONT,
  getUiFontStyle,
  isUiFontId,
  UI_FONT_STORAGE_KEY,
  UI_FONTS,
  type UiFontId,
} from "@/lib/fonts"

type FontPreviewContextType = {
  fontId: UiFontId
  setFontId: (id: UiFontId) => void
  fonts: typeof UI_FONTS
}

const FontPreviewContext = createContext<FontPreviewContextType | undefined>(
  undefined
)

function applyUiFontStyle(target: HTMLElement, fontId: UiFontId) {
  const style = getUiFontStyle(fontId)
  for (const [key, value] of Object.entries(style)) {
    if (typeof value === "string") {
      target.style.setProperty(key, value)
    }
  }
}

function applyUiFontToDocument(fontId: UiFontId) {
  applyUiFontStyle(document.documentElement, fontId)

  // Same-origin preview iframes (blocks /view) inherit family vars too.
  document.querySelectorAll("iframe").forEach((iframe) => {
    try {
      const root = iframe.contentDocument?.documentElement
      if (root) applyUiFontStyle(root, fontId)
    } catch {
      // Ignore cross-origin frames.
    }
  })
}

export function FontPreviewProvider({ children }: { children: ReactNode }) {
  const [fontId, setFontIdState] = useState<UiFontId>(DEFAULT_UI_FONT)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem(UI_FONT_STORAGE_KEY)
    if (stored && isUiFontId(stored)) {
      setFontIdState(stored)
      applyUiFontToDocument(stored)
    } else {
      applyUiFontToDocument(DEFAULT_UI_FONT)
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    window.localStorage.setItem(UI_FONT_STORAGE_KEY, fontId)
    applyUiFontToDocument(fontId)
  }, [fontId, hydrated])

  const setFontId = useCallback((id: UiFontId) => {
    if (isUiFontId(id)) {
      setFontIdState(id)
    }
  }, [])

  return (
    <FontPreviewContext.Provider
      value={{
        fontId,
        setFontId,
        fonts: UI_FONTS,
      }}
    >
      {children}
    </FontPreviewContext.Provider>
  )
}

export function useFontPreview() {
  const context = useContext(FontPreviewContext)
  if (context === undefined) {
    throw new Error("useFontPreview must be used within a FontPreviewProvider")
  }
  return context
}
