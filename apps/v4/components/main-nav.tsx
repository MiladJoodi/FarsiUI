"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "cn"

import { PAGES_NEW } from "@/lib/docs"
import { Button } from "@/registry/new-york-v4/ui/button"

export function MainNav({
  items,
  className,
  ...props
}: React.ComponentProps<"nav"> & {
  items: { href: string; label: string }[]
}) {
  const pathname = usePathname()

  return (
    <nav className={cn("items-center gap-0", className)} {...props}>
      {items.map((item) => {
        const isNew = PAGES_NEW.includes(item.href)

        return (
          <Button
            key={item.href}
            variant="ghost"
            asChild
            size="sm"
            className="px-2.5 text-muted-foreground hover:text-primary data-[active=true]:bg-transparent data-[active=true]:text-primary data-[active=true]:hover:bg-transparent data-[active=true]:hover:text-primary"
          >
            <Link
              href={item.href}
              data-active={pathname === item.href || undefined}
              data-new={isNew || undefined}
              className="relative inline-flex items-center gap-1.5 font-medium"
            >
              {item.label}
              {isNew ? (
                <span
                  className="size-1.5 shrink-0 rounded-full bg-primary"
                  title="New"
                  aria-hidden
                />
              ) : null}
            </Link>
          </Button>
        )
      })}
    </nav>
  )
}
