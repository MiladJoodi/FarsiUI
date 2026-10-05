"use client"

import { ConstructionIcon, ExternalLinkIcon, RefreshCwIcon } from "lucide-react"

import { Badge } from "@/registry/base-maia/ui/badge"
import { Button } from "@/registry/base-maia/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-maia/ui/card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/base-maia/ui/empty"
import { Separator } from "@/registry/base-maia/ui/separator"

export default function MaintenanceInContext() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">داشبورد</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            برخی سرویس‌ها موقتاً محدود شده‌اند
          </p>
        </div>
        <Badge variant="secondary">نگهداری</Badge>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
        <Card>
          <CardContent className="py-12">
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <ConstructionIcon className="size-6" />
                </EmptyMedia>
                <EmptyTitle>بخش گزارش‌ها در دسترس نیست</EmptyTitle>
                <EmptyDescription>
                  در حال به‌روزرسانی پایگاه داده هستیم. بقیهٔ داشبورد قابل
                  استفاده است.
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent className="mt-4 flex-row justify-center gap-2">
                <Button>
                  <RefreshCwIcon data-icon="inline-start" />
                  بررسی مجدد
                </Button>
                <Button variant="outline">
                  <ExternalLinkIcon data-icon="inline-start" />
                  جزئیات
                </Button>
              </EmptyContent>
            </Empty>
          </CardContent>
        </Card>

        <Card className="h-fit">
          <CardHeader className="text-start">
            <CardTitle className="text-base">زمان‌بندی</CardTitle>
            <CardDescription>پنجرهٔ نگهداری فعلی</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex justify-between gap-2">
              <span className="text-muted-foreground">شروع</span>
              <bdi dir="ltr">۱۴۰۵/۰۷/۱۰ · ۲۲:۳۰</bdi>
            </div>
            <Separator />
            <div className="flex justify-between gap-2">
              <span className="text-muted-foreground">پایان تقریبی</span>
              <bdi dir="ltr">۱۴۰۵/۰۷/۱۱ · ۰۰:۱۵</bdi>
            </div>
            <Separator />
            <div className="flex justify-between gap-2">
              <span className="text-muted-foreground">تأثیر</span>
              <span>گزارش‌ها و خروجی</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
