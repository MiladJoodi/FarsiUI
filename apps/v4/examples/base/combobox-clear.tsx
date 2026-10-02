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

export function ComboboxWithClear() {
  return (
    <div dir="rtl" className="w-full max-w-xs">
      <Combobox items={frameworks} defaultValue={frameworks[0]}>
        <ComboboxInput placeholder="یک فریم‌ورک انتخاب کنید" showClear />
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
