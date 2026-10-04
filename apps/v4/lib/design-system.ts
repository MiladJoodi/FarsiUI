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
 * Blocking bootstrap: class on body + cookie sync so the next request can
 * server-include the matching CSS chunk (avoids unstyled first paint).
 */
export const DESIGN_SYSTEM_BOOTSTRAP_SCRIPT = `
  try {
    var key = '${DESIGN_SYSTEM_STORAGE_KEY}';
    var ds = localStorage.getItem(key) || 'default';
    if (ds === 'aether') { ds = 'glass'; localStorage.setItem(key, ds); }
    var map = { default: 'style-nova', comfort: 'style-vega', glass: 'style-glass', rose: 'style-rose', nili: 'style-nili', khesht: 'style-khesht' };
    if (!map[ds]) ds = 'default';
    document.cookie = '${DESIGN_SYSTEM_COOKIE}=' + ds + ';path=/;max-age=31536000;samesite=lax';
    var styleClass = map[ds];
    var applyStyle = function () {
      var body = document.body;
      if (!body) return;
      Array.prototype.slice.call(body.classList).forEach(function (c) {
        if (c.indexOf('style-') === 0) body.classList.remove(c);
      });
      body.classList.add(styleClass);
    };
    if (document.body) applyStyle();
    else document.addEventListener('DOMContentLoaded', applyStyle);
  } catch (_) {}
`

/** Server: import CSS for the cookie-selected design system (nova already in shell). */
export async function importDesignSystemChunk(
  id: DesignSystemCookieId
): Promise<void> {
  switch (id) {
    case "comfort":
      await import("@/app/styles/chunk-vega.css")
      return
    case "glass":
      await import("@/app/styles/chunk-glass.css")
      return
    case "rose":
      await import("@/app/styles/chunk-rose.css")
      return
    case "nili":
      await import("@/app/styles/chunk-nili.css")
      return
    case "khesht":
      await import("@/app/styles/chunk-khesht.css")
      return
    case "default":
    default:
      return
  }
}
