"use client"

import { Calendar } from "@/registry/bases/radix/ui/calendar"

export default function CalendarCaption() {
  return (
    <Calendar
      mode="single"
      captionLayout="dropdown"
      className="rounded-lg border"
    />
  )
}
