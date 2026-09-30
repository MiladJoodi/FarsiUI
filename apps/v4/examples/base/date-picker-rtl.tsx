"use client"

import * as React from "react"
import { format } from "date-fns"
import { faIR } from "date-fns/locale"
import { ChevronDownIcon } from "lucide-react"
import { faIR as faIRDayPicker } from "react-day-picker/locale"

import { Button } from "@/styles/base-nova/ui/button"
import { Calendar } from "@/styles/base-nova/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/styles/base-nova/ui/popover"

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
          {date ? (
            format(date, "PPP", { locale: faIR })
          ) : (
            <span>انتخاب تاریخ</span>
          )}
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
