import { SearchIcon } from "lucide-react"

import { Button } from "@/registry/bases/aria/ui/button"
import { ButtonGroup } from "@/registry/bases/aria/ui/button-group"
import { Input } from "@/registry/bases/aria/ui/input"

export default function ButtonGroupInput() {
  return (
    <ButtonGroup>
      <Input placeholder="Search..." />
      <Button variant="outline" aria-label="Search">
        <SearchIcon />
      </Button>
    </ButtonGroup>
  )
}
