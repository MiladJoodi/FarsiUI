import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/styles/base-nova/ui/field"
import { RadioGroup, RadioGroupItem } from "@/styles/base-nova/ui/radio-group"

export default function RadioGroupChoiceCard() {
  return (
    <div dir="rtl">
      <RadioGroup defaultValue="plus" className="max-w-sm">
        <FieldLabel htmlFor="plus-plan">
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>پلاس</FieldTitle>
              <FieldDescription>
                برای افراد و تیم‌های کوچک.
              </FieldDescription>
            </FieldContent>
            <RadioGroupItem value="plus" id="plus-plan" />
          </Field>
        </FieldLabel>
        <FieldLabel htmlFor="pro-plan">
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>حرفه‌ای</FieldTitle>
              <FieldDescription>برای کسب‌وکارهای در حال رشد.</FieldDescription>
            </FieldContent>
            <RadioGroupItem value="pro" id="pro-plan" />
          </Field>
        </FieldLabel>
        <FieldLabel htmlFor="enterprise-plan">
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>سازمانی</FieldTitle>
              <FieldDescription>
                برای تیم‌ها و سازمان‌های بزرگ.
              </FieldDescription>
            </FieldContent>
            <RadioGroupItem value="enterprise" id="enterprise-plan" />
          </Field>
        </FieldLabel>
      </RadioGroup>
    </div>
  )
}
