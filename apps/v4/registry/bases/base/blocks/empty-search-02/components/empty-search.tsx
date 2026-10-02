"use client"

import { SearchXIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/bases/base/ui/card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/bases/base/ui/empty"

const SUGGESTIONS = ["هدفون", "ساعت هوشمند", "لامپ رومیزی"] as const

export function EmptySearchCard() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="items-center text-center">
          <Badge variant="secondary">جستجو</Badge>
        </CardHeader>
        <CardContent>
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <SearchXIcon className="size-6" />
              </EmptyMedia>
              <EmptyTitle>نتیجه‌ای پیدا نشد</EmptyTitle>
              <EmptyDescription>
                هیچ نتیجه‌ای برای{" "}
                <bdi dir="ltr" className="font-medium text-foreground">
                  wireless headphones
                </bdi>{" "}
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
        <CardFooter className="justify-center border-t">
          <Button variant="ghost">پاک کردن جستجو</Button>
        </CardFooter>
      </Card>
    </section>
  )
}
