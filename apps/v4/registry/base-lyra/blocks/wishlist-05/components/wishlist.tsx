"use client"

import * as React from "react"
import {
  HeartIcon,
  LayoutGridIcon,
  MoreHorizontalIcon,
  Rows3Icon,
  SearchIcon,
  ShoppingCartIcon,
} from "lucide-react"

import { Badge } from "@/registry/base-lyra/ui/badge"
import { Button } from "@/registry/base-lyra/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-lyra/ui/card"
import { Checkbox } from "@/registry/base-lyra/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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

type Item = {
  id: string
  name: string
  category: string
  price: number
  priceLabel: string
  image: string
  inStock: boolean
}

const INITIAL: Item[] = [
  {
    id: "1",
    name: "هدفون بی‌سیم آرام",
    category: "صوتی",
    price: 4290000,
    priceLabel: "۴٬۲۹۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    inStock: true,
  },
  {
    id: "2",
    name: "کیف چرم دستی",
    category: "اکسسوری",
    price: 3150000,
    priceLabel: "۳٬۱۵۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80",
    inStock: true,
  },
  {
    id: "3",
    name: "ساعت هوشمند نور",
    category: "پوشیدنی",
    price: 8900000,
    priceLabel: "۸٬۹۰۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
    inStock: false,
  },
  {
    id: "4",
    name: "لامپ رومیزی مینیمال",
    category: "خانه",
    price: 1850000,
    priceLabel: "۱٬۸۵۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80",
    inStock: true,
  },
  {
    id: "5",
    name: "کفش دویدن سبک",
    category: "پوشیدنی",
    price: 5400000,
    priceLabel: "۵٬۴۰۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
    inStock: true,
  },
  {
    id: "6",
    name: "ماگ سرامیکی دست‌ساز",
    category: "خانه",
    price: 480000,
    priceLabel: "۴۸۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&auto=format&fit=crop&q=80",
    inStock: true,
  },
  {
    id: "7",
    name: "کوله‌پشتی روزمره",
    category: "اکسسوری",
    price: 2750000,
    priceLabel: "۲٬۷۵۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80",
    inStock: true,
  },
  {
    id: "8",
    name: "دوربین کامپکت سفر",
    category: "صوتی",
    price: 12500000,
    priceLabel: "۱۲٬۵۰۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80",
    inStock: false,
  },
]

type SortKey = "newest" | "price-asc" | "price-desc" | "name"
type ViewMode = "grid" | "list"

const SORT_LABELS: Record<SortKey, string> = {
  newest: "جدیدترین",
  "price-asc": "ارزان‌ترین",
  "price-desc": "گران‌ترین",
  name: "نام الفبایی",
}

