"use client"

import * as React from "react"
import { ChevronDownIcon, SearchIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-maia/ui/avatar"
import { Badge } from "@/registry/base-maia/ui/badge"
import { Button } from "@/registry/base-maia/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/base-maia/ui/dropdown-menu"
import { Input } from "@/registry/base-maia/ui/input"
import { Separator } from "@/registry/base-maia/ui/separator"

const FEATURED = {
  title: "راهنمای کامل ساخت صفحه فرود فارسی",
  excerpt:
    "از Hero تا Footer؛ ترتیب بخش‌ها، تایپوگرافی و CTAهایی که حس بومی می‌دهند.",
  date: "۲ مهر ۱۴۰۵",
  read: "۸ دقیقه مطالعه",
  author: "مریم رضایی",
  avatar: "/avatars/01.png",
  fallback: "مر",
} as const

const POSTS = [
  {
    title: "مسیر صفحه (Breadcrumb) درست در RTL",
    excerpt: "جداکننده، ellipsis و منوی مسیرهای میانی.",
    date: "۱ مهر ۱۴۰۵",
    category: "ناوبری",
    author: "علی محمدی",
    avatar: "/avatars/02.png",
    fallback: "عم",
  },
  {
    title: "کارت‌های قیمت بدون فاصلهٔ ارقام",
    excerpt: "نمایش تومان با dir و letter-spacing صفر.",
    date: "۲۸ شهریور ۱۴۰۵",
    category: "قیمت",
    author: "سارا کریمی",
    avatar: "/avatars/03.png",
    fallback: "سک",
  },
  {
    title: "فرم تماس جدا از پشتیبانی",
    excerpt: "دو دستهٔ جدا برای ناوبری بلوک‌ها.",
    date: "۲۴ شهریور ۱۴۰۵",
    category: "فرم",
    author: "نیما پورحسین",
    avatar: "/avatars/04.png",
    fallback: "نپ",
  },
  {
    title: "داشبورد آمار به وقت ایران",
    excerpt: "تب هفته، ماه و سال با درصد فارسی.",
    date: "۱۸ شهریور ۱۴۰۵",
    category: "آمار",
    author: "هستی احمدی",
    avatar: "/avatars/05.png",
    fallback: "ها",
  },
  {
    title: "بنر اطلاع‌رسانی نسخهٔ جدید",
    excerpt: "نوار ساده تا پروموی کامل.",
    date: "۱۰ شهریور ۱۴۰۵",
    category: "بازاریابی",
    author: "رضا کاظمی",
    avatar: "/avatars/06.png",
    fallback: "رک",
  },
  {
    title: "لوگوی مشتریان هم‌اندازه",
    excerpt: "باکس ثابت و مقیاس نوری برای PNGها.",
    date: "۳ شهریور ۱۴۰۵",
    category: "برند",
    author: "آزاده نوری",
    avatar: "/avatars/07.png",
    fallback: "آن",
  },
] as const

export default function BlogGridShowcase() {
  const [sort, setSort] = React.useState("newest")
  const [done, setDone] = React.useState(false)

  const demoNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center gap-10 px-6 py-16 md:px-10"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <Badge className="mb-3">وبلاگ</Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            نوشته‌هایی برای ساختن بهتر
          </h2>
          <p className="mt-3 text-muted-foreground">
            راهنما، تجربه و به‌روزرسانی محصول — همه به فارسی
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:max-w-md sm:flex-row lg:max-w-lg">
          <div className="relative flex-1">
            <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="جستجو در مقالات…" className="ps-9" dir="rtl" />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="outline" className="shrink-0 gap-1.5" />}
            >
              مرتب‌سازی
              <ChevronDownIcon className="size-3.5 opacity-60" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-44"
              dir="rtl"
              lang="fa"
            >
              <DropdownMenuLabel>مرتب‌سازی بر اساس</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={sort}
                onValueChange={(value) => {
                  if (
                    value === "newest" ||
                    value === "popular" ||
                    value === "read"
                  ) {
                    setSort(value)
                  }
                }}
              >
                <DropdownMenuRadioItem value="newest">
                  جدیدترین
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="popular">
                  محبوب‌ترین
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="read">
                  زمان مطالعه
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <article className="overflow-hidden rounded-3xl border bg-card shadow-sm">
        <div className="grid lg:grid-cols-2">
          <div className="min-h-52 bg-primary/10 lg:min-h-full" aria-hidden />
          <div className="flex flex-col justify-center gap-4 p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <Badge variant="secondary">ویژه</Badge>
              <span>{FEATURED.date}</span>
              <span>·</span>
              <span>{FEATURED.read}</span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
              <a href="#" onClick={demoNavClick} className="hover:underline">
                {FEATURED.title}
              </a>
            </h3>
            <p className="text-muted-foreground">{FEATURED.excerpt}</p>
            <div className="flex items-center gap-3 pt-1">
              <Avatar>
                <AvatarImage src={FEATURED.avatar} alt={FEATURED.author} />
                <AvatarFallback>{FEATURED.fallback}</AvatarFallback>
              </Avatar>
              <p className="text-sm font-medium">{FEATURED.author}</p>
            </div>
          </div>
        </div>
      </article>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((post) => (
          <article
            key={post.title}
            className="flex flex-col rounded-2xl border bg-card p-5 shadow-sm"
          >
            <Badge variant="outline" className="mb-3 w-fit">
              {post.category}
            </Badge>
            <h3 className="text-base leading-snug font-semibold">
              <a href="#" onClick={demoNavClick} className="hover:underline">
                {post.title}
              </a>
            </h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">
              {post.excerpt}
            </p>
            <Separator className="my-4" />
            <div className="flex items-center gap-2.5">
              <Avatar className="size-7">
                <AvatarImage src={post.avatar} alt={post.author} />
                <AvatarFallback>{post.fallback}</AvatarFallback>
              </Avatar>
              <div className="min-w-0 text-xs">
                <p className="truncate font-medium">{post.author}</p>
                <p className="text-muted-foreground">{post.date}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="grid gap-6 rounded-2xl border bg-muted/30 p-6 md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-8">
        <div>
          <h3 className="text-xl font-bold tracking-tight">
            هر هفته یک مقاله در اینباکس
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            خلاصهٔ نوشته‌های تازه — بدون اسپم
          </p>
        </div>
        {done ? (
          <p className="text-sm font-medium">
            عضو شدید · ایمیل تأیید را چک کنید
          </p>
        ) : (
          <form
            className="flex flex-col gap-2 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault()
              setDone(true)
            }}
          >
            <Input
              type="email"
              required
              placeholder="name@example.com"
              dir="ltr"
              className="text-start"
            />
            <Button type="submit" className="shrink-0">
              عضویت
            </Button>
          </form>
        )}
      </div>

      <div className="flex items-center justify-center gap-2">
        <Button variant="outline" size="sm" disabled>
          قبلی
        </Button>
        <Button size="sm" variant="outline">
          ۱
        </Button>
        <Button size="sm" variant="ghost">
          ۲
        </Button>
        <Button size="sm" variant="ghost">
          ۳
        </Button>
        <Button variant="outline" size="sm">
          بعدی
        </Button>
      </div>
    </section>
  )
}
