import Link from "next/link"
import { mdxComponents } from "@/mdx-components"
import { IconRss } from "@tabler/icons-react"

import { getChangelogPages, type ChangelogPageData } from "@/lib/changelog"
import { absoluteUrl } from "@/lib/utils"
import { OpenInV0Cta } from "@/components/open-in-v0-cta"
import { Button } from "@/styles/radix-nova/ui/button"

export const revalidate = false
export const dynamic = "force-static"

const NUMBER_OF_LATEST_PAGES = 5

export function generateMetadata() {
  return {
    title: "تغییرات",
    description: "آخرین به‌روزرسانی‌ها و تغییرات FarsiUI.",
    openGraph: {
      title: "تغییرات",
      description: "آخرین به‌روزرسانی‌ها و تغییرات FarsiUI.",
      type: "article",
      url: absoluteUrl("/docs/changelog"),
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            "تغییرات"
          )}&description=${encodeURIComponent(
            "آخرین به‌روزرسانی‌ها و تغییرات FarsiUI."
          )}`,
        },
      ],
    },
  }
}

export default function ChangelogPage() {
  const pages = getChangelogPages()
  const latestPages = pages.slice(0, NUMBER_OF_LATEST_PAGES)
  const olderPages = pages.slice(NUMBER_OF_LATEST_PAGES)

  return (
    <div
      data-slot="docs"
      dir="rtl"
      lang="fa"
      className="flex scroll-mt-24 items-stretch pb-8 text-base leading-[1.7] xl:w-full"
    >
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="h-(--top-spacing) shrink-0" />
        <div className="mx-auto flex w-full max-w-160 min-w-0 flex-1 flex-col gap-6 px-4 py-6 text-foreground md:px-0 lg:py-8 dark:text-foreground">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h1 className="docs-page-title scroll-m-24 font-semibold tracking-tight">
                تغییرات
              </h1>
              <Button variant="secondary" size="sm" asChild>
                <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
                  <IconRss />
                  RSS
                </a>
              </Button>
            </div>
            <p className="docs-page-description text-muted-foreground text-balance md:max-w-[80%]">
              آخرین به‌روزرسانی‌ها و تغییرات FarsiUI.
            </p>
          </div>
          <div className="w-full flex-1 pb-16 sm:pb-0">
            {latestPages.map((page) => {
              const data = page.data as ChangelogPageData
              const MDX = page.data.body

              return (
                <article key={page.url} className="mb-12 border-b pb-12">
                  <h2 className="font-heading text-xl font-semibold tracking-tight">
                    {data.title}
                  </h2>
                  <div className="typeset mt-6 *:first:mt-0">
                    <MDX components={mdxComponents} />
                  </div>
                </article>
              )
            })}
            {olderPages.length > 0 && (
              <div id="more-updates" className="mb-24 scroll-mt-24">
                <h2 className="mb-6 font-heading text-xl font-semibold tracking-tight">
                  به‌روزرسانی‌های بیشتر
                </h2>
                <div className="grid auto-rows-fr gap-3 sm:grid-cols-2">
                  {olderPages.map((page) => {
                    const data = page.data as ChangelogPageData
                    const parts = data.title.includes(" — ")
                      ? data.title.split(" — ")
                      : data.title.split(" - ")
                    const date = parts.length > 1 ? parts[0] : null
                    const title =
                      parts.length > 1 ? parts.slice(1).join(" — ") : data.title
                    return (
                      <Link
                        key={page.url}
                        href={page.url}
                        className="flex w-full flex-col rounded-2xl bg-surface px-4 py-3 text-surface-foreground transition-colors hover:bg-surface/80"
                      >
                        {date ? (
                          <span className="text-xs text-muted-foreground">
                            {date}
                          </span>
                        ) : null}
                        <span className="text-sm font-medium">{title}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="sticky top-[calc(var(--header-height)+1px)] z-30 ml-auto hidden h-[90svh] w-72 flex-col gap-4 overflow-hidden overscroll-none pb-8 lg:flex">
        <div className="h-(--top-spacing) shrink-0"></div>
        <div className="no-scrollbar flex flex-col gap-8 overflow-y-auto px-8">
          <div className="flex flex-col gap-2 p-4 pt-0 text-sm">
            <p className="sticky top-0 h-6 bg-background text-xs font-medium text-muted-foreground">
              در این صفحه
            </p>
            {latestPages.map((page) => {
              const data = page.data as ChangelogPageData
              return (
                <Link
                  key={page.url}
                  href={page.url}
                  className="text-[13px] text-muted-foreground no-underline transition-colors hover:text-foreground"
                >
                  {data.title}
                </Link>
              )
            })}
            {olderPages.length > 0 && (
              <a
                href="#more-updates"
                className="text-[13px] text-muted-foreground no-underline transition-colors hover:text-foreground"
              >
                به‌روزرسانی‌های بیشتر
              </a>
            )}
          </div>
        </div>
        <div className="hidden flex-1 flex-col gap-6 px-6 xl:flex">
          <OpenInV0Cta />
        </div>
      </div>
    </div>
  )
}
