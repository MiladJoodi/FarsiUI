import { cn } from "cn"

import { Button } from "@/registry/base-vega/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/registry/base-vega/ui/field"
import { Input } from "@/registry/base-vega/ui/input"

export default function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form
      dir="rtl"
      lang="fa"
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">ساخت حساب کاربری</h1>
          <p className="text-sm text-balance text-muted-foreground">
            فرم زیر را پر کنید تا حساب بسازید
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="name">نام کامل</FieldLabel>
          <Input
            id="name"
            type="text"
            placeholder="سارا محمدی"
            required
            className="bg-background"
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
            className="bg-background"
          />
          <FieldDescription>
            برای ارتباط با شما استفاده می‌شود و با دیگران به اشتراک گذاشته
            نمی‌شود.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="password">رمز عبور</FieldLabel>
          <Input
            id="password"
            type="password"
            required
            className="bg-background"
          />
          <FieldDescription>حداقل ۸ کاراکتر باشد.</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="confirm-password">تکرار رمز عبور</FieldLabel>
          <Input
            id="confirm-password"
            type="password"
            required
            className="bg-background"
          />
          <FieldDescription>رمز عبور را دوباره وارد کنید.</FieldDescription>
        </Field>
        <Field>
          <Button type="submit">ساخت حساب</Button>
        </Field>
        <FieldSeparator>یا ادامه با</FieldSeparator>
        <Field>
          <Button variant="outline" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                fill="currentColor"
              />
            </svg>
            ثبت‌نام با گوگل
          </Button>
          <FieldDescription className="px-6 text-center">
            حساب دارید؟ <a href="#">ورود</a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
