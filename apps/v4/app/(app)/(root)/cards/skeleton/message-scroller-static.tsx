import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/bases/base/ui/card"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"

export function MessageScrollerStatic() {
  return (
    <div dir="rtl" className="relative flex flex-col gap-4" aria-hidden>
      <Card className="mx-auto h-140 w-full max-w-sm gap-0">
        <CardHeader className="gap-1 border-b">
          <Skeleton className="h-5 w-28 rounded-md" />
          <Skeleton className="h-4 w-40 rounded-md" />
        </CardHeader>
        <CardContent className="flex-1 space-y-3 overflow-hidden p-4">
          <Skeleton className="ms-8 min-h-14 w-auto rounded-2xl bg-primary/12" />
          <Skeleton className="me-8 min-h-12 w-auto rounded-2xl" />
          <Skeleton className="ms-8 min-h-10 w-auto rounded-2xl bg-primary/12" />
          <Skeleton className="me-8 min-h-12 w-auto rounded-2xl" />
        </CardContent>
        <CardFooter className="border-t">
          <div className="flex w-full items-center gap-2">
            <Skeleton className="h-11 min-w-0 flex-1 rounded-full" />
            <Skeleton className="size-11 shrink-0 rounded-full bg-primary/25" />
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
