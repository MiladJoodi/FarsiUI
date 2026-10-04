import { Badge } from "@/styles/base-nova/ui/badge"
import { Field, FieldLabel } from "@/styles/base-nova/ui/field"
import { Input } from "@/styles/base-nova/ui/input"

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
