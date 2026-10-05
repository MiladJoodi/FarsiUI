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

import { cn } from "@/registry/base-maia/lib/utils"
import { Badge } from "@/registry/base-maia/ui/badge"
import { Button } from "@/registry/base-maia/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-maia/ui/popover"
import { Separator } from "@/registry/base-maia/ui/separator"

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
    size: "۱٫۲ مگابایت",
    tag: "تصویر",
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    kind: "video",
    title: "معرفی کوتاه",
    file: "intro.mp4",
    size: "۱۸ مگابایت",
    tag: "ویدیو",
  },
  {
    id: "3",
    kind: "audio",
    title: "پادکست ۱",
    file: "ep-01.mp3",
    size: "۸٫۴ مگابایت",
    tag: "صوت",
  },
  {
    id: "4",
    kind: "file",
    title: "بروشور",
    file: "brochure.pdf",
    size: "۶۴۰ کیلوبایت",
    tag: "سند",
  },
  {
    id: "5",
    kind: "image",
    title: "بنر فروش",
    file: "banner.png",
    size: "۸۹۰ کیلوبایت",
    tag: "تصویر",
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "6",
    kind: "video",
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

const SORT_OPTIONS = [
  { value: "جدیدترین", label: "جدیدترین" },
  { value: "نام", label: "نام" },
  { value: "اندازه", label: "اندازه" },
]

export default function MediaGridActions() {
  const [items, setItems] = React.useState(INITIAL)
  const [chips, setChips] = React.useState(["ویدیو", "تصویر"])
  const [sort, setSort] = React.useState("جدیدترین")
  const [headerOpen, setHeaderOpen] = React.useState(false)
  const [openId, setOpenId] = React.useState<string | null>(null)

  function remove(id: string) {
    setItems((prev) => prev.filter((x) => x.id !== id))
    setOpenId(null)
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
        <Popover open={headerOpen} onOpenChange={setHeaderOpen}>
          <PopoverTrigger
            render={<Button type="button" variant="outline" size="sm" />}
          >
            <MoreHorizontalIcon className="size-4" />
            بیشتر
          </PopoverTrigger>
          <PopoverContent
            dir="rtl"
            lang="fa"
            align="start"
            className="w-44 p-1"
          >
            <p className="px-2 py-1.5 text-xs text-muted-foreground">
              مرتب‌سازی
            </p>
            {SORT_OPTIONS.map((opt) => (
              <Button
                key={opt.value}
                type="button"
                variant="ghost"
                size="sm"
                className={cn(
                  "w-full justify-start",
                  sort === opt.value && "bg-muted"
                )}
                onClick={() => {
                  setSort(opt.value)
                  setHeaderOpen(false)
                }}
              >
                {opt.label}
              </Button>
            ))}
            <Separator className="my-1" />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="w-full justify-start"
              onClick={() => {
                setChips([])
                setHeaderOpen(false)
              }}
            >
              پاک کردن فیلترها
            </Button>
          </PopoverContent>
        </Popover>
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
                  <p className="truncate text-xs tracking-normal text-muted-foreground">
                    <bdi dir="ltr">{item.file}</bdi>
                    {" · "}
                    {item.size}
                  </p>
                </div>
                <Popover
                  open={openId === item.id}
                  onOpenChange={(open) => setOpenId(open ? item.id : null)}
                >
                  <PopoverTrigger
                    render={
                      <Button type="button" variant="ghost" size="icon-sm" />
                    }
                  >
                    <MoreHorizontalIcon className="size-4" />
                    <span className="sr-only">عملیات</span>
                  </PopoverTrigger>
                  <PopoverContent
                    dir="rtl"
                    lang="fa"
                    align="start"
                    className="w-36 p-1"
                  >
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setOpenId(null)}
                    >
                      باز کردن
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setOpenId(null)}
                    >
                      دانلود
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setOpenId(null)}
                    >
                      اشتراک
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => remove(item.id)}
                    >
                      حذف
                    </Button>
                  </PopoverContent>
                </Popover>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
