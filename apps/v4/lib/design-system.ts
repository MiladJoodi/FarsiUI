/**
 * Shared design-system ids + cookie/localStorage sync for SSR CSS and client picker.
 */

export const DESIGN_SYSTEM_STORAGE_KEY = "design-system-preview"
export const DESIGN_SYSTEM_COOKIE = "design-system-preview"

export const DESIGN_SYSTEM_IDS = [
  "default",
  "comfort",
  "glass",
  "rose",
  "nili",
  "khesht",
] as const

export type DesignSystemCookieId = (typeof DESIGN_SYSTEM_IDS)[number]

export const DESIGN_SYSTEM_STYLE_CLASS: Record<DesignSystemCookieId, string> = {
  default: "style-nova",
  comfort: "style-vega",
  glass: "style-glass",
  rose: "style-rose",
  nili: "style-nili",
  khesht: "style-khesht",
}

export function normalizeDesignSystemId(
  value: string | null | undefined
): DesignSystemCookieId {
  if (!value) return "default"
  const id = value === "aether" ? "glass" : value
  return (DESIGN_SYSTEM_IDS as readonly string[]).includes(id)
    ? (id as DesignSystemCookieId)
    : "default"
}

/** Persist choice for SSR (cookie) + client restore (localStorage). */
export function persistDesignSystemId(id: DesignSystemCookieId) {
  if (typeof document === "undefined") return
  try {
    window.localStorage.setItem(DESIGN_SYSTEM_STORAGE_KEY, id)
    document.cookie = `${DESIGN_SYSTEM_COOKIE}=${id};path=/;max-age=31536000;samesite=lax`
  } catch {
    // Ignore quota / private mode.
  }
}

/**
 * Blocking bootstrap for first child of body — no DOMContentLoaded.
 * Prefers localStorage, then document.cookie; applies style-* immediately.
 */
export const DESIGN_SYSTEM_BOOTSTRAP_SCRIPT = `
  try {
    var key = '${DESIGN_SYSTEM_STORAGE_KEY}';
    var cookieName = '${DESIGN_SYSTEM_COOKIE}';
    var fromCookie = (document.cookie.match(new RegExp('(?:^|; )' + cookieName + '=([^;]*)')) || [])[1];
    var ds = localStorage.getItem(key) || (fromCookie ? decodeURIComponent(fromCookie) : '') || 'default';
    if (ds === 'aether') { ds = 'glass'; localStorage.setItem(key, ds); }
    var map = { default: 'style-nova', comfort: 'style-vega', glass: 'style-glass', rose: 'style-rose', nili: 'style-nili', khesht: 'style-khesht' };
    if (!map[ds]) ds = 'default';
    document.cookie = cookieName + '=' + ds + ';path=/;max-age=31536000;samesite=lax';
    try { localStorage.setItem(key, ds); } catch (_) {}
    var styleClass = map[ds];
    var body = document.body;
    if (body) {
      Array.prototype.slice.call(body.classList).forEach(function (c) {
        if (c.indexOf('style-') === 0) body.classList.remove(c);
      });
      body.classList.add(styleClass);
    }
  } catch (_) {}
`
