"use client"

import * as React from "react"
import { SearchIcon, Trash2Icon } from "lucide-react"

import { Badge } from "@/registry/base-maia/ui/badge"
import { Button } from "@/registry/base-maia/ui/button"
import { Input } from "@/registry/base-maia/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-maia/ui/select"

type Item = {
  id: string
  name: string
  category: string
  price: string
  image: string
}

const INITIAL: Item[] = [
  {
    id: "1",
    name: "هدفون بی‌سیم آرام",
    category: "صوتی",
    price: "۴٬۲۹۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    name: "کیف چرم دستی",
    category: "اکسسوری",
    price: "۳٬۱۵۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "3",
    name: "ساعت هوشمند نور",
    category: "پوشیدنی",
    price: "۸٬۹۰۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "4",
    name: "لامپ رومیزی مینیمال",
    category: "خانه",
    price: "۱٬۸۵۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "5",
    name: "کفش دویدن سبک",
    category: "پوشیدنی",
    price: "۵٬۴۰۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "6",
    name: "ماگ سرامیکی دست‌ساز",
    category: "خانه",
    price: "۴۸۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&auto=format&fit=crop&q=80",
  },
]

export function WishlistFilterable() {
  const [items, setItems] = React.useState(INITIAL)
  const [query, setQuery] = React.useState("")
  const [category, setCategory] = React.useState("all")

  const filtered = items.filter((item) => {
    const matchCat = category === "all" || item.category === category
    const matchQuery =
      !query.trim() ||
      item.name.includes(query) ||
      item.category.includes(query)
    return matchCat && matchQuery
  })

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 space-y-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            جستجو در علاقه‌مندی‌ها
          </h2>
          <p className="mt-2 text-muted-foreground">
            فیلتر دسته با Select راست‌چین
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجو نام یا دسته…"
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
              <SelectItem value="صوتی">صوتی</SelectItem>
              <SelectItem value="اکسسوری">اکسسوری</SelectItem>
              <SelectItem value="پوشیدنی">پوشیدنی</SelectItem>
              <SelectItem value="خانه">خانه</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed px-6 py-16 text-center text-sm text-muted-foreground">
          موردی با این فیلتر پیدا نشد.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <article key={item.id} className="flex flex-col gap-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl border bg-muted">
                <img
                  src={item.image}
                  alt={item.name}
                  className="size-full object-cover"
                />
                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  className="absolute end-2 top-2 size-8 bg-background/90"
                  onClick={() =>
                    setItems((prev) => prev.filter((x) => x.id !== item.id))
                  }
                  aria-label="حذف"
                >
                  <Trash2Icon className="size-4" />
                </Button>
              </div>
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="truncate font-medium">{item.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <bdi dir="ltr" className="tabular-nums">
                      {item.price}
                    </bdi>{" "}
                    تومان
                  </p>
                </div>
                <Badge variant="secondary" className="shrink-0">
                  {item.category}
                </Badge>
              </div>
              <Button size="sm">افزودن به سبد</Button>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
