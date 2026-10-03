"use client"

import * as React from "react"
import { BookmarkIcon, LinkIcon, Share2Icon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-lyra/ui/avatar"
import { Badge } from "@/registry/base-lyra/ui/badge"
import { Button } from "@/registry/base-lyra/ui/button"
import { Input } from "@/registry/base-lyra/ui/input"
import { Separator } from "@/registry/base-lyra/ui/separator"
import { Textarea } from "@/registry/base-lyra/ui/textarea"

const TOC = [
  { id: "intro", label: "شروع از تجربهٔ خواندن" },
  { id: "structure", label: "ساختار مجله‌ای" },
  { id: "end", label: "پایان بدون فشار" },
] as const

const RELATED = [
  {
    title: "چطور CTA انتهای مقاله را نرم نگه داریم",
    excerpt: "خبرنامه و دعوت به اقدام بدون بنر مزاحم.",
    date: "۲۶ شهریور ۱۴۰۵",
  },
  {
    title: "نظرات زیر پست؛ ساده و قابل مدیریت",
    excerpt: "آواتار، متن و پاسخ بدون ویجت سنگین.",
    date: "۱۸ شهریور ۱۴۰۵",
  },
] as const

const COMMENTS = [
  {
    name: "هستی احمدی",
    initials: "ه‌ا",
    text: "ستون فهرست مطالب روی دسکتاپ خیلی کمک کرد.",
    time: "۳ ساعت پیش",
  },
  {
    name: "رضا کاظمی",
    initials: "ر‌ک",
    text: "کاش نسخهٔ تاریک کاور را هم نشان دهید.",
    time: "دیروز",
  },
] as const

export function ArticleMagazine() {
  const [done, setDone] = React.useState(false)

  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <div className="flex w-full max-w-5xl flex-col gap-12 rounded-xl border bg-background px-6 py-12 shadow-sm md:px-10 md:py-16">
        <div
          className="aspect-16/9 w-full rounded-2xl bg-primary/10"
          aria-hidden
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-14">
          <article>
            <header className="mb-8 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Badge>مجله</Badge>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" aria-label="اشتراک‌گذاری">
                    <Share2Icon className="size-4" />
                  </Button>
                  <Button variant="ghost" size="icon" aria-label="کپی لینک">
                    <LinkIcon className="size-4" />
                  </Button>
                  <Button variant="ghost" size="icon" aria-label="ذخیره">
                    <BookmarkIcon className="size-4" />
                  </Button>
                </div>
              </div>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                صفحهٔ مقالهٔ کامل: از کاور تا دیدگاه
              </h1>
              <div className="flex items-center gap-3">
                <Avatar className="size-11">
                  <AvatarImage src="/avatars/07.png" alt="آزاده نوری" />
                  <AvatarFallback>آ‌ن</AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <p className="font-medium">آزاده نوری</p>
                  <p className="text-muted-foreground">
                    ۲ مهر ۱۴۰۵ · ۱۲ دقیقه مطالعه
                  </p>
                </div>
              </div>
            </header>

            <Separator className="mb-8" />

            <div className="space-y-8 text-base leading-8 text-foreground/90">
              <section id="intro" className="scroll-mt-24 space-y-4">
                <h2 className="text-xl font-semibold tracking-tight">
                  شروع از تجربهٔ خواندن
                </h2>
                <p>
                  صفحهٔ مقالهٔ مجله‌ای باید اول خواندن را راحت کند، بعد تعامل را
                  اضافه کند. کاور عریض، سربرگ روشن و بدنه با فاصلهٔ مناسب پایه
                  است؛ فهرست، خبرنامه و دیدگاه لایه‌های بعدی‌اند.
                </p>
              </section>
              <section id="structure" className="scroll-mt-24 space-y-4">
                <h2 className="text-xl font-semibold tracking-tight">
                  ساختار مجله‌ای
                </h2>
                <p>
                  ستون کناری روی دسکتاپ برای فهرست و مرتبط‌هاست. زیر مقاله، بلوک
                  خبرنامه و چند دیدگاه نمونه مسیر ادامهٔ تعامل را نشان می‌دهند —
                  بدون اینکه روی متن بنشینند.
                </p>
              </section>
              <section id="end" className="scroll-mt-24 space-y-4">
                <h2 className="text-xl font-semibold tracking-tight">
                  پایان بدون فشار
                </h2>
                <p>
                  دعوت به عضویت خبرنامه باید کوتاه باشد و فیلد ایمیل با جهت LTR
                  نمایش داده شود تا آدرس‌ها خوانا بمانند.
                </p>
              </section>
            </div>

            <Separator className="my-10" />

            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-lg font-semibold tracking-tight">
                هفته‌ای یک نکتهٔ محصول
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                خلاصهٔ نوشته‌های جدید را هر پنج‌شنبه بفرستید.
              </p>
              {done ? (
                <p className="mt-4 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  ثبت شد — به‌زودی ایمیلی می‌فرستیم.
                </p>
              ) : (
                <form
                  className="mt-4 flex flex-col gap-3 sm:flex-row"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setDone(true)
                  }}
                >
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    dir="ltr"
                    className="sm:flex-1"
                    required
                  />
                  <Button type="submit" className="shrink-0">
                    عضویت
                  </Button>
                </form>
              )}
            </section>

            <section className="mt-10 space-y-6">
              <h2 className="text-lg font-semibold tracking-tight">
                دیدگاه‌ها
              </h2>
              <div className="space-y-5">
                {COMMENTS.map((c) => (
                  <div key={c.name} className="flex gap-3">
                    <Avatar className="size-9">
                      <AvatarFallback>{c.initials}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2 text-sm">
                        <span className="font-medium">{c.name}</span>
                        <span className="text-muted-foreground">{c.time}</span>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {c.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <Textarea placeholder="دیدگاه شما…" rows={3} dir="rtl" />
                <Button className="w-fit">ارسال دیدگاه</Button>
              </div>
            </section>
          </article>

          <aside className="flex flex-col gap-8 lg:sticky lg:top-16 lg:self-start">
            <nav aria-label="فهرست مطالب" className="space-y-3">
              <p className="text-sm font-medium">در این نوشته</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {TOC.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="hover:text-foreground">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <Separator />
            <div className="space-y-4">
              <p className="text-sm font-medium">بیشتر بخوانید</p>
              {RELATED.map((item) => (
                <a key={item.title} href="#" className="block space-y-1">
                  <p className="text-sm leading-snug font-medium hover:underline">
                    {item.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {item.excerpt}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.date}</p>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
