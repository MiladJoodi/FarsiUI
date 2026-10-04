"use client"

import { useState, type ComponentProps } from "react"
import { usePathname } from "next/navigation"
import { SlidersHorizontalIcon } from "lucide-react"
import { cn } from "cn"

import {
  DesignStudioPanel,
  useDesignStudioSummary,
} from "@/components/design-studio-panel"
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
import { THEMES } from "@/lib/themes"

function themeSwatch(themeName: string) {
  const theme = THEMES.find((item) => item.name === themeName) ?? THEMES[0]
  return `hsl(${theme?.activeColor.light})`
}

function DesignTriggerButton({
  open,
  className,
  ...props
}: ComponentProps<typeof Button> & { open?: boolean }) {
  const { activeDs, showPrimaryColor, currentTheme, summary } =
    useDesignStudioSummary()

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      aria-label={`دیزاین: ${summary}`}
      aria-haspopup="dialog"
      aria-expanded={open}
      className={cn(
        "h-8 shrink-0 cursor-pointer gap-1.5 border-border/80 bg-background/80 px-2.5 text-xs shadow-none",
        className
      )}
      {...props}
    >
      <SlidersHorizontalIcon className="size-3.5 shrink-0" />
      <span className="truncate">{activeDs.label}</span>
      {showPrimaryColor ? (
        <span
          aria-hidden
          className="size-2.5 shrink-0 rounded-full ring-1 ring-foreground/15"
          style={{ backgroundColor: themeSwatch(currentTheme) }}
        />
      ) : null}
    </Button>
  )
}

function MobileDesignStudio({
  hideColor,
  className,
}: {
  hideColor: boolean
  className?: string
}) {
  const [open, setOpen] = useState(false)
  const { summary } = useDesignStudioSummary()

  return (
    <Drawer
      open={open}
      onOpenChange={setOpen}
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
        <DrawerHeader className="flex-row items-center justify-between gap-3 pb-2 text-start">
          <DrawerTitle className="text-base">دیزاین</DrawerTitle>
          <DrawerDescription className="truncate text-xs">
            {summary}
          </DrawerDescription>
        </DrawerHeader>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-6">
          <DesignStudioPanel hideColor={hideColor} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}

function DesktopDesignStudio({ hideColor }: { hideColor: boolean }) {
  const [open, setOpen] = useState(false)
  const { summary } = useDesignStudioSummary()

  return (
    <Popover open={open} onOpenChange={setOpen} modal={false}>
      <PopoverTrigger asChild>
        <DesignTriggerButton open={open} />
      </PopoverTrigger>
      <PopoverContent
        dir="rtl"
        lang="fa"
        align="end"
        side="bottom"
        sideOffset={8}
        className="w-[min(22.5rem,calc(100vw-1.5rem))] p-0 duration-100 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-100 data-[state=open]:fade-in-0 data-[state=open]:zoom-in-100"
      >
        <div className="flex items-center justify-between gap-3 border-b border-border/60 px-3.5 py-2.5 text-start">
          <p className="shrink-0 text-sm font-medium leading-none">دیزاین</p>
          <p className="truncate text-xs text-muted-foreground">{summary}</p>
        </div>
        <div className="max-h-[min(70vh,28rem)] overflow-y-auto overscroll-contain p-3.5">
          <DesignStudioPanel hideColor={hideColor} />
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

  return (
    <div className={cn("flex min-w-0 items-center", className)}>
      <div className="hidden sm:block">
        <DesktopDesignStudio hideColor={hideColor} />
      </div>
      <MobileDesignStudio hideColor={hideColor} className="sm:hidden" />
    </div>
  )
}
