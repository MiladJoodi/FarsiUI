import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/bases/base/ui/field"
import { RadioGroup, RadioGroupItem } from "@/registry/bases/base/ui/radio-group"

export default function RadioGroupInvalid() {
  return (
    <div dir="rtl">
      <FieldSet className="w-full max-w-xs">
        <FieldLegend variant="label">ترجیحات اعلان</FieldLegend>
        <FieldDescription>
          نحوهٔ دریافت اعلان‌ها را انتخاب کنید.
        </FieldDescription>
        <RadioGroup defaultValue="email">
          <Field orientation="horizontal" data-invalid>
            <RadioGroupItem value="email" id="invalid-email" aria-invalid />
            <FieldLabel htmlFor="invalid-email" className="font-normal">
              فقط ایمیل
            </FieldLabel>
          </Field>
          <Field orientation="horizontal" data-invalid>
            <RadioGroupItem value="sms" id="invalid-sms" aria-invalid />
            <FieldLabel htmlFor="invalid-sms" className="font-normal">
              فقط پیامک
            </FieldLabel>
          </Field>
          <Field orientation="horizontal" data-invalid>
            <RadioGroupItem value="both" id="invalid-both" aria-invalid />
            <FieldLabel htmlFor="invalid-both" className="font-normal">
              ایمیل و پیامک
            </FieldLabel>
          </Field>
        </RadioGroup>
      </FieldSet>
    </div>
  )
}
