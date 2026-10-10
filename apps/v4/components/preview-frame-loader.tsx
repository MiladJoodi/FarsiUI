import { cn } from "cn"

/** True after iframe navigated past about:blank (safe to call from `load`). */
export function isPreviewIframeReady(iframe: HTMLIFrameElement | null) {
  if (!iframe) return false
  try {
    const href = iframe.contentWindow?.location?.href ?? ""
    return Boolean(href && href !== "about:blank")
  } catch {
    // Cross-origin after a real navigation — trust the load event.
    return true
  }
}

/** Soft continuous spinner while iframe previews hydrate. */
export function PreviewFrameLoader({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex size-full items-center justify-center bg-muted/25",
        className
      )}
      aria-busy="true"
      aria-live="polite"
    >
      <span
        className="size-5 rounded-full border-2 border-muted-foreground/20 border-t-muted-foreground/70 animate-[preview-spin_0.8s_linear_infinite]"
        aria-hidden
      />
      <span className="sr-only">در حال بارگذاری پیش‌نمایش</span>
    </div>
  )
}
