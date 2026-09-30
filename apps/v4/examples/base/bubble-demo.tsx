"use client"

import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "@/styles/base-rhea/ui/bubble"

export default function BubbleDemo() {
  return (
    <div dir="rtl" className="flex w-full max-w-sm flex-col gap-8 py-4">
      <Bubble align="end">
        <BubbleContent>سلام! چه خبر؟</BubbleContent>
      </Bubble>
      <BubbleGroup>
        <Bubble variant="muted">
          <BubbleContent>سلام! می‌خوای حباب‌های چت رو ببینی؟</BubbleContent>
        </Bubble>
        <Bubble variant="muted">
          <BubbleContent>
            می‌تونم پیام‌ها رو گروه‌بندی کنم، جای فرستنده رو تغییر بدم و گفتگو رو
            مرتب و خوانا نگه دارم.
          </BubbleContent>
          <BubbleReactions role="img" aria-label="واکنش: پسند">
            <span>👍</span>
          </BubbleReactions>
        </Bubble>
      </BubbleGroup>
      <Bubble align="end">
        <BubbleContent>باشه، بهترین دمو رو نشون بده.</BubbleContent>
      </Bubble>
      <Bubble variant="muted">
        <BubbleContent>
          آره، داری دمویی رو می‌بینی که خودش رو نمایش می‌ده!
        </BubbleContent>
        <BubbleReactions
          role="img"
          aria-label="واکنش‌ها: پسند، آتش، چشم و ۲ مورد دیگر"
        >
          <span>👍</span>
          <span>🔥</span>
          <span>👀</span>
          <span>+۲</span>
        </BubbleReactions>
      </Bubble>
    </div>
  )
}
