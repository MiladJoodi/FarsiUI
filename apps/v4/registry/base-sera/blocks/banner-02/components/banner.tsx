"use client"

import { SparklesIcon } from "lucide-react"

import { Badge } from "@/registry/base-sera/ui/badge"
import { Button } from "@/registry/base-sera/ui/button"

export function BannerPromo() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh items-start justify-center bg-background p-6 md:items-center"
    >
      <div className="flex w-full max-w-4xl flex-col gap-3 rounded-xl border bg-card p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:gap-4 md:p-5">
        <div className="flex items-start gap-3">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted">
            <SparklesIcon className="size-4" />
          </div>
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-medium">پلن حرفه‌ای با ۲۰٪ تخفیف</p>
              <Badge variant="secondary">محدود</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              تا پایان هفته برای تیم‌های تازه‌وارد
            </p>
          </div>
        </div>
        <Button className="w-full shrink-0 sm:w-auto">مشاهدهٔ پلن‌ها</Button>
      </div>
    </div>
  )
}
