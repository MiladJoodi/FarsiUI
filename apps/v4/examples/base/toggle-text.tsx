import { ItalicIcon } from "lucide-react"

import { Toggle } from "@/registry/bases/base/ui/toggle"

export default function ToggleText() {
  return (
    <div dir="rtl">
      <Toggle aria-label="کج">
        <ItalicIcon />
        کج
      </Toggle>
    </div>
  )
}
