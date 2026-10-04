"use client"

import { cn } from "cn"

import { useFontPreview } from "@/components/font-preview"
import type { UiFontId } from "@/lib/fonts"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/styles/base-nova/ui/select"

export function FontPicker({ className }: React.ComponentProps<"div">) {
  const { fontId, setFontId, fonts } = useFontPreview()
  const activeFont = fonts.find((font) => font.id === fontId) ?? fonts[0]

  const items = fonts.map((font) => ({
    label: font.label,
    value: font.id,
    cssVar: font.cssVar,
  }))

  return (
    <div className={cn("flex items-center", className)}>
      <Select
        items={items.map(({ label, value }) => ({ label, value }))}
        value={fontId}
        onValueChange={(value) => {
          if (value) setFontId(value as UiFontId)
        }}
      >
        <SelectTrigger
          id="font-picker"
          size="sm"
          aria-label="فونت"
          className="h-8 min-w-[8.5rem] cursor-pointer border-border/80 bg-background/80 text-xs shadow-none"
          style={{ fontFamily: `var(${activeFont.cssVar})` }}
        >
          <SelectValue placeholder="فونت" />
        </SelectTrigger>
        <SelectContent align="end" className="min-w-[10rem]">
          <SelectGroup>
            {items.map((item) => (
              <SelectItem
                key={item.value}
                value={item.value}
                className="cursor-pointer"
                style={{ fontFamily: `var(${item.cssVar})` }}
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
