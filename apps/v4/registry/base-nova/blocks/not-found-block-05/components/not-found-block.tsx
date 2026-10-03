"use client"

import { HomeIcon, MapPinOffIcon, SearchIcon } from "lucide-react"

import { Badge } from "@/registry/base-nova/ui/badge"
import { Button } from "@/registry/base-nova/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/base-nova/ui/empty"

export function NotFoundAnimated() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="relative mx-auto flex min-h-svh max-w-lg flex-col items-center justify-center overflow-hidden px-6 py-16 md:px-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--muted-foreground)/0.08),transparent_60%)]"
      />

      <Empty className="relative gap-6">
        <EmptyHeader className="max-w-md">
          <EmptyMedia className="relative mb-2 size-28">
            <span
              aria-hidden
              className="absolute inset-0 animate-ping rounded-full bg-muted-foreground/15 [animation-duration:2.4s]"
            />
            <span
              aria-hidden
              className="absolute inset-3 animate-pulse rounded-full bg-muted/60"
            />
            <span className="relative flex size-full items-center justify-center">
              <span className="flex size-16 animate-bounce items-center justify-center rounded-2xl border bg-background shadow-sm [animation-duration:1.8s]">
                <MapPinOffIcon className="size-7 text-muted-foreground" />
              </span>
              <span className="absolute -bottom-1 animate-pulse rounded-full border bg-background px-2 py-0.5 text-[10px] font-semibold tracking-normal">
                ۴۰۴
              </span>
            </span>
          </EmptyMedia>
          <Badge variant="secondary" className="mb-1">
            گم‌شده
          </Badge>
          <EmptyTitle>اینجا خبری نیست</EmptyTitle>
          <EmptyDescription>
            صفحه‌ای که دنبالش هستید پیدا نشد. شاید آدرس را اشتباه وارد کرده
            باشید.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Button>
            <HomeIcon data-icon="inline-start" />
            خانه
          </Button>
          <Button variant="outline">
            <SearchIcon data-icon="inline-start" className="-scale-x-100" />
            جستجو
          </Button>
        </EmptyContent>
      </Empty>
    </section>
  )
}
