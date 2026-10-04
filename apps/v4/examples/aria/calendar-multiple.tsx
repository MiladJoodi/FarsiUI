import { Calendar } from "@/registry/bases/aria/ui/calendar"
import { Card, CardContent } from "@/registry/bases/aria/ui/card"

export default function CalendarMultiple() {
  return (
    <Card className="mx-auto w-fit p-0">
      <CardContent className="p-0">
        <Calendar selectionMode="multiple" />
      </CardContent>
    </Card>
  )
}
