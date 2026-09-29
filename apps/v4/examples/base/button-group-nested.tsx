"use client"

import { AudioLinesIcon, PlusIcon } from "lucide-react"

import { useVariantPreviewIconSize } from "@/components/component-variant-preview-size"
import { Button } from "@/styles/base-nova/ui/button"
import { ButtonGroup } from "@/styles/base-nova/ui/button-group"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/styles/base-nova/ui/input-group"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/styles/base-nova/ui/tooltip"

export default function ButtonGroupNested() {
  const iconSize = useVariantPreviewIconSize()

  return (
    <ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size={iconSize}>
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <InputGroup>
          <InputGroupInput placeholder="پیام بفرستید..." />
          <Tooltip>
            <TooltipTrigger render={<InputGroupAddon align="inline-end" />}>
              <AudioLinesIcon />
            </TooltipTrigger>
            <TooltipContent>حالت صوتی</TooltipContent>
          </Tooltip>
        </InputGroup>
      </ButtonGroup>
    </ButtonGroup>
  )
}
