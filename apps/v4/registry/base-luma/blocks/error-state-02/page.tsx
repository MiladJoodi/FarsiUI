import { cn } from "cn"

import { Button } from "@/registry/base-luma/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/base-luma/ui/empty"

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
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon" />
          <EmptyTitle>حالت خطا</EmptyTitle>
          <EmptyDescription>
            مشکلی پیش آمد. لطفاً دوباره تلاش کنید.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>تلاش مجدد</Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}
