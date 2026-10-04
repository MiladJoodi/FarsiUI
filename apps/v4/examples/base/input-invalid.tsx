import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"

export default function InputInvalid() {
  return (
    <Field data-invalid dir="rtl">
      <FieldLabel htmlFor="input-invalid">ورودی نامعتبر</FieldLabel>
      <Input id="input-invalid" placeholder="خطا" aria-invalid />
      <FieldDescription>این فیلد خطای اعتبارسنجی دارد.</FieldDescription>
    </Field>
  )
}
