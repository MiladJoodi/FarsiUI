/**
 * Lazy-load design-system CSS chunks used by the Header picker.
 * Default (nova) is shipped with the app shell; others load on demand.
 */

export type LoadableDesignSystemId =
  | "default"
  | "comfort"
  | "glass"
  | "rose"
  | "nili"
  | "khesht"

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

/** Prefetch every picker style except the active one (fire-and-forget). */
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
 * Prefetch remaining design-system CSS during idle time so opening the
 * select stays snappy (avoids injecting several large stylesheets on click).
 */
export function schedulePrefetchDesignSystemStyles(
  except?: LoadableDesignSystemId
): void {
  if (typeof window === "undefined" || prefetchScheduled) return
  prefetchScheduled = true

  const run = () => {
    const ids = (Object.keys(LOADERS) as LoadableDesignSystemId[]).filter(
      (id) => id !== except && !loaded.has(id)
    )

    let index = 0
    const next = () => {
      if (index >= ids.length) return
      const id = ids[index++]
      void loadDesignSystemStyle(id).finally(() => {
        if (typeof window.requestIdleCallback === "function") {
          window.requestIdleCallback(next, { timeout: 1500 })
        } else {
          window.setTimeout(next, 50)
        }
      })
    }

    next()
  }

  if (typeof window.requestIdleCallback === "function") {
    window.requestIdleCallback(run, { timeout: 2000 })
  } else {
    window.setTimeout(run, 250)
  }
}

/** Mark default as loaded when the shell already imported chunk-nova. */
export function markDefaultDesignSystemStyleLoaded() {
  loaded.add("default")
}
