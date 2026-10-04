"use client"

import { InboxIcon } from "lucide-react"

import { Button } from "@/registry/base-rhea/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/base-rhea/ui/empty"

export default function EmptyStateSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col items-center justify-center px-6 py-16"
    >
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <InboxIcon className="size-6" />
          </EmptyMedia>
          <EmptyTitle>صندوق خالی است</EmptyTitle>
          <EmptyDescription>
            هنوز پیامی ندارید. وقتی پیام جدیدی برسد اینجا نمایش داده می‌شود.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>نوشتن پیام</Button>
        </EmptyContent>
      </Empty>
    </section>
  )
}
