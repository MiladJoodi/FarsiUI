import { SaveIcon } from "lucide-react"

import { Button } from "@/styles/base-nova/ui/button"
import { Kbd } from "@/styles/base-nova/ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/styles/base-nova/ui/tooltip"

export function TooltipKeyboard() {
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
