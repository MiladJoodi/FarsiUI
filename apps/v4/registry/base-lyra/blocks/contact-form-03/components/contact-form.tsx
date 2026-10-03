"use client"

import { Button } from "@/registry/base-lyra/ui/button"
import { Card, CardContent } from "@/registry/base-lyra/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-lyra/ui/field"
import { Input } from "@/registry/base-lyra/ui/input"
import { Textarea } from "@/registry/base-lyra/ui/textarea"

export function ContactFormSplit() {
  return (
    <Card dir="rtl" lang="fa" className="overflow-hidden p-0">
      <CardContent className="grid p-0 md:grid-cols-2">
        <form className="p-6 md:p-8" onSubmit={(e) => e.preventDefault()}>
          <FieldGroup>
            <div className="space-y-2 text-center md:text-start">
              <h1 className="text-2xl font-bold">پیام بگذارید</h1>
              <p className="text-muted-foreground">
                تیم FarsiUI آمادهٔ شنیدن شماست
              </p>
            </div>
            <Field>
              <FieldLabel htmlFor="cf3-name">نام</FieldLabel>
              <Input id="cf3-name" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="cf3-email">ایمیل</FieldLabel>
              <Input
                id="cf3-email"
                type="email"
                dir="ltr"
                className="text-start"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="cf3-msg">پیام</FieldLabel>
              <Textarea id="cf3-msg" className="min-h-24" required />
            </Field>
            <Button type="submit" className="w-full">
              ارسال
            </Button>
            <FieldDescription className="text-center md:text-start">
              پاسخ به ایمیل شما ارسال می‌شود
            </FieldDescription>
          </FieldGroup>
        </form>
        <div className="relative hidden space-y-4 bg-muted p-8 md:flex md:flex-col md:justify-center">
          <div>
            <p className="text-sm text-muted-foreground">ایمیل تماس</p>
            <p dir="ltr" className="font-medium">
              info@farsiui.ir
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">ساعات پاسخگویی</p>
            <p className="font-medium">شنبه تا چهارشنبه · ۹ تا ۱۸</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">تلفن</p>
            <p className="font-medium">
              <bdi
                dir="ltr"
                className="inline-block tracking-normal [letter-spacing:0] whitespace-nowrap"
              >
                ۰۲۱-۹۱۰۰۰۰۰۰
              </bdi>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
