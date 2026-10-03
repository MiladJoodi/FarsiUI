"use client"

import { CheckIcon, SparklesIcon } from "lucide-react"

import { Badge } from "@/registry/base-lyra/ui/badge"
import { Button } from "@/registry/base-lyra/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/base-lyra/ui/empty"

export function SuccessAnimated() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="relative mx-auto flex min-h-svh max-w-lg flex-col items-center justify-center overflow-hidden px-6 py-16 md:px-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(160_84%_39%/0.12),transparent_60%)]"
      />

      <Empty className="relative gap-6">
        <EmptyHeader className="max-w-md">
          <EmptyMedia className="relative mb-2 size-28">
            <span
              aria-hidden
              className="absolute inset-0 animate-ping rounded-full bg-emerald-500/25 [animation-duration:2s]"
            />
            <span
              aria-hidden
              className="absolute inset-3 animate-pulse rounded-full bg-emerald-500/15"
            />
            <span className="relative flex size-full items-center justify-center">
              <span className="flex size-16 animate-bounce items-center justify-center rounded-full bg-emerald-600 text-white shadow-sm [animation-duration:1.5s]">
                <CheckIcon className="size-8 stroke-[2.5]" />
              </span>
              <SparklesIcon
                aria-hidden
                className="absolute -end-1 -top-1 size-5 animate-pulse text-emerald-500"
              />
            </span>
          </EmptyMedia>
          <Badge className="mb-1 bg-emerald-600 text-white hover:bg-emerald-600">
            تمام شد
          </Badge>
          <EmptyTitle>همه‌چیز آماده است</EmptyTitle>
          <EmptyDescription>
            درخواست شما با موفقیت انجام شد. می‌توانید نتیجه را ببینید یا به
            صفحهٔ قبل برگردید.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Button>مشاهده نتیجه</Button>
          <Button variant="outline">بستن</Button>
        </EmptyContent>
      </Empty>
    </section>
  )
}
