"use client"

import {
  BellIcon,
  FormInputIcon,
  LayoutDashboardIcon,
  PaletteIcon,
  UsersIcon,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-luma/ui/avatar"
import { Badge } from "@/registry/base-luma/ui/badge"
import { Button } from "@/registry/base-luma/ui/button"

const AVATARS = [
  { src: "/avatars/01.png", fallback: "مر" },
  { src: "/avatars/02.png", fallback: "عل" },
  { src: "/avatars/03.png", fallback: "سا" },
] as const

export function BentoStats() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Badge variant="outline" className="mb-3">
            خلاصهٔ محصول
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">
            بنتو با آمار و تیم
          </h2>
          <p className="mt-2 text-muted-foreground">
            ترکیب عدد، افراد و قابلیت در یک شبکه
          </p>
        </div>
        <Button variant="outline" size="sm" className="w-fit">
          همهٔ قابلیت‌ها
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4 md:grid-rows-3">
        <div className="rounded-2xl border bg-card p-5 md:col-span-2">
          <p className="text-sm text-muted-foreground">بلاک آماده</p>
          <p className="mt-2 text-4xl font-bold tabular-nums">۸۰+</p>
          <p className="mt-2 text-sm text-muted-foreground">
            از معرفی تا تنظیمات، برای کپی در پروژه
          </p>
        </div>

        <div className="rounded-2xl border bg-card p-5 md:col-span-2">
          <p className="text-sm text-muted-foreground">تیم‌های فعال</p>
          <div className="mt-3 flex items-center gap-3">
            <div className="flex -space-x-2 space-x-reverse">
              {AVATARS.map((avatar) => (
                <Avatar
                  key={avatar.src}
                  className="size-9 border-2 border-background"
                >
                  <AvatarImage src={avatar.src} alt="" />
                  <AvatarFallback>{avatar.fallback}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <p className="text-sm">
              <span className="font-semibold">۱٬۲۰۰+</span>{" "}
              <span className="text-muted-foreground">تیم</span>
            </p>
          </div>
        </div>

        {[
          {
            icon: LayoutDashboardIcon,
            title: "داشبورد",
            desc: "پنل مدیریت فارسی",
          },
          {
            icon: FormInputIcon,
            title: "فرم‌ها",
            desc: "تماس تا پشتیبانی",
          },
          {
            icon: UsersIcon,
            title: "اعضا",
            desc: "نقش و دعوت",
          },
          {
            icon: BellIcon,
            title: "اعلان‌ها",
            desc: "کانال‌های آشنا",
          },
          {
            icon: PaletteIcon,
            title: "ظاهر",
            desc: "تم و زبان",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl border bg-card p-5">
            <item.icon className="size-4 text-muted-foreground" />
            <h3 className="mt-3 font-semibold">{item.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}

        <div className="relative overflow-hidden rounded-2xl border md:col-span-2 md:row-span-1">
          <img
            src="/farsiui/parsian.jpg"
            alt="هویت بصری"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative flex h-full min-h-28 items-end p-5">
            <p className="font-medium text-white">
              طراحی برای زبان و فرهنگ شما
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
