import { cn } from "cn"
import { Button } from "@/registry/bases/base/ui/button"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/bases/base/ui/empty"

export default function Page({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn("bg-background text-foreground flex min-h-[420px] items-center justify-center p-6", className)}
      {...props}
    >
      <div className="w-full max-w-md space-y-3">
        <Skeleton className="h-8 w-2/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-32 w-full" />
        <p className="text-center text-sm text-muted-foreground">در حال بارگذاری</p>
      </div>
    </div>
  )
}
