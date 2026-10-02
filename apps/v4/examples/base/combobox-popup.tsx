"use client"

import { Button } from "@/styles/base-nova/ui/button"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from "@/styles/base-nova/ui/combobox"

const countries = [
  { code: "", value: "", continent: "", label: "انتخاب کشور" },
  { code: "ir", value: "iran", label: "ایران", continent: "آسیا" },
  { code: "tr", value: "turkey", label: "ترکیه", continent: "آسیا" },
  { code: "ae", value: "uae", label: "امارات", continent: "آسیا" },
  { code: "de", value: "germany", label: "آلمان", continent: "اروپا" },
  { code: "fr", value: "france", label: "فرانسه", continent: "اروپا" },
  {
    code: "gb",
    value: "united-kingdom",
    label: "بریتانیا",
    continent: "اروپا",
  },
  {
    code: "us",
    value: "united-states",
    label: "آمریکا",
    continent: "آمریکای شمالی",
  },
  { code: "ca", value: "canada", label: "کانادا", continent: "آمریکای شمالی" },
  { code: "br", value: "brazil", label: "برزیل", continent: "آمریکای جنوبی" },
  { code: "jp", value: "japan", label: "ژاپن", continent: "آسیا" },
  { code: "au", value: "australia", label: "استرالیا", continent: "اقیانوسیه" },
  { code: "eg", value: "egypt", label: "مصر", continent: "آفریقا" },
]

export function ComboboxPopup() {
  return (
    <div dir="rtl" className="w-full max-w-xs">
      <Combobox items={countries} defaultValue={countries[0]}>
        <ComboboxTrigger
          render={
            <Button
              variant="outline"
              className="w-full justify-between font-normal"
            />
          }
        >
          <ComboboxValue />
        </ComboboxTrigger>
        <ComboboxContent dir="rtl">
          <ComboboxInput showTrigger={false} placeholder="جستجو" />
          <ComboboxEmpty>موردی پیدا نشد.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item.code || "empty"} value={item}>
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}
