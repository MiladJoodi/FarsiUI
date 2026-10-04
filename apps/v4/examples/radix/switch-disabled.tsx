import { Field, FieldLabel } from "@/styles/radix-nova/ui/field"
import { Switch } from "@/styles/radix-nova/ui/switch"

export default function SwitchDisabled() {
  return (
    <Field orientation="horizontal" data-disabled className="w-fit">
      <Switch id="switch-disabled-unchecked" disabled />
      <FieldLabel htmlFor="switch-disabled-unchecked">Disabled</FieldLabel>
    </Field>
  )
}
