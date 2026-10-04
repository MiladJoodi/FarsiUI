"use client"

import * as React from "react"
import { getLocalTimeZone, type CalendarDate } from "@internationalized/date"

import { Button } from "@/registry/bases/aria/ui/button"
import { Calendar } from "@/registry/bases/aria/ui/calendar"
import { Field, FieldLabel } from "@/registry/bases/aria/ui/field"
import { Popover, PopoverTrigger } from "@/registry/bases/aria/ui/popover"

export default function DatePickerSimple() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<CalendarDate | null>(null)

  return (
    <Field className="mx-auto w-44">
      <FieldLabel htmlFor="date">Date of birth</FieldLabel>
      <PopoverTrigger isOpen={open} onOpenChange={setOpen}>
        <Button
          variant="outline"
          id="date"
          className="justify-start font-normal"
        >
          {date
            ? date.toDate(getLocalTimeZone()).toLocaleDateString()
            : "Select date"}
        </Button>
        <Popover
          className="w-auto overflow-hidden p-0"
          placement="bottom start"
        >
          <Calendar
            value={date}
            captionLayout="dropdown"
            onChange={(date) => {
              setDate(date)
              setOpen(false)
            }}
          />
        </Popover>
      </PopoverTrigger>
    </Field>
  )
}
