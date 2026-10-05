"use client"

import { Badge } from "@/registry/base-maia/ui/badge"
import { Button } from "@/registry/base-maia/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-maia/ui/card"
import { Spinner } from "@/registry/base-maia/ui/spinner"

export default function LoadingButtonsInline() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <Badge variant="secondary" className="mb-2 w-fit">
            در حال پردازش
          </Badge>
          <CardTitle>اقدامات در حال بارگذاری</CardTitle>
          <CardDescription>اسپینر داخل دکمه، بج و متن</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-3">
            <Button disabled>
              <Spinner data-icon="inline-start" />
              ذخیره…
            </Button>
            <Button variant="outline" disabled>
              <Spinner data-icon="inline-start" />
              ارسال
            </Button>
            <Button
              variant="secondary"
              disabled
              size="icon"
              aria-label="بارگذاری"
            >
              <Spinner />
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">
              <Spinner data-icon="inline-start" className="size-3" />
              همگام‌سازی
            </Badge>
            <Badge variant="outline">
              <Spinner data-icon="inline-start" className="size-3" />
              در صف
            </Badge>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Spinner className="size-4" />
            در حال بارگذاری جزئیات سفارش…
          </div>
        </CardContent>
        <CardFooter className="border-t text-xs text-muted-foreground">
          وضعیت: در انتظار
        </CardFooter>
      </Card>
    </section>
  )
}
