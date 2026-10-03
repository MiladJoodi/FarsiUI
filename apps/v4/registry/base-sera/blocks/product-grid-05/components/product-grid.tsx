"use client"

import * as React from "react"
import { HeartIcon, LayoutGridIcon, Rows3Icon, SearchIcon } from "lucide-react"

import { Badge } from "@/registry/base-sera/ui/badge"
import { Button } from "@/registry/base-sera/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-sera/ui/card"
import { Input } from "@/registry/base-sera/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-sera/ui/select"
import { Separator } from "@/registry/base-sera/ui/separator"

const PRODUCTS = [
  {
    id: "1",
    name: "هدفون بی‌سیم آرام",
    category: "صوتی",
    price: 4290000,
    priceLabel: "۴٬۲۹۰٬۰۰۰",
    badge: "تخفیف",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    name: "کیف چرم دستی",
    category: "اکسسوری",
    price: 3150000,
    priceLabel: "۳٬۱۵۰٬۰۰۰",
    badge: "جدید",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "3",
    name: "ساعت هوشمند نور",
    category: "پوشیدنی",
    price: 8900000,
    priceLabel: "۸٬۹۰۰٬۰۰۰",
    badge: null,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "4",
    name: "لامپ رومیزی مینیمال",
    category: "خانه",
    price: 1850000,
    priceLabel: "۱٬۸۵۰٬۰۰۰",
    badge: "پرفروش",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "5",
    name: "کفش دویدن سبک",
    category: "پوشیدنی",
    price: 5400000,
    priceLabel: "۵٬۴۰۰٬۰۰۰",
    badge: null,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "6",
    name: "ماگ سرامیکی دست‌ساز",
    category: "خانه",
    price: 480000,
    priceLabel: "۴۸۰٬۰۰۰",
    badge: null,
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "7",
    name: "دوربین کامپکت سفر",
    category: "صوتی",
    price: 12500000,
    priceLabel: "۱۲٬۵۰۰٬۰۰۰",
    badge: "جدید",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "8",
    name: "کوله‌پشتی روزمره",
    category: "اکسسوری",
    price: 2750000,
    priceLabel: "۲٬۷۵۰٬۰۰۰",
    badge: null,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80",
  },
] as const

const CATEGORY_ITEMS = [
  { value: "همه", label: "همه دسته‌ها" },
  { value: "صوتی", label: "صوتی" },
  { value: "اکسسوری", label: "اکسسوری" },
  { value: "پوشیدنی", label: "پوشیدنی" },
  { value: "خانه", label: "خانه" },
] as const

const SORT_ITEMS = [
  { value: "پیشنهادی", label: "پیشنهادی" },
  { value: "ارزان‌ترین", label: "ارزان‌ترین" },
  { value: "گران‌ترین", label: "گران‌ترین" },
  { value: "نام", label: "نام الفبایی" },
] as const

const PAGE_SIZE_ITEMS = [
  { value: "3", label: "۳ محصول" },
  { value: "6", label: "۶ محصول" },
  { value: "8", label: "۸ محصول" },
] as const

