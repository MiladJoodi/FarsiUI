import { Button } from "@/styles/base-nova/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/styles/base-nova/ui/tooltip"

const physicalSides = [
  { side: "left" as const, label: "چپ" },
  { side: "top" as const, label: "بالا" },
  { side: "bottom" as const, label: "پایین" },
  { side: "right" as const, label: "راست" },
]

const logicalSides = [
  { side: "inline-start" as const, label: "شروع خط" },
  { side: "inline-end" as const, label: "پایان خط" },
]

export function TooltipRtl() {
  return (
    <div dir="rtl" className="grid gap-4">
      <div className="flex flex-wrap justify-center gap-2">
        {physicalSides.map(({ side, label }) => (
          <Tooltip key={side}>
            <TooltipTrigger render={<Button variant="outline" />}>
              {label}
            </TooltipTrigger>
            <TooltipContent side={side}>
              افزودن به کتابخانه
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {logicalSides.map(({ side, label }) => (
          <Tooltip key={side}>
            <TooltipTrigger render={<Button variant="outline" />}>
              {label}
            </TooltipTrigger>
            <TooltipContent side={side}>
              افزودن به کتابخانه
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}
