"use client"

import * as React from "react"
import {
  FileIcon,
  FilmIcon,
  ImageIcon,
  MoreHorizontalIcon,
  MusicIcon,
  XIcon,
} from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"

type MediaItem = {
  id: string
  kind: "image" | "video" | "audio" | "file"
  title: string
  file: string
  size: string
  tag: string
  src?: string
}

const INITIAL: MediaItem[] = [
  {
    id: "1",
    kind: "image",
    title: "کاور محصول",
    file: "cover.jpg",
    size: "1.2 MB",
    tag: "تصویر",
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    kind: "video",
    title: "معرفی کوتاه",
    file: "intro.mp4",
    size: "18 MB",
    tag: "ویدیو",
  },
  {
    id: "3",
    kind: "audio",
    title: "پادکست ۱",
    file: "ep-01.mp3",
    size: "8.4 MB",
    tag: "صوت",
  },
  {
    id: "4",
    kind: "file",
    title: "بروشور",
    file: "brochure.pdf",
    size: "640 KB",
    tag: "سند",
  },
  {
    id: "5",
    kind: "image",
    title: "بنر فروش",
    file: "banner.png",
    size: "890 KB",
    tag: "تصویر",
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "6",
    kind: "video",
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

export function MediaGridActions() {
  const [items, setItems] = React.useState(INITIAL)
  const [chips, setChips] = React.useState(["ویدیو", "تصویر"])
  const [sort, setSort] = React.useState("newest")

  function remove(id: string) {
    setItems((prev) => prev.filter((x) => x.id !== id))
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">فهرست رسانه‌ها</h2>
          <p className="mt-2 text-muted-foreground">
            چیپ فیلتر و منوی عملیات RTL
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
            <MoreHorizontalIcon className="size-4" />
            بیشتر
          </DropdownMenuTrigger>
          <DropdownMenuContent dir="rtl" lang="fa" align="start">
            <DropdownMenuLabel>مرتب‌سازی</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={sort}
              onValueChange={(v) => setSort(v ?? "newest")}
            >
              <DropdownMenuRadioItem value="newest">
                جدیدترین
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="name">نام</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="size">اندازه</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setChips([])}>
              پاک کردن فیلترها
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {chips.length > 0 ? (
        <div className="mb-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <Badge key={c} variant="secondary" className="gap-1 pe-1">
              {c}
              <button
                type="button"
                className="rounded-sm p-0.5 hover:bg-muted"
                onClick={() => setChips((prev) => prev.filter((x) => x !== c))}
                aria-label={`حذف ${c}`}
              >
                <XIcon className="size-3" />
              </button>
            </Badge>
          ))}
        </div>
      ) : null}

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {items.map((item) => {
          const Icon = ICONS[item.kind]
          return (
            <article
              key={item.id}
              className="overflow-hidden rounded-xl border bg-card"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                {item.src ? (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="size-full object-cover"
                  />
                ) : (
                  <div className="flex size-full items-center justify-center">
                    <Icon className="size-8 text-muted-foreground" />
                  </div>
                )}
                <Badge variant="secondary" className="absolute start-2 top-2">
                  {item.tag}
                </Badge>
              </div>
              <div className="flex items-center gap-2 p-2.5">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{item.title}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    <bdi dir="ltr">{item.file}</bdi>
                  </p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={<Button variant="ghost" size="icon-sm" />}
                  >
                    <MoreHorizontalIcon className="size-4" />
                    <span className="sr-only">عملیات</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent dir="rtl" lang="fa" align="start">
                    <DropdownMenuItem>باز کردن</DropdownMenuItem>
                    <DropdownMenuItem>دانلود</DropdownMenuItem>
                    <DropdownMenuItem>اشتراک</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => remove(item.id)}>
                      حذف
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
