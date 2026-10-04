"use client"

import * as React from "react"
import Link from "next/link"
import { ExternalLinkIcon, GithubIcon } from "lucide-react"

import { type ShowcaseProject } from "@/lib/showcase"
import { Button } from "@/registry/new-york-v4/ui/button"

function PreviewFrame({ project }: { project: ShowcaseProject }) {
  const [failed, setFailed] = React.useState(false)
  const [isDark, setIsDark] = React.useState(false)

  React.useEffect(() => {
    const root = document.documentElement
    const sync = () => setIsDark(root.classList.contains("dark"))
    sync()
    const observer = new MutationObserver(sync)
    observer.observe(root, { attributes: true, attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])

  const src =
    isDark && project.imageUrlDark ? project.imageUrlDark : project.imageUrl

  if (!src || failed) {
    return (
      <div className="flex size-full flex-col justify-between bg-linear-to-br from-muted/80 via-muted/40 to-background p-4">
        <div className="flex gap-2">
          <div className="h-20 w-11 rounded-lg bg-background/90 shadow-sm ring-1 ring-border/60" />
          <div className="flex flex-1 flex-col gap-2.5 pt-1">
            <div className="h-3 w-2/5 rounded-full bg-background/90" />
            <div className="grid flex-1 grid-cols-3 gap-2">
              <div className="rounded-lg bg-background/80 ring-1 ring-border/40" />
              <div className="rounded-lg bg-background/80 ring-1 ring-border/40" />
              <div className="rounded-lg bg-background/80 ring-1 ring-border/40" />
            </div>
          </div>
        </div>
        <div className="mt-3 h-24 rounded-lg bg-background/80 ring-1 ring-border/40" />
      </div>
    )
  }

  return (
     
    <img
      src={src}
      alt={project.title}
      className="size-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      onError={() => setFailed(true)}
    />
  )
}

export function ShowcaseProjectCard({ project }: { project: ShowcaseProject }) {
  const hasLive = Boolean(project.liveUrl)
  const hasGithub = Boolean(project.githubUrl)

  return (
    <article dir="rtl" lang="fa" className="group flex flex-col gap-3">
      <div className="flex items-center justify-between gap-3 px-0.5">
        <h2 className="min-w-0 truncate text-sm font-semibold tracking-tight md:text-[0.95rem]">
          {project.title}
        </h2>

        <div className="flex shrink-0 items-center gap-1.5">
          {hasGithub ? (
            <Button
              asChild
              size="icon"
              variant="outline"
              className="size-8 rounded-full"
            >
              <Link
                href={project.githubUrl!}
                target="_blank"
                rel="noreferrer"
                aria-label="گیت‌هاب"
              >
                <GithubIcon className="size-4" />
              </Link>
            </Button>
          ) : (
            <Button
              size="icon"
              variant="outline"
              disabled
              className="size-8 rounded-full"
              title="لینک گیت‌هاب را در showcase.ts اضافه کن"
            >
              <GithubIcon className="size-4" />
            </Button>
          )}

          {hasLive ? (
            <Button
              asChild
              size="icon"
              variant="outline"
              className="size-8 rounded-full"
            >
              <Link
                href={project.liveUrl!}
                target="_blank"
                rel="noreferrer"
                aria-label="مشاهده دمو"
              >
                <ExternalLinkIcon className="size-4" />
              </Link>
            </Button>
          ) : (
            <Button
              size="icon"
              variant="outline"
              disabled
              className="size-8 rounded-full"
              title="مشاهده دمو"
              aria-label="مشاهده دمو"
            >
              <ExternalLinkIcon className="size-4" />
            </Button>
          )}
        </div>
      </div>

      <div className="relative aspect-16/10 overflow-hidden rounded-2xl border border-border/70 bg-muted/40 shadow-sm transition-[box-shadow,transform] duration-300 ease-out group-hover:-translate-y-0.5 group-hover:shadow-md">
        <PreviewFrame project={project} />
      </div>
    </article>
  )
}
