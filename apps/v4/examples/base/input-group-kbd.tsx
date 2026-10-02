import { SearchIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/styles/base-nova/ui/input-group"
import { Kbd } from "@/styles/base-nova/ui/kbd"

export default function InputGroupKbd() {
  return (
    <div className="w-full max-w-sm" dir="rtl" lang="fa">
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
