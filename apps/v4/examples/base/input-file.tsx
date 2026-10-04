import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"

export default function InputFile() {
  return (
    <Field dir="rtl">
      <FieldLabel htmlFor="picture">تصویر</FieldLabel>
      <Input id="picture" type="file" />
      <FieldDescription>یک تصویر برای آپلود انتخاب کنید.</FieldDescription>
    </Field>
  )
}
