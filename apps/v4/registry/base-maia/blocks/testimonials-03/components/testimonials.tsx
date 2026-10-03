"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-maia/ui/avatar"
import { Badge } from "@/registry/base-maia/ui/badge"

const SIDE = [
  {
    quote: "برای داشبورد فارسی‌مان دقیقاً همان چیزی بود که لازم داشتیم.",
    name: "هستی احمدی",
    role: "مدیر فنی",
    avatar: "/avatars/05.png",
    fallback: "ها",
  },
  {
    quote: "کپی کردم، تم را عوض کردم، همان روز استیج گرفتیم.",
    name: "رضا کاظمی",
    role: "فرانت‌اند",
    avatar: "/avatars/06.png",
    fallback: "رک",
  },
] as const

export function TestimonialsFeatured() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8">
        <Badge variant="secondary" className="mb-3">
          داستان مشتری
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight">
          از حرف تا محصول زنده
        </h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.35fr_0.85fr]">
        <figure className="overflow-hidden rounded-2xl border bg-card shadow-sm">
          <img
            src="/avatars/07.png"
            alt="آزاده نوری"
            className="aspect-16/10 w-full object-cover object-top"
          />
          <figcaption className="space-y-4 p-6 md:p-8">
            <blockquote className="text-lg leading-relaxed font-medium md:text-xl">
              «قبل از FarsiUI هر اسپرینت نصف وقت‌مان صرف RTL و فونت می‌شد. الان
              تیم روی تجربهٔ کاربر تمرکز می‌کند، نه وصله‌کاری.»
            </blockquote>
            <div className="flex items-center gap-3">
              <Avatar className="size-11">
                <AvatarImage src="/avatars/07.png" alt="آزاده نوری" />
                <AvatarFallback>آ‌ن</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-medium">آزاده نوری</p>
                <p className="text-muted-foreground">
                  مدیر طراحی · استودیو مهتاب
                </p>
              </div>
            </div>
          </figcaption>
        </figure>

        <div className="flex flex-col gap-4">
          {SIDE.map((item) => (
            <figure
              key={item.name}
              className="rounded-2xl border bg-card p-5 shadow-sm"
            >
              <blockquote className="text-sm leading-relaxed text-muted-foreground">
                «{item.quote}»
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={item.avatar} alt={item.name} />
                  <AvatarFallback>{item.fallback}</AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-muted-foreground">{item.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
