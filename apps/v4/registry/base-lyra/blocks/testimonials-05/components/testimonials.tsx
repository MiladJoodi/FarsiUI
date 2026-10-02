"use client"

import { QuoteIcon, StarIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-lyra/ui/avatar"
import { Badge } from "@/registry/base-lyra/ui/badge"
import { Button } from "@/registry/base-lyra/ui/button"

const FEATURED = {
  quote:
    "FarsiUI فقط کامپوننت نیست؛ یک زبان مشترک بین طراحی و توسعه برای محصول فارسی است.",
  name: "آزاده نوری",
  role: "مدیر طراحی · استودیو مهتاب",
  avatar: "/avatars/07.png",
  company: "مهتاب",
} as const

const GRID = [
  {
    quote: "پشتیبانی و مستندات فارسی باعث شد آنبوردینگ نیروهای جدید نصف شود.",
    name: "کیان یوسفی",
    role: "لید فنی",
    avatar: "/avatars/08.png",
    fallback: "کی",
  },
  {
    quote: "برای فروشگاه‌مان بنر و قیمت‌گذاری را یک‌روزه بالا آوردیم.",
    name: "نرگس جلالی",
    role: "مارکتینگ",
    avatar: "/avatars/09.png",
    fallback: "نج",
  },
  {
    quote: "احراز هویت و کد ملی را بدون دردسر RTL به پروداکت بردیم.",
    name: "امیر حسینی",
    role: "بک‌اند",
    avatar: "/avatars/10.png",
    fallback: "اح",
  },
  {
    quote: "تم روشن و تیره همه‌جا هماهنگ ماند؛ مشتری متوجه ناسازگاری نشد.",
    name: "سارا کریمی",
    role: "طراح محصول",
    avatar: "/avatars/03.png",
    fallback: "سک",
  },
] as const

export function TestimonialsShowcase() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center gap-10 px-6 py-16 md:px-10"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <Badge className="mb-3">اعتماد تیم‌ها</Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            کسانی که هر روز با FarsiUI می‌سازند
          </h2>
          <p className="mt-3 text-muted-foreground">
            بیش از ۱٬۲۰۰ تیم محصول فارسی — از استارتاپ تا سازمان
          </p>
        </div>
        <div className="flex items-center gap-3 rounded-xl border bg-card px-4 py-3 shadow-sm">
          <div className="flex gap-0.5 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="size-4 fill-current" />
            ))}
          </div>
          <div className="text-sm">
            <p className="font-medium tabular-nums">۴٫۹ از ۵</p>
            <p className="text-muted-foreground">براساس ۳۲۰ نظر</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.15fr_1fr]">
        <figure className="relative overflow-hidden rounded-2xl border">
          <img
            src="/farsiui/parsian.jpg"
            alt=""
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <figcaption className="relative z-10 flex h-full min-h-80 flex-col justify-end gap-5 p-6 md:p-8">
            <QuoteIcon className="size-8 text-white/50" />
            <blockquote className="max-w-lg text-lg leading-relaxed font-medium text-white md:text-xl">
              «{FEATURED.quote}»
            </blockquote>
            <div className="flex items-center gap-3">
              <Avatar className="size-12 border-2 border-white/30">
                <AvatarImage src={FEATURED.avatar} alt={FEATURED.name} />
                <AvatarFallback>آن</AvatarFallback>
              </Avatar>
              <div className="text-sm text-white">
                <p className="font-medium">{FEATURED.name}</p>
                <p className="text-white/75">{FEATURED.role}</p>
              </div>
            </div>
          </figcaption>
        </figure>

        <div className="grid gap-4 sm:grid-cols-2">
          {GRID.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col justify-between rounded-2xl border bg-card p-5 shadow-sm"
            >
              <blockquote className="text-sm leading-relaxed text-muted-foreground">
                «{item.quote}»
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={item.avatar} alt={item.name} />
                  <AvatarFallback>{item.fallback}</AvatarFallback>
                </Avatar>
                <div className="min-w-0 text-sm">
                  <p className="truncate font-medium">{item.name}</p>
                  <p className="truncate text-muted-foreground">{item.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 rounded-2xl border bg-muted/40 px-6 py-8 text-center">
        <div className="flex -space-x-3 space-x-reverse">
          {["01", "02", "03", "04", "05", "06"].map((id) => (
            <Avatar key={id} className="size-10 border-2 border-background">
              <AvatarImage src={`/avatars/${id}.png`} alt="" />
              <AvatarFallback>{id}</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          به جمع تیم‌هایی بپیوندید که رابط فارسی را جدی گرفته‌اند
        </p>
        <Button>شروع رایگان</Button>
      </div>
    </section>
  )
}
