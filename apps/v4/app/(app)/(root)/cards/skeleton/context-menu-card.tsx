import { Card, CardContent } from "@/registry/bases/base/ui/card"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"

export function ContextMenuCard() {
  return (
    <Card className="w-full" dir="rtl">
      <CardContent>
        <div className="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed">
          <Skeleton className="h-4 w-40 rounded-md" />
        </div>
      </CardContent>
    </Card>
  )
}
