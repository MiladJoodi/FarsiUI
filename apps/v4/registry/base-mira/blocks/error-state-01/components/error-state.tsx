"use client"

import { CircleAlertIcon } from "lucide-react"

import { Button } from "@/registry/base-mira/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/base-mira/ui/empty"

export default function ErrorStateSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col items-center justify-center px-6 py-16"
    >
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <CircleAlertIcon className="size-6 text-destructive" />
          </EmptyMedia>
          <EmptyTitle>خطایی رخ داد</EmptyTitle>
          <EmptyDescription>
            درخواست انجام نشد. لطفاً دوباره تلاش کنید یا کمی بعد مراجعه کنید.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>تلاش مجدد</Button>
        </EmptyContent>
      </Empty>
    </section>
  )
}
