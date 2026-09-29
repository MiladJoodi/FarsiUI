import Link from "next/link"
import { notFound } from "next/navigation"
import { mdxComponents } from "@/mdx-components"
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"
import { findNeighbour } from "fumadocs-core/page-tree"

import { source } from "@/lib/source"
import { absoluteUrl } from "@/lib/utils"
import { DocsTableOfContents } from "@/components/docs-toc"
import { OpenInV0Cta } from "@/components/open-in-v0-cta"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"

function splitDocTitle(title: string) {
  const match = title.match(/^(.*?)\s*\(([^)]+)\)\s*$/)
  if (!match) {
    return { fa: title, en: null }
  }
  return { fa: match[1].trim(), en: match[2].trim() }
}

/** سطح ۱/۲ keep their URLs, but always show Base docs (install, copy, sections). */
function getContentPage(slug: string[] | undefined) {
  if (!slug?.length) return undefined
  const page = source.getPage(slug)
  if (!page) return undefined

  if (
    slug[0] === "components" &&
    (slug[1] === "aria" || slug[1] === "radix") &&
    slug[2]
  ) {
    return source.getPage(["components", "base", slug[2]]) ?? page
  }

  return page
}

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

export function generateStaticParams() {
  return source.generateParams()
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>
}) {
  const params = await props.params
  const page = source.getPage(params.slug)
  const contentPage = getContentPage(params.slug)

  if (!page || !contentPage) {
    notFound()
  }

  const doc = contentPage.data

  if (!doc.title || !doc.description) {
    notFound()
  }

  return {
    title: doc.title,
    description: doc.description,
    alternates: {
      canonical: page.url,
    },
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: absoluteUrl(page.url),
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            doc.title
          )}&description=${encodeURIComponent(doc.description)}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            doc.title
          )}&description=${encodeURIComponent(doc.description)}`,
        },
      ],
      creator: "@shadcn",
    },
  }
}

export default async function Page(props: {
  params: Promise<{ slug: string[] }>
}) {
  const params = await props.params
  const page = source.getPage(params.slug)
  const contentPage = getContentPage(params.slug)
  if (!page || !contentPage) {
    notFound()
  }

  const doc = contentPage.data
  const MDX = doc.body
  const { fa: titleFa, en: titleEn } = splitDocTitle(doc.title)
  const isChangelog = params.slug?.[0] === "changelog"
  const neighbours = isChangelog
    ? { previous: null, next: null }
    : findNeighbour(source.pageTree, page.url)

  return (
    <div
      data-slot="docs"
      dir="rtl"
      lang="fa"
      className="flex scroll-mt-24 items-stretch pb-8 text-[1.05rem] sm:text-[15px] xl:w-full"
    >
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="h-(--top-spacing) shrink-0" />
        <div className="mx-auto flex w-full max-w-160 min-w-0 flex-1 flex-col gap-6 px-4 py-6 text-foreground md:px-0 lg:py-8 dark:text-foreground">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between md:items-start">
                <h1 className="flex scroll-m-24 items-center gap-2.5 text-3xl font-semibold tracking-tight sm:text-3xl">
                  <span>{titleFa}</span>
                  {titleEn ? (
                    <Badge
                      variant="secondary"
                      dir="ltr"
                      lang="en"
                      className="translate-y-px font-mono text-[0.7rem] font-medium tracking-wide text-muted-foreground"
                    >
                      {titleEn}
                    </Badge>
                  ) : null}
                </h1>
                <div className="docs-nav flex items-center gap-2">
                  <div className="ms-auto flex gap-2">
                    {neighbours.previous && (
                      <Button
                        variant="secondary"
                        size="icon"
                        className="extend-touch-target size-8 shadow-none md:size-7"
                        asChild
                      >
                        <Link href={neighbours.previous.url}>
                          <IconArrowLeft className="rtl:rotate-180" />
                          <span className="sr-only">Previous</span>
                        </Link>
                      </Button>
                    )}
                    {neighbours.next && (
                      <Button
                        variant="secondary"
                        size="icon"
                        className="extend-touch-target size-8 shadow-none md:size-7"
                        asChild
                      >
                        <Link href={neighbours.next.url}>
                          <span className="sr-only">Next</span>
                          <IconArrowRight className="rtl:rotate-180" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              {doc.description && (
                <p className="text-[1.05rem] text-muted-foreground sm:text-base sm:text-balance md:max-w-[80%]">
                  {doc.description}
                </p>
              )}
            </div>
          </div>
          <div className="typeset w-full flex-1 pb-16 *:data-[slot=alert]:first:mt-0 sm:pb-0">
            <MDX components={mdxComponents} />
          </div>
          <div className="hidden h-16 w-full items-center gap-2 px-4 sm:flex sm:px-0">
            {neighbours.previous && (
              <Button
                variant="secondary"
                size="sm"
                asChild
                className="shadow-none"
              >
                <Link href={neighbours.previous.url}>
                  <IconArrowLeft className="rtl:rotate-180" />{" "}
                  {neighbours.previous.name}
                </Link>
              </Button>
            )}
            {neighbours.next && (
              <Button
                variant="secondary"
                size="sm"
                className="ms-auto shadow-none"
                asChild
              >
                <Link href={neighbours.next.url}>
                  {neighbours.next.name}{" "}
                  <IconArrowRight className="rtl:rotate-180" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="sticky top-[calc(var(--header-height)+1px)] z-30 ms-auto hidden h-[90svh] w-(--sidebar-width) flex-col gap-4 overflow-hidden overscroll-none pb-8 xl:flex">
        <div className="h-(--top-spacing) shrink-0"></div>
        {doc.toc?.length ? (
          <div className="flex scroll-fade scrollbar-none flex-col gap-8 overflow-y-auto px-8">
            <DocsTableOfContents toc={doc.toc} />
          </div>
        ) : null}
        <div className="hidden flex-1 flex-col gap-6 px-6 xl:flex">
          <OpenInV0Cta />
        </div>
      </div>
    </div>
  )
}
