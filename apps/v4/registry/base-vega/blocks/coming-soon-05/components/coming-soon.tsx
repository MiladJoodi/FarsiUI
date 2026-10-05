"use client"

import { HourglassIcon, SparklesIcon } from "lucide-react"

import { Badge } from "@/registry/base-vega/ui/badge"
import { Button } from "@/registry/base-vega/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/base-vega/ui/empty"

export default function ComingSoonAnimated() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="relative mx-auto flex min-h-svh max-w-lg flex-col items-center justify-center overflow-hidden px-6 py-16 md:px-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(217_91%_60%/0.12),transparent_60%)]"
      />

      <Empty className="relative gap-6">
        <EmptyHeader className="max-w-md">
          <EmptyMedia className="relative mb-2 size-28">
            <span
              aria-hidden
              className="absolute inset-0 animate-ping rounded-full bg-sky-500/20 [animation-duration:2.2s]"
            />
            <span
              aria-hidden
              className="absolute inset-3 animate-pulse rounded-full bg-sky-500/10"
            />
            <span className="relative flex size-full items-center justify-center">
              <span className="flex size-16 animate-bounce items-center justify-center rounded-2xl border border-sky-500/30 bg-background shadow-sm [animation-duration:1.5s]">
                <HourglassIcon className="size-7 text-sky-600 dark:text-sky-400" />
              </span>
              <SparklesIcon
                aria-hidden
                className="absolute -end-1 -top-1 size-5 animate-pulse text-sky-500"
              />
            </span>
          </EmptyMedia>
          <Badge className="mb-1">
            <bdi dir="ltr">Coming Soon</bdi>
          </Badge>
          <EmptyTitle>چیزی بزرگ در راه است</EmptyTitle>
          <EmptyDescription>
            داریم آخرین جزئیات را جمع می‌کنیم. برای خبر انتشار عضو شوید.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Button>عضویت در لیست</Button>
          <Button variant="outline">بازگشت</Button>
        </EmptyContent>
      </Empty>
    </section>
  )
}
