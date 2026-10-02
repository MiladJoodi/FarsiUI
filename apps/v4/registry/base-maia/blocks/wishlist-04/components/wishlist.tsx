"use client"

import * as React from "react"
import { MoreHorizontalIcon, ShoppingCartIcon } from "lucide-react"

import { Badge } from "@/registry/base-maia/ui/badge"
import { Button } from "@/registry/base-maia/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/base-maia/ui/dropdown-menu"

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
    inStock: false,
  },
]

type SortKey = "newest" | "price-asc" | "price-desc" | "name"

const SORT_LABELS: Record<SortKey, string> = {
  newest: "جدیدترین",
  "price-asc": "ارزان‌ترین",
  "price-desc": "گران‌ترین",
  name: "نام الفبایی",
}

export function WishlistActions() {
  const [items, setItems] = React.useState(INITIAL)
  const [sort, setSort] = React.useState<SortKey>("newest")
  const [moved, setMoved] = React.useState(0)

  const sorted = React.useMemo(() => {
    const list = [...items]
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price)
    else if (sort === "price-desc") list.sort((a, b) => b.price - a.price)
    else if (sort === "name")
      list.sort((a, b) => a.name.localeCompare(b.name, "fa"))
    return list
  }, [items, sort])

  function moveToCart(id: string) {
    setItems((prev) => prev.filter((x) => x.id !== id))
    setMoved((n) => n + 1)
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            عملیات علاقه‌مندی
          </h2>
          <p className="mt-2 text-muted-foreground">
            مرتب‌سازی و منوی عملیات راست‌چین
            {moved > 0 && (
              <>
                {" · "}
                <bdi dir="ltr">{moved}</bdi> به سبد منتقل شد
              </>
            )}
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={<Button variant="outline" className="w-full sm:w-auto" />}
          >
            مرتب‌سازی: {SORT_LABELS[sort]}
          </DropdownMenuTrigger>
          <DropdownMenuContent dir="rtl" lang="fa" align="end" className="w-44">
            <DropdownMenuLabel>مرتب‌سازی بر اساس</DropdownMenuLabel>
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
      </div>

      {sorted.length === 0 ? (
        <p className="rounded-xl border border-dashed px-6 py-16 text-center text-sm text-muted-foreground">
          لیست علاقه‌مندی خالی است.
        </p>
      ) : (
        <div className="divide-y rounded-xl border">
          {sorted.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center"
            >
              <div className="size-20 shrink-0 overflow-hidden rounded-lg border bg-muted sm:size-24">
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
                  <Badge variant={item.inStock ? "secondary" : "destructive"}>
                    {item.inStock ? "موجود" : "ناموجود"}
                  </Badge>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  <bdi dir="ltr" className="tabular-nums">
                    {item.priceLabel}
                  </bdi>{" "}
                  تومان
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  disabled={!item.inStock}
                  onClick={() => moveToCart(item.id)}
                >
                  <ShoppingCartIcon className="size-4" />
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
                    <span className="sr-only">منوی کالا</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    dir="rtl"
                    lang="fa"
                    align="end"
                    className="w-40"
                  >
                    <DropdownMenuLabel>عملیات</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>مشاهده محصول</DropdownMenuItem>
                    <DropdownMenuItem>اشتراک‌گذاری</DropdownMenuItem>
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
    </section>
  )
}
