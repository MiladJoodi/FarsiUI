"use client"

import { PartyPopperIcon, ShareIcon } from "lucide-react"

import { Button } from "@/registry/bases/base/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/bases/base/ui/empty"

export default function SuccessImage() {
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
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&auto=format&fit=crop&q=80"
              alt="تیم در حال جشن موفقیت"
              className="aspect-[16/10] w-full object-cover"
            />
          </EmptyMedia>
          <EmptyTitle>ثبت‌نام کامل شد</EmptyTitle>
          <EmptyDescription>
            حساب شما آماده است. تیم را دعوت کنید یا مستقیم به داشبورد بروید.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Button>
            <PartyPopperIcon data-icon="inline-start" />
            رفتن به داشبورد
          </Button>
          <Button variant="outline">
            <ShareIcon data-icon="inline-start" />
            دعوت همکاران
          </Button>
        </EmptyContent>
      </Empty>
    </section>
  )
}
