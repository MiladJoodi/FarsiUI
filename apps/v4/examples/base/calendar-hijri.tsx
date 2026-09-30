"use client"

import * as React from "react"

import { Calendar } from "@/styles/base-nova/ui/calendar"

export default function CalendarHijri() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

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
