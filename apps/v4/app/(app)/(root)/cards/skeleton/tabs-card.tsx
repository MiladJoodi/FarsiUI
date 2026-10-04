import { Card, CardContent } from "@/registry/bases/base/ui/card"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"

export function TabsCard() {
  return (
    <Card className="w-full" dir="rtl">
      <CardContent className="flex flex-col gap-4">
        <div className="flex w-full gap-4 border-b pb-2">
          <Skeleton className="h-8 w-20 rounded-md" />
          <Skeleton className="h-8 w-20 rounded-md" />
          <Skeleton className="h-8 w-20 rounded-md" />
        </div>
        <div className="mt-0 space-y-3">
          <div className="rounded-xl border bg-muted/40 p-3">
            <Skeleton className="mb-2 h-8 w-12 rounded-md" />
            <Skeleton className="h-4 w-32 rounded-md" />
          </div>
          <Skeleton className="h-3 w-full max-w-sm rounded-md" />
        </div>
      </CardContent>
    </Card>
  )
}
