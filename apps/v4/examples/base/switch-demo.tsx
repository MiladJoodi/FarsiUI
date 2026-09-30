import { Label } from "@/styles/base-nova/ui/label"
import { Switch } from "@/styles/base-nova/ui/switch"

export function SwitchDemo() {
  return (
    <div dir="rtl" className="flex items-center gap-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">حالت هواپیما</Label>
    </div>
  )
}
