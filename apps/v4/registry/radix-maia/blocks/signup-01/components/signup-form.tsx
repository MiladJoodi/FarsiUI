import { Button } from "@/registry/radix-maia/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/radix-maia/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/radix-maia/ui/field"
import { Input } from "@/registry/radix-maia/ui/input"

export default function SignupForm({
  ...props
}: React.ComponentProps<typeof Card>) {
  return (
    <Card dir="rtl" lang="fa" {...props}>
      <CardHeader>
        <CardTitle>ساخت حساب</CardTitle>
        <CardDescription>
          اطلاعات خود را برای ساخت حساب وارد کنید
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">نام کامل</FieldLabel>
              <Input id="name" type="text" placeholder="سارا محمدی" required />
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
                برای ارتباط با شما استفاده می‌شود و با دیگران به اشتراک گذاشته
                نمی‌شود.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">رمز عبور</FieldLabel>
              <Input id="password" type="password" required />
              <FieldDescription>حداقل ۸ کاراکتر باشد.</FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="confirm-password">تکرار رمز عبور</FieldLabel>
              <Input id="confirm-password" type="password" required />
              <FieldDescription>رمز عبور را دوباره وارد کنید.</FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit">ساخت حساب</Button>
                <Button variant="outline" type="button">
                  ثبت‌نام با گوگل
                </Button>
                <FieldDescription className="px-6 text-center">
                  حساب دارید؟ <a href="#">ورود</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
