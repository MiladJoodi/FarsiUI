import Link from "next/link"
import { ArrowLeftIcon } from "lucide-react"

import type {
  FeaturedBlockGroup,
  FeaturedBlockSample,
} from "@/lib/blocks-featured"
import { Button } from "@/registry/new-york-v4/ui/button"
import { type Style } from "@/registry/_legacy-styles"

type PreviewKind =
  | "form"
  | "marketing"
  | "nav"
  | "content"
  | "dashboard"
  | "commerce"
  | "account"
  | "chat"
  | "search"
  | "media"
  | "calendar"
  | "billing"
  | "state"

function previewKindForGroup(groupSlug: string): PreviewKind {
  switch (groupSlug) {
    case "forms-auth":
      return "form"
    case "marketing":
      return "marketing"
    case "navigation":
      return "nav"
    case "content":
      return "content"
    case "dashboard":
      return "dashboard"
    case "commerce":
      return "commerce"
    case "account":
      return "account"
    case "communication":
      return "chat"
    case "search":
      return "search"
    case "media":
      return "media"
    case "calendar":
      return "calendar"
    case "billing":
      return "billing"
    case "states":
      return "state"
    default:
      return "form"
  }
}

function SamplePreview({
  title,
  kind,
}: {
  title: string
  kind: PreviewKind
}) {
  return (
    <div className="relative flex h-[200px] items-center justify-center overflow-hidden bg-muted/45 sm:h-[220px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_0%,color-mix(in_oklch,var(--foreground)_7%,transparent),transparent_65%)]"
      />

      {kind === "form" && (
        <div className="relative w-[78%] max-w-[240px] rounded-xl border border-border/70 bg-background p-4 shadow-sm">
          <div className="mb-3 h-2.5 w-14 rounded-full bg-foreground/15" />
          <div className="mb-3 h-2 w-24 rounded-full bg-foreground/10" />
          <div className="space-y-2">
            <div className="h-8 rounded-md border border-border/60 bg-muted/50" />
            <div className="h-8 rounded-md border border-border/60 bg-muted/50" />
            <div className="h-8 rounded-md bg-foreground/90" />
          </div>
        </div>
      )}

      {kind === "marketing" && (
        <div className="relative w-[86%] max-w-[280px] rounded-xl border border-border/70 bg-background p-4 shadow-sm">
          <div className="mb-3 h-3 w-28 rounded-full bg-foreground/20" />
          <div className="mb-2 h-2 w-full rounded-full bg-foreground/10" />
          <div className="mb-4 h-2 w-4/5 rounded-full bg-foreground/10" />
          <div className="flex gap-2">
            <div className="h-8 flex-1 rounded-md bg-foreground/90" />
            <div className="h-8 flex-1 rounded-md border border-border/70 bg-muted/40" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="h-12 rounded-lg bg-muted/70" />
            <div className="h-12 rounded-lg bg-muted/70" />
            <div className="h-12 rounded-lg bg-muted/70" />
          </div>
        </div>
      )}

      {kind === "nav" && (
        <div className="relative w-[90%] max-w-[300px] overflow-hidden rounded-xl border border-border/70 bg-background shadow-sm">
          <div className="flex h-10 items-center gap-2 border-b border-border/60 px-3">
            <div className="size-4 rounded-full bg-foreground/20" />
            <div className="h-2 w-12 rounded-full bg-foreground/15" />
            <div className="ms-auto flex gap-1.5">
              <div className="h-2 w-8 rounded-full bg-foreground/10" />
              <div className="h-2 w-8 rounded-full bg-foreground/10" />
              <div className="h-2 w-8 rounded-full bg-foreground/10" />
            </div>
          </div>
          <div className="flex h-28">
            <div className="w-16 space-y-2 border-e border-border/50 bg-muted/30 p-2">
              <div className="h-2 rounded-full bg-foreground/15" />
              <div className="h-2 rounded-full bg-foreground/10" />
              <div className="h-2 rounded-full bg-foreground/10" />
            </div>
            <div className="flex-1 p-3">
              <div className="mb-2 h-2 w-20 rounded-full bg-foreground/15" />
              <div className="h-16 rounded-lg bg-muted/50" />
            </div>
          </div>
        </div>
      )}

      {kind === "content" && (
        <div className="relative grid w-[86%] max-w-[280px] grid-cols-2 gap-2">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-xl border border-border/70 bg-background p-2.5 shadow-sm"
            >
              <div className="mb-2 h-10 rounded-lg bg-muted/70" />
              <div className="mb-1.5 h-2 w-4/5 rounded-full bg-foreground/15" />
              <div className="h-2 w-3/5 rounded-full bg-foreground/10" />
            </div>
          ))}
        </div>
      )}

      {kind === "dashboard" && (
        <div className="relative w-[88%] max-w-[290px] rounded-xl border border-border/70 bg-background p-3 shadow-sm">
          <div className="mb-3 grid grid-cols-3 gap-2">
            <div className="rounded-lg bg-muted/60 p-2">
              <div className="mb-2 h-2 w-8 rounded-full bg-foreground/15" />
              <div className="h-3 w-10 rounded-full bg-foreground/25" />
            </div>
            <div className="rounded-lg bg-muted/60 p-2">
              <div className="mb-2 h-2 w-8 rounded-full bg-foreground/15" />
              <div className="h-3 w-10 rounded-full bg-foreground/25" />
            </div>
            <div className="rounded-lg bg-muted/60 p-2">
              <div className="mb-2 h-2 w-8 rounded-full bg-foreground/15" />
              <div className="h-3 w-10 rounded-full bg-foreground/25" />
            </div>
          </div>
          <div className="flex h-16 items-end gap-1.5 rounded-lg bg-muted/40 px-2 pb-2">
            {[40, 65, 45, 80, 55, 70, 50].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-foreground/25"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      )}

      {kind === "commerce" && (
        <div className="relative grid w-[86%] max-w-[280px] grid-cols-2 gap-2">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="rounded-xl border border-border/70 bg-background p-2.5 shadow-sm"
            >
              <div className="mb-2 aspect-square rounded-lg bg-muted/70" />
              <div className="mb-1 h-2 w-4/5 rounded-full bg-foreground/15" />
              <div className="h-2 w-2/5 rounded-full bg-foreground/25" />
            </div>
          ))}
        </div>
      )}

      {kind === "account" && (
        <div className="relative flex w-[86%] max-w-[280px] gap-2 rounded-xl border border-border/70 bg-background p-3 shadow-sm">
          <div className="w-16 shrink-0 space-y-2 rounded-lg bg-muted/40 p-2">
            <div className="mx-auto size-8 rounded-full bg-foreground/15" />
            <div className="h-2 rounded-full bg-foreground/10" />
            <div className="h-2 rounded-full bg-foreground/10" />
            <div className="h-2 rounded-full bg-foreground/10" />
          </div>
          <div className="min-w-0 flex-1 space-y-2">
            <div className="h-2.5 w-20 rounded-full bg-foreground/15" />
            <div className="h-8 rounded-md border border-border/60 bg-muted/40" />
            <div className="h-8 rounded-md border border-border/60 bg-muted/40" />
            <div className="h-8 rounded-md bg-foreground/85" />
          </div>
        </div>
      )}

      {kind === "chat" && (
        <div className="relative w-[86%] max-w-[280px] space-y-2 rounded-xl border border-border/70 bg-background p-3 shadow-sm">
          <div className="ms-auto max-w-[70%] rounded-2xl rounded-es-md bg-foreground/90 px-3 py-2">
            <div className="h-2 w-16 rounded-full bg-background/40" />
          </div>
          <div className="max-w-[75%] rounded-2xl rounded-ee-md bg-muted/70 px-3 py-2">
            <div className="mb-1.5 h-2 w-24 rounded-full bg-foreground/15" />
            <div className="h-2 w-16 rounded-full bg-foreground/10" />
          </div>
          <div className="ms-auto max-w-[60%] rounded-2xl rounded-es-md bg-foreground/90 px-3 py-2">
            <div className="h-2 w-12 rounded-full bg-background/40" />
          </div>
        </div>
      )}

      {kind === "search" && (
        <div className="relative w-[86%] max-w-[280px] rounded-xl border border-border/70 bg-background p-3 shadow-sm">
          <div className="mb-3 flex h-9 items-center gap-2 rounded-lg border border-border/70 bg-muted/40 px-2.5">
            <div className="size-3.5 rounded-full border-2 border-foreground/25" />
            <div className="h-2 flex-1 rounded-full bg-foreground/10" />
          </div>
          <div className="space-y-2">
            <div className="h-8 rounded-md bg-muted/50" />
            <div className="h-8 rounded-md bg-muted/50" />
            <div className="h-8 rounded-md bg-muted/50" />
          </div>
        </div>
      )}

      {kind === "media" && (
        <div className="relative grid w-[86%] max-w-[280px] grid-cols-3 gap-1.5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-lg border border-border/60 bg-background shadow-sm"
            >
              <div className="size-full rounded-lg bg-muted/60" />
            </div>
          ))}
        </div>
      )}

      {kind === "calendar" && (
        <div className="relative w-[78%] max-w-[240px] rounded-xl border border-border/70 bg-background p-3 shadow-sm">
          <div className="mb-2 flex items-center justify-between">
            <div className="h-2.5 w-16 rounded-full bg-foreground/15" />
            <div className="h-2 w-10 rounded-full bg-foreground/10" />
          </div>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 28 }).map((_, i) => (
              <div
                key={i}
                className={`aspect-square rounded-sm ${
                  i === 15 ? "bg-foreground/85" : "bg-muted/60"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {kind === "billing" && (
        <div className="relative w-[86%] max-w-[280px] rounded-xl border border-border/70 bg-background p-3 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <div className="h-2.5 w-16 rounded-full bg-foreground/15" />
            <div className="h-2 w-12 rounded-full bg-foreground/25" />
          </div>
          <div className="mb-2 space-y-1.5">
            <div className="flex justify-between gap-2">
              <div className="h-2 w-20 rounded-full bg-foreground/10" />
              <div className="h-2 w-10 rounded-full bg-foreground/15" />
            </div>
            <div className="flex justify-between gap-2">
              <div className="h-2 w-16 rounded-full bg-foreground/10" />
              <div className="h-2 w-10 rounded-full bg-foreground/15" />
            </div>
          </div>
          <div className="h-9 rounded-md bg-foreground/90" />
        </div>
      )}

      {kind === "state" && (
        <div className="relative flex w-[78%] max-w-[240px] flex-col items-center rounded-xl border border-border/70 bg-background px-4 py-6 shadow-sm">
          <div className="mb-3 size-10 rounded-full bg-muted/80" />
          <div className="mb-2 h-2.5 w-24 rounded-full bg-foreground/15" />
          <div className="mb-4 h-2 w-32 rounded-full bg-foreground/10" />
          <div className="h-8 w-24 rounded-md bg-foreground/85" />
        </div>
      )}

      <span className="sr-only">{title}</span>
    </div>
  )
}

function SampleCard({
  sample,
  kind,
}: {
  sample: FeaturedBlockSample
  kind: PreviewKind
}) {
  const countLabel = sample.blockCount.toLocaleString("fa-IR")

  return (
    <article
      dir="rtl"
      lang="fa"
      className="group flex flex-col overflow-hidden rounded-xl border border-border/80 bg-background transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-border hover:shadow-md"
    >
      <Link
        href={sample.item.href}
        className="block"
        aria-label={`مشاهده دسته ${sample.item.title}`}
      >
        <SamplePreview title={sample.item.title} kind={kind} />
      </Link>

      <div className="flex items-center justify-between gap-3 border-t border-border/70 px-3.5 py-3">
        <div className="min-w-0 text-start">
          <h3 className="truncate text-sm font-semibold tracking-tight">
            {sample.item.title}
          </h3>
          <p className="mt-0.5 truncate text-xs text-muted-foreground">
            <span dir="ltr" className="font-medium">
              {sample.item.en}
            </span>
            <span className="mx-1.5 text-border">·</span>
            <span>{countLabel} بلوک</span>
          </p>
        </div>

        <Button
          asChild
          size="sm"
          variant="outline"
          className="shrink-0 gap-1.5 rounded-lg ps-3 pe-2.5"
        >
          <Link href={sample.item.href}>
            مشاهده
            <ArrowLeftIcon className="size-3.5 opacity-70" />
          </Link>
        </Button>
      </div>
    </article>
  )
}

export function BlocksShowcase({
  groups,
}: {
  groups: FeaturedBlockGroup[]
  styleName: Style["name"]
}) {
  const totalCategories = groups.reduce(
    (sum, group) => sum + group.samples.length,
    0
  )

  return (
    <div dir="rtl" lang="fa" className="flex flex-col gap-10 pb-10">
      <header className="relative overflow-hidden rounded-2xl border border-border/70 bg-background px-5 py-7 sm:px-7 sm:py-9">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_100%_0%,color-mix(in_oklch,var(--foreground)_8%,transparent),transparent_55%),radial-gradient(90%_70%_at_0%_100%,color-mix(in_oklch,var(--muted-foreground)_10%,transparent),transparent_50%)]"
        />
        <div className="relative flex flex-col gap-3">
          <p className="text-xs font-medium tracking-wide text-muted-foreground">
            ویژه
          </p>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            بلوک‌های آماده
          </h1>
          <p className="max-w-2xl text-pretty text-sm leading-7 text-muted-foreground sm:text-[0.95rem]">
            نمونه‌ای از هر دسته کنار هم. روی کارت یا «مشاهده» بزنید تا همهٔ
            بلوک‌های همان دسته را ببینید و کپی کنید.
          </p>
          <p className="text-xs text-muted-foreground/80">
            {totalCategories.toLocaleString("fa-IR")} دسته
          </p>
        </div>
      </header>

      {groups.map((group) => {
        const kind = previewKindForGroup(group.slug)
        return (
          <section key={group.slug} className="flex flex-col gap-4">
            <div className="flex items-baseline justify-between gap-3 px-0.5">
              <h2 className="text-base font-semibold tracking-tight sm:text-lg">
                {group.title}
              </h2>
              <span className="text-xs text-muted-foreground">
                {group.samples.length.toLocaleString("fa-IR")} دسته
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-3">
              {group.samples.map((sample) => (
                <SampleCard
                  key={sample.item.slug}
                  sample={sample}
                  kind={kind}
                />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
