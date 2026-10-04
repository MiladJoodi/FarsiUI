"use client"

import * as React from "react"
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

function formatDate(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export default function DatePickerTime() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)
  const [time, setTime] = React.useState("10:30:00")

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
                className="w-36 justify-between font-normal"
              />
            }
          >
            {date ? formatDate(date) : "انتخاب تاریخ"}
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
              onSelect={(next) => {
                setDate(next)
                setOpen(false)
              }}
            />
          </PopoverContent>
        </Popover>
      </Field>
      <Field className="w-32">
        <FieldLabel htmlFor="time-picker-optional">ساعت</FieldLabel>
        <Input
          id="time-picker-optional"
          type="text"
          inputMode="numeric"
          dir="ltr"
          lang="fa"
          autoComplete="off"
          placeholder="00:00:00"
          value={time}
          onChange={(event) => {
            const next = event.target.value.replace(/[^\d:]/g, "").slice(0, 8)
            setTime(next)
          }}
          onBlur={() => {
            const [h = "00", m = "00", s = "00"] = time.split(":")
            setTime(
              `${h.padStart(2, "0").slice(0, 2)}:${m.padStart(2, "0").slice(0, 2)}:${s.padStart(2, "0").slice(0, 2)}`
            )
          }}
          className="bg-background"
        />
      </Field>
    </FieldGroup>
  )
}
