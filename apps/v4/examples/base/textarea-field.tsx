import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Textarea } from "@/registry/bases/base/ui/textarea"

export default function TextareaField() {
  return (
    <Field dir="rtl">
      <FieldLabel htmlFor="textarea-message">پیام</FieldLabel>
      <FieldDescription>پیام خود را در کادر زیر بنویسید.</FieldDescription>
      <Textarea id="textarea-message" placeholder="پیام خود را بنویسید..." />
    </Field>
  )
}
