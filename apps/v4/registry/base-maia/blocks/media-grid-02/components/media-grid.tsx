"use client"

import { FileIcon, FilmIcon, ImageIcon, MusicIcon } from "lucide-react"

import { Badge } from "@/registry/base-maia/ui/badge"
import { Button } from "@/registry/base-maia/ui/button"

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
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
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

export function MediaGridCards() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">فهرست رسانه‌ها</h2>
          <p className="mt-2 text-muted-foreground">کارت با بج نوع و اندازه</p>
        </div>
        <Button variant="outline" size="sm">
          مشاهده همه
        </Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
    </section>
  )
}
