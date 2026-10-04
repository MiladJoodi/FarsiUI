"use client"

import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import { Label } from "@/registry/bases/base/ui/label"

export default function LabelRtl() {
  return (
    <div dir="rtl" className="flex gap-2">
      <Checkbox id="terms-rtl" />
      <Label htmlFor="terms-rtl">شرایط و قوانین را می‌پذیرم</Label>
    </div>
  )
}
