"use client"

import * as React from "react"
import { CheckIcon, ChevronDownIcon } from "lucide-react"
import { cn } from "cn"

import {
  useDesignSystemPreview,
  type DesignSystemId,
} from "@/components/design-system-preview"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover"

export function DesignSystemPicker({
  className,
  fullWidth = false,
}: React.ComponentProps<"div"> & { fullWidth?: boolean }) {
  const { designSystemId, setDesignSystemId, presets } =
    useDesignSystemPreview()
  const [open, setOpen] = React.useState(false)
  const active =
    presets.find((preset) => preset.id === designSystemId) ?? presets[0]

  return (
    <div
      dir="rtl"
      className={cn("flex items-center", fullWidth && "w-full", className)}
    >
      <Popover open={open} onOpenChange={setOpen} modal={false}>
        <PopoverTrigger asChild>
          <Button
            id="design-system-picker"
            type="button"
            variant="outline"
            size="sm"
            aria-label="سیستم طراحی"
            aria-haspopup="listbox"
            aria-expanded={open}
            className={cn(
              "h-8 min-w-0 cursor-pointer justify-between gap-1 border-border/80 bg-background/80 pe-2 ps-2.5 text-xs shadow-none",
              fullWidth ? "w-full" : "w-auto"
            )}
          >
            <span className="truncate">{active.label}</span>
            <ChevronDownIcon
              className={cn(
                "size-3.5 shrink-0 text-muted-foreground transition-transform duration-100",
                open && "rotate-180"
              )}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          dir="rtl"
          align="end"
          side="bottom"
          sideOffset={6}
          className="w-44 p-1.5 duration-100 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-100 data-[state=open]:fade-in-0 data-[state=open]:zoom-in-100"
        >
          <div
            role="listbox"
            aria-label="سیستم طراحی"
            className="flex flex-col gap-0.5"
          >
            {presets.map((preset) => {
              const selected = designSystemId === preset.id
              return (
                <button
                  key={preset.id}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  className={cn(
                    "flex w-full cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors",
                    "hover:bg-accent hover:text-accent-foreground",
                    selected && "bg-accent/70"
                  )}
                  onClick={() => {
                    setDesignSystemId(preset.id as DesignSystemId)
                    setOpen(false)
                  }}
                >
                  <span className="flex-1 text-start">{preset.label}</span>
                  {selected ? (
                    <CheckIcon className="size-3.5 shrink-0" aria-hidden />
                  ) : null}
                </button>
              )
            })}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
