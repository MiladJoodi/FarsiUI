"use client"

import { Badge } from "@/registry/base-nili/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-nili/ui/card"

const POSTS = [
  {
    title: "طراحی منوی موبایل راست‌چین",
    excerpt: "شیت، دراور و گروه‌بندی لینک‌ها برای انگشت کاربر فارسی.",
    date: "۱ مهر ۱۴۰۵",
    category: "طراحی",
    tone: "bg-primary/10",
  },
  {
    title: "ارقام فارسی بدون فاصلهٔ اضافه",
    excerpt:
      "چطور letter-spacing و tabular-nums را برای مبلغ و آمار کنترل کنید.",
    date: "۲۵ شهریور ۱۴۰۵",
    category: "تایپ",
    tone: "bg-muted",
  },
  {
    title: "احراز هویت با کد ملی",
    excerpt: "الگوی ورودی ۱۰ رقم و پیام خطای خوانا برای کاربر.",
    date: "۱۸ شهریور ۱۴۰۵",
    category: "فرم",
    tone: "bg-emerald-500/10 dark:bg-emerald-500/15",
  },
  {
    title: "خبرنامهٔ هفتگی تیم محصول",
    excerpt: "چه محتوایی ارزش باز کردن ایمیل را دارد.",
    date: "۱۰ شهریور ۱۴۰۵",
    category: "رشد",
    tone: "bg-amber-500/10 dark:bg-amber-500/15",
  },
  {
    title: "پابرگ چندستونه برای سایت فارسی",
    excerpt: "لینک‌ها، خبرنامه و شبکه‌های اجتماعی در یک چیدمان تمیز.",
    date: "۳ شهریور ۱۴۰۵",
    category: "الگو",
    tone: "bg-sky-500/10 dark:bg-sky-500/15",
  },
  {
    title: "از Hero تا CTA در یک صفحه",
    excerpt: "ترتیب بخش‌های بازاریابی که نرخ تبدیل را بالا می‌برد.",
    date: "۲۸ مرداد ۱۴۰۵",
    category: "بازاریابی",
    tone: "bg-violet-500/10 dark:bg-violet-500/15",
  },
] as const

export default function BlogGridCards() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight">مقاله‌های تازه</h2>
        <p className="mt-2 text-muted-foreground">
          خواندن کوتاه، کاربردی و به زبان فارسی
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((post) => (
          <Card key={post.title} className="overflow-hidden pt-0">
            <div className={`aspect-16/10 ${post.tone}`} aria-hidden />
            <CardHeader className="gap-2">
              <Badge variant="secondary" className="w-fit">
                {post.category}
              </Badge>
              <CardTitle className="text-base leading-snug">
                <a href="#" className="hover:underline">
                  {post.title}
                </a>
              </CardTitle>
              <CardDescription className="leading-relaxed">
                {post.excerpt}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">{post.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
