"use client"

import { CheckCircle2Icon, CopyIcon, ExternalLinkIcon } from "lucide-react"

import { Badge } from "@/registry/base-vega/ui/badge"
import { Button } from "@/registry/base-vega/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-vega/ui/card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/base-vega/ui/empty"
import { Separator } from "@/registry/base-vega/ui/separator"

export default function SuccessInContext() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">انتشار</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            وضعیت آخرین استقرار
          </p>
        </div>
        <Badge className="bg-emerald-600 text-white hover:bg-emerald-600">
          زنده
        </Badge>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
        <Card>
          <CardContent className="py-12">
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <CheckCircle2Icon className="size-6 text-emerald-600 dark:text-emerald-400" />
                </EmptyMedia>
                <EmptyTitle>انتشار با موفقیت انجام شد</EmptyTitle>
                <EmptyDescription className="tracking-normal">
                  نسخه ۲٫۴٫۱ روی محیط تولید قرار گرفت.
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent className="mt-4 flex-row justify-center gap-2">
                <Button>
                  <ExternalLinkIcon data-icon="inline-start" />
                  مشاهده سایت
                </Button>
                <Button variant="outline">
                  <CopyIcon data-icon="inline-start" />
                  کپی لینک
                </Button>
              </EmptyContent>
            </Empty>
          </CardContent>
        </Card>

        <Card className="h-fit">
          <CardHeader className="text-start">
            <CardTitle className="text-base">جزئیات</CardTitle>
            <CardDescription>خلاصه استقرار</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex justify-between gap-2">
              <span className="text-muted-foreground">شاخه</span>
              <span>اصلی</span>
            </div>
            <Separator />
            <div className="flex justify-between gap-2 tracking-normal">
              <span className="text-muted-foreground">شناسه انتشار</span>
              <span>کد-۸۴۲۹</span>
            </div>
            <Separator />
            <div className="flex justify-between gap-2 tracking-normal">
              <span className="text-muted-foreground">مدت</span>
              <span>۱ دقیقه و ۴۲ ثانیه</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
