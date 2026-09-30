"use client"

import * as React from "react"
import { format } from "date-fns"
import { faIR } from "date-fns/locale"
import { faIR as faIRDayPicker } from "react-day-picker/locale"

import { Button } from "@/styles/base-nova/ui/button"
import { Calendar } from "@/styles/base-nova/ui/calendar"
import { Field, FieldLabel } from "@/styles/base-nova/ui/field"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/styles/base-nova/ui/popover"

export function DatePickerSimple() {
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
          {date ? (
            format(date, "PPP", { locale: faIR })
          ) : (
            <span>انتخاب تاریخ</span>
          )}
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
