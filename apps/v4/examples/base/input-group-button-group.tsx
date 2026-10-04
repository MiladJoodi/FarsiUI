import { Link2Icon } from "lucide-react"

import {
  ButtonGroup,
  ButtonGroupText,
} from "@/registry/bases/base/ui/button-group"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/bases/base/ui/input-group"
import { Label } from "@/registry/bases/base/ui/label"

export default function InputGroupButtonGroup() {
  return (
    <ButtonGroup dir="ltr">
      <ButtonGroupText render={<Label htmlFor="url" />}>
        https://
      </ButtonGroupText>
      <InputGroup>
        <InputGroupInput id="url" placeholder="example" />
        <InputGroupAddon align="inline-end">
          <Link2Icon />
        </InputGroupAddon>
      </InputGroup>
      <ButtonGroupText>.com</ButtonGroupText>
    </ButtonGroup>
  )
}
