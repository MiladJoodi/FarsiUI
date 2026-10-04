import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/bases/base/ui/field"
import { RadioGroup, RadioGroupItem } from "@/registry/bases/base/ui/radio-group"

export default function RadioGroupFieldset() {
  return (
    <div dir="rtl">
      <FieldSet className="w-full max-w-xs">
        <FieldLegend variant="label">طرح اشتراک</FieldLegend>
        <FieldDescription>
          طرح‌های سالانه و مادام‌العمر صرفه‌جویی بیشتری دارند.
        </FieldDescription>
        <RadioGroup defaultValue="monthly">
          <Field orientation="horizontal">
            <RadioGroupItem value="monthly" id="rg-plan-monthly" />
            <FieldLabel htmlFor="rg-plan-monthly" className="font-normal">
              ماهانه (۹۹٬۰۰۰ تومان)
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="yearly" id="rg-plan-yearly" />
            <FieldLabel htmlFor="rg-plan-yearly" className="font-normal">
              سالانه (۹۹۰٬۰۰۰ تومان)
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="lifetime" id="rg-plan-lifetime" />
            <FieldLabel htmlFor="rg-plan-lifetime" className="font-normal">
              مادام‌العمر (۲٬۹۹۰٬۰۰۰ تومان)
            </FieldLabel>
          </Field>
        </RadioGroup>
      </FieldSet>
    </div>
  )
}
