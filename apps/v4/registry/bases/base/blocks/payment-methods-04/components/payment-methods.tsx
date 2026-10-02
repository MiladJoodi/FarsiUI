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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
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
          <p className="mt-1 text-sm text-muted-foreground">
            <bdi dir="ltr">{methods.length}</bdi> روش ذخیره‌شده
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
                    <bdi
                      dir="ltr"
                      className="text-xs text-muted-foreground"
                    >
                      **** {m.last4} · {m.exp}
                    </bdi>
                  ) : (
                    <p className="text-xs text-muted-foreground">
                      موجودی <bdi dir="ltr">{m.balance}</bdi> تومان
                    </p>
                  )}
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        aria-label="عملیات"
                      />
                    }
                  >
                    <MoreHorizontalIcon />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" dir="rtl" lang="fa">
                    {!m.isDefault ? (
                      <DropdownMenuItem onClick={() => setDefault(m.id)}>
                        تنظیم به‌عنوان پیش‌فرض
                      </DropdownMenuItem>
                    ) : null}
                    <DropdownMenuItem>ویرایش</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      variant="destructive"
                      onClick={() => remove(m.id)}
                    >
                      حذف
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
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
            <div className="flex justify-between gap-2">
              <span className="text-muted-foreground">کارت‌ها</span>
              <bdi dir="ltr">
                {methods.filter((m) => m.kind === "card").length}
              </bdi>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-muted-foreground">کیف پول</span>
              <bdi dir="ltr">
                {methods.filter((m) => m.kind === "wallet").length}
              </bdi>
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
