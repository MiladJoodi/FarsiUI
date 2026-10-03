/** Shared Persian ↔ Latin digit helpers for FarsiUI inputs and display. */

const PERSIAN_DIGITS = "۰۱۲۳۴۵۶۷۸۹"

export type PersianDigitsMode = boolean | "auto"

/** Convert ASCII digits (and normalize Arabic-Indic / Persian) to Persian digits. */
export function toPersianDigits(value: string | number): string {
  return toLatinDigits(String(value)).replace(
    /\d/g,
    (digit) => PERSIAN_DIGITS[Number(digit)]!
  )
}

/** Convert Persian (۰-۹) and Arabic-Indic (٠-٩) digits to ASCII Latin digits. */
export function toLatinDigits(value: string): string {
  return value
    .replace(/[۰-۹]/g, (digit) => String(digit.charCodeAt(0) - 0x06f0))
    .replace(/[٠-٩]/g, (digit) => String(digit.charCodeAt(0) - 0x0660))
}

/** Alias used by iran-validation skill / numeric fields. */
export function normalizeIranianDigits(value: string): string {
  return toLatinDigits(value)
}

export function isNumericInputHint(type?: string, inputMode?: string): boolean {
  if (inputMode === "numeric" || inputMode === "decimal") {
    return true
  }
  return type === "number" || type === "tel"
}

export function isPersianLocaleContext(options: {
  dir?: string | null
  lang?: string | null
}): boolean {
  const lang = (options.lang ?? "").toLowerCase()

  // Explicit English / LTR latin locale → keep ASCII digits.
  if (lang.startsWith("en")) {
    return false
  }

  // Persian (and FarsiUI's RTL preview languages mapped as ar/he).
  if (
    lang.startsWith("fa") ||
    lang.startsWith("ar") ||
    lang.startsWith("he")
  ) {
    return true
  }

  // Bare RTL (no lang on the dir boundary) → Persian digits for FarsiUI.
  return (options.dir ?? "") === "rtl"
}

export function readLocaleContext(
  element: HTMLElement | null,
  props: { dir?: string; lang?: string }
): { dir: string | null; lang: string | null } {
  // Explicit Input props win. Do not merge with <html lang="en">, which would
  // incorrectly disable Persian digits inside RTL containers.
  if (props.dir != null || props.lang != null) {
    return {
      dir: props.dir ?? null,
      lang: props.lang ?? null,
    }
  }

  let dir: string | null = null
  let lang: string | null = null

  let node: HTMLElement | null = element
  while (node) {
    if (!lang) {
      lang = node.getAttribute("lang") || node.getAttribute("data-lang")
    }

    if (!dir && node.hasAttribute("dir")) {
      dir = node.getAttribute("dir")
      if (!lang) {
        lang = node.getAttribute("lang") || node.getAttribute("data-lang")
      }
      // Stop at the nearest dir boundary so documentElement lang="en"
      // does not override an RTL preview/container.
      break
    }

    if (dir && lang) {
      break
    }

    node = node.parentElement
  }

  if (!dir && typeof document !== "undefined") {
    dir = document.documentElement.getAttribute("dir")
  }

  return { dir, lang }
}

export function resolvePersianDigitsEnabled(options: {
  persianDigits?: PersianDigitsMode
  type?: string
  inputMode?: string
  dir?: string | null
  lang?: string | null
}): boolean {
  const { persianDigits = "auto", type, inputMode, dir, lang } = options

  if (persianDigits === true) {
    return true
  }
  if (persianDigits === false) {
    return false
  }

  if (!isNumericInputHint(type, inputMode)) {
    return false
  }

  return isPersianLocaleContext({ dir, lang })
}
