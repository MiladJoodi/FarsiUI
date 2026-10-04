"use client"

import * as React from "react"
import { CheckIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"

const PLANS = [
  {
    id: "starter",
    name: "شروع",
    price: "۱۹۹٬۰۰۰",
    blurb: "۱ پروژه · پشتیبانی پایه",
  },
  {
    id: "pro",
    name: "حرفه‌ای",
    price: "۴۹۹٬۰۰۰",
    blurb: "پروژه نامحدود · اولویت پشتیبانی",
    recommended: true,
  },
  {
    id: "team",
    name: "تیم",
    price: "۸۹۹٬۰۰۰",
    blurb: "۵ عضو · نقش‌ها و گزارش",
  },
] as const

export default function PlanSelectionCards() {
  const [plan, setPlan] = React.useState("pro")

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-3xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 text-center">
        <Badge variant="secondary" className="mb-3">
          راه‌اندازی حساب · مرحله انتخاب طرح
        </Badge>
        <h1 className="text-2xl font-semibold tracking-tight">
          کدام طرح را می‌خواهید؟
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          یک طرح را انتخاب کنید؛ مرحله بعد پرداخت است
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {PLANS.map((p) => {
          const active = plan === p.id
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setPlan(p.id)}
              className={`rounded-xl border p-4 text-start transition-colors ${
                active
                  ? "border-primary bg-primary/5 ring-1 ring-primary/30"
                  : "hover:bg-muted/40"
              }`}
            >
              <div className="mb-2 flex items-start justify-between gap-2">
                <span className="font-semibold">{p.name}</span>
                {active ? (
                  <span className="flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <CheckIcon className="size-3" />
                  </span>
                ) : "recommended" in p && p.recommended ? (
                  <Badge variant="secondary" className="text-[10px]">
                    پیشنهادی
                  </Badge>
                ) : null}
              </div>
              <p className="text-xl font-semibold tracking-normal">{p.price}</p>
              <p className="mt-1 text-xs text-muted-foreground">تومان / ماه</p>
              <p className="mt-3 text-sm text-muted-foreground tracking-normal">
                {p.blurb}
              </p>
            </button>
          )
        })}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <Button variant="ghost">قبلی</Button>
        <Button>ادامه به پرداخت</Button>
      </div>
    </section>
  )
}
