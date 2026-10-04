"use client"

import { Button } from "@/registry/base-lyra/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-lyra/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-lyra/ui/field"
import { Input } from "@/registry/base-lyra/ui/input"
import { Label } from "@/registry/base-lyra/ui/label"
import { Separator } from "@/registry/base-lyra/ui/separator"
import { Switch } from "@/registry/base-lyra/ui/switch"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/base-lyra/ui/tabs"

export default function SecuritySettingsTabs() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="bg-card">
        <CardHeader className="text-start">
          <CardTitle>تنظیمات امنیتی</CardTitle>
          <CardDescription>
            رمز عبور و تأیید دو مرحله‌ای را جداگانه مدیریت کنید
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="password" className="w-full" dir="rtl">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="password">رمز عبور</TabsTrigger>
              <TabsTrigger value="2fa">دو مرحله‌ای</TabsTrigger>
            </TabsList>

            <TabsContent value="password" className="mt-5">
              <form onSubmit={(e) => e.preventDefault()}>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="ss2-current">رمز فعلی</FieldLabel>
                    <Input
                      id="ss2-current"
                      type="password"
                      placeholder="رمز عبور فعلی"
                      dir="rtl"
                      className="text-end"
                      autoComplete="current-password"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="ss2-new">رمز جدید</FieldLabel>
                    <Input
                      id="ss2-new"
                      type="password"
                      placeholder="حداقل ۸ کاراکتر"
                      dir="rtl"
                      className="text-end tracking-normal"
                      autoComplete="new-password"
                    />
                    <FieldDescription>
                      ترکیبی از حروف، عدد و نماد پیشنهاد می‌شود
                    </FieldDescription>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="ss2-confirm">
                      تکرار رمز جدید
                    </FieldLabel>
                    <Input
                      id="ss2-confirm"
                      type="password"
                      placeholder="تکرار رمز جدید"
                      dir="rtl"
                      className="text-end"
                      autoComplete="new-password"
                    />
                  </Field>
                  <Button type="submit">به‌روزرسانی رمز</Button>
                </FieldGroup>
              </form>
            </TabsContent>

            <TabsContent value="2fa" className="mt-5 space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <Label htmlFor="ss2-2fa">فعال‌سازی دو مرحله‌ای</Label>
                  <p className="text-sm text-muted-foreground">
                    کد پیامکی پس از ورود با رمز
                  </p>
                </div>
                <Switch id="ss2-2fa" defaultChecked />
              </div>
              <Separator />
              <Field>
                <FieldLabel htmlFor="ss2-phone">شماره موبایل تأیید</FieldLabel>
                <Input
                  id="ss2-phone"
                  type="tel"
                  inputMode="tel"
                  defaultValue="۰۹۱۲۱۲۳۴۵۶۷"
                  placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                  dir="ltr"
                  className="text-start tracking-normal"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="ss2-email">ایمیل پشتیبان</FieldLabel>
                <Input
                  id="ss2-email"
                  type="email"
                  defaultValue="reza@example.com"
                  placeholder="name@example.com"
                  dir="ltr"
                  className="text-start"
                />
              </Field>
              <Button type="button" className="w-full">
                ذخیره دو مرحله‌ای
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  )
}
