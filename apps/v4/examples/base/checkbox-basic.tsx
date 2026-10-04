import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import { Field, FieldGroup, FieldLabel } from "@/registry/bases/base/ui/field"

export default function CheckboxBasic() {
  return (
    <FieldGroup className="mx-auto w-56" dir="rtl">
      <Field orientation="horizontal">
        <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" />
        <FieldLabel htmlFor="terms-checkbox-basic">
          پذیرش شرایط و قوانین
        </FieldLabel>
      </Field>
    </FieldGroup>
  )
}
