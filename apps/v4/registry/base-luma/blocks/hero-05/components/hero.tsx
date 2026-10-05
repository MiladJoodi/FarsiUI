"use client"

import * as React from "react"

import { IconPlaceholder } from "@/components/icon-placeholder"
import { Avatar, AvatarFallback } from "@/registry/base-luma/ui/avatar"
import { Button } from "@/registry/base-luma/ui/button"

const AVATARS = ["مر", "عل", "سا", "نپ"] as const

const LINKS = ["مستندات", "بلوک‌ها", "قیمت‌ها"] as const

function demoNavClick(event: React.MouseEvent<HTMLAnchorElement>) {
  event.preventDefault()
}

export default function HeroProductProof() {
  return (
    <div dir="rtl" lang="fa" className="min-h-svh bg-background">
      <header className="flex items-center justify-between gap-4 border-b px-6 py-4 md:px-10">
        <a
          href="#"
          onClick={demoNavClick}
          className="flex items-center gap-2 font-medium"
        >
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
          {LINKS.map((label) => (
            <a
              key={label}
              href="#"
              onClick={demoNavClick}
              className="transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            type="button"
            className="hidden sm:inline-flex"
          >
            ورود
          </Button>
          <Button size="sm" type="button">
            شروع کنید
          </Button>
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
            <Button size="lg" type="button">
              شروع رایگان
            </Button>
            <Button size="lg" variant="outline" type="button">
              مشاهدهٔ نمونه‌ها
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-2 space-x-reverse">
              {AVATARS.map((fallback) => (
                <Avatar
                  key={fallback}
                  className="size-9 border-2 border-background"
                >
                  <AvatarFallback>{fallback}</AvatarFallback>
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
          <div className="relative z-10 aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-muted shadow-lg">
            <div className="flex h-full flex-col gap-3 p-5">
              <div className="h-3 w-24 rounded-full bg-foreground/15" />
              <div className="grid flex-1 grid-cols-3 gap-3">
                <div className="rounded-xl bg-background/80" />
                <div className="col-span-2 rounded-xl bg-background/60" />
                <div className="col-span-2 rounded-xl bg-background/70" />
                <div className="rounded-xl bg-background/50" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
