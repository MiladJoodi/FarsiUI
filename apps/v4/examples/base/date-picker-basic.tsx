"use client"

import * as React from "react"
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
    month: "long",
    year: "numeric",
  })
}

export default function DatePickerSimple() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Field className="mx-auto w-44" dir="rtl">
      <FieldLabel htmlFor="date-picker-simple">تاریخ</FieldLabel>
      <Popover>
        <PopoverTrigger
          render={
            <Button
              variant="outline"
              id="date-picker-simple"
              className="justify-start font-normal"
            />
          }
        >
          {date ? formatDate(date) : <span>انتخاب تاریخ</span>}
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            defaultMonth={date}
            locale={faIRDayPicker}
            dir="rtl"
          />
        </PopoverContent>
      </Popover>
    </Field>
  )
}
