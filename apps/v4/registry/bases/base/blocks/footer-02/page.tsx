import { cn } from "cn"
import { Separator } from "@/registry/bases/base/ui/separator"

export default function Page({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn("bg-background text-foreground min-h-[240px] p-0", className)}
      {...props}
    >
      <div className="flex-1 p-8 text-sm text-muted-foreground">محتوای اصلی</div>
      <footer className="border-t bg-muted/30 px-6 py-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <p className="font-semibold">فارسی‌UI</p>
            <p className="mt-2 text-sm text-muted-foreground">پابرگ</p>
          </div>
          <div className="text-sm">
            <p className="font-medium">لینک‌ها</p>
            <ul className="mt-2 space-y-1 text-muted-foreground">
              <li>مستندات</li>
              <li>بلاک‌ها</li>
              <li>قیمت‌گذاری</li>
            </ul>
          </div>
          <div className="text-sm text-muted-foreground">© ۱۴۰۴ همه حقوق محفوظ است</div>
        </div>
      </footer>
    </div>
  )
}
