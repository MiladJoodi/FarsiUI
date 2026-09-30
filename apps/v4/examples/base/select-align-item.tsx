"use client"

import * as React from "react"

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/styles/base-nova/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/styles/base-nova/ui/select"
import { Switch } from "@/styles/base-nova/ui/switch"

const items = [
  { label: "انتخاب میوه", value: null },
  { label: "سیب", value: "apple" },
  { label: "موز", value: "banana" },
  { label: "بلوبری", value: "blueberry" },
  { label: "انگور", value: "grapes" },
  { label: "آناناس", value: "pineapple" },
]

export function SelectAlignItem() {
  const [alignItemWithTrigger, setAlignItemWithTrigger] = React.useState(true)

  return (
    <FieldGroup className="w-full max-w-xs" dir="rtl">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="align-item">تراز آیتم</FieldLabel>
          <FieldDescription>
            برای تراز آیتم انتخاب‌شده با تریگر تغییر دهید.
          </FieldDescription>
        </FieldContent>
        <Switch
          id="align-item"
          checked={alignItemWithTrigger}
          onCheckedChange={setAlignItemWithTrigger}
        />
      </Field>
      <Field>
        <Select items={items} defaultValue="banana">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent alignItemWithTrigger={alignItemWithTrigger}>
            <SelectGroup>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
    </FieldGroup>
  )
}
