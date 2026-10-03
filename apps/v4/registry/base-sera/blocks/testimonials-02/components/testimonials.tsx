"use client"

import { StarIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-sera/ui/avatar"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/base-sera/ui/card"

const ITEMS = [
  {
    quote:
      "بلوک‌های ورود و احراز هویت را همان روز اول کپی کردیم؛ تیم طراحی خوشحال شد.",
    name: "علی محمدی",
    role: "فول‌استک · ابرسافت",
    avatar: "/avatars/02.png",
    fallback: "عم",
  },
  {
    quote:
      "اعداد فارسی و تقویم شمسی بدون وصله کار می‌کند. برای مشتری ایرانی عالی است.",
    name: "سارا کریمی",
    role: "طراح محصول · دیجی‌یار",
    avatar: "/avatars/03.png",
    fallback: "سک",
  },
  {
    quote:
      "مستندات شفاف و کامپوننت‌ها یکدست‌اند؛ سرعت تحویل‌مان تقریباً دو برابر شد.",
    name: "نیما پورحسین",
    role: "هم‌بنیان‌گذار · پیکسل‌فا",
    avatar: "/avatars/04.png",
    fallback: "نپ",
  },
] as const

export function TestimonialsCards() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight">نظر تیم‌های فارسی</h2>
        <p className="mt-2 text-muted-foreground">
          از استارتاپ تا محصول سازمانی
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {ITEMS.map((item) => (
          <Card key={item.name} className="flex flex-col">
            <CardHeader className="pb-2">
              <div className="flex gap-0.5 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="size-4 fill-current" />
                ))}
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm leading-relaxed text-muted-foreground">
                «{item.quote}»
              </p>
            </CardContent>
            <CardFooter className="gap-3 border-t">
              <Avatar>
                <AvatarImage src={item.avatar} alt={item.name} />
                <AvatarFallback>{item.fallback}</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-medium">{item.name}</p>
                <p className="text-muted-foreground">{item.role}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
