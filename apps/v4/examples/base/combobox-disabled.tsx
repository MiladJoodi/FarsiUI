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

export function ComboboxDisabled() {
  return (
    <div dir="rtl" className="w-full max-w-xs">
      <Combobox items={frameworks}>
        <ComboboxInput placeholder="یک فریم‌ورک انتخاب کنید" disabled />
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
