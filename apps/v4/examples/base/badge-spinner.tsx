import { Badge } from "@/registry/bases/base/ui/badge"
import { Spinner } from "@/registry/bases/base/ui/spinner"

export default function BadgeWithSpinner() {
  return (
    <div dir="rtl" className="flex flex-wrap items-center justify-center gap-2">
      <Badge variant="destructive">
        <Spinner data-icon="inline-start" />
        در حال حذف
      </Badge>
      <Badge variant="secondary">
        در حال تولید
        <Spinner data-icon="inline-end" />
      </Badge>
    </div>
  )
}
