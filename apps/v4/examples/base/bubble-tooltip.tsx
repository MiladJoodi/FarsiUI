"use client"

import { CheckIcon } from "lucide-react"

import {
  Bubble,
  BubbleContent,
  BubbleReactions,
} from "@/styles/base-rhea/ui/bubble"
import { Button } from "@/styles/base-rhea/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/styles/base-rhea/ui/tooltip"

export default function BubbleTooltipDemo() {
  return (
    <div dir="rtl" className="flex w-full max-w-sm flex-col gap-4 py-4">
      <Bubble variant="secondary">
        <BubbleContent>مسیر قدیمی رو حذف کردی؟</BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>آره، از رجیستری حذفش کردم.</BubbleContent>
        <BubbleReactions>
          <Tooltip>
            <TooltipTrigger render={<Button variant="ghost" size="icon-xs" />}>
              <CheckIcon />
            </TooltipTrigger>
            <TooltipContent>
              خوانده‌شده در ۱۵ دی ۱۴۰۴، ساعت ۱۶:۳۲
            </TooltipContent>
          </Tooltip>
        </BubbleReactions>
      </Bubble>
    </div>
  )
}
