"use client"

import * as React from "react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-rose/ui/avatar"
import { Badge } from "@/registry/base-rose/ui/badge"
import { Button } from "@/registry/base-rose/ui/button"

const FEATURED = {
  title: "چطور FarsiUI استاندارد داخلی تیم شد",
  excerpt:
    "از کپی اولین بلوک ورود تا یکدست شدن کل محصول؛ مسیر یک تیم استارتاپی در تهران.",
  date: "۲ مهر ۱۴۰۵",
  category: "داستان مشتری",
  author: "آزاده نوری",
  avatar: "/avatars/07.png",
  fallback: "آن",
} as const

const POSTS = [
  {
    title: "نوار پیشرفت اهداف ماه شمسی",
    excerpt: "نمایش درصد و هدف با ارقام فارسی خوانا.",
    date: "۳۰ شهریور ۱۴۰۵",
    category: "آمار",
  },
  {
    title: "منوی همبرگری موبایل تمیز",
    excerpt: "فاصله، فونت و راست‌چین بودن لینک‌ها.",
    date: "۲۷ شهریور ۱۴۰۵",
    category: "ناوبری",
  },
  {
    title: "قیمت‌گذاری با FAQ راست‌چین",
    excerpt: "آکاردئون و مبلغ تومان بدون فاصلهٔ غلط.",
    date: "۲۲ شهریور ۱۴۰۵",
    category: "قیمت",
  },
  {
    title: "لوگوی مشتریان در یک ردیف",
    excerpt: "اندازهٔ یکدست برای برندهای متفاوت.",
    date: "۱۵ شهریور ۱۴۰۵",
    category: "برند",
  },
] as const

const FILTERS = ["همه", "محصول", "طراحی", "فرم", "داستان مشتری"] as const

export default function BlogGridFeatured() {
  const [filter, setFilter] = React.useState<(typeof FILTERS)[number]>("همه")

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center gap-10 px-6 py-16 md:px-10"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">مجلهٔ محصول</h2>
          <p className="mt-2 text-muted-foreground">
            انتخاب سردبیر و تازه‌ترین نوشته‌ها
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((item) => (
            <Button
              key={item}
              size="sm"
              variant={filter === item ? "default" : "outline"}
              onClick={() => setFilter(item)}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>

      <article className="grid gap-6 overflow-hidden rounded-2xl border bg-card p-6 shadow-sm md:grid-cols-2 md:p-8">
        <div
          className="aspect-16/10 rounded-xl bg-primary/10 md:aspect-auto md:min-h-56"
          aria-hidden
        />
        <div className="flex flex-col justify-center gap-3">
          <Badge className="w-fit">{FEATURED.category}</Badge>
          <h3 className="text-2xl font-bold tracking-tight">
            <a href="#" className="hover:underline">
              {FEATURED.title}
            </a>
          </h3>
          <p className="text-muted-foreground">{FEATURED.excerpt}</p>
          <div className="mt-2 flex items-center gap-3">
            <Avatar className="size-9">
              <AvatarImage src={FEATURED.avatar} alt={FEATURED.author} />
              <AvatarFallback>{FEATURED.fallback}</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <p className="font-medium">{FEATURED.author}</p>
              <p className="text-muted-foreground">{FEATURED.date}</p>
            </div>
          </div>
        </div>
      </article>

      <div className="grid gap-6 sm:grid-cols-2">
        {POSTS.map((post) => (
          <article key={post.title} className="space-y-2 border-t pt-4">
            <p className="text-xs text-muted-foreground">
              {post.category} · {post.date}
            </p>
            <h3 className="font-semibold tracking-tight">
              <a href="#" className="hover:underline">
                {post.title}
              </a>
            </h3>
            <p className="text-sm text-muted-foreground">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
