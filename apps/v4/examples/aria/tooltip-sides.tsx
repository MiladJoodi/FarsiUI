import { Button } from "@/registry/bases/aria/ui/button"
import { Tooltip, TooltipTrigger } from "@/registry/bases/aria/ui/tooltip"

export default function TooltipSides() {
  return (
    <div className="flex flex-wrap gap-2">
      {(["left", "top", "bottom", "right"] as const).map((side) => (
        <TooltipTrigger key={side}>
          <Button variant="outline" className="w-fit capitalize">
            {side}
          </Button>
          <Tooltip placement={side}>
            <p>Add to library</p>
          </Tooltip>
        </TooltipTrigger>
      ))}
    </div>
  )
}
