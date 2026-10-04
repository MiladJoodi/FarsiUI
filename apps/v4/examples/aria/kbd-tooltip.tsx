import { Button } from "@/registry/bases/aria/ui/button"
import { ButtonGroup } from "@/registry/bases/aria/ui/button-group"
import { Kbd, KbdGroup } from "@/registry/bases/aria/ui/kbd"
import { Tooltip, TooltipTrigger } from "@/registry/bases/aria/ui/tooltip"

export default function KbdTooltip() {
  return (
    <div className="flex flex-wrap gap-4">
      <ButtonGroup>
        <TooltipTrigger>
          <Button variant="outline">Save</Button>
          <Tooltip>
            Save Changes <Kbd>S</Kbd>
          </Tooltip>
        </TooltipTrigger>
        <TooltipTrigger>
          <Button variant="outline">Print</Button>
          <Tooltip>
            Print Document{" "}
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <Kbd>P</Kbd>
            </KbdGroup>
          </Tooltip>
        </TooltipTrigger>
      </ButtonGroup>
    </div>
  )
}
