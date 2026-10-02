"use client"

import * as React from "react"

import {
  Field,
  FieldDescription,
  FieldTitle,
} from "@/styles/base-nova/ui/field"
import { Slider } from "@/styles/base-nova/ui/slider"

export default function FieldSlider() {
  const [value, setValue] = React.useState([200, 800])

  return (
    <div className="w-full max-w-sm" dir="rtl" lang="fa">
      <Field>
        <FieldTitle>بازه قیمت</FieldTitle>
        <FieldDescription>
          بودجهٔ خود را تنظیم کنید (
          <span className="font-medium tabular-nums" dir="ltr">
            {value[0].toLocaleString("fa-IR")}
          </span>{" "}
          تا{" "}
          <span className="font-medium tabular-nums" dir="ltr">
            {value[1].toLocaleString("fa-IR")}
          </span>{" "}
          تومان).
        </FieldDescription>
        <Slider
          value={value}
          onValueChange={(value) => setValue(value as [number, number])}
          max={1000}
          min={0}
          step={10}
          className="mt-2 w-full"
          aria-label="بازه قیمت"
        />
      </Field>
    </div>
  )
}
