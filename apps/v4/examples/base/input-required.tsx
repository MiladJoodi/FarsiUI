import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"

export default function InputRequired() {
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
