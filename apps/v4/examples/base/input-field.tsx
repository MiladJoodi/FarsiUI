import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/styles/base-nova/ui/field"
import { Input } from "@/styles/base-nova/ui/input"

export default function InputField() {
  return (
    <Field dir="rtl">
      <FieldLabel htmlFor="input-field-username">نام کاربری</FieldLabel>
      <Input
        id="input-field-username"
        type="text"
        placeholder="نام کاربری خود را وارد کنید"
      />
      <FieldDescription>
        یک نام کاربری یکتا برای حساب خود انتخاب کنید.
      </FieldDescription>
    </Field>
  )
}
