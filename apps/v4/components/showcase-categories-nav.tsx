"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { cn } from "cn"

import { showcaseCategories } from "@/lib/showcase"

const tabs = [
  { title: "همه", href: "/demos", slug: "all" },
  ...showcaseCategories.map((category) => ({
    title: category.title,
    href: category.href ?? `/demos?category=${category.slug}`,
    slug: category.slug,
  })),
]

export function ShowcaseCategoriesNav({ className }: { className?: string }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const activeCategory = searchParams.get("category")

  return (
    <nav
      dir="rtl"
      lang="fa"
      aria-label="دسته‌بندی دموها"
      className={cn("flex w-full justify-center", className)}
    >
      <ul className="mx-auto flex w-max max-w-full gap-2 overflow-x-auto px-1 pb-1 scrollbar-none">
        {tabs.map((tab) => {
          const isActive =
            tab.slug === "all"
              ? pathname === "/demos" && !activeCategory
              : activeCategory === tab.slug ||
                pathname === `/demos/${tab.slug}`

          return (
            <li key={tab.slug} className="shrink-0">
              <Link
                href={tab.href}
                scroll={false}
                prefetch={false}
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
