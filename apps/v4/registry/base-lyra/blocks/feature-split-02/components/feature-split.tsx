"use client"

import { CheckIcon } from "lucide-react"

import { Badge } from "@/registry/base-lyra/ui/badge"
import { Button } from "@/registry/base-lyra/ui/button"

const POINTS = [
  "جهت و تراز خودکار برای فارسی",
  "کامپوننت‌های هماهنگ با تم",
  "آمادهٔ کپی در پروژهٔ Next.js",
] as const

export default function FeatureSplitChecklist() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="grid min-h-svh items-center gap-10 bg-background px-6 py-16 md:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16"
    >
      <div className="mx-auto w-full max-w-lg lg:mx-0">
        <Badge variant="secondary">معرفی قابلیت</Badge>
        <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          همهٔ جزئیات RTL از قبل حل شده
        </h2>
        <p className="mt-4 text-muted-foreground md:text-lg">
          به‌جای وصله‌کاری CSS، از بلوک‌هایی استفاده کنید که از اول برای فارسی
          طراحی شده‌اند.
        </p>
        <ul className="mt-6 space-y-3">
          {POINTS.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm">
              <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg">مشاهدهٔ مستندات</Button>
          <Button size="lg" variant="outline">
            دیدن بلوک‌ها
          </Button>
        </div>
      </div>
      <div className="mx-auto w-full max-w-lg lg:mx-0">
        <img
          src="/farsiui/dashboard.png"
          alt="داشبورد FarsiUI"
          className="aspect-4/3 w-full rounded-2xl border object-cover object-top shadow-sm"
        />
      </div>
    </section>
  )
}
