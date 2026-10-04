/**
 * Active (primary) color theme — cookie/localStorage sync for SSR + bootstrap.
 */

export const ACTIVE_THEME_STORAGE_KEY = "active-theme"
export const ACTIVE_THEME_COOKIE = "active-theme"
export const DEFAULT_ACTIVE_THEME = "neutral"

/** Themes that may appear on body as theme-{name}. */
const KNOWN_THEMES = new Set([
  "neutral",
  "blue",
  "green",
  "orange",
  "red",
  "rose",
  "violet",
  "yellow",
  "default",
])

export function normalizeActiveTheme(
  value: string | null | undefined
): string {
  if (!value) return DEFAULT_ACTIVE_THEME
  if (value === "default") return DEFAULT_ACTIVE_THEME
  if (KNOWN_THEMES.has(value) || value.endsWith("-scaled")) return value
  return DEFAULT_ACTIVE_THEME
}

/** Persist for SSR (cookie) + client restore (localStorage). */
export function persistActiveTheme(theme: string) {
  if (typeof document === "undefined") return
  const next = normalizeActiveTheme(theme)
  try {
    window.localStorage.setItem(ACTIVE_THEME_STORAGE_KEY, next)
    document.cookie = `${ACTIVE_THEME_COOKIE}=${next};path=/;max-age=31536000;samesite=lax`
  } catch {
    // Ignore quota / private mode.
  }
}

/**
 * Blocking bootstrap for first child of body — no DOMContentLoaded.
 * Prefers localStorage, then document.cookie; applies theme-* immediately.
 */
export const ACTIVE_THEME_BOOTSTRAP_SCRIPT = `
  try {
    var key = '${ACTIVE_THEME_STORAGE_KEY}';
    var cookieName = '${ACTIVE_THEME_COOKIE}';
    var fromCookie = (document.cookie.match(new RegExp('(?:^|; )' + cookieName + '=([^;]*)')) || [])[1];
    var theme = localStorage.getItem(key) || (fromCookie ? decodeURIComponent(fromCookie) : '') || '${DEFAULT_ACTIVE_THEME}';
    if (theme === 'default') theme = '${DEFAULT_ACTIVE_THEME}';
    document.cookie = cookieName + '=' + theme + ';path=/;max-age=31536000;samesite=lax';
    try { localStorage.setItem(key, theme); } catch (_) {}
    var body = document.body;
    if (body) {
      Array.prototype.slice.call(body.classList).forEach(function (c) {
        if (c.indexOf('theme-') === 0) body.classList.remove(c);
      });
      body.classList.add('theme-' + theme);
      if (theme.indexOf('-scaled') !== -1) body.classList.add('theme-scaled');
    }
  } catch (_) {}
`
