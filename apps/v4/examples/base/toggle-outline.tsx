import { BoldIcon, ItalicIcon } from "lucide-react"

import { Toggle } from "@/styles/base-nova/ui/toggle"

export function ToggleOutline() {
  return (
    <div dir="rtl" className="flex flex-wrap items-center gap-2">
      <Toggle variant="outline" aria-label="کج">
        <ItalicIcon />
        کج
      </Toggle>
      <Toggle variant="outline" aria-label="ضخیم">
        <BoldIcon />
        ضخیم
      </Toggle>
    </div>
  )
}
