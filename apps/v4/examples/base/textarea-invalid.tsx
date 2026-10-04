import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/styles/base-nova/ui/field"
import { Textarea } from "@/styles/base-nova/ui/textarea"

export default function TextareaInvalid() {
  return (
    <Field data-invalid dir="rtl">
      <FieldLabel htmlFor="textarea-invalid">پیام</FieldLabel>
      <Textarea
        id="textarea-invalid"
        placeholder="پیام خود را بنویسید..."
        aria-invalid
      />
      <FieldDescription>لطفاً یک پیام معتبر وارد کنید.</FieldDescription>
    </Field>
  )
}
