"use client"

import * as React from "react"

import { Calendar } from "@/registry/bases/base/ui/calendar"
import { Card, CardContent } from "@/registry/bases/base/ui/card"

export function CalendarCard() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Card className="w-full overflow-hidden" dir="rtl">
      <CardContent className="px-2 py-2">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          defaultMonth={date}
          dir="rtl"
          className="w-full rounded-none border-0 bg-transparent p-0 shadow-none ![--cell-size:2.5rem]"
          classNames={{
            root: "w-full",
            months: "relative flex w-full flex-col gap-3",
            month: "flex w-full flex-col gap-3",
          }}
        />
      </CardContent>
    </Card>
  )
}
