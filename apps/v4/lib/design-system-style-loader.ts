/**
 * Lazy-load design-system CSS chunks used by the Header picker.
 * Default (nova) is shipped with the app shell; others load on demand.
 * Active non-default styles are also imported from the root layout via cookie.
 */

import type { DesignSystemCookieId } from "@/lib/design-system"

export type LoadableDesignSystemId = DesignSystemCookieId

const loaded = new Set<LoadableDesignSystemId>()
const inflight = new Map<LoadableDesignSystemId, Promise<void>>()

const LOADERS: Record<LoadableDesignSystemId, () => Promise<unknown>> = {
  default: () => import("@/app/styles/chunk-nova.css"),
  comfort: () => import("@/app/styles/chunk-vega.css"),
  glass: () => import("@/app/styles/chunk-glass.css"),
  rose: () => import("@/app/styles/chunk-rose.css"),
  nili: () => import("@/app/styles/chunk-nili.css"),
  khesht: () => import("@/app/styles/chunk-khesht.css"),
}

export function isDesignSystemStyleLoaded(id: LoadableDesignSystemId) {
  return loaded.has(id)
}

export function markDesignSystemStyleLoaded(id: LoadableDesignSystemId) {
  loaded.add(id)
}

/** Ensure a design-system CSS chunk is loaded (idempotent). */
export function loadDesignSystemStyle(
  id: LoadableDesignSystemId
): Promise<void> {
  if (loaded.has(id)) return Promise.resolve()

  const existing = inflight.get(id)
  if (existing) return existing

  const promise = LOADERS[id]()
    .then(() => {
      loaded.add(id)
      inflight.delete(id)
    })
    .catch((error) => {
      inflight.delete(id)
      throw error
    })

  inflight.set(id, promise)
  return promise
}

/** Prefetch every picker style except the active one (parallel). */
export function prefetchDesignSystemStyles(
  except?: LoadableDesignSystemId
): void {
  for (const id of Object.keys(LOADERS) as LoadableDesignSystemId[]) {
    if (id === except || loaded.has(id)) continue
    void loadDesignSystemStyle(id)
  }
}

let prefetchScheduled = false

/**
 * Warm remaining design-system CSS soon after mount (parallel, short delay)
 * so opening pickers / switching styles stays snappy.
 */
export function schedulePrefetchDesignSystemStyles(
  except?: LoadableDesignSystemId
): void {
  if (typeof window === "undefined" || prefetchScheduled) return
  prefetchScheduled = true

  const run = () => prefetchDesignSystemStyles(except)

  if (typeof window.requestIdleCallback === "function") {
    window.requestIdleCallback(run, { timeout: 800 })
  } else {
    window.setTimeout(run, 100)
  }
}

/** Mark default as loaded when the shell already imported chunk-nova. */
export function markDefaultDesignSystemStyleLoaded() {
  loaded.add("default")
}
