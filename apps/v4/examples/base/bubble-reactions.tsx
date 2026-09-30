"use client"

import { toast } from "sonner"

import {
  Bubble,
  BubbleContent,
  BubbleReactions,
} from "@/styles/base-rhea/ui/bubble"
import { Button } from "@/styles/base-rhea/ui/button"

export default function BubbleReactionsDemo() {
  return (
    <div dir="rtl" className="flex w-full max-w-sm flex-col gap-12 py-4">
      <Bubble variant="muted" align="end">
        <BubbleContent>
          به تست نیاز ندارم؛ می‌دونم کدم کار می‌کنه.
        </BubbleContent>
        <BubbleReactions
          align="start"
          role="img"
          aria-label="واکنش‌ها: پسند، تعجب"
        >
          <span>👍</span>
          <span>😮</span>
        </BubbleReactions>
      </Bubble>
      <Bubble variant="muted">
        <BubbleContent>
          جسورانه. باشه، چند تا تست می‌نویسم. وقتی تموم شد، خبرت می‌کنم.
        </BubbleContent>
        <BubbleReactions
          role="img"
          aria-label="واکنش‌ها: چشم، موشک و ۲ مورد دیگر"
        >
          <span>👀</span>
          <span>🚀</span>
          <span>+۲</span>
        </BubbleReactions>
      </Bubble>
      <Bubble variant="default" align="end">
        <BubbleContent>
          تست‌ها از همون اول پاس شدن. هر ۱۴۲ تا. عالی به نظر می‌رسه!
        </BubbleContent>
        <BubbleReactions
          side="top"
          align="start"
          role="img"
          aria-label="واکنش‌ها: جشن، تشویق"
        >
          <span>🎉</span>
          <span>👏</span>
        </BubbleReactions>
      </Bubble>
      <Bubble variant="destructive">
        <BubbleContent>مطمئنی این دستور رو اجرا کنم؟</BubbleContent>
        <BubbleReactions>
          <Button
            variant="ghost"
            size="xs"
            onClick={() => toast.success("بله را زدید؛ در حال اجرا...")}
          >
            بله، اجرا کن
          </Button>
        </BubbleReactions>
      </Bubble>
    </div>
  )
}
