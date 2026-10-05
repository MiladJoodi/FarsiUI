"use client"

import { SearchXIcon } from "lucide-react"

import { Button } from "@/registry/base-luma/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/base-luma/ui/empty"

export default function EmptySearchSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col items-center justify-center px-6 py-16"
    >
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <SearchXIcon className="size-6" />
          </EmptyMedia>
          <EmptyTitle>نتیجه‌ای پیدا نشد</EmptyTitle>
          <EmptyDescription>
            برای این جستجو موردی پیدا نشد. عبارت را تغییر دهید یا به صفحهٔ اصلی
            برگردید.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button type="button">بازگشت</Button>
        </EmptyContent>
      </Empty>
    </section>
  )
}
