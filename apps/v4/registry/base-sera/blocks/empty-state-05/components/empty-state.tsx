"use client"

import { PackageIcon, PlusIcon, SparklesIcon } from "lucide-react"

import { Badge } from "@/registry/base-sera/ui/badge"
import { Button } from "@/registry/base-sera/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/base-sera/ui/empty"

export default function EmptyStateAnimated() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="relative mx-auto flex min-h-svh max-w-lg flex-col items-center justify-center overflow-hidden px-6 py-16 md:px-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_60%)]"
      />

      <Empty className="relative gap-6">
        <EmptyHeader className="max-w-md">
          <EmptyMedia className="relative mb-2 size-28">
            <span
              aria-hidden
              className="absolute inset-0 animate-ping rounded-full bg-primary/15 [animation-duration:2.4s]"
            />
            <span
              aria-hidden
              className="absolute inset-3 animate-pulse rounded-full bg-primary/10"
            />
            <span className="relative flex size-full items-center justify-center">
              <span className="flex size-16 animate-bounce items-center justify-center rounded-2xl border bg-background shadow-sm [animation-duration:1.8s]">
                <PackageIcon className="size-7 text-primary" />
              </span>
              <SparklesIcon
                aria-hidden
                className="absolute -end-1 -top-1 size-5 animate-pulse text-primary"
              />
            </span>
          </EmptyMedia>
          <Badge variant="secondary" className="mb-1">
            شروع سریع
          </Badge>
          <EmptyTitle>هنوز چیزی اینجا نیست</EmptyTitle>
          <EmptyDescription>
            فضای کار خالی است. اولین آیتم را اضافه کنید تا داشبورد جان بگیرد.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Button>
            <PlusIcon data-icon="inline-start" />
            افزودن آیتم
          </Button>
          <Button variant="outline">نمونه آماده</Button>
        </EmptyContent>
      </Empty>
    </section>
  )
}
