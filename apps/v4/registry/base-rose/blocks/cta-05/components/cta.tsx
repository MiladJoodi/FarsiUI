"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-rose/ui/avatar"
import { Badge } from "@/registry/base-rose/ui/badge"
import { Button } from "@/registry/base-rose/ui/button"

const AVATARS = [
  { src: "/avatars/01.png", fallback: "مر" },
  { src: "/avatars/02.png", fallback: "عل" },
  { src: "/avatars/03.png", fallback: "سا" },
  { src: "/avatars/04.png", fallback: "نپ" },
] as const

export default function CtaFullBleed() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="relative flex min-h-svh items-center overflow-hidden"
    >
      <img
        src="/farsiui/parsian.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div aria-hidden className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto w-full max-w-3xl px-6 py-16 text-center md:px-10">
        <Badge
          variant="secondary"
          className="border-white/20 bg-white/10 text-white"
        >
          فراخوان اقدام
        </Badge>
        <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-5xl">
          همین امروز به تیم‌های فارسی بپیوندید
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/80 md:text-lg">
          بیش از هزار تیم با FarsiUI رابط راست‌چین می‌سازند — نوبت شماست
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg">شروع رایگان</Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
          >
            صحبت با فروش
          </Button>
        </div>
        <div className="mt-10 flex flex-col items-center gap-3">
          <div className="flex -space-x-2 space-x-reverse">
            {AVATARS.map((avatar) => (
              <Avatar
                key={avatar.src}
                className="size-9 border-2 border-black/40"
              >
                <AvatarImage src={avatar.src} alt="" />
                <AvatarFallback>{avatar.fallback}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <p className="text-sm text-white/75">
            <span className="font-medium text-white">۱٬۲۰۰+ تیم</span> در حال
            استفاده
          </p>
        </div>
      </div>
    </section>
  )
}
