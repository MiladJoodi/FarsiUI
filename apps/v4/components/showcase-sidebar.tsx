"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "cn"

import { showcaseCategories } from "@/lib/showcase"

export function ShowcaseSidebar({ className }: { className?: string }) {
  const pathname = usePathname()

  return (
    <nav
      dir="rtl"
      lang="fa"
      aria-label="دسته‌بندی نمونه‌ها"
      className={cn(
        "sticky top-[calc(var(--header-height)+1rem)] hidden w-48 shrink-0 self-start lg:block",
        className
      )}
    >
      <ul className="flex flex-col gap-0.5">
        {showcaseCategories.map((category) => {
          const href = category.href ?? `/showcase/${category.slug}`
          const isActive =
            pathname === href || pathname.startsWith(`${href}/`)

          return (
            <li key={category.slug}>
              <Link
                href={href}
                className={cn(
                  "flex h-9 items-center rounded-md px-2 text-[0.8125rem] font-medium text-muted-foreground transition-colors hover:bg-muted/70 hover:text-foreground",
                  isActive && "bg-muted text-foreground"
                )}
              >
                <span className="truncate">{category.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
