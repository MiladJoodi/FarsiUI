"use client"

import * as React from "react"
import Link, { type LinkProps } from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "cn"
import { ChevronDownIcon } from "lucide-react"

import {
  findBlocksNavMatch,
  getVisibleBlocksNav,
} from "@/lib/blocks-nav"
import { showcaseCategories } from "@/lib/showcase"
import { PAGES_NEW } from "@/lib/docs"
import { showMcpDocs } from "@/lib/flags"
import { getCurrentBase, getPagesFromFolder } from "@/lib/page-tree"
import { type source } from "@/lib/source"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/new-york-v4/ui/collapsible"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover"

const TOP_LEVEL_SECTIONS = [
  { name: "مقدمه", href: "/docs" },
  { name: "کامپوننت‌ها", href: "/docs/components" },
  { name: "نصب", href: "/docs/installation" },
  { name: "تم‌دهی", href: "/docs/theming" },
  { name: "CLI", href: "/docs/cli" },
  { name: "RTL", href: "/docs/rtl" },
  { name: "سرور MCP", href: "/docs/mcp" },
  { name: "فرم‌ها", href: "/docs/forms" },
]

export function MobileNav({
  tree,
  items,
  className,
}: {
  tree: typeof source.pageTree
  items: { href: string; label: string }[]
  className?: string
}) {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()
  const currentBase = getCurrentBase(pathname)
  const isBlocks = pathname === "/blocks" || pathname.startsWith("/blocks/")
  const isShowcase =
    pathname === "/showcase" || pathname.startsWith("/showcase/")
  const blocksCategories = React.useMemo(() => getVisibleBlocksNav(), [])
  const blocksMatch = React.useMemo(
    () => findBlocksNavMatch(pathname),
    [pathname]
  )

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
        <nav className="flex flex-col gap-6 px-4 py-4 text-sm">
          <NavSection title="منو">
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
          </NavSection>

          {isBlocks ? (
            <div className="flex flex-col gap-3">
              <NavSection title="بلاک‌ها">
                <MobileLink
                  href="/blocks"
                  onOpenChange={setOpen}
                  active={pathname === "/blocks"}
                >
                  ویژه
                </MobileLink>
              </NavSection>
              {blocksCategories.map((category) => (
                <Collapsible
                  key={category.slug}
                  defaultOpen={blocksMatch?.category.slug === category.slug}
                >
                  <CollapsibleTrigger className="flex h-8 w-full items-center justify-between rounded-md px-2 text-xs font-medium text-muted-foreground hover:bg-muted/60 hover:text-foreground [&[data-state=open]>svg]:rotate-180">
                    {category.title}
                    <ChevronDownIcon className="size-3.5 shrink-0 transition-transform" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mt-0.5 flex flex-col gap-0.5 pe-1 ps-2">
                      {category.items.map((item) => (
                        <MobileLink
                          key={item.href}
                          href={item.href}
                          onOpenChange={setOpen}
                          active={pathname === item.href || pathname.startsWith(`${item.href}/`)}
                          className="justify-between gap-3"
                        >
                          <span className="truncate">{item.title}</span>
                          <span
                            dir="ltr"
                            lang="en"
                            className="shrink-0 font-mono text-[0.6875rem] text-muted-foreground"
                          >
                            {item.en}
                          </span>
                        </MobileLink>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          ) : isShowcase ? (
            <NavSection title="نمونه‌ها">
              {showcaseCategories.map((category) => {
                const href = category.href ?? `/showcase/${category.slug}`
                return (
                  <MobileLink
                    key={category.slug}
                    href={href}
                    onOpenChange={setOpen}
                    active={pathname === href || pathname.startsWith(`${href}/`)}
                  >
                    {category.title}
                  </MobileLink>
                )
              })}
            </NavSection>
          ) : (
            <>
              <NavSection title="بخش‌ها">
                {TOP_LEVEL_SECTIONS.map(({ name, href }) => {
                  if (!showMcpDocs && href.includes("/mcp")) return null
                  return (
                    <MobileLink
                      key={name}
                      href={href}
                      onOpenChange={setOpen}
                      active={pathname === href || pathname.startsWith(`${href}/`)}
                    >
                      {name}
                      {PAGES_NEW.includes(href) ? (
                        <span className="size-1.5 rounded-full bg-blue-500" />
                      ) : null}
                    </MobileLink>
                  )
                })}
              </NavSection>
              {tree?.children?.map((group, index) => {
                if (group.type !== "folder") return null
                const pages = getPagesFromFolder(group, currentBase)
                return (
                  <NavSection key={index} title={String(group.name)}>
                    {pages.map((item) => {
                      if (!showMcpDocs && item.url.includes("/mcp")) {
                        return null
                      }
                      return (
                        <MobileLink
                          key={`${item.url}-${index}`}
                          href={item.url}
                          onOpenChange={setOpen}
                          active={pathname === item.url}
                        >
                          {item.name}
                          {PAGES_NEW.includes(item.url) ? (
                            <span className="size-1.5 rounded-full bg-blue-500" />
                          ) : null}
                        </MobileLink>
                      )
                    })}
                  </NavSection>
                )
              })}
            </>
          )}
        </nav>
      </PopoverContent>
    </Popover>
  )
}

function NavSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="px-2 text-[0.6875rem] font-medium tracking-wide text-muted-foreground">
        {title}
      </div>
      <div className="flex flex-col gap-0.5">{children}</div>
    </div>
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
        "flex h-8 items-center gap-2 rounded-md px-2 text-sm font-medium text-foreground/90 transition-colors hover:bg-muted hover:text-foreground",
        active && "bg-muted text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
