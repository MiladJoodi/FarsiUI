/** Current site color mode from the live `<html>` class. */
export function getDocumentColorMode(): "dark" | "light" {
  if (typeof document === "undefined") return "light"
  return document.documentElement.classList.contains("dark") ? "dark" : "light"
}

/** Append `?mode=dark|light` (or `&mode=`) so `/view` matches the opener. */
export function withViewColorMode(
  href: string,
  mode: "dark" | "light" = getDocumentColorMode()
) {
  const join = href.includes("?") ? "&" : "?"
  return `${href}${join}mode=${mode}`
}

export function applyDocumentColorMode(mode: "dark" | "light") {
  if (typeof document === "undefined") return
  const root = document.documentElement
  root.classList.remove("light", "dark")
  root.classList.add(mode)
  root.style.colorScheme = mode
  try {
    localStorage.setItem("theme", mode)
  } catch {
    // Ignore private mode.
  }
}
