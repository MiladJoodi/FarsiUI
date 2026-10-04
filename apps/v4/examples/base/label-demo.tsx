import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import { Label } from "@/registry/bases/base/ui/label"

export default function LabelDemo() {
  return (
    <div dir="rtl" className="flex gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">شرایط و قوانین را می‌پذیرم</Label>
    </div>
  )
}
