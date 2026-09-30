import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/styles/base-nova/ui/field"
import { Input } from "@/styles/base-nova/ui/input"

export function FieldFieldset() {
  return (
    <div dir="rtl">
      <FieldSet className="w-full max-w-sm">
        <FieldLegend>اطلاعات آدرس</FieldLegend>
        <FieldDescription>
          برای تحویل سفارش به آدرس شما نیاز داریم.
        </FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="street">آدرس خیابان</FieldLabel>
            <Input id="street" type="text" placeholder="خیابان ولیعصر، پلاک ۱۲" />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="city">شهر</FieldLabel>
              <Input id="city" type="text" placeholder="تهران" />
            </Field>
            <Field>
              <FieldLabel htmlFor="zip">کد پستی</FieldLabel>
              <Input id="zip" type="text" dir="ltr" placeholder="1234567890" />
            </Field>
          </div>
        </FieldGroup>
      </FieldSet>
    </div>
  )
}
