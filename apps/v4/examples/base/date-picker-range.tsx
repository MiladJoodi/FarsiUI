"use client"

import * as React from "react"
import { addDays } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { type DateRange } from "react-day-picker"
import { faIR as faIRDayPicker } from "react-day-picker/locale"

import { Button } from "@/registry/bases/base/ui/button"
import { Calendar } from "@/registry/bases/base/ui/calendar"
import { Field, FieldLabel } from "@/registry/bases/base/ui/field"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"

function formatDate(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

export default function DatePickerWithRange() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 0, 20),
    to: addDays(new Date(new Date().getFullYear(), 0, 20), 20),
  })

  return (
    <Field className="mx-auto w-60" dir="rtl">
      <FieldLabel htmlFor="date-picker-range">بازهٔ تاریخ</FieldLabel>
      <Popover>
        <PopoverTrigger
          render={
            <Button
              variant="outline"
              id="date-picker-range"
              className="justify-start px-2.5 font-normal"
            />
          }
        >
          <CalendarIcon data-icon="inline-start" />
          {date?.from ? (
            date.to ? (
              <>
                {formatDate(date.from)} – {formatDate(date.to)}
              </>
            ) : (
              formatDate(date.from)
            )
          ) : (
            <span>انتخاب تاریخ</span>
          )}
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            locale={faIRDayPicker}
            dir="rtl"
          />
        </PopoverContent>
      </Popover>
    </Field>
  )
}
