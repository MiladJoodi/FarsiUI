"use client"

import * as React from "react"
import { faIR as faIRDayPicker } from "react-day-picker/locale"

import { Calendar } from "@/styles/base-rhea/ui/calendar"
import { Card, CardContent } from "@/styles/base-rhea/ui/card"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/styles/base-rhea/ui/combobox"

const cities = [
  "تهران",
  "اصفهان",
  "شیراز",
  "مشهد",
  "تبریز",
  "اهواز",
] as const

export function CalendarCard() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Card className="w-full" dir="rtl">
      <CardContent className="flex justify-center p-3">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          defaultMonth={date}
          locale={faIRDayPicker}
          dir="rtl"
          className="rounded-xl border-0 bg-transparent shadow-none"
        />
      </CardContent>
    </Card>
  )
}

export function ComboboxCard() {
  return (
    <Card className="w-full" dir="rtl">
      <CardContent>
        <Combobox items={cities}>
          <ComboboxInput placeholder="انتخاب شهر..." />
          <ComboboxContent dir="rtl" className="text-start">
            <ComboboxEmpty className="text-start">موردی پیدا نشد.</ComboboxEmpty>
            <ComboboxList>
              {(item) => (
                <ComboboxItem key={item} value={item} className="text-start">
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </CardContent>
    </Card>
  )
}
