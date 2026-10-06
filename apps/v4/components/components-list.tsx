import Link from "next/link"

import { ComponentWireframe } from "@/components/components-wireframes"
import { splitDocTitle } from "@/lib/docs"
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

function getSlug(component: PageTreePage) {
  return component.url.split("/").filter(Boolean).pop() ?? ""
}

function ComponentCard({ component }: { component: PageTreePage }) {
  const { fa, en } = getLabel(component)
  const slug = getSlug(component)
  const ariaLabel = en ? `${fa} — ${en}` : fa

  const titleRow = (
    <>
      <span className="shrink-0 text-sm font-semibold tracking-tight text-primary">
        {fa}
      </span>
      {en ? (
        <>
          <span
            aria-hidden
            className="mb-1 min-w-4 flex-1 border-b border-dashed border-muted-foreground/30"
          />
          <span
            dir="ltr"
            lang="en"
            className="shrink-0 text-xs tracking-wide text-muted-foreground"
          >
            {en}
          </span>
        </>
      ) : null}
    </>
  )

  return (
    <div className="min-w-0 border-b border-border/60 last:border-b-0 md:border-b-0">
      {/* Mobile: compact list row — FA | dashed | EN */}
      <Link
        href={component.url}
        aria-label={ariaLabel}
        className="flex min-w-0 items-baseline gap-2 py-3 outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
      >
        {titleRow}
      </Link>

      {/* Desktop: title + wireframe card */}
      <section className="hidden min-w-0 flex-col gap-2 md:flex">
        <div className="flex min-w-0 items-baseline gap-2">{titleRow}</div>
        <Link
          href={component.url}
          aria-label={ariaLabel}
          className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-border bg-background outline-none ring-offset-background transition-[border-color,box-shadow] hover:border-border hover:shadow-sm focus-visible:ring-2 focus-visible:ring-ring"
        >
          <ComponentWireframe slug={slug} />
        </Link>
      </section>
    </div>
  )
}

export function ComponentsList({
  componentsFolder,
  currentBase,
}: {
  componentsFolder: PageTreeFolder
  currentBase: string
  /** @deprecated new section removed */
  variant?: "all" | "new"
}) {
  const list = getPagesFromFolder(componentsFolder, currentBase)

  if (!list.length) {
    return null
  }

  return (
    <div data-not-typeset dir="rtl" lang="fa" className="w-full">
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-4">
        {list.map((component) => (
          <ComponentCard key={component.$id} component={component} />
        ))}
      </div>
    </div>
  )
}
