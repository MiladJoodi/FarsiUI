"use client"

import * as React from "react"
import { parseDate } from "chrono-node"
import { CalendarIcon } from "lucide-react"
import { faIR as faIRDayPicker } from "react-day-picker/locale"

import { Calendar } from "@/styles/base-nova/ui/calendar"
import { Field, FieldLabel } from "@/styles/base-nova/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/styles/base-nova/ui/input-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/styles/base-nova/ui/popover"

function formatDate(date: Date | undefined) {
  if (!date) {
    return ""
  }

  return date.toLocaleDateString("fa-IR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export function DatePickerNaturalLanguage() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("In 2 days")
  const [date, setDate] = React.useState<Date | undefined>(
    parseDate(value) || undefined
  )

  return (
    <Field className="mx-auto max-w-xs" dir="rtl">
      <FieldLabel htmlFor="date-optional">تاریخ زمان‌بندی</FieldLabel>
      <InputGroup>
        <InputGroupInput
          id="date-optional"
          value={value}
          placeholder="Tomorrow یا next week"
          onChange={(e) => {
            setValue(e.target.value)
            const date = parseDate(e.target.value)
            if (date) {
              setDate(date)
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault()
              setOpen(true)
            }
          }}
        />
        <InputGroupAddon align="inline-end">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger
              render={
                <InputGroupButton
                  id="date-picker"
                  variant="ghost"
                  size="icon-xs"
                  aria-label="انتخاب تاریخ"
                />
              }
            >
              <CalendarIcon />
              <span className="sr-only">انتخاب تاریخ</span>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="end"
              sideOffset={8}
            >
              <Calendar
                mode="single"
                selected={date}
                captionLayout="dropdown"
                defaultMonth={date}
                locale={faIRDayPicker}
                dir="rtl"
                onSelect={(date) => {
                  setDate(date)
                  setValue(formatDate(date))
                  setOpen(false)
                }}
              />
            </PopoverContent>
          </Popover>
        </InputGroupAddon>
      </InputGroup>
      <div className="px-1 text-sm text-muted-foreground">
        پست شما در{" "}
        <span className="font-medium">{formatDate(date)}</span> منتشر می‌شود.
      </div>
    </Field>
  )
}
