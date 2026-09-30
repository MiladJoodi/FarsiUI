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
      <InputGroup>
        <InputGroupInput id="input-group-url" placeholder="example.com" />
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InfoIcon />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}
