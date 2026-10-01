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
          <EmptyTitle>موفقیت</EmptyTitle>
          <EmptyDescription>
            عملیات با موفقیت انجام شد.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>بازگشت</Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}
