import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"

export default function InputRtl() {
  return (
    <Field dir="rtl">
      <FieldLabel htmlFor="input-rtl-api-key">کلید API</FieldLabel>
      <Input
        id="input-rtl-api-key"
        type="password"
        placeholder="sk-..."
      />
      <FieldDescription>
        کلید API شما رمزنگاری و به‌صورت امن ذخیره می‌شود.
      </FieldDescription>
    </Field>
  )
}
