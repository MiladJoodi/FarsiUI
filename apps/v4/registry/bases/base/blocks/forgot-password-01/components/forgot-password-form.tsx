"use client"

import * as React from "react"

import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"

export default function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [sent, setSent] = React.useState(false)
  const [email, setEmail] = React.useState("sara.mohammadi@example.com")

  return (
    <div className={className} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>فراموشی رمز عبور</CardTitle>
          <CardDescription>
            {sent
              ? "لینک بازیابی ارسال شد"
              : "ایمیل حساب خود را وارد کنید تا لینک بازیابی برایتان ارسال شود"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {sent ? (
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-muted-foreground">
                اگر حسابی با آدرس{" "}
                <span dir="ltr" className="font-medium text-foreground">
                  {email}
                </span>{" "}
                وجود داشته باشد، لینک بازیابی تا چند دقیقه دیگر به صندوق ورودی
                می‌رسد.
              </p>
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => setSent(false)}
              >
                تغییر ایمیل
              </Button>
              <FieldDescription className="text-center">
                <a href="#">بازگشت به ورود</a>
              </FieldDescription>
            </div>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault()
                setSent(true)
              }}
            >
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="forgot-email">ایمیل</FieldLabel>
                  <Input
                    id="forgot-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="name@example.com"
                    dir="ltr"
                    className="text-start"
                    required
                  />
                </Field>
                <Field>
                  <Button type="submit" className="w-full">
                    ارسال لینک بازیابی
                  </Button>
                  <FieldDescription className="text-center">
                    رمز را به یاد آوردید؟ <a href="#">ورود</a>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
