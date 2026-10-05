"use client"

import { CreditCardIcon, StarIcon, WalletIcon } from "lucide-react"

import { Badge } from "@/registry/base-lyra/ui/badge"
import { Button } from "@/registry/base-lyra/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-lyra/ui/card"

const METHODS = [
  {
    id: "c1",
    type: "card" as const,
    title: "ملت",
    detail: "**** ۴۲۱۸",
    meta: "۰۸/۰۷",
    default: true,
  },
  {
    id: "c2",
    type: "card" as const,
    title: "سامان",
    detail: "**** ۹۱۰۳",
    meta: "۱۲/۰۶",
    default: false,
  },
  {
    id: "w1",
    type: "wallet" as const,
    title: "کیف پول",
    detail: "موجودی ۵۲۰٬۰۰۰ تومان",
    meta: "فعال",
    default: false,
  },
] as const

export default function PaymentMethodsCards() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">
            روش‌های پرداخت
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            مدیریت کارت و کیف پول
          </p>
        </div>
        <Button size="sm">افزودن</Button>
      </div>
      <div className="space-y-3">
        {METHODS.map((m) => (
          <Card key={m.id}>
            <CardHeader className="flex-row items-start justify-between gap-3 space-y-0 pb-2 text-start">
              <div className="flex items-start gap-3">
                {m.type === "wallet" ? (
                  <WalletIcon className="mt-0.5 size-4 text-muted-foreground" />
                ) : (
                  <CreditCardIcon className="mt-0.5 size-4 text-muted-foreground" />
                )}
                <div>
                  <CardTitle className="text-base">{m.title}</CardTitle>
                  <CardDescription className="tracking-normal">
                    {m.detail}
                  </CardDescription>
                </div>
              </div>
              {m.default ? (
                <Badge variant="secondary" className="gap-1">
                  <StarIcon className="size-3" />
                  پیش‌فرض
                </Badge>
              ) : (
                <Badge variant="outline">
                  {m.type === "wallet" ? "کیف پول" : "کارت"}
                </Badge>
              )}
            </CardHeader>
            <CardContent className="flex items-center justify-between gap-2 pt-0">
              <p className="text-xs tracking-normal text-muted-foreground">
                {m.type === "card" ? <>انقضا {m.meta}</> : m.meta}
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  ویرایش
                </Button>
                <Button variant="ghost" size="sm">
                  حذف
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
