import { ItalicIcon } from "lucide-react"

import { Toggle } from "@/registry/bases/aria/ui/toggle"

export default function ToggleText() {
  return (
    <Toggle aria-label="Toggle italic">
      <ItalicIcon />
      Italic
    </Toggle>
  )
}
