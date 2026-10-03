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
  if (lang.startsWith("fa")) {
    return true
  }

  const dir = options.dir ?? ""
  // RTL without an explicit non-Persian lang (common in FarsiUI demos).
  if (dir === "rtl" && (!lang || lang.startsWith("fa"))) {
    return true
  }

  return false
}

export function readLocaleContext(
  element: HTMLElement | null,
  props: { dir?: string; lang?: string }
): { dir: string | null; lang: string | null } {
  const dir =
    props.dir ??
    element?.closest("[dir]")?.getAttribute("dir") ??
    (typeof document !== "undefined"
      ? document.documentElement.getAttribute("dir")
      : null)

  const lang =
    props.lang ??
    element?.closest("[lang]")?.getAttribute("lang") ??
    (typeof document !== "undefined"
      ? document.documentElement.getAttribute("lang")
      : null)

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
