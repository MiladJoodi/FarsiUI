import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"

export default function InputDisabled() {
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
