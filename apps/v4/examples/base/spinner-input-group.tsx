import { ArrowUpIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupTextarea,
} from "@/styles/base-nova/ui/input-group"
import { Spinner } from "@/styles/base-nova/ui/spinner"

export default function SpinnerInputGroup() {
  return (
    <div dir="rtl" className="flex w-full max-w-md flex-col gap-4">
      <InputGroup>
        <InputGroupInput placeholder="پیام خود را بنویسید..." disabled />
        <InputGroupAddon align="inline-end">
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="پیام خود را بنویسید..." disabled />
        <InputGroupAddon align="block-end">
          <Spinner /> در حال اعتبارسنجی...
          <InputGroupButton className="ms-auto" variant="default">
            <ArrowUpIcon />
            <span className="sr-only">ارسال</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
