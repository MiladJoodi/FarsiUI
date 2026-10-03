"use client"

import { Button } from "@/registry/base-mira/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-mira/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-mira/ui/field"
import { Input } from "@/registry/base-mira/ui/input"
import { Label } from "@/registry/base-mira/ui/label"
import { Separator } from "@/registry/base-mira/ui/separator"
import { Switch } from "@/registry/base-mira/ui/switch"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/base-mira/ui/tabs"

export function AccountNotificationsTabs() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>ترجیحات اعلان</CardTitle>
          <CardDescription>
            بر اساس نوع پیام و کانال ایمیل تنظیم کنید
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="product" className="w-full" dir="rtl">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="product">محصول</TabsTrigger>
              <TabsTrigger value="security">امنیت</TabsTrigger>
              <TabsTrigger value="marketing">بازاریابی</TabsTrigger>
            </TabsList>

            <TabsContent value="product" className="mt-5 space-y-4">
              <Toggle
                id="an2-updates"
                title="به‌روزرسانی محصول"
                desc="نسخهٔ جدید و تغییرات مهم"
                defaultChecked
              />
              <Separator />
              <Toggle
                id="an2-tips"
                title="نکته و آموزش"
                desc="راهنمای استفاده از قابلیت‌ها"
                defaultChecked
              />
              <Button className="w-full">ذخیره محصول</Button>
            </TabsContent>

            <TabsContent value="security" className="mt-5 space-y-4">
              <Toggle
                id="an2-login"
                title="ورود جدید"
                desc="هشدار هنگام ورود از دستگاه ناشناس"
                defaultChecked
              />
              <Separator />
              <Toggle
                id="an2-password"
                title="تغییر رمز"
                desc="اطلاع پس از تغییر رمز عبور"
                defaultChecked
              />
              <Button className="w-full">ذخیره امنیت</Button>
            </TabsContent>

            <TabsContent value="marketing" className="mt-5">
              <form onSubmit={(e) => e.preventDefault()}>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="an2-email">ایمیل خبرنامه</FieldLabel>
                    <Input
                      id="an2-email"
                      type="email"
                      defaultValue="sara@example.com"
                      placeholder="name@example.com"
                      dir="ltr"
                      className="text-start"
                    />
                    <FieldDescription>
                      پیشنهادها و تخفیف‌ها به این آدرس ارسال می‌شود
                    </FieldDescription>
                  </Field>
                  <div className="flex items-center justify-between gap-4">
                    <Label htmlFor="an2-promo">پیشنهادها و تخفیف</Label>
                    <Switch id="an2-promo" />
                  </div>
                  <Button type="submit">ذخیره بازاریابی</Button>
                </FieldGroup>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  )
}

function Toggle({
  id,
  title,
  desc,
  defaultChecked,
}: {
  id: string
  title: string
  desc: string
  defaultChecked?: boolean
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="space-y-0.5">
        <Label htmlFor={id}>{title}</Label>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
      <Switch id={id} defaultChecked={defaultChecked} />
    </div>
  )
}
