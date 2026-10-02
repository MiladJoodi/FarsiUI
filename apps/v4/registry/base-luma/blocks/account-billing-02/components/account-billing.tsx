"use client"

import { Badge } from "@/registry/base-luma/ui/badge"
import { Button } from "@/registry/base-luma/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-luma/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-luma/ui/field"
import { Input } from "@/registry/base-luma/ui/input"
import { Separator } from "@/registry/base-luma/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/base-luma/ui/tabs"

export function AccountBillingTabs() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <div className="flex flex-wrap items-center gap-2">
            <CardTitle>صورتحساب و طرح</CardTitle>
            <Badge variant="secondary">فعال</Badge>
          </div>
          <CardDescription>
            طرح فعلی و روش پرداخت را مدیریت کنید
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="plan" className="w-full" dir="rtl">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="plan">طرح</TabsTrigger>
              <TabsTrigger value="payment">پرداخت</TabsTrigger>
            </TabsList>

            <TabsContent value="plan" className="mt-5 space-y-4">
              <div className="rounded-lg border p-4">
                <p className="font-medium">طرح حرفه‌ای</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  تمدید خودکار هر ماه
                </p>
                <Separator className="my-3" />
                <div className="flex justify-between text-sm">
                  <span>مبلغ ماهانه</span>
                  <span className="font-medium tabular-nums">
                    <bdi dir="ltr">۱٬۲۰۰٬۰۰۰</bdi> تومان
                  </span>
                </div>
              </div>
              <Button className="w-full" variant="outline">
                تغییر طرح
              </Button>
            </TabsContent>

            <TabsContent value="payment" className="mt-5">
              <form onSubmit={(e) => e.preventDefault()}>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="ab2-name">نام روی کارت</FieldLabel>
                    <Input
                      id="ab2-name"
                      defaultValue="رضا کریمی"
                      placeholder="نام و نام خانوادگی"
                      dir="rtl"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="ab2-email">ایمیل فاکتور</FieldLabel>
                    <Input
                      id="ab2-email"
                      type="email"
                      defaultValue="reza@example.com"
                      placeholder="name@example.com"
                      dir="ltr"
                      className="text-start"
                    />
                    <FieldDescription>
                      فاکتورها به این آدرس ارسال می‌شوند
                    </FieldDescription>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="ab2-card">شماره کارت</FieldLabel>
                    <Input
                      id="ab2-card"
                      inputMode="numeric"
                      placeholder="6037-****-****-1234"
                      dir="ltr"
                      className="text-start"
                    />
                  </Field>
                  <Button type="submit">ذخیره روش پرداخت</Button>
                </FieldGroup>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  )
}
