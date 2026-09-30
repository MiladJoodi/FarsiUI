"use client"

import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "@/styles/base-rhea/ui/bubble"

export default function BubbleGroupDemo() {
  return (
    <div dir="rtl" className="flex w-full max-w-sm flex-col gap-8 py-4">
      <Bubble variant="muted">
        <BubbleContent>می‌تونی بگی مشکل چیه؟</BubbleContent>
      </Bubble>
      <BubbleGroup>
        <Bubble align="end">
          <BubbleContent>تو بگو!</BubbleContent>
        </Bubble>
        <Bubble align="end">
          <BubbleContent>دیروز کار می‌کرد. تو خرابش کردی!</BubbleContent>
        </Bubble>
        <Bubble align="end">
          <BubbleContent>باگ رو پیدا کن و درستش کن.</BubbleContent>
          <BubbleReactions role="img" aria-label="واکنش: چشم" align="start">
            <span>👀</span>
          </BubbleReactions>
        </Bubble>
      </BubbleGroup>
      <Bubble variant="muted">
        <BubbleContent>
          می‌خوای نسخه دیروزت رو با امروزت مقایسه کنم؟ کمی شرمنده‌کننده‌ست.
        </BubbleContent>
      </Bubble>
    </div>
  )
}
