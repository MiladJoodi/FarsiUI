"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
  type ReactNode,
} from "react"

import {
  DEFAULT_UI_FONT,
  getUiFontStyle,
  isUiFontId,
  normalizeUiFontId,
  persistUiFontId,
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

  document.querySelectorAll("iframe").forEach((iframe) => {
    try {
      const root = iframe.contentDocument?.documentElement
      if (root) applyUiFontStyle(root, fontId)
    } catch {
      // Ignore cross-origin frames.
    }
  })
}

export function FontPreviewProvider({
  children,
  initialFontId,
}: {
  children: ReactNode
  initialFontId?: UiFontId
}) {
  const bootId = initialFontId ?? DEFAULT_UI_FONT
  const [fontId, setFontIdState] = useState<UiFontId>(bootId)
  const [hydrated, setHydrated] = useState(false)

  useLayoutEffect(() => {
    const stored = window.localStorage.getItem(UI_FONT_STORAGE_KEY)
    const next = normalizeUiFontId(stored)
    setFontIdState(next)
    persistUiFontId(next)
    applyUiFontToDocument(next)
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    persistUiFontId(fontId)
    applyUiFontToDocument(fontId)
  }, [fontId, hydrated])

  const setFontId = useCallback((id: UiFontId) => {
    if (!isUiFontId(id)) return
    persistUiFontId(id)
    applyUiFontToDocument(id)
    setFontIdState(id)
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
