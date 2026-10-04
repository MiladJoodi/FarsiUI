import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/bases/base/ui/field"
import { RadioGroup, RadioGroupItem } from "@/registry/bases/base/ui/radio-group"

export default function FieldRadio() {
  return (
    <div className="w-full max-w-sm" dir="rtl" lang="fa">
      <FieldSet>
        <FieldLegend variant="label">طرح اشتراک</FieldLegend>
        <FieldDescription>
          طرح‌های سالانه و مادام‌العمر صرفه‌جویی بیشتری دارند.
        </FieldDescription>
        <RadioGroup defaultValue="monthly">
          <Field orientation="horizontal">
            <RadioGroupItem value="monthly" id="plan-monthly" />
            <FieldLabel htmlFor="plan-monthly" className="font-normal">
              ماهانه (۹۹٬۰۰۰ تومان)
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="yearly" id="plan-yearly" />
            <FieldLabel htmlFor="plan-yearly" className="font-normal">
              سالانه (۹۹۰٬۰۰۰ تومان)
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="lifetime" id="plan-lifetime" />
            <FieldLabel htmlFor="plan-lifetime" className="font-normal">
              مادام‌العمر (۲٬۹۹۰٬۰۰۰ تومان)
            </FieldLabel>
          </Field>
        </RadioGroup>
      </FieldSet>
    </div>
  )
}
