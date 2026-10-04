/**
 * Lazy-load design-system CSS chunks used by the Header picker.
 * Default (nova) is shipped with the app shell; others load on demand.
 */

export type LoadableDesignSystemId =
  | "default"
  | "comfort"
  | "glass"
  | "rose"

const loaded = new Set<LoadableDesignSystemId>()
const inflight = new Map<LoadableDesignSystemId, Promise<void>>()

const LOADERS: Record<LoadableDesignSystemId, () => Promise<unknown>> = {
  default: () => import("@/app/styles/chunk-nova.css"),
  comfort: () => import("@/app/styles/chunk-vega.css"),
  glass: () => import("@/app/styles/chunk-glass.css"),
  rose: () => import("@/app/styles/chunk-rose.css"),
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

/** Prefetch every picker style except the active one (e.g. when picker opens). */
export function prefetchDesignSystemStyles(
  except?: LoadableDesignSystemId
): void {
  for (const id of Object.keys(LOADERS) as LoadableDesignSystemId[]) {
    if (id === except || loaded.has(id)) continue
    void loadDesignSystemStyle(id)
  }
}

/** Mark default as loaded when the shell already imported chunk-nova. */
export function markDefaultDesignSystemStyleLoaded() {
  loaded.add("default")
}
