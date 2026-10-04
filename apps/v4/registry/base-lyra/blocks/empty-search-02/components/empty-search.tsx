"use client"

import { SearchXIcon } from "lucide-react"

import { Badge } from "@/registry/base-lyra/ui/badge"
import { Button } from "@/registry/base-lyra/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/base-lyra/ui/card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/base-lyra/ui/empty"

const SUGGESTIONS = ["هدفون", "ساعت هوشمند", "لامپ رومیزی"] as const

export default function EmptySearchCard() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="gap-0 bg-card py-0">
        <CardHeader className="items-center border-b py-4 text-center">
          <Badge variant="secondary">جستجو</Badge>
        </CardHeader>
        <CardContent className="py-6">
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <SearchXIcon className="size-6" />
              </EmptyMedia>
              <EmptyTitle>نتیجه‌ای پیدا نشد</EmptyTitle>
              <EmptyDescription>
                هیچ نتیجه‌ای برای{" "}
                <span className="font-medium text-foreground">
                  هدفون بی‌سیم
                </span>{" "}
                پیدا نشد.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent className="gap-3">
              <p className="text-sm text-muted-foreground">پیشنهادها</p>
              <div className="flex flex-wrap justify-center gap-2">
                {SUGGESTIONS.map((s) => (
                  <Button key={s} type="button" variant="outline" size="sm">
                    {s}
                  </Button>
                ))}
              </div>
            </EmptyContent>
          </Empty>
        </CardContent>
        <CardFooter className="justify-center gap-3 border-t py-4">
          <Button type="button" variant="ghost">
            پاک کردن جستجو
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
