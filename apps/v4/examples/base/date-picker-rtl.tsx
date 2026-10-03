"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"
import { faIR as faIRDayPicker } from "react-day-picker/locale"

import { Button } from "@/styles/base-nova/ui/button"
import { Calendar } from "@/styles/base-nova/ui/calendar"
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

export function DatePickerRtl() {
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
