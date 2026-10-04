import { SaveIcon } from "lucide-react"

import { Button } from "@/registry/bases/aria/ui/button"
import { Kbd } from "@/registry/bases/aria/ui/kbd"
import { Tooltip, TooltipTrigger } from "@/registry/bases/aria/ui/tooltip"

export default function TooltipKeyboard() {
  return (
    <TooltipTrigger>
      <Button variant="outline" size="icon-sm">
        <SaveIcon />
      </Button>
      <Tooltip>
        Save Changes <Kbd>S</Kbd>
      </Tooltip>
    </TooltipTrigger>
  )
}
