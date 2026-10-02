"use client"

import * as React from "react"
import { SearchIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-mira/ui/avatar"
import { Badge } from "@/registry/base-mira/ui/badge"
import { Button } from "@/registry/base-mira/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-mira/ui/card"
import { Input } from "@/registry/base-mira/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-mira/ui/select"

const POSTS = [
  {
    title: "شروع با بلاک ورود فارسی",
    excerpt: "کپی، تم، و اتصال به احراز هویت در کمتر از یک ساعت.",
    date: "۲ مهر ۱۴۰۴",
    category: "شروع",
    author: "علی محمدی",
    avatar: "/avatars/02.png",
    fallback: "عم",
  },
  {
    title: "فیلتر پیشرفته در جدول RTL",
    excerpt: "ترکیب Drawer و Checkbox برای فیلترهای موبایل.",
    date: "۲۹ شهریور ۱۴۰۴",
    category: "جدول",
    author: "سارا کریمی",
    avatar: "/avatars/03.png",
    fallback: "سک",
  },
  {
    title: "تم روشن و تیره هماهنگ",
    excerpt: "متغیرهای رنگ که در هر دو حالت خوانا می‌مانند.",
    date: "۲۴ شهریور ۱۴۰۴",
    category: "تم",
    author: "نیما پورحسین",
    avatar: "/avatars/04.png",
    fallback: "نپ",
  },
  {
    title: "فرم پشتیبانی چندمرحله‌ای",
    excerpt: "اولویت، پیوست و شماره پیگیری فارسی.",
    date: "۱۹ شهریور ۱۴۰۴",
    category: "پشتیبانی",
    author: "هستی احمدی",
    avatar: "/avatars/05.png",
    fallback: "ها",
  },
  {
    title: "آمار هفتگی با نمودار میله‌ای",
    excerpt: "روزهای شمسی شنبه تا جمعه در یک نگاه.",
    date: "۱۲ شهریور ۱۴۰۴",
    category: "آمار",
    author: "رضا کاظمی",
    avatar: "/avatars/06.png",
    fallback: "رک",
  },
  {
    title: "نظرات کاربران با عکس واقعی",
    excerpt: "کارت نقل‌قول بدون فضای خالی اضافه.",
    date: "۵ شهریور ۱۴۰۴",
    category: "بازاریابی",
    author: "آزاده نوری",
    avatar: "/avatars/07.png",
    fallback: "آن",
  },
] as const

export function BlogGridFilter() {
  const [query, setQuery] = React.useState("")
  const [category, setCategory] = React.useState("all")

  const filtered = POSTS.filter((post) => {
    const matchQuery =
      !query ||
      post.title.includes(query) ||
      post.excerpt.includes(query) ||
      post.author.includes(query)
    const matchCategory = category === "all" || post.category === category
    return matchQuery && matchCategory
  })

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 space-y-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">جستجو در وبلاگ</h2>
          <p className="mt-2 text-muted-foreground">
            موضوع یا نام نویسنده را پیدا کنید
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجو در عنوان و متن…"
              className="ps-9"
              dir="rtl"
            />
          </div>
          <Select
            value={category}
            onValueChange={(value) => setCategory((value as string) ?? "all")}
          >
            <SelectTrigger className="w-full sm:w-44" dir="rtl">
              <SelectValue placeholder="دسته‌بندی" />
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              <SelectItem value="all">همه دسته‌ها</SelectItem>
              <SelectItem value="شروع">شروع</SelectItem>
              <SelectItem value="جدول">جدول</SelectItem>
              <SelectItem value="تم">تم</SelectItem>
              <SelectItem value="پشتیبانی">پشتیبانی</SelectItem>
              <SelectItem value="آمار">آمار</SelectItem>
              <SelectItem value="بازاریابی">بازاریابی</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed px-6 py-16 text-center text-sm text-muted-foreground">
          نتیجه‌ای پیدا نشد. عبارت دیگری را امتحان کنید.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <Card key={post.title}>
              <CardHeader className="gap-2">
                <Badge variant="outline" className="w-fit">
                  {post.category}
                </Badge>
                <CardTitle className="text-base">
                  <a href="#" className="hover:underline">
                    {post.title}
                  </a>
                </CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
              <CardFooter className="gap-3 border-t">
                <Avatar className="size-8">
                  <AvatarImage src={post.avatar} alt={post.author} />
                  <AvatarFallback>{post.fallback}</AvatarFallback>
                </Avatar>
                <div className="min-w-0 text-xs">
                  <p className="truncate font-medium">{post.author}</p>
                  <p className="text-muted-foreground">{post.date}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      <div className="mt-8 flex justify-center">
        <Button variant="outline">بارگذاری بیشتر</Button>
      </div>
    </section>
  )
}
