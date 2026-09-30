"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { Bubble, BubbleContent } from "@/styles/base-rhea/ui/bubble"
import { Button } from "@/styles/base-rhea/ui/button"
import {
  Collapsible,
  CollapsibleTrigger,
} from "@/styles/base-rhea/ui/collapsible"

const text = `بررسی دسترس‌پذیری دو حالت فوکوس را پیدا کرد که در حالت تاریک خیلی کم‌رنگ بودند.

مسیر دیالوگ، منو و دراور را بررسی کردم، چون هرکدام کنترل‌های فوکوس‌پذیر را داخل یک سطح لایه‌ای رندر می‌کنند.

دیالوگ و دراور مشکلی ندارند. منو باید توکن‌های هاور و فوکوس را از هم جدا کند تا فوکوس صفحه‌کلید وقتی اشاره‌گر درگیر نیست، همچنان دیده شود.

پیشنهاد می‌کنم این تغییر در فایل استایل انجام شود، نه در پریمیتیو، تا تم‌های دیگر بتوانند فوکوس موردنظر خودشان را انتخاب کنند.`

const previewLength = 180

export default function BubbleCollapsible() {
  const [open, setOpen] = React.useState(false)
  const isLong = text.length > previewLength
  const preview = `${text.slice(0, previewLength)}...`

  return (
    <div dir="rtl" className="flex w-full max-w-sm flex-col gap-8 py-4">
      <Bubble variant="muted">
        <BubbleContent>امروز چطور می‌تونم کمکت کنم؟</BubbleContent>
      </Bubble>

      <Bubble variant="muted" align="end">
        <BubbleContent className="whitespace-pre-line">
          <Collapsible open={open} onOpenChange={setOpen}>
            <div>{open || !isLong ? text : preview}</div>
            {isLong ? (
              <CollapsibleTrigger
                render={
                  <Button
                    variant="link"
                    className="gap-1 p-0 text-muted-foreground"
                  />
                }
              >
                {open ? "نمایش کمتر" : "نمایش بیشتر"}
                <ChevronDownIcon
                  data-icon="inline-end"
                  className="group-data-panel-open/button:rotate-180"
                />
              </CollapsibleTrigger>
            ) : null}
          </Collapsible>
        </BubbleContent>
      </Bubble>
    </div>
  )
}
