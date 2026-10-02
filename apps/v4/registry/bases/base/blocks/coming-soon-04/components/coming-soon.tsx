"use client"

import { ClockIcon, EyeIcon, RocketIcon } from "lucide-react"

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
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/bases/base/ui/empty"
import { Separator } from "@/registry/bases/base/ui/separator"

export function ComingSoonInContext() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">تحلیل پیشرفته</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            این بخش هنوز منتشر نشده است
          </p>
        </div>
        <Badge variant="secondary">
          <bdi dir="ltr">Coming Soon</bdi>
        </Badge>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
        <Card className="overflow-hidden">
          <div className="border-b bg-muted/30">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&auto=format&fit=crop&q=80"
              alt="پیش‌نمایش داشبورد تحلیل"
              className="aspect-[21/9] w-full object-cover opacity-80"
            />
          </div>
          <CardContent className="py-10">
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <RocketIcon className="size-6" />
                </EmptyMedia>
                <EmptyTitle>گزارش‌های هوشمند به‌زودی</EmptyTitle>
                <EmptyDescription>
                  فیلترهای پیشرفته، نمودارهای تعاملی و خروجی PDF در نسخهٔ بعدی
                  می‌آید.
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent className="mt-4 flex-row justify-center gap-2">
                <Button>
                  <EyeIcon data-icon="inline-start" />
                  پیش‌نمایش خصوصی
                </Button>
                <Button variant="outline">بازگشت به داشبورد</Button>
              </EmptyContent>
            </Empty>
          </CardContent>
        </Card>

        <Card className="h-fit">
          <CardHeader className="text-start">
            <CardTitle className="text-base">برنامهٔ انتشار</CardTitle>
            <CardDescription>وضعیت فعلی قابلیت</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex justify-between gap-2">
              <span className="text-muted-foreground">وضعیت</span>
              <span className="inline-flex items-center gap-1">
                <ClockIcon className="size-3.5" />
                در حال ساخت
              </span>
            </div>
            <Separator />
            <div className="flex justify-between gap-2">
              <span className="text-muted-foreground">نسخهٔ هدف</span>
              <bdi dir="ltr">v3.2</bdi>
            </div>
            <Separator />
            <div className="flex justify-between gap-2">
              <span className="text-muted-foreground">اطلاع‌رسانی</span>
              <span>فعال</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
