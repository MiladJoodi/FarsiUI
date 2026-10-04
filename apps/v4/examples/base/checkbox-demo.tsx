"use client"

import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/registry/bases/base/ui/field"
import { Label } from "@/registry/bases/base/ui/label"

export default function CheckboxDemo() {
  return (
    <FieldGroup className="max-w-sm" dir="rtl">
      <Field orientation="horizontal">
        <Checkbox id="terms-checkbox" name="terms-checkbox" />
        <Label htmlFor="terms-checkbox">پذیرش شرایط و قوانین</Label>
      </Field>
      <Field orientation="horizontal">
        <Checkbox
          id="terms-checkbox-2"
          name="terms-checkbox-2"
          defaultChecked
        />
        <FieldContent>
          <FieldLabel htmlFor="terms-checkbox-2">
            پذیرش شرایط و قوانین
          </FieldLabel>
          <FieldDescription>
            با زدن این گزینه، شرایط و قوانین را می‌پذیرید.
          </FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal" data-disabled>
        <Checkbox id="toggle-checkbox" name="toggle-checkbox" disabled />
        <FieldLabel htmlFor="toggle-checkbox">فعال‌سازی اعلان‌ها</FieldLabel>
      </Field>
      <FieldLabel>
        <Field orientation="horizontal">
          <Checkbox id="toggle-checkbox-2" name="toggle-checkbox-2" />
          <FieldContent>
            <FieldTitle>فعال‌سازی اعلان‌ها</FieldTitle>
            <FieldDescription>
              هر زمان بخواهید می‌توانید اعلان‌ها را روشن یا خاموش کنید.
            </FieldDescription>
          </FieldContent>
        </Field>
      </FieldLabel>
    </FieldGroup>
  )
}
