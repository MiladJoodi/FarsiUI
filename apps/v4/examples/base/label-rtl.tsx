"use client"

import { Checkbox } from "@/styles/base-nova/ui/checkbox"
import { Label } from "@/styles/base-nova/ui/label"

export function LabelRtl() {
  return (
    <div dir="rtl" className="flex gap-2">
      <Checkbox id="terms-rtl" />
      <Label htmlFor="terms-rtl">شرایط و قوانین را می‌پذیرم</Label>
    </div>
  )
}
