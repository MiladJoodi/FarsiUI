import { Button } from "@/registry/bases/base/ui/button"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Textarea } from "@/registry/bases/base/ui/textarea"

const months = [
  { label: "ماه", value: null },
  { label: "۰۱", value: "01" },
  { label: "۰۲", value: "02" },
  { label: "۰۳", value: "03" },
  { label: "۰۴", value: "04" },
  { label: "۰۵", value: "05" },
  { label: "۰۶", value: "06" },
  { label: "۰۷", value: "07" },
  { label: "۰۸", value: "08" },
  { label: "۰۹", value: "09" },
  { label: "۱۰", value: "10" },
  { label: "۱۱", value: "11" },
  { label: "۱۲", value: "12" },
]

const years = [
  { label: "سال", value: null },
  { label: "۲۰۲۴", value: "2024" },
  { label: "۲۰۲۵", value: "2025" },
  { label: "۲۰۲۶", value: "2026" },
  { label: "۲۰۲۷", value: "2027" },
  { label: "۲۰۲۸", value: "2028" },
  { label: "۲۰۲۹", value: "2029" },
]

export default function FieldRtl() {
  return (
    <div className="w-full max-w-md py-6" dir="rtl">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>روش پرداخت</FieldLegend>
            <FieldDescription>
              همهٔ تراکنش‌ها امن و رمزگذاری‌شده‌اند
            </FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j-rtl">
                  نام روی کارت
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-name-43j-rtl"
                  placeholder="علی رضایی"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-number-uw1-rtl">
                  شماره کارت
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-number-uw1-rtl"
                  dir="ltr"
                  placeholder="1234 5678 9012 3456"
                  required
                />
                <FieldDescription>
                  شماره ۱۶ رقمی کارت را وارد کنید
                </FieldDescription>
              </Field>
              <div className="grid grid-cols-3 gap-4">
                <Field>
                  <FieldLabel htmlFor="checkout-exp-month-ts6-rtl">
                    ماه
                  </FieldLabel>
                  <Select items={months}>
                    <SelectTrigger id="checkout-exp-month-ts6-rtl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {months.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-exp-year-f59-rtl">
                    سال
                  </FieldLabel>
                  <Select items={years}>
                    <SelectTrigger id="checkout-7j9-exp-year-f59-rtl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {years.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-cvv-rtl">CVV</FieldLabel>
                  <Input
                    id="checkout-7j9-cvv-rtl"
                    dir="ltr"
                    placeholder="123"
                    required
                  />
                </Field>
              </div>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <FieldSet>
            <FieldLegend>آدرس صورتحساب</FieldLegend>
            <FieldDescription>
              آدرس صورتحساب مرتبط با روش پرداخت شما
            </FieldDescription>
            <FieldGroup>
              <Field orientation="horizontal">
                <Checkbox
                  id="checkout-7j9-same-as-shipping-wgm-rtl"
                  defaultChecked
                />
                <FieldLabel
                  htmlFor="checkout-7j9-same-as-shipping-wgm-rtl"
                  className="font-normal"
                >
                  همان آدرس ارسال
                </FieldLabel>
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-optional-comments-rtl">
                  توضیحات
                </FieldLabel>
                <Textarea
                  id="checkout-7j9-optional-comments-rtl"
                  placeholder="توضیحات تکمیلی را بنویسید"
                  className="resize-none"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button type="submit">ثبت</Button>
            <Button variant="outline" type="button">
              انصراف
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}
