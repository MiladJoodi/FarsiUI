import { InfoIcon } from "lucide-react"

import { Field, FieldLabel } from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/registry/bases/base/ui/input-group"

export default function InputInputGroup() {
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
