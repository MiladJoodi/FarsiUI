"use client"

import {
  CircleAlertIcon,
  MoreHorizontalIcon,
  RefreshCwIcon,
} from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/bases/base/ui/empty"
import { Separator } from "@/registry/bases/base/ui/separator"

export function ErrorStateInContext() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">گزارش‌ها</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            آمار هفتگی محصول
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>
            خروجی
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="outline" size="icon-sm" aria-label="بیشتر" />
              }
            >
              <MoreHorizontalIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" dir="rtl" lang="fa">
              <DropdownMenuItem>بازه زمانی</DropdownMenuItem>
              <DropdownMenuItem>اشتراک‌گذاری</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
                  <bdi dir="ltr">HTTP 502</bdi>
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
