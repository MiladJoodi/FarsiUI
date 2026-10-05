const PERSIAN_DIGITS = "۰۱۲۳۴۵۶۷۸۹"

/** Protect URLs and emails inside free text from digit remapping. */
const PROTECTED_TEXT_RE =
  /https?:\/\/[^\s<>"']+|www\.[^\s<>"']+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g

const SKIP_TAGS = new Set([
  "CODE",
  "PRE",
  "KBD",
  "SAMP",
  "SCRIPT",
  "STYLE",
  "TEXTAREA",
  "INPUT",
  "SELECT",
  "OPTION",
])

export type PersianDigitsMode = boolean | "auto"
export type NumericLocale = "fa" | "en"

export type FormatPersianNumberOptions = {
  style?: "decimal" | "percent"
  useGrouping?: boolean
}

/**
 * Canonicalize digit characters to ASCII Latin digits.
 * Converts Persian (۰-۹) and Arabic-Indic (٠-٩) digits, maps ٫ → ., − → -.
 * Does not alter letters or other punctuation.
 */
export function normalizeDigits(value: string): string {
  return value
    .replace(/[۰-۹]/g, (digit) => String(digit.charCodeAt(0) - 0x06f0))
    .replace(/[٠-٩]/g, (digit) => String(digit.charCodeAt(0) - 0x0660))
    .replace(/\u066B/g, ".") // Arabic decimal separator
    .replace(/\u2212/g, "-") // minus sign
}

/** @deprecated Prefer normalizeDigits — kept for compatibility. */
export const toLatinDigits = normalizeDigits

/** Alias used by iran-validation skill / numeric fields. */
export function normalizeIranianDigits(value: string): string {
  return normalizeDigits(value)
}

/**
 * Map ASCII digits to Persian digits only (no grouping).
 * Safe for live Input typing / OTP characters.
 */
export function toPersianDigits(value: string | number): string {
  return normalizeDigits(String(value)).replace(
    /\d/g,
    (digit) => PERSIAN_DIGITS[Number(digit)]!
  )
}

/**
 * Convert Latin digits in Persian prose to Persian digits.
 * Leaves URL and email substrings unchanged.
 */
export function formatPersianText(text: string): string {
  const parts: string[] = []
  let lastIndex = 0

  for (const match of text.matchAll(PROTECTED_TEXT_RE)) {
    const start = match.index ?? 0
    if (start > lastIndex) {
      parts.push(toPersianDigits(text.slice(lastIndex, start)))
    }
    parts.push(match[0])
    lastIndex = start + match[0].length
  }

  if (lastIndex < text.length) {
    parts.push(toPersianDigits(text.slice(lastIndex)))
  }

  return parts.join("")
}

/** Tags / attributes that must keep Latin digits. */
export function shouldSkipPersianDigitsTag(tagName: string): boolean {
  return SKIP_TAGS.has(tagName.toUpperCase())
}

export function shouldSkipPersianDigitsProps(props: {
  dir?: string | null
  lang?: string | null
  "data-persian-digits"?: string | null
  "data-not-typeset"?: string | null
  contentEditable?: boolean | "true" | "false" | "plaintext-only"
}): boolean {
  // Explicit opt-out only — dir="ltr" does NOT disable Persian digits
  // (phone numbers stay LTR while showing ۰۹۱۲…).
  if (props["data-persian-digits"] === "false") {
    return true
  }
  if (props["data-not-typeset"] != null) {
    return true
  }
  if ((props.lang ?? "").toLowerCase().startsWith("en")) {
    return true
  }
  if (
    props.contentEditable === true ||
    props.contentEditable === "true" ||
    props.contentEditable === "plaintext-only"
  ) {
    return true
  }
  return false
}

/** DOM helper for walkers / tests. */
export function shouldSkipPersianDigitsNode(el: Element): boolean {
  if (shouldSkipPersianDigitsTag(el.tagName)) {
    return true
  }

  const props = {
    dir: el.getAttribute("dir"),
    lang: el.getAttribute("lang") || el.getAttribute("data-lang"),
    "data-persian-digits": el.getAttribute("data-persian-digits"),
    "data-not-typeset": el.getAttribute("data-not-typeset"),
    contentEditable: (el as HTMLElement).isContentEditable
      ? ("true" as const)
      : undefined,
  }

  return shouldSkipPersianDigitsProps(props)
}

/**
 * Presentation formatter for numeric labels (prices, counts, percentages).
 * Not for live Input typing (use toPersianDigits there to preserve caret).
 */
export function formatPersianNumber(
  value: number | string,
  options: FormatPersianNumberOptions = {}
): string {
  const { style = "decimal", useGrouping = true } = options
  const normalized =
    typeof value === "number" ? value : Number(normalizeDigits(String(value)))

  if (!Number.isFinite(normalized)) {
    return toPersianDigits(String(value))
  }

  return new Intl.NumberFormat("fa-IR", {
    style,
    useGrouping,
    maximumFractionDigits: style === "percent" ? 2 : 20,
  }).format(style === "percent" ? normalized / 100 : normalized)
}

/** Locale-aware number display helper. */
export function formatNumber(
  value: number | string,
  locale: NumericLocale = "fa",
  options: FormatPersianNumberOptions = {}
): string {
  if (locale === "en") {
    const { style = "decimal", useGrouping = true } = options
    const normalized =
      typeof value === "number" ? value : Number(normalizeDigits(String(value)))
    if (!Number.isFinite(normalized)) {
      return normalizeDigits(String(value))
    }
    return new Intl.NumberFormat("en-US", {
      style,
      useGrouping,
      maximumFractionDigits: style === "percent" ? 2 : 20,
    }).format(style === "percent" ? normalized / 100 : normalized)
  }

  return formatPersianNumber(value, options)
}

/**
 * Resolve display locale for numeric UI.
 * Priority: explicit locale → lang → FarsiUI default (fa).
 * Direction alone never forces Latin digits.
 */
export function resolveNumericLocale(options: {
  locale?: string | null
  lang?: string | null
  dir?: string | null
}): NumericLocale {
  const locale = (options.locale ?? "").toLowerCase()
  if (locale.startsWith("en")) {
    return "en"
  }
  if (locale.startsWith("fa")) {
    return "fa"
  }

  const lang = (options.lang ?? "").toLowerCase()
  if (lang.startsWith("en")) {
    return "en"
  }
  if (lang.startsWith("fa") || lang.startsWith("ar") || lang.startsWith("he")) {
    return "fa"
  }

  // Direction alone does not select Latin digits. FarsiUI defaults to Persian
  // unless English is explicit via locale/lang above.
  return "fa"
}

export function isPersianLocaleContext(options: {
  dir?: string | null
  lang?: string | null
  locale?: string | null
}): boolean {
  return resolveNumericLocale(options) === "fa"
}

/**
 * Semantic numeric inputs — NOT tel/email/password/text.
 * Used for FormData hidden-name behavior and number→text coercion.
 */
export function isNumericInputHint(type?: string, inputMode?: string): boolean {
  if (inputMode === "numeric" || inputMode === "decimal") {
    return true
  }
  return type === "number"
}

/**
 * Input types that must keep Latin digits (credentials / technical).
 * `tel` is NOT locked — phone numbers may show Persian digits with dir="ltr".
 */
export function isLatinLockedInputType(type?: string): boolean {
  switch (type) {
    case "email":
    case "password":
    case "url":
    case "file":
    case "hidden":
    case "checkbox":
    case "radio":
    case "button":
    case "submit":
    case "reset":
    case "image":
    case "color":
    case "range":
    case "date":
    case "datetime-local":
    case "month":
    case "week":
    case "time":
      return true
    default:
      return false
  }
}

export function readLocaleContext(
  element: HTMLElement | null,
  props: { dir?: string; lang?: string; locale?: string }
): { dir: string | null; lang: string | null; locale: string | null } {
  // Explicit locale/lang props win. A bare `dir` prop must NOT wipe inherited
  // lang — direction and digit style are independent (phone LTR + Persian).
  let dir: string | null = props.dir ?? null
  let lang: string | null = props.lang ?? null
  const locale: string | null = props.locale ?? null

  if (locale != null && lang != null && dir != null) {
    return { dir, lang, locale }
  }

  let node: HTMLElement | null = element
  while (node && (dir == null || lang == null)) {
    if (!lang) {
      lang = node.getAttribute("lang") || node.getAttribute("data-lang")
    }

    if (!dir && node.hasAttribute("dir")) {
      dir = node.getAttribute("dir")
    }

    if (dir && lang) {
      break
    }

    node = node.parentElement
  }

  // Prefer container dir over <html lang="en"> on English shell + RTL preview.
  if (!dir && typeof document !== "undefined") {
    dir = document.documentElement.getAttribute("dir")
  }

  return { dir, lang, locale }
}

/**
 * Whether a field should show Persian digits in the current locale.
 * Direction (`dir`) is independent of digit style — only explicit opt-out /
 * English locale / latin-locked input types disable conversion.
 */
export function resolvePersianDigitsEnabled(options: {
  persianDigits?: PersianDigitsMode
  type?: string
  inputMode?: string
  dir?: string | null
  lang?: string | null
  locale?: string | null
  "data-persian-digits"?: string | null
}): boolean {
  const { persianDigits = "auto", type, dir, lang, locale } = options

  if (options["data-persian-digits"] === "false") {
    return false
  }
  if (options["data-persian-digits"] === "true") {
    return true
  }

  if (persianDigits === true) {
    return true
  }
  if (persianDigits === false) {
    return false
  }

  if (isLatinLockedInputType(type)) {
    return false
  }

  return isPersianLocaleContext({ dir, lang, locale })
}
