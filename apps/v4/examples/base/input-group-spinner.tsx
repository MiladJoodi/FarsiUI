import { LoaderIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/styles/base-nova/ui/input-group"
import { Spinner } from "@/styles/base-nova/ui/spinner"

export default function InputGroupSpinner() {
  return (
    <div dir="rtl" className="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroupInput placeholder="در حال جستجو..." />
        <InputGroupAddon align="inline-end">
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="در حال پردازش..." />
        <InputGroupAddon>
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="در حال ذخیرهٔ تغییرات..." />
        <InputGroupAddon align="inline-end">
          <InputGroupText>در حال ذخیره...</InputGroupText>
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="در حال تازه‌سازی داده..." />
        <InputGroupAddon>
          <LoaderIcon className="animate-spin" />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupText className="text-muted-foreground">
            لطفاً صبر کنید...
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
