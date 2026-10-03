"use client"

import * as React from "react"
import {
  CheckIcon,
  CreditCardIcon,
  LockIcon,
  ShieldCheckIcon,
} from "lucide-react"

import { Badge } from "@/registry/base-lyra/ui/badge"
import { Button } from "@/registry/base-lyra/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-lyra/ui/card"
import {
  Field,
  FieldDescription,
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

const AMOUNT = "۱٬۲۹۵٬۰۰۰"

function toFaDigits(value: string) {
  return value.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]!)
}

function formatCardNumber(value: string) {
  const digits = value
    .replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)))
    .replace(/\D/g, "")
    .slice(0, 16)
  const fa = toFaDigits(digits)
  return fa.match(/.{1,4}/g)?.join("-") ?? fa
}

function formatExp(value: string) {
  const digits = value
    .replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)))
    .replace(/\D/g, "")
    .slice(0, 4)
  const fa = toFaDigits(digits)
  if (fa.length <= 2) return fa
  return `${fa.slice(0, 2)}/${fa.slice(2)}`
}

export function PaymentFancy() {
  const [paid, setPaid] = React.useState(false)
  const [saveCard, setSaveCard] = React.useState(true)
  const [otp, setOtp] = React.useState("")
  const [card, setCard] = React.useState("")
  const [exp, setExp] = React.useState("")
  const [cvv, setCvv] = React.useState("")

  if (paid) {
    return (
      <section
        dir="rtl"
        lang="fa"
        className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16"
      >
        <Card>
          <CardHeader className="items-center text-center">
            <div className="mb-2 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <CheckIcon className="size-6" />
            </div>
            <CardTitle>پرداخت موفق</CardTitle>
            <CardDescription className="tracking-normal">
              مبلغ {AMOUNT} تومان
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-center text-sm text-muted-foreground">
            <p className="tracking-normal">کد پیگیری: پرداخت-۹۳۸۲۷۱</p>
            <p>رسید به ایمیل شما ارسال شد</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={() => setPaid(false)}>
              بازگشت
            </Button>
          </CardFooter>
        </Card>
      </section>
    )
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="relative mx-auto flex min-h-svh max-w-5xl flex-col justify-center overflow-hidden px-6 py-16 md:px-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/10 to-transparent"
      />

      <div className="relative mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="mb-2 flex flex-wrap gap-2">
            <Badge>
              <ShieldCheckIcon className="size-3" />
              پرداخت امن
            </Badge>
            <Badge variant="outline">
              <LockIcon className="size-3" />
              امن
            </Badge>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight">پرداخت</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            کارت، کیف پول یا رمز پویا
          </p>
        </div>
        <p className="text-lg font-semibold tracking-normal">
          {AMOUNT}{" "}
          <span className="text-sm font-normal text-muted-foreground">
            تومان
          </span>
        </p>
      </div>

      <div className="relative grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <Tabs defaultValue="card" className="gap-4">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="card">کارت</TabsTrigger>
            <TabsTrigger value="wallet">کیف پول</TabsTrigger>
            <TabsTrigger value="otp">رمز پویا</TabsTrigger>
          </TabsList>

          <TabsContent value="card">
            <Card>
              <CardHeader className="text-start">
                <CardTitle className="flex items-center gap-2 text-base">
                  <CreditCardIcon className="size-4" />
                  کارت بانکی
                </CardTitle>
                <CardDescription>اطلاعات کارت فارسی</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Field>
                  <FieldLabel htmlFor="pay5-name">نام روی کارت</FieldLabel>
                  <Input id="pay5-name" placeholder="نام کامل" dir="rtl" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="pay5-card">شماره کارت</FieldLabel>
                  <Input
                    id="pay5-card"
                    value={card}
                    onChange={(e) => setCard(formatCardNumber(e.target.value))}
                    placeholder="۶۰۳۷-****-****-****"
                    dir="ltr"
                    className="text-start tracking-normal"
                    inputMode="numeric"
                  />
                </Field>
                <div className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="pay5-exp">انقضا</FieldLabel>
                    <Input
                      id="pay5-exp"
                      value={exp}
                      onChange={(e) => setExp(formatExp(e.target.value))}
                      placeholder="ماه/سال"
                      dir="rtl"
                      className="text-end tracking-normal"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="pay5-cvv">CVV</FieldLabel>
                    <Input
                      id="pay5-cvv"
                      value={cvv}
                      onChange={(e) =>
                        setCvv(
                          toFaDigits(
                            e.target.value
                              .replace(/[۰-۹]/g, (d) =>
                                String("۰۱۲۳۴۵۶۷۸۹".indexOf(d))
                              )
                              .replace(/\D/g, "")
                              .slice(0, 4)
                          )
                        )
                      }
                      placeholder="۰۰۰"
                      dir="rtl"
                      className="text-end tracking-normal"
                      inputMode="numeric"
                    />
                  </Field>
                </div>
                <Field>
                  <FieldLabel htmlFor="pay5-email">ایمیل رسید</FieldLabel>
                  <Input
                    id="pay5-email"
                    type="email"
                    placeholder="name@example.com"
                    dir="ltr"
                    className="text-start"
                  />
                </Field>
                <div className="flex items-center justify-between gap-2">
                  <Label htmlFor="pay5-save">ذخیره کارت</Label>
                  <Switch
                    id="pay5-save"
                    checked={saveCard}
                    onCheckedChange={setSaveCard}
                  />
                </div>
              </CardContent>
              <CardFooter className="border-t">
                <Button
                  className="w-full tracking-normal"
                  onClick={() => setPaid(true)}
                >
                  پرداخت {AMOUNT} تومان
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="wallet">
            <Card>
              <CardHeader className="text-start">
                <CardTitle>کیف پول</CardTitle>
                <CardDescription>پرداخت از موجودی</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between gap-2 rounded-lg border bg-muted/30 px-3 py-3 tracking-normal">
                  <span className="text-muted-foreground">موجودی</span>
                  <span className="font-medium">۲٬۴۰۰٬۰۰۰ تومان</span>
                </div>
                <div className="flex justify-between gap-2 tracking-normal">
                  <span className="text-muted-foreground">کسر می‌شود</span>
                  <span>{AMOUNT} تومان</span>
                </div>
                <Separator />
                <div className="flex justify-between gap-2 font-medium tracking-normal">
                  <span>مانده پس از پرداخت</span>
                  <span>۱٬۱۰۵٬۰۰۰ تومان</span>
                </div>
              </CardContent>
              <CardFooter className="border-t">
                <Button className="w-full" onClick={() => setPaid(true)}>
                  پرداخت از کیف پول
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="otp">
            <Card>
              <CardHeader className="text-start">
                <CardTitle>رمز پویا</CardTitle>
                <CardDescription>
                  کد ارسال‌شده به موبایل را وارد کنید
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Field>
                  <FieldLabel htmlFor="pay5-otp">کد تأیید</FieldLabel>
                  <Input
                    id="pay5-otp"
                    value={otp}
                    onChange={(e) =>
                      setOtp(
                        toFaDigits(
                          e.target.value
                            .replace(/[۰-۹]/g, (d) =>
                              String("۰۱۲۳۴۵۶۷۸۹".indexOf(d))
                            )
                            .replace(/\D/g, "")
                            .slice(0, 6)
                        )
                      )
                    }
                    placeholder="------"
                    dir="rtl"
                    className="text-center text-lg tracking-normal"
                    inputMode="numeric"
                    maxLength={6}
                  />
                  <FieldDescription className="tracking-normal">
                    موبایل:{" "}
                    <span dir="ltr" lang="fa" className="inline-block">
                      ۰۹۱۲***۷۸۴۱
                    </span>
                  </FieldDescription>
                </Field>
                <Button variant="outline" className="w-full" size="sm">
                  ارسال مجدد کد
                </Button>
              </CardContent>
              <CardFooter className="border-t">
                <Button
                  className="w-full"
                  disabled={otp.length < 6}
                  onClick={() => setPaid(true)}
                >
                  تأیید و پرداخت
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="h-fit">
          <CardHeader className="text-start">
            <CardTitle className="text-base">جزئیات مبلغ</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm tracking-normal">
            <div className="flex justify-between gap-2">
              <span className="text-muted-foreground">جمع کالا</span>
              <span>۱٬۲۵۰٬۰۰۰</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-muted-foreground">ارسال</span>
              <span>۴۵٬۰۰۰</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-muted-foreground">تخفیف</span>
              <span className="text-muted-foreground">—</span>
            </div>
            <Separator />
            <div className="flex justify-between gap-2 text-base font-semibold">
              <span>قابل پرداخت</span>
              <span>{AMOUNT} تومان</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
