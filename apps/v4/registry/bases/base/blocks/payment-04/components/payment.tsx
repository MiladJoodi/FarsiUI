"use client"

import * as React from "react"
import {
  CreditCardIcon,
  LandmarkIcon,
  MoreHorizontalIcon,
  WalletIcon,
} from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  Field,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import { Label } from "@/registry/bases/base/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/registry/bases/base/ui/radio-group"
import { Separator } from "@/registry/bases/base/ui/separator"

const SAVED = [
  {
    id: "c1",
    label: "ملت",
    last4: "۴۲۱۸",
    exp: "۰۸/۰۷",
  },
  {
    id: "c2",
    label: "سامان",
    last4: "۹۱۰۳",
    exp: "۱۲/۰۶",
  },
] as const

const ORDER = [
  { name: "هدفون بی‌سیم", price: "۸۹۰٬۰۰۰" },
  { name: "کاور سیلیکونی", price: "۱۲۰٬۰۰۰" },
] as const

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

export function PaymentDashboard() {
  const [method, setMethod] = React.useState("saved")
  const [cardId, setCardId] = React.useState("c1")
  const [card, setCard] = React.useState("")
  const [exp, setExp] = React.useState("")
  const [cvv, setCvv] = React.useState("")

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">پرداخت</h1>
          <p className="mt-1 text-sm text-muted-foreground tracking-normal">
            سفارش #۱۸۴۲
          </p>
        </div>
        <Badge variant="secondary">درگاه امن</Badge>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <Card>
            <CardHeader className="text-start">
              <CardTitle>روش پرداخت</CardTitle>
              <CardDescription>کارت ذخیره‌شده یا روش دیگر</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <RadioGroup
                value={method}
                onValueChange={setMethod}
                className="gap-3"
              >
                <Label
                  htmlFor="pay4-saved"
                  className="flex cursor-pointer items-center gap-3 rounded-lg border p-3"
                >
                  <RadioGroupItem value="saved" id="pay4-saved" />
                  <CreditCardIcon className="size-4 text-muted-foreground" />
                  <span className="font-medium">کارت ذخیره‌شده</span>
                </Label>
                <Label
                  htmlFor="pay4-new"
                  className="flex cursor-pointer items-center gap-3 rounded-lg border p-3"
                >
                  <RadioGroupItem value="new" id="pay4-new" />
                  <LandmarkIcon className="size-4 text-muted-foreground" />
                  <span className="font-medium">کارت جدید</span>
                </Label>
                <Label
                  htmlFor="pay4-wallet"
                  className="flex cursor-pointer items-center gap-3 rounded-lg border p-3"
                >
                  <RadioGroupItem value="wallet" id="pay4-wallet" />
                  <WalletIcon className="size-4 text-muted-foreground" />
                  <span className="font-medium">کیف پول</span>
                </Label>
              </RadioGroup>

              {method === "saved" ? (
                <div className="space-y-2">
                  {SAVED.map((c) => (
                    <div
                      key={c.id}
                      className={`flex items-center justify-between gap-3 rounded-lg border px-3 py-2.5 ${
                        cardId === c.id ? "border-primary bg-primary/5" : ""
                      }`}
                    >
                      <button
                        type="button"
                        className="flex min-w-0 flex-1 items-center gap-3 text-start text-sm"
                        onClick={() => setCardId(c.id)}
                      >
                        <CreditCardIcon className="size-4 shrink-0 text-muted-foreground" />
                        <div>
                          <p className="font-medium">{c.label}</p>
                          <p className="text-xs text-muted-foreground tracking-normal">
                            **** {c.last4} · {c.exp}
                          </p>
                        </div>
                      </button>
                      <Popover>
                        <PopoverTrigger
                          render={
                            <Button
                              variant="ghost"
                              size="icon-sm"
                              aria-label="عملیات"
                            />
                          }
                        >
                          <MoreHorizontalIcon />
                        </PopoverTrigger>
                        <PopoverContent
                          align="start"
                          className="w-40 p-1"
                          dir="rtl"
                        >
                          <button
                            type="button"
                            className="flex w-full rounded-md px-2 py-1.5 text-sm hover:bg-muted"
                          >
                            ویرایش
                          </button>
                          <button
                            type="button"
                            className="flex w-full rounded-md px-2 py-1.5 text-sm text-destructive hover:bg-muted"
                          >
                            حذف
                          </button>
                        </PopoverContent>
                      </Popover>
                    </div>
                  ))}
                </div>
              ) : null}

              {method === "new" ? (
                <div className="space-y-3">
                  <Field>
                    <FieldLabel htmlFor="pay4-card">شماره کارت</FieldLabel>
                    <Input
                      id="pay4-card"
                      value={card}
                      onChange={(e) => setCard(formatCardNumber(e.target.value))}
                      placeholder="۶۰۳۷-****-****-****"
                      dir="ltr"
                      className="text-start tracking-normal"
                      inputMode="numeric"
                    />
                  </Field>
                  <div className="grid grid-cols-2 gap-3">
                    <Field>
                      <FieldLabel htmlFor="pay4-exp">انقضا</FieldLabel>
                      <Input
                        id="pay4-exp"
                        value={exp}
                        onChange={(e) => setExp(formatExp(e.target.value))}
                        placeholder="ماه/سال"
                        dir="rtl"
                        className="text-end tracking-normal"
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="pay4-cvv">CVV</FieldLabel>
                      <Input
                        id="pay4-cvv"
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
                </div>
              ) : null}

              {method === "wallet" ? (
                <p className="rounded-lg border bg-muted/30 px-3 py-2 text-sm tracking-normal">
                  موجودی کیف پول:{" "}
                  <span className="font-medium">۵۲۰٬۰۰۰</span> تومان
                </p>
              ) : null}
            </CardContent>
          </Card>
        </div>

        <Card className="h-fit">
          <CardHeader className="text-start">
            <CardTitle className="text-base">خلاصه سفارش</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {ORDER.map((item) => (
              <div
                key={item.name}
                className="flex justify-between gap-2 tracking-normal"
              >
                <span className="text-muted-foreground">{item.name}</span>
                <span>{item.price}</span>
              </div>
            ))}
            <Separator />
            <div className="flex justify-between gap-2 tracking-normal">
              <span className="text-muted-foreground">ارسال</span>
              <span>۴۵٬۰۰۰</span>
            </div>
            <div className="flex justify-between gap-2 font-medium tracking-normal">
              <span>قابل پرداخت</span>
              <span>۱٬۰۵۵٬۰۰۰ تومان</span>
            </div>
          </CardContent>
          <CardFooter className="border-t">
            <Button className="w-full">پرداخت امن</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
