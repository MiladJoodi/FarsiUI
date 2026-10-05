"use client"

import { ArrowRightIcon, RssIcon } from "lucide-react"

import { Button } from "@/registry/base-lyra/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/base-lyra/ui/empty"

export default function MaintenanceImage() {
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
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80"
              alt="مهندسان در حال کار روی تجهیزات"
              className="aspect-[16/10] w-full object-cover"
            />
          </EmptyMedia>
          <EmptyTitle>در حال ارتقا هستیم</EmptyTitle>
          <EmptyDescription>
            تیم فنی مشغول بهبود زیرساخت است. به‌زودی با سرعت و پایداری بیشتر
            برمی‌گردیم.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Button>
            <RssIcon data-icon="inline-start" />
            صفحهٔ وضعیت
          </Button>
          <Button variant="outline">
            بازگشت
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
        </EmptyContent>
      </Empty>
    </section>
  )
}
