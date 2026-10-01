import { cn } from "cn"
import { Button } from "@/registry/bases/base/ui/button"
import { Badge } from "@/registry/bases/base/ui/badge"

export default function Page({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn("bg-background text-foreground min-h-[200px] p-0", className)}
      {...props}
    >
      <header className="flex items-center justify-between border-b px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="font-bold">فارسی‌UI</span>
          <nav className="hidden items-center gap-4 text-sm text-muted-foreground md:flex">
            <a href="#" className="hover:text-foreground">محصولات</a>
            <a href="#" className="hover:text-foreground">قیمت‌ها</a>
            <a href="#" className="hover:text-foreground">مستندات</a>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">سربرگ</Badge>
          <Button size="sm">ورود</Button>
        </div>
      </header>
      <div className="p-8 text-sm text-muted-foreground">محتوای صفحه زیر نوار Header</div>
    </div>
  )
}
