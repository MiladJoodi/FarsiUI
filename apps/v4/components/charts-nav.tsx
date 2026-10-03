"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "cn"

const links = [
  {
    name: "ناحیه‌ای",
    href: "/charts/area",
  },
  {
    name: "میله‌ای",
    href: "/charts/bar",
  },
  {
    name: "خطی",
    href: "/charts/line",
  },
  {
    name: "دایره‌ای",
    href: "/charts/pie",
  },
  {
    name: "راداری",
    href: "/charts/radar",
  },
  {
    name: "شعاعی",
    href: "/charts/radial",
  },
  {
    name: "راهنما",
    href: "/charts/tooltip",
  },
]

export function ChartsNav({
  className,
  ...props
}: React.ComponentProps<"nav">) {
  const pathname = usePathname()

  return (
    <nav
      aria-label="دسته‌بندی نمودارها"
      className={cn("flex w-full", className)}
      {...props}
    >
      <ul className="flex w-max max-w-full gap-2 overflow-x-auto pb-1 scrollbar-none">
        {links.map((link) => {
          const isActive =
            pathname === link.href || pathname.startsWith(`${link.href}/`)

          return (
            <li key={link.href} className="shrink-0">
              <Link
                href={link.href}
                className={cn(
                  "inline-flex h-10 items-center rounded-lg border border-transparent px-4 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  isActive
                    ? "border-border/80 bg-background text-foreground shadow-xs"
                    : "bg-transparent hover:bg-background/60"
                )}
              >
                {link.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
