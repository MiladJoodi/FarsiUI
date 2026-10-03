"use client"

import {
  Code2Icon,
  ComponentIcon,
  MoonIcon,
  SparklesIcon,
  ZapIcon,
} from "lucide-react"

import { Badge } from "@/registry/base-vega/ui/badge"

const TILES = [
  {
    span: "md:col-span-2 md:row-span-2",
    icon: SparklesIcon,
    title: "همه‌چیز برای محصول فارسی",
    desc: "کاشی بزرگ داستان اصلی را می‌گوید؛ بقیه جزئیات را کامل می‌کنند.",
    featured: true,
  },
  {
    span: "",
    icon: ZapIcon,
    title: "نصب سریع",
    desc: "با یک دستور به رجیستری وصل شوید.",
  },
  {
    span: "",
    icon: ComponentIcon,
    title: "کامپوننت",
    desc: "اجزای پایه، آمادهٔ ترکیب.",
  },
  {
    span: "",
    icon: Code2Icon,
    title: "کپی و استفاده",
    desc: "کد تمیز برای پروژهٔ Next.",
  },
  {
    span: "",
    icon: MoonIcon,
    title: "تم دوگانه",
    desc: "روشن و تیره هم‌سبک.",
  },
] as const

export function BentoIcons() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <Badge variant="secondary" className="mb-3">
            بنتو
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">
            شبکه با کاشی بزرگ
          </h2>
          <p className="mt-2 text-muted-foreground">
            یک سلول دو در دو، و چهار کاشی کوچک اطرافش
          </p>
        </div>
      </div>
      <div className="grid auto-rows-fr gap-4 md:grid-cols-4 md:grid-rows-2">
        {TILES.map((tile) => (
          <div
            key={tile.title}
            className={`flex flex-col rounded-2xl border bg-card p-5 ${tile.span}`}
          >
            <div className="flex size-9 items-center justify-center rounded-lg bg-muted">
              <tile.icon className="size-4" />
            </div>
            <h3
              className={
                "featured" in tile && tile.featured
                  ? "mt-4 text-xl font-bold"
                  : "mt-4 font-semibold"
              }
            >
              {tile.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{tile.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
