"use client"

import * as React from "react"
import { HeartIcon, Share2Icon } from "lucide-react"

import { Badge } from "@/registry/base-luma/ui/badge"
import { Button } from "@/registry/base-luma/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-luma/ui/popover"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/base-luma/ui/tabs"

const IMAGES = [
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1546435770-a3e426b57678?w=800&auto=format&fit=crop&q=80",
] as const

export function ProductDetailsTabs() {
  const [active, setActive] = React.useState(0)
  const [liked, setLiked] = React.useState(false)
  const [shareOpen, setShareOpen] = React.useState(false)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-3">
          <div className="aspect-square overflow-hidden rounded-2xl border bg-muted">
            <img
              src={IMAGES[active]}
              alt="هدفون بی‌سیم آرام"
              className="size-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {IMAGES.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setActive(index)}
                className={`aspect-square overflow-hidden rounded-xl border bg-muted ${
                  active === index ? "ring-2 ring-primary ring-offset-2" : ""
                }`}
              >
                <img src={src} alt="" className="size-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <Badge variant="outline" className="border">
              صوتی
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight">
              هدفون بی‌سیم آرام
            </h1>
            <p className="text-xl tracking-normal">
              <span className="font-semibold">۴٬۲۹۰٬۰۰۰</span>{" "}
              <span className="text-base text-muted-foreground">تومان</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button type="button" size="lg" className="flex-1 sm:flex-none">
              افزودن به سبد
            </Button>
            <Button
              type="button"
              size="lg"
              variant="outline"
              onClick={() => setLiked((v) => !v)}
              aria-label={liked ? "حذف از علاقه‌مندی" : "افزودن به علاقه‌مندی"}
            >
              <HeartIcon
                className={`size-4 ${liked ? "fill-primary text-primary" : ""}`}
              />
              علاقه‌مندی
            </Button>
            <Popover open={shareOpen} onOpenChange={setShareOpen}>
              <PopoverTrigger
                render={<Button type="button" size="lg" variant="outline" />}
              >
                <Share2Icon className="size-4" />
                اشتراک
              </PopoverTrigger>
              <PopoverContent
                dir="rtl"
                lang="fa"
                align="end"
                className="w-44 space-y-1 p-2"
              >
                <p className="px-2 py-1.5 text-sm font-medium">اشتراک‌گذاری</p>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-8 w-full justify-start"
                  onClick={() => setShareOpen(false)}
                >
                  کپی لینک
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-8 w-full justify-start"
                  onClick={() => setShareOpen(false)}
                >
                  تلگرام
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-8 w-full justify-start"
                  onClick={() => setShareOpen(false)}
                >
                  ایمیل
                </Button>
              </PopoverContent>
            </Popover>
          </div>

          <Tabs defaultValue="desc" dir="rtl" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="desc">توضیحات</TabsTrigger>
              <TabsTrigger value="spec">مشخصات</TabsTrigger>
              <TabsTrigger value="reviews">نظرات</TabsTrigger>
            </TabsList>
            <TabsContent
              value="desc"
              className="mt-4 text-sm leading-relaxed text-muted-foreground"
            >
              نویزگیری فعال، میکروفون دوگانه و شارژ سریع؛ مناسب جلسات آنلاین و
              مسیر روزانه.
            </TabsContent>
            <TabsContent value="spec" className="mt-4">
              <dl className="space-y-2 text-sm">
                {[
                  ["باتری", "تا ۳۰ ساعت"],
                  ["اتصال", "بلوتوث ۵٫۳"],
                  ["وزن", "۲۴۵ گرم"],
                  ["گارانتی", "۱۸ ماه"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-center justify-between gap-4 border-b py-2 last:border-0"
                  >
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="font-medium tracking-normal">{v}</dd>
                  </div>
                ))}
              </dl>
            </TabsContent>
            <TabsContent value="reviews" className="mt-4 space-y-4">
              {[
                {
                  name: "سارا محمدی",
                  text: "صدای تمیز و راحت روی سر؛ باتری واقعاً دوام می‌آورد.",
                },
                {
                  name: "علی رضایی",
                  text: "نویزگیری برای مترو عالی است. بسته‌بندی هم مرتب بود.",
                },
              ].map((review) => (
                <div
                  key={review.name}
                  className="rounded-xl border bg-card p-4"
                >
                  <p className="text-sm font-medium">{review.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {review.text}
                  </p>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
