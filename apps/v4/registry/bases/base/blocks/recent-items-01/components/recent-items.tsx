import { Badge } from "@/registry/bases/base/ui/badge"

const ITEMS = [
  { title: "داشبورد فروش", meta: "۲ دقیقه پیش", type: "صفحه" },
  { title: "گزارش ماهانه", meta: "۱ ساعت پیش", type: "سند" },
  { title: "لیست مشتریان", meta: "دیروز", type: "جدول" },
  { title: "تنظیمات حساب", meta: "۳ روز پیش", type: "صفحه" },
] as const

export function RecentItemsSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">موارد اخیراً بازشده</h2>
        <p className="mt-1 text-sm text-muted-foreground">لیست ساده بدون فیلتر</p>
      </div>

      <ul className="divide-y overflow-hidden rounded-xl border bg-card">
        {ITEMS.map((item) => (
          <li key={item.title} className="flex items-center gap-3 p-4">
            <div className="min-w-0 flex-1 space-y-1">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-medium leading-snug">{item.title}</p>
                <span className="shrink-0 text-xs text-muted-foreground">
                  {item.meta}
                </span>
              </div>
            </div>
            <Badge variant="outline" className="shrink-0 border">
              {item.type}
            </Badge>
          </li>
        ))}
      </ul>
    </section>
  )
}
