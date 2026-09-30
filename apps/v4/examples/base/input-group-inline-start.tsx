import { SearchIcon } from "lucide-react"

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/styles/base-nova/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/styles/base-nova/ui/input-group"

export function InputGroupInlineStart() {
  return (
    <Field dir="rtl" className="max-w-sm">
      <FieldLabel htmlFor="inline-start-input">ورودی</FieldLabel>
      <InputGroup>
        <InputGroupInput id="inline-start-input" placeholder="جستجو..." />
        <InputGroupAddon align="inline-start">
          <SearchIcon className="text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>آیکون در شروع خط قرار گرفته است.</FieldDescription>
    </Field>
  )
}
