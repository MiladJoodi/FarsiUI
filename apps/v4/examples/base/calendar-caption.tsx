"use client"

import { Calendar } from "@/registry/bases/base/ui/calendar"

export default function CalendarCaption() {
  return (
    <Calendar
      mode="single"
      captionLayout="dropdown"
      className="rounded-lg border"
    />
  )
}
