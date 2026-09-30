import { BookmarkIcon } from "lucide-react"

import { Toggle } from "@/styles/base-nova/ui/toggle"

export function ToggleRtl() {
  return (
    <div dir="rtl">
      <Toggle aria-label="نشانه‌گذاری" size="sm" variant="outline">
        <BookmarkIcon className="group-aria-pressed/toggle:fill-foreground" />
        نشانه‌گذاری
      </Toggle>
    </div>
  )
}
