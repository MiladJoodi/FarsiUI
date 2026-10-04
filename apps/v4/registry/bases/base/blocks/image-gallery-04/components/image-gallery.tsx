"use client"

import * as React from "react"
import { MoreHorizontalIcon, XIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/registry/bases/base/ui/dialog"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"

const IMAGES = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    title: "هدفون بی‌سیم",
    file: "headphones.jpg",
    tag: "صوتی",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
    title: "ساعت هوشمند",
    file: "watch.jpg",
    tag: "پوشیدنی",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80",
    title: "کیف چرم",
    file: "bag.jpg",
    tag: "اکسسوری",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80",
    title: "لامپ رومیزی",
    file: "lamp.jpg",
    tag: "خانه",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&auto=format&fit=crop&q=80",
    title: "عینک آفتابی",
    file: "glasses.jpg",
    tag: "مد",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&auto=format&fit=crop&q=80",
    title: "کفش اسپرت",
    file: "shoes.jpg",
    tag: "پوشاک",
  },
] as const

export default function ImageGalleryLightbox() {
  const [active, setActive] = React.useState<(typeof IMAGES)[number] | null>(
    null
  )
  const [chips, setChips] = React.useState(["محصولات", "جدید"])
  const [headerOpen, setHeaderOpen] = React.useState(false)
  const [openId, setOpenId] = React.useState<string | null>(null)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">گالری تصاویر</h2>
          <p className="mt-2 text-muted-foreground">
            پیش‌نمایش Dialog و منوی عملیات
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
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="w-full justify-start"
              onClick={() => setHeaderOpen(false)}
            >
              بارگذاری تصویر
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="w-full justify-start"
              onClick={() => setHeaderOpen(false)}
            >
              دانلود همه
            </Button>
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
        {IMAGES.map((img) => (
          <article
            key={img.id}
            className="group overflow-hidden rounded-xl border bg-card"
          >
            <button
              type="button"
              className="block w-full text-start"
              onClick={() => setActive(img)}
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={img.src}
                  alt={img.title}
                  className="size-full object-cover transition-transform group-hover:scale-[1.03]"
                />
              </div>
            </button>
            <div className="flex items-center justify-between gap-2 p-2.5">
              <p className="truncate text-sm font-medium">{img.title}</p>
              <Popover
                open={openId === img.id}
                onOpenChange={(open) => setOpenId(open ? img.id : null)}
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
                    onClick={() => {
                      setActive(img)
                      setOpenId(null)
                    }}
                  >
                    پیش‌نمایش
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
                </PopoverContent>
              </Popover>
            </div>
          </article>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-2xl" dir="rtl" lang="fa">
          <DialogHeader className="text-start">
            <DialogTitle>{active?.title}</DialogTitle>
            <DialogDescription>
              فایل{" "}
              <bdi dir="ltr">{active?.file}</bdi>
              {active ? ` · ${active.tag}` : null}
            </DialogDescription>
          </DialogHeader>
          {active ? (
            <div className="overflow-hidden rounded-lg border bg-muted">
              <img
                src={active.src}
                alt={active.title}
                className="max-h-[28rem] w-full object-contain"
              />
            </div>
          ) : null}
          <div className="flex gap-2">
            <Button className="flex-1">دانلود</Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => setActive(null)}
            >
              بستن
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
