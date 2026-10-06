"use client"

import * as React from "react"
import Link, { type LinkProps } from "next/link"
import { usePathname } from "next/navigation"
import {
  BookOpenIcon,
  ChartAreaIcon,
  LayoutGridIcon,
  LayoutTemplateIcon,
  MailIcon,
  MenuIcon,
  SparklesIcon,
  WandSparklesIcon,
  XIcon,
  type LucideIcon,
} from "lucide-react"
import { cn } from "cn"

import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover"

const NAV_ICONS: Record<string, LucideIcon> = {
  "/docs": BookOpenIcon,
  "/docs/components": LayoutGridIcon,
  "/blocks": LayoutTemplateIcon,
  "/demos": SparklesIcon,
  "/skills": WandSparklesIcon,
  "/charts/area": ChartAreaIcon,
  "/contact": MailIcon,
}

const CONTACT_ITEM = {
  href: "/contact",
  label: "تماس با ما",
} as const

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
  const menuItems = React.useMemo(
    () => [...items, CONTACT_ITEM],
    [items]
  )
  const activeHref = React.useMemo(() => {
    return menuItems
      .filter((item) =>
        item.href === "/"
          ? pathname === "/"
          : pathname === item.href || pathname.startsWith(`${item.href}/`)
      )
      .sort((a, b) => b.href.length - a.href.length)[0]?.href
  }, [menuItems, pathname])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "extend-touch-target size-8 shrink-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent dark:hover:bg-transparent",
            className
          )}
        >
          {open ? (
            <XIcon className="size-5" aria-hidden />
          ) : (
            <MenuIcon className="size-5" aria-hidden />
          )}
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
          {menuItems.map((item) => {
            const Icon = NAV_ICONS[item.href]
            return (
              <MobileLink
                key={item.href}
                href={item.href}
                onOpenChange={setOpen}
                active={item.href === activeHref}
              >
                {Icon ? (
                  <Icon className="size-4 shrink-0 opacity-70" aria-hidden />
                ) : null}
                {item.label}
              </MobileLink>
            )
          })}
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
  return (
    <Link
      href={href}
      onClick={() => {
        onOpenChange?.(false)
      }}
      className={cn(
        "flex h-10 items-center gap-2.5 rounded-md px-2 text-sm font-medium text-foreground/90 transition-colors hover:bg-muted hover:text-foreground",
        active && "bg-primary/10 text-primary",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
