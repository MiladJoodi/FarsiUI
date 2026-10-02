import { Button } from "@/registry/base-sera/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-sera/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-sera/ui/field"
import { Input } from "@/registry/base-sera/ui/input"

export function PersonalInfoForm({
  ...props
}: React.ComponentProps<typeof Card>) {
  return (
    <Card dir="rtl" lang="fa" {...props}>
      <CardHeader>
        <CardTitle>اطلاعات شخصی</CardTitle>
        <CardDescription>مشخصات اصلی حساب خود را وارد کنید</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="full-name">نام و نام خانوادگی</FieldLabel>
              <Input
                id="full-name"
                type="text"
                placeholder="سارا محمدی"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">ایمیل</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                dir="ltr"
                className="text-start"
                required
              />
              <FieldDescription>
                برای ورود و اعلان‌ها استفاده می‌شود.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="phone">شماره موبایل</FieldLabel>
              <Input
                id="phone"
                type="tel"
                inputMode="tel"
                placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                dir="ltr"
                className="text-start"
                required
              />
            </Field>
            <Field>
              <Button type="submit">ذخیره اطلاعات</Button>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
