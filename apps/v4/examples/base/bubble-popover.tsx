"use client"

import { InfoIcon } from "lucide-react"

import {
  Bubble,
  BubbleContent,
  BubbleReactions,
} from "@/styles/base-rhea/ui/bubble"
import { Button } from "@/styles/base-rhea/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/styles/base-rhea/ui/popover"

export default function BubblePopoverDemo() {
  return (
    <div dir="rtl" className="flex w-full max-w-sm flex-col gap-4 py-4">
      <Bubble align="end">
        <BubbleContent>اسکریپت بیلد رو اجرا کن.</BubbleContent>
      </Bubble>
      <Bubble variant="destructive">
        <BubbleContent>اجرای دستور ناموفق بود.</BubbleContent>
        <BubbleReactions>
          <Popover>
            <PopoverTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-xs"
                  aria-label="نمایش جزئیات خطا"
                  className="aria-expanded:text-destructive"
                />
              }
            >
              <InfoIcon />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader>
                <PopoverTitle className="text-sm">
                  دستور با کد خروجی ۱ شکست خورد
                </PopoverTitle>
                <PopoverDescription className="text-sm">
                  ENOENT: چنین فایل یا پوشه‌ای وجود ندارد، open pnpm-lock.yaml
                </PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover>
        </BubbleReactions>
      </Bubble>
    </div>
  )
}
