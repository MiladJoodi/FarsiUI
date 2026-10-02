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
          <EmptyTitle>نتیجه‌ای پیدا نشد</EmptyTitle>
          <EmptyDescription>هنوز موردی برای نمایش وجود ندارد.</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>بازگشت</Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}
