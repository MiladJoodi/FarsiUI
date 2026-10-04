"use client"

import * as React from "react"
import { SearchIcon } from "lucide-react"

import { Badge } from "@/registry/base-luma/ui/badge"
import { Input } from "@/registry/base-luma/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-luma/ui/select"

const PRODUCTS = [
  {
    name: "هدفون بی‌سیم آرام",
    category: "صوتی",
    price: "۴٬۲۹۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "کیف چرم دستی",
    category: "اکسسوری",
    price: "۳٬۱۵۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "ساعت هوشمند نور",
    category: "پوشیدنی",
    price: "۸٬۹۰۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "لامپ رومیزی مینیمال",
    category: "خانه",
    price: "۱٬۸۵۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "کفش دویدن سبک",
    category: "پوشیدنی",
    price: "۵٬۴۰۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "ماگ سرامیکی دست‌ساز",
    category: "خانه",
    price: "۴۸۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&auto=format&fit=crop&q=80",
  },
] as const

const CATEGORY_ITEMS = [
  { value: "همه", label: "همه دسته‌ها" },
  { value: "صوتی", label: "صوتی" },
  { value: "اکسسوری", label: "اکسسوری" },
  { value: "پوشیدنی", label: "پوشیدنی" },
  { value: "خانه", label: "خانه" },
] as const

export default function ProductGridFilterable() {
  const [query, setQuery] = React.useState("")
  const [category, setCategory] = React.useState("همه")

  const filtered = PRODUCTS.filter((product) => {
    const matchCat = category === "همه" || product.category === category
    const matchQuery =
      !query.trim() ||
      product.name.includes(query) ||
      product.category.includes(query)
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
          <h2 className="text-3xl font-bold tracking-tight">فروشگاه</h2>
          <p className="mt-2 text-muted-foreground">
            جستجو و فیلتر دسته با Select راست‌چین
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجو نام محصول یا دسته…"
              className="ps-9"
              dir="rtl"
            />
          </div>
          <Select
            items={[...CATEGORY_ITEMS]}
            value={category}
            onValueChange={(value) => {
              if (CATEGORY_ITEMS.some((item) => item.value === value)) {
                setCategory(value as string)
              }
            }}
          >
            <SelectTrigger className="w-full sm:w-44" dir="rtl">
              <SelectValue />
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              {CATEGORY_ITEMS.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed bg-card px-6 py-16 text-center text-sm text-muted-foreground">
          محصولی با این فیلتر پیدا نشد.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <article key={product.name} className="flex flex-col gap-3">
              <div className="aspect-[4/5] overflow-hidden rounded-xl border bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="size-full object-cover"
                />
              </div>
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="truncate font-medium">{product.name}</h3>
                  <p className="mt-1 text-sm tracking-normal text-muted-foreground">
                    {product.price} تومان
                  </p>
                </div>
                <Badge variant="outline" className="shrink-0 border">
                  {product.category}
                </Badge>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
