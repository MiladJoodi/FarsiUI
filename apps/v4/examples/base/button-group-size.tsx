"use client"

import { PlusIcon } from "lucide-react"

import {
  useVariantPreviewIconSize,
  useVariantPreviewSize,
} from "@/components/component-variant-preview-size"
import { Button } from "@/styles/base-nova/ui/button"
import { ButtonGroup } from "@/styles/base-nova/ui/button-group"

export default function ButtonGroupSize() {
  const size = useVariantPreviewSize()
  const iconSize = useVariantPreviewIconSize()

  return (
    <ButtonGroup>
      <Button variant="outline" size={size}>
        دکمه
      </Button>
      <Button variant="outline" size={size}>
        گروه
      </Button>
      <Button variant="outline" size={iconSize}>
        <PlusIcon />
      </Button>
    </ButtonGroup>
  )
}
