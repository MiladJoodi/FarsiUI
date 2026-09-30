import { Button } from "@/styles/base-nova/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/styles/base-nova/ui/tooltip"

const TOOLTIP_SIDES = [
  { side: "left", label: "چپ" },
  { side: "top", label: "بالا" },
  { side: "bottom", label: "پایین" },
  { side: "right", label: "راست" },
] as const

export function TooltipSides() {
  return (
    <div dir="rtl" className="flex flex-wrap gap-2">
      {TOOLTIP_SIDES.map(({ side, label }) => (
        <Tooltip key={side}>
          <TooltipTrigger
            render={<Button variant="outline" className="w-fit" />}
          >
            {label}
          </TooltipTrigger>
          <TooltipContent side={side}>
            <p>افزودن به کتابخانه</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}
