import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import { Field, FieldGroup, FieldLabel } from "@/registry/bases/base/ui/field"

export default function CheckboxInvalid() {
  return (
    <FieldGroup className="mx-auto w-56" dir="rtl">
      <Field orientation="horizontal" data-invalid>
        <Checkbox
          id="terms-checkbox-invalid"
          name="terms-checkbox-invalid"
          aria-invalid
        />
        <FieldLabel htmlFor="terms-checkbox-invalid">
          پذیرش شرایط و قوانین
        </FieldLabel>
      </Field>
    </FieldGroup>
  )
}
