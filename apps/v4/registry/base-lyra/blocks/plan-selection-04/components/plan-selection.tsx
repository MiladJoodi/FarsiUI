"use client"

import * as React from "react"
import { CheckIcon } from "lucide-react"

import { Badge } from "@/registry/base-lyra/ui/badge"
import { Button } from "@/registry/base-lyra/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-lyra/ui/card"
import { Label } from "@/registry/base-lyra/ui/label"
import { Separator } from "@/registry/base-lyra/ui/separator"
import { Switch } from "@/registry/base-lyra/ui/switch"

const STEPS = ["حساب", "طرح", "پرداخت"] as const

const PLANS = [
  {
    id: "starter",
    name: "شروع",
    monthly: "۱۹۹٬۰۰۰",
    yearly: "۱٬۹۰۰٬۰۰۰",
    features: ["۱ پروژه", "پشتیبانی ایمیلی"],
  },
  {
    id: "pro",
    name: "حرفه‌ای",
    monthly: "۴۹۹٬۰۰۰",
    yearly: "۴٬۷۹۰٬۰۰۰",
    features: ["پروژه نامحدود", "اولویت پشتیبانی", "تم سفارشی"],
  },
  {
    id: "team",
    name: "تیم",
    monthly: "۸۹۹٬۰۰۰",
    yearly: "۸٬۶۳۰٬۰۰۰",
    features: ["۵ عضو", "نقش‌ها", "گزارش استفاده"],
  },
] as const

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export function PlanSelectionWizard() {
  const [plan, setPlan] = React.useState("pro")
  const [yearly, setYearly] = React.useState(true)
  const [compare, setCompare] = React.useState(false)
  const selected = PLANS.find((p) => p.id === plan)!

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
        {STEPS.map((label, i) => (
          <React.Fragment key={label}>
            {i > 0 ? <span className="text-muted-foreground">←</span> : null}
            <Badge
              variant={i === 1 ? "default" : "outline"}
              className="tracking-normal"
            >
              {toFa(i + 1)}. {label}
            </Badge>
          </React.Fragment>
        ))}
      </div>

      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">انتخاب طرح</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            مرحله فلو — بعد از این، پرداخت
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Label htmlFor="ps4-yearly" className="text-sm">
              سالانه
            </Label>
            <Switch
              id="ps4-yearly"
              checked={yearly}
              onCheckedChange={setYearly}
            />
          </div>
          <div className="flex items-center gap-2">
            <Label htmlFor="ps4-compare" className="text-sm">
              مقایسه ویژگی
            </Label>
            <Switch
              id="ps4-compare"
              checked={compare}
              onCheckedChange={setCompare}
            />
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-3">
          {PLANS.map((p) => {
            const active = plan === p.id
            const price = yearly ? p.yearly : p.monthly
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setPlan(p.id)}
                className={`flex w-full items-start gap-3 rounded-xl border p-4 text-start ${
                  active
                    ? "border-primary bg-primary/5 ring-1 ring-primary/25"
                    : "hover:bg-muted/30"
                }`}
              >
                <span
                  className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border ${
                    active
                      ? "border-primary bg-primary text-primary-foreground"
                      : ""
                  }`}
                >
                  {active ? <CheckIcon className="size-3" /> : null}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-semibold">{p.name}</p>
                    <p className="tracking-normal">
                      {price}
                      <span className="text-xs text-muted-foreground">
                        {" "}
                        / {yearly ? "سال" : "ماه"}
                      </span>
                    </p>
                  </div>
                  {compare ? (
                    <ul className="mt-2 space-y-1 text-sm tracking-normal text-muted-foreground">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-1.5">
                          <CheckIcon className="size-3.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </button>
            )
          })}
        </div>

        <Card className="h-fit">
          <CardHeader className="text-start">
            <CardTitle className="text-base">خلاصه انتخاب</CardTitle>
            <CardDescription>قبل از رفتن به پرداخت</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex justify-between gap-2">
              <span className="text-muted-foreground">طرح</span>
              <span className="font-medium">{selected.name}</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-muted-foreground">دوره</span>
              <span>{yearly ? "سالانه" : "ماهانه"}</span>
            </div>
            <Separator />
            <div className="flex justify-between gap-2 font-medium tracking-normal">
              <span>مبلغ</span>
              <span>{yearly ? selected.yearly : selected.monthly} تومان</span>
            </div>
            <Button className="w-full">ادامه به پرداخت</Button>
            <Button variant="outline" className="w-full">
              بازگشت به حساب
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
