import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/bases/base/ui/card"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"

export function InviteTeamCard() {
  return (
    <Card className="w-full" dir="rtl">
      <CardHeader className="gap-2">
        <Skeleton className="h-5 w-32 rounded-md" />
        <Skeleton className="h-4 w-48 rounded-md" />
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <Skeleton className="h-9 flex-1 rounded-lg" />
              <Skeleton className="h-9 w-28 rounded-lg" />
            </div>
          ))}
        </div>
        <Skeleton className="h-9 w-40 rounded-lg" />
        <Skeleton className="h-px w-full rounded-none" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-9 w-full rounded-lg" />
      </CardFooter>
    </Card>
  )
}
