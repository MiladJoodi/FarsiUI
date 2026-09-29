import { PlusIcon } from "lucide-react"

import { Button } from "@/styles/base-nova/ui/button"
import { ButtonGroup } from "@/styles/base-nova/ui/button-group"

export default function ButtonGroupSize() {
  return (
    <div className="flex flex-col items-start gap-8">
      <ButtonGroup>
        <Button variant="outline" size="sm">
          کوچک
        </Button>
        <Button variant="outline" size="sm">
          دکمه
        </Button>
        <Button variant="outline" size="sm">
          گروه
        </Button>
        <Button variant="outline" size="icon-sm">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">معمولی</Button>
        <Button variant="outline">دکمه</Button>
        <Button variant="outline">گروه</Button>
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="lg">
          بزرگ
        </Button>
        <Button variant="outline" size="lg">
          دکمه
        </Button>
        <Button variant="outline" size="lg">
          گروه
        </Button>
        <Button variant="outline" size="icon-lg">
          <PlusIcon />
        </Button>
      </ButtonGroup>
    </div>
  )
}
