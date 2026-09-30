import { Checkbox } from "@/styles/base-nova/ui/checkbox"
import { Field, FieldGroup, FieldLabel } from "@/styles/base-nova/ui/field"

export function CheckboxDisabled() {
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
