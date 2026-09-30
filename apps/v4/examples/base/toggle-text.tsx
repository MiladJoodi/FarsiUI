import { ItalicIcon } from "lucide-react"

import { Toggle } from "@/styles/base-nova/ui/toggle"

export function ToggleText() {
  return (
    <div dir="rtl">
      <Toggle aria-label="کج">
        <ItalicIcon />
        کج
      </Toggle>
    </div>
  )
}
