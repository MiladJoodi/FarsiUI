import { Field, FieldGroup, FieldLabel } from "@/styles/base-nova/ui/field"
import { Input } from "@/styles/base-nova/ui/input"

export function InputGrid() {
  return (
    <FieldGroup dir="rtl" className="grid max-w-sm grid-cols-2">
      <Field>
        <FieldLabel htmlFor="first-name">نام</FieldLabel>
        <Input id="first-name" placeholder="علی" />
      </Field>
      <Field>
        <FieldLabel htmlFor="last-name">نام خانوادگی</FieldLabel>
        <Input id="last-name" placeholder="رضایی" />
      </Field>
    </FieldGroup>
  )
}
