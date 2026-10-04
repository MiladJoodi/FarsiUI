"use client"

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import { Button } from "@/registry/bases/base/ui/button"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"

export default function ButtonGroupNested() {
  return (
    <ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="sm">
          ۱
        </Button>
        <Button variant="outline" size="sm">
          ۲
        </Button>
        <Button variant="outline" size="sm">
          ۳
        </Button>
        <Button variant="outline" size="sm">
          ۴
        </Button>
        <Button variant="outline" size="sm">
          ۵
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon-sm" aria-label="قبلی">
          <ArrowLeftIcon />
        </Button>
        <Button variant="outline" size="icon-sm" aria-label="بعدی">
          <ArrowRightIcon />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  )
}
