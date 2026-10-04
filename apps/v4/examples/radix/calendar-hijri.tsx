"use client"

import * as React from "react"

import { Calendar } from "@/registry/bases/radix/ui/calendar"

export default function CalendarHijri() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2025, 5, 12)
  )

  return (
    <Calendar
      mode="single"
      defaultMonth={date}
      selected={date}
      onSelect={setDate}
      className="rounded-lg border"
    />
  )
}
