import { Field, FieldLabel } from "@/registry/bases/aria/ui/field"
import { Switch } from "@/registry/bases/aria/ui/switch"

export default function SwitchDisabled() {
  return (
    <Field orientation="horizontal" data-disabled className="w-fit">
      <Switch id="switch-disabled-unchecked" isDisabled />
      <FieldLabel htmlFor="switch-disabled-unchecked">Disabled</FieldLabel>
    </Field>
  )
}
