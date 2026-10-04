import { AudioLinesIcon, PlusIcon } from "lucide-react"

import { Button } from "@/registry/bases/aria/ui/button"
import { ButtonGroup } from "@/registry/bases/aria/ui/button-group"
import { Input } from "@/registry/bases/aria/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/bases/aria/ui/input-group"
import { Tooltip, TooltipTrigger } from "@/registry/bases/aria/ui/tooltip"

export default function ButtonGroupNested() {
  return (
    <ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <InputGroup>
          <InputGroupInput placeholder="Send a message..." />
          <TooltipTrigger>
            <InputGroupAddon align="inline-end">
              <AudioLinesIcon />
            </InputGroupAddon>
            <Tooltip>Voice Mode</Tooltip>
          </TooltipTrigger>
        </InputGroup>
      </ButtonGroup>
    </ButtonGroup>
  )
}
