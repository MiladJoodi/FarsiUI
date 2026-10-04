import { Badge } from "@/registry/bases/base/ui/badge"
import { Field, FieldLabel } from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"

export default function InputBadge() {
  return (
    <Field dir="rtl">
      <FieldLabel htmlFor="input-badge">
        آدرس وب‌هوک{" "}
        <Badge variant="secondary" className="ms-auto">
          بتا
        </Badge>
      </FieldLabel>
      <Input
        id="input-badge"
        type="url"
        dir="ltr"
        className="text-left"
        placeholder="https://api.example.com/webhook"
      />
    </Field>
  )
}
