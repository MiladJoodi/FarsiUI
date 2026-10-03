"use client"

import { Badge } from "@/registry/base-lyra/ui/badge"
import { Button } from "@/registry/base-lyra/ui/button"

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    title: "هدفون بی‌سیم",
    tag: "صوتی",
  },
  {
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
    title: "ساعت هوشمند",
    tag: "پوشیدنی",
  },
  {
    src: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80",
    title: "کیف چرم",
    tag: "اکسسوری",
  },
  {
    src: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80",
    title: "لامپ رومیزی",
    tag: "خانه",
  },
  {
    src: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&auto=format&fit=crop&q=80",
    title: "عینک آفتابی",
    tag: "مد",
  },
  {
    src: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&auto=format&fit=crop&q=80",
    title: "کفش اسپرت",
    tag: "پوشاک",
  },
] as const

export function ImageGalleryCards() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">گالری تصاویر</h2>
          <p className="mt-2 text-muted-foreground">
            کارت تصویر با عنوان و دسته
          </p>
        </div>
        <Button variant="outline" size="sm">
          مشاهده همه
        </Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {IMAGES.map((img) => (
          <article
            key={img.src}
            className="overflow-hidden rounded-xl border bg-card"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={img.src}
                alt={img.title}
                className="size-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between gap-2 p-3">
              <p className="truncate text-sm font-medium">{img.title}</p>
              <Badge variant="secondary">{img.tag}</Badge>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
