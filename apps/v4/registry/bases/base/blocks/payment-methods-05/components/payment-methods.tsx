"use client"

import * as React from "react"
import {
  CreditCardIcon,
  PlusIcon,
  ShieldCheckIcon,
  StarIcon,
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
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import { Label } from "@/registry/bases/base/ui/label"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"

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

export function PaymentMethodsFancy() {
  const [methods, setMethods] = React.useState(INITIAL)
  const [filter, setFilter] = React.useState<"all" | "card" | "wallet">("all")
  const [autoPay, setAutoPay] = React.useState(true)
  const [label, setLabel] = React.useState("")
  const [card, setCard] = React.useState("")

  const visible =
    filter === "all" ? methods : methods.filter((m) => m.kind === filter)

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

  function addCard() {
    if (!card.trim()) return
    const last4 = card.replace(/\D/g, "").slice(-4) || "۰۰۰۰"
    setMethods((prev) => [
      ...prev,
      {
        id: `c-${Date.now()}`,
        kind: "card",
        title: label.trim() || "کارت جدید",
        last4,
        exp: "۰۱/۰۹",
        isDefault: prev.length === 0,
      },
    ])
    setLabel("")
    setCard("")
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
              امن
            </Badge>
            <Badge variant="outline">
              مسیر <bdi dir="ltr">/account/payment-methods</bdi>
            </Badge>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight">
            روش‌های پرداخت
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            کارت و کیف پول — شماره کارت LTR
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Label htmlFor="pm5-autopay" className="text-sm">
            پرداخت خودکار
          </Label>
          <Switch
            id="pm5-autopay"
            checked={autoPay}
            onCheckedChange={setAutoPay}
          />
        </div>
      </div>

      <div className="relative grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <Tabs
          value={filter}
          onValueChange={(v) => setFilter(v as typeof filter)}
          className="gap-4"
        >
          <TabsList className="w-full justify-start">
            <TabsTrigger value="all">همه</TabsTrigger>
            <TabsTrigger value="card">کارت</TabsTrigger>
            <TabsTrigger value="wallet">کیف پول</TabsTrigger>
          </TabsList>

          <TabsContent value={filter} className="space-y-3">
            {visible.map((m) => (
              <Card key={m.id}>
                <CardContent className="flex items-center gap-3 py-4">
                  {m.kind === "wallet" ? (
                    <WalletIcon className="size-5 shrink-0 text-muted-foreground" />
                  ) : (
                    <CreditCardIcon className="size-5 shrink-0 text-muted-foreground" />
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
                  <div className="flex shrink-0 gap-1">
                    {!m.isDefault ? (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setDefault(m.id)}
                      >
                        پیش‌فرض
                      </Button>
                    ) : null}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => remove(m.id)}
                    >
                      حذف
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            {visible.length === 0 ? (
              <p className="py-10 text-center text-sm text-muted-foreground">
                موردی در این فیلتر نیست
              </p>
            ) : null}
          </TabsContent>
        </Tabs>

        <div className="space-y-4">
          <Card>
            <CardHeader className="text-start">
              <CardTitle className="flex items-center gap-2 text-base">
                <PlusIcon className="size-4" />
                افزودن کارت
              </CardTitle>
              <CardDescription>فیلدهای عددی LTR</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Field>
                <FieldLabel htmlFor="pm5-label">برچسب</FieldLabel>
                <Input
                  id="pm5-label"
                  value={label}
                  onChange={(e) => setLabel(e.target.value)}
                  placeholder="کارت شخصی"
                  dir="rtl"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="pm5-card">شماره کارت</FieldLabel>
                <Input
                  id="pm5-card"
                  value={card}
                  onChange={(e) => setCard(e.target.value)}
                  placeholder="6037-****-****-****"
                  dir="ltr"
                  className="text-start tracking-wider"
                  inputMode="numeric"
                />
                <FieldDescription>حداقل ۴ رقم آخر</FieldDescription>
              </Field>
              <div className="grid grid-cols-2 gap-3">
                <Field>
                  <FieldLabel htmlFor="pm5-exp">انقضا</FieldLabel>
                  <Input
                    id="pm5-exp"
                    placeholder="MM/YY"
                    dir="ltr"
                    className="text-start"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="pm5-cvv">CVV</FieldLabel>
                  <Input
                    id="pm5-cvv"
                    placeholder="***"
                    dir="ltr"
                    className="text-start"
                    inputMode="numeric"
                  />
                </Field>
              </div>
            </CardContent>
            <CardFooter className="border-t">
              <Button className="w-full" onClick={addCard}>
                ذخیره کارت
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="text-start">
              <CardTitle className="text-base">آمار</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between gap-2">
                <span className="text-muted-foreground">کل</span>
                <bdi dir="ltr">{methods.length}</bdi>
              </div>
              <Separator />
              <div className="flex justify-between gap-2">
                <span className="text-muted-foreground">پیش‌فرض</span>
                <span className="font-medium">
                  {methods.find((m) => m.isDefault)?.title ?? "—"}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
