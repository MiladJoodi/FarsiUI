"use client"

import {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useState,
  type ComponentProps,
} from "react"
import { usePathname } from "next/navigation"
import { SlidersHorizontalIcon } from "lucide-react"
import { cn } from "cn"

import { useDesignStudioSummary } from "@/components/design-studio-summary"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/new-york-v4/ui/drawer"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover"
import { Skeleton } from "@/registry/new-york-v4/ui/skeleton"

const DesignStudioPanel = lazy(async () => {
  const mod = await import("@/components/design-studio-panel")
  return { default: mod.DesignStudioPanel }
})

function prefetchDesignStudioPanel() {
  void import("@/components/design-studio-panel")
}

function DesignStudioSkeleton() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex flex-col gap-3"
      aria-busy="true"
      aria-label="در حال بارگذاری دیزاین"
    >
      <div className="grid grid-cols-3 gap-1 rounded-xl bg-muted p-1">
        <Skeleton className="h-9 rounded-lg" />
        <Skeleton className="h-9 rounded-lg" />
        <Skeleton className="h-9 rounded-lg" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-1.5 rounded-xl border border-border/70 p-2"
          >
            <Skeleton className="h-10 w-full rounded-md" />
            <Skeleton className="h-3 w-16" />
          </div>
        ))}
      </div>
    </div>
  )
}

function DesignTriggerButton({
  open,
  className,
  ...props
}: ComponentProps<typeof Button> & { open?: boolean }) {
  const { summary } = useDesignStudioSummary()

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      aria-label={`انتخاب دیزاین سیستم · ${summary}`}
      aria-haspopup="dialog"
      aria-expanded={open}
      onPointerEnter={prefetchDesignStudioPanel}
      onFocus={prefetchDesignStudioPanel}
      className={cn(
        "h-8 shrink-0 cursor-pointer gap-1.5 rounded-lg border-none bg-muted px-3 text-sm font-medium text-foreground shadow-none transition-colors hover:bg-muted/50 dark:bg-card dark:hover:bg-card/80",
        open && "bg-muted/80 dark:bg-card/70",
        className
      )}
      {...props}
    >
      <SlidersHorizontalIcon className="size-4 shrink-0 text-muted-foreground" />
      <span className="truncate sm:hidden">دیزاین سیستم</span>
      <span className="hidden truncate sm:inline">انتخاب دیزاین سیستم</span>
    </Button>
  )
}

function StudioBody({ hideColor }: { hideColor: boolean }) {
  return (
    <Suspense fallback={<DesignStudioSkeleton />}>
      <DesignStudioPanel hideColor={hideColor} />
    </Suspense>
  )
}

function MobileDesignStudio({
  hideColor,
  className,
  initialOpen = false,
}: {
  hideColor: boolean
  className?: string
  initialOpen?: boolean
}) {
  const [open, setOpen] = useState(initialOpen)

  useEffect(() => {
    if (initialOpen) prefetchDesignStudioPanel()
  }, [initialOpen])

  const onOpenChange = useCallback((next: boolean) => {
    if (next) prefetchDesignStudioPanel()
    setOpen(next)
  }, [])

  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
      shouldScaleBackground={false}
      repositionInputs={false}
    >
      <DrawerTrigger asChild>
        <DesignTriggerButton open={open} className={className} />
      </DrawerTrigger>
      <DrawerContent
        dir="rtl"
        lang="fa"
        className="max-h-[min(88vh,36rem)] rounded-t-2xl"
      >
        <DrawerHeader className="pb-2 text-start">
          <DrawerTitle className="text-base">دیزاین</DrawerTitle>
          <DrawerDescription className="sr-only">
            ظاهر، فونت و رنگ
          </DrawerDescription>
        </DrawerHeader>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-6">
          {open ? <StudioBody hideColor={hideColor} /> : null}
        </div>
      </DrawerContent>
    </Drawer>
  )
}

function DesktopDesignStudio({
  hideColor,
  initialOpen = false,
}: {
  hideColor: boolean
  initialOpen?: boolean
}) {
  const [open, setOpen] = useState(initialOpen)

  useEffect(() => {
    if (initialOpen) prefetchDesignStudioPanel()
  }, [initialOpen])

  const onOpenChange = useCallback((next: boolean) => {
    if (next) prefetchDesignStudioPanel()
    setOpen(next)
  }, [])

  return (
    <Popover open={open} onOpenChange={onOpenChange} modal={false}>
      <PopoverTrigger asChild>
        <DesignTriggerButton open={open} />
      </PopoverTrigger>
      <PopoverContent
        dir="rtl"
        lang="fa"
        align="center"
        side="bottom"
        sideOffset={8}
        className="w-[min(22.5rem,calc(100vw-1.5rem))] p-0 duration-100 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-100 data-[state=open]:fade-in-0 data-[state=open]:zoom-in-100"
      >
        <div className="max-h-[min(70vh,28rem)] overflow-y-auto overscroll-contain p-3.5">
          {open ? <StudioBody hideColor={hideColor} /> : null}
        </div>
      </PopoverContent>
    </Popover>
  )
}

/** Unified Design Studio: Popover on desktop, Drawer on mobile. */
export function HeaderDesignControls({
  className,
}: ComponentProps<"div">) {
  const pathname = usePathname()
  const hideColor =
    pathname === "/showcase" || pathname.startsWith("/showcase/")
  const isDesktop = useMediaQuery("(min-width: 640px)")
  const [mounted, setMounted] = useState(false)
  const [pendingOpen, setPendingOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Until breakpoint is known, show a light trigger (no dual Popover+Drawer mount).
  if (!mounted) {
    return (
      <div className={cn("flex min-w-0 items-center", className)}>
        <DesignTriggerButton
          open={pendingOpen}
          onClick={() => {
            prefetchDesignStudioPanel()
            setPendingOpen(true)
          }}
        />
      </div>
    )
  }

  return (
    <div className={cn("flex min-w-0 items-center", className)}>
      {isDesktop ? (
        <DesktopDesignStudio
          hideColor={hideColor}
          initialOpen={pendingOpen}
        />
      ) : (
        <MobileDesignStudio
          hideColor={hideColor}
          initialOpen={pendingOpen}
        />
      )}
    </div>
  )
}
