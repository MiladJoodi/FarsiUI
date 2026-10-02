import { cn } from "cn"

import { Button } from "@/registry/base-rhea/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/base-rhea/ui/empty"
import { Skeleton } from "@/registry/base-rhea/ui/skeleton"

export default function Page({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn(
        "flex min-h-[420px] items-center justify-center bg-muted p-6 text-foreground",
        className
      )}
      {...props}
    >
      <div className="w-full max-w-md space-y-3">
        <Skeleton className="h-8 w-2/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-32 w-full" />
        <p className="text-center text-sm text-muted-foreground">
          در حال بارگذاری
        </p>
      </div>
    </div>
  )
}
