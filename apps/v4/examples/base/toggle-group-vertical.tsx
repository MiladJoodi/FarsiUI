import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"

export default function ToggleGroupVertical() {
  return (
    <div dir="rtl">
      <ToggleGroup
        multiple
        orientation="vertical"
        spacing={1}
        defaultValue={["bold", "italic"]}
      >
        <ToggleGroupItem value="bold" aria-label="ضخیم">
          <BoldIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="کج">
          <ItalicIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="زیرخط">
          <UnderlineIcon />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
