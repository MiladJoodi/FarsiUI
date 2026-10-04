"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "cn"

import { showcaseCategories } from "@/lib/showcase"

const tabs = [
  { title: "همه", href: "/showcase", slug: "all" },
  ...showcaseCategories.map((category) => ({
    title: category.title,
    href: category.href ?? `/showcase/${category.slug}`,
    slug: category.slug,
  })),
]

export function ShowcaseCategoriesNav({ className }: { className?: string }) {
  const pathname = usePathname()

  return (
    <nav
      dir="rtl"
      lang="fa"
      aria-label="دسته‌بندی نمونه‌ها"
      className={cn("flex w-full justify-center", className)}
    >
      <ul className="mx-auto flex w-max max-w-full gap-2 overflow-x-auto px-1 pb-1 scrollbar-none">
        {tabs.map((tab) => {
          const isActive =
            tab.slug === "all"
              ? pathname === "/showcase"
              : pathname === tab.href || pathname.startsWith(`${tab.href}/`)

          return (
            <li key={tab.slug} className="shrink-0">
              <Link
                href={tab.href}
                className={cn(
                  "inline-flex h-10 cursor-pointer items-center rounded-lg px-4 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                )}
              >
                {tab.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
