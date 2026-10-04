import { Field, FieldLabel } from "@/registry/bases/base/ui/field"
import { Switch } from "@/registry/bases/base/ui/switch"

export default function FieldSwitch() {
  return (
    <div className="w-full max-w-sm" dir="rtl" lang="fa">
      <Field orientation="horizontal">
        <FieldLabel htmlFor="2fa" className="flex-1">
          احراز هویت چندعاملی
        </FieldLabel>
        <Switch id="2fa" />
      </Field>
    </div>
  )
}
