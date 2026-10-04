import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Textarea } from "@/registry/bases/base/ui/textarea"

export default function TextareaRtl() {
  return (
    <Field className="w-full max-w-xs" dir="rtl">
      <FieldLabel htmlFor="feedback">بازخورد</FieldLabel>
      <Textarea
        id="feedback"
        placeholder="بازخورد شما به بهبود ما کمک می‌کند..."
        rows={4}
      />
      <FieldDescription>نظرات خود را دربارهٔ سرویس ما بنویسید.</FieldDescription>
    </Field>
  )
}
