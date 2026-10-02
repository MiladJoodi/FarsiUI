"use client"

import * as React from "react"
import { CheckIcon, MinusIcon } from "lucide-react"

import { Button } from "@/registry/base-rhea/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-rhea/ui/select"

const OPTIONS = {
  scratch: {
    label: "ساخت از صفر",
    cells: {
      rtl: false,
      placeholder: false,
      dropdown: false,
      digits: false,
      auth: false,
      docs: false,
    },
  },
  kit: {
    label: "کیت عمومی",
    cells: {
      rtl: true,
      placeholder: false,
      dropdown: false,
      digits: false,
      auth: false,
      docs: true,
    },
  },
  template: {
    label: "قالب خارجی",
    cells: {
      rtl: true,
      placeholder: false,
      dropdown: false,
      digits: false,
      auth: false,
      docs: true,
    },
  },
  farsiui: {
    label: "FarsiUI",
    cells: {
      rtl: true,
      placeholder: true,
      dropdown: true,
      digits: true,
      auth: true,
      docs: true,
    },
  },
} as const

type OptionKey = keyof typeof OPTIONS

const FEATURES = [
  { key: "rtl", label: "راست‌چین از ابتدا" },
  { key: "placeholder", label: "placeholder فارسی" },
  { key: "dropdown", label: "منوی کشویی RTL" },
  { key: "digits", label: "اعداد فارسی" },
  { key: "auth", label: "بلاک احراز هویت" },
  { key: "docs", label: "مستندات فارسی" },
] as const

export function ComparisonPicker() {
  const [left, setLeft] = React.useState<OptionKey>("scratch")
  const [right, setRight] = React.useState<OptionKey>("farsiui")

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-3xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">
          دو گزینه را بچینید
        </h2>
        <p className="mt-2 text-muted-foreground">
          هر ستون یک ابزار است؛ برای قیمت پلن‌ها به بخش قیمت‌گذاری بروید
        </p>
      </div>

      <div className="mb-6 grid gap-3 sm:grid-cols-2">
        <Select
          value={left}
          onValueChange={(value) => setLeft((value as OptionKey) ?? "scratch")}
        >
          <SelectTrigger className="w-full" dir="rtl">
            <SelectValue placeholder="گزینهٔ اول" />
          </SelectTrigger>
          <SelectContent dir="rtl" lang="fa">
            {(Object.keys(OPTIONS) as OptionKey[]).map((key) => (
              <SelectItem key={key} value={key}>
                {OPTIONS[key].label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={right}
          onValueChange={(value) => setRight((value as OptionKey) ?? "farsiui")}
        >
          <SelectTrigger className="w-full" dir="rtl">
            <SelectValue placeholder="گزینهٔ دوم" />
          </SelectTrigger>
          <SelectContent dir="rtl" lang="fa">
            {(Object.keys(OPTIONS) as OptionKey[]).map((key) => (
              <SelectItem key={key} value={key}>
                {OPTIONS[key].label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="overflow-hidden rounded-xl border">
        <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b bg-muted/40 text-sm font-medium">
          <div className="px-4 py-3">قابلیت</div>
          <div className="border-s px-4 py-3 text-center">
            {OPTIONS[left].label}
          </div>
          <div className="border-s px-4 py-3 text-center">
            {OPTIONS[right].label}
          </div>
        </div>
        {FEATURES.map((feature) => (
          <div
            key={feature.key}
            className="grid grid-cols-[1.4fr_1fr_1fr] border-b text-sm last:border-0"
          >
            <div className="px-4 py-3.5 font-medium">{feature.label}</div>
            <div className="flex items-center justify-center border-s px-4 py-3.5">
              {OPTIONS[left].cells[feature.key] ? (
                <CheckIcon className="size-4 text-primary" />
              ) : (
                <MinusIcon className="size-4 text-muted-foreground" />
              )}
            </div>
            <div className="flex items-center justify-center border-s px-4 py-3.5">
              {OPTIONS[right].cells[feature.key] ? (
                <CheckIcon className="size-4 text-primary" />
              ) : (
                <MinusIcon className="size-4 text-muted-foreground" />
              )}
            </div>
          </div>
        ))}
      </div>

      <Button variant="outline" className="mt-6 w-full sm:w-fit">
        مشاهدهٔ بلاک‌های آماده
      </Button>
    </section>
  )
}
