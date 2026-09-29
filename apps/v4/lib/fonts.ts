import type { CSSProperties } from "react"
import {
  Estedad,
  Geist_Mono as FontMono,
  Noto_Sans_Hebrew as FontNotoSansHebrew,
  Vazirmatn,
} from "next/font/google"
import { cn } from "cn"

/**
 * Change this to set the UI font for the whole docs site.
 * Options: "estedad" | "vazirmatn"
 */
export type UiFontName = "estedad" | "vazirmatn"
export const ACTIVE_UI_FONT: UiFontName = "estedad"

const fontEstedad = Estedad({
  subsets: ["arabic", "latin"],
  variable: "--font-estedad",
  // Next has no size-adjust metrics for Estedad (Arabic); skip fallback generation.
  adjustFontFallback: false,
})

const fontVazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  adjustFontFallback: false,
})

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400"],
  // Avoid Next's size-adjusted fallback claiming Arabic glyphs and blocking Persian fonts.
  adjustFontFallback: false,
})

const fontNotoSansHebrew = FontNotoSansHebrew({
  subsets: ["latin"],
  variable: "--font-he",
})

const uiFontVariable: Record<UiFontName, string> = {
  estedad: "--font-estedad",
  vazirmatn: "--font-vazirmatn",
}

const activeFontVar = uiFontVariable[ACTIVE_UI_FONT]

/** Applied on <html> so --font-sans / --font-heading / code follow ACTIVE_UI_FONT. */
export const activeUiFontStyle = {
  "--font-sans": `var(${activeFontVar})`,
  "--font-heading": `var(${activeFontVar})`,
  "--font-ar": `var(${activeFontVar})`,
  // Latin/code → Geist Mono (Persian in code is wrapped with .code-fa → --font-sans).
  "--font-mono": `var(--font-geist-mono)`,
} as CSSProperties

export const fontVariables = cn(
  fontEstedad.variable,
  fontVazirmatn.variable,
  fontMono.variable,
  fontNotoSansHebrew.variable
)
