"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { MenuIcon } from "lucide-react"
import { cn } from "cn"

import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/registry/new-york-v4/ui/sheet"

export function ListIndexNav({
  title = "فهرست",
  current,
  children,
  className,
}: {
  title?: string
  current?: string | null
  children: React.ReactNode
  className?: string
}) {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <div
        dir="rtl"
        lang="fa"
        data-list-index-nav=""
        className={cn(
          "sticky top-(--header-height) z-40 border-b border-border/80 bg-background/95 backdrop-blur-md transition-[top] duration-300 ease-out supports-backdrop-filter:bg-background/80 [[data-header-hidden]_&]:top-0 lg:hidden",
          className
        )}
      >
        <div className="container-wrapper px-4">
          <Button
            type="button"
            variant="ghost"
            onClick={() => setOpen(true)}
            className="h-11 w-full justify-start gap-2.5 rounded-none px-0 text-sm font-medium hover:bg-transparent"
            aria-expanded={open}
            aria-controls="list-index-sheet"
          >
            <MenuIcon className="size-4 shrink-0" aria-hidden />
            <span>{title}</span>
            {current ? (
              <>
                <span className="text-muted-foreground/70" aria-hidden>
                  /
                </span>
                <span className="truncate text-muted-foreground">{current}</span>
              </>
            ) : null}
          </Button>
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          id="list-index-sheet"
          side="right"
          dir="rtl"
          lang="fa"
          className="w-[min(100%,20rem)] gap-0 p-0 data-[state=closed]:duration-200 data-[state=open]:duration-200 sm:max-w-sm"
          onOpenAutoFocus={(event) => event.preventDefault()}
        >
          <SheetHeader className="border-b border-border/80 px-4 py-3 text-start">
            <SheetTitle className="text-base">{title}</SheetTitle>
            <SheetDescription className="sr-only">
              فهرست صفحات و دسته‌بندی‌ها
            </SheetDescription>
          </SheetHeader>
          <div className="no-scrollbar h-[calc(100svh-3.25rem)] overflow-y-auto overscroll-contain p-2">
            {children}
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
