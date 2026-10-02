import type { CSSProperties } from "react"
import localFont from "next/font/local"
import { cn } from "cn"

/**
 * Change this to set the UI font for the whole docs site.
 * Options: "estedad" | "vazirmatn" | "iransans"
 */
export type UiFontName = "estedad" | "vazirmatn" | "iransans"
export const ACTIVE_UI_FONT: UiFontName = "iransans"

// Self-hosted: next/font/google cannot reach fonts.googleapis.com on many networks.
const fontEstedad = localFont({
  src: "../app/fonts/estedad-wght.woff2",
  variable: "--font-estedad",
  weight: "100 900",
  display: "swap",
  adjustFontFallback: false,
})

const fontVazirmatn = localFont({
  src: "../app/fonts/vazirmatn-wght.woff2",
  variable: "--font-vazirmatn",
  weight: "100 900",
  display: "swap",
  adjustFontFallback: false,
})

/** IRANSansWeb FaNum — Bold only (copied from IRANSansWeb(FaNum)_Bold). */
const fontIranSans = localFont({
  src: [
    {
      path: "../app/fonts/iransans-fanum-bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../app/fonts/iransans-fanum-bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-iransans",
  display: "swap",
  adjustFontFallback: false,
})

const fontMono = localFont({
  src: "../app/fonts/geist-mono-400.woff2",
  variable: "--font-geist-mono",
  weight: "400",
  display: "swap",
  adjustFontFallback: false,
})

const uiFontVariable: Record<UiFontName, string> = {
  estedad: "--font-estedad",
  vazirmatn: "--font-vazirmatn",
  iransans: "--font-iransans",
}

const activeFontVar = uiFontVariable[ACTIVE_UI_FONT]

/** Applied on <html> so --font-sans / --font-heading / code follow ACTIVE_UI_FONT. */
export const activeUiFontStyle = {
  "--font-sans": `var(${activeFontVar})`,
  "--font-heading": `var(${activeFontVar})`,
  "--font-ar": `var(${activeFontVar})`,
  // Latin/code → Geist Mono (Persian in code is wrapped with .code-fa → --font-sans).
  "--font-mono": `var(--font-geist-mono)`,
  // Keep --font-he defined for any Hebrew surfaces without Google Fonts.
  "--font-he": `var(${activeFontVar})`,
} as CSSProperties

export const fontVariables = cn(
  fontEstedad.variable,
  fontVazirmatn.variable,
  fontIranSans.variable,
  fontMono.variable
)
