"use client"

import { CogIcon, WrenchIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/bases/base/ui/empty"

export default function MaintenanceAnimated() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="relative mx-auto flex min-h-svh max-w-lg flex-col items-center justify-center overflow-hidden px-6 py-16 md:px-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(45_93%_47%/0.12),transparent_60%)]"
      />

      <Empty className="relative gap-6">
        <EmptyHeader className="max-w-md">
          <EmptyMedia className="relative mb-2 size-28">
            <span
              aria-hidden
              className="absolute inset-0 animate-ping rounded-full bg-amber-500/20 [animation-duration:2.2s]"
            />
            <span
              aria-hidden
              className="absolute inset-3 animate-pulse rounded-full bg-amber-500/10"
            />
            <span className="relative flex size-full items-center justify-center">
              <span className="flex size-16 items-center justify-center rounded-2xl border border-amber-500/30 bg-background shadow-sm">
                <WrenchIcon className="size-7 animate-bounce text-amber-600 [animation-duration:1.4s] dark:text-amber-400" />
              </span>
              <CogIcon
                aria-hidden
                className="absolute -end-1 -top-1 size-6 animate-spin text-amber-500 [animation-duration:3s]"
              />
            </span>
          </EmptyMedia>
          <Badge className="mb-1 bg-amber-600 text-white hover:bg-amber-600">
            در حال کار
          </Badge>
          <EmptyTitle>چرخ‌دنده‌ها در حرکت‌اند</EmptyTitle>
          <EmptyDescription>
            سیستم را برای شما بهتر می‌کنیم. چند دقیقه صبر کنید و دوباره تلاش کنید.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Button>تلاش مجدد</Button>
          <Button variant="outline">صفحهٔ وضعیت</Button>
        </EmptyContent>
      </Empty>
    </section>
  )
}
