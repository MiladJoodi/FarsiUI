"use client"

import { ArrowLeftIcon, MailIcon } from "lucide-react"

import { Badge } from "@/registry/base-mira/ui/badge"
import { Button } from "@/registry/base-mira/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/base-mira/ui/empty"

export default function ComingSoonImage() {
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
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80"
              alt="نمای محصول در حال آماده‌سازی"
              className="aspect-[16/10] w-full object-cover"
            />
          </EmptyMedia>
          <Badge variant="secondary" className="mb-1">
            <bdi dir="ltr">Coming Soon</bdi>
          </Badge>
          <EmptyTitle>بازارچهٔ جدید در راه است</EmptyTitle>
          <EmptyDescription>
            طراحی نهایی شده؛ به‌زودی با امکانات تازه باز می‌شود.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Button>
            <MailIcon data-icon="inline-start" />
            عضویت در لیست انتظار
          </Button>
          <Button variant="outline">
            بازگشت
            <ArrowLeftIcon data-icon="inline-end" />
          </Button>
        </EmptyContent>
      </Empty>
    </section>
  )
}
