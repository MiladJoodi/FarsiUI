"use client"

import { Calendar } from "@/styles/base-nova/ui/calendar"

export default function CalendarCaption() {
  return (
    <Calendar
      mode="single"
      captionLayout="dropdown"
      className="rounded-lg border"
    />
  )
}
