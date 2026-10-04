import { BookmarkIcon } from "lucide-react"

import { Toggle } from "@/registry/bases/base/ui/toggle"

export default function ToggleDemo() {
  return (
    <div dir="rtl">
      <Toggle aria-label="نشانه‌گذاری" size="sm" variant="outline">
        <BookmarkIcon className="group-aria-pressed/toggle:fill-foreground" />
        نشانه‌گذاری
      </Toggle>
    </div>
  )
}
