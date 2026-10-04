import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Switch } from "@/registry/bases/base/ui/switch"

export default function SwitchInvalid() {
  return (
    <Field
      orientation="horizontal"
      className="max-w-sm"
      data-invalid
      dir="rtl"
    >
      <FieldContent>
        <FieldLabel htmlFor="switch-terms">
          پذیرش شرایط و قوانین
        </FieldLabel>
        <FieldDescription>
          برای ادامه باید شرایط و قوانین را بپذیرید.
        </FieldDescription>
      </FieldContent>
      <Switch id="switch-terms" aria-invalid />
    </Field>
  )
}
