"use client"

import * as React from "react"
import { cn } from "cn"

import { CopyButton } from "@/components/copy-button"
import { Button } from "@/registry/new-york-v4/ui/button"

export type VariantPreviewItem = {
  name: string
  label: string
  code: string
  highlightedCode: string
  direction?: "ltr" | "rtl"
}

export function ComponentVariantPreviewClient({
  items,
  children,
}: {
  items: VariantPreviewItem[]
  children: React.ReactNode
}) {
  const [selected, setSelected] = React.useState(items[0]?.name ?? "")
  const [codeOpen, setCodeOpen] = React.useState(false)
  const previews = React.Children.toArray(children)
  const selectedIndex = Math.max(
    0,
    items.findIndex((item) => item.name === selected)
  )
  const active = items[selectedIndex] ?? items[0]

  if (!active) {
    return null
  }

  return (
    <div
      data-slot="component-preview"
      data-not-typeset
      className="group relative mt-4 mb-12 flex flex-col overflow-hidden rounded-2xl border"
    >
      <div data-slot="preview">
        <div className="preview relative flex min-h-72 w-full flex-wrap items-center justify-center gap-3 p-8 sm:gap-4 sm:p-10">
          {items.map((item, index) => {
            const isActive = item.name === active.name
            return (
              <div
                key={item.name}
                role="button"
                tabIndex={0}
                aria-pressed={isActive}
                aria-label={item.label}
                title={item.label}
                dir={item.direction ?? "ltr"}
                onClick={() => setSelected(item.name)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault()
                    setSelected(item.name)
                  }
                }}
                className={cn(
                  "cursor-pointer rounded-xl p-1 outline-none transition-shadow",
                  "focus-visible:ring-2 focus-visible:ring-ring",
                  isActive && "ring-2 ring-ring ring-offset-2 ring-offset-background"
                )}
              >
                <div className="pointer-events-none">{previews[index]}</div>
              </div>
            )
          })}
        </div>
      </div>

      <div
        data-slot="code"
        data-mobile-code-visible={codeOpen}
        className="relative overflow-hidden **:data-[slot=copy-button]:right-4 **:data-[slot=copy-button]:hidden data-[mobile-code-visible=true]:**:data-[slot=copy-button]:flex [&_[data-rehype-pretty-code-figure]]:m-0! [&_[data-rehype-pretty-code-figure]]:rounded-t-none [&_[data-rehype-pretty-code-figure]]:border-t [&_pre]:max-h-72"
      >
        {codeOpen ? (
          <div dir="ltr" className="relative">
            <figure
              data-rehype-pretty-code-figure=""
              className="m-0! rounded-t-none border-t [&_pre]:max-h-72"
            >
              <figcaption
                data-rehype-pretty-code-title=""
                className="flex items-center justify-between gap-2 text-code-foreground"
              >
                <span>{active.label}</span>
              </figcaption>
              <CopyButton value={active.code} />
              <div
                data-not-typeset
                dangerouslySetInnerHTML={{ __html: active.highlightedCode }}
              />
            </figure>
          </div>
        ) : (
          <div className="relative" dir="ltr">
            <figure
              data-rehype-pretty-code-figure=""
              className="pointer-events-none m-0! select-none rounded-t-none border-t opacity-60 [&_pre]:max-h-24 [&_pre]:overflow-hidden"
            >
              <div
                data-not-typeset
                dangerouslySetInnerHTML={{ __html: active.highlightedCode }}
              />
            </figure>
            <div className="absolute inset-0 flex items-center justify-center pb-4">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, var(--color-code), color-mix(in oklab, var(--color-code) 60%, transparent), transparent)",
                }}
              />
              <Button
                type="button"
                size="sm"
                variant="outline"
                className="relative z-10 rounded-lg bg-background text-foreground shadow-none hover:bg-muted dark:bg-background dark:text-foreground dark:hover:bg-muted"
                onClick={() => setCodeOpen(true)}
              >
                مشاهده کد
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
