import { Button } from "@/registry/bases/aria/ui/button"
import { Tooltip, TooltipTrigger } from "@/registry/bases/aria/ui/tooltip"

export default function TooltipDemo() {
  return (
    <TooltipTrigger>
      <Button variant="outline">Hover</Button>
      <Tooltip>
        <p>Add to library</p>
      </Tooltip>
    </TooltipTrigger>
  )
}
