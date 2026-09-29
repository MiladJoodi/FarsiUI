"use client"

import { Button } from "@/styles/base-nova/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/styles/base-nova/ui/button-group"

export default function ButtonGroupSeparatorDemo() {
  return (
    <ButtonGroup>
      <Button variant="secondary">کپی</Button>
      <ButtonGroupSeparator />
      <Button variant="secondary">جای‌گذاری</Button>
    </ButtonGroup>
  )
}
