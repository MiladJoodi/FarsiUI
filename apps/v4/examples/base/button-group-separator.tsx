"use client"

import { Button } from "@/registry/bases/base/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/registry/bases/base/ui/button-group"

export default function ButtonGroupSeparatorDemo() {
  return (
    <ButtonGroup>
      <Button variant="secondary">کپی</Button>
      <ButtonGroupSeparator />
      <Button variant="secondary">جای‌گذاری</Button>
    </ButtonGroup>
  )
}
