import Link from "next/link"
import { cn } from "cn"

import { PAGES_NEW, splitDocTitle } from "@/lib/docs"
import {
  getPagesFromFolder,
  type PageTreeFolder,
  type PageTreePage,
} from "@/lib/page-tree"

function getLabel(component: PageTreePage) {
  const name = String(component.name)
  const { fa, en } = splitDocTitle(name)

  if (en) {
    return { fa, en }
  }

  const slug = component.url.split("/").filter(Boolean).pop() ?? ""
  const fromSlug = slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")

  return { fa, en: fromSlug || null }
}

function ComponentLink({
  component,
  showNewIndicator,
}: {
  component: PageTreePage
  showNewIndicator: boolean
}) {
  const isNew = showNewIndicator && PAGES_NEW.includes(component.url)
  const { fa, en } = getLabel(component)

  return (
    <Link
      href={component.url}
      className={cn(
        "relative flex min-h-14 flex-col justify-center gap-0.5 rounded-lg border border-border px-3 py-2.5 outline-none",
        "transition-colors hover:bg-muted/50",
        "focus-visible:ring-2 focus-visible:ring-ring/40"
      )}
    >
      <span className="flex items-center gap-2 truncate text-sm font-medium text-foreground">
        {fa}
        {isNew ? (
          <>
            <span className="sr-only">New</span>
            <span
              aria-hidden="true"
              className="size-1.5 shrink-0 rounded-full bg-blue-500"
            />
          </>
        ) : null}
      </span>
      {en ? (
        <span
          dir="ltr"
          lang="en"
          className="truncate font-mono text-[0.7rem] text-muted-foreground/70"
        >
          {en}
        </span>
      ) : null}
    </Link>
  )
}

export function ComponentsList({
  componentsFolder,
  currentBase,
  variant = "all",
}: {
  componentsFolder: PageTreeFolder
  currentBase: string
  variant?: "all" | "new"
}) {
  const list = getPagesFromFolder(componentsFolder, currentBase).filter(
    (component) => variant === "all" || PAGES_NEW.includes(component.url)
  )

  if (!list.length) {
    return null
  }

  return (
    <div
      data-not-typeset
      className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
    >
      {list.map((component) => (
        <ComponentLink
          key={component.$id}
          component={component}
          showNewIndicator={variant === "all"}
        />
      ))}
    </div>
  )
}
