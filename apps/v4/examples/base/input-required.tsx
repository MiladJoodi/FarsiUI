import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/styles/base-nova/ui/field"
import { Input } from "@/styles/base-nova/ui/input"

export function InputRequired() {
  return (
    <Field dir="rtl">
      <FieldLabel htmlFor="input-required">
        فیلد اجباری <span className="text-destructive">*</span>
      </FieldLabel>
      <Input
        id="input-required"
        placeholder="پر کردن این فیلد الزامی است"
        required
      />
      <FieldDescription>این فیلد باید پر شود.</FieldDescription>
    </Field>
  )
}
