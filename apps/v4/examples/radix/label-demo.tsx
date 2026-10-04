import { Checkbox } from "@/registry/bases/radix/ui/checkbox"
import { Label } from "@/registry/bases/radix/ui/label"

export default function LabelDemo() {
  return (
    <div className="flex gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  )
}
