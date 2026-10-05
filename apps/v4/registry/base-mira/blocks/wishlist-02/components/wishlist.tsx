"use client"

import * as React from "react"
import { HeartIcon, Trash2Icon } from "lucide-react"

import { Badge } from "@/registry/base-mira/ui/badge"
import { Button } from "@/registry/base-mira/ui/button"
import { Card, CardFooter, CardHeader } from "@/registry/base-mira/ui/card"

type Item = {
  id: string
  name: string
  price: string
  badge?: string
  image: string
}

const INITIAL: Item[] = [
  {
    id: "1",
    name: "هدفون بی‌سیم آرام",
    price: "۴٬۲۹۰٬۰۰۰",
    badge: "تخفیف",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    name: "کیف چرم دستی",
    price: "۳٬۱۵۰٬۰۰۰",
    badge: "جدید",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "3",
    name: "لامپ رومیزی مینیمال",
    price: "۱٬۸۵۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "4",
    name: "کفش دویدن سبک",
    price: "۵٬۴۰۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
  },
]

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export default function WishlistCards() {
  const [items, setItems] = React.useState(INITIAL)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">لیست ذخیره‌شده</h2>
          <p className="mt-2 text-muted-foreground">
            افزودن به سبد یا حذف از علاقه‌مندی
          </p>
        </div>
        <p className="text-sm tracking-normal text-muted-foreground">
          {toFa(items.length)} کالا
        </p>
      </div>

      {items.length === 0 ? (
        <p className="rounded-xl border border-dashed bg-card px-6 py-16 text-center text-sm text-muted-foreground">
          هنوز چیزی به علاقه‌مندی‌ها اضافه نکرده‌اید.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Card key={item.id} className="gap-0 overflow-hidden bg-card py-0">
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.name}
                  className="size-full object-cover"
                />
                {item.badge ? (
                  <Badge
                    variant="outline"
                    className="absolute start-3 top-3 border bg-background"
                  >
                    {item.badge}
                  </Badge>
                ) : null}
                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  className="absolute end-2 top-2 size-8 bg-background/90"
                  onClick={() =>
                    setItems((prev) => prev.filter((x) => x.id !== item.id))
                  }
                  aria-label="حذف از علاقه‌مندی"
                >
                  <Trash2Icon className="size-4" />
                </Button>
              </div>
              <CardHeader className="gap-1 px-4 pt-4 pb-3 text-start">
                <h3 className="line-clamp-1 text-sm font-medium">
                  {item.name}
                </h3>
                <p className="text-sm tracking-normal text-muted-foreground">
                  {item.price} تومان
                </p>
              </CardHeader>
              <CardFooter className="px-4 pt-0 pb-4">
                <Button type="button" className="w-full" size="sm">
                  افزودن به سبد
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {items.length > 0 && (
        <div className="mt-6 flex justify-center">
          <Button type="button" variant="outline">
            <HeartIcon className="size-4 fill-primary text-primary" />
            افزودن همه به سبد
          </Button>
        </div>
      )}
    </section>
  )
}
