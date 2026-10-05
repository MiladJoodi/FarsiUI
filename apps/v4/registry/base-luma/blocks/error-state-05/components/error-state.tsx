"use client"

import { CircleAlertIcon, RefreshCwIcon, WifiOffIcon } from "lucide-react"

import { Badge } from "@/registry/base-luma/ui/badge"
import { Button } from "@/registry/base-luma/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/base-luma/ui/empty"

export default function ErrorStateAnimated() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="relative mx-auto flex min-h-svh max-w-lg flex-col items-center justify-center overflow-hidden px-6 py-16 md:px-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--destructive)/0.1),transparent_60%)]"
      />

      <Empty className="relative gap-6">
        <EmptyHeader className="max-w-md">
          <EmptyMedia className="relative mb-2 size-28">
            <span
              aria-hidden
              className="absolute inset-0 animate-ping rounded-full bg-destructive/20 [animation-duration:2.2s]"
            />
            <span
              aria-hidden
              className="absolute inset-3 animate-pulse rounded-full bg-destructive/10"
            />
            <span className="relative flex size-full items-center justify-center">
              <span className="flex size-16 animate-bounce items-center justify-center rounded-2xl border border-destructive/30 bg-background shadow-sm [animation-duration:1.6s]">
                <WifiOffIcon className="size-7 text-destructive" />
              </span>
              <CircleAlertIcon
                aria-hidden
                className="absolute -end-1 -top-1 size-5 animate-pulse text-destructive"
              />
            </span>
          </EmptyMedia>
          <Badge variant="destructive" className="mb-1">
            آفلاین
          </Badge>
          <EmptyTitle>ارتباط قطع شد</EmptyTitle>
          <EmptyDescription>
            به اینترنت وصل نیستید. پس از برقراری اتصال، دوباره تلاش کنید.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Button>
            <RefreshCwIcon data-icon="inline-start" />
            تلاش مجدد
          </Button>
          <Button variant="outline">حالت آفلاین</Button>
        </EmptyContent>
      </Empty>
    </section>
  )
}
