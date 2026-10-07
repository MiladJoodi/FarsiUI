import { cn } from "cn"

const pulse = "animate-pulse rounded-md bg-muted-foreground/20"
const pulseMid = "animate-pulse rounded-md bg-muted-foreground/30"
const pulseBold = "animate-pulse rounded-md bg-muted-foreground/40"

/** Abstract content placeholder — not chart-shaped, so it won’t be mistaken for data. */
export function ChartPlotSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex size-full flex-col justify-center gap-3 bg-muted/60 p-5",
        className
      )}
      aria-hidden
    >
      <div className={cn("h-3 w-1/3", pulseBold)} />
      <div className={cn("h-3 w-2/3", pulse)} />
      <div className={cn("h-3 w-1/2", pulseMid)} />
      <div className="mt-2 grid flex-1 grid-cols-3 gap-2 min-h-0">
        <div className={cn("min-h-16 rounded-lg", pulse)} />
        <div className={cn("min-h-16 rounded-lg", pulseMid)} />
        <div className={cn("min-h-16 rounded-lg", pulse)} />
      </div>
      <div className={cn("h-3 w-3/4", pulse)} />
      <div className={cn("h-3 w-2/5", pulseMid)} />
    </div>
  )
}

/** One chart card: toolbar row + abstract body. */
export function ChartCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-border/80 bg-background">
      <div className="flex items-center gap-2 px-3 py-2.5">
        <div className={cn("size-3.5 shrink-0", pulseMid)} />
        <div className={cn("h-3 w-20", pulseBold)} />
        <div className="ms-auto flex items-center gap-2">
          <div className={cn("size-6", pulse)} />
          <div className={cn("size-6", pulse)} />
        </div>
      </div>
      <div className="h-[460px] overflow-hidden rounded-xl border-t border-border/60">
        <ChartPlotSkeleton />
      </div>
    </div>
  )
}

/** Index grid card: title row + soft tile (charts/blocks showcase). */
export function ShowcaseTileSkeleton({
  variant = "chart",
}: {
  variant?: "chart" | "block"
}) {
  return (
    <div className="min-w-0 border-b border-border/60 last:border-b-0 md:border-b-0">
      <div className="flex min-w-0 items-baseline gap-2 py-3 md:hidden">
        <div className={cn("h-3.5 w-16", pulseBold)} />
        <span className="mb-1 min-w-4 flex-1 border-b border-dashed border-muted-foreground/30" />
        <div className={cn("h-3 w-10", pulse)} />
      </div>
      <div className="hidden min-w-0 flex-col gap-2 md:flex">
        <div className="flex min-w-0 items-baseline gap-2">
          <div className={cn("h-3.5 w-16", pulseBold)} />
          <span className="mb-1 min-w-4 flex-1 border-b border-dashed border-muted-foreground/30" />
          <div className={cn("h-3 w-12", pulse)} />
        </div>
        <div className="overflow-hidden rounded-xl border border-border bg-background">
          <div className="relative aspect-16/5 overflow-hidden">
            {variant === "chart" ? (
              <ChartPlotSkeleton className="bg-muted p-3" />
            ) : (
              <BlockTileWireSkeleton />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function BlockTileWireSkeleton() {
  return (
    <div className="flex size-full items-center justify-center bg-muted p-2">
      <div className="flex w-full max-w-[94%] flex-col gap-1.5 overflow-hidden rounded-md border border-border/70 bg-background p-2.5 shadow-sm">
        <div className={cn("h-2 w-1/2", pulseBold)} />
        <div className={cn("h-1.5 w-3/4", pulse)} />
        <div className={cn("mt-0.5 h-5 w-full border border-border/50", pulse)} />
        <div className={cn("h-5 w-full border border-border/50", pulse)} />
        <div className={cn("mt-0.5 h-6 w-full", pulseBold)} />
      </div>
    </div>
  )
}

/** Inside the block demo frame (login card etc.) — high-contrast, form-like. */
export function BlockDemoSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex size-full items-center justify-center bg-muted/50 p-6 md:p-10",
        className
      )}
      aria-hidden
    >
      <div className="flex w-full max-w-sm flex-col gap-3 rounded-xl border border-border/80 bg-background p-5 shadow-sm">
        <div className={cn("mx-auto size-9", pulseMid)} />
        <div className={cn("mx-auto h-5 w-36", pulseBold)} />
        <div className={cn("mx-auto h-3 w-24", pulse)} />
        <div className="mt-2 flex flex-col gap-2">
          <div className={cn("h-3 w-14", pulseMid)} />
          <div className={cn("h-10 w-full border border-border/60", pulse)} />
        </div>
        <div className="flex flex-col gap-2">
          <div className={cn("h-3 w-14", pulseMid)} />
          <div className={cn("h-10 w-full border border-border/60", pulse)} />
        </div>
        <div className={cn("mt-1 h-10 w-full", pulseBold)} />
      </div>
    </div>
  )
}

/** Category block preview card (toolbar + tall preview). */
export function BlockPreviewCardSkeleton() {
  return (
    <div className="flex flex-col gap-2 overflow-hidden rounded-xl border border-border/80 bg-background">
      <div className="flex items-center gap-2 px-3 py-2.5">
        <div className={cn("h-3.5 w-28", pulseBold)} />
        <div className="ms-auto flex items-center gap-2">
          <div className={cn("h-7 w-16", pulse)} />
          <div className={cn("size-7", pulse)} />
        </div>
      </div>
      <div className="mx-2 mb-2 h-[420px] overflow-hidden rounded-xl border border-border/80 md:h-[520px]">
        <BlockDemoSkeleton />
      </div>
    </div>
  )
}
