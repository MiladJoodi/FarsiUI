import { Field, FieldLabel } from "@/registry/bases/base/ui/field"
import { Textarea } from "@/registry/bases/base/ui/textarea"

export default function TextareaDisabled() {
  return (
    <Field data-disabled dir="rtl">
      <FieldLabel htmlFor="textarea-disabled">پیام</FieldLabel>
      <Textarea
        id="textarea-disabled"
        placeholder="پیام خود را بنویسید..."
        disabled
      />
    </Field>
  )
}
