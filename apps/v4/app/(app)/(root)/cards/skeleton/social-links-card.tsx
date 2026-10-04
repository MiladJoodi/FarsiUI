import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/bases/base/ui/card"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"

export function SocialLinksCard() {
  return (
    <Card className="w-full" dir="rtl">
      <CardHeader>
        <Skeleton className="h-5 w-36 rounded-md" />
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex flex-col gap-2">
            <Skeleton className="h-3 w-20 rounded-md" />
            <Skeleton className="h-9 w-full rounded-lg" />
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Skeleton className="h-9 w-full rounded-lg" />
      </CardFooter>
    </Card>
  )
}
