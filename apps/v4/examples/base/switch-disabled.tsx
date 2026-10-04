import { Field, FieldLabel } from "@/registry/bases/base/ui/field"
import { Switch } from "@/registry/bases/base/ui/switch"

export default function SwitchDisabled() {
  return (
    <Field
      orientation="horizontal"
      data-disabled
      className="w-fit"
      dir="rtl"
    >
      <Switch id="switch-disabled-unchecked" disabled />
      <FieldLabel htmlFor="switch-disabled-unchecked">غیرفعال</FieldLabel>
    </Field>
  )
}
