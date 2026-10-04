import { Card, CardContent } from "@/registry/bases/base/ui/card"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"

export function MenubarCard() {
  return (
    <Card className="w-full" dir="rtl">
      <CardContent>
        <div className="flex h-9 w-full items-center gap-1 rounded-lg border bg-background p-1">
          <Skeleton className="h-7 w-12 rounded-md" />
          <Skeleton className="h-7 w-14 rounded-md" />
          <Skeleton className="h-7 w-14 rounded-md" />
          <Skeleton className="h-7 w-16 rounded-md" />
        </div>
      </CardContent>
    </Card>
  )
}
