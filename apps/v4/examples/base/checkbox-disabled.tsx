import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import { Field, FieldGroup, FieldLabel } from "@/registry/bases/base/ui/field"

export default function CheckboxDisabled() {
  return (
    <FieldGroup className="mx-auto w-56" dir="rtl">
      <Field orientation="horizontal" data-disabled>
        <Checkbox
          id="toggle-checkbox-disabled"
          name="toggle-checkbox-disabled"
          disabled
        />
        <FieldLabel htmlFor="toggle-checkbox-disabled">
          فعال‌سازی اعلان‌ها
        </FieldLabel>
      </Field>
    </FieldGroup>
  )
}
