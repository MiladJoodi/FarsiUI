import { Card, CardContent } from "@/registry/bases/base/ui/card"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"

export function MarkerAvatarAlert() {
  return (
    <Card className="w-full" dir="rtl">
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <Skeleton className="h-7 w-40 rounded-full" />
          <div className="flex items-center gap-3">
            <Skeleton className="h-px flex-1 rounded-none" />
            <Skeleton className="h-7 w-36 rounded-full" />
            <Skeleton className="h-px flex-1 rounded-none" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="size-10 rounded-full" />
          <div className="flex flex-col gap-1.5">
            <Skeleton className="h-4 w-16 rounded-md" />
            <Skeleton className="h-3 w-12 rounded-md" />
          </div>
        </div>
        <div className="flex gap-3 rounded-xl border p-4">
          <Skeleton className="size-4 shrink-0 rounded-md" />
          <div className="flex min-w-0 flex-1 flex-col gap-2">
            <Skeleton className="h-4 w-48 rounded-md" />
            <Skeleton className="h-3 w-full rounded-md" />
            <Skeleton className="h-3 w-4/5 rounded-md" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
