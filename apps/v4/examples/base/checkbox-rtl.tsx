"use client"

import { Checkbox } from "@/styles/base-nova/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/styles/base-nova/ui/field"
import { Label } from "@/styles/base-nova/ui/label"

export default function CheckboxRtl() {
  return (
    <FieldGroup className="max-w-sm" dir="rtl">
      <Field orientation="horizontal">
        <Checkbox id="terms-checkbox-rtl" name="terms-checkbox" />
        <Label htmlFor="terms-checkbox-rtl">پذیرش شرایط و قوانین</Label>
      </Field>
      <Field orientation="horizontal">
        <Checkbox
          id="terms-checkbox-2-rtl"
          name="terms-checkbox-2"
          defaultChecked
        />
        <FieldContent>
          <FieldLabel htmlFor="terms-checkbox-2-rtl">
            پذیرش شرایط و قوانین
          </FieldLabel>
          <FieldDescription>
            با زدن این گزینه، شرایط و قوانین را می‌پذیرید.
          </FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal" data-disabled>
        <Checkbox id="toggle-checkbox-rtl" name="toggle-checkbox" disabled />
        <FieldLabel htmlFor="toggle-checkbox-rtl">فعال‌سازی اعلان‌ها</FieldLabel>
      </Field>
      <FieldLabel>
        <Field orientation="horizontal">
          <Checkbox id="toggle-checkbox-2-rtl" name="toggle-checkbox-2" />
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
