import { Field, FieldGroup, FieldLabel } from "@/registry/bases/base/ui/field"
import { Switch } from "@/registry/bases/base/ui/switch"

export default function SwitchSizes() {
  return (
    <FieldGroup dir="rtl" className="w-full max-w-[10rem]">
      <Field orientation="horizontal">
        <Switch id="switch-size-sm" size="sm" />
        <FieldLabel htmlFor="switch-size-sm">کوچک</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Switch id="switch-size-default" size="default" />
        <FieldLabel htmlFor="switch-size-default">پیش‌فرض</FieldLabel>
      </Field>
    </FieldGroup>
  )
}
