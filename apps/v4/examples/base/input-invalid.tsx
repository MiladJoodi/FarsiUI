import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/styles/base-nova/ui/field"
import { Input } from "@/styles/base-nova/ui/input"

export default function InputInvalid() {
  return (
    <Field data-invalid dir="rtl">
      <FieldLabel htmlFor="input-invalid">ورودی نامعتبر</FieldLabel>
      <Input id="input-invalid" placeholder="خطا" aria-invalid />
      <FieldDescription>این فیلد خطای اعتبارسنجی دارد.</FieldDescription>
    </Field>
  )
}
