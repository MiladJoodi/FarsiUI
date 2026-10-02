"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-lyra/ui/avatar"

export function TestimonialsSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="flex min-h-svh flex-col items-center justify-center bg-background px-6 py-16"
    >
      <figure className="mx-auto max-w-2xl text-center">
        <blockquote className="text-xl leading-relaxed font-medium tracking-tight md:text-2xl">
          «با FarsiUI دیگه برای راست‌چین کردن فرم‌ها وقت تلف نمی‌کنیم؛ از روز
          اول همه‌چیز درست است.»
        </blockquote>
        <figcaption className="mt-8 flex flex-col items-center gap-3">
          <Avatar className="size-12">
            <AvatarImage src="/avatars/01.png" alt="مریم رضایی" />
            <AvatarFallback>مر</AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <p className="font-medium">مریم رضایی</p>
            <p className="text-muted-foreground">مدیر محصول · نوآ</p>
          </div>
        </figcaption>
      </figure>
    </section>
  )
}
