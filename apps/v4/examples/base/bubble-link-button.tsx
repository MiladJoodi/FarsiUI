"use client"

import { toast } from "sonner"

import {
  Bubble,
  BubbleContent,
  BubbleGroup,
} from "@/styles/base-rhea/ui/bubble"

export default function BubbleLinkButtonDemo() {
  return (
    <div dir="rtl" className="flex w-full max-w-sm flex-col gap-8 py-4">
      <Bubble variant="muted">
        <BubbleContent>امروز چطور می‌تونم کمکت کنم؟</BubbleContent>
      </Bubble>
      <BubbleGroup>
        <Bubble variant="tinted" align="end">
          <BubbleContent
            render={
              <button
                onClick={() => toast("روی «فراموشی رمز» کلیک کردید")}
              />
            }
          >
            رمز عبورم را فراموش کرده‌ام
          </BubbleContent>
        </Bubble>
        <Bubble variant="tinted" align="end">
          <BubbleContent
            render={
              <button
                onClick={() => toast("روی «کمک برای اشتراک» کلیک کردید")}
              />
            }
          >
            برای اشتراکم کمک می‌خواهم
          </BubbleContent>
        </Bubble>
        <Bubble variant="tinted" align="end">
          <BubbleContent
            render={
              <button
                onClick={() => toast("روی «صحبت با انسان» کلیک کردید")}
              />
            }
          >
            چیز دیگری. با یک نفر صحبت کنم.
          </BubbleContent>
        </Bubble>
      </BubbleGroup>
    </div>
  )
}
