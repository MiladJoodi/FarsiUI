"use client"

import * as React from "react"
import { HeartIcon, LayoutGridIcon, Rows3Icon, SearchIcon } from "lucide-react"

import { Badge } from "@/registry/base-lyra/ui/badge"
import { Button } from "@/registry/base-lyra/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-lyra/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/base-lyra/ui/dropdown-menu"
import { Input } from "@/registry/base-lyra/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-lyra/ui/select"
import { Separator } from "@/registry/base-lyra/ui/separator"

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

type SortKey = "featured" | "price-asc" | "price-desc" | "name"
type ViewMode = "grid" | "list"

const SORT_LABELS: Record<SortKey, string> = {
  featured: "پیشنهادی",
  "price-asc": "ارزان‌ترین",
  "price-desc": "گران‌ترین",
  name: "نام الفبایی",
}

export function ProductGridHub() {
  const [query, setQuery] = React.useState("")
  const [category, setCategory] = React.useState("all")
  const [sort, setSort] = React.useState<SortKey>("featured")
  const [view, setView] = React.useState<ViewMode>("grid")
  const [pageSize, setPageSize] = React.useState("6")
  const [page, setPage] = React.useState(0)
  const [wishlist, setWishlist] = React.useState(() => new Set(["2", "5"]))

  const filtered = React.useMemo(() => {
    let list = PRODUCTS.filter((product) => {
      const matchCat = category === "all" || product.category === category
      const matchQuery =
        !query.trim() ||
        product.name.includes(query) ||
        product.category.includes(query)
      return matchCat && matchQuery
    })
    list = [...list]
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price)
    else if (sort === "price-desc") list.sort((a, b) => b.price - a.price)
    else if (sort === "name")
      list.sort((a, b) => a.name.localeCompare(b.name, "fa"))
    return list
  }, [query, category, sort])

  React.useEffect(() => {
    setPage(0)
  }, [query, category, pageSize])

  const size = Number(pageSize)
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
            value={category}
            onValueChange={(value) => setCategory((value as string) ?? "all")}
          >
            <SelectTrigger className="w-full lg:w-40" dir="rtl">
              <SelectValue placeholder="دسته" />
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              <SelectItem value="all">همه دسته‌ها</SelectItem>
              <SelectItem value="صوتی">صوتی</SelectItem>
              <SelectItem value="اکسسوری">اکسسوری</SelectItem>
              <SelectItem value="پوشیدنی">پوشیدنی</SelectItem>
              <SelectItem value="خانه">خانه</SelectItem>
            </SelectContent>
          </Select>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="outline" className="w-full lg:w-auto" />}
            >
              {SORT_LABELS[sort]}
            </DropdownMenuTrigger>
            <DropdownMenuContent
              dir="rtl"
              lang="fa"
              align="end"
              className="w-44"
            >
              <DropdownMenuLabel>مرتب‌سازی</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={sort}
                onValueChange={(v) => setSort((v as SortKey) ?? "featured")}
              >
                {(Object.keys(SORT_LABELS) as SortKey[]).map((key) => (
                  <DropdownMenuRadioItem key={key} value={key}>
                    {SORT_LABELS[key]}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
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

        <p className="text-sm text-muted-foreground">
          <bdi dir="ltr">{filtered.length}</bdi> محصول ·{" "}
          <bdi dir="ltr">{wishlist.size}</bdi> در علاقه‌مندی
        </p>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed px-6 py-16 text-center text-sm text-muted-foreground">
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
                    <Badge className="absolute start-3 top-3">
                      {product.badge}
                    </Badge>
                  ) : null}
                  <Button
                    type="button"
                    size="icon"
                    variant="secondary"
                    className="absolute end-2 top-2 size-8 bg-background/90"
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
                    <Badge variant="outline" className="shrink-0">
                      {product.category}
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <bdi dir="ltr" className="tabular-nums">
                      {product.priceLabel}
                    </bdi>{" "}
                    تومان
                  </p>
                  <Button className="mt-3 w-full" size="sm">
                    افزودن به سبد
                  </Button>
                </div>
              </article>
            )
          })}
        </div>
      ) : (
        <div className="divide-y rounded-xl border">
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
                    <Badge variant="outline">{product.category}</Badge>
                    {product.badge ? (
                      <Badge variant="secondary">{product.badge}</Badge>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <bdi dir="ltr" className="tabular-nums">
                      {product.priceLabel}
                    </bdi>{" "}
                    تومان
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
                  <Button size="sm">افزودن به سبد</Button>
                </div>
              </article>
            )
          })}
        </div>
      )}

      {filtered.length > 0 && (
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Select
            value={pageSize}
            onValueChange={(value) => setPageSize((value as string) ?? "6")}
          >
            <SelectTrigger className="w-full sm:w-36" dir="rtl">
              <SelectValue placeholder="تعداد" />
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              <SelectItem value="3">۳ محصول</SelectItem>
              <SelectItem value="6">۶ محصول</SelectItem>
              <SelectItem value="8">۸ محصول</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex items-center gap-3">
            <p className="text-sm text-muted-foreground">
              صفحه <bdi dir="ltr">{safePage + 1}</bdi> از{" "}
              <bdi dir="ltr">{pageCount}</bdi>
            </p>
            <Button
              variant="outline"
              size="sm"
              disabled={safePage === 0}
              onClick={() => setPage((p) => Math.max(0, p - 1))}
            >
              قبلی
            </Button>
            <Button
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

      <Card dir="rtl" lang="fa">
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
