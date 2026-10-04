import { Card, CardContent } from "@/registry/bases/base/ui/card"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"
import { cn } from "cn"

export function CalendarCard() {
  return (
    <Card className="w-full overflow-hidden" dir="rtl" aria-hidden>
      <CardContent className="px-3 py-3">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between px-1">
            <Skeleton className="h-4 w-28 rounded-md" />
            <div className="flex gap-1">
              <Skeleton className="size-8 rounded-md" />
              <Skeleton className="size-8 rounded-md" />
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 7 }).map((_, i) => (
              <Skeleton
                key={`w-${i}`}
                className="mx-auto h-3 w-3 rounded-md"
              />
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 36 }).map((_, i) => {
              if (i < 5) {
                return <span key={`e-${i}`} className="size-10" />
              }
              return (
                <Skeleton
                  key={i}
                  className={cn(
                    "size-10 rounded-md",
                    i === 16 && "bg-primary/30"
                  )}
                />
              )
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
