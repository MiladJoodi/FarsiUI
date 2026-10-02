"use client"

import * as React from "react"

function getScrollElement(doc: Document) {
  return (doc.scrollingElement as HTMLElement | null) ?? doc.documentElement
}

function canDocumentScroll(doc: Document) {
  const el = getScrollElement(doc)
  return el.scrollHeight > el.clientHeight + 1
}

function shouldPassScrollToParent(doc: Document, deltaY: number) {
  const el = getScrollElement(doc)
  if (!canDocumentScroll(doc)) return true
  const atTop = el.scrollTop <= 0
  const atBottom =
    el.scrollTop + el.clientHeight >= el.scrollHeight - 1
  const goingDown = deltaY > 0
  const goingUp = deltaY < 0
  return (goingDown && atBottom) || (goingUp && atTop)
}

function lockIframeScroll(iframe: HTMLIFrameElement, doc: Document) {
  const lock = !canDocumentScroll(doc)
  iframe.setAttribute("scrolling", lock ? "no" : "yes")
  doc.documentElement.style.overflow = lock ? "hidden" : ""
  doc.body.style.overflow = lock ? "hidden" : ""
}

/**
 * When the pointer is over a same-origin preview iframe, forward wheel/touch
 * scroll to the parent page once the iframe content cannot scroll further.
 * Fixes stuck page scrolling on mobile over the "مشاهده" preview.
 */
export function useIframeScrollPassthrough(
  iframeRef: React.RefObject<HTMLIFrameElement | null>,
  deps: React.DependencyList = []
) {
  React.useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    let detach: (() => void) | undefined
    let lastTouchY = 0
    let resizeObserver: ResizeObserver | undefined

    const attach = () => {
      detach?.()
      resizeObserver?.disconnect()
      const doc = iframe.contentDocument
      if (!doc) return

      const syncLock = () => lockIframeScroll(iframe, doc)
      syncLock()

      const onWheel = (event: WheelEvent) => {
        if (!shouldPassScrollToParent(doc, event.deltaY)) return
        event.preventDefault()
        window.scrollBy({ top: event.deltaY, left: event.deltaX })
      }

      const onTouchStart = (event: TouchEvent) => {
        lastTouchY = event.touches[0]?.clientY ?? 0
      }

      const onTouchMove = (event: TouchEvent) => {
        const y = event.touches[0]?.clientY ?? lastTouchY
        const deltaY = lastTouchY - y
        lastTouchY = y
        if (deltaY === 0) return
        if (!shouldPassScrollToParent(doc, deltaY)) return
        if (event.cancelable) event.preventDefault()
        window.scrollBy({ top: deltaY, left: 0 })
      }

      doc.addEventListener("wheel", onWheel, { passive: false })
      doc.addEventListener("touchstart", onTouchStart, { passive: true })
      doc.addEventListener("touchmove", onTouchMove, { passive: false })

      const win = iframe.contentWindow
      win?.addEventListener("resize", syncLock)
      if (typeof ResizeObserver !== "undefined") {
        resizeObserver = new ResizeObserver(syncLock)
        resizeObserver.observe(doc.documentElement)
        if (doc.body) resizeObserver.observe(doc.body)
      }

      detach = () => {
        doc.removeEventListener("wheel", onWheel)
        doc.removeEventListener("touchstart", onTouchStart)
        doc.removeEventListener("touchmove", onTouchMove)
        win?.removeEventListener("resize", syncLock)
        resizeObserver?.disconnect()
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
  }, deps)
}
