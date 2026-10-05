"use client"

import { CheckIcon, LanguagesIcon, ShieldCheckIcon } from "lucide-react"

import { Badge } from "@/registry/base-mira/ui/badge"
import { Button } from "@/registry/base-mira/ui/button"

export default function BentoMedia() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 max-w-xl">
        <h2 className="text-3xl font-bold tracking-tight">بنتو با تصویر</h2>
        <p className="mt-2 text-muted-foreground">
          کاشی رسانه کنار کاشی‌های متنی برای معرفی بصری‌تر
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
        <div className="relative overflow-hidden rounded-2xl border md:col-span-2 md:row-span-2">
          <img
            src="/farsiui/dashboard.png"
            alt="داشبورد FarsiUI"
            className="absolute inset-0 size-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />
          <div className="relative flex h-full min-h-72 flex-col justify-end p-6">
            <Badge className="mb-3 w-fit">محصول</Badge>
            <h3 className="text-xl font-bold">داشبورد فارسی آماده</h3>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              پیش‌نمایش واقعی داخل بزرگ‌ترین کاشی بنتو.
            </p>
            <Button size="sm" className="mt-4 w-fit">
              مشاهده
            </Button>
          </div>
        </div>

        <div className="rounded-2xl border bg-card p-5">
          <LanguagesIcon className="size-5 text-primary" />
          <h3 className="mt-4 font-semibold">فارسی بومی</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            اعداد، تاریخ و جهت صفحه درست از ابتدا.
          </p>
        </div>

        <div className="rounded-2xl border bg-card p-5">
          <ShieldCheckIcon className="size-5 text-primary" />
          <h3 className="mt-4 font-semibold">الگوی هویت</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {["ورود و ثبت‌نام", "بازیابی رمز", "احراز هویت"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckIcon className="size-3.5 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
