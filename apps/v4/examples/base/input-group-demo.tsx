import { Search } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/styles/base-nova/ui/input-group"

export default function InputGroupDemo() {
  return (
    <div className="w-full max-w-sm" dir="rtl" lang="fa">
      <InputGroup>
        <InputGroupInput placeholder="جستجو..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">۱۲ نتیجه</InputGroupAddon>
      </InputGroup>
    </div>
  )
}
