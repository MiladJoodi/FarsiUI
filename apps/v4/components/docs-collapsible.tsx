"use client"
import { ChevronDown } from "lucide-react"

import * as React from "react"
import { cn } from "cn"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/new-york-v4/ui/collapsible"

function getHashId() {
  if (typeof window === "undefined") return ""
  return decodeURIComponent(window.location.hash.replace(/^#/, ""))
}

export function DocsCollapsible({
  title,
  defaultOpen = false,
  children,
  className,
}: {
  title: string
  defaultOpen?: boolean
  children: React.ReactNode
  className?: string
}) {
  const rootRef = React.useRef<HTMLDivElement>(null)
  const headingRef = React.useRef<HTMLHeadingElement>(null)
  const [open, setOpen] = React.useState(defaultOpen)
  const [anchorId, setAnchorId] = React.useState<string | null>(null)

  // Hidden ## headings feed the TOC, but display:none blocks hash scroll.
  // Move their id onto the visible title so TOC links and observers work.
  React.useLayoutEffect(() => {
    const prev = rootRef.current?.previousElementSibling
    if (!(prev instanceof HTMLElement) || !prev.classList.contains("hidden")) {
      return
    }

    const hiddenHeading = prev.querySelector("h1, h2, h3, h4, h5, h6")
    if (!(hiddenHeading instanceof HTMLElement) || !hiddenHeading.id) {
      return
    }

    const id = hiddenHeading.id
    hiddenHeading.removeAttribute("id")
    if (headingRef.current) {
      headingRef.current.id = id
    }
    setAnchorId(id)
  }, [])

  React.useEffect(() => {
    if (!anchorId) return

    const syncFromHash = () => {
      if (getHashId() !== anchorId) return
      setOpen(true)
      requestAnimationFrame(() => {
        headingRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      })
    }

    syncFromHash()
    window.addEventListener("hashchange", syncFromHash)
    return () => window.removeEventListener("hashchange", syncFromHash)
  }, [anchorId])

  return (
    <div ref={rootRef} className={cn("not-typeset my-8", className)}>
      <Collapsible
        open={open}
        onOpenChange={setOpen}
        className="group/docs-collapsible"
      >
        <CollapsibleTrigger
          aria-label={`${title} — باز و بسته کردن`}
          className={cn(
            "flex w-full items-center gap-2 rounded-md py-1 text-start outline-none",
            "hover:opacity-80 focus-visible:ring-2 focus-visible:ring-ring"
          )}
        >
          <h2
            ref={headingRef}
            className="font-heading scroll-m-24 text-xl font-medium tracking-tight"
          >
            {title}
          </h2>
          <ChevronDown
            className={cn(
              "size-4 shrink-0 text-muted-foreground transition-transform duration-300 ease-out",
              "group-data-[state=open]/docs-collapsible:rotate-180"
            )}
            aria-hidden
          />
        </CollapsibleTrigger>
        <CollapsibleContent
          className={cn(
            "overflow-hidden",
            "data-[state=open]:animate-[docs-collapsible-down_300ms_ease-out]",
            "data-[state=closed]:animate-[docs-collapsible-up_250ms_ease-out]"
          )}
        >
          <div className="typeset pt-3">{children}</div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
