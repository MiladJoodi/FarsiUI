import { BookmarkIcon } from "lucide-react"

import { Toggle } from "@/registry/bases/radix/ui/toggle"

export default function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bookmark" size="sm" variant="outline">
      <BookmarkIcon className="group-data-[state=on]/toggle:fill-foreground" />
      Bookmark
    </Toggle>
  )
}
