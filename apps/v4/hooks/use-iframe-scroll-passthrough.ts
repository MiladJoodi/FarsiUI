"use client"

import * as React from "react"

function getScrollElement(doc: Document) {
  return (doc.scrollingElement as HTMLElement | null) ?? doc.documentElement
}

function canElementScroll(el: HTMLElement) {
  return el.scrollHeight > el.clientHeight + 1
}

function canDocumentScroll(doc: Document) {
  return canElementScroll(getScrollElement(doc))
}

function isScrollableOverflow(style: CSSStyleDeclaration) {
  const y = style.overflowY
  return y === "auto" || y === "scroll" || y === "overlay"
}

/** Nearest scrollable ancestor under the event target (excluding the document). */
function getScrollableAncestor(
  target: EventTarget | null,
  doc: Document
): HTMLElement | null {
  if (!(target instanceof Element)) return null
  let node: Element | null = target
  const root = getScrollElement(doc)

  while (node && node !== root && node !== doc.body && node !== doc.documentElement) {
    if (node instanceof HTMLElement) {
      const style = doc.defaultView?.getComputedStyle(node)
      if (style && isScrollableOverflow(style) && canElementScroll(node)) {
        return node
      }
    }
    node = node.parentElement
  }
  return null
}

function shouldPassFromElement(el: HTMLElement, deltaY: number) {
  const atTop = el.scrollTop <= 0
  const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1
  return (deltaY > 0 && atBottom) || (deltaY < 0 && atTop)
}

function shouldPassScrollToParent(
  doc: Document,
  deltaY: number,
  target: EventTarget | null
) {
  const nested = getScrollableAncestor(target, doc)
  if (nested) return shouldPassFromElement(nested, deltaY)

  if (!canDocumentScroll(doc)) return true
  return shouldPassFromElement(getScrollElement(doc), deltaY)
}

export type IframeScrollPassthroughApi = {
  /** True until the user taps/clicks the preview to interact. */
  scrollShield: boolean
  dismissShield: () => void
}

/**
 * Block preview iframes trap wheel/touch even when their content does not scroll,
 * which freezes desktop scrolling and shakes mobile (synthetic scrollBy).
 *
 * Pattern:
 * - Default: a transparent shield over the iframe so the parent page scrolls natively.
 * - After click/tap: shield lifts so controls work; wheel is forwarded only at edges
 *   (desktop). Touch over a non-scrollable preview re-engages the shield so momentum
 *   stays native.
 */
export function useIframeScrollPassthrough(
  iframeRef: React.RefObject<HTMLIFrameElement | null>,
  deps: React.DependencyList = []
): IframeScrollPassthroughApi {
  const [scrollShield, setScrollShield] = React.useState(true)

  const dismissShield = React.useCallback(() => {
    setScrollShield(false)
  }, [])

  React.useEffect(() => {
    setScrollShield(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- reset when preview identity changes
  }, deps)

  React.useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    let detach: (() => void) | undefined

    const attach = () => {
      detach?.()
      const doc = iframe.contentDocument
      if (!doc) return

      // Keep document from fighting the parent when it fits the frame.
      const fit = !canDocumentScroll(doc)
      iframe.setAttribute("scrolling", fit ? "no" : "yes")
      doc.documentElement.style.overscrollBehaviorY = "contain"
      doc.body.style.overscrollBehaviorY = "contain"
      if (fit) {
        doc.documentElement.style.overflow = "hidden"
        doc.body.style.overflow = "hidden"
      } else {
        doc.documentElement.style.overflow = ""
        doc.body.style.overflow = ""
      }

      const onWheel = (event: WheelEvent) => {
        if (scrollShield) return
        if (!shouldPassScrollToParent(doc, event.deltaY, event.target)) return
        // Non-scrollable preview: drop interaction and let the next gestures hit the shield.
        if (!canDocumentScroll(doc) && !getScrollableAncestor(event.target, doc)) {
          setScrollShield(true)
          window.scrollBy({ top: event.deltaY, left: event.deltaX })
          return
        }
        event.preventDefault()
        window.scrollBy({ top: event.deltaY, left: event.deltaX })
      }

      const onTouchStart = () => {
        /* reserved for future edge chaining */
      }

      const onTouchMove = (event: TouchEvent) => {
        if (scrollShield) return
        // Avoid preventDefault on touch — it kills momentum and causes shake.
        // If the preview itself cannot consume the gesture, restore the shield.
        if (!canDocumentScroll(doc) && !getScrollableAncestor(event.target, doc)) {
          setScrollShield(true)
        }
      }

      doc.addEventListener("wheel", onWheel, { passive: false })
      doc.addEventListener("touchstart", onTouchStart, { passive: true })
      doc.addEventListener("touchmove", onTouchMove, { passive: true })

      detach = () => {
        doc.removeEventListener("wheel", onWheel)
        doc.removeEventListener("touchstart", onTouchStart)
        doc.removeEventListener("touchmove", onTouchMove)
      }
    }

    const onLoad = () => attach()
    iframe.addEventListener("load", onLoad)
    if (iframe.contentDocument?.readyState === "complete") {
      attach()
    }

    return () => {
      iframe.removeEventListener("load", onLoad)
      detach?.()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- caller controls refresh via deps
  }, [...deps, scrollShield])

  return { scrollShield, dismissShield }
}
