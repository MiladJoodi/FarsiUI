import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/styles/base-nova/ui/field"
import { Textarea } from "@/styles/base-nova/ui/textarea"

export default function FieldTextarea() {
  return (
    <div className="w-full max-w-sm" dir="rtl" lang="fa">
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="feedback">بازخورد</FieldLabel>
            <Textarea
              id="feedback"
              placeholder="نظر شما به بهبود ما کمک می‌کند..."
              rows={4}
            />
            <FieldDescription>نظر خود را دربارهٔ سرویس بنویسید.</FieldDescription>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  )
}
