"use client"

import { CompassIcon, HomeIcon } from "lucide-react"

import { Button } from "@/registry/base-vega/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/base-vega/ui/empty"

export default function NotFoundImage() {
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
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80"
              alt="مسیر نامشخص"
              className="aspect-[16/10] w-full object-cover opacity-90"
            />
          </EmptyMedia>
          <EmptyTitle>این مسیر وجود ندارد</EmptyTitle>
          <EmptyDescription>
            صفحهٔ مورد نظر پیدا نشد. از نقشهٔ سایت یا صفحهٔ اصلی ادامه دهید.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Button>
            <HomeIcon data-icon="inline-start" />
            صفحه اصلی
          </Button>
          <Button variant="outline">
            <CompassIcon data-icon="inline-start" />
            کاوش
          </Button>
        </EmptyContent>
      </Empty>
    </section>
  )
}
