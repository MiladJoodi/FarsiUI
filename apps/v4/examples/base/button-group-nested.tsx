"use client"

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import { Button } from "@/styles/base-nova/ui/button"
import { ButtonGroup } from "@/styles/base-nova/ui/button-group"

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
          <ArrowLeftIcon className="rtl:rotate-180" />
        </Button>
        <Button variant="outline" size="icon-sm" aria-label="بعدی">
          <ArrowRightIcon className="rtl:rotate-180" />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  )
}
