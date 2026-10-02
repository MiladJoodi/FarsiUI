"use client"

import * as React from "react"
import { CheckIcon } from "lucide-react"

import { cn } from "@/registry/base-sera/lib/utils"
import { Badge } from "@/registry/base-sera/ui/badge"
import { Button } from "@/registry/base-sera/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-sera/ui/select"

const FLOWS = {
  onboard: {
    label: "شروع محصول",
    steps: [
      { title: "ساخت حساب", desc: "نام و ایمیل سازمانی را وارد کنید." },
      { title: "انتخاب تم", desc: "ظاهر روشن یا تیره را مشخص کنید." },
      { title: "اولین بلاک", desc: "یک بخش Hero یا ورود اضافه کنید." },
      {
        title: "انتشار استیج",
        desc: "لینک پیش‌نمایش را با تیم به اشتراک بگذارید.",
      },
    ],
  },
  support: {
    label: "پشتیبانی",
    steps: [
      { title: "ثبت تیکت", desc: "موضوع و اولویت را انتخاب کنید." },
      { title: "بررسی تیم", desc: "پشتیبان جزئیات را می‌خواند." },
      { title: "پاسخ", desc: "راه‌حل یا درخواست اطلاعات بیشتر." },
      { title: "بستن", desc: "تأیید شما تیکت را می‌بندد." },
    ],
  },
  hire: {
    label: "استخدام",
    steps: [
      { title: "ارسال رزومه", desc: "فرم شغلی را پر کنید." },
      { title: "غربالگری", desc: "بررسی اولیهٔ مهارت‌ها." },
      { title: "مصاحبه", desc: "جلسهٔ آنلاین با تیم." },
      { title: "پیشنهاد", desc: "ارائهٔ پیشنهاد همکاری." },
    ],
  },
} as const

type FlowKey = keyof typeof FLOWS

function toFa(n: number) {
  return String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]!)
}

export function StepsInteractive() {
  const [flow, setFlow] = React.useState<FlowKey>("onboard")
  const [step, setStep] = React.useState(0)
  const steps = FLOWS[flow].steps

  React.useEffect(() => {
    setStep(0)
  }, [flow])

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-3xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">مراحل فرآیند</h2>
          <p className="mt-2 text-muted-foreground">
            نوع مسیر را انتخاب کنید و بین مراحل جابه‌جا شوید
          </p>
        </div>
        <Select
          value={flow}
          onValueChange={(value) => setFlow((value as FlowKey) ?? "onboard")}
        >
          <SelectTrigger className="w-full sm:w-44" dir="rtl">
            <SelectValue placeholder="نوع فرآیند" />
          </SelectTrigger>
          <SelectContent dir="rtl" lang="fa">
            {(Object.keys(FLOWS) as FlowKey[]).map((key) => (
              <SelectItem key={key} value={key}>
                {FLOWS[key].label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <ol className="mb-8 grid grid-cols-4 gap-2">
        {steps.map((item, i) => {
          const done = i < step
          const current = i === step
          return (
            <li
              key={item.title}
              className="flex flex-col items-center gap-2 text-center"
            >
              <button
                type="button"
                onClick={() => setStep(i)}
                className={cn(
                  "flex size-9 items-center justify-center rounded-full border text-sm font-medium transition-colors",
                  current &&
                    "border-primary bg-primary text-primary-foreground",
                  done && "border-primary bg-primary/10 text-primary",
                  !current && !done && "bg-background text-muted-foreground"
                )}
                aria-current={current ? "step" : undefined}
              >
                {done ? <CheckIcon className="size-4" /> : toFa(i + 1)}
              </button>
              <span
                className={cn(
                  "hidden text-xs sm:block",
                  current
                    ? "font-medium text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.title}
              </span>
            </li>
          )
        })}
      </ol>

      <div className="rounded-2xl border bg-card p-6 shadow-sm md:p-8">
        <div className="mb-3 flex items-center gap-2">
          <Badge variant="outline">
            مرحله {toFa(step + 1)} از {toFa(steps.length)}
          </Badge>
          <Badge variant="secondary">{FLOWS[flow].label}</Badge>
        </div>
        <h3 className="text-xl font-bold tracking-tight">
          {steps[step]?.title}
        </h3>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          {steps[step]?.desc}
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          <Button
            variant="outline"
            disabled={step === 0}
            onClick={() => setStep((s) => Math.max(0, s - 1))}
          >
            قبلی
          </Button>
          <Button
            disabled={step === steps.length - 1}
            onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
          >
            بعدی
          </Button>
        </div>
      </div>
    </section>
  )
}
