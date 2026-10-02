import { cn } from "cn"

import { Badge } from "@/registry/base-nova/ui/badge"
import { Button } from "@/registry/base-nova/ui/button"

export default function Page({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn(
        "flex min-h-[480px] flex-col items-center justify-center gap-6 bg-muted bg-[radial-gradient(ellipse_at_top,_var(--muted)_0%,_transparent_55%)] p-8 text-center text-foreground",
        className
      )}
      {...props}
    >
      <Badge variant="secondary">Coming Soon</Badge>
      <h1 className="max-w-xl text-4xl font-bold tracking-tight">به‌زودی</h1>
      <p className="max-w-md text-muted-foreground">
        نسخهٔ دوم با مرکز صفحه و تاکید بصری ملایم.
      </p>
      <Button size="lg">ادامه</Button>
    </div>
  )
}
