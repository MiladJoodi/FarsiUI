import { Button } from "@/styles/base-nova/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/styles/base-nova/ui/tooltip"

export default function TooltipDisabled() {
  return (
    <div dir="rtl">
      <Tooltip>
        <TooltipTrigger render={<span className="inline-block w-fit" />}>
          <Button variant="outline" disabled>
            غیرفعال
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>این قابلیت فعلاً در دسترس نیست</p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
