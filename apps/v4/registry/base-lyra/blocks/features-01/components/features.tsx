"use client"

import { LanguagesIcon, LayoutTemplateIcon, MoonIcon } from "lucide-react"

const FEATURES = [
  {
    icon: LanguagesIcon,
    title: "فارسی از روز اول",
    desc: "متن‌ها، تاریخ و جهت صفحه برای زبان فارسی آماده است.",
  },
  {
    icon: LayoutTemplateIcon,
    title: "بلوک‌های آماده",
    desc: "بخش‌های رایج محصول را کپی کنید و سریع جلو بروید.",
  },
  {
    icon: MoonIcon,
    title: "حالت روشن و تیره",
    desc: "ظاهر هماهنگ در هر دو تم، بدون تنظیم اضافه.",
  },
] as const

export default function FeaturesSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          همهٔ آنچه برای شروع لازم دارید
        </h2>
        <p className="mt-3 text-muted-foreground">
          سه قابلیت اصلی FarsiUI برای ساخت رابط راست‌چین
        </p>
      </div>
      <div className="mt-12 grid gap-10 sm:grid-cols-3">
        {FEATURES.map((item) => (
          <div key={item.title} className="text-center sm:text-start">
            <div className="mx-auto flex size-10 items-center justify-center rounded-lg bg-muted sm:mx-0">
              <item.icon className="size-5" />
            </div>
            <h3 className="mt-4 font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
