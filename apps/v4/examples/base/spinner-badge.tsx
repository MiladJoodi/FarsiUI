import { Badge } from "@/registry/bases/base/ui/badge"
import { Spinner } from "@/registry/bases/base/ui/spinner"

export default function SpinnerBadge() {
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
