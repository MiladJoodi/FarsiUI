import type { CSSProperties } from "react"
import {
  Lalezar,
  Markazi_Text,
  Noto_Kufi_Arabic,
  Noto_Sans_Arabic,
  Vazirmatn,
} from "next/font/google"
import localFont from "next/font/local"
import { cn } from "cn"

/**
 * Runtime UI font options for the docs site font switcher.
 * Estedad is self-hosted (not on Google Fonts); the rest come from next/font/google.
 */
export const UI_FONTS = [
  {
    id: "vazirmatn",
    label: "وزیرمتن",
    cssVar: "--font-vazirmatn",
  },
  {
    id: "estedad",
    label: "استعداد",
    cssVar: "--font-estedad",
  },
  {
    id: "noto-sans-arabic",
    label: "نوتو سنس عربی",
    cssVar: "--font-noto-sans-arabic",
  },
  {
    id: "noto-kufi-arabic",
    label: "نوتو کوفی عربی",
    cssVar: "--font-noto-kufi-arabic",
  },
  {
    id: "lalezar",
    label: "لاله‌زار",
    cssVar: "--font-lalezar",
  },
  {
    id: "markazi-text",
    label: "مرکزی تکست",
    cssVar: "--font-markazi-text",
  },
] as const

export type UiFontId = (typeof UI_FONTS)[number]["id"]

export const DEFAULT_UI_FONT: UiFontId = "vazirmatn"
export const UI_FONT_STORAGE_KEY = "ui-font-preview"

export function isUiFontId(value: string): value is UiFontId {
  return UI_FONTS.some((font) => font.id === value)
}

export function getUiFontCssVar(fontId: UiFontId) {
  return (
    UI_FONTS.find((font) => font.id === fontId)?.cssVar ??
    UI_FONTS[0].cssVar
  )
}

/** Inline style values for --font-sans / heading / ar / he. */
export function getUiFontStyle(fontId: UiFontId = DEFAULT_UI_FONT): CSSProperties {
  const cssVar = getUiFontCssVar(fontId)
  return {
    "--font-sans": `var(${cssVar})`,
    "--font-heading": `var(${cssVar})`,
    "--font-ar": `var(${cssVar})`,
    "--font-he": `var(${cssVar})`,
    "--font-mono": "var(--font-geist-mono)",
  } as CSSProperties
}

const fontVazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
  adjustFontFallback: false,
})

const fontEstedad = localFont({
  src: "../app/fonts/estedad-wght.woff2",
  variable: "--font-estedad",
  weight: "100 900",
  display: "swap",
  adjustFontFallback: false,
})

const fontNotoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic", "latin"],
  variable: "--font-noto-sans-arabic",
  display: "swap",
  adjustFontFallback: false,
})

const fontNotoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic", "latin"],
  variable: "--font-noto-kufi-arabic",
  display: "swap",
  adjustFontFallback: false,
})

const fontLalezar = Lalezar({
  subsets: ["arabic", "latin"],
  weight: "400",
  variable: "--font-lalezar",
  display: "swap",
  adjustFontFallback: false,
})

const fontMarkaziText = Markazi_Text({
  subsets: ["arabic", "latin"],
  variable: "--font-markazi-text",
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

/** Default SSR style before client hydration / localStorage. */
export const activeUiFontStyle = getUiFontStyle(DEFAULT_UI_FONT)

export const fontVariables = cn(
  fontVazirmatn.variable,
  fontEstedad.variable,
  fontNotoSansArabic.variable,
  fontNotoKufiArabic.variable,
  fontLalezar.variable,
  fontMarkaziText.variable,
  fontMono.variable
)

/** Inline script: apply saved font before paint to avoid FOUC. */
export const UI_FONT_BOOTSTRAP_SCRIPT = `
  try {
    var fontMap = {
      vazirmatn: '--font-vazirmatn',
      estedad: '--font-estedad',
      'noto-sans-arabic': '--font-noto-sans-arabic',
      'noto-kufi-arabic': '--font-noto-kufi-arabic',
      lalezar: '--font-lalezar',
      'markazi-text': '--font-markazi-text'
    };
    var font = localStorage.getItem('${UI_FONT_STORAGE_KEY}') || '${DEFAULT_UI_FONT}';
    var cssVar = fontMap[font] || fontMap['${DEFAULT_UI_FONT}'];
    var root = document.documentElement;
    root.style.setProperty('--font-sans', 'var(' + cssVar + ')');
    root.style.setProperty('--font-heading', 'var(' + cssVar + ')');
    root.style.setProperty('--font-ar', 'var(' + cssVar + ')');
    root.style.setProperty('--font-he', 'var(' + cssVar + ')');
  } catch (_) {}
`
