import { Field, FieldLabel } from "@/styles/base-nova/ui/field"
import { Switch } from "@/styles/base-nova/ui/switch"

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
