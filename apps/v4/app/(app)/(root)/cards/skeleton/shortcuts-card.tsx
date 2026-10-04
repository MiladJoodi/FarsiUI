import { Card, CardContent } from "@/registry/bases/base/ui/card"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"

export function ShortcutsCard() {
  return (
    <Card className="w-full" dir="rtl">
      <CardContent>
        <div className="flex flex-col gap-3">
          <Skeleton className="h-4 w-20 rounded-md" />
          <div className="flex flex-col gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i}>
                {i > 0 ? (
                  <Skeleton className="mb-2 h-px w-full rounded-none" />
                ) : null}
                <div className="flex items-center justify-between py-0.5">
                  <Skeleton className="h-3 w-24 rounded-md" />
                  <div className="flex gap-1">
                    <Skeleton className="h-6 w-6 rounded-md" />
                    <Skeleton className="h-6 w-6 rounded-md" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
