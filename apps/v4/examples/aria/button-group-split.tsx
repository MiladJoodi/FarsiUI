import { Plus } from "lucide-react"

import { Button } from "@/registry/bases/aria/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/registry/bases/aria/ui/button-group"

export default function ButtonGroupSplit() {
  return (
    <ButtonGroup>
      <Button variant="secondary">Button</Button>
      <ButtonGroupSeparator />
      <Button size="icon" variant="secondary">
        <Plus />
      </Button>
    </ButtonGroup>
  )
}
