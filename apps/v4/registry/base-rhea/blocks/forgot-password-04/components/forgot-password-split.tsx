"use client"

import * as React from "react"

import { Button } from "@/registry/base-rhea/ui/button"
import { Card, CardContent } from "@/registry/base-rhea/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-rhea/ui/field"
import { Input } from "@/registry/base-rhea/ui/input"

export function ForgotPasswordSplit({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [sent, setSent] = React.useState(false)

  return (
    <div className={className} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="p-6 md:p-8">
            {sent ? (
              <div className="flex h-full flex-col justify-center gap-4">
                <div className="space-y-2 text-center md:text-start">
                  <h1 className="text-2xl font-bold">ایمیل ارسال شد</h1>
                  <p className="text-balance text-muted-foreground">
                    لینک بازیابی را در صندوق ورودی بررسی کنید. لینک حدود ۱۵
                    دقیقه معتبر است.
                  </p>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setSent(false)}
                >
                  ارسال مجدد
                </Button>
                <FieldDescription className="text-center md:text-start">
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
                  <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-start">
                    <h1 className="text-2xl font-bold">بازیابی رمز عبور</h1>
                    <p className="text-balance text-muted-foreground">
                      ایمیل حساب FarsiUI خود را وارد کنید
                    </p>
                  </div>
                  <Field>
                    <FieldLabel htmlFor="split-email">ایمیل</FieldLabel>
                    <Input
                      id="split-email"
                      type="email"
                      placeholder="name@example.com"
                      dir="ltr"
                      className="text-start"
                      required
                    />
                  </Field>
                  <Field>
                    <Button type="submit" className="w-full">
                      ادامه
                    </Button>
                  </Field>
                  <FieldDescription className="text-center md:text-start">
                    حساب ندارید؟ <a href="#">ثبت‌نام</a>
                  </FieldDescription>
                </FieldGroup>
              </form>
            )}
          </div>
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
