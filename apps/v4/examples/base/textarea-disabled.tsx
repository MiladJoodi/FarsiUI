import { Field, FieldLabel } from "@/styles/base-nova/ui/field"
import { Textarea } from "@/styles/base-nova/ui/textarea"

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
