import { cn } from "cn"
import { Button } from "@/registry/bases/base/ui/button"
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
