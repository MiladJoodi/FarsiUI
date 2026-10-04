import { Label } from "@/registry/bases/base/ui/label"
import { Switch } from "@/registry/bases/base/ui/switch"

export default function SwitchDemo() {
  return (
    <div dir="rtl" className="flex items-center gap-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">حالت هواپیما</Label>
    </div>
  )
}
