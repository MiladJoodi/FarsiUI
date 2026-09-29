"use client"

import { MinusIcon, PlusIcon } from "lucide-react"

import { useVariantPreviewIconSize } from "@/components/component-variant-preview-size"
import { Button } from "@/styles/base-nova/ui/button"
import { ButtonGroup } from "@/styles/base-nova/ui/button-group"

export default function ButtonGroupOrientation() {
  const iconSize = useVariantPreviewIconSize()

  return (
    <ButtonGroup
      orientation="vertical"
      aria-label="کنترل رسانه"
      className="h-fit"
    >
      <Button variant="outline" size={iconSize}>
        <PlusIcon />
      </Button>
      <Button variant="outline" size={iconSize}>
        <MinusIcon />
      </Button>
    </ButtonGroup>
  )
}
