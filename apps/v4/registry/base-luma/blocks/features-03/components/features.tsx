"use client"

import { CheckIcon } from "lucide-react"

import { Badge } from "@/registry/base-luma/ui/badge"
import { Button } from "@/registry/base-luma/ui/button"

const ROWS = [
  {
    badge: "راست‌چین",
    title: "چیدمان درست برای فارسی",
    desc: "فاصله‌ها، تراز و ترتیب عناصر طوری تنظیم شده که در RTL طبیعی به نظر برسد؛ بدون وصلهٔ بعدی.",
    points: [
      "جهت خودکار فرم‌ها",
      "آیکون و متن هم‌راستا",
      "شماره و تاریخ فارسی",
    ],
    image: "/farsiui/parsian.jpg",
    alt: "فضای بصری فارسی",
    reverse: false,
  },
  {
    badge: "بلوک‌ها",
    title: "از معرفی تا داشبورد",
    desc: "بخش‌های آماده برای صفحات رایج محصول؛ هر بلوک یک کامپوننت تمیز برای کپی در پروژهٔ شماست.",
    points: ["هیرو و ویژگی‌ها", "ورود و احراز هویت", "تنظیمات و پروفایل"],
    image: "/farsiui/dashboard.png",
    alt: "نمایی از داشبورد",
    reverse: true,
  },
] as const

export function FeaturesSplit() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center gap-16 px-6 py-16 md:px-10"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          ساخته‌شده برای محصول فارسی
        </h2>
        <p className="mt-3 text-muted-foreground">
          دو لایهٔ مهم که تیم‌ها هر روز به آن نیاز دارند
        </p>
      </div>

      {ROWS.map((row) => (
        <div
          key={row.title}
          className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
        >
          <div className={row.reverse ? "lg:order-2" : undefined}>
            <Badge variant="secondary">{row.badge}</Badge>
            <h3 className="mt-4 text-2xl font-bold tracking-tight">
              {row.title}
            </h3>
            <p className="mt-3 text-muted-foreground">{row.desc}</p>
            <ul className="mt-6 space-y-2">
              {row.points.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm">
                  <CheckIcon className="size-4 shrink-0 text-primary" />
                  {point}
                </li>
              ))}
            </ul>
            <Button className="mt-6" variant="outline">
              بیشتر ببینید
            </Button>
          </div>
          <div className={row.reverse ? "lg:order-1" : undefined}>
            <img
              src={row.image}
              alt={row.alt}
              className="aspect-[4/3] w-full rounded-2xl border object-cover shadow-sm"
            />
          </div>
        </div>
      ))}
    </section>
  )
}
