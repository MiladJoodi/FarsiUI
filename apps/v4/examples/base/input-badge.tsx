import { Badge } from "@/styles/base-nova/ui/badge"
import { Field, FieldLabel } from "@/styles/base-nova/ui/field"
import { Input } from "@/styles/base-nova/ui/input"

export function InputBadge() {
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
        placeholder="https://api.example.com/webhook"
      />
    </Field>
  )
}
