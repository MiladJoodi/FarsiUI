import { Card, CardContent } from "@/registry/bases/base/ui/card"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"

export function SyncingStateCard() {
  return (
    <Card className="w-full" dir="rtl">
      <CardContent className="p-0">
        <div className="flex flex-col items-center gap-4 p-4 text-center">
          <Skeleton className="size-10 rounded-xl" />
          <div className="flex flex-col items-center gap-2">
            <Skeleton className="h-5 w-48 rounded-md" />
            <Skeleton className="h-3 w-64 max-w-full rounded-md" />
            <Skeleton className="h-3 w-56 max-w-full rounded-md" />
          </div>
          <Skeleton className="h-9 w-24 rounded-lg" />
        </div>
      </CardContent>
    </Card>
  )
}
