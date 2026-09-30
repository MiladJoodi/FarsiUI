import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/styles/base-nova/ui/field"
import { Input } from "@/styles/base-nova/ui/input"

export function InputFile() {
  return (
    <Field dir="rtl">
      <FieldLabel htmlFor="picture">تصویر</FieldLabel>
      <Input id="picture" type="file" />
      <FieldDescription>یک تصویر برای آپلود انتخاب کنید.</FieldDescription>
    </Field>
  )
}
