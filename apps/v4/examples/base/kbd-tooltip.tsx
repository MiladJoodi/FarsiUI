import { Button } from "@/styles/base-nova/ui/button"
import { ButtonGroup } from "@/styles/base-nova/ui/button-group"
import { Kbd, KbdGroup } from "@/styles/base-nova/ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/styles/base-nova/ui/tooltip"

export default function KbdTooltip() {
  return (
    <div dir="rtl" className="flex flex-wrap gap-4">
      <ButtonGroup>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" />}>
            ذخیره
          </TooltipTrigger>
          <TooltipContent>
            ذخیرهٔ تغییرات <Kbd>S</Kbd>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" />}>
            چاپ
          </TooltipTrigger>
          <TooltipContent>
            چاپ سند{" "}
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <Kbd>P</Kbd>
            </KbdGroup>
          </TooltipContent>
        </Tooltip>
      </ButtonGroup>
    </div>
  )
}
