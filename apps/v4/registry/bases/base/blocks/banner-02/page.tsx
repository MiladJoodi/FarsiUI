import { cn } from "cn"
import { Button } from "@/registry/bases/base/ui/button"
import { Badge } from "@/registry/bases/base/ui/badge"

export default function Page({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn("bg-background text-foreground flex min-h-[480px] flex-col items-center justify-center gap-6 bg-[radial-gradient(ellipse_at_top,_var(--muted)_0%,_transparent_55%)] p-8 text-center", className)}
      {...props}
    >
      <Badge variant="secondary">Banner</Badge>
      <h1 className="max-w-xl text-4xl font-bold tracking-tight">بنر</h1>
      <p className="max-w-md text-muted-foreground">نسخهٔ دوم با مرکز صفحه و تاکید بصری ملایم.</p>
      <Button size="lg">ادامه</Button>
    </div>
  )
}
