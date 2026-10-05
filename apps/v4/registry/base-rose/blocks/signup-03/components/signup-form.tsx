import { cn } from "cn"

import { Button } from "@/registry/base-rose/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-rose/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-rose/ui/field"
import { Input } from "@/registry/base-rose/ui/input"

export default function SignupForm({
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
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">ساخت حساب کاربری</CardTitle>
          <CardDescription>
            ایمیل خود را وارد کنید تا حساب بسازید
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">نام کامل</FieldLabel>
                <Input
                  id="name"
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
              </Field>
              <Field>
                <Field className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="password">رمز عبور</FieldLabel>
                    <Input id="password" type="password" required />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="confirm-password">
                      تکرار رمز عبور
                    </FieldLabel>
                    <Input id="confirm-password" type="password" required />
                  </Field>
                </Field>
                <FieldDescription>حداقل ۸ کاراکتر باشد.</FieldDescription>
              </Field>
              <Field>
                <Button type="submit">ساخت حساب</Button>
                <FieldDescription className="text-center">
                  حساب دارید؟ <a href="#">ورود</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        با ادامه، <a href="#">شرایط استفاده</a> و <a href="#">حریم خصوصی</a> را
        می‌پذیرید.
      </FieldDescription>
    </div>
  )
}
