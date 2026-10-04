"use client"

import { RocketIcon } from "lucide-react"

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

export default function ComingSoonSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col items-center justify-center px-6 py-16"
    >
      <Empty>
        <EmptyHeader>
          <Badge variant="secondary" className="mb-2">
            <bdi dir="ltr">Coming Soon</bdi>
          </Badge>
          <EmptyMedia variant="icon">
            <RocketIcon className="size-6" />
          </EmptyMedia>
          <EmptyTitle>به‌زودی در دسترس است</EmptyTitle>
          <EmptyDescription>
            روی این قابلیت کار می‌کنیم. به‌محض آماده شدن خبرتان می‌کنیم.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>خبرم کن</Button>
        </EmptyContent>
      </Empty>
    </section>
  )
}
