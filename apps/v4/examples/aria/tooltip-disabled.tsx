import { Button } from "@/registry/bases/aria/ui/button"
import { Tooltip, TooltipTrigger } from "@/registry/bases/aria/ui/tooltip"

export default function TooltipDisabled() {
  return (
    <>
      <TooltipTrigger>
        <span className="inline-block w-fit">
          <Button variant="outline" isDisabled>
            Disabled
          </Button>
        </span>
        <Tooltip>
          <p>This feature is currently unavailable</p>
        </Tooltip>
      </TooltipTrigger>
    </>
  )
}
