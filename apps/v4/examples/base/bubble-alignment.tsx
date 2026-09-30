"use client"

import { Bubble, BubbleContent } from "@/styles/base-rhea/ui/bubble"

export default function BubbleAlignmentDemo() {
  return (
    <div dir="rtl" className="flex w-full max-w-sm flex-col gap-8 py-4">
      <Bubble variant="muted">
        <BubbleContent>
          این حباب به ابتدا تراز شده است. این تراز پیش‌فرض است.
        </BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>
          این حباب به انتها تراز شده است. برای پیام‌های کاربر از این حالت
          استفاده کنید.
        </BubbleContent>
      </Bubble>
    </div>
  )
}
