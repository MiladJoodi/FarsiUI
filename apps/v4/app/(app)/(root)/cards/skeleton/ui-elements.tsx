import { Card, CardContent } from "@/registry/bases/base/ui/card"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"

export function UIElements() {
  return (
    <Card className="w-full">
      <CardContent className="flex flex-col gap-6">
        <div className="flex gap-2">
          <Skeleton className="h-9 w-20 rounded-lg" />
          <Skeleton className="h-9 w-24 rounded-lg" />
          <Skeleton className="h-9 w-20 rounded-lg" />
        </div>
        <div className="flex flex-col gap-3">
          <Skeleton className="h-9 w-full rounded-lg" />
          <Skeleton className="h-20 w-full rounded-lg" />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <Skeleton className="h-5 w-12 rounded-full" />
            <Skeleton className="h-5 w-16 rounded-full" />
            <Skeleton className="hidden h-5 w-14 rounded-full 4xl:block" />
          </div>
          <div className="ms-auto flex gap-3">
            <Skeleton className="size-4 rounded-full" />
            <Skeleton className="size-4 rounded-full" />
          </div>
          <div className="flex gap-3">
            <Skeleton className="size-4 rounded-sm" />
            <Skeleton className="hidden size-4 rounded-sm 4xl:block" />
          </div>
          <Skeleton className="h-5 w-9 rounded-full 4xl:hidden" />
        </div>
        <div className="flex items-center gap-4">
          <Skeleton className="h-9 w-24 rounded-lg" />
          <div className="ms-auto flex">
            <Skeleton className="h-9 w-28 rounded-s-lg rounded-e-none" />
            <Skeleton className="ms-px h-9 w-9 rounded-s-none rounded-e-lg" />
          </div>
          <Skeleton className="hidden h-5 w-9 rounded-full 4xl:block" />
        </div>
      </CardContent>
    </Card>
  )
}
