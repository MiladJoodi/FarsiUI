import { ArrowUpRightIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"

export default function BadgeAsLink() {
  return (
    <Badge dir="rtl" render={<a href="#link" />}>
      باز کردن لینک <ArrowUpRightIcon data-icon="inline-end" />
    </Badge>
  )
}
