import { ArrowUpRightIcon } from "lucide-react"

import { Badge } from "@/registry/bases/radix/ui/badge"

export default function BadgeAsLink() {
  return (
    <Badge asChild>
      <a href="#link">
        Open Link <ArrowUpRightIcon data-icon="inline-end" />
      </a>
    </Badge>
  )
}
