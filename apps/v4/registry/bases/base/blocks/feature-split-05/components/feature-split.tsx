"use client"

import * as React from "react"
import { cn } from "cn"
import {
  FormInputIcon,
  LayoutDashboardIcon,
  Settings2Icon,
  UsersIcon,
} from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"

const ITEMS = [
  {
    id: "dashboard",
    icon: LayoutDashboardIcon,
    title: "داشبورد",
    desc: "کارت‌ها، نمودار و ناوبری برای پنل مدیریت فارسی.",
    image: "/farsiui/dashboard.png",
    alt: "داشبورد",
  },
  {
    id: "forms",
    icon: FormInputIcon,
    title: "فرم‌ها",
    desc: "تماس، پشتیبانی و تنظیمات با الگوی یکسان و راست‌چین.",
    image: "/farsiui/parsian.jpg",
    alt: "فضای فرم و برند",
  },
  {
    id: "team",
    icon: UsersIcon,
    title: "تیم",
    desc: "اعضا، نقش‌ها و دعوت به فضای کاری در چند کلیک.",
    image: "/farsiui/dashboard.png",
    alt: "مدیریت تیم",
  },
  {
    id: "settings",
    icon: Settings2Icon,
    title: "تنظیمات",
    desc: "اعلان، ظاهر، حریم خصوصی و نشست‌های فعال.",
    image: "/farsiui/parsian.jpg",
    alt: "تنظیمات",
  },
] as const

export function FeatureSplitInteractive() {
  const [active, setActive] = React.useState<(typeof ITEMS)[number]["id"]>(
    "dashboard"
  )
  const current = ITEMS.find((item) => item.id === active) ?? ITEMS[0]

  return (
    <section
      dir="rtl"
      lang="fa"
      className="grid min-h-svh items-center gap-10 bg-background px-6 py-16 md:px-10 lg:grid-cols-2 lg:gap-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-lg lg:mx-0">
        <Badge variant="outline">تعاملی</Badge>
        <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          قابلیت را انتخاب کنید، پیش‌نمایش عوض می‌شود
        </h2>
        <p className="mt-4 text-muted-foreground">
          الگوی دو بخشی پیشرفته: لیست قابلیت در یک سمت، تصویر مرتبط در سمت دیگر.
        </p>

        <div className="mt-8 space-y-2">
          {ITEMS.map((item) => {
            const selected = item.id === active
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item.id)}
                className={cn(
                  "flex w-full items-start gap-3 rounded-xl border p-4 text-start transition-colors",
                  selected
                    ? "border-primary bg-primary/5"
                    : "hover:bg-muted/50"
                )}
              >
                <div
                  className={cn(
                    "flex size-9 shrink-0 items-center justify-center rounded-lg",
                    selected ? "bg-primary text-primary-foreground" : "bg-muted"
                  )}
                >
                  <item.icon className="size-4" />
                </div>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </button>
            )
          })}
        </div>

        <Button className="mt-8" size="lg">
          رفتن به {current.title}
        </Button>
      </div>

      <div className="mx-auto w-full max-w-xl lg:mx-0">
        <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
          <img
            key={current.id}
            src={current.image}
            alt={current.alt}
            className="aspect-4/3 w-full object-cover object-top"
          />
          <div className="border-t p-4">
            <p className="font-medium">{current.title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{current.desc}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
