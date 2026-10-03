"use client"

import { CheckCircle2Icon } from "lucide-react"

import { Button } from "@/registry/base-lyra/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/base-lyra/ui/empty"

export function SuccessSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col items-center justify-center px-6 py-16"
    >
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <CheckCircle2Icon className="size-6 text-emerald-600 dark:text-emerald-400" />
          </EmptyMedia>
          <EmptyTitle>عملیات موفق بود</EmptyTitle>
          <EmptyDescription>
            تغییرات با موفقیت ذخیره شد. می‌توانید به کار ادامه دهید.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>ادامه</Button>
        </EmptyContent>
      </Empty>
    </section>
  )
}
