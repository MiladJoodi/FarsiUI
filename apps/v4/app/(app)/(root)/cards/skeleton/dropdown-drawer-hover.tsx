import { Card, CardContent } from "@/registry/bases/base/ui/card"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"

export function DropdownDrawerHover() {
  return (
    <Card className="w-full" dir="rtl">
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <Skeleton className="h-9 w-24 rounded-lg" />
          <Skeleton className="h-9 w-16 rounded-lg" />
          <Skeleton className="h-9 w-28 rounded-lg" />
        </div>
        <div className="flex items-center gap-1">
          <Skeleton className="h-9 w-16 rounded-lg" />
          <Skeleton className="size-9 rounded-lg" />
          <Skeleton className="size-9 rounded-lg" />
          <Skeleton className="size-9 rounded-lg" />
          <Skeleton className="size-9 rounded-lg" />
          <Skeleton className="h-9 w-16 rounded-lg" />
        </div>
      </CardContent>
    </Card>
  )
}
