import { Field, FieldLabel } from "@/styles/base-nova/ui/field"
import { Switch } from "@/styles/base-nova/ui/switch"

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
