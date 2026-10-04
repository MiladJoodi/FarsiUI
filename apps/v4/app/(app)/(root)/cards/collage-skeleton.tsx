import type { CSSProperties, ReactNode } from "react"

import { cn } from "cn"

const COLLAGE_SURFACE =
  "bg-muted [background-image:linear-gradient(to_bottom,var(--background)_0%,var(--background)_1.25rem,var(--muted)_5.5rem)] dark:bg-background dark:[background-image:none]"

function Bone({
  className,
  style,
}: {
  className?: string
  style?: CSSProperties
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "rounded-md bg-foreground/8 dark:bg-foreground/12",
        className
      )}
      style={style}
    />
  )
}

function Shell({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-3 rounded-2xl border border-border/60 bg-card p-4",
        className
      )}
    >
      {children}
    </div>
  )
}

function CalendarSkeleton() {
  return (
    <Shell className="gap-2.5 p-3">
      <div className="flex items-center justify-between px-1">
        <Bone className="h-4 w-28 rounded-full" />
        <div className="flex gap-1">
          <Bone className="size-8 rounded-lg" />
          <Bone className="size-8 rounded-lg" />
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1.5 px-0.5">
        {Array.from({ length: 7 }).map((_, i) => (
          <Bone key={`w-${i}`} className="mx-auto h-2.5 w-3.5 rounded-full" />
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1.5">
        {Array.from({ length: 35 }).map((_, i) => (
          <Bone
            key={i}
            className={cn(
              "aspect-square w-full rounded-lg",
              i === 16 && "bg-primary/25 dark:bg-primary/30"
            )}
          />
        ))}
      </div>
    </Shell>
  )
}

function ChartSkeleton() {
  const bars = [46, 72, 58, 88, 40, 76]
  return (
    <Shell>
      <div className="flex flex-col gap-2">
        <Bone className="h-4 w-36 rounded-full" />
        <Bone className="h-3 w-48 rounded-full" />
      </div>
      <div className="flex h-[180px] items-end gap-2.5 pt-2">
        {bars.map((height, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-2">
            <Bone
              className="w-full max-w-11 rounded-t-xl rounded-b-md bg-primary/15 dark:bg-primary/20"
              style={{ height: `${height}%` }}
            />
            <Bone className="h-2.5 w-6 rounded-full" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2 rounded-xl bg-muted/70 p-3">
          <Bone className="h-2.5 w-16 rounded-full" />
          <Bone className="h-4 w-24 rounded-full" />
        </div>
        <div className="flex flex-col gap-2 rounded-xl bg-muted/70 p-3">
          <Bone className="h-2.5 w-20 rounded-full" />
          <Bone className="h-4 w-28 rounded-full" />
        </div>
      </div>
      <Bone className="h-9 w-full rounded-xl" />
    </Shell>
  )
}

function ChatSkeleton() {
  return (
    <Shell className="mx-auto h-140 max-w-sm gap-0 overflow-hidden p-0">
      <div className="flex flex-col gap-2 border-b border-border/50 px-4 py-3">
        <Bone className="h-4 w-28 rounded-full" />
        <Bone className="h-3 w-40 rounded-full" />
      </div>
      <div className="flex flex-1 flex-col gap-3 overflow-hidden p-4">
        <Bone className="ms-10 h-14 w-[72%] rounded-2xl rounded-ss-md bg-primary/12" />
        <Bone className="me-10 h-12 w-[78%] self-end rounded-2xl rounded-se-md" />
        <Bone className="ms-10 h-11 w-[68%] rounded-2xl rounded-ss-md bg-primary/12" />
        <Bone className="me-10 h-16 w-[74%] self-end rounded-2xl rounded-se-md" />
      </div>
      <div className="flex items-center gap-2 border-t border-border/50 p-3">
        <Bone className="h-11 flex-1 rounded-full" />
        <Bone className="size-11 rounded-full bg-primary/25 dark:bg-primary/30" />
      </div>
    </Shell>
  )
}

function UiKitSkeleton() {
  return (
    <Shell>
      <div className="flex gap-2">
        <Bone className="h-9 w-20 rounded-xl" />
        <Bone className="h-9 w-24 rounded-xl" />
        <Bone className="h-9 w-20 rounded-xl" />
      </div>
      <Bone className="h-10 w-full rounded-xl" />
      <Bone className="h-20 w-full rounded-xl" />
      <div className="flex items-center gap-2">
        <Bone className="h-5 w-14 rounded-full" />
        <Bone className="h-5 w-16 rounded-full" />
        <Bone className="ms-auto size-4 rounded-full" />
        <Bone className="size-4 rounded-full" />
      </div>
      <div className="flex gap-2">
        <Bone className="h-9 w-28 rounded-xl" />
        <Bone className="h-9 w-9 rounded-xl" />
      </div>
    </Shell>
  )
}

function SidebarSkeleton() {
  return (
    <Shell className="gap-2 overflow-hidden rounded-3xl p-2">
      {[0, 1].map((group) => (
        <div key={group} className="flex flex-col gap-1 px-2 py-1.5">
          <Bone className="mb-1 h-2.5 w-16 rounded-full" />
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2.5 rounded-xl px-2 py-2">
              <Bone className="size-4 rounded-md" />
              <Bone className="h-3 w-24 rounded-full" />
            </div>
          ))}
        </div>
      ))}
    </Shell>
  )
}

function MenubarSkeleton() {
  return (
    <Shell className="p-2.5">
      <div className="flex gap-1 rounded-xl bg-muted/80 p-1">
        <Bone className="h-8 w-14 rounded-lg" />
        <Bone className="h-8 w-16 rounded-lg" />
        <Bone className="h-8 w-16 rounded-lg" />
        <Bone className="h-8 w-[4.5rem] rounded-lg" />
      </div>
    </Shell>
  )
}

function SyncSkeleton() {
  return (
    <Shell className="flex-row items-center gap-3 py-3.5">
      <Bone className="size-10 shrink-0 rounded-full" />
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <Bone className="h-3.5 w-28 rounded-full" />
        <Bone className="h-3 w-40 rounded-full" />
      </div>
      <Bone className="h-8 w-20 shrink-0 rounded-xl" />
    </Shell>
  )
}

function FormSkeleton() {
  return (
    <Shell>
      <div className="flex flex-col gap-2">
        <Bone className="h-4 w-32 rounded-full" />
        <Bone className="h-3 w-48 rounded-full" />
      </div>
      <Bone className="h-10 w-full rounded-xl" />
      <Bone className="h-10 w-full rounded-xl" />
      <Bone className="h-24 w-full rounded-xl" />
      <Bone className="h-9 w-full rounded-xl bg-primary/15 dark:bg-primary/20" />
    </Shell>
  )
}

function ListSkeleton({ rows = 3 }: { rows?: number }) {
  return (
    <Shell>
      <div className="flex flex-col gap-2">
        <Bone className="h-4 w-28 rounded-full" />
        <Bone className="h-3 w-40 rounded-full" />
      </div>
      <div className="flex flex-col gap-2">
        {Array.from({ length: rows }).map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-xl border border-border/50 bg-muted/40 p-3"
          >
            <Bone className="size-9 rounded-xl" />
            <div className="flex flex-1 flex-col gap-2">
              <Bone className="h-3.5 w-28 rounded-full" />
              <Bone className="h-2.5 w-40 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </Shell>
  )
}

function StatSkeleton() {
  return (
    <Shell>
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-2">
          <Bone className="h-4 w-24 rounded-full" />
          <Bone className="h-7 w-20 rounded-full" />
        </div>
        <Bone className="h-6 w-14 rounded-full bg-primary/15" />
      </div>
      <Bone className="h-16 w-full rounded-xl" />
    </Shell>
  )
}

function ProgressSkeleton() {
  return (
    <Shell>
      <Bone className="h-4 w-36 rounded-full" />
      <Bone className="h-3 w-52 rounded-full" />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <Bone className="h-3 w-24 rounded-full" />
          <Bone className="h-3 w-12 rounded-full" />
        </div>
        <Bone className="h-2.5 w-full rounded-full" />
      </div>
      <div className="flex flex-col gap-2">
        <Bone className="h-3 w-20 rounded-full" />
        <Bone className="h-2.5 w-[70%] rounded-full bg-primary/20" />
      </div>
      <Bone className="h-9 w-full rounded-xl" />
    </Shell>
  )
}

/** Static collage placeholder — shape-matched cards, no motion. */
export function CollageSkeleton({ mobile = false }: { mobile?: boolean }) {
  const col = (visibleFrom: string) =>
    mobile
      ? "flex h-full min-w-0 flex-col gap-(--gap)"
      : `hidden h-full flex-col gap-(--gap) ${visibleFrom}`

  return (
    <div
      aria-busy="true"
      aria-label="در حال بارگذاری نمونه‌ها"
      data-collage-surface=""
      className={cn("relative w-full overflow-x-clip", COLLAGE_SURFACE)}
    >
      <div
        className={cn(
          "theme-container relative z-10 flex w-full max-w-none flex-col gap-(--gap) px-6 pt-6 pb-0! [--gap:--spacing(6)] md:px-12 lg:[--gap:--spacing(6)] min-[1900px]:[--gap:--spacing(10)]",
          mobile && "px-12"
        )}
      >
        <div
          className={
            mobile
              ? "relative z-10 grid grid-cols-5 items-stretch gap-(--gap) **:data-[slot=card]:w-full"
              : "relative z-10 mx-auto grid items-stretch gap-(--gap) **:data-[slot=card]:w-full min-[1400px]:grid-cols-4! min-[1900px]:grid-cols-5! md:max-w-3xl md:grid-cols-2 lg:max-w-none lg:grid-cols-3 xl:max-w-[1600px] 2xl:max-w-[1900px]"
          }
        >
          <div className="flex h-full min-w-0 flex-col gap-(--gap)">
            <UiKitSkeleton />
            <CalendarSkeleton />
            <SidebarSkeleton />
            <MenubarSkeleton />
            <SyncSkeleton />
            <ProgressSkeleton />
          </div>
          <div className={col("lg:flex")}>
            <ChartSkeleton />
            <StatSkeleton />
            <ListSkeleton rows={3} />
            <FormSkeleton />
            <ListSkeleton rows={2} />
          </div>
          <div className={col("min-[1400px]:flex")}>
            <FormSkeleton />
            <ProgressSkeleton />
            <ListSkeleton rows={3} />
            <StatSkeleton />
            <FormSkeleton />
          </div>
          <div className={col("md:flex")}>
            <ChatSkeleton />
            <ListSkeleton rows={3} />
            <StatSkeleton />
            <FormSkeleton />
            <ListSkeleton rows={2} />
          </div>
          <div className={col("min-[1900px]:flex")}>
            <StatSkeleton />
            <ChartSkeleton />
            <ListSkeleton rows={3} />
            <ProgressSkeleton />
            <FormSkeleton />
            <ListSkeleton rows={2} />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-40 bg-linear-to-t from-background via-muted/80 to-transparent lg:h-48 dark:via-background/80" />
    </div>
  )
}