export function WishlistHub() {
  const [items, setItems] = React.useState(INITIAL)
  const [query, setQuery] = React.useState("")
  const [category, setCategory] = React.useState("all")
  const [sort, setSort] = React.useState<SortKey>("newest")
  const [view, setView] = React.useState<ViewMode>("grid")
  const [selected, setSelected] = React.useState<string[]>([])

  const filtered = React.useMemo(() => {
    let list = items.filter((item) => {
      const matchCat = category === "all" || item.category === category
      const matchQuery =
        !query.trim() ||
        item.name.includes(query) ||
        item.category.includes(query)
      return matchCat && matchQuery
    })
    list = [...list]
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price)
    else if (sort === "price-desc") list.sort((a, b) => b.price - a.price)
    else if (sort === "name")
      list.sort((a, b) => a.name.localeCompare(b.name, "fa"))
    return list
  }, [items, query, category, sort])

  const inStockCount = items.filter((i) => i.inStock).length

  function toggleSelect(id: string, checked: boolean) {
    setSelected((prev) =>
      checked ? [...prev, id] : prev.filter((x) => x !== id)
    )
  }

  function moveSelectedToCart() {
    setItems((prev) => prev.filter((x) => !selected.includes(x.id)))
    setSelected([])
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 space-y-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <Badge variant="secondary" className="mb-3">
              فروشگاه
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight">
              مرکز علاقه‌مندی‌ها
            </h2>
            <p className="mt-2 text-muted-foreground">
              <bdi dir="ltr">{items.length}</bdi> کالا ·{" "}
              <bdi dir="ltr">{inStockCount}</bdi> موجود
            </p>
          </div>
          {selected.length > 0 && (
            <Button onClick={moveSelectedToCart}>
              <ShoppingCartIcon className="size-4" />
              انتقال <bdi dir="ltr">{selected.length}</bdi> به سبد
            </Button>
          )}
        </div>

        <div className="flex flex-col gap-3 lg:flex-row">
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
            <SelectTrigger className="w-full lg:w-40" dir="rtl">
              <SelectValue placeholder="دسته" />
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              <SelectItem value="all">همه</SelectItem>
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
                onValueChange={(v) => setSort((v as SortKey) ?? "newest")}
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
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed px-6 py-16 text-center text-sm text-muted-foreground">
          موردی پیدا نشد.
        </p>
      ) : view === "grid" ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((item) => (
            <article key={item.id} className="group flex flex-col gap-3">
              <div className="relative aspect-square overflow-hidden rounded-xl border bg-muted">
                <img
                  src={item.image}
                  alt={item.name}
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute start-2 top-2">
                  <Checkbox
                    checked={selected.includes(item.id)}
                    onCheckedChange={(v) => toggleSelect(item.id, !!v)}
                    aria-label={`انتخاب ${item.name}`}
                    className="bg-background"
                  />
                </div>
                <HeartIcon className="absolute end-2 top-2 size-5 fill-primary text-primary drop-shadow" />
              </div>
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="line-clamp-1 font-medium">{item.name}</h3>
                  <Badge variant="outline" className="shrink-0">
                    {item.category}
                  </Badge>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  <bdi dir="ltr" className="tabular-nums">
                    {item.priceLabel}
                  </bdi>{" "}
                  تومان
                </p>
                <Button
                  className="mt-3 w-full"
                  size="sm"
                  disabled={!item.inStock}
                  onClick={() =>
                    setItems((prev) => prev.filter((x) => x.id !== item.id))
                  }
                >
                  {item.inStock ? "افزودن به سبد" : "ناموجود"}
                </Button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="divide-y rounded-xl border">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center"
            >
              <Checkbox
                checked={selected.includes(item.id)}
                onCheckedChange={(v) => toggleSelect(item.id, !!v)}
                aria-label={`انتخاب ${item.name}`}
              />
              <div className="size-16 shrink-0 overflow-hidden rounded-lg border bg-muted sm:size-20">
                <img
                  src={item.image}
                  alt={item.name}
                  className="size-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-medium">{item.name}</h3>
                  <Badge variant="outline">{item.category}</Badge>
                  {!item.inStock && (
                    <Badge variant="destructive">ناموجود</Badge>
                  )}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  <bdi dir="ltr" className="tabular-nums">
                    {item.priceLabel}
                  </bdi>{" "}
                  تومان
                </p>
              </div>
              <div className="flex gap-2">
                <Button size="sm" disabled={!item.inStock}>
                  به سبد
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={
                      <Button
                        variant="outline"
                        size="icon"
                        className="size-8"
                      />
                    }
                  >
                    <MoreHorizontalIcon className="size-4" />
                    <span className="sr-only">منو</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    dir="rtl"
                    lang="fa"
                    align="end"
                    className="w-40"
                  >
                    <DropdownMenuLabel>عملیات</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>مشاهده</DropdownMenuItem>
                    <DropdownMenuItem
                      variant="destructive"
                      onClick={() =>
                        setItems((prev) => prev.filter((x) => x.id !== item.id))
                      }
                    >
                      حذف
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      )}

      <Separator className="my-10" />

      <Card dir="rtl" lang="fa">
        <CardHeader className="text-start">
          <CardTitle className="text-lg">اشتراک لیست علاقه‌مندی</CardTitle>
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
              placeholder="نام دوست"
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
              ارسال لینک
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
