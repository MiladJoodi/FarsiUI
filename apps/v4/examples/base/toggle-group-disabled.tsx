import { Bold, Italic, Underline } from "lucide-react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/styles/base-nova/ui/toggle-group"

export function ToggleGroupDisabled() {
  return (
    <div dir="rtl">
      <ToggleGroup disabled>
        <ToggleGroupItem value="bold" aria-label="ضخیم">
          <Bold />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="کج">
          <Italic />
        </ToggleGroupItem>
        <ToggleGroupItem value="strikethrough" aria-label="زیرخط">
          <Underline />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
