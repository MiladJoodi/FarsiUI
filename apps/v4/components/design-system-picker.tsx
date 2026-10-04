"use client"

import { cn } from "cn"

import {
  useDesignSystemPreview,
  type DesignSystemId,
} from "@/components/design-system-preview"
import { schedulePrefetchDesignSystemStyles } from "@/lib/design-system-style-loader"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/styles/base-nova/ui/select"

export function DesignSystemPicker({
  className,
  fullWidth = false,
}: React.ComponentProps<"div"> & { fullWidth?: boolean }) {
  const { designSystemId, setDesignSystemId, presets } =
    useDesignSystemPreview()

  const items = presets.map((preset) => ({
    label: preset.label,
    value: preset.id,
  }))

  return (
    <div className={cn("flex items-center", fullWidth && "w-full", className)}>
      <Select
        items={items}
        value={designSystemId}
        modal={false}
        onValueChange={(value) => {
          if (value) setDesignSystemId(value as DesignSystemId)
        }}
      >
        <SelectTrigger
          id="design-system-picker"
          size="sm"
          aria-label="سیستم طراحی"
          className={cn(
            "h-8 min-w-0 cursor-pointer justify-start gap-1 border-border/80 bg-background/80 pe-2 ps-2.5 text-xs shadow-none *:data-[slot=select-value]:flex-none",
            fullWidth ? "w-full" : "w-auto"
          )}
          onPointerEnter={() =>
            schedulePrefetchDesignSystemStyles(designSystemId)
          }
          onFocus={() => schedulePrefetchDesignSystemStyles(designSystemId)}
        >
          <SelectValue placeholder="پیشفرض" />
        </SelectTrigger>
        <SelectContent align="end" alignItemWithTrigger={false}>
          <SelectGroup>
            {items.map((item) => (
              <SelectItem
                key={item.value}
                value={item.value}
                className="cursor-pointer"
              >
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
