"use client"

import {
  CircleAlertIcon,
  MoreHorizontalIcon,
  RefreshCwIcon,
} from "lucide-react"

import { Badge } from "@/registry/base-luma/ui/badge"
import { Button } from "@/registry/base-luma/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-luma/ui/card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/base-luma/ui/empty"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-luma/ui/popover"
import { Separator } from "@/registry/base-luma/ui/separator"

export default function ErrorStateInContext() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">گزارش‌ها</h1>
          <p className="mt-1 text-sm text-muted-foreground">آمار هفتگی محصول</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>
            خروجی
          </Button>
          <Popover>
            <PopoverTrigger
              render={
                <Button variant="outline" size="icon-sm" aria-label="عملیات" />
              }
            >
              <MoreHorizontalIcon />
            </PopoverTrigger>
            <PopoverContent align="start" className="w-40 p-1" dir="rtl">
              <button
                type="button"
                className="flex w-full rounded-md px-2 py-1.5 text-sm hover:bg-muted"
              >
                بازه زمانی
              </button>
              <button
                type="button"
                className="flex w-full rounded-md px-2 py-1.5 text-sm hover:bg-muted"
              >
                اشتراک‌گذاری
              </button>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
        <Card>
          <CardHeader className="flex-row items-center justify-between space-y-0 text-start">
            <div>
              <CardTitle className="text-base">نمای کلی</CardTitle>
              <CardDescription>داده‌ها بارگذاری نشدند</CardDescription>
            </div>
            <Badge variant="destructive">خطا</Badge>
          </CardHeader>
          <CardContent className="border-t py-14">
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <CircleAlertIcon className="size-6 text-destructive" />
                </EmptyMedia>
                <EmptyTitle>دریافت داده ناموفق بود</EmptyTitle>
                <EmptyDescription>
                  سرویس گزارش موقتاً در دسترس نیست. کد{" "}
                  <span className="tracking-normal">۵۰۲</span>
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent className="mt-4 flex-row justify-center gap-2">
                <Button>
                  <RefreshCwIcon data-icon="inline-start" />
                  تلاش مجدد
                </Button>
                <Button variant="outline">جزئیات خطا</Button>
              </EmptyContent>
            </Empty>
          </CardContent>
        </Card>

        <Card className="h-fit opacity-60">
          <CardHeader className="text-start">
            <CardTitle className="text-base">خلاصه</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <div className="flex justify-between gap-2">
              <span>بازدید</span>
              <span>—</span>
            </div>
            <Separator />
            <div className="flex justify-between gap-2">
              <span>تبدیل</span>
              <span>—</span>
            </div>
            <Separator />
            <div className="flex justify-between gap-2">
              <span>درآمد</span>
              <span>—</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
