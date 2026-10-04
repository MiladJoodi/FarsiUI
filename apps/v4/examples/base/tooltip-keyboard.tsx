import { SaveIcon } from "lucide-react"

import { Button } from "@/registry/bases/base/ui/button"
import { Kbd } from "@/registry/bases/base/ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"

export default function TooltipKeyboard() {
  return (
    <div dir="rtl">
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" size="icon-sm" />}>
          <SaveIcon />
        </TooltipTrigger>
        <TooltipContent>
          ذخیره تغییرات <Kbd>S</Kbd>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
