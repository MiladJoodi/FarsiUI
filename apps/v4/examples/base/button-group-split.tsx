"use client"

import { IconPlus } from "@tabler/icons-react"

import {
  useVariantPreviewIconSize,
  useVariantPreviewSize,
} from "@/components/component-variant-preview-size"
import { Button } from "@/styles/base-nova/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/styles/base-nova/ui/button-group"

export default function ButtonGroupSplit() {
  const size = useVariantPreviewSize()
  const iconSize = useVariantPreviewIconSize()

  return (
    <ButtonGroup>
      <Button variant="secondary" size={size}>
        دکمه
      </Button>
      <ButtonGroupSeparator />
      <Button size={iconSize} variant="secondary">
        <IconPlus />
      </Button>
    </ButtonGroup>
  )
}
