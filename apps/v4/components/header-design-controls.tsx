"use client"

import { useState } from "react"
import { SlidersHorizontalIcon } from "lucide-react"
import { cn } from "cn"

import { useDesignSystemPreview } from "@/components/design-system-preview"
import { DesignSystemPicker } from "@/components/design-system-picker"
import { FontPicker } from "@/components/font-picker"
import { HeaderPrimaryColors } from "@/components/header-primary-colors"
import { schedulePrefetchDesignSystemStyles } from "@/lib/design-system-style-loader"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/new-york-v4/ui/drawer"
import { Separator } from "@/registry/new-york-v4/ui/separator"

const OWNED_ACCENT_SYSTEMS = new Set(["glass", "rose", "nili", "khesht"])

function DesignControlFields({ fullWidth = false }: { fullWidth?: boolean }) {
  const { designSystemId } = useDesignSystemPreview()
  const showPrimaryColor = !OWNED_ACCENT_SYSTEMS.has(designSystemId)

  return (
    <>
      <div className="grid gap-1.5">
        {fullWidth ? (
          <span className="text-xs text-muted-foreground">سیستم طراحی</span>
        ) : null}
        <DesignSystemPicker fullWidth={fullWidth} />
      </div>
      <div className="grid gap-1.5">
        {fullWidth ? (
          <span className="text-xs text-muted-foreground">فونت</span>
        ) : null}
        <FontPicker fullWidth={fullWidth} />
      </div>
      {showPrimaryColor ? (
        <div className={cn("grid gap-1.5", fullWidth && "pt-1")}>
          {fullWidth ? (
            <span className="text-xs text-muted-foreground">رنگ اصلی</span>
          ) : null}
          <HeaderPrimaryColors />
        </div>
      ) : null}
    </>
  )
}

function MobileDesignButton({ className }: { className?: string }) {
  const [open, setOpen] = useState(false)

  return (
    <Drawer
      open={open}
      onOpenChange={(next) => {
        setOpen(next)
        if (next) schedulePrefetchDesignSystemStyles()
      }}
    >
      <DrawerTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="sm"
          aria-label="دیزاین"
          className={cn(
            "h-8 shrink-0 cursor-pointer gap-1.5 border-border/80 bg-background/80 px-2.5 text-xs shadow-none",
            className
          )}
          onPointerEnter={() => schedulePrefetchDesignSystemStyles()}
        >
          <SlidersHorizontalIcon className="size-3.5" />
          دیزاین
        </Button>
      </DrawerTrigger>
      <DrawerContent dir="rtl" lang="fa" className="rounded-t-2xl">
        <DrawerHeader className="text-start">
          <DrawerTitle>دیزاین</DrawerTitle>
          <DrawerDescription>
            سیستم طراحی، فونت و رنگ اصلی را انتخاب کنید.
          </DrawerDescription>
        </DrawerHeader>
        <div className="grid gap-4 px-4 pb-6">
          <DesignControlFields fullWidth />
        </div>
      </DrawerContent>
    </Drawer>
  )
}

/** Desktop: inline pickers. Mobile: one Design button → drawer. */
export function HeaderDesignControls({
  className,
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex min-w-0 items-center gap-1.5 sm:gap-2", className)}>
      <div className="hidden items-center gap-1.5 sm:flex sm:gap-2">
        <DesignSystemPicker />
        <FontPicker />
        <Separator orientation="vertical" className="hidden sm:block" />
        <HeaderPrimaryColors />
      </div>
      <MobileDesignButton className="sm:hidden" />
    </div>
  )
}
