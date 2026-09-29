import { Link2Icon } from "lucide-react"

import {
  ButtonGroup,
  ButtonGroupText,
} from "@/styles/base-nova/ui/button-group"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/styles/base-nova/ui/input-group"
import { Label } from "@/styles/base-nova/ui/label"

export default function InputGroupButtonGroup() {
  return (
    <ButtonGroup>
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
