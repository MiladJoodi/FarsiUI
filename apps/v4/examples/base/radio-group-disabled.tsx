import { Field, FieldLabel } from "@/styles/base-nova/ui/field"
import { RadioGroup, RadioGroupItem } from "@/styles/base-nova/ui/radio-group"

export default function RadioGroupDisabled() {
  return (
    <div dir="rtl">
      <RadioGroup defaultValue="option2" className="w-fit">
        <Field orientation="horizontal" data-disabled>
          <RadioGroupItem value="option1" id="disabled-1" disabled />
          <FieldLabel htmlFor="disabled-1" className="font-normal">
            غیرفعال
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="option2" id="disabled-2" />
          <FieldLabel htmlFor="disabled-2" className="font-normal">
            گزینه ۲
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="option3" id="disabled-3" />
          <FieldLabel htmlFor="disabled-3" className="font-normal">
            گزینه ۳
          </FieldLabel>
        </Field>
      </RadioGroup>
    </div>
  )
}
