import { Button } from "@/styles/base-nova/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/styles/base-nova/ui/tooltip"

export default function TooltipDemo() {
  return (
    <div dir="rtl">
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>
          نگه دارید
        </TooltipTrigger>
        <TooltipContent>
          <p>افزودن به کتابخانه</p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
