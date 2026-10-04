import { Card, CardContent, CardHeader } from "@/registry/bases/base/ui/card"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"

export function FaqCard() {
  return (
    <Card className="w-full" dir="rtl">
      <CardHeader>
        <Skeleton className="h-5 w-40 rounded-md" />
      </CardHeader>
      <CardContent className="flex flex-col">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex items-center justify-between border-b py-4 last:border-b-0"
          >
            <Skeleton className="h-4 w-[85%] rounded-md" />
            <Skeleton className="size-4 shrink-0 rounded-md" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
