import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"

export default function CheckboxDescription() {
  return (
    <FieldGroup className="mx-auto w-72" dir="rtl">
      <Field orientation="horizontal">
        <Checkbox
          id="terms-checkbox-desc"
          name="terms-checkbox-desc"
          defaultChecked
        />
        <FieldContent>
          <FieldLabel htmlFor="terms-checkbox-desc">
            پذیرش شرایط و قوانین
          </FieldLabel>
          <FieldDescription>
            با زدن این گزینه، شرایط و قوانین را می‌پذیرید.
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  )
}
