"use client"

import { Bold, Italic, Underline } from "lucide-react"

import { useVariantPreviewSize } from "@/components/component-variant-preview-size"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/styles/base-nova/ui/toggle-group"

export default function ToggleGroupDemo() {
  const size = useVariantPreviewSize()
  const toggleSize =
    size === "xs" || size === "sm" ? "sm" : size === "lg" ? "lg" : "default"

  return (
    <ToggleGroup variant="outline" multiple size={toggleSize}>
      <ToggleGroupItem value="bold" aria-label="ضخیم">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="کج">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="زیرخط">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
