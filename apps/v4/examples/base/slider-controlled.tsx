"use client"

import * as React from "react"

import { Label } from "@/styles/base-nova/ui/label"
import { Slider } from "@/styles/base-nova/ui/slider"

function toPersianDigits(value: number | string) {
  return String(value).replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]!)
}

export default function SliderControlled() {
  const [value, setValue] = React.useState([0.3, 0.7])

  return (
    <div dir="rtl" className="mx-auto grid w-full max-w-xs gap-3">
      <div className="flex items-center justify-between gap-2">
        <Label htmlFor="slider-demo-temperature">دما</Label>
        <span className="text-sm text-muted-foreground">
          {value.map(toPersianDigits).join("، ")}
        </span>
      </div>
      <Slider
        id="slider-demo-temperature"
        value={value}
        onValueChange={(value) => setValue(value as number[])}
        min={0}
        max={1}
        step={0.1}
      />
    </div>
  )
}
