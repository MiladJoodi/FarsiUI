import { Checkbox } from "@/styles/base-nova/ui/checkbox"
import { Label } from "@/styles/base-nova/ui/label"

export default function LabelDemo() {
  return (
    <div dir="rtl" className="flex gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">شرایط و قوانین را می‌پذیرم</Label>
    </div>
  )
}
