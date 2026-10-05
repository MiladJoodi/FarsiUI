"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "cn"

import { Button } from "@/registry/new-york-v4/ui/button"

export function MainNav({
  items,
  className,
  ...props
}: React.ComponentProps<"nav"> & {
  items: { href: string; label: string }[]
}) {
  const pathname = usePathname()
  const activeHref = items
    .filter((item) =>
      item.href === "/"
        ? pathname === "/"
        : pathname === item.href || pathname.startsWith(`${item.href}/`)
    )
    .sort((a, b) => b.href.length - a.href.length)[0]?.href

  return (
    <nav className={cn("items-center gap-0", className)} {...props}>
      {items.map((item) => {
        const isActive = item.href === activeHref

        return (
          <Button
            key={item.href}
            variant="ghost"
            asChild
            size="sm"
            className="px-2.5 text-muted-foreground hover:bg-transparent hover:text-foreground data-[active=true]:bg-transparent data-[active=true]:font-medium data-[active=true]:text-foreground data-[active=true]:hover:bg-transparent data-[active=true]:hover:text-foreground"
          >
            <Link
              href={item.href}
              data-active={isActive || undefined}
              className="relative inline-flex items-center font-medium"
            >
              {item.label}
            </Link>
          </Button>
        )
      })}
    </nav>
  )
}
