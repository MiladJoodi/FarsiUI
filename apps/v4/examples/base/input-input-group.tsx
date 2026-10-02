import { InfoIcon } from "lucide-react"

import { Field, FieldLabel } from "@/styles/base-nova/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/styles/base-nova/ui/input-group"

export function InputInputGroup() {
  return (
    <Field dir="rtl">
      <FieldLabel htmlFor="input-group-url">آدرس وب‌سایت</FieldLabel>
      <InputGroup dir="ltr">
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput
          id="input-group-url"
          className="text-left"
          placeholder="example.com"
        />
        <InputGroupAddon align="inline-end">
          <InfoIcon />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}
