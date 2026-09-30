import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/styles/base-nova/ui/field"
import { RadioGroup, RadioGroupItem } from "@/styles/base-nova/ui/radio-group"

export default function FieldChoiceCard() {
  return (
    <div dir="rtl">
      <FieldGroup className="w-full max-w-xs">
        <FieldSet>
          <FieldLegend variant="label">محیط محاسبه</FieldLegend>
          <FieldDescription>
            محیط محاسبهٔ خوشهٔ خود را انتخاب کنید.
          </FieldDescription>
          <RadioGroup defaultValue="kubernetes">
            <FieldLabel htmlFor="kubernetes-r2h">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>کوبرنتیز</FieldTitle>
                  <FieldDescription>
                    اجرای بار کاری GPU روی خوشهٔ K8s.
                  </FieldDescription>
                </FieldContent>
                <RadioGroupItem value="kubernetes" id="kubernetes-r2h" />
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="vm-z4k">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>ماشین مجازی</FieldTitle>
                  <FieldDescription>
                    دسترسی به خوشه برای اجرای بار کاری GPU.
                  </FieldDescription>
                </FieldContent>
                <RadioGroupItem value="vm" id="vm-z4k" />
              </Field>
            </FieldLabel>
          </RadioGroup>
        </FieldSet>
      </FieldGroup>
    </div>
  )
}
