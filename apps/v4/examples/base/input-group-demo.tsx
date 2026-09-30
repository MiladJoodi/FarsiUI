import { Search } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/styles/base-nova/ui/input-group"

export function InputGroupDemo() {
  return (
    <div dir="rtl">
      <InputGroup className="max-w-xs">
        <InputGroupInput placeholder="جستجو..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">۱۲ نتیجه</InputGroupAddon>
      </InputGroup>
    </div>
  )
}
