"use client"

import { cn } from "cn"

import {
  useDesignSystemPreview,
  type DesignSystemId,
} from "@/components/design-system-preview"
import { prefetchDesignSystemStyles } from "@/lib/design-system-style-loader"
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
}: React.ComponentProps<"div">) {
  const { designSystemId, setDesignSystemId, presets } =
    useDesignSystemPreview()

  const items = presets.map((preset) => ({
    label: preset.label,
    value: preset.id,
  }))

  return (
    <div className={cn("flex items-center", className)}>
      <Select
        items={items}
        value={designSystemId}
        modal={false}
        onOpenChange={(open) => {
          if (open) prefetchDesignSystemStyles(designSystemId)
        }}
        onValueChange={(value) => {
          if (value) setDesignSystemId(value as DesignSystemId)
        }}
      >
        <SelectTrigger
          id="design-system-picker"
          size="sm"
          aria-label="سیستم طراحی"
          className="h-8 w-auto min-w-0 cursor-pointer justify-start gap-1 border-border/80 bg-background/80 pe-2 ps-2.5 text-xs shadow-none *:data-[slot=select-value]:flex-none"
          onPointerEnter={() => prefetchDesignSystemStyles(designSystemId)}
          onFocus={() => prefetchDesignSystemStyles(designSystemId)}
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
