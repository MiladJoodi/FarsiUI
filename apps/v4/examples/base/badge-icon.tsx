import { BadgeCheck, BookmarkIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"

export default function BadgeWithIcon() {
  return (
    <div dir="rtl" className="flex flex-wrap items-center justify-center gap-2">
      <Badge variant="secondary">
        <BadgeCheck data-icon="inline-start" />
        تأییدشده
      </Badge>
      <Badge variant="outline">
        نشانه‌گذاری
        <BookmarkIcon data-icon="inline-end" />
      </Badge>
    </div>
  )
}
