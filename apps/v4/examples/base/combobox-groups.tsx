"use client"

import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
} from "@/registry/bases/base/ui/combobox"

const timezones = [
  {
    value: "آمریکا",
    items: [
      "(GMT-۵) نیویورک",
      "(GMT-۸) لس‌آنجلس",
      "(GMT-۶) شیکاگو",
      "(GMT-۵) تورنتو",
      "(GMT-۸) ونکوور",
      "(GMT-۳) سائوپائولو",
    ],
  },
  {
    value: "اروپا",
    items: [
      "(GMT+۰) لندن",
      "(GMT+۱) پاریس",
      "(GMT+۱) برلین",
      "(GMT+۱) رم",
      "(GMT+۱) مادرید",
      "(GMT+۱) آمستردام",
    ],
  },
  {
    value: "آسیا / اقیانوسیه",
    items: [
      "(GMT+۳:۳۰) تهران",
      "(GMT+۹) توکیو",
      "(GMT+۸) شانگهای",
      "(GMT+۸) سنگاپور",
      "(GMT+۴) دبی",
      "(GMT+۱۱) سیدنی",
    ],
  },
] as const

export default function ComboboxWithGroupsAndSeparator() {
  return (
    <div dir="rtl" className="w-full max-w-xs">
      <Combobox items={timezones}>
        <ComboboxInput placeholder="منطقهٔ زمانی را انتخاب کنید" />
        <ComboboxContent dir="rtl">
          <ComboboxEmpty>منطقهٔ زمانی پیدا نشد.</ComboboxEmpty>
          <ComboboxList>
            {(group, index) => (
              <ComboboxGroup key={group.value} items={group.items}>
                <ComboboxLabel>{group.value}</ComboboxLabel>
                <ComboboxCollection>
                  {(item) => (
                    <ComboboxItem key={item} value={item}>
                      {item}
                    </ComboboxItem>
                  )}
                </ComboboxCollection>
                {index < timezones.length - 1 && <ComboboxSeparator />}
              </ComboboxGroup>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}
