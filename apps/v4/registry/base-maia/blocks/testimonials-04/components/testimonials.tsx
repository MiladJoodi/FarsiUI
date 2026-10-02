"use client"

import * as React from "react"
import { StarIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-maia/ui/avatar"
import { Badge } from "@/registry/base-maia/ui/badge"
import { Button } from "@/registry/base-maia/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/base-maia/ui/tabs"

const ITEMS = [
  {
    id: "maryam",
    name: "مریم رضایی",
    role: "مدیر محصول · نوآ",
    avatar: "/avatars/01.png",
    fallback: "مر",
    quote:
      "FarsiUI استاندارد داخلی تیم ما شد. هر فیچر جدید را با بلاک‌های آماده شروع می‌کنیم و زمان تخمین‌مان واقعی‌تر شده.",
  },
  {
    id: "ali",
    name: "علی محمدی",
    role: "فول‌استک · ابرسافت",
    avatar: "/avatars/02.png",
    fallback: "عم",
    quote:
      "از ورود تا تنظیمات، همه‌چیز یکدست است. دیگر برای هر صفحه یک زبان بصری جدا اختراع نمی‌کنیم.",
  },
  {
    id: "sara",
    name: "سارا کریمی",
    role: "طراح محصول · دیجی‌یار",
    avatar: "/avatars/03.png",
    fallback: "سک",
    quote:
      "کلیدواژهٔ من برای FarsiUI: احترام به کاربر فارسی. فاصله‌ها، جهت و تایپوگرافی حس بومی می‌دهد.",
  },
] as const

export function TestimonialsSwitcher() {
  const [active, setActive] = React.useState("maryam")

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 text-center">
        <Badge variant="outline" className="mb-3">
          صدای مشتریان
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight">
          بشنوید از کسانی که ساخته‌اند
        </h2>
      </div>

      <Tabs
        value={active}
        onValueChange={(value) => setActive((value as string) ?? "maryam")}
        className="w-full"
      >
        <TabsList className="mx-auto grid h-auto w-full max-w-xl grid-cols-3 gap-1 p-1">
          {ITEMS.map((item) => (
            <TabsTrigger
              key={item.id}
              value={item.id}
              className="flex flex-col gap-2 py-3 sm:flex-row sm:gap-2"
            >
              <Avatar className="size-7">
                <AvatarImage src={item.avatar} alt={item.name} />
                <AvatarFallback>{item.fallback}</AvatarFallback>
              </Avatar>
              <span className="hidden truncate text-xs sm:inline">
                {item.name.split(" ")[0]}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        {ITEMS.map((item) => (
          <TabsContent key={item.id} value={item.id} className="mt-8">
            <figure className="rounded-2xl border bg-card p-6 text-center shadow-sm md:p-10">
              <div className="mb-4 flex justify-center gap-0.5 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mx-auto max-w-2xl text-lg leading-relaxed font-medium md:text-xl">
                «{item.quote}»
              </blockquote>
              <figcaption className="mt-8 flex flex-col items-center gap-3">
                <Avatar className="size-14">
                  <AvatarImage src={item.avatar} alt={item.name} />
                  <AvatarFallback>{item.fallback}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </figcaption>
            </figure>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-8 flex justify-center">
        <Button variant="outline">مشاهدهٔ همهٔ نظرات</Button>
      </div>
    </section>
  )
}
