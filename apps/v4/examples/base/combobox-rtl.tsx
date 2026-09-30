"use client"

import * as React from "react"

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/styles/base-nova/ui/combobox"
import { Field, FieldLabel } from "@/styles/base-nova/ui/field"

const categories = [
  "technology",
  "design",
  "business",
  "marketing",
  "education",
  "health",
] as const

const categoryLabels: Record<(typeof categories)[number], string> = {
  technology: "فناوری",
  design: "طراحی",
  business: "کسب‌وکار",
  marketing: "بازاریابی",
  education: "آموزش",
  health: "سلامت",
}

export function ComboboxRtl() {
  const anchor = useComboboxAnchor()

  return (
    <Field className="mx-auto w-full max-w-xs" dir="rtl">
      <FieldLabel>دسته‌ها</FieldLabel>
      <Combobox
        multiple
        autoHighlight
        items={categories}
        defaultValue={[categories[0]]}
        itemToStringValue={(item: (typeof categories)[number]) =>
          categoryLabels[item]
        }
      >
        <ComboboxChips ref={anchor}>
          <ComboboxValue>
            {(values) => (
              <React.Fragment>
                {values.map((value: string) => (
                  <ComboboxChip key={value}>
                    {categoryLabels[value as (typeof categories)[number]] ||
                      value}
                  </ComboboxChip>
                ))}
                <ComboboxChipsInput placeholder="افزودن دسته" />
              </React.Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent anchor={anchor}>
          <ComboboxEmpty>دسته‌ای پیدا نشد.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {categoryLabels[item]}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </Field>
  )
}
