"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"
import { faIR as faIRDayPicker } from "react-day-picker/locale"

import { Button } from "@/registry/bases/base/ui/button"
import { Calendar } from "@/registry/bases/base/ui/calendar"
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

export default function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>()

  return (
    <div dir="rtl">
      <Popover>
        <PopoverTrigger
          render={
            <Button
              variant={"outline"}
              data-empty={!date}
              className="w-[212px] justify-between text-start font-normal data-[empty=true]:text-muted-foreground"
            />
          }
        >
          {date ? formatDate(date) : <span>انتخاب تاریخ</span>}
          <ChevronDownIcon data-icon="inline-end" />
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
    </div>
  )
}
