import { Label } from "@/styles/aria-nova/ui/label"
import { Switch } from "@/styles/aria-nova/ui/switch"

export default function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}
