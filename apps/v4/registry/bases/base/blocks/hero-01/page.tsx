import { cn } from "cn"
import { Button } from "@/registry/bases/base/ui/button"
import { Badge } from "@/registry/bases/base/ui/badge"

export default function Page({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn("bg-background text-foreground relative flex min-h-[480px] flex-col justify-end overflow-hidden bg-gradient-to-b from-muted/40 to-background p-8 md:p-12", className)}
      {...props}
    >
      <Badge className="mb-3 w-fit">جدید</Badge>
      <h1 className="max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">معرفی</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        بلوک Hero با چیدمان راست‌چین و تمرکز روی یک پیام اصلی و یک گروه دکمه.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button size="lg">شروع کنید</Button>
        <Button size="lg" variant="outline">بیشتر بدانید</Button>
      </div>
    </div>
  )
}
