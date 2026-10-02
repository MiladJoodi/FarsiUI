"use client"

import { IconPlaceholder } from "@/components/icon-placeholder"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-maia/ui/avatar"
import { Button } from "@/registry/base-maia/ui/button"

const AVATARS = [
  { src: "/avatars/01.png", fallback: "مر" },
  { src: "/avatars/02.png", fallback: "عل" },
  { src: "/avatars/03.png", fallback: "سارا" },
  { src: "/avatars/04.png", fallback: "نپ" },
] as const

const LINKS = [
  { label: "مستندات", href: "#" },
  { label: "بلاک‌ها", href: "#" },
  { label: "قیمت‌ها", href: "#" },
] as const

export function HeroProductProof() {
  return (
    <div dir="rtl" lang="fa" className="min-h-svh bg-background">
      <header className="flex items-center justify-between gap-4 border-b px-6 py-4 md:px-10">
        <a href="#" className="flex items-center gap-2 font-medium">
          <span className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <IconPlaceholder
              lucide="GalleryVerticalEndIcon"
              tabler="IconLayoutRows"
              hugeicons="LayoutBottomIcon"
              phosphor="RowsIcon"
              remixicon="RiGalleryLine"
              className="size-4"
            />
          </span>
          FarsiUI
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            ورود
          </Button>
          <Button size="sm">شروع کنید</Button>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:px-10 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
        <div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            داشبورد و فرم‌های فارسی، یک‌جا
          </h1>
          <p className="mt-4 max-w-lg text-muted-foreground md:text-lg">
            از معرفی محصول تا احراز هویت و تنظیمات؛ با کامپوننت‌های هماهنگ و
            راست‌چین کامل بسازید.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg">شروع رایگان</Button>
            <Button size="lg" variant="outline">
              مشاهدهٔ نمونه‌ها
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-3">
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
            <p className="text-sm text-muted-foreground">
              بیش از{" "}
              <span className="font-medium text-foreground">۱٬۲۰۰ تیم</span> در
              حال استفاده
            </p>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-4 rounded-3xl bg-muted/60 blur-2xl md:-inset-6"
          />
          <img
            src="/farsiui/dashboard.png"
            alt="نمایی از داشبورد FarsiUI"
            className="relative z-10 aspect-[4/3] w-full rounded-2xl border object-cover shadow-lg"
          />
        </div>
      </section>
    </div>
  )
}
