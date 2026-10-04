"use client"

import * as React from "react"
import { HeartIcon, MoreHorizontalIcon } from "lucide-react"

import { Badge } from "@/registry/base-maia/ui/badge"
import { Button } from "@/registry/base-maia/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-maia/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-maia/ui/select"

const PRODUCTS = [
  {
    id: "1",
    name: "هدفون بی‌سیم آرام",
    category: "صوتی",
    price: 4290000,
    priceLabel: "۴٬۲۹۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    name: "کیف چرم دستی",
    category: "اکسسوری",
    price: 3150000,
    priceLabel: "۳٬۱۵۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "3",
    name: "ساعت هوشمند نور",
    category: "پوشیدنی",
    price: 8900000,
    priceLabel: "۸٬۹۰۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "4",
    name: "لامپ رومیزی مینیمال",
    category: "خانه",
    price: 1850000,
    priceLabel: "۱٬۸۵۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "5",
    name: "کفش دویدن سبک",
    category: "پوشیدنی",
    price: 5400000,
    priceLabel: "۵٬۴۰۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "6",
    name: "ماگ سرامیکی دست‌ساز",
    category: "خانه",
    price: 480000,
    priceLabel: "۴۸۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&auto=format&fit=crop&q=80",
  },
] as const

const SORT_ITEMS = [
  { value: "پیشنهادی", label: "پیشنهادی" },
  { value: "ارزان‌ترین", label: "ارزان‌ترین" },
  { value: "گران‌ترین", label: "گران‌ترین" },
  { value: "نام", label: "نام الفبایی" },
] as const

type SortKey = (typeof SORT_ITEMS)[number]["value"]

export default function ProductGridWishlist() {
  const [sort, setSort] = React.useState<SortKey>("پیشنهادی")
  const [wishlist, setWishlist] = React.useState(() => new Set(["2", "5"]))
  const [openId, setOpenId] = React.useState<string | null>(null)

  const sorted = React.useMemo(() => {
    const list = [...PRODUCTS]
    if (sort === "ارزان‌ترین") list.sort((a, b) => a.price - b.price)
    else if (sort === "گران‌ترین") list.sort((a, b) => b.price - a.price)
    else if (sort === "نام")
      list.sort((a, b) => a.name.localeCompare(b.name, "fa"))
    return list
  }, [sort])

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">کاتالوگ محصولات</h2>
          <p className="mt-2 text-muted-foreground">
            علاقه‌مندی و منوی عملیات راست‌چین
          </p>
        </div>
        <Select
          items={[...SORT_ITEMS]}
          value={sort}
          onValueChange={(value) => {
            if (SORT_ITEMS.some((item) => item.value === value)) {
              setSort(value as SortKey)
            }
          }}
        >
          <SelectTrigger className="w-full sm:w-44" dir="rtl">
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

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((product) => {
          const liked = wishlist.has(product.id)
          return (
            <article
              key={product.id}
              className="group relative flex flex-col gap-3"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl border bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute end-2 top-2 flex gap-1">
                  <Button
                    type="button"
                    size="icon"
                    variant="secondary"
                    className="size-8 bg-card/90"
                    onClick={() =>
                      setWishlist((prev) => {
                        const next = new Set(prev)
                        if (next.has(product.id)) next.delete(product.id)
                        else next.add(product.id)
                        return next
                      })
                    }
                    aria-label={
                      liked ? "حذف از علاقه‌مندی" : "افزودن به علاقه‌مندی"
                    }
                  >
                    <HeartIcon
                      className={`size-4 ${liked ? "fill-primary text-primary" : ""}`}
                    />
                  </Button>
                  <Popover
                    open={openId === product.id}
                    onOpenChange={(open) => setOpenId(open ? product.id : null)}
                  >
                    <PopoverTrigger
                      render={
                        <Button
                          type="button"
                          size="icon"
                          variant="secondary"
                          className="size-8 bg-card/90"
                        />
                      }
                    >
                      <MoreHorizontalIcon className="size-4" />
                      <span className="sr-only">منوی محصول</span>
                    </PopoverTrigger>
                    <PopoverContent
                      dir="rtl"
                      lang="fa"
                      align="end"
                      className="w-40 space-y-1 p-2"
                    >
                      <p className="px-2 py-1.5 text-sm font-medium">عملیات</p>
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-8 w-full justify-start"
                        onClick={() => setOpenId(null)}
                      >
                        مشاهده سریع
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-8 w-full justify-start"
                        onClick={() => setOpenId(null)}
                      >
                        افزودن به سبد
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-8 w-full justify-start"
                        onClick={() => setOpenId(null)}
                      >
                        اشتراک‌گذاری
                      </Button>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="truncate font-medium">{product.name}</h3>
                  <p className="mt-1 text-sm tracking-normal text-muted-foreground">
                    {product.priceLabel} تومان
                  </p>
                </div>
                <Badge variant="outline" className="shrink-0 border">
                  {product.category}
                </Badge>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
