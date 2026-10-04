import { cn } from "cn"

import { Button } from "@/registry/base-maia/ui/button"
import { Card, CardContent } from "@/registry/base-maia/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-maia/ui/field"
import { Input } from "@/registry/base-maia/ui/input"

export default function PersonalInfoForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">اطلاعات شخصی</h1>
                <p className="text-sm text-balance text-muted-foreground">
                  مشخصات خود را تکمیل کنید تا تجربه‌ای شخصی‌سازی‌شده داشته باشید
                </p>
              </div>
              <Field>
                <FieldLabel htmlFor="full-name">نام کامل</FieldLabel>
                <Input id="full-name" placeholder="سارا محمدی" required />
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
                <Field className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="phone">موبایل</FieldLabel>
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
                    <FieldLabel htmlFor="birthdate">تاریخ تولد</FieldLabel>
                    <Input
                      id="birthdate"
                      inputMode="numeric"
                      placeholder="۱۳۷۰/۰۱/۱۵"
                      dir="ltr"
                      className="text-start"
                    />
                  </Field>
                </Field>
              </Field>
              <Field>
                <FieldLabel htmlFor="job">شغل</FieldLabel>
                <Input id="job" placeholder="طراح محصول" />
              </Field>
              <Field>
                <Button type="submit">ذخیره و ادامه</Button>
              </Field>
            </FieldGroup>
          </form>
          <div className="relative hidden bg-muted md:block">
            <img
              src="/farsiui/parsian.jpg"
              alt="Parsian"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
