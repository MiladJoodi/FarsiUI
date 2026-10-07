import { cn } from "cn"

const pulse = "animate-pulse rounded-sm bg-muted-foreground/20"
const pulseMid = "animate-pulse rounded-sm bg-muted-foreground/30"
const pulseBold = "animate-pulse rounded-sm bg-muted-foreground/40"

/** Plain muted skeleton (no chart-shaped art). Used in iframes + route loading. */
export function ChartPlotSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex size-full flex-col justify-center gap-2 bg-transparent p-3",
        className
      )}
      aria-hidden
    >
      <div className={cn("h-2.5 w-1/3 rounded-md", pulseBold)} />
      <div className={cn("h-2 w-2/3 rounded-md", pulse)} />
      <div className={cn("mt-0.5 min-h-8 flex-1 rounded-md", pulseMid)} />
    </div>
  )
}

/** One chart card: toolbar row + plot (matches ChartDisplay). */
export function ChartCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-border/80 bg-background">
      <div className="flex items-center gap-2 px-3 py-2.5">
        <div className={cn("size-3.5 shrink-0 rounded-sm", pulseMid)} />
        <div className={cn("h-3 w-20", pulseBold)} />
        <div className="ms-auto flex items-center gap-2">
          <div className={cn("h-6 w-6 rounded-md", pulse)} />
          <div className={cn("h-6 w-6 rounded-md", pulse)} />
        </div>
      </div>
      <div className="h-[460px] overflow-hidden rounded-xl border-t border-border/60">
        <ChartPlotSkeleton />
      </div>
    </div>
  )
}

/** Index grid card: title row + wireframe stage (charts/blocks showcase). */
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
              <ChartPlotSkeleton className="bg-transparent p-2" />
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
    <div className="flex size-full items-center justify-center bg-transparent p-2">
      <div className="flex w-full max-w-[94%] flex-col gap-1 overflow-hidden rounded-md border border-border/40 bg-background/80 p-2 shadow-none">
        <div className={cn("h-1.5 w-1/2", pulseBold)} />
        <div className={cn("h-1 w-3/4", pulse)} />
        <div className={cn("mt-0.5 h-4 w-full rounded-sm border border-border/60", pulse)} />
        <div className={cn("h-4 w-full rounded-sm border border-border/60", pulse)} />
        <div className={cn("mt-0.5 h-5 w-full", pulseBold)} />
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
          <div className={cn("h-7 w-16 rounded-md", pulse)} />
          <div className={cn("h-7 w-7 rounded-md", pulse)} />
        </div>
      </div>
      <div className="mx-2 mb-2 h-[420px] overflow-hidden rounded-xl border border-border/80 bg-muted/40 md:h-[520px]">
        <div className="flex size-full items-center justify-center p-6 md:p-10">
          <div className="flex w-full max-w-sm flex-col gap-3">
            <div className={cn("mx-auto size-8 rounded-md", pulseMid)} />
            <div className={cn("mx-auto h-5 w-40", pulseBold)} />
            <div className={cn("mx-auto h-3 w-28", pulse)} />
            <div className={cn("mt-2 h-3 w-16", pulseMid)} />
            <div className={cn("h-9 w-full rounded-md", pulse)} />
            <div className={cn("h-9 w-full rounded-md", pulse)} />
            <div className={cn("h-9 w-full rounded-md", pulseBold)} />
          </div>
        </div>
      </div>
    </div>
  )
}
