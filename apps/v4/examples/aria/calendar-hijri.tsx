"use client"

import * as React from "react"
import { CalendarDate } from "@internationalized/date"
import { I18nProvider } from "react-aria-components"

import { Calendar } from "@/styles/aria-nova/ui-rtl/calendar"

export default function CalendarHijri() {
  const [date, setDate] = React.useState<CalendarDate | undefined>(
    new CalendarDate(2025, 6, 12)
  )

  return (
    <I18nProvider locale="fa-AF-u-ca-persian">
      <Calendar
        value={date}
        onChange={setDate}
        className="rounded-lg border"
      />
    </I18nProvider>
  )
}
