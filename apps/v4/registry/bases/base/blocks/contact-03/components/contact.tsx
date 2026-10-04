"use client"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import { Textarea } from "@/registry/bases/base/ui/textarea"

export default function ContactSplit() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <section className="w-full max-w-5xl overflow-hidden rounded-2xl border bg-card shadow-sm lg:grid lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-6 border-b bg-muted/40 p-6 md:p-10 lg:border-b-0 lg:border-l">
          <div>
            <Badge variant="secondary" className="mb-3">
              دفتر مرکزی
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight">با ما در تماس باشید</h2>
            <p className="mt-2 text-muted-foreground">
              برای فروش، پشتیبانی یا همکاری پیام بگذارید
            </p>
          </div>
          <div className="space-y-4 text-sm">
            <div>
              <p className="text-muted-foreground">ایمیل</p>
              <p dir="ltr" className="mt-1 font-medium tracking-normal [letter-spacing:0]">
                info@farsiui.ir
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">تلفن</p>
              <p className="mt-1 font-medium">
                <bdi
                  dir="ltr"
                  className="inline-block whitespace-nowrap tracking-normal [letter-spacing:0]"
                >
                  ۰۲۱-۹۱۰۰۰۰۰۰
                </bdi>
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">آدرس</p>
              <p className="mt-1 font-medium leading-relaxed">
                تهران، خیابان ولیعصر، نبش کوچهٔ نرگس، پلاک ۱۲۰، طبقهٔ ۳
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">ساعات پاسخگویی</p>
              <p className="mt-1 font-medium">شنبه تا چهارشنبه · ۹ تا ۱۸</p>
            </div>
          </div>
        </div>

        <form
          className="flex flex-col justify-center p-6 md:p-10"
          onSubmit={(e) => e.preventDefault()}
        >
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="c3-name">نام و نام خانوادگی</FieldLabel>
              <Input
                id="c3-name"
                placeholder="سارا محمدی"
                dir="rtl"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="c3-email">ایمیل</FieldLabel>
              <Input
                id="c3-email"
                type="email"
                placeholder="name@example.com"
                dir="ltr"
                className="text-start"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="c3-msg">پیام</FieldLabel>
              <Textarea
                id="c3-msg"
                placeholder="موضوع پیام را بنویسید…"
                dir="rtl"
                className="min-h-28"
                required
              />
            </Field>
            <Button type="submit" className="w-full">
              ارسال پیام
            </Button>
            <FieldDescription>
              پاسخ به ایمیل شما ارسال می‌شود
            </FieldDescription>
          </FieldGroup>
        </form>
      </section>
    </div>
  )
}
