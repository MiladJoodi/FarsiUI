"use client"

import * as React from "react"
import Link, { type LinkProps } from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "cn"

import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover"

export function MobileNav({
  items,
  className,
}: {
  tree?: unknown
  items: { href: string; label: string }[]
  className?: string
}) {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "extend-touch-target h-8 gap-2 px-2 text-sm font-medium hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent dark:hover:bg-transparent",
            className
          )}
        >
          <span className="relative size-3.5 shrink-0" aria-hidden>
            <span
              className={cn(
                "absolute inset-x-0 top-0.5 h-0.5 rounded-full bg-foreground transition-all duration-150",
                open && "top-1.5 rotate-45"
              )}
            />
            <span
              className={cn(
                "absolute inset-x-0 bottom-0.5 h-0.5 rounded-full bg-foreground transition-all duration-150",
                open && "bottom-1.5 -rotate-45"
              )}
            />
          </span>
          <span>{open ? "بستن" : "منو"}</span>
          <span className="sr-only">باز و بسته کردن منو</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        dir="rtl"
        lang="fa"
        align="start"
        side="bottom"
        alignOffset={-8}
        sideOffset={8}
        className="no-scrollbar h-(--radix-popper-available-height) w-(--radix-popper-available-width) overflow-y-auto rounded-none border-none bg-background/95 p-0 shadow-none backdrop-blur-md duration-100 data-open:animate-none!"
      >
        <nav className="flex flex-col gap-1 px-4 py-4 text-sm">
          <div className="px-2 pb-1 text-[0.6875rem] font-medium tracking-wide text-muted-foreground">
            منو
          </div>
          {items.map((item) => (
            <MobileLink
              key={item.href}
              href={item.href}
              onOpenChange={setOpen}
              active={
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href)
              }
            >
              {item.label}
            </MobileLink>
          ))}
        </nav>
      </PopoverContent>
    </Popover>
  )
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  active,
  ...props
}: LinkProps & {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
  active?: boolean
}) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(
        "flex h-9 items-center gap-2 rounded-md px-2 text-sm font-medium text-foreground/90 transition-colors hover:bg-muted hover:text-foreground",
        active && "bg-primary/10 text-primary",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
