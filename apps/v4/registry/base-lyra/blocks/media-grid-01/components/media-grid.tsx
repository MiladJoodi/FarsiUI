"use client"

import { FileIcon, FilmIcon, ImageIcon, MusicIcon } from "lucide-react"

const ITEMS = [
  { kind: "image" as const, title: "کاور محصول", file: "cover.jpg" },
  { kind: "video" as const, title: "معرفی کوتاه", file: "intro.mp4" },
  { kind: "audio" as const, title: "پادکست ۱", file: "ep-01.mp3" },
  { kind: "file" as const, title: "بروشور", file: "brochure.pdf" },
  { kind: "image" as const, title: "بنر فروش", file: "banner.png" },
  { kind: "video" as const, title: "دمو محصول", file: "demo.webm" },
]

const ICONS = {
  image: ImageIcon,
  video: FilmIcon,
  audio: MusicIcon,
  file: FileIcon,
} as const

export function MediaGridSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">فهرست رسانه‌ها</h2>
        <p className="mt-2 text-muted-foreground">شبکهٔ ساده با نوع رسانه</p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {ITEMS.map((item) => {
          const Icon = ICONS[item.kind]
          return (
            <article
              key={item.file}
              className="overflow-hidden rounded-xl border bg-card"
            >
              <div className="flex aspect-square items-center justify-center bg-muted">
                <Icon className="size-8 text-muted-foreground" />
              </div>
              <div className="space-y-0.5 p-3">
                <p className="truncate text-sm font-medium">{item.title}</p>
                <p className="truncate text-xs text-muted-foreground">
                  <bdi dir="ltr">{item.file}</bdi>
                </p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
