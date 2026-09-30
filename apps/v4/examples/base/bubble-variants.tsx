"use client"

import { Markdown } from "@/components/markdown"
import {
  Bubble,
  BubbleContent,
  BubbleReactions,
} from "@/styles/base-rhea/ui/bubble"

export default function BubbleVariantsDemo() {
  return (
    <div dir="rtl" className="flex w-full max-w-sm flex-col gap-12 py-4">
      <Bubble>
        <BubbleContent>این حباب، حالت پیش‌فرض است.</BubbleContent>
      </Bubble>
      <Bubble variant="secondary" align="end">
        <BubbleContent>این واریانت، حالت ثانویه است.</BubbleContent>
      </Bubble>
      <Bubble variant="muted">
        <BubbleContent>
          این حالت muted است و برای تأکید کمتر روی حباب گفتگو استفاده می‌شود.
        </BubbleContent>
        <BubbleReactions role="img" aria-label="واکنش: پسند">
          <span>👍</span>
        </BubbleReactions>
      </Bubble>
      <Bubble variant="tinted" align="end">
        <BubbleContent>
          این حالت tinted است و ته‌رنگ ملایمی از رنگ اصلی دارد.
        </BubbleContent>
      </Bubble>
      <Bubble variant="outline">
        <BubbleContent>می‌توانید از واریانت حاشیه‌دار هم استفاده کنید.</BubbleContent>
      </Bubble>
      <Bubble variant="destructive" align="end">
        <BubbleContent>یا واریانت خطرناک، همراه با واکنش.</BubbleContent>
        <BubbleReactions role="img" aria-label="واکنش: آتش">
          <span>🔥</span>
        </BubbleReactions>
      </Bubble>
      <Bubble variant="ghost">
        <BubbleContent>
          <Markdown>{`حباب‌های ghost برای متن دستیار، **مارک‌داون** و محتوایی مناسب‌اند که نباید قاب داشته باشند.

برای پیام‌های دستیار که باید تمام عرض ظرف را بگیرند، گزینه مناسبی هستند. می‌توانید \`کد\` را هم داخل آن‌ها نمایش دهید.

حباب‌های ghost تمام‌عرض هستند و می‌توانند کل ردیف ظرف را دربر بگیرند.
`}</Markdown>
        </BubbleContent>
      </Bubble>
    </div>
  )
}
