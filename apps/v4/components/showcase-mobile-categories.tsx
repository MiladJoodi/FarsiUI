"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "cn"

import { showcaseCategories } from "@/lib/showcase"

export function ShowcaseMobileCategories() {
  const pathname = usePathname()

  return (
    <div className="mx-auto mt-5 w-full max-w-6xl px-2 md:px-4 lg:hidden">
      <ul
        dir="rtl"
        lang="fa"
        className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none"
      >
        {showcaseCategories.map((category) => {
          const href = category.href ?? `/showcase/${category.slug}`
          const isActive =
            pathname === href || pathname.startsWith(`${href}/`)

          return (
            <li key={category.slug} className="shrink-0">
              <Link
                href={href}
                className={cn(
                  "inline-flex h-8 items-center rounded-full border border-transparent bg-muted/50 px-3 text-xs font-medium text-muted-foreground",
                  isActive && "border-border bg-background text-foreground"
                )}
              >
                {category.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
