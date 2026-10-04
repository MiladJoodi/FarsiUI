import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/styles/base-nova/ui/field"
import { RadioGroup, RadioGroupItem } from "@/styles/base-nova/ui/radio-group"

export default function RadioGroupDescription() {
  return (
    <div dir="rtl">
      <RadioGroup defaultValue="comfortable" className="w-fit">
        <Field orientation="horizontal">
          <RadioGroupItem value="default" id="desc-r1" />
          <FieldContent>
            <FieldLabel htmlFor="desc-r1">پیش‌فرض</FieldLabel>
            <FieldDescription>
              فاصلهٔ استاندارد برای بیشتر کاربردها.
            </FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="comfortable" id="desc-r2" />
          <FieldContent>
            <FieldLabel htmlFor="desc-r2">راحت</FieldLabel>
            <FieldDescription>فاصلهٔ بیشتر بین عناصر.</FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="compact" id="desc-r3" />
          <FieldContent>
            <FieldLabel htmlFor="desc-r3">فشرده</FieldLabel>
            <FieldDescription>
              فاصلهٔ حداقلی برای چیدمان‌های متراکم.
            </FieldDescription>
          </FieldContent>
        </Field>
      </RadioGroup>
    </div>
  )
}
