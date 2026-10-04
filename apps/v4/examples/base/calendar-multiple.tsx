"use client"

import { Calendar } from "@/registry/bases/base/ui/calendar"
import { Card, CardContent } from "@/registry/bases/base/ui/card"

export default function CalendarMultiple() {
  return (
    <Card className="mx-auto w-fit p-0">
      <CardContent className="p-0">
        <Calendar mode="multiple" />
      </CardContent>
    </Card>
  )
}
