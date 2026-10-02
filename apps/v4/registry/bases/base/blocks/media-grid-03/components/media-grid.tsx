"use client"

import { FileIcon, FilmIcon, ImageIcon, MusicIcon, SearchIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"

const ITEMS = [
  {
    kind: "image" as const,
    title: "کاور محصول",
    file: "cover.jpg",
    size: "1.2 MB",
    tag: "تصویر",
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
  },
  {
    kind: "video" as const,
    title: "معرفی کوتاه",
    file: "intro.mp4",
    size: "18 MB",
    tag: "ویدیو",
  },
  {
    kind: "audio" as const,
    title: "پادکست ۱",
    file: "ep-01.mp3",
    size: "8.4 MB",
    tag: "صوت",
  },
  {
    kind: "file" as const,
    title: "بروشور",
    file: "brochure.pdf",
    size: "640 KB",
    tag: "سند",
  },
  {
    kind: "image" as const,
    title: "بنر فروش",
    file: "banner.png",
    size: "890 KB",
    tag: "تصویر",
    src: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80",
  },
  {
    kind: "video" as const,
    title: "دمو محصول",
    file: "demo.webm",
    size: "24 MB",
    tag: "ویدیو",
  },
]

const ICONS = {
  image: ImageIcon,
  video: FilmIcon,
  audio: MusicIcon,
  file: FileIcon,
} as const

export function MediaGridFilter() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight">فهرست رسانه‌ها</h2>
        <p className="mt-2 text-muted-foreground">
          فیلتر نوع و اشتراک با ایمیل LTR
        </p>
      </div>

      <div className="mb-6 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="جستجو در رسانه‌ها…" dir="rtl" className="ps-8" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-full sm:w-40" dir="rtl">
            <SelectValue placeholder="نوع" />
          </SelectTrigger>
          <SelectContent dir="rtl" lang="fa">
            <SelectItem value="all">همه</SelectItem>
            <SelectItem value="image">تصویر</SelectItem>
            <SelectItem value="video">ویدیو</SelectItem>
            <SelectItem value="audio">صوت</SelectItem>
            <SelectItem value="file">سند</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="newest">
          <SelectTrigger className="w-full sm:w-40" dir="rtl">
            <SelectValue placeholder="مرتب‌سازی" />
          </SelectTrigger>
          <SelectContent dir="rtl" lang="fa">
            <SelectItem value="newest">جدیدترین</SelectItem>
            <SelectItem value="name">نام</SelectItem>
            <SelectItem value="size">اندازه</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((item) => {
          const Icon = ICONS[item.kind]
          return (
            <article
              key={item.file}
              className="overflow-hidden rounded-xl border bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                {"src" in item && item.src ? (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="size-full object-cover"
                  />
                ) : (
                  <div className="flex size-full items-center justify-center">
                    <Icon className="size-10 text-muted-foreground" />
                  </div>
                )}
                <Badge variant="secondary" className="absolute start-2 top-2">
                  {item.tag}
                </Badge>
              </div>
              <div className="space-y-1 p-3">
                <p className="truncate text-sm font-medium">{item.title}</p>
                <p className="text-xs text-muted-foreground">
                  <bdi dir="ltr">{item.file}</bdi>
                  {" · "}
                  <bdi dir="ltr">{item.size}</bdi>
                </p>
              </div>
            </article>
          )
        })}
      </div>

      <div className="flex flex-col gap-3 rounded-xl border bg-card p-4 sm:flex-row sm:items-end">
        <Field className="flex-1">
          <FieldLabel htmlFor="mg3-email">اشتراک فهرست</FieldLabel>
          <Input
            id="mg3-email"
            type="email"
            placeholder="name@example.com"
            dir="ltr"
            className="text-start"
          />
          <FieldDescription>لینک به ایمیل ارسال می‌شود</FieldDescription>
        </Field>
        <Button className="sm:mb-5">ارسال لینک</Button>
      </div>
    </section>
  )
}
