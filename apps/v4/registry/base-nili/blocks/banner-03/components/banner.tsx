"use client"

import * as React from "react"
import { InfoIcon, XIcon } from "lucide-react"

import { Button } from "@/registry/base-nili/ui/button"

export default function BannerDismissible() {
  const [open, setOpen] = React.useState(true)

  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6"
    >
      {open ? (
        <div className="flex w-full max-w-4xl items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4 md:items-center">
          <InfoIcon className="mt-0.5 size-5 shrink-0 text-primary md:mt-0" />
          <div className="min-w-0 flex-1">
            <p className="font-medium">نگهداری برنامه‌ریزی‌شده</p>
            <p className="mt-1 text-sm text-muted-foreground">
              جمعه ساعت ۲ تا ۴ بامداد سرویس برای به‌روزرسانی در دسترس نیست.
            </p>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            className="shrink-0"
            onClick={() => setOpen(false)}
            aria-label="بستن بنر"
          >
            <XIcon className="size-4" />
          </Button>
        </div>
      ) : (
        <Button variant="outline" onClick={() => setOpen(true)}>
          نمایش دوبارهٔ بنر
        </Button>
      )}
    </div>
  )
}
