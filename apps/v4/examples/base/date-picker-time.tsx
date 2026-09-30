"use client"

import * as React from "react"
import { format } from "date-fns"
import { faIR } from "date-fns/locale"
import { ChevronDownIcon } from "lucide-react"
import { faIR as faIRDayPicker } from "react-day-picker/locale"

import { Button } from "@/styles/base-nova/ui/button"
import { Calendar } from "@/styles/base-nova/ui/calendar"
import { Field, FieldGroup, FieldLabel } from "@/styles/base-nova/ui/field"
import { Input } from "@/styles/base-nova/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/styles/base-nova/ui/popover"

export function DatePickerTime() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)

  return (
    <FieldGroup className="mx-auto max-w-xs flex-row" dir="rtl">
      <Field>
        <FieldLabel htmlFor="date-picker-optional">تاریخ</FieldLabel>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger
            render={
              <Button
                variant="outline"
                id="date-picker-optional"
                className="w-32 justify-between font-normal"
              />
            }
          >
            {date ? format(date, "PPP", { locale: faIR }) : "انتخاب تاریخ"}
            <ChevronDownIcon data-icon="inline-end" />
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              defaultMonth={date}
              locale={faIRDayPicker}
              dir="rtl"
              onSelect={(date) => {
                setDate(date)
                setOpen(false)
              }}
            />
          </PopoverContent>
        </Popover>
      </Field>
      <Field className="w-32">
        <FieldLabel htmlFor="time-picker-optional">ساعت</FieldLabel>
        <Input
          type="time"
          id="time-picker-optional"
          step="1"
          defaultValue="10:30:00"
          className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
        />
      </Field>
    </FieldGroup>
  )
}
