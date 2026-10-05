"use client"

import * as React from "react"
import {
  FileIcon,
  FilmIcon,
  ImageIcon,
  MusicIcon,
  SearchIcon,
} from "lucide-react"

import { Badge } from "@/registry/base-luma/ui/badge"
import { Button } from "@/registry/base-luma/ui/button"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/base-luma/ui/field"
import { Input } from "@/registry/base-luma/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-luma/ui/select"

const TYPE_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "تصویر", label: "تصویر" },
  { value: "ویدیو", label: "ویدیو" },
  { value: "صوت", label: "صوت" },
  { value: "سند", label: "سند" },
] as const

const SORT_ITEMS = [
  { value: "جدیدترین", label: "جدیدترین" },
  { value: "نام", label: "نام" },
  { value: "اندازه", label: "اندازه" },
] as const

const ITEMS = [
  {
    kind: "image" as const,
    title: "کاور محصول",
    file: "cover.jpg",
    size: "۱٫۲ مگابایت",
    tag: "تصویر",
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
  },
  {
    kind: "video" as const,
    title: "معرفی کوتاه",
    file: "intro.mp4",
    size: "۱۸ مگابایت",
    tag: "ویدیو",
  },
  {
    kind: "audio" as const,
    title: "پادکست ۱",
    file: "ep-01.mp3",
    size: "۸٫۴ مگابایت",
    tag: "صوت",
  },
  {
    kind: "file" as const,
    title: "بروشور",
    file: "brochure.pdf",
    size: "۶۴۰ کیلوبایت",
    tag: "سند",
  },
  {
    kind: "image" as const,
    title: "بنر فروش",
    file: "banner.png",
    size: "۸۹۰ کیلوبایت",
    tag: "تصویر",
    src: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80",
  },
  {
    kind: "video" as const,
    title: "دمو محصول",
    file: "demo.webm",
    size: "۲۴ مگابایت",
    tag: "ویدیو",
  },
]

const ICONS = {
  image: ImageIcon,
  video: FilmIcon,
  audio: MusicIcon,
  file: FileIcon,
} as const

export default function MediaGridFilter() {
  const [type, setType] = React.useState("همه")
  const [sort, setSort] = React.useState("جدیدترین")

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
        <Select
          items={[...TYPE_ITEMS]}
          value={type}
          onValueChange={(value) => {
            if (TYPE_ITEMS.some((item) => item.value === value)) {
              setType(value as string)
            }
          }}
        >
          <SelectTrigger className="w-full sm:w-40" dir="rtl">
            <SelectValue placeholder="نوع" />
          </SelectTrigger>
          <SelectContent dir="rtl" lang="fa">
            {TYPE_ITEMS.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          items={[...SORT_ITEMS]}
          value={sort}
          onValueChange={(value) => {
            if (SORT_ITEMS.some((item) => item.value === value)) {
              setSort(value as string)
            }
          }}
        >
          <SelectTrigger className="w-full sm:w-40" dir="rtl">
            <SelectValue placeholder="مرتب‌سازی" />
          </SelectTrigger>
          <SelectContent dir="rtl" lang="fa">
            {SORT_ITEMS.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
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
                <p className="text-xs tracking-normal text-muted-foreground">
                  <bdi dir="ltr">{item.file}</bdi>
                  {" · "}
                  {item.size}
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
