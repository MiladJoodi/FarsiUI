"use client"

import * as React from "react"
import { XIcon } from "lucide-react"

import { Badge } from "@/registry/base-luma/ui/badge"
import { Button } from "@/registry/base-luma/ui/button"

export default function BannerFullBleed() {
  const [open, setOpen] = React.useState(true)

  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-4 md:p-8"
    >
      {open ? (
        <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl border shadow-sm">
          <img
            src="/farsiui/parsian.jpg"
            alt=""
            className="absolute inset-0 size-full object-cover"
          />
          <div aria-hidden className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div className="max-w-xl space-y-2">
              <Badge className="border-white/20 bg-white/15 text-white hover:bg-white/20">
                پیشنهاد ویژه
              </Badge>
              <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                تا ۵۰٪ تخفیف روی پلن تیمی
              </h2>
              <p className="text-sm text-white/80 md:text-base">
                فقط تا پایان ماه · کد:{" "}
                <bdi
                  dir="ltr"
                  className="inline-block font-medium tracking-normal [letter-spacing:0] whitespace-nowrap text-white"
                >
                  FARSIUI50
                </bdi>
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button size="lg">فعال‌سازی تخفیف</Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                جزئیات پلن
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/15 hover:text-white"
                onClick={() => setOpen(false)}
                aria-label="بستن بنر"
              >
                <XIcon className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <Button variant="outline" onClick={() => setOpen(true)}>
          نمایش دوبارهٔ بنر
        </Button>
      )}
    </div>
  )
}
