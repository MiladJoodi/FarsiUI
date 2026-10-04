import { Field, FieldLabel } from "@/registry/bases/radix/ui/field"
import { Switch } from "@/registry/bases/radix/ui/switch"

export default function FieldSwitch() {
  return (
    <Field orientation="horizontal" className="w-fit">
      <FieldLabel htmlFor="2fa">Multi-factor authentication</FieldLabel>
      <Switch id="2fa" />
    </Field>
  )
}
