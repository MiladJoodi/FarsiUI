import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/styles/base-nova/ui/field"
import { RadioGroup, RadioGroupItem } from "@/styles/base-nova/ui/radio-group"

export function RadioGroupRtl() {
  return (
    <div dir="rtl">
      <RadioGroup defaultValue="comfortable" className="w-fit">
        <Field orientation="horizontal">
          <RadioGroupItem value="default" id="r1-rtl" />
          <FieldContent>
            <FieldLabel htmlFor="r1-rtl">پیش‌فرض</FieldLabel>
            <FieldDescription>
              فاصلهٔ استاندارد برای بیشتر کاربردها.
            </FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="comfortable" id="r2-rtl" />
          <FieldContent>
            <FieldLabel htmlFor="r2-rtl">راحت</FieldLabel>
            <FieldDescription>فاصلهٔ بیشتر بین عناصر.</FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="compact" id="r3-rtl" />
          <FieldContent>
            <FieldLabel htmlFor="r3-rtl">فشرده</FieldLabel>
            <FieldDescription>
              فاصلهٔ حداقلی برای چیدمان‌های متراکم.
            </FieldDescription>
          </FieldContent>
        </Field>
      </RadioGroup>
    </div>
  )
}
