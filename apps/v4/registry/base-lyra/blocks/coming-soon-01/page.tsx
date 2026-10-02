import { cn } from "cn"

import { Badge } from "@/registry/base-lyra/ui/badge"
import { Button } from "@/registry/base-lyra/ui/button"

export default function Page({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn(
        "relative flex min-h-[480px] flex-col justify-end overflow-hidden bg-muted bg-gradient-to-b from-muted/40 to-background p-8 text-foreground md:p-12",
        className
      )}
      {...props}
    >
      <Badge className="mb-3 w-fit">جدید</Badge>
      <h1 className="max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
        به‌زودی
      </h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        بلوک Coming Soon با چیدمان راست‌چین و تمرکز روی یک پیام اصلی و یک گروه
        دکمه.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button size="lg">شروع کنید</Button>
        <Button size="lg" variant="outline">
          بیشتر بدانید
        </Button>
      </div>
    </div>
  )
}
