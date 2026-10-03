"use client"

import { Button } from "@/registry/base-maia/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-maia/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/registry/base-maia/ui/field"
import { Input } from "@/registry/base-maia/ui/input"
import { Label } from "@/registry/base-maia/ui/label"
import { Separator } from "@/registry/base-maia/ui/separator"
import { Switch } from "@/registry/base-maia/ui/switch"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/base-maia/ui/tabs"

export function DashboardSettingsTabs() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>تنظیمات حساب</CardTitle>
          <CardDescription>
            حساب، امنیت و اعلان‌ها را در تب‌های جداگانه مدیریت کنید
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="account" className="w-full" dir="rtl">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="account">حساب</TabsTrigger>
              <TabsTrigger value="security">امنیت</TabsTrigger>
              <TabsTrigger value="notify">اعلان</TabsTrigger>
            </TabsList>

            <TabsContent value="account" className="mt-5">
              <form onSubmit={(e) => e.preventDefault()}>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="ds2-name">نام نمایشی</FieldLabel>
                    <Input
                      id="ds2-name"
                      defaultValue="رضا کریمی"
                      placeholder="نام و نام خانوادگی"
                      dir="rtl"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="ds2-email">ایمیل</FieldLabel>
                    <Input
                      id="ds2-email"
                      type="email"
                      defaultValue="reza@example.com"
                      placeholder="name@example.com"
                      dir="ltr"
                      className="text-start"
                    />
                  </Field>
                  <Button type="submit">ذخیره حساب</Button>
                </FieldGroup>
              </form>
            </TabsContent>

            <TabsContent value="security" className="mt-5 space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <Label htmlFor="ds2-2fa">ورود دو مرحله‌ای</Label>
                  <p className="text-sm text-muted-foreground">
                    تأیید با کد پیامکی هنگام ورود
                  </p>
                </div>
                <Switch id="ds2-2fa" defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <Label htmlFor="ds2-login">هشدار ورود جدید</Label>
                  <p className="text-sm text-muted-foreground">
                    ایمیل هنگام ورود از دستگاه ناشناس
                  </p>
                </div>
                <Switch id="ds2-login" defaultChecked />
              </div>
              <Button className="w-full">ذخیره امنیت</Button>
            </TabsContent>

            <TabsContent value="notify" className="mt-5 space-y-4">
              <div className="flex items-center justify-between gap-4">
                <Label htmlFor="ds2-product">محصول و به‌روزرسانی</Label>
                <Switch id="ds2-product" defaultChecked />
              </div>
              <div className="flex items-center justify-between gap-4">
                <Label htmlFor="ds2-marketing">پیشنهادها و تخفیف</Label>
                <Switch id="ds2-marketing" />
              </div>
              <Button className="w-full">ذخیره اعلان‌ها</Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  )
}
