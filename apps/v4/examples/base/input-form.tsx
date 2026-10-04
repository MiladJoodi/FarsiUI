import { Button } from "@/styles/base-nova/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/styles/base-nova/ui/field"
import { Input } from "@/styles/base-nova/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/styles/base-nova/ui/select"

export default function InputForm() {
  const countries = [
    { label: "ایران", value: "ir" },
    { label: "آمریکا", value: "us" },
    { label: "بریتانیا", value: "uk" },
    { label: "کانادا", value: "ca" },
  ]
  return (
    <form dir="rtl" className="w-full max-w-sm">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="form-name">نام</FieldLabel>
          <Input
            id="form-name"
            type="text"
            placeholder="علی رضایی"
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="form-email">ایمیل</FieldLabel>
          <Input id="form-email" type="email" placeholder="ali@example.com" />
          <FieldDescription>
            ایمیل شما را با کسی به اشتراک نمی‌گذاریم.
          </FieldDescription>
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="form-age">سن</FieldLabel>
            <Input
              id="form-age"
              type="number"
              inputMode="numeric"
              name="age"
              placeholder="31"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="form-country">کشور</FieldLabel>
            <Select items={countries} defaultValue="ir">
              <SelectTrigger id="form-country">
                <SelectValue />
              </SelectTrigger>
              <SelectContent dir="rtl">
                <SelectGroup>
                  {countries.map((country) => (
                    <SelectItem key={country.value} value={country.value}>
                      {country.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="form-phone">تلفن</FieldLabel>
          <Input
            id="form-phone"
            type="tel"
            dir="ltr"
            placeholder="+98 912 123 4567"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="form-about">درباره شما</FieldLabel>
          <Input
            id="form-about"
            type="text"
            placeholder="من 31 سال دارم"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="form-address">آدرس</FieldLabel>
          <Input id="form-address" type="text" placeholder="تهران، خیابان ولیعصر" />
        </Field>
        <Field orientation="horizontal">
          <Button type="button" variant="outline">
            لغو
          </Button>
          <Button type="submit">ارسال</Button>
        </Field>
      </FieldGroup>
    </form>
  )
}
