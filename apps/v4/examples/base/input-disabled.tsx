import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/styles/base-nova/ui/field"
import { Input } from "@/styles/base-nova/ui/input"

export function InputDisabled() {
  return (
    <Field data-disabled dir="rtl">
      <FieldLabel htmlFor="input-demo-disabled">ایمیل</FieldLabel>
      <Input
        id="input-demo-disabled"
        type="email"
        placeholder="ایمیل"
        disabled
      />
      <FieldDescription>این فیلد فعلاً غیرفعال است.</FieldDescription>
    </Field>
  )
}
