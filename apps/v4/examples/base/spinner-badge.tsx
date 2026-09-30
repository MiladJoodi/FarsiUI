import { Badge } from "@/styles/base-nova/ui/badge"
import { Spinner } from "@/styles/base-nova/ui/spinner"

export function SpinnerBadge() {
  return (
    <div dir="rtl" className="flex items-center gap-4 [--radius:1.2rem]">
      <Badge>
        <Spinner data-icon="inline-start" />
        همگام‌سازی
      </Badge>
      <Badge variant="secondary">
        <Spinner data-icon="inline-start" />
        به‌روزرسانی
      </Badge>
      <Badge variant="outline">
        <Spinner data-icon="inline-start" />
        در حال پردازش
      </Badge>
    </div>
  )
}
