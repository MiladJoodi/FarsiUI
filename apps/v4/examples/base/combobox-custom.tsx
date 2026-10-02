"use client"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/styles/base-nova/ui/combobox"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/styles/base-nova/ui/item"

const countries = [
  {
    code: "ir",
    value: "iran",
    label: "ایران",
    continent: "آسیا",
  },
  {
    code: "tr",
    value: "turkey",
    label: "ترکیه",
    continent: "آسیا",
  },
  {
    code: "ae",
    value: "uae",
    label: "امارات",
    continent: "آسیا",
  },
  {
    code: "de",
    value: "germany",
    label: "آلمان",
    continent: "اروپا",
  },
  {
    code: "fr",
    value: "france",
    label: "فرانسه",
    continent: "اروپا",
  },
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
  {
    code: "ca",
    value: "canada",
    label: "کانادا",
    continent: "آمریکای شمالی",
  },
  {
    code: "br",
    value: "brazil",
    label: "برزیل",
    continent: "آمریکای جنوبی",
  },
  {
    code: "jp",
    value: "japan",
    label: "ژاپن",
    continent: "آسیا",
  },
  {
    code: "au",
    value: "australia",
    label: "استرالیا",
    continent: "اقیانوسیه",
  },
  {
    code: "eg",
    value: "egypt",
    label: "مصر",
    continent: "آفریقا",
  },
]

export function ComboboxWithCustomItems() {
  return (
    <div dir="rtl" className="w-full max-w-xs">
      <Combobox
        items={countries}
        itemToStringValue={(country: (typeof countries)[number]) =>
          country.label
        }
      >
        <ComboboxInput placeholder="جستجوی کشورها..." />
        <ComboboxContent dir="rtl">
          <ComboboxEmpty>کشوری پیدا نشد.</ComboboxEmpty>
          <ComboboxList>
            {(country) => (
              <ComboboxItem key={country.code} value={country}>
                <Item size="xs" className="p-0">
                  <ItemContent>
                    <ItemTitle className="whitespace-nowrap">
                      {country.label}
                    </ItemTitle>
                    <ItemDescription>
                      {country.continent} ({country.code})
                    </ItemDescription>
                  </ItemContent>
                </Item>
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}
