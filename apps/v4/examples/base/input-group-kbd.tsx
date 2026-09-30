import { SearchIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/styles/base-nova/ui/input-group"
import { Kbd } from "@/styles/base-nova/ui/kbd"

export function InputGroupKbd() {
  return (
    <div dir="rtl">
      <InputGroup className="max-w-sm">
        <InputGroupInput placeholder="جستجو..." />
        <InputGroupAddon>
          <SearchIcon className="text-muted-foreground" />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Kbd>⌘K</Kbd>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
