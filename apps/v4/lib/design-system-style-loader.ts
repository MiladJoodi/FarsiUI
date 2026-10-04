/**
 * Picker design-system CSS is shipped eagerly with the app shell.
 * These helpers stay as a sync API so call sites can keep a uniform shape.
 */

import {
  DESIGN_SYSTEM_IDS,
  type DesignSystemCookieId,
} from "@/lib/design-system"

export type LoadableDesignSystemId = DesignSystemCookieId

const loaded = new Set<LoadableDesignSystemId>(DESIGN_SYSTEM_IDS)

export function isDesignSystemStyleLoaded(id: LoadableDesignSystemId) {
  return loaded.has(id)
}

export function markDesignSystemStyleLoaded(id: LoadableDesignSystemId) {
  loaded.add(id)
}

/** No-op resolve — shell already imported every picker chunk. */
export function loadDesignSystemStyle(
  _id: LoadableDesignSystemId
): Promise<void> {
  return Promise.resolve()
}

/** No-op — nothing left to prefetch. */
export function prefetchDesignSystemStyles(
  _except?: LoadableDesignSystemId
): void {}

/** No-op — nothing left to prefetch. */
export function schedulePrefetchDesignSystemStyles(
  _except?: LoadableDesignSystemId
): void {}

/** Kept for call-site compatibility; all picker styles are already loaded. */
export function markDefaultDesignSystemStyleLoaded() {
  loaded.add("default")
}
