"use client"

import { FileQuestionIcon } from "lucide-react"

import { Button } from "@/registry/base-maia/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/base-maia/ui/empty"

export default function NotFoundSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col items-center justify-center px-6 py-16"
    >
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <FileQuestionIcon className="size-6" />
          </EmptyMedia>
          <EmptyTitle>صفحه پیدا نشد</EmptyTitle>
          <EmptyDescription>
            آدرسی که وارد کرده‌اید وجود ندارد یا جابه‌جا شده است.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>بازگشت به خانه</Button>
        </EmptyContent>
      </Empty>
    </section>
  )
}
