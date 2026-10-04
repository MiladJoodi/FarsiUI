"use client"

import { Button } from "@/styles/base-nova/ui/button"
import { toast } from "@/styles/base-nova/ui/toast"

export default function ToastPromise() {
  function showToast() {
    toast.promise(
      new Promise<{ name: string }>((resolve) => {
        window.setTimeout(() => resolve({ name: "رویداد" }), 2000)
      }),
      {
        loading: "در حال ساخت رویداد…",
        success: (data) => `${data.name} ساخته شد.`,
        error: "ساخت رویداد ممکن نشد.",
      }
    )
  }

  return (
    <div dir="rtl">
      <Button variant="outline" onClick={showToast}>
        ساخت رویداد
      </Button>
    </div>
  )
}
