import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { mdxComponents } from "@/mdx-components"
import { findDocsNeighbour } from "@/lib/docs-nav"
import { source } from "@/lib/source"
import { absoluteUrl } from "@/lib/utils"
import { splitDocTitle } from "@/lib/docs"
import { DocsTableOfContents } from "@/components/docs-toc"
import { OpenInV0Cta } from "@/components/open-in-v0-cta"
import { PersianDigits } from "@/registry/bases/base/ui/persian-digits"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"

/** سطح ۱/۲ keep their URLs, but always show Base docs (install, copy, sections). */
function getContentPage(slug: string[] | undefined) {
  const page = source.getPage(slug)
  if (!page) return undefined

  if (
    slug?.[0] === "components" &&
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
  params: Promise<{ slug?: string[] }>
}) {
  const params = await props.params
  const slug = params.slug ?? []
  const page = source.getPage(slug)
  const contentPage = getContentPage(slug)

  if (!page || !contentPage) {
    notFound()
  }

  const doc = contentPage.data
  const title = doc.title
  if (!title) {
    notFound()
  }

  const description =
    doc.description ||
    `${title} در مستندات FarsiUI — کامپوننت‌ها و راهنمای رابط کاربری فارسی.`

  const isMirroredComponent =
    slug[0] === "components" &&
    (slug[1] === "aria" || slug[1] === "radix") &&
    Boolean(slug[2])

  const canonicalPath = isMirroredComponent
    ? `/docs/components/base/${slug[2]}`
    : page.url

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    robots: isMirroredComponent
      ? { index: false, follow: true }
      : undefined,
    openGraph: {
      title,
      description,
      type: "article",
      url: absoluteUrl(canonicalPath),
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            title
          )}&description=${encodeURIComponent(description)}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            title
          )}&description=${encodeURIComponent(description)}`,
        },
      ],
    },
  }
}

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>
}) {
  const params = await props.params
  const slug = params.slug ?? []
  const page = source.getPage(slug)
  const contentPage = getContentPage(slug)
  if (!page || !contentPage) {
    notFound()
  }

  const doc = contentPage.data
  const MDX = doc.body
  const { fa: titleFa, en: titleEn } = splitDocTitle(doc.title)
  const links = (
    doc as { links?: { doc?: string; api?: string } }
  ).links
  const isChangelog = slug[0] === "changelog"
  const isComponentsIndex = slug.length === 1 && slug[0] === "components"
  const isComponentDoc =
    slug[0] === "components" && slug.length > 1 && !isComponentsIndex
  const neighbours = isChangelog
    ? { previous: null, next: null }
    : findDocsNeighbour(source.pageTree, page.url)

  return (
    <PersianDigits>
    <div
      data-slot="docs"
      data-docs-kind={isComponentDoc ? "component" : "docs"}
      data-components-index={isComponentsIndex ? "" : undefined}
      dir="rtl"
      lang="fa"
      className={
        isComponentsIndex
          ? "flex scroll-mt-24 items-stretch text-base leading-[1.7] xl:w-full"
          : "flex scroll-mt-24 items-stretch pb-8 text-base leading-[1.7] xl:w-full"
      }
    >
      <div className="flex min-w-0 flex-1 flex-col">
        {!isComponentsIndex ? (
          <div className="h-(--top-spacing) shrink-0" />
        ) : null}
        <div
          className={
            isComponentsIndex
              ? "mx-auto flex w-full max-w-6xl min-w-0 flex-1 flex-col px-4 pb-8 text-foreground md:px-6 dark:text-foreground"
              : "mx-auto flex w-full max-w-160 min-w-0 flex-1 flex-col gap-6 px-4 py-6 text-foreground md:px-0 lg:py-8 dark:text-foreground"
          }
        >
          {!isComponentsIndex ? (
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between md:items-start">
                <h1 className="docs-page-title flex scroll-m-24 items-center gap-2.5 font-semibold tracking-tight">
                  <span>{titleFa}</span>
                  {titleEn ? (
                    <Badge
                      variant="secondary"
                      dir="ltr"
                      lang="en"
                      className="translate-y-px font-sans text-[12px] font-medium tracking-normal text-muted-foreground"
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
                          <ArrowLeft className="rtl:rotate-180" />
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
                          <ArrowRight className="rtl:rotate-180" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              {doc.description && (
                <p className="docs-page-description text-pretty text-muted-foreground">
                  {doc.description}
                </p>
              )}
              {links?.doc || links?.api ? (
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {links.doc ? (
                    <Badge
                      asChild
                      variant="secondary"
                      className="rounded-md px-2 py-0.5 font-sans text-[12px] font-medium tracking-normal text-muted-foreground"
                    >
                      <a
                        href={links.doc}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1"
                      >
                        مستندات
                        <ArrowUpRight className="size-3" />
                      </a>
                    </Badge>
                  ) : null}
                  {links.api ? (
                    <Badge
                      asChild
                      variant="secondary"
                      className="rounded-md px-2 py-0.5 font-sans text-[12px] font-medium tracking-normal text-muted-foreground"
                    >
                      <a
                        href={links.api}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1"
                      >
                        مرجع API
                        <ArrowUpRight className="size-3" />
                      </a>
                    </Badge>
                  ) : null}
                </div>
              ) : null}
            </div>
          ) : null}
          <div
            className={
              isComponentsIndex
                ? "w-full flex-1"
                : "typeset w-full flex-1 *:data-[slot=alert]:first:mt-0"
            }
          >
            <MDX components={mdxComponents} />
          </div>
          {!isComponentsIndex ? (
            <div className="flex min-h-16 w-full flex-wrap items-center gap-2 pt-2 pb-4">
              {neighbours.previous && (
                <Button
                  variant="secondary"
                  size="sm"
                  asChild
                  className="shadow-none"
                >
                  <Link href={neighbours.previous.url}>
                    <ArrowLeft className="rtl:rotate-180" />{" "}
                    {splitDocTitle(neighbours.previous.name).fa}
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
                    {splitDocTitle(neighbours.next.name).fa}{" "}
                    <ArrowRight className="rtl:rotate-180" />
                  </Link>
                </Button>
              )}
            </div>
          ) : null}
        </div>
      </div>
      {!isComponentsIndex ? (
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
      ) : null}
    </div>
    </PersianDigits>
  )
}
