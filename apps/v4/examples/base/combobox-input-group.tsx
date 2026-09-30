"use client"

import { GlobeIcon } from "lucide-react"

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
} from "@/styles/base-nova/ui/combobox"
import { InputGroupAddon } from "@/styles/base-nova/ui/input-group"

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

export function ComboxboxInputGroup() {
  return (
    <div dir="rtl">
      <Combobox items={timezones}>
        <ComboboxInput placeholder="منطقهٔ زمانی را انتخاب کنید">
          <InputGroupAddon>
            <GlobeIcon />
          </InputGroupAddon>
        </ComboboxInput>
        <ComboboxContent alignOffset={-28} className="w-60">
          <ComboboxEmpty>منطقهٔ زمانی پیدا نشد.</ComboboxEmpty>
          <ComboboxList>
            {(group) => (
              <ComboboxGroup key={group.value} items={group.items}>
                <ComboboxLabel>{group.value}</ComboboxLabel>
                <ComboboxCollection>
                  {(item) => (
                    <ComboboxItem key={item} value={item}>
                      {item}
                    </ComboboxItem>
                  )}
                </ComboboxCollection>
              </ComboboxGroup>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}
