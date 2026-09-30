"use client"

import * as React from "react"

import { Calendar } from "@/styles/base-nova/ui/calendar"

export default function CalendarRtl() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg border [--cell-size:--spacing(9)]"
      captionLayout="dropdown"
    />
  )
}
