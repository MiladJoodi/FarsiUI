import { Card, CardContent, CardHeader } from "@/registry/bases/base/ui/card"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"

const bars = [32, 74, 82, 63, 89, 76, 100, 84]

export function PowerUsage() {
  return (
    <Card>
      <CardHeader className="gap-2">
        <Skeleton className="h-5 w-32 rounded-md" />
        <Skeleton className="h-4 w-24 rounded-md" />
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex w-full flex-col gap-1.5">
          <div className="flex h-[120px] w-full items-end gap-2">
            {bars.map((height, i) => (
              <Skeleton
                key={i}
                className="min-h-2 flex-1 rounded-t rounded-b-none"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="flex w-full gap-2">
            {bars.map((_, i) => (
              <Skeleton
                key={i}
                className="mx-auto h-2.5 w-5 flex-1 rounded-md"
              />
            ))}
          </div>
        </div>
        <Skeleton className="h-px w-full rounded-none" />
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <Skeleton className="h-3 w-28 rounded-md" />
            <Skeleton className="h-5 w-20 rounded-md" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Skeleton className="h-3 w-20 rounded-md" />
            <Skeleton className="h-5 w-24 rounded-md" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
