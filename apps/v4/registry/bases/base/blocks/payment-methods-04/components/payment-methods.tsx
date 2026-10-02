"use client"

import * as React from "react"
import {
  CreditCardIcon,
  MoreHorizontalIcon,
  PlusIcon,
  StarIcon,
  WalletIcon,
} from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import { Separator } from "@/registry/bases/base/ui/separator"

type Method = {
  id: string
  kind: "card" | "wallet"
  title: string
  last4?: string
  exp?: string
  balance?: string
  isDefault: boolean
}

const INITIAL: Method[] = [
  {
    id: "c1",
    kind: "card",
    title: "ملت",
    last4: "۴۲۱۸",
    exp: "۰۸/۰۷",
    isDefault: true,
  },
  {
    id: "c2",
    kind: "card",
    title: "سامان",
    last4: "۹۱۰۳",
    exp: "۱۲/۰۶",
    isDefault: false,
  },
  {
    id: "w1",
    kind: "wallet",
    title: "کیف پول",
    balance: "۵۲۰٬۰۰۰",
    isDefault: false,
  },
]

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export function PaymentMethodsDashboard() {
  const [methods, setMethods] = React.useState(INITIAL)

  function setDefault(id: string) {
    setMethods((prev) =>
      prev.map((m) => ({ ...m, isDefault: m.id === id }))
    )
  }

  function remove(id: string) {
    setMethods((prev) => {
      const next = prev.filter((m) => m.id !== id)
      if (next.length && !next.some((m) => m.isDefault)) {
        next[0] = { ...next[0], isDefault: true }
      }
      return next
    })
  }

  const cardCount = methods.filter((m) => m.kind === "card").length
  const walletCount = methods.filter((m) => m.kind === "wallet").length

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            روش‌های پرداخت
          </h1>
          <p className="mt-1 text-sm text-muted-foreground tracking-normal">
            {toFa(methods.length)} روش ذخیره‌شده
          </p>
        </div>
        <Button size="sm">
          <PlusIcon data-icon="inline-start" />
          افزودن روش
        </Button>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
        <Card>
          <CardHeader className="text-start">
            <CardTitle>فهرست</CardTitle>
            <CardDescription>پیش‌فرض برای پرداخت‌های بعدی</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {methods.map((m) => (
              <div
                key={m.id}
                className="flex items-center gap-3 rounded-lg border px-3 py-3"
              >
                {m.kind === "wallet" ? (
                  <WalletIcon className="size-4 shrink-0 text-muted-foreground" />
                ) : (
                  <CreditCardIcon className="size-4 shrink-0 text-muted-foreground" />
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-medium">{m.title}</p>
                    {m.isDefault ? (
                      <Badge variant="secondary" className="gap-1 text-[10px]">
                        <StarIcon className="size-3" />
                        پیش‌فرض
                      </Badge>
                    ) : null}
                  </div>
                  {m.kind === "card" ? (
                    <p className="text-xs text-muted-foreground tracking-normal">
                      **** {m.last4} · {m.exp}
                    </p>
                  ) : (
                    <p className="text-xs text-muted-foreground tracking-normal">
                      موجودی {m.balance} تومان
                    </p>
                  )}
                </div>
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
                  <PopoverContent align="start" className="w-48 p-1" dir="rtl">
                    {!m.isDefault ? (
                      <button
                        type="button"
                        className="flex w-full rounded-md px-2 py-1.5 text-sm hover:bg-muted"
                        onClick={() => setDefault(m.id)}
                      >
                        تنظیم به‌عنوان پیش‌فرض
                      </button>
                    ) : null}
                    <button
                      type="button"
                      className="flex w-full rounded-md px-2 py-1.5 text-sm hover:bg-muted"
                    >
                      ویرایش
                    </button>
                    <button
                      type="button"
                      className="flex w-full rounded-md px-2 py-1.5 text-sm text-destructive hover:bg-muted"
                      onClick={() => remove(m.id)}
                    >
                      حذف
                    </button>
                  </PopoverContent>
                </Popover>
              </div>
            ))}
            {methods.length === 0 ? (
              <p className="py-6 text-center text-sm text-muted-foreground">
                روش پرداختی ثبت نشده
              </p>
            ) : null}
          </CardContent>
        </Card>

        <Card className="h-fit">
          <CardHeader className="text-start">
            <CardTitle className="text-base">خلاصه</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex justify-between gap-2 tracking-normal">
              <span className="text-muted-foreground">کارت‌ها</span>
              <span>{toFa(cardCount)}</span>
            </div>
            <div className="flex justify-between gap-2 tracking-normal">
              <span className="text-muted-foreground">کیف پول</span>
              <span>{toFa(walletCount)}</span>
            </div>
            <Separator />
            <p className="text-muted-foreground">
              پیش‌فرض:{" "}
              <span className="font-medium text-foreground">
                {methods.find((m) => m.isDefault)?.title ?? "—"}
              </span>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
