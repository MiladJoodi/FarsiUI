"use client"

import * as React from "react"
import { getLocalTimeZone, type CalendarDate } from "@internationalized/date"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/registry/bases/aria/ui/button"
import { Calendar } from "@/registry/bases/aria/ui/calendar"
import { Field, FieldLabel } from "@/registry/bases/aria/ui/field"
import { Popover, PopoverTrigger } from "@/registry/bases/aria/ui/popover"

export default function DataPickerWithDropdowns() {
  const [date, setDate] = React.useState<CalendarDate>()
  const [open, setOpen] = React.useState(false)

  return (
    <Field className="mx-auto w-72">
      <FieldLabel htmlFor="date-picker-with-dropdowns-desktop">Date</FieldLabel>
      <PopoverTrigger isOpen={open} onOpenChange={setOpen}>
        <Button
          variant="outline"
          id="date-picker-with-dropdowns-desktop"
          className="justify-start px-2.5 font-normal"
        >
          <ChevronDownIcon className="ml-auto" />
          {date ? (
            date
              .toDate(getLocalTimeZone())
              .toLocaleDateString(undefined, { dateStyle: "long" })
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
        <Popover className="w-auto p-0" placement="bottom start">
          <Calendar value={date} onChange={setDate} captionLayout="dropdown" />
          <div className="flex gap-2 border-t p-2">
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              onPress={() => setOpen(false)}
            >
              Done
            </Button>
          </div>
        </Popover>
      </PopoverTrigger>
    </Field>
  )
}
