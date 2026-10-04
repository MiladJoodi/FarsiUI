import { Card, CardContent } from "@/registry/bases/base/ui/card"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"

export function PopoverSliderToastToggle() {
  return (
    <Card className="w-full" dir="rtl">
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <Skeleton className="h-9 w-20 rounded-lg" />
          <Skeleton className="h-9 w-28 rounded-lg" />
          <Skeleton className="h-8 w-28 rounded-lg" />
        </div>
        <Skeleton className="h-9 w-full rounded-lg" />
        <div className="flex items-center gap-3">
          <Skeleton className="h-4 w-[3.25rem] shrink-0 rounded-md" />
          <Skeleton className="h-2 min-w-0 flex-1 rounded-full" />
        </div>
      </CardContent>
    </Card>
  )
}
