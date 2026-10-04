"use client"

import * as React from "react"
import { CheckIcon, MinusIcon } from "lucide-react"

import { Button } from "@/registry/base-mira/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-mira/ui/select"

const OPTIONS = {
  "ساخت از صفر": {
    cells: {
      rtl: false,
      placeholder: false,
      dropdown: false,
      digits: false,
      auth: false,
      docs: false,
    },
  },
  "کیت عمومی": {
    cells: {
      rtl: true,
      placeholder: false,
      dropdown: false,
      digits: false,
      auth: false,
      docs: true,
    },
  },
  "قالب خارجی": {
    cells: {
      rtl: true,
      placeholder: false,
      dropdown: false,
      digits: false,
      auth: false,
      docs: true,
    },
  },
  فارسی‌یوآی: {
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

const OPTION_ITEMS = (Object.keys(OPTIONS) as OptionKey[]).map((key) => ({
  value: key,
  label: key,
}))

const FEATURES = [
  { key: "rtl", label: "راست‌چین از ابتدا" },
  { key: "placeholder", label: "متن راهنمای فارسی" },
  { key: "dropdown", label: "منوی کشویی راست‌چین" },
  { key: "digits", label: "اعداد فارسی" },
  { key: "auth", label: "بلوک احراز هویت" },
  { key: "docs", label: "مستندات فارسی" },
] as const

export default function ComparisonPicker() {
  const [left, setLeft] = React.useState<OptionKey>("ساخت از صفر")
  const [right, setRight] = React.useState<OptionKey>("فارسی‌یوآی")

  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <section className="w-full max-w-3xl rounded-xl border bg-background px-6 py-12 shadow-sm md:px-10 md:py-16">
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
            items={OPTION_ITEMS}
            value={left}
            onValueChange={(value) => {
              if (value && value in OPTIONS) setLeft(value as OptionKey)
            }}
          >
            <SelectTrigger className="w-full" dir="rtl">
              <SelectValue placeholder="گزینهٔ اول" />
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              {OPTION_ITEMS.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            items={OPTION_ITEMS}
            value={right}
            onValueChange={(value) => {
              if (value && value in OPTIONS) setRight(value as OptionKey)
            }}
          >
            <SelectTrigger className="w-full" dir="rtl">
              <SelectValue placeholder="گزینهٔ دوم" />
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              {OPTION_ITEMS.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="overflow-hidden rounded-xl border">
          <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b bg-muted/40 text-sm font-medium">
            <div className="px-4 py-3">قابلیت</div>
            <div className="border-s px-4 py-3 text-center">{left}</div>
            <div className="border-s px-4 py-3 text-center">{right}</div>
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
          مشاهدهٔ بلوک‌های آماده
        </Button>
      </section>
    </div>
  )
}
