"use client"

import { Button } from "@/styles/base-nova/ui/button"
import { toast } from "@/styles/base-nova/ui/toast"

export default function ToastTypes() {
  return (
    <div dir="rtl" className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() => toast.add({ description: "رویداد ساخته شد." })}
      >
        پیش‌فرض
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            type: "success",
            description: "رویداد ساخته شد.",
          })
        }
      >
        موفقیت
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            type: "info",
            description: "۱۰ دقیقه قبل از رویداد برسید.",
          })
        }
      >
        اطلاعات
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            type: "warning",
            description: "رویداد نمی‌تواند قبل از ساعت ۸:۰۰ شروع شود.",
          })
        }
      >
        هشدار
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            type: "error",
            description: "رویداد ساخته نشد.",
            priority: "high",
          })
        }
      >
        خطا
      </Button>
    </div>
  )
}
