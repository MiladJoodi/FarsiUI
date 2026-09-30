"use client"

import { Button } from "@/styles/base-nova/ui/button"
import { toast } from "@/styles/base-nova/ui/toast"

export function ToastDemo() {
  function showToast() {
    const id = toast.add({
      title: "رویداد ساخته شد",
      description: "یکشنبه، ۳ آذر، ساعت ۹:۰۰",
      actionProps: {
        children: "بازگردانی",
        onClick() {
          toast.close(id)
        },
      },
    })
  }

  return (
    <div dir="rtl">
      <Button variant="outline" onClick={showToast}>
        نمایش توست
      </Button>
    </div>
  )
}
