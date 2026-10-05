"use client"

import { ShoppingBagIcon } from "lucide-react"

import { Button } from "@/registry/base-mira/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/base-mira/ui/empty"

export default function EmptyStateImage() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col items-center justify-center px-6 py-16 md:px-10"
    >
      <Empty className="gap-6">
        <EmptyHeader className="max-w-md">
          <EmptyMedia className="mb-2 w-full max-w-sm overflow-hidden rounded-2xl border bg-muted/30">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80"
              alt="ویترین خالی فروشگاه"
              className="aspect-[16/10] w-full object-cover"
            />
          </EmptyMedia>
          <EmptyTitle>سبد خرید خالی است</EmptyTitle>
          <EmptyDescription>
            هنوز محصولی اضافه نکرده‌اید. از فروشگاه دیدن کنید و اولین کالا را
            انتخاب کنید.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Button>
            <ShoppingBagIcon data-icon="inline-start" />
            رفتن به فروشگاه
          </Button>
          <Button variant="outline">مشاهده علاقه‌مندی‌ها</Button>
        </EmptyContent>
      </Empty>
    </section>
  )
}