type SortKey = (typeof SORT_ITEMS)[number]["value"]
type ViewMode = "grid" | "list"

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export function ProductGridHub() {
  const [query, setQuery] = React.useState("")
  const [category, setCategory] = React.useState("همه")
  const [sort, setSort] = React.useState<SortKey>("پیشنهادی")
  const [view, setView] = React.useState<ViewMode>("grid")
  const [pageSize, setPageSize] = React.useState("6")
  const [page, setPage] = React.useState(0)
  const [wishlist, setWishlist] = React.useState(() => new Set(["2", "5"]))

  const filtered = React.useMemo(() => {
    let list = PRODUCTS.filter((product) => {
      const matchCat = category === "همه" || product.category === category
      const matchQuery =
        !query.trim() ||
        product.name.includes(query) ||
        product.category.includes(query)
      return matchCat && matchQuery
    })
    list = [...list]
    if (sort === "ارزان‌ترین") list.sort((a, b) => a.price - b.price)
    else if (sort === "گران‌ترین") list.sort((a, b) => b.price - a.price)
    else if (sort === "نام")
      list.sort((a, b) => a.name.localeCompare(b.name, "fa"))
    return list
  }, [query, category, sort])

  React.useEffect(() => {
    setPage(0)
  }, [query, category, pageSize])

  const size = Number(pageSize) || 6
  const pageCount = Math.max(1, Math.ceil(filtered.length / size))
  const safePage = Math.min(page, pageCount - 1)
  const slice = filtered.slice(safePage * size, safePage * size + size)

  function toggleWish(id: string) {
    setWishlist((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 space-y-4">
        <div>
          <Badge variant="secondary" className="mb-3">
            فروشگاه
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">
            فهرست کامل محصولات
          </h2>
          <p className="mt-2 text-muted-foreground">
            جستجو، فیلتر، مرتب‌سازی، نمایش شبکه‌ای/لیستی و دعوت با ایمیل
          </p>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row">
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
            <SelectTrigger className="w-full lg:w-40" dir="rtl">
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
          <Select
            items={[...SORT_ITEMS]}
            value={sort}
            onValueChange={(value) => {
              if (SORT_ITEMS.some((item) => item.value === value)) {
                setSort(value as SortKey)
              }
            }}
          >
            <SelectTrigger className="w-full lg:w-44" dir="rtl">
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
          <div className="flex gap-1">
            <Button
              type="button"
              size="icon"
              variant={view === "grid" ? "default" : "outline"}
              onClick={() => setView("grid")}
              aria-label="نمایش شبکه‌ای"
            >
              <LayoutGridIcon className="size-4" />
            </Button>
            <Button
              type="button"
              size="icon"
              variant={view === "list" ? "default" : "outline"}
              onClick={() => setView("list")}
              aria-label="نمایش لیستی"
            >
              <Rows3Icon className="size-4" />
            </Button>
          </div>
        </div>

        <p className="text-sm tracking-normal text-muted-foreground">
          {toFa(filtered.length)} محصول · {toFa(wishlist.size)} در علاقه‌مندی
        </p>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed bg-card px-6 py-16 text-center text-sm text-muted-foreground">
          محصولی با این فیلتر پیدا نشد.
        </p>
      ) : view === "grid" ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {slice.map((product) => {
            const liked = wishlist.has(product.id)
            return (
              <article key={product.id} className="group flex flex-col gap-3">
                <div className="relative aspect-square overflow-hidden rounded-xl border bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {product.badge ? (
                    <Badge
                      variant="outline"
                      className="absolute start-3 top-3 border bg-card"
                    >
                      {product.badge}
                    </Badge>
                  ) : null}
                  <Button
                    type="button"
                    size="icon"
                    variant="secondary"
                    className="absolute end-2 top-2 size-8 bg-card/90"
                    onClick={() => toggleWish(product.id)}
                    aria-label={
                      liked ? "حذف از علاقه‌مندی" : "افزودن به علاقه‌مندی"
                    }
                  >
                    <HeartIcon
                      className={`size-4 ${liked ? "fill-primary text-primary" : ""}`}
                    />
                  </Button>
                </div>
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-medium">{product.name}</h3>
                    <Badge variant="outline" className="shrink-0 border">
                      {product.category}
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm tracking-normal text-muted-foreground">
                    {product.priceLabel} تومان
                  </p>
                  <Button type="button" className="mt-3 w-full" size="sm">
                    افزودن به سبد
                  </Button>
                </div>
              </article>
            )
          })}
        </div>
      ) : (
        <div className="divide-y overflow-hidden rounded-xl border bg-card">
          {slice.map((product) => {
            const liked = wishlist.has(product.id)
            return (
              <article
                key={product.id}
                className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center"
              >
                <div className="size-24 shrink-0 overflow-hidden rounded-lg border bg-muted sm:size-28">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="size-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-medium">{product.name}</h3>
                    <Badge variant="outline" className="border">
                      {product.category}
                    </Badge>
                    {product.badge ? (
                      <Badge variant="outline" className="border">
                        {product.badge}
                      </Badge>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm tracking-normal text-muted-foreground">
                    {product.priceLabel} تومان
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    size="icon"
                    variant="outline"
                    onClick={() => toggleWish(product.id)}
                    aria-label={
                      liked ? "حذف از علاقه‌مندی" : "افزودن به علاقه‌مندی"
                    }
                  >
                    <HeartIcon
                      className={`size-4 ${liked ? "fill-primary text-primary" : ""}`}
                    />
                  </Button>
                  <Button type="button" size="sm">
                    افزودن به سبد
                  </Button>
                </div>
              </article>
            )
          })}
        </div>
      )}

      {filtered.length > 0 && (
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Select
            items={[...PAGE_SIZE_ITEMS]}
            value={pageSize}
            onValueChange={(value) => {
              if (PAGE_SIZE_ITEMS.some((item) => item.value === value)) {
                setPageSize(value as string)
              }
            }}
          >
            <SelectTrigger className="w-full sm:w-36" dir="rtl">
              <SelectValue>
                {(value: string | null) =>
                  PAGE_SIZE_ITEMS.find((item) => item.value === value)?.label ??
                  "۶ محصول"
                }
              </SelectValue>
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              {PAGE_SIZE_ITEMS.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex items-center gap-3">
            <p className="text-sm tracking-normal text-muted-foreground">
              صفحه {toFa(safePage + 1)} از {toFa(pageCount)}
            </p>
            <Button
              type="button"
              variant="outline"
              size="sm"
              disabled={safePage === 0}
              onClick={() => setPage((p) => Math.max(0, p - 1))}
            >
              قبلی
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              disabled={safePage >= pageCount - 1}
              onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
            >
              بعدی
            </Button>
          </div>
        </div>
      )}

      <Separator className="my-10" />

      <Card dir="rtl" lang="fa" className="bg-card">
        <CardHeader className="text-start">
          <CardTitle className="text-lg">خبر فروش ویژه</CardTitle>
          <CardDescription>
            نام فارسی راست‌چین؛ ایمیل انگلیسی چپ‌چین
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type="text"
              placeholder="نام شما"
              dir="rtl"
              className="sm:flex-1"
            />
            <Input
              type="email"
              required
              placeholder="name@example.com"
              dir="ltr"
              className="text-start sm:flex-1"
            />
            <Button type="submit" className="sm:shrink-0">
              عضویت
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
