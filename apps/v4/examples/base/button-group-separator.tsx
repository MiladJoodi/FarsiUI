"use client"

import {
  useVariantPreviewSize,
} from "@/components/component-variant-preview-size"
import { Button } from "@/styles/base-nova/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/styles/base-nova/ui/button-group"

export default function ButtonGroupSeparatorDemo() {
  const size = useVariantPreviewSize()

  return (
    <ButtonGroup>
      <Button variant="secondary" size={size}>
        کپی
      </Button>
      <ButtonGroupSeparator />
      <Button variant="secondary" size={size}>
        جای‌گذاری
      </Button>
    </ButtonGroup>
  )
}
