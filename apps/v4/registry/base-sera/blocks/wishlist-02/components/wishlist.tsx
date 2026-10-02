"use client"

import * as React from "react"
import { HeartIcon, Trash2Icon } from "lucide-react"

import { Badge } from "@/registry/base-sera/ui/badge"
import { Button } from "@/registry/base-sera/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/base-sera/ui/card"

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

export function WishlistCards() {
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
        <p className="text-sm text-muted-foreground">
          <bdi dir="ltr">{items.length}</bdi> کالا
        </p>
      </div>

      {items.length === 0 ? (
        <p className="rounded-xl border border-dashed px-6 py-16 text-center text-sm text-muted-foreground">
          هنوز چیزی به علاقه‌مندی‌ها اضافه نکرده‌اید.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Card key={item.id} className="overflow-hidden py-0">
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.name}
                  className="size-full object-cover"
                />
                {item.badge ? (
                  <Badge className="absolute start-3 top-3">{item.badge}</Badge>
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
              <CardHeader className="gap-1 px-4 pt-4 pb-0 text-start">
                <h3 className="line-clamp-1 text-sm font-medium">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  <bdi dir="ltr" className="tabular-nums">
                    {item.price}
                  </bdi>{" "}
                  تومان
                </p>
              </CardHeader>
              <CardContent className="px-4 pt-2" />
              <CardFooter className="px-4 pt-0 pb-4">
                <Button className="w-full" size="sm">
                  افزودن به سبد
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {items.length > 0 && (
        <div className="mt-6 flex justify-center">
          <Button variant="outline">
            <HeartIcon className="size-4 fill-primary text-primary" />
            افزودن همه به سبد
          </Button>
        </div>
      )}
    </section>
  )
}
