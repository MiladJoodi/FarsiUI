import { Card, CardContent } from "@/registry/bases/base/ui/card"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"

export function AttachmentCard() {
  return (
    <Card className="w-full" dir="rtl">
      <CardContent className="flex flex-col gap-3">
        {[0, 1].map((i) => (
          <div
            key={i}
            className="flex w-full items-center gap-3 rounded-xl border p-3"
          >
            <Skeleton className="size-10 shrink-0 rounded-lg" />
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <Skeleton className="h-4 w-36 rounded-md" />
              <Skeleton className="h-3 w-28 rounded-md" />
            </div>
            <Skeleton className="size-8 shrink-0 rounded-md" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
