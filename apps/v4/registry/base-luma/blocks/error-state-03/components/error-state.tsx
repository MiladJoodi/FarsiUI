"use client"

import { HomeIcon, RefreshCwIcon } from "lucide-react"

import { Button } from "@/registry/base-luma/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/base-luma/ui/empty"

export default function ErrorStateImage() {
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
              src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?w=800&auto=format&fit=crop&q=80"
              alt="قطع ارتباط شبکه"
              className="aspect-[16/10] w-full object-cover"
            />
          </EmptyMedia>
          <EmptyTitle>صفحه بارگذاری نشد</EmptyTitle>
          <EmptyDescription>
            احتمالاً ارتباط قطع شده یا آدرس اشتباه است. اتصال اینترنت را بررسی
            کنید و دوباره امتحان کنید.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Button>
            <RefreshCwIcon data-icon="inline-start" />
            تلاش مجدد
          </Button>
          <Button variant="outline">
            <HomeIcon data-icon="inline-start" />
            صفحه اصلی
          </Button>
        </EmptyContent>
      </Empty>
    </section>
  )
}
