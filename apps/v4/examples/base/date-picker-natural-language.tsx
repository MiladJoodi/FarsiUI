"use client"

import * as React from "react"
import { parseDate } from "chrono-node"
import { CalendarIcon } from "lucide-react"
import { faIR as faIRDayPicker } from "react-day-picker/locale"

import { Calendar } from "@/registry/bases/base/ui/calendar"
import { Field, FieldLabel } from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/bases/base/ui/input-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"

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

const initialDate = parseDate("In 2 days") || undefined

export default function DatePickerNaturalLanguage() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(initialDate)
  const [value, setValue] = React.useState(formatDate(initialDate))

  return (
    <Field className="mx-auto max-w-xs" dir="rtl">
      <FieldLabel htmlFor="date-optional">تاریخ زمان‌بندی</FieldLabel>
      <InputGroup>
        <InputGroupInput
          id="date-optional"
          value={value}
          placeholder="فردا یا هفتهٔ بعد"
          onChange={(e) => {
            setValue(e.target.value)
            const parsed = parseDate(e.target.value)
            if (parsed) {
              setDate(parsed)
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
                onSelect={(next) => {
                  setDate(next)
                  setValue(formatDate(next))
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
