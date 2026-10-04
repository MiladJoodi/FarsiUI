import { Button } from "@/registry/bases/aria/ui/button"
import {
  Popover,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/bases/aria/ui/popover"

export default function PopoverBasic() {
  return (
    <PopoverTrigger>
      <Button variant="outline">Open Popover</Button>
      <Popover placement="bottom start">
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>
            Set the dimensions for the layer.
          </PopoverDescription>
        </PopoverHeader>
      </Popover>
    </PopoverTrigger>
  )
}
