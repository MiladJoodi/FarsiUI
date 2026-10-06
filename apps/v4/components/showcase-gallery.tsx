"use client"

import * as React from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { cn } from "cn"

import {
  showcaseCategories,
  type ShowcaseProject,
} from "@/lib/showcase"
import { ShowcaseProjectList } from "@/components/showcase-project-list"

const tabs = [
  { title: "همه", slug: "all" },
  ...showcaseCategories.map((category) => ({
    title: category.title,
    slug: category.slug,
  })),
]

function isKnownCategory(slug: string) {
  return tabs.some((tab) => tab.slug === slug && tab.slug !== "all")
}

/** Prefer ?category= on /demos; still accept legacy /demos/[slug] path. */
function categoryFromLocation(pathname: string, search: string) {
  const params = new URLSearchParams(search)
  const fromQuery = params.get("category")
  if (fromQuery && (fromQuery === "all" || isKnownCategory(fromQuery))) {
    return fromQuery === "all" ? "all" : fromQuery
  }

  if (pathname === "/demos" || pathname === "/demos/") {
    return "all"
  }

  const match = pathname.match(/^\/demos\/([^/]+)\/?$/)
  const slug = match?.[1]
  if (slug && isKnownCategory(slug)) return slug
  return "all"
}

/** Stay on /demos + query so Next.js history patching does not refetch RSC. */
function pathFromCategory(slug: string) {
  return slug === "all" ? "/demos" : `/demos?category=${slug}`
}

export function ShowcaseGallery({
  projects,
}: {
  projects: ShowcaseProject[]
}) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [category, setCategory] = React.useState(() =>
    categoryFromLocation(pathname, searchParams.toString())
  )

  React.useEffect(() => {
    const onPopState = () => {
      setCategory(
        categoryFromLocation(
          window.location.pathname,
          window.location.search.replace(/^\?/, "")
        )
      )
    }
    window.addEventListener("popstate", onPopState)
    return () => window.removeEventListener("popstate", onPopState)
  }, [])

  // Real Next navigations (header, redirects) update hooks; keep tab in sync.
  React.useEffect(() => {
    setCategory(categoryFromLocation(pathname, searchParams.toString()))
  }, [pathname, searchParams])

  const filtered =
    category === "all"
      ? projects
      : projects.filter((project) => project.category === category)

  const activeCategory = showcaseCategories.find(
    (item) => item.slug === category
  )
  const emptyMessage = activeCategory
    ? `هنوز نمونه‌ای در دستهٔ «${activeCategory.title}» ثبت نشده است.`
    : undefined

  function selectCategory(slug: string) {
    if (slug === category) return
    setCategory(slug)
    const nextPath = pathFromCategory(slug)
    const current =
      window.location.pathname +
      (window.location.search || "")
    if (current !== nextPath) {
      // Same pathname (/demos) + query only — shallow, no RSC round-trip.
      window.history.pushState(null, "", nextPath)
    }
  }

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <nav
        dir="rtl"
        lang="fa"
        aria-label="دسته‌بندی دموها"
        className="flex w-full justify-center"
      >
        <ul className="mx-auto flex w-max max-w-full gap-2 overflow-x-auto px-1 pb-1 scrollbar-none">
          {tabs.map((tab) => {
            const isActive = category === tab.slug
            return (
              <li key={tab.slug} className="shrink-0">
                <button
                  type="button"
                  onClick={() => selectCategory(tab.slug)}
                  aria-pressed={isActive}
                  className={cn(
                    "inline-flex h-10 cursor-pointer items-center rounded-lg px-4 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                  )}
                >
                  {tab.title}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      <ShowcaseProjectList projects={filtered} emptyMessage={emptyMessage} />
    </div>
  )
}
