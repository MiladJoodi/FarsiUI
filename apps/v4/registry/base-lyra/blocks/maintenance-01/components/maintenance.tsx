"use client"

import { WrenchIcon } from "lucide-react"

import { Button } from "@/registry/base-lyra/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/base-lyra/ui/empty"

export default function MaintenanceSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col items-center justify-center px-6 py-16"
    >
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <WrenchIcon className="size-6" />
          </EmptyMedia>
          <EmptyTitle>در حال تعمیر و نگهداری</EmptyTitle>
          <EmptyDescription>
            برای بهبود سرویس، موقتاً در دسترس نیستیم. کمی بعد دوباره سر بزنید.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button variant="outline">بازگشت به صفحهٔ اصلی</Button>
        </EmptyContent>
      </Empty>
    </section>
  )
}
