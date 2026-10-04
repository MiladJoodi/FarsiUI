"use client"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/styles/base-nova/ui/combobox"

const frameworks = [
  "نکست‌جی‌اس",
  "سوولت‌کیت",
  "ناکست‌جی‌اس",
  "ریمیکس",
  "آسترو",
] as const

export default function ComboboxAutoHighlight() {
  return (
    <div dir="rtl" className="w-full max-w-xs">
      <Combobox items={frameworks} autoHighlight>
        <ComboboxInput placeholder="یک فریم‌ورک انتخاب کنید" />
        <ComboboxContent dir="rtl">
          <ComboboxEmpty>موردی پیدا نشد.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}
